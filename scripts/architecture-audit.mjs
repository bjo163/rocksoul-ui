import { access, readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const ROOT = process.cwd()
const SOURCE_ROOT = path.join(ROOT, "src")
const DIST_ROOT = path.join(ROOT, "dist")
const INVENTORY_PATH = path.join(ROOT, "docs/ui-component-inventory.json")
const FORBIDDEN_DIRECTORIES = new Set(["common", "shared", "misc", "helpers", "widgets"])
const failures = []
const sourceFiles = new Map()
const basenameOwners = new Map()

async function exists(file) {
  try { await access(file); return true } catch { return false }
}

function normalize(value) {
  return value.split(path.sep).join("/")
}

export function levelForPath(file) {
  const rel = normalize(path.relative(SOURCE_ROOT, file))
  if (rel === ".." || rel.startsWith("../")) return undefined
  if (rel.startsWith("foundation/") || rel === "tokens.ts" || rel === "styles.css" || rel.startsWith("lib/")) return 0
  if (rel.startsWith("primitives/")) return 1
  if (rel.startsWith("atoms/") || rel.startsWith("components/ui/")) return 2
  if (rel.startsWith("molecules/") || rel.startsWith("components/molecules/")) return 3
  if (rel.startsWith("organisms/") || rel.startsWith("components/organisms/")) return 4
  if (rel.startsWith("templates/") || rel.startsWith("components/templates/")) return 5
  return undefined
}

export function dependencyDirectionViolation(ownerLevel, dependencyLevel) {
  return ownerLevel !== undefined && dependencyLevel !== undefined && dependencyLevel > ownerLevel
}

export function importSpecifiers(source) {
  const imports = new Set()
  const patterns = [
    /\bimport\s+(?:type\s+)?(?:[^"'`;]+?\s+from\s+)?["']([^"']+)["']/g,
    /\bexport\s+(?:type\s+)?(?:\*|\{[^}]*\})\s+from\s+["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
  ]
  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) imports.add(match[1])
  }
  return [...imports]
}

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (FORBIDDEN_DIRECTORIES.has(entry.name.toLowerCase())) {
        failures.push(`${normalize(path.relative(ROOT, file))}: ambiguous component ownership directory`)
      }
      await walk(file)
      continue
    }
    if (!/\.(?:c|m)?(?:t|j)sx?$/.test(entry.name)) continue
    const relative = normalize(path.relative(SOURCE_ROOT, file))
    const withoutExtension = relative.replace(/\.(?:c|m)?(?:t|j)sx?$/, "")
    sourceFiles.set(withoutExtension, file)
    const owner = levelForPath(file)
    const basename = path.basename(withoutExtension).toLowerCase()
    if (owner !== undefined && basename !== "index") {
      const owners = basenameOwners.get(basename) ?? []
      owners.push(relative)
      basenameOwners.set(basename, owners)
    }
  }
}

