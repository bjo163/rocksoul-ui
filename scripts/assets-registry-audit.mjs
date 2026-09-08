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
const sha="82f20b8a361a19abdc6591fe2f4c67e3fb9d4b05"
if(!stable.includes(sha)||!stable.includes('assetRelease: "1.3.1"')) failures.push("stable source")
if(!stable.includes("assetPackCount: 42")||!stable.includes("canonicalAssetCount: 614")) failures.push("stable inventory")
if(!generated.includes('"version": "1.3.1"')||!generated.includes('"developer-distribution"')) failures.push("generated registry")
if(!registry.includes("MOONWITNESS_STABLE_REPOSITORY_BASE")) failures.push("stable registry resolver")
if(!explorer.includes("42 packs / 614 canonical assets")) failures.push("asset explorer inventory")
if(!runtime.includes("prefers-reduced-motion")) failures.push("runtime reduced-motion contract")
if(failures.length){
  console.error("Assets registry audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets registry audit passed: v1.3.1 / 42 packs / 614 assets / ${sha}`)
