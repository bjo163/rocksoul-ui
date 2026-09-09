import { execFileSync } from "node:child_process"
import { mkdtemp, readFile, rm } from "node:fs/promises"
import path from "node:path"
import os from "node:os"

const FETCH_TIMEOUT_MS = 20_000
function fetchWithTimeout(url) {
  return fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) })
}

const root=process.cwd()
const [contract,localIndex]=await Promise.all([
  readFile(path.join(root,"src","contracts","assets-v2.ts"),"utf8"),
  readFile(path.join(root,"public","assets","moonwitness","asset-packs.json"),"utf8").then(JSON.parse),
])
const repositoryMatch=contract.match(/repository:\s*"([^"]+)"/)
const refMatch=contract.match(/ref:\s*"([^"]+)"/)
const runtimeMatch=contract.match(/commit:\s*"([0-9a-f]{40})"/)
const acceptedMainMatch=contract.match(/acceptedMainCommit:\s*"([0-9a-f]{40})"/)
const releaseMatch=contract.match(/assetRelease:\s*"([^"]+)"/)

if(!repositoryMatch||!refMatch||!runtimeMatch||!acceptedMainMatch||!releaseMatch){
  console.error("Assets freshness audit failed: stable sync metadata not found.")
  process.exit(1)
}

const sourceRepository=repositoryMatch[1]
const sourceRef=refMatch[1]
const gitRemote=`https://github.com/${sourceRepository}.git`
const rawBase=`https://raw.githubusercontent.com/${sourceRepository}/${sourceRef}`
const runtimeCommit=runtimeMatch[1]
const acceptedMainCommit=acceptedMainMatch[1]
const expectedRelease=releaseMatch[1]
const expectedPackCount=Array.isArray(localIndex.packs)?localIndex.packs.length:0
const expectedSvgCount=Number(localIndex.coverage?.svgSources??0)

if(localIndex.version!==expectedRelease||expectedPackCount<1||expectedSvgCount<1){
  console.error("Assets freshness audit failed: local generated index is inconsistent with the stable release contract.")
  process.exit(1)
}

let current=""
try{
  current=execFileSync("git",["ls-remote",gitRemote,`refs/heads/${sourceRef}`],{encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim().split(/\s+/)[0]
}catch{
  console.error(`Assets freshness audit failed: unable to query ${sourceRepository}/${sourceRef}.`)
  process.exit(1)
}

if(current===runtimeCommit){
  console.log(`Assets freshness audit passed at runtime pin: ${runtimeCommit}`)
  process.exit(0)
}
if(current===acceptedMainCommit){
  console.log(`Assets freshness audit passed at accepted head: ${acceptedMainCommit} (runtime pin ${runtimeCommit})`)
  process.exit(0)
}

function allowedPostReleaseFile(file){
  return file==="README.md"||file.startsWith("docs/")||file.startsWith("moonwitness/brand/generated/")||file.startsWith("penpot/generated/")
}

try{
  const [versionResponse,packsResponse]=await Promise.all([
    fetchWithTimeout(`${rawBase}/VERSION`),
    fetchWithTimeout(`${rawBase}/moonwitness/asset-packs.json`),
  ])
  if(!versionResponse.ok||!packsResponse.ok) throw new Error("upstream release metadata unavailable")

  const version=(await versionResponse.text()).trim().replace(/^v/,"")
  const packs=await packsResponse.json()
  const packCount=Array.isArray(packs.packs)?packs.packs.length:0
  const svgCount=Number(packs.coverage?.svgSources??0)

  if(version!==expectedRelease||packs.version!==expectedRelease||packCount!==expectedPackCount||svgCount!==expectedSvgCount){
    console.error("Assets freshness audit failed: upstream source inventory differs from the mirrored generated registry.")
    console.error(`- local: v${expectedRelease} / ${expectedPackCount} packs / ${expectedSvgCount} SVGs`)
    console.error(`- upstream: v${version} / ${packCount} packs / ${svgCount} SVGs`)
    process.exit(1)
  }

  const worktree=await mkdtemp(path.join(os.tmpdir(),"rocksoul-assets-freshness-"))
  let changedFiles=[]
  try{
    execFileSync("git",["init","-q",worktree],{stdio:"ignore"})
    execFileSync("git",["-C",worktree,"remote","add","origin",gitRemote],{stdio:"ignore"})
    execFileSync("git",["-C",worktree,"fetch","-q","--no-tags","--depth=96","origin",sourceRef],{stdio:"ignore"})
    const fetchedHead=execFileSync("git",["-C",worktree,"rev-parse","FETCH_HEAD"],{encoding:"utf8"}).trim()
    if(fetchedHead!==current) throw new Error(`assets head moved during audit: ${current} -> ${fetchedHead}`)
    execFileSync("git",["-C",worktree,"cat-file","-e",`${acceptedMainCommit}^{commit}`],{stdio:"ignore"})
    changedFiles=execFileSync("git",["-C",worktree,"diff","--name-only",acceptedMainCommit,current],{encoding:"utf8"})
      .split(/\r?\n/).map((value)=>value.trim()).filter(Boolean)
  }finally{
    await rm(worktree,{recursive:true,force:true})
  }

  const contractChanges=changedFiles.filter((file)=>!allowedPostReleaseFile(file))
  if(contractChanges.length){
    console.error("Assets freshness audit failed: consumer-visible source/contract drift requires an explicit UI sync.")
    contractChanges.forEach((file)=>console.error(`- ${file}`))
    console.error(`- accepted assets head: ${acceptedMainCommit}`)
    console.error(`- current assets head:  ${current}`)
    process.exit(1)
  }

  console.warn(`Assets main advanced after accepted sync: ${acceptedMainCommit} -> ${current}`)
  console.warn("Only bounded generated/design documentation changed; runtime/source inventory remains identical.")
  console.log(`Assets freshness audit passed: v${version} / ${packCount} packs / ${svgCount} SVGs`)
}catch(error){
  console.error("Assets freshness audit failed: unable to verify bounded release compatibility.")
  if(error instanceof Error) console.error(error.message)
  process.exit(1)
}
