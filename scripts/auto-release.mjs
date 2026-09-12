import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { calculateReleasePlan } from "./release-plan.mjs"

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
const plan = calculateReleasePlan({
  previousVersion,
  subjects,
  body,
  tagExists: (tag) => {
    try {
      execFileSync("git", ["rev-parse", "--verify", `refs/tags/${tag}`], { stdio: "ignore" })
      return true
    } catch {
      return false
    }
  },
})

if (!plan.release) {
  if (planOnly) console.log("release=false")
  else console.log("No commits since latest release; nothing to release.")
  process.exit(0)
}

if (planOnly) {
  console.log("release=true")
  console.log(`current=${plan.current}`)
  console.log(`next=${plan.next}`)
  console.log(`tag=${plan.tag}`)
  console.log(`bump=${plan.bump}`)
  process.exit(0)
}

current.version = plan.next
writeFileSync(packagePath, `${JSON.stringify(current, null, 2)}\n`)

const lock = JSON.parse(readFileSync(lockPath, "utf8"))
if (lock.lockfileVersion !== 3) throw new Error(`Unsupported package-lock lockfileVersion: ${lock.lockfileVersion}`)
if (!lock.packages || !lock.packages[""]) throw new Error("package-lock root package metadata missing")
lock.version = plan.next
lock.packages[""].version = plan.next
writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`)

const notes = subjects.slice(0, 30).map((subject) => `- ${subject}`).join("\n")
const changelog = readFileSync(changelogPath, "utf8")
const marker = "## Unreleased"
if (!changelog.includes(marker)) throw new Error("CHANGELOG.md is missing the Unreleased section")
const markerIndex = changelog.indexOf(marker)
const sectionEnd = changelog.indexOf("\n## ", markerIndex + marker.length)
const prefixEnd = sectionEnd === -1 ? changelog.length : sectionEnd
const unreleasedBody = changelog.slice(markerIndex + marker.length, prefixEnd).trim()
const newSection = `## ${plan.tag}\n\n${notes || unreleasedBody}`
const updatedChangelog = `${changelog.slice(0, markerIndex)}${marker}\n\nChanges targeting the next release only. Release-specific changes move here automatically when the version is cut.\n\n${newSection}\n${changelog.slice(prefixEnd)}`
writeFileSync(changelogPath, updatedChangelog)

console.log(`Auto release candidate: ${plan.current} -> ${plan.next}`)
console.log(`Tag: ${plan.tag}`)
console.log(`Commits considered: ${subjects.length}`)
