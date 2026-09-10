import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const css = await readFile(path.join(root, "src/styles.css"), "utf8")
const violations = []
for (const [index, line] of css.split(/\r?\n/).entries()) {
  if (!/(#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\()/.test(line)) continue
  if (!/--[\w-]+\s*:/.test(line)) violations.push(`styles.css:${index + 1}: raw color must be a token declaration`)
}
for (const token of ["--mw-space-4", "--mw-radius-md", "--mw-motion-base", "--mw-hero-overlay-strong", "--mw-perspective-violet"]) {
  if (!css.includes(token)) violations.push(`styles.css: missing token ${token}`)
}
if (violations.length) {
  console.error(violations.join("\n"))
  process.exit(1)
}
console.log("Style token audit passed: raw colors are confined to token declarations.")
