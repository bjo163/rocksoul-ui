import { access, readdir, readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const sourceRoot = path.join(root, "src")
const distRoot = path.join(root, "dist")
const forbiddenDirectories = new Set(["common", "shared", "misc", "helpers", "widgets"])
const levels = new Map([
  ["foundation", 0],
  ["primitives", 1],
  ["atoms", 2],
  ["molecules", 3],
  ["organisms", 4],
  ["templates", 5],
])
const failures = []
const sourceFiles = new Map()
const basenameOwners = new Map()

const exists = async file => {
  try { await access(file); return true } catch { return false }
}

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (forbiddenDirectories.has(entry.name.toLowerCase())) {
        failures.push(`${path.relative(root, file)}: ambiguous component ownership directory`)
      }
      await walk(file)
      continue
    }
    if (!/\.(?:c|m)?(?:t|j)sx?$/.test(entry.name)) continue
    const relative = path.relative(sourceRoot, file).split(path.sep).join("/")
    const withoutExtension = relative.replace(/\.(?:c|m)?(?:t|j)sx?$/, "")
    sourceFiles.set(withoutExtension, file)
    const owner = levels.get(relative.split("/")[0])
    const basename = path.basename(withoutExtension).toLowerCase()
    if (owner !== undefined && basename !== "index") {
      const owners = basenameOwners.get(basename) ?? []
      owners.push(relative)
      basenameOwners.set(basename, owners)
    }
  }
}

function levelFor(file) {
  const firstDirectory = path.relative(sourceRoot, file).split(path.sep)[0]
  return levels.get(firstDirectory)
}

async function resolveSource(from, specifier, aliases) {
  const raw = specifier.replace(/\\/g, "/")
  const candidates = []
  if (raw.startsWith(".")) candidates.push(path.resolve(path.dirname(from), raw))
  for (const [alias, targets] of aliases) {
    const prefix = alias.replace("/*", "")
    if (!raw.startsWith(prefix)) continue
    const suffix = raw.slice(prefix.length).replace(/^\//, "")
    for (const target of targets) candidates.push(path.resolve(root, target.replace("/*", ""), suffix))
  }
  for (const candidate of candidates) {
    for (const extension of [".ts", ".tsx", ".js", ".jsx", ".mjs"]) {
      if (await exists(`${candidate}${extension}`)) return `${candidate}${extension}`
    }
    for (const extension of [".ts", ".tsx", ".js", ".jsx", ".mjs"]) {
      const index = path.join(candidate, `index${extension}`)
      if (await exists(index)) return index
    }
  }
  return null
}

const tsconfig = JSON.parse(await readFile(path.join(root, "tsconfig.json"), "utf8"))
const inventory = JSON.parse(await readFile(path.join(root, "docs/ui-component-inventory.json"), "utf8"))
const aliases = new Map(Object.entries(tsconfig.compilerOptions?.paths ?? {}))
const documentedOverlap = JSON.stringify(inventory.overlapDecisions ?? [])

await walk(sourceRoot)

for (const [name, owners] of basenameOwners) {
  const uniqueLayers = new Set(owners.map(file => file.split("/")[0]))
  const explicitlyDocumented = owners.every(file => documentedOverlap.includes(file))
  if (owners.length > 1 && uniqueLayers.size > 1 && !explicitlyDocumented) {
    failures.push(`${owners.join(", ")}: duplicate component basename across layers without overlap decision`)
  }
}

for (const file of sourceFiles.values()) {
  const source = await readFile(file, "utf8")
  const ownerLevel = levelFor(file)
  if (ownerLevel === undefined) continue
  for (const match of source.matchAll(/(?:from|import)\s*["']([^"']+)["']/g)) {
    const dependency = await resolveSource(file, match[1], aliases)
    if (!dependency || !dependency.startsWith(sourceRoot)) continue
    const dependencyLevel = levelFor(dependency)
    if (dependencyLevel !== undefined && dependencyLevel > ownerLevel) {
      failures.push(`${path.relative(root, file)}: imports higher layer ${path.relative(root, dependency)}`)
    }
  }
  for (const match of source.matchAll(/export\s+(?:\*|\{[^}]+\})\s+from\s+["']([^"']+)["']/g)) {
    const exported = await resolveSource(file, match[1], aliases)
    if (!exported) failures.push(`${path.relative(root, file)}: orphan barrel re-export ${match[1]}`)
  }
}

const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
for (const [key, value] of Object.entries(pkg.exports ?? {})) {
  if (key.includes("*")) continue
  if (key === "./package.json") continue
  const entries = typeof value === "string" ? { import: value } : value
  for (const target of Object.values(entries)) {
    if (typeof target !== "string") continue
    const clean = target.replace(/^\.\//, "")
    if (clean.startsWith("dist/") && !(await exists(path.join(root, clean)))) {
      failures.push(`package export ${key}: missing generated artifact ${clean}`)
    }
  }
}

if (!(await exists(path.join(sourceRoot, "index.ts")))) failures.push("src/index.ts: missing canonical package source entry")
if (!(await exists(path.join(distRoot, "index.js")))) failures.push("dist/index.js: missing generated package entry")
if (!(await exists(path.join(distRoot, "index.d.ts")))) failures.push("dist/index.d.ts: missing generated type entry")

for (const document of ["docs/UI-ARCHITECTURE.md", "docs/UI-ARCHITECTURE-RULES.md", "docs/ui-component-inventory.json"]) {
  if (!(await exists(path.join(root, document)))) failures.push(`${document}: missing required architecture document`)
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log(`Architecture audit passed: ${sourceFiles.size} source entries, ${basenameOwners.size} owned component names, aliases/barrels/export map clean.`)
