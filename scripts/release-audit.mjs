import { access, readFile } from "node:fs/promises"
import path from "node:path"
import { execFileSync } from "node:child_process"

const root = process.cwd()
const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
const changelog = await readFile(path.join(root, "CHANGELOG.md"), "utf8"))
const failures = []

function git(args) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim()
  } catch {
    return ""
  }
}

const version = typeof pkg.version === "string" ? pkg.version : ""
const tag = git(["describe", "--tags", "--exact-match", "HEAD"])
const expectedTag = version ? `v${version}` : ""

if (pkg.name !== "@rocksoul/ui") failures.push("package name")
if (!version) failures.push("package version")
if (pkg.private !== true) failures.push("GitHub-distributed package must remain private/non-npm")
if (pkg.packageManager !== "npm@11.6.0") failures.push("canonical package manager")
if (pkg.scripts?.prepare !== "npm run build:lib") failures.push("Git dependency prepare hook")

if (tag && tag !== expectedTag) failures.push(`release tag ${tag} != ${expectedTag}`)
if (!changelog.includes(`## ${expectedTag}`)) failures.push(`changelog missing release heading ${expectedTag}`)

for (const file of ["dist/index.js", "dist/index.d.ts", "dist/styles.css"]) {
  try {
    await access(path.join(root, file))
  } catch {
    failures.push(`release artifact ${file}`)
  }
}

const auditSource = await readFile(new URL(import.meta.url), "utf8")
if (auditSource.includes("0.12.5")) failures.push("release audit must not hard-code current version")

if (failures.length) {
  console.error("Release closure audit failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Release closure audit passed: ${pkg.name} ${version} / tag ${tag || "untagged"}.`)
