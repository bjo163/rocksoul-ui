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

if(lock.sourceCommit!=="95a6912409f849029e18093658b1c0e8158a32f0") failures.push("asset lock source commit")
if(lock.files?.length!==148) failures.push(`asset lock count ${lock.files?.length ?? 0} != 148`)

if(failures.length){
  console.error("Asset pack integrity audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Asset pack integrity passed: ${lock.files.length} files / ${lock.sourceCommit}`)
