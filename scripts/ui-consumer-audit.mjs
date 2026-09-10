import { readFile, readdir } from "node:fs/promises"
import { createHash } from "node:crypto"
import path from "node:path"
import { createRequire } from "node:module"

// This workspace audit uses the consumer's TypeScript compiler API.
// UI uses TypeScript 7's native CLI, which does not expose that API.
const require = createRequire(new URL("../../../apps/web/package.json", import.meta.url))
const ts = require("typescript")

const root = await import("../dist/index.js")
const primitives = await import("../dist/components/ui/index.js")
const compatibility = new Set([
  "Avatar", "Badge", "Button", "Checkbox", "Dialog", "Drawer", "Input", "Pagination",
  "Select", "Skeleton", "Switch", "Tabs", "Textarea", "Tooltip", "badgeVariants", "buttonVariants",
])
const failures = []
const overlaps = Object.keys(primitives).filter(name => name in root)
for (const name of overlaps) if (!compatibility.has(name)) failures.push(`Unclassified root/primitive overlap: ${name}`)

const hashes = new Map()
const directory = new URL("../src/components/ui/", import.meta.url)
for (const file of await readdir(directory)) {
  if (!file.endsWith(".tsx")) continue
  const source = await readFile(new URL(file, directory), "utf8")
  const hash = createHash("sha256").update(source.replace(/\s+/g, " ")).digest("hex")
  if (hashes.has(hash)) failures.push(`Duplicate component files: ${hashes.get(hash)}, ${file}`)
  hashes.set(hash, file)
  for (const match of source.matchAll(/from\s+["']([^"']+)["']/g)) {
    const from = match[1]
    if (!from.startsWith("..")) continue
    const shared = /^(\.\.\/\.\.\/)(lib|hooks|contracts)\//.test(from)
    const assetProvider = file === "asset.tsx" && from === "../asset-provider"
    if (!shared && !assetProvider) failures.push(`Primitive imports a product component: ${file} -> ${from}`)
  }
}

const consumer = path.resolve(process.cwd(), "../../apps/web/src")
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) { await walk(file); continue }
    if (!/\.tsx?$/.test(file)) continue
    const source = ts.createSourceFile(file, await readFile(file, "utf8"), ts.ScriptTarget.Latest, true)
    function visit(node) {
      if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
        const from = node.moduleSpecifier.text
        const bindings = node.importClause?.namedBindings
        if (from === "@rocksoul/ui" && bindings && ts.isNamedImports(bindings)) {
          for (const element of bindings.elements) {
            const name = (element.propertyName ?? element.name).text
            if (compatibility.has(name) || name === "UI") failures.push(`${file}: use a components/ui subpath for ${name}`)
          }
        }
        if (/packages\/ui\/src|@\/components\/ui/.test(from)) failures.push(`${file}: import the public UI package, not copied source`)
      }
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (["button", "input", "select", "textarea"].includes(node.tagName.getText(source))) failures.push(`${file}: raw ${node.tagName.getText(source)} should use a shared control`)
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
  }
}
await walk(consumer)
if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}
console.log(`UI consumer audit passed: ${hashes.size} unique modules, ${overlaps.length} classified compatibility exports, apps/web uses public primitives.`)
