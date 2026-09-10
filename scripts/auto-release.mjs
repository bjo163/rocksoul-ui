import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"

const root = process.cwd()
const packagePath = `${root}/package.json`
const lockPath = `${root}/package-lock.json`
const changelogPath = `${root}/CHANGELOG.md`

const run = (command, args, options = {}) => execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], ...options }).trim()
const latestTag = (() => {
  try { return run("git", ["describe", "--tags", "--abbrev=0", "--match", "v[0-9]*"]) } catch { return "" }
})()

const range = latestTag ? `${latestTag}..HEAD` : "HEAD"
const subjects = run("git", ["log", "--format=%s", range]).split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
const body = run("git", ["log", "--format=%B%x00", range]).split("\0").map((s) => s.trim()).filter(Boolean).join("\n")

if (subjects.length === 0) {
  console.log("No commits since latest release; nothing to release.")
  process.exit(0)
}

const breaking = /(^|\n)\s*(BREAKING CHANGE|BREAKING-CHANGE)\s*:/m.test(body) || subjects.some((s) => /^[a-z]+(?:\([^)]*\))?!:/.test(s))
const minor = subjects.some((s) => /^feat(?:\([^)]*\))?:/.test(s))
const current = JSON.parse(readFileSync(packagePath, "utf8"))
const [major, minorVersion, patch] = String(current.version).split("-")[0].split(".").map(Number)
let next
if (breaking) next = `${major + 1}.0.0`
else if (minor) next = `${major}.${minorVersion + 1}.0`
else next = `${major}.${minorVersion}.${patch + 1}`

const nextTag = `v${next}`
try {
  run("git", ["rev-parse", "--verify", `refs/tags/${nextTag}`])
  console.error(`Release ${nextTag} already exists.`)
  process.exit(1)
} catch {}

current.version = next
writeFileSync(packagePath, `${JSON.stringify(current, null, 2)}\n`)

const lock = JSON.parse(readFileSync(lockPath, "utf8"))
if (lock.version !== 3) throw new Error(`Unsupported package-lock version: ${lock.version}`)
if (!lock.packages || !lock.packages[""]) throw new Error("package-lock root package metadata missing")
lock.packages[""].version = next
writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`)

const notes = subjects.slice(0, 30).map((subject) => `- ${subject}`).join("\n")
const changelog = readFileSync(changelogPath, "utf8")
const marker = "## Unreleased"
if (!changelog.includes(marker)) throw new Error("CHANGELOG.md is missing the Unreleased section")
const insertion = `${marker}\n\nChanges targeting the next release only. Release-specific changes move here automatically when the version is cut.\n\n## ${nextTag}\n\n${notes}\n`
const updatedChangelog = changelog.replace(/^## Unreleased[\s\S]*?(?=\n## v|\Z)/m, insertion)
writeFileSync(changelogPath, updatedChangelog)

console.log(`Auto release candidate: ${current.version} -> ${next}`)
console.log(`Tag: ${nextTag}`)
console.log(`Commits considered: ${subjects.length}`)
