import { execFileSync } from "node:child_process"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import ts from "typescript"

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

function hasExportModifier(node) {
  return node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword || modifier.kind === ts.SyntaxKind.DefaultKeyword)
}

function compact(text) {
  return text.replace(/\s+/g, " ").trim()
}

function declarationName(statement, sourceFile) {
  if (ts.isFunctionDeclaration(statement) || ts.isClassDeclaration(statement) || ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement) || ts.isEnumDeclaration(statement)) {
    return statement.name?.getText(sourceFile) ?? null
  }
  return null
}

function declarationSignature(statement, sourceFile, localExportNames) {
  if (ts.isExportAssignment(statement)) return compact(statement.getText(sourceFile))
  if (ts.isExportDeclaration(statement)) return compact(statement.getText(sourceFile))

  const name = declarationName(statement, sourceFile)
  const directlyExported = hasExportModifier(statement)
  const exportedAtBottom = name ? localExportNames.has(name) : false

  if (ts.isVariableStatement(statement)) {
    const exportedVariable = directlyExported || statement.declarationList.declarations.some((declaration) => {
      return ts.isIdentifier(declaration.name) && localExportNames.has(declaration.name.text)
    })
    if (!exportedVariable) return null
    // Exported inferred values can define public types through their initializer (for example CVA variants),
    // so keep the full exported statement in the API fingerprint.
    return compact(statement.getText(sourceFile))
  }

  if (!directlyExported && !exportedAtBottom) return null

  if (ts.isFunctionDeclaration(statement)) {
    const functionName = statement.name?.getText(sourceFile) ?? "default"
    const typeParameters = statement.typeParameters?.map((item) => item.getText(sourceFile)).join(",") ?? ""
    const parameters = statement.parameters.map((item) => item.getText(sourceFile)).join(",")
    const returnType = statement.type?.getText(sourceFile) ?? ""
    return compact(`function ${functionName}<${typeParameters}>(${parameters}):${returnType}`)
  }

  if (ts.isClassDeclaration(statement) || ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement) || ts.isEnumDeclaration(statement)) {
    return compact(statement.getText(sourceFile))
  }

  return compact(statement.getText(sourceFile))
}

export function apiSignature(source, fileName = "source.ts") {
  const kind = fileName.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  const sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true, kind)
  const localExportNames = new Set()

  for (const statement of sourceFile.statements) {
    if (!ts.isExportDeclaration(statement) || statement.moduleSpecifier || !statement.exportClause || !ts.isNamedExports(statement.exportClause)) continue
    for (const element of statement.exportClause.elements) {
      localExportNames.add((element.propertyName ?? element.name).text)
    }
  }

  return sourceFile.statements
    .map((statement) => declarationSignature(statement, sourceFile, localExportNames))
    .filter(Boolean)
    .sort()
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
    const oldText = baselineText(baseline.baselineCommit, file)
    let newText = null
    try {
      newText = await readFile(path.join(ROOT, file), "utf8")
    } catch {
      // absence is part of the comparison
    }

    if (oldText === null || newText === null) {
      failures.push(`${file}: public path ${oldText === null ? "added" : "removed"} since baseline; classify as an intentional API change before merging`)
      continue
    }

    const oldSignature = apiSignature(oldText, file)
    const newSignature = apiSignature(newText, file)
    if (JSON.stringify(oldSignature) !== JSON.stringify(newSignature)) {
      failures.push(`${file}: exported declaration/prop/type contract drifted from baseline ${baseline.baselineCommit}`)
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
    console.log("API stability audit passed: public paths, exports, props/types, and package exports match the Phase 1 baseline.")
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  await runApiStabilityAudit()
}
