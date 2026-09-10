import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const root = path.resolve("src")
const failures = []
const forbidden = [/\bBadgeProps\b/, /\bMoonWitnessCandidateAssetImage\b/, /\bresolveMoonWitnessCandidateAssetUrl\b/, /from ["'][^"']*assets-candidate["']/]

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) await walk(file)
    else if (/\.(tsx?|md)$/.test(entry.name)) {
      const source = await readFile(file, "utf8")
      for (const pattern of forbidden) if (pattern.test(source)) failures.push(`${path.relative(process.cwd(), file)}: removed API ${pattern}`)
    }
  }
}

await walk(root)
if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}
console.log("API stability audit passed: removed aliases are absent from source and public consumers.")
