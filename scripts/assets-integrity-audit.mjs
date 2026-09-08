import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [lock,contract]=await Promise.all([
  readFile(path.join(root,"public/assets/asset-lock.json"),"utf8").then(JSON.parse),
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
])
const expectedCommit=contract.match(/commit:\s*"([0-9a-f]{40})"/)?.[1]
const expectedCount=Number(contract.match(/mirroredRuntimeFiles:\s*(\d+)/)?.[1]??0)
const expectedRelease=contract.match(/assetRelease:\s*"([^"]+)"/)?.[1]
const failures=[]
for(const entry of lock.files??[]){
  try{
    const bytes=await readFile(path.join(root,entry.path))
    if(bytes.length!==entry.size) failures.push(`${entry.path}: size ${bytes.length} != ${entry.size}`)
    const header=Buffer.from(`blob ${bytes.length}\0`)
    const blob=createHash("sha1").update(header).update(bytes).digest("hex")
    if(blob!==entry.blob) failures.push(`${entry.path}: blob ${blob} != ${entry.blob}`)
  }catch{failures.push(`${entry.path}: missing`)}
}
if(!expectedCommit||lock.sourceCommit!==expectedCommit) failures.push("asset lock source commit")
if(!expectedCount||lock.files?.length!==expectedCount) failures.push(`asset lock count ${lock.files?.length??0} != ${expectedCount}`)
if(expectedRelease&&lock.release!==expectedRelease) failures.push("asset lock release")
if(failures.length){
  console.error("Asset pack integrity audit failed:")
  failures.forEach((failure)=>console.error("- "+failure))
  process.exit(1)
}
console.log(`Asset pack integrity passed: ${lock.files.length} files / ${lock.sourceCommit}`)
