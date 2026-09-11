import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const css = await readFile(path.join(root, "src/styles.css"), "utf8")
const violations = []

for (const [index, line] of css.split(/\r?\n/).entries()) {
  if (!/(#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|oklch\(|color\()/.test(line)) continue
  if (!/--mw-[\w-]+\s*:/.test(line)) violations.push(`styles.css:${index + 1}: raw color must be a canonical --mw-* token declaration`)
}

for (const token of ["--mw-space-4", "--mw-radius-md", "--mw-motion-base", "--mw-hero-overlay-strong", "--mw-perspective-violet"]) {
  if (!css.includes(token)) violations.push(`styles.css: missing token ${token}`)
}

async function collectUiSources(directory, output = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectUiSources(full, output)
    else if (/\.tsx?$/.test(entry.name)) output.push(await readFile(full, "utf8"))
  }
  return output
}

const uiSources = (await collectUiSources(path.join(root, "src/components/ui"))).join("\n")
const requiredSlots = [
  "button",
  "card",
  "card-header",
  "input",
  "badge",
  "progress",
  "progress-indicator",
  "tabs",
  "table",
  "table-row",
]

for (const slot of requiredSlots) {
  if (!uiSources.includes(`data-slot="${slot}"`)) violations.push(`data-slot contract: missing canonical slot '${slot}'`)
}

for (const match of uiSources.matchAll(/data-slot=["']([^"']+)["']/g)) {
  if (/^(?:hud|cyber|tactical)-/i.test(match[1])) violations.push(`data-slot contract: presentation-specific slot '${match[1]}' is forbidden`)
}

if (violations.length) {
  console.error(violations.join("\n"))
  process.exit(1)
}
console.log("Style token audit passed: canonical CSS token ownership and stable data-slot contracts are present.")
