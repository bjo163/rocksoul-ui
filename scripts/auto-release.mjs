import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"

const root = process.cwd()
const packagePath = `${root}/package.json`
const lockPath = `${root}/package-lock.json`
const changelogPath = `${root}/CHANGELOG.md`
const planOnly = process.argv.includes("--plan")

const run = (command, args, options = {}) => execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], ...options }).trim()
const latestTag = (() => {
  try { return run("git", ["describe", "--tags", "--abbrev=0", "--match", "v[0-9]*"]) } catch { return "" }
})()

const range = latestTag ? `${latestTag}..HEAD` : "HEAD"
const subjects = run("git", ["log", "--format=%s", range]).split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
const body = run("git", ["log", "--format=%B%x00", range]).split("\0").map((s) => s.trim()).filter(Boolean).join("\n")

const current = JSON.parse(readFileSync(packagePath, "utf8"))
const previousVersion = String(current.version)
const parts = previousVersion.split("-")[0].split(".").map(Number)
if (parts.length !== 3 || parts.some((part) => !Number.isInteger(part) || part < 0)) {
  throw new Error(`Invalid semantic package version: ${previousVersion}`)
}
const [major, minorVersion, patch] = parts

if (subjects.length === 0) {
  if (planOnly) {
    console.log("release=false")
  } else {
    console.log("No commits since latest release; nothing to release.")
  }
  process.exit(0)
}

const breaking = /(^|\n)\s*(BREAKING CHANGE|BREAKING-CHANGE)\s*:/m.test(body) || subjects.some((s) => /^[a-z]+(?:\([^)]*\))?!:/.test(s))
const minor = subjects.some((s) => /^feat(?:\([^)]*\))?:/.test(s))
let next
let bump
if (breaking) {
  bump = "major"
  next = `${major + 1}.0.0`
} else if (minor) {
  bump = "minor"
  next = `${major}.${minorVersion + 1}.0`
} else {
  bump = "patch"
  next = `${major}.${minorVersion}.${patch + 1}`
}

const nextTag = `v${next}`
try {
  execFileSync("git", ["rev-parse", "--verify", `refs/tags/${nextTag}`], { stdio: "ignore" })
  console.error(`Release ${nextTag} already exists.`)
  process.exit(1)
} catch {}

if (planOnly) {
  console.log(`release=true`)
  console.log(`current=${previousVersion}`)
  console.log(`next=${next}`)
  console.log(`tag=${nextTag}`)
  console.log(`bump=${bump}`)
  process.exit(0)
}

current.version = next
writeFileSync(packagePath, `${JSON.stringify(current, null, 2)}\n`)

const lock = JSON.parse(readFileSync(lockPath, "utf8"))
if (lock.lockfileVersion !== 3) throw new Error(`Unsupported package-lock lockfileVersion: ${lock.lockfileVersion}`)
if (!lock.packages || !lock.packages[""]) throw new Error("package-lock root package metadata missing")
lock.version = next
lock.packages[""].version = next
writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`)

const notes = subjects.slice(0, 30).map((subject) => `- ${subject}`).join("\n")
const changelog = readFileSync(changelogPath, "utf8")
const marker = "## Unreleased"
if (!changelog.includes(marker)) throw new Error("CHANGELOG.md is missing the Unreleased section")
const sectionEnd = changelog.indexOf("\n## ", changelog.indexOf(marker) + marker.length)
const prefixEnd = sectionEnd === -1 ? changelog.length : sectionEnd
const unreleasedBody = changelog.slice(changelog.indexOf(marker) + marker.length, prefixEnd).trim()
const newSection = `## ${nextTag}\n\n${notes || unreleasedBody}`
const updatedChangelog = `${changelog.slice(0, changelog.indexOf(marker))}${marker}\n\nChanges targeting the next release only. Release-specific changes move here automatically when the version is cut.\n\n${newSection}\n${changelog.slice(prefixEnd)}`
writeFileSync(changelogPath, updatedChangelog)

console.log(`Auto release candidate: ${previousVersion} -> ${next}`)
console.log(`Tag: ${nextTag}`)
console.log(`Commits considered: ${subjects.length}`)