async function resolveSource(from, specifier, aliases) {
  const raw = specifier.replace(/\\/g, "/")
  const candidates = []
  if (raw.startsWith(".")) candidates.push(path.resolve(path.dirname(from), raw))
  for (const [alias, targets] of aliases) {
    const prefix = alias.replace("/*", "")
    if (!raw.startsWith(prefix)) continue
    const suffix = raw.slice(prefix.length).replace(/^\//, "")
    for (const target of targets) candidates.push(path.resolve(ROOT, target.replace("/*", ""), suffix))
  }
  for (const candidate of candidates) {
    for (const extension of [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]) {
      if (await exists(`${candidate}${extension}`)) return `${candidate}${extension}`
    }
    for (const extension of [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]) {
      const index = path.join(candidate, `index${extension}`)
      if (await exists(index)) return index
    }
  }
  return null
}

async function componentFiles(relativeDirectory) {
  const directory = path.join(SOURCE_ROOT, relativeDirectory)
  if (!(await exists(directory))) return []
  const entries = await readdir(directory, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && /\.tsx$/.test(entry.name))
    .map((entry) => `${relativeDirectory}/${entry.name}`)
    .sort()
}

export async function verifyInventory(inventory) {
  const inventoryFailures = []
  const expected = {
    molecules: await componentFiles("components/molecules"),
    organisms: await componentFiles("components/organisms"),
    templates: await componentFiles("components/templates"),
  }
  for (const [section, files] of Object.entries(expected)) {
    const actual = [...(inventory.canonicalSurfaces?.[section] ?? [])].sort()
    if (JSON.stringify(actual) === JSON.stringify(files)) continue
    const missing = files.filter((file) => !actual.includes(file))
    const stale = actual.filter((file) => !files.includes(file))
    if (missing.length) inventoryFailures.push(`docs/ui-component-inventory.json: ${section} missing ${missing.join(", ")}`)
    if (stale.length) inventoryFailures.push(`docs/ui-component-inventory.json: ${section} stale ${stale.join(", ")}`)
  }
  return inventoryFailures
}

export async function runArchitectureAudit() {
  failures.length = 0
  sourceFiles.clear()
  basenameOwners.clear()

  for (const document of ["docs/UI-ARCHITECTURE.md", "docs/UI-ARCHITECTURE-RULES.md", "docs/ui-component-inventory.json"]) {
    if (!(await exists(path.join(ROOT, document)))) failures.push(`${document}: missing required architecture document`)
  }

  const tsconfig = JSON.parse(await readFile(path.join(ROOT, "tsconfig.json"), "utf8"))
  const aliases = new Map(Object.entries(tsconfig.compilerOptions?.paths ?? {}))
  const inventory = (await exists(INVENTORY_PATH)) ? JSON.parse(await readFile(INVENTORY_PATH, "utf8")) : {}
  const documentedOverlap = JSON.stringify(inventory.overlapDecisions ?? [])

  await walk(SOURCE_ROOT)

  for (const owners of basenameOwners.values()) {
    const uniqueLayers = new Set(owners.map((file) => file.split("/")[0]))
    const explicitlyDocumented = owners.every((file) => documentedOverlap.includes(file))
    if (owners.length > 1 && uniqueLayers.size > 1 && !explicitlyDocumented) {
      failures.push(`${owners.join(", ")}: duplicate component basename across layers without overlap decision`)
    }
  }

  for (const file of sourceFiles.values()) {
    const source = await readFile(file, "utf8")
    const ownerLevel = levelForPath(file)
    if (ownerLevel === undefined) continue
    for (const specifier of importSpecifiers(source)) {
      const dependency = await resolveSource(file, specifier, aliases)
      if (!dependency || !dependency.startsWith(SOURCE_ROOT)) continue
      const dependencyLevel = levelForPath(dependency)
      if (dependencyDirectionViolation(ownerLevel, dependencyLevel)) {
        failures.push(`${normalize(path.relative(ROOT, file))}: imports higher layer ${normalize(path.relative(ROOT, dependency))}`)
      }
    }
    for (const match of source.matchAll(/export\s+(?:\*|\{[^}]+\})\s+from\s+["']([^"']+)["']/g)) {
      const exported = await resolveSource(file, match[1], aliases)
      if (!exported) failures.push(`${normalize(path.relative(ROOT, file))}: orphan barrel re-export ${match[1]}`)
    }
  }

  failures.push(...await verifyInventory(inventory))

  const pkg = JSON.parse(await readFile(path.join(ROOT, "package.json"), "utf8"))
  for (const [key, value] of Object.entries(pkg.exports ?? {})) {
    if (key.includes("*") || key === "./package.json") continue
    const entries = typeof value === "string" ? { import: value } : value
    for (const target of Object.values(entries)) {
      if (typeof target !== "string") continue
      const clean = target.replace(/^\.\//, "")
      if (clean.startsWith("dist/") && !(await exists(path.join(ROOT, clean)))) {
        failures.push(`package export ${key}: missing generated artifact ${clean}`)
      }
    }
  }

  if (!(await exists(path.join(SOURCE_ROOT, "index.ts")))) failures.push("src/index.ts: missing canonical package source entry")
  if (!(await exists(path.join(DIST_ROOT, "index.js")))) failures.push("dist/index.js: missing generated package entry")
  if (!(await exists(path.join(DIST_ROOT, "index.d.ts")))) failures.push("dist/index.d.ts: missing generated type entry")

  if (failures.length) {
    console.error(failures.join("\n"))
    process.exitCode = 1
  } else {
    console.log(`Architecture audit passed: ${sourceFiles.size} source entries, ${basenameOwners.size} owned component names, dependency direction/inventory/barrels/export map clean.`)
  }
  return failures
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  await runArchitectureAudit()
}
