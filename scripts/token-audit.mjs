import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const src = path.join(root, "src")
const forbiddenIdentity = "@moonwitness/ui"
const hexPattern = /#[0-9a-fA-F]{3,8}\b/g

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full)
  }
  return files
}

const files = await walk(src)
const violations = []

for (const file of files) {
  const content = await readFile(file, "utf8")
  const hexes = content.match(hexPattern) ?? []
  if (hexes.length) violations.push(`${path.relative(root, file)}: raw colors ${hexes.join(", ")}`)
  if (content.includes(forbiddenIdentity)) violations.push(`${path.relative(root, file)}: legacy package identity`)
}

const packageJson = await readFile(path.join(root, "package.json"), "utf8")
if (packageJson.includes(forbiddenIdentity)) violations.push("package.json: legacy package identity")

if (violations.length) {
  console.error("Token/identity audit failed:")
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log("Token/identity audit passed.")
