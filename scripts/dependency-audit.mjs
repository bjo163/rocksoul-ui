import { readFile } from "node:fs/promises"
import { spawnSync } from "node:child_process"
import path from "node:path"

const root = process.cwd()
const failures = []
const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
const lock = JSON.parse(await readFile(path.join(root, "package-lock.json"), "utf8"))
const notices = await readFile(path.join(root, "THIRD-PARTY-NOTICES.md"), "utf8")

if (pkg.packageManager !== "npm@11.6.0") failures.push(`packageManager must be npm@11.6.0, found ${pkg.packageManager ?? "missing"}`)
if (lock.lockfileVersion !== 3) failures.push(`package-lock lockfileVersion must be 3, found ${lock.lockfileVersion}`)
if (lock.packages?.[""]?.name !== pkg.name) failures.push("package-lock root name differs from package.json")
if (lock.packages?.[""]?.version !== pkg.version) failures.push("package-lock root version differs from package.json")

const direct = {
  ...(pkg.dependencies ?? {}),
  ...(pkg.devDependencies ?? {}),
}
const lockedRoot = lock.packages?.[""] ?? {}
for (const [name, range] of Object.entries(direct)) {
  const locked = lockedRoot.dependencies?.[name] ?? lockedRoot.devDependencies?.[name]
  if (locked !== range) failures.push(`${name}: package.json range ${range} != lockfile root ${locked ?? "missing"}`)
}

const runtimeVersions = new Map()
for (const [key, entry] of Object.entries(lock.packages ?? {})) {
  if (!key.startsWith("node_modules/") || !entry?.version) continue
  const name = key.slice("node_modules/".length)
  if (name === "react" || name === "react-dom") {
    const versions = runtimeVersions.get(name) ?? new Set()
    versions.add(entry.version)
    runtimeVersions.set(name, versions)
  }
}
for (const name of ["react", "react-dom"]) {
  const versions = [...(runtimeVersions.get(name) ?? [])]
  if (versions.length !== 1) failures.push(`${name}: expected one locked runtime version, found ${versions.join(", ") || "none"}`)
  if (versions.length === 1 && !versions[0].startsWith("19.")) failures.push(`${name}: unsupported major version ${versions[0]}`)
}

const inventory = new Map()
for (const line of notices.split(/\r?\n/)) {
  const match = /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*$/.exec(line)
  if (!match) continue
  const [, name, license] = match
  if (name === "Package" || name === "---") continue
  if (inventory.has(name)) failures.push(`THIRD-PARTY-NOTICES.md duplicates package ${name}`)
  inventory.set(name, license)
}

for (const name of Object.keys(direct)) {
  const packagePath = path.join(root, "node_modules", ...name.split("/"), "package.json")
  try {
    const installed = JSON.parse(await readFile(packagePath, "utf8"))
    const installedLicense = installed.license ?? installed.licenses?.[0]?.type
    if (!installedLicense) failures.push(`${name}: installed package declares no license metadata`)
    const documentedLicense = inventory.get(name)
    if (!documentedLicense) failures.push(`${name}: missing machine-checkable license inventory entry`)
    else if (installedLicense && documentedLicense !== installedLicense) {
      failures.push(`${name}: documented license ${documentedLicense} != installed license ${installedLicense}`)
    }
  } catch {
    failures.push(`${name}: installed package metadata missing; npm ci graph is incomplete`)
  }
}

for (const name of inventory.keys()) {
  if (!(name in direct)) failures.push(`${name}: THIRD-PARTY-NOTICES.md inventories a non-direct dependency`)
}

const audit = spawnSync("npm", ["audit", "--json", "--audit-level=high"], {
  cwd: root,
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
})
if (audit.error) failures.push(`npm audit could not execute: ${audit.error.message}`)
else {
  try {
    const report = JSON.parse(audit.stdout || "{}")
    const metadata = report.metadata ?? {}
    const high = Number(metadata.vulnerabilities?.high ?? 0)
    const critical = Number(metadata.vulnerabilities?.critical ?? 0)
    if (high > 0 || critical > 0) failures.push(`npm audit reports high=${high}, critical=${critical}`)
  } catch {
    failures.push("npm audit returned non-JSON output")
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Dependency audit passed: npm/lock graph consistent, React runtime singleton verified, direct dependency licenses match machine-readable notices, high/critical vulnerabilities clear.")
