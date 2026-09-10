import { access, readFile } from "node:fs/promises"
import path from "node:path"
import { execFileSync } from "node:child_process"

const root = process.cwd()
const failures = []
const warnings = []
const exists = async (p) => { try { await access(path.join(root, p)); return true } catch { return false } }
const readText = async (p) => readFile(path.join(root, p), "utf8")
const git = (args) => { try { return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim() } catch { return "" } }

const pkg = JSON.parse(await readText("package.json"))
const lock = JSON.parse(await readText("package-lock.json"))
const repo = JSON.parse(await readText("ROCKSOUL-REPO.json"))
const changelog = await readText("CHANGELOG.md")
const releaseAudit = await readText("scripts/release-audit.mjs")
const ci = await readText(".github/workflows/ci.yml")

if (repo.schema !== "rocksoul.repository.v2") failures.push(`ROCKSOUL-REPO schema: ${repo.schema}`)
if (repo.repository_id !== "rocksoul-ui") failures.push(`repository identity: ${repo.repository_id}`)
if (repo.github_repository !== "rocksoul-ui") failures.push(`github repository identity: ${repo.github_repository}`)
if (repo.governance?.contract_mode !== "strict") failures.push("strict repository governance is not enabled")
if (repo.governance?.canonical_package_manager !== "npm") failures.push("canonical package manager must be npm")
if (repo.governance?.canonical_lockfile !== "package-lock.json") failures.push("canonical lockfile must be package-lock.json")
if (repo.governance?.unknown_drift !== "block") failures.push("unknown drift must block")

const packageLockExists = await exists("package-lock.json")
const pnpmLockExists = await exists("pnpm-lock.yaml")
const pnpmWorkspaceExists = await exists("pnpm-workspace.yaml")
if (!packageLockExists || pnpmLockExists) failures.push("exactly one canonical lockfile must exist: package-lock.json")
if (pnpmWorkspaceExists) failures.push("pnpm-workspace.yaml is forbidden under npm-only governance")

if (pkg.name !== "@rocksoul/ui") failures.push(`package name: ${pkg.name}`)
if (typeof pkg.version !== "string" || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(pkg.version)) failures.push(`invalid package version: ${pkg.version}`)
if (pkg.private !== true) failures.push("package must remain private for Git dependency distribution")
if (lock.lockfileVersion !== 3) failures.push(`package-lock lockfileVersion must be 3, got ${lock.lockfileVersion}`)
if (lock.packages?.[""]?.version !== pkg.version) failures.push("package-lock root version mismatch")
if (lock.packages?.[""]?.name !== pkg.name) failures.push("package-lock root package name mismatch")

if (releaseAudit.includes(pkg.version)) failures.push("release-audit.mjs contains current package version literally")
const exactHeadTag = git(["describe", "--tags", "--exact-match", "HEAD"])
if (exactHeadTag && exactHeadTag !== `v${pkg.version}`) failures.push(`HEAD tag ${exactHeadTag} != v${pkg.version}`)
if (!changelog.includes(`## v${pkg.version}`) && !changelog.includes(`## ${pkg.version}`)) warnings.push(`CHANGELOG does not yet have a v${pkg.version} heading; Unreleased policy is required before publish`)

for (const required of ["ROCKSOUL-REPO.json", "ROCKSOUL-TODO.json", "README.md", "CHANGELOG.md", ".github/workflows/ci.yml", "docs/UI-ARCHITECTURE.md", "docs/UI-ARCHITECTURE-RULES.md", "docs/ui-component-inventory.json"]) {
  if (!(await exists(required))) failures.push(`missing governance file: ${required}`)
}

for (const requiredStep of ["npm ci --no-audit --no-fund", "git diff --exit-code -- dist", "npm run audit:repository"]) {
  if (!ci.includes(requiredStep)) failures.push(`CI missing strict gate: ${requiredStep}`)
}

if (failures.length) {
  console.error("Strict repository audit failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  warnings.forEach((warning) => console.error(`WARN: ${warning}`))
  process.exit(1)
}

console.log("Strict repository audit passed.")
console.log(`- package: ${pkg.name}@${pkg.version}`)
console.log("- package manager: npm")
console.log("- lockfile: package-lock.json")
console.log(`- HEAD tag: ${exactHeadTag || "untagged"}`)
warnings.forEach((warning) => console.warn(`WARN: ${warning}`))
