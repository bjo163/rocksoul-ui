import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated,registry,explorer,runtime,packRegistry]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"public/assets/developer-v1.3/assets.json"),"utf8").then(JSON.parse),
  readFile(path.join(root,"src/contracts/assets-registry.ts"),"utf8"),
  readFile(path.join(root,"src/components/asset-explorer.tsx"),"utf8"),
  readFile(path.join(root,"src/components/runtime-motion.tsx"),"utf8"),
  readFile(path.join(root,"src/contracts/asset-packs.ts"),"utf8"),
])

const failures=[]
const commit=stable.match(/commit:\s*"([0-9a-f]{40})"/)?.[1]
const release=stable.match(/assetRelease:\s*"([^"]+)"/)?.[1]
const packCount=Object.keys(generated.packs??{}).length
const assetCount=Number(generated.coverage?.extensions?.svg??0)

if(!commit || !release) failures.push("stable source metadata")
if(packCount<1 || assetCount<1) failures.push("generated inventory metadata")
if(generated.version!==release || !generated.packs?.["developer-distribution"]) failures.push("generated registry")
if(!registry.includes("MOONWITNESS_STABLE_REPOSITORY_BASE")) failures.push("stable registry resolver")
if(!registry.includes("MOONWITNESS_ACCEPTED_REPOSITORY_BASE") || !registry.includes("ROCKSOUL_ASSETS_SYNC.acceptedMainCommit")) failures.push("accepted-main registry resolver")
if(!registry.includes("Object.keys(assets.packs).length") || !registry.includes("assets.coverage.extensions.svg")) failures.push("registry-derived inventory")
if(!explorer.includes("ROCKSOUL_ASSETS_REGISTRY.packCount") || !explorer.includes("ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount")) failures.push("derived asset explorer inventory")
if(!packRegistry.includes('"community-participation"')) failures.push("community participation pack contract")
if(!runtime.includes("prefers-reduced-motion")) failures.push("runtime reduced-motion contract")

if(failures.length){
  console.error("Assets registry audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets registry audit passed: v${release} / ${packCount} packs / ${assetCount} SVGs / ${commit}`)
