import { access, readFile } from "node:fs/promises"
import path from "node:path"
import { execFileSync } from "node:child_process"

const root = process.cwd()
const failures = []
const warnings = []

const exists = async (relativePath) => {
  try { await access(path.join(root, relativePath)); return true } catch { return false }
}
const readText = async (relativePath) => readFile(path.join(root, relativePath), "utf8")
const git = (args) => {
  try { return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim() } catch { return "" }
}

const pkg = JSON.parse(await readText("package.json"))
const repo = JSON.parse(await readText("ROCKSOUL-REPO.json"))
const changelog = await readText("CHANGELOG.md")
const releaseAudit = await readText("scripts/release-audit.mjs")

if (repo.schema !== "rocksoul.repository.v2") failures.push(`ROCKSOUL-REPO schema: ${repo.schema}`)
if (repo.repository_id !== "rocksoul-ui") failures.push(`repository identity: ${repo.repository_id}`)
if (repo.github_repository !== "rocksoul-ui") failures.push(`github repository identity: ${repo.github_repository}`)
if (repo.governance?.contract_mode !== "strict") failures.push("strict repository governance is not enabled")
if (repo.governance?.canonical_package_manager !== "npm") failures.push("canonical package manager must be npm")
if (repo.governance?.canonical_lockfile !== "package-lock.json") failures.push("canonical lockfile must be package-lock.json")
if (repo.governance?.unknown_drift !== "block") failures.push("unknown drift must block")

const lockfiles = []
if (await exists("package-lock.json")) lockfiles.push("package-lock.json")
if (await exists("pnpm-lock.yaml")) lockfiles.push("pnpm-lock.yaml")
if (lockfiles.length !== 1 || lockfiles[0] !== "package-lock.json") failures.push(`canonical lockfile violation: ${lockfiles.join(", ") || "none"}`)
if (await exists("pnpm-workspace.yaml")) failures.push("pnpm-workspace.yaml must not exist in npm-only repository")

if (pkg.name !== "@rocksoul/ui") failures.push(`package name: ${pkg.name}`)
if (typeof pkg.version !== "string" || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(pkg.version)) failures.push(`invalid package version: ${pkg.version}`)
if (pkg.private !== true) failures.push("package must remain private for Git dependency distribution")

if (pkg.version && releaseAudit.includes(pkg.version)) failures.push("release-audit.mjs contains the current package version literally")
const exactHeadTag = git(["describe", "--tags", "--exact-match", "HEAD"])
if (exactHeadTag && exactHeadTag !== `v${pkg.version}`) failures.push(`HEAD tag ${exactHeadTag} does not match package version v${pkg.version}`)

if (!changelog.includes(`## v${pkg.version}`) && !changelog.includes(`## ${pkg.version}`)) {
  if (!changelog.includes("## Unreleased")) failures.push(`CHANGELOG missing v${pkg.version} and Unreleased policy section`)
  else warnings.push(`CHANGELOG contains Unreleased without explicit v${pkg.version} heading`)
}

for (const required of ["ROCKSOUL-REPO.json", "ROCKSOUL-TODO.json", "README.md", "CHANGELOG.md", ".github/workflows/ci.yml", "docs/UI-ARCHITECTURE.md", "docs/UI-ARCHITECTURE-RULES.md", "docs/ui-component-inventory.json"]) {
  if (!(await exists(required))) failures.push(`missing required governance file: ${required}`)
}

const ci = await readText(".github/workflows/ci.yml")
for (const required of ["npm ci --no-audit --no-fund", "git diff --exit-code -- dist", "npm run audit:repository"]) {
  if (!ci.includes(required)) failures.push(`CI missing strict gate: ${required}`)
}

const packageLock = JSON.parse(await readText("package-lock.json"))
if (packageLock.lockfileVersion !== 3) failures.push(`package-lock lockfileVersion must be 3, got ${packageLock.lockfileVersion}`)
if (packageLock.packages?.[""]?.version !== pkg.version) failures.push("package-lock root version mismatch")
if (packageLock.packages?.[""]?.name !== pkg.name) failures.push("package-lock root package name mismatch")

if (failures.length) {
  console.error("Strict repository audit failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  if (warnings.length) { console.error("Warnings:"); warnings.forEach((warning) => console.error(`- ${warning}`)) }
  process.exit(1)
}

console.log("Strict repository audit passed.")
console.log(`- package: ${pkg.name}@${pkg.version}`)
console.log("- package manager: npm")
console.log("- lockfile: package-lock.json")
console.log(`- HEAD tag: ${exactHeadTag || "untagged"}`)
for (const warning of warnings) console.warn(`WARN: ${warning}`)
