import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const contract=await readFile(path.join(root,"src","contracts","assets-v2.ts"),"utf8")
const commitMatch=contract.match(/commit:\s*"([0-9a-f]{40})"/)
const releaseMatch=contract.match(/assetRelease:\s*"([^"]+)"/)
const countMatch=contract.match(/assetPackCount:\s*(\d+)/)
if(!commitMatch || !releaseMatch || !countMatch){
  console.error("Assets freshness audit failed: stable sync metadata not found.")
  process.exit(1)
}
const expectedCommit=commitMatch[1]
const expectedRelease=releaseMatch[1]
const expectedPackCount=Number(countMatch[1])

let current=""
try{
  current=execFileSync("git",[
    "ls-remote",
    "https://github.com/bjo163/rocksoul-assets.git",
    "refs/heads/main",
  ],{encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim().split(/\s+/)[0]
}catch{
  console.error("Assets freshness audit failed: unable to query rocksoul-assets/main.")
  process.exit(1)
}

if(current===expectedCommit){
  console.log(`Assets freshness audit passed exactly: ${current}`)
  process.exit(0)
}

try{
  const [versionResponse,packsResponse]=await Promise.all([
    fetch("https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/VERSION"),
    fetch("https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/asset-packs.json"),
  ])
  if(!versionResponse.ok || !packsResponse.ok) throw new Error("upstream metadata unavailable")
  const version=(await versionResponse.text()).trim().replace(/^v/,"")
  const packs=await packsResponse.json()
  const packCount=Array.isArray(packs.packs)?packs.packs.length:0
  if(version!==expectedRelease || packs.version!==expectedRelease || packCount!==expectedPackCount){
    console.error("Assets freshness audit failed: upstream main changed release contract.")
    console.error(`- recorded release: ${expectedRelease} / ${expectedPackCount} packs`)
    console.error(`- upstream release: ${version} / ${packCount} packs`)
    process.exit(1)
  }
  console.warn(`Assets main advanced after recorded sync: ${expectedCommit} -> ${current}`)
  console.warn("Release contract remains compatible; generator-only/post-release derivative drift is accepted.")
  console.log(`Assets freshness audit passed semantically: v${version} / ${packCount} packs`)
}catch(error){
  console.error("Assets freshness audit failed: unable to verify semantic release compatibility.")
  process.exit(1)
}
