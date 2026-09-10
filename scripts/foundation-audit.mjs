import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const required = [
  "src/foundation/tokens/primitive.ts",
  "src/foundation/tokens/semantic.ts",
  "src/foundation/tokens/component.ts",
  "src/foundation/tokens/index.ts",
]
const failures = []
for (const file of required) {
  try { await readFile(path.join(root, file), "utf8") } catch { failures.push(`missing foundation token layer: ${file}`) }
}
const primitive = await readFile(path.join(root, required[0]), "utf8")
const semantic = await readFile(path.join(root, required[1]), "utf8")
const component = await readFile(path.join(root, required[2]), "utf8")
if (/#[0-9a-f]{3,8}/i.test(primitive + semantic + component)) failures.push("foundation token modules must reference CSS variables, not raw colors")
if (!primitive.includes("primitiveTokens") || !semantic.includes("semanticTokens") || !component.includes("componentTokens")) failures.push("foundation token modules must expose canonical token objects")
const styles = await readFile(path.join(root, "src/styles.css"), "utf8")
for (const token of ["--mw-surface-page", "--mw-text-primary", "--mw-border-default", "--mw-focus", "--mw-motion-fast"]) {
  if (!styles.includes(token)) failures.push(`styles.css missing canonical variable ${token}`)
}
if (failures.length) {
  console.error("Foundation audit failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}
console.log("Foundation audit passed: primitive, semantic, component tokens and theme variables are present.")
