import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated,registry,explorer,runtime,packRegistry]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src/generated/assets-v1.3.ts"),"utf8"),
  readFile(path.join(root,"src/contracts/assets-registry.ts"),"utf8"),
  readFile(path.join(root,"src/components/asset-explorer.tsx"),"utf8"),
  readFile(path.join(root,"src/components/runtime-motion.tsx"),"utf8"),
  readFile(path.join(root,"src/contracts/asset-packs.ts"),"utf8"),
])
const failures=[]
const commit=stable.match(/commit:\s*"([0-9a-f]{40})"/)?.[1]
const release=stable.match(/assetRelease:\s*"([^"]+)"/)?.[1]
const packCount=Number(stable.match(/assetPackCount:\s*(\d+)/)?.[1] ?? 0)
const assetCount=Number(stable.match(/canonicalAssetCount:\s*(\d+)/)?.[1] ?? 0)
if(!commit || !release) failures.push("stable source metadata")
if(!packCount || !assetCount) failures.push("stable inventory metadata")
if(!generated.includes(`"version": "${release}"`)||!generated.includes('"developer-distribution"')) failures.push("generated registry")
if(!registry.includes("MOONWITNESS_STABLE_REPOSITORY_BASE")) failures.push("stable registry resolver")
if(!explorer.includes("ROCKSOUL_ASSETS_REGISTRY.packCount")||!explorer.includes("ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount")) failures.push("derived asset explorer inventory")
if(!packRegistry.includes('"community-participation"')) failures.push("community participation pack contract")
if(!runtime.includes("prefers-reduced-motion")) failures.push("runtime reduced-motion contract")
if(failures.length){
  console.error("Assets registry audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets registry audit passed: v${release} / ${packCount} packs / ${assetCount} assets / ${commit}`)
