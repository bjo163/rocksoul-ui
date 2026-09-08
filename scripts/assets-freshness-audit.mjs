import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const contract=await readFile(path.join(root,"src","contracts","assets-v2.ts"),"utf8")
const match=contract.match(/commit:\s*"([0-9a-f]{40})"/)
if(!match){
  console.error("Assets freshness audit failed: sync commit not found.")
  process.exit(1)
}
const expected=match[1]

let output=""
try{
  output=execFileSync("git",[
    "ls-remote",
    "https://github.com/bjo163/rocksoul-assets.git",
    "refs/heads/main",
  ],{encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim()
}catch(error){
  console.error("Assets freshness audit failed: unable to query rocksoul-assets/main.")
  process.exit(1)
}
const current=output.split(/\s+/)[0]
if(!current || !/^[0-9a-f]{40}$/.test(current)){
  console.error("Assets freshness audit failed: invalid remote SHA.")
  process.exit(1)
}
if(current!==expected){
  console.error("Assets freshness audit failed:")
  console.error(`- UI sync:    ${expected}`)
  console.error(`- assets main: ${current}`)
  console.error("- Re-audit the assets delta before promoting rocksoul-ui.")
  process.exit(1)
}
console.log(`Assets freshness audit passed: ${current}`)
