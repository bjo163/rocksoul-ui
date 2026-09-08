import { access, readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
const failures = []

const exportedFiles = [
  pkg.module,
  pkg.types,
  pkg.style,
  pkg.exports?.["./styles.css"],
].filter(Boolean)

for (const entry of exportedFiles) {
  const relative = String(entry).replace(/^\.\//, "")
  try {
    await access(path.join(root, relative))
  } catch {
    failures.push(`missing exported artifact ${entry}`)
  }
}

let runtime
try {
  runtime = await import("@rocksoul/ui")
} catch (error) {
  failures.push(`package self-import failed: ${error instanceof Error ? error.message : String(error)}`)
}

for (const symbol of [
  "ApplicationShell",
  "ApplicationActionsProvider",
  "CinematicWebHero",
  "MoonWitnessAssetProvider",
  "NavigationProvider",
  "ResearchDomainOwnershipMap",
  "ROCKSOUL_ASSETS_SYNC",
  "ROCKSOUL_ASSETS_REGISTRY",
]) {
  if (runtime && !(symbol in runtime)) failures.push(`missing runtime export ${symbol}`)
}

if (failures.length) {
  console.error("Consumer smoke failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log("Consumer smoke passed: package exports resolve through the public @rocksoul/ui contract.")
