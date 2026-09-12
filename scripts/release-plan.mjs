const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/

function bumpVersion(version, bump) {
  if (!SEMVER.test(version)) throw new Error(`Invalid semantic version: ${version}`)
  const [core] = version.split("-")
  const [major, minor, patch] = core.split(".").map(Number)
  if (bump === "major") return `${major + 1}.0.0`
  if (bump === "minor") return `${major}.${minor + 1}.0`
  return `${major}.${minor}.${patch + 1}`
}

export function classifyRelease({ subjects = [], body = "" } = {}) {
  const breaking = /(^|\n)\s*(BREAKING CHANGE|BREAKING-CHANGE)\s*:/m.test(body) || subjects.some((subject) => /^[a-z]+(?:\([^)]*\))?!:/.test(subject))
  if (breaking) return "major"
  if (subjects.some((subject) => /^feat(?:\([^)]*\))?:/.test(subject))) return "minor"
  return "patch"
}

export function calculateReleasePlan({ previousVersion, subjects = [], body = "", tagExists = () => false } = {}) {
  if (!SEMVER.test(previousVersion)) throw new Error(`Invalid semantic version: ${previousVersion}`)
  const meaningfulSubjects = subjects.map((subject) => String(subject).trim()).filter(Boolean)
  if (meaningfulSubjects.length === 0) {
    return { release: false, current: previousVersion, next: previousVersion, tag: `v${previousVersion}`, bump: null }
  }
  const bump = classifyRelease({ subjects: meaningfulSubjects, body })
  const next = bumpVersion(previousVersion, bump)
  const tag = `v${next}`
  if (tagExists(tag)) throw new Error(`Release ${tag} already exists.`)
  return { release: true, current: previousVersion, next, tag, bump }
}
