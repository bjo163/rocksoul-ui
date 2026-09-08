import { access } from "node:fs/promises"

await Promise.all([
  access(new URL("../dist/index.js", import.meta.url)),
  access(new URL("../dist/index.d.ts", import.meta.url)),
  access(new URL("../dist/styles.css", import.meta.url)),
])

const ui = await import(new URL("../dist/index.js", import.meta.url).href)
for (const name of ["ApplicationShell", "MoonWitnessAssetProvider", "NavigationProvider", "ApplicationActionsProvider"]) {
  if (typeof ui[name] !== "function") throw new Error(`Missing public consumer export: ${name}`)
}

console.log("Consumer smoke passed: package artifacts and core public exports are available.")
