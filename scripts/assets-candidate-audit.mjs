import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated,packRegistry]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"public/assets/developer-v1.3/assets.json"),"utf8").then(JSON.parse),
  readFile(path.join(root,"src/contracts/asset-packs.ts"),"utf8"),
])

const failures=[]
const release=stable.match(/assetRelease:\s*"([^"]+)"/)?.[1]
const packCount=Object.keys(generated.packs??{}).length
const generatedCount=Object.values(generated.packs??{}).filter((pack)=>pack?.manifest).length

if(!release || generated.version!==release) failures.push("stable/generated release alignment")
if(packCount<1 || !generated.packs?.["community-participation"]) failures.push("current generated pack inventory")
if(!packRegistry.includes('"community-participation"')) failures.push("community participation pack contract")
if(generatedCount!==packCount) failures.push(`generated registry manifest count ${generatedCount} != pack count ${packCount}`)

if(failures.length){
  console.error("Assets stable audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets stable audit passed: v${release} / ${packCount} packs`)
