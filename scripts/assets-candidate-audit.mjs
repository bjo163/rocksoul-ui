import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const [stable,generated]=await Promise.all([
  readFile(path.join(root,"src/contracts/assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src/generated/assets-v1.3.ts"),"utf8"),
])

const failures=[]
const stableSha="7d924d5915364b222e1d1287e493f4b742e283a3"
if(!stable.includes(stableSha) || !stable.includes('assetRelease: "1.3.0"')) failures.push("stable v1.3 channel")
if(!stable.includes("assetPackCount: 41")) failures.push("stable v1.3 pack count")
if(!generated.includes('"version": "1.3.0"')) failures.push("generated developer registry version")

const expectedPacks=["product-icons","dashboard","data-viz","hero-backgrounds","state-illustrations","motion","sfx","graph-vector","badge-status","source-file","geospatial","cursor-interaction","persona-avatar","social-campaign","platform-delivery","onboarding","document-report","notification","editorial","evidence-media","correlation-semantics","kanban-workflow","calendar-temporal","chat-collaboration","ai-workspace","authorization-security","data-grid","form-controls","theme-accessibility","privacy-redaction","evidence-integrity","export-seal","rocksoul-character","command-keyboard","texture-material","architecture-diagram","device-mockup","jurisdiction-locale","cinematic-hero","runtime-motion","developer-distribution"]
for(const pack of expectedPacks){
  if(!generated.includes(`"${pack}"`)) failures.push(`v1.3 generated pack ${pack}`)
}

let output=""
try{
  output=execFileSync("git",[
    "ls-remote",
    "https://github.com/bjo163/rocksoul-assets.git",
    "refs/heads/main",
  ],{encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim()
}catch{
  failures.push("stable remote query")
}
const current=output.split(/\s+/)[0]
if(current && current!==stableSha) failures.push(`stable assets drift: ${stableSha} -> ${current}`)

if(failures.length){
  console.error("Assets v1.3 stable audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets v1.3 stable audit passed: 41 packs / ${stableSha}`)
