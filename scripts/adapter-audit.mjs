import { readFile, readdir, access } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const failures = []
const productionCompat = []
try {
  await access(path.join(root, "src/components/compat"))
  failures.push("src/components/compat: compatibility adapters must be removed")
} catch {
  // Canonical layer is the only supported primitive owner.
}
const consumerRoots = [
  path.resolve(root, "../../apps/web/src"),
  path.resolve(root, "../../apps/community/src"),
]
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(file)
    else if (/\.tsx?$/.test(file)) {
      const source = await readFile(file, "utf8")
      if (source.includes("<button") || source.includes("<input") || source.includes("<select") || source.includes("<textarea")) failures.push(`${file}: raw form control remains in consumer`)
    }
  }
}
for (const dir of consumerRoots) {
  await walk(dir)
}
const productionRoots = [path.join(root, "src/screens"), path.join(root, "src/components")]
for (const directory of productionRoots) {
  async function scanProduction(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const file = path.join(current, entry.name)
      if (entry.isDirectory()) await scanProduction(file)
      else if (/\.tsx?$/.test(file)) {
        const source = await readFile(file, "utf8")
        for (const adapter of ["compat/button", "compat/form-controls", "compat/overlays", "compat/tabs", "compat/patterns"]) {
          if (source.includes(`components/${adapter}`)) productionCompat.push(`${path.relative(root, file)} -> ${adapter}`)
        }
      }
    }
  }
  await scanProduction(directory)
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1) }
if (productionCompat.length) failures.push(...productionCompat)
if (failures.length) { console.error(failures.join("\n")); process.exit(1) }
console.log("Adapter audit passed: compatibility adapter directory removed; all audited consumers use standard public primitives.")
