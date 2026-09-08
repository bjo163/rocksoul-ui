import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const lock=JSON.parse(await readFile(path.join(root,"public/assets/asset-lock.json"),"utf8"))
const failures=[]
for(const entry of lock.files ?? []){
  try{
    const bytes=await readFile(path.join(root,entry.path))
    if(bytes.length!==entry.size) failures.push(`${entry.path}: size ${bytes.length} != ${entry.size}`)
    const header=Buffer.from(`blob ${bytes.length}\0`)
    const blob=createHash("sha1").update(header).update(bytes).digest("hex")
    if(blob!==entry.blob) failures.push(`${entry.path}: blob ${blob} != ${entry.blob}`)
  }catch{
    failures.push(`${entry.path}: missing`)
  }
}
if(lock.sourceCommit!=="e2dd99735e9225d368f6c520c6ac1980219115ba") failures.push("asset lock source commit")
if(lock.files?.length!==198) failures.push(`asset lock count ${lock.files?.length ?? 0} != 198`)
if(failures.length){
  console.error("Asset pack integrity audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Asset pack integrity passed: ${lock.files.length} files / ${lock.sourceCommit}`)
