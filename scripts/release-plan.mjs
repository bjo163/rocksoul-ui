const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/

export function calculateReleasePlan({ previousVersion, subjects = [], body = "", tagExists = () => false }) {
  const versionMatch = String(previousVersion).match(SEMVER_RE)
  if (!versionMatch) throw new Error(`Invalid semantic package version: ${previousVersion}`)

  const [major, minorVersion, patch] = versionMatch.slice(1, 4).map(Number)
  const cleanSubjects = subjects.map((subject) => String(subject).trim()).filter(Boolean)

  if (cleanSubjects.length === 0) {
    return { release: false, current: String(previousVersion) }
  }

  const breaking = /(^|\n)\s*(BREAKING CHANGE|BREAKING-CHANGE)\s*:/m.test(String(body)) ||
    cleanSubjects.some((subject) => /^[a-z]+(?:\([^)]*\))?!:/.test(subject))
  const minor = cleanSubjects.some((subject) => /^feat(?:\([^)]*\))?:/.test(subject))

  let bump
  let next
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

  const tag = `v${next}`
  if (tagExists(tag)) throw new Error(`Release ${tag} already exists.`)

  return { release: true, current: String(previousVersion), next, tag, bump }
}
