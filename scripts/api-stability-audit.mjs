import { execFileSync } from "node:child_process"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const ROOT = process.cwd()
const PUBLIC_DIRS = [
  "src/components/ui",
  "src/components/molecules",
  "src/components/organisms",
  "src/components/templates",
]
const FORBIDDEN = [/\bBadgeProps\b/, /\bMoonWitnessCandidateAssetImage\b/, /\bresolveMoonWitnessCandidateAssetUrl\b/, /from ["'][^"']*assets-candidate["']/]

function normalize(value) {
  return value.split(path.sep).join("/")
}

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] })
}

function baselineText(commit, file) {
  try {
    return git(["show", `${commit}:${file}`])
  } catch {
    return null
  }
}

export function declarationPathForSource(sourcePath) {
  return normalize(sourcePath)
    .replace(/^src\//, "dist/")
    .replace(/\.(?:tsx?|jsx?)$/, ".d.ts")
}

export function declarationSignature(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/^\s*\/\/\# sourceMappingURL=.*$/gm, "")
    .replace(/\s+/g, " ")
    .trim()
}

async function currentPublicFiles() {
  const files = ["src/index.ts"]
  for (const relativeDir of PUBLIC_DIRS) {
    const entries = await readdir(path.join(ROOT, relativeDir), { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile() && /\.(?:ts|tsx)$/.test(entry.name)) files.push(`${relativeDir}/${entry.name}`)
    }
  }
  return files.sort()
}

function baselinePublicFiles(commit) {
  const args = ["ls-tree", "-r", "--name-only", commit, "--", "src/index.ts", ...PUBLIC_DIRS]
  return git(args).split(/\r?\n/).filter((file) => /\.(?:ts|tsx)$/.test(file)).map(normalize).sort()
}

async function loadExceptions() {
  const config = JSON.parse(await readFile(path.join(ROOT, "config/design-audit-exceptions.json"), "utf8"))
  return config.exceptions ?? []
}

function approvedApiException(pathName, exceptions) {
  return exceptions.some((entry) => entry.path === pathName && entry.rule === "public-api-change")
}

async function legacyForbiddenAliasCheck() {
  const failures = []
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(file)
        continue
      }
      if (!/\.(tsx?|md)$/.test(entry.name)) continue
      const source = await readFile(file, "utf8")
      for (const pattern of FORBIDDEN) {
        if (pattern.test(source)) failures.push(`${normalize(path.relative(ROOT, file))}: removed API ${pattern}`)
      }
    }
  }
  await walk(path.join(ROOT, "src"))
  return failures
}

export async function runApiStabilityAudit() {
  const baseline = JSON.parse(await readFile(path.join(ROOT, "config/design-audit-baseline.json"), "utf8"))
  const exceptions = await loadExceptions()
  const failures = await legacyForbiddenAliasCheck()

  let baselineFiles
  try {
    baselineFiles = baselinePublicFiles(baseline.baselineCommit)
  } catch (error) {
    console.error(`API stability audit cannot resolve baseline ${baseline.baselineCommit}: ${error?.message ?? error}`)
    process.exitCode = 1
    return
  }

  const currentFiles = await currentPublicFiles()
  const allFiles = [...new Set([...baselineFiles, ...currentFiles])].sort()

  for (const file of allFiles) {
    if (approvedApiException(file, exceptions)) continue
    const existedBefore = baselineFiles.includes(file)
    const existsNow = currentFiles.includes(file)
    if (!existedBefore || !existsNow) {
      failures.push(`${file}: public path ${!existedBefore ? "added" : "removed"} since baseline; classify as an intentional API change before merging`)
      continue
    }

    const declarationPath = declarationPathForSource(file)
    const oldDeclaration = baselineText(baseline.baselineCommit, declarationPath)
    let newDeclaration = null
    try {
      newDeclaration = await readFile(path.join(ROOT, declarationPath), "utf8")
    } catch {
      // absence is a contract failure below
    }

    if (oldDeclaration === null || newDeclaration === null) {
      failures.push(`${file}: public declaration artifact ${declarationPath} ${oldDeclaration === null ? "missing from baseline" : "missing from current build"}`)
      continue
    }

    if (declarationSignature(oldDeclaration) !== declarationSignature(newDeclaration)) {
      failures.push(`${file}: generated public declaration contract drifted from baseline ${baseline.baselineCommit}`)
    }
  }

  const oldPackageText = baselineText(baseline.baselineCommit, "package.json")
  const newPackageText = await readFile(path.join(ROOT, "package.json"), "utf8")
  if (!oldPackageText) {
    failures.push("package.json: baseline package manifest unavailable")
  } else {
    const oldPackage = JSON.parse(oldPackageText)
    const newPackage = JSON.parse(newPackageText)
    const oldSurface = { name: oldPackage.name, module: oldPackage.module, main: oldPackage.main, types: oldPackage.types, exports: oldPackage.exports }
    const newSurface = { name: newPackage.name, module: newPackage.module, main: newPackage.main, types: newPackage.types, exports: newPackage.exports }
    if (JSON.stringify(oldSurface) !== JSON.stringify(newSurface) && !approvedApiException("package.json", exceptions)) {
      failures.push("package.json: public package export map drifted from Phase 1 baseline")
    }
  }

  if (failures.length) {
    console.error(failures.join("\n"))
    process.exitCode = 1
  } else {
    console.log("API stability audit passed: public paths, generated declarations, and package exports match the Phase 1 baseline.")
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  await runApiStabilityAudit()
}
