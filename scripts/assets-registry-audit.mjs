import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated,registry,explorer,runtime]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src/generated/assets-v1.3.ts"),"utf8"),
  readFile(path.join(root,"src/contracts/assets-registry.ts"),"utf8"),
  readFile(path.join(root,"src/components/asset-explorer.tsx"),"utf8"),
  readFile(path.join(root,"src/components/runtime-motion.tsx"),"utf8"),
])
const failures=[]
const sha="e2dd99735e9225d368f6c520c6ac1980219115ba"
if(!stable.includes(sha)||!stable.includes('assetRelease: "1.3.0"')) failures.push("stable source")
if(!stable.includes("assetPackCount: 41")||!stable.includes("canonicalAssetCount: 591")) failures.push("stable inventory")
if(!generated.includes('"version": "1.3.0"')||!generated.includes('"developer-distribution"')) failures.push("generated registry")
if(!registry.includes("MOONWITNESS_STABLE_REPOSITORY_BASE")) failures.push("stable registry resolver")
if(!explorer.includes("41 packs / 591 canonical assets")) failures.push("asset explorer inventory")
if(!runtime.includes("prefers-reduced-motion")) failures.push("runtime reduced-motion contract")
if(failures.length){
  console.error("Assets registry audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets registry audit passed: v1.3.0 / 41 packs / 591 assets / ${sha}`)
