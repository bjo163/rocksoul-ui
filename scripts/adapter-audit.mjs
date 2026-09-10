import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const adapters = ["button.tsx", "badge.tsx", "form-controls.tsx", "overlays.tsx", "patterns.tsx", "tabs.tsx"]
const failures = []
for (const name of adapters) {
  const source = await readFile(path.join(root, "src/components/compat", name), "utf8")
  if (!source.includes("@deprecated") && !source.includes("deprecated")) failures.push(`${name}: compatibility adapter needs a deprecation marker`)
}
const consumerRoot = path.resolve(root, "../../apps/web/src")
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
await walk(consumerRoot)
if (failures.length) { console.error(failures.join("\n")); process.exit(1) }
console.log("Adapter audit passed: compatibility adapters remain internal; apps/web uses standard public primitives.")
