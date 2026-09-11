const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const ALLOW_BOOKKEEPING = new Set([
  "ROCKSOUL-REPO.json",
  "ROCKSOUL-TODO.json",
  "VERSION",
  "CHANGELOG.md",
  "manifest.json",
  "package.json",
])
const ALLOW_POST_RELEASE = [
  "README.md",
  "docs/",
  ".github/",
  ".release/",
  ".releases/",
  "tools/",
  "tests/release/",
  "showcase/",
  "dist/assets.json",
  "dist/assets.ts",
  "scripts/validate-rocksoul-contract.mjs",
  "moonwitness/brand/generated/",
  "penpot/generated/",
]
const classify = (file) => {
  if (ALLOW_BOOKKEEPING.has(file)) return "ALLOW_BOOKKEEPING"
  if (ALLOW_POST_RELEASE.some((prefix) => file === prefix || file.startsWith(prefix))) return "ALLOW_POST_RELEASE"
  if (file === "moonwitness/asset-packs.json") return "BLOCK_RUNTIME"
  if (file.startsWith("moonwitness/") || file.startsWith("asset-packs/")) return "BLOCK_RUNTIME"
  return "UNKNOWN_BLOCK"
}

assert(classify("ROCKSOUL-REPO.json") === "ALLOW_BOOKKEEPING", "repository bookkeeping must be allowed")
assert(classify("package.json") === "ALLOW_BOOKKEEPING", "upstream metadata must be allowed")
assert(classify(".github/workflows/release-gate.yml") === "ALLOW_POST_RELEASE", "release automation must be allowed")
assert(classify("tools/release/next-version.mjs") === "ALLOW_POST_RELEASE", "release tooling must be allowed")
assert(classify("dist/assets.ts") === "ALLOW_POST_RELEASE", "derived developer registry must be allowed")
assert(classify("moonwitness/asset-packs.json") === "BLOCK_RUNTIME", "runtime asset metadata must block")
assert(classify("moonwitness/new-runtime.svg") === "BLOCK_RUNTIME", "runtime asset changes must block")
assert(classify("asset-packs/new-pack.json") === "BLOCK_RUNTIME", "new asset-pack changes must block")
assert(classify("src/unknown-contract.ts") === "UNKNOWN_BLOCK", "unknown changes must fail closed")

console.log("Asset freshness classification regression tests passed.")
