import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const roots = [path.resolve("src/components"), path.resolve("src/screens")]
const failures = []
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) await walk(file)
    else if (file.endsWith(".tsx")) {
      const source = await readFile(file, "utf8")
      for (const match of source.matchAll(/<button\b([^>]*)>/g)) {
        const attrs = match[1]
        if (!file.endsWith(`${path.sep}ui${path.sep}sidebar.tsx`)) failures.push(`${path.relative(process.cwd(), file)}: use canonical Button/IconButton instead of raw button`)
        const iconLike = /(?:size-|icon|rounded-full)/.test(attrs)
        if (iconLike && !/aria-label=/.test(attrs)) failures.push(`${path.relative(process.cwd(), file)}: icon-like button requires aria-label or IconButton`)
      }
    }
  }
}
for (const root of roots) await walk(root)
if (failures.length) { console.error(failures.join("\n")); process.exit(1) }
console.log("Interaction audit passed: icon-like actions have accessible names.")
