import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated,packRegistry]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src/generated/assets-v1.3.ts"),"utf8"),
  readFile(path.join(root,"src/contracts/asset-packs.ts"),"utf8"),
])

const failures=[]
const release=stable.match(/assetRelease:\s*"([^"]+)"/)?.[1]
const packCount=Number(stable.match(/assetPackCount:\s*(\d+)/)?.[1]??0)
const generatedCount=(generated.match(/"manifest":/g)??[]).length
if(!release || !generated.includes(`"version": "${release}"`)) failures.push("stable/generated release alignment")
if(!packCount || !generated.includes('"community-participation"')) failures.push("current generated pack inventory")
if(!packRegistry.includes('"community-participation"')) failures.push("community participation pack contract")
if(generatedCount < packCount) failures.push(`generated registry has fewer manifests (${generatedCount}) than declared packs (${packCount})`)

if(failures.length){
  console.error("Assets stable audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets stable audit passed: v${release} / ${packCount} packs`)
