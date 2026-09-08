import { access, readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const read=(file)=>readFile(path.join(root,file),"utf8")
const [contracts,shell,screens,stories,theme,four,packRegistry,lock,generated]=await Promise.all([
  read("src/contracts/assets-v2.ts"),
  read("src/components/application-shell.tsx"),
  read("src/screens/application-screens.tsx"),
  read("src/stories/V2Screens.stories.tsx"),
  read("src/components/theme-toggle.tsx"),
  read("src/components/four-record-summary.tsx"),
  read("src/contracts/asset-packs.ts"),
  read("public/assets/asset-lock.json").then(JSON.parse),
  read("public/assets/developer-v1.3/assets.json").then(JSON.parse),
])

const failures=[]
const value=(pattern,label)=>{
  const match=contracts.match(pattern)
  if(!match) failures.push("missing "+label)
  return match?.[1]
}
const expectedSha=value(/commit:\s*"([0-9a-f]{40})"/,"asset sync commit")
const expectedRelease=value(/assetRelease:\s*"([^"]+)"/,"asset release")
const expectedPackCount=Object.keys(generated.packs??{}).length
const expectedAssetCount=Number(generated.coverage?.extensions?.svg??0)
const expectedMirrored=Array.isArray(lock.files)?lock.files.length:0
const expectedDataViz=Number(generated.packs?.["data-viz"]?.count??0)
const declaredPacks=Object.keys((await import("../src/contracts/asset-packs.ts")).moonWitnessAssetPacks).length

if(expectedSha && lock.sourceCommit!==expectedSha) failures.push("asset lock source commit")
if(expectedRelease && lock.release!==expectedRelease) failures.push("asset lock release")
if(expectedMirrored<1) failures.push("mirrored runtime inventory")
if(!contracts.includes('repositoryAcceptance: "passed"')) failures.push("assets repository acceptance")
if(!contracts.includes('livePenpotVerification: "manual-follow-up"')) failures.push("live Penpot verification boundary")
if(declaredPacks!==expectedPackCount) failures.push(`asset pack contract count ${declaredPacks} != generated ${expectedPackCount}`)
if(expectedDataViz<1 || !packRegistry.includes(`"data-viz": { id: "data-viz", count: ${expectedDataViz}`)) failures.push("data-viz contract count")
for(const pack of Object.keys(generated.packs??{})){
  if(!packRegistry.includes(`"${pack}"`)) failures.push(`asset pack registry ${pack}`)
}
for(const id of ["dashboard","cases","kanban","calendar","chat","ai","resources","profile","settings"]){
  if(!contracts.includes(`id: "${id}"`)) failures.push(`v2 navigation item ${id}`)
}
for(const resource of ["case","event","person","rgbl","aws","perspective","correlation"]){
  if(!contracts.includes(`resource: "${resource}"`)) failures.push(`resource descriptor ${resource}`)
}
for(const repository of ["rocksoul-mftl","rocksoul-legend","rocksoul-superhero","rocksoul-rgbl","rocksoul-aws","rocksoul-jizz","rocksoul-correlation"]){
  if(!contracts.includes(`repo: "${repository}"`)) failures.push(`canonical repository ${repository}`)
}
for(let id=17;id<=27;id++) if(!stories.includes(`export const S${id}`)) failures.push(`v2 Storybook screen ${id}`)
if(!shell.includes("Skip to main content")) failures.push("skip link")
if(!shell.includes('data-mode="AutoMenu"')) failures.push("AutoMenu mode")
if(!theme.includes('"system"')||!theme.includes('"light"')||!theme.includes('"dark"')) failures.push("light/dark/system theme")
if(!four.includes("min-h-[92px]")) failures.push("mobile compact record geometry")
if(!screens.includes("ResourcesScreen")) failures.push("resources screen")
for(const file of [
  "public/brand/brand-assets.json","public/brand/logo-mark.svg","public/brand/logo-horizontal.svg",
  "public/brand/logo-stacked.svg","public/brand/wordmark.svg","public/brand/logo-monochrome.svg",
  "public/brand/rocksoul-lockup.svg","public/brand/favicon.svg","public/brand/apple-touch-icon.svg",
  "public/brand/app-icon-maskable.svg","public/brand/app-icon.svg","public/brand/social-avatar.svg",
  "public/brand/og-card.svg","public/brand/generated/og-card-1200x630.png","public/brand/safari-pinned-tab.svg","public/brand/site.webmanifest"
]){
  try{await access(path.join(root,file))}catch{failures.push(`brand asset ${file}`)}
}
try{await access(path.join(root,".github/workflows/sync-brand-binary.yml"))}catch{failures.push("canonical brand binary sync workflow")}
if(expectedAssetCount<1) failures.push("canonical asset inventory")
if(failures.length){
  console.error("Assets v2 sync audit failed:")
  failures.forEach((failure)=>console.error("- "+failure))
  process.exit(1)
}
console.log(`Assets v2 sync audit passed against ${expectedSha}: ${expectedPackCount} packs / ${expectedAssetCount} canonical SVGs / ${expectedMirrored} mirrored files.`)
