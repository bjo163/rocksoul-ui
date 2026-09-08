import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,candidate,generated]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src/contracts/assets-candidate.ts"),"utf8"),
  readFile(path.join(root,"src/generated/assets-v1.3.ts"),"utf8"),
])

const failures=[]
const stableSha="95a6912409f849029e18093658b1c0e8158a32f0"
const candidateSha="2f458f0b0c34b936f15e08eb2f0d6fd39bd39b6d"
const candidateRef="feat/complete-visual-language-v1.3"

if(!stable.includes(stableSha) || !stable.includes('assetRelease: "1.2.0"')) failures.push("stable v1.2 channel")
if(!candidate.includes(candidateSha)) failures.push("candidate SHA")
if(!candidate.includes(`ref: "${candidateRef}"`)) failures.push("candidate ref")
if(!candidate.includes('registryVersion: "1.3.0"')) failures.push("candidate registry version")
if(!candidate.includes('upstreamCandidateRelease: "1.3.0"')) failures.push("candidate release metadata")
if(!candidate.includes('upstreamRepositoryAcceptance: "pending-ci"')) failures.push("candidate acceptance boundary")
if(!candidate.includes("packCount: 41")) failures.push("candidate pack count")
if(!candidate.includes("canonicalAssetCount: 591")) failures.push("candidate canonical asset count")
if(!candidate.includes('status: "release-candidate-pending-ci"')) failures.push("candidate release boundary")
if(!generated.includes('"version": "1.3.0"')) failures.push("generated developer registry version")

const expectedPacks=["product-icons","dashboard","data-viz","hero-backgrounds","state-illustrations","motion","sfx","graph-vector","badge-status","source-file","geospatial","cursor-interaction","persona-avatar","social-campaign","platform-delivery","onboarding","document-report","notification","editorial","evidence-media","correlation-semantics","kanban-workflow","calendar-temporal","chat-collaboration","ai-workspace","authorization-security","data-grid","form-controls","theme-accessibility","privacy-redaction","evidence-integrity","export-seal","rocksoul-character","command-keyboard","texture-material","architecture-diagram","device-mockup","jurisdiction-locale","cinematic-hero","runtime-motion","developer-distribution"]
for(const pack of expectedPacks){
  if(!generated.includes(`"${pack}"`)) failures.push(`candidate pack ${pack}`)
}

let output=""
try{
  output=execFileSync("git",[
    "ls-remote",
    "https://github.com/bjo163/rocksoul-assets.git",
    `refs/heads/${candidateRef}`,
  ],{encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim()
}catch{
  failures.push("candidate remote query")
}
const current=output.split(/\s+/)[0]
if(current && current!==candidateSha){
  console.warn(`Assets v1.3 candidate branch moved after pinned snapshot: ${candidateSha} -> ${current}`)
  console.warn("Pinned candidate remains valid for review; re-audit drift before stable promotion.")
}

if(failures.length){
  console.error("Assets v1.3 candidate audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets v1.3 candidate audit passed: 41 packs / 591 assets / ${candidateSha}`)
