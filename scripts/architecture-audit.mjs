import { access, readdir, readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const sourceRoot = path.join(root, "src")
const forbiddenDirectories = new Set(["common", "shared", "misc", "helpers", "widgets"])
const levels = new Map([
  ["foundation", 0],
  ["primitives", 1],
  ["atoms", 2],
  ["molecules", 3],
  ["organisms", 4],
  ["templates", 5],
])
const failures = []

async function exists(file) {
  try {
    await access(file)
    return true
  } catch {
    return false
  }
}

async function resolveModule(from, specifier) {
  const candidate = path.resolve(path.dirname(from), specifier)
  const extensions = [".ts", ".tsx", ".js", ".jsx", ".mjs"]
  for (const extension of extensions) {
    if (await exists(`${candidate}${extension}`)) return `${candidate}${extension}`
  }
  for (const extension of extensions) {
    const index = path.join(candidate, `index${extension}`)
    if (await exists(index)) return index
  }
  return null
}

function levelFor(file) {
  const firstDirectory = path.relative(sourceRoot, file).split(path.sep)[0]
  return levels.get(firstDirectory)
}

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (forbiddenDirectories.has(entry.name.toLowerCase())) {
        failures.push(`${path.relative(root, file)}: ambiguous component ownership directory`)
      }
      await walk(file)
      continue
    }
    if (!/\.[cm]?[jt]sx?$/.test(entry.name)) continue

    const ownerLevel = levelFor(file)
    if (ownerLevel === undefined) continue
    const source = await readFile(file, "utf8")
    const imports = source.matchAll(/from\s+["'](\.{1,2}\/[^"']+)["']/g)
    for (const match of imports) {
      const dependency = await resolveModule(file, match[1])
      if (!dependency || !dependency.startsWith(sourceRoot)) continue
      const dependencyLevel = levelFor(dependency)
      if (dependencyLevel !== undefined && dependencyLevel > ownerLevel) {
        failures.push(`${path.relative(root, file)}: imports higher layer ${path.relative(root, dependency)}`)
      }
    }
  }
}

for (const document of ["docs/UI-ARCHITECTURE.md", "docs/UI-ARCHITECTURE-RULES.md", "docs/ui-component-inventory.json"]) {
  if (!(await exists(path.join(root, document)))) failures.push(`${document}: missing required architecture document`)
}

await walk(sourceRoot)

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Architecture audit passed: no ambiguous ownership folders or upward layer imports.")
