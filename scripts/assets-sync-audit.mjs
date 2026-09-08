import { access, readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const read=(file)=>readFile(path.join(root,file),"utf8")
const [contracts,shell,screens,stories,theme,four]=await Promise.all([
  read("src/contracts/assets-v2.ts"),
  read("src/components/application-shell.tsx"),
  read("src/screens/application-screens.tsx"),
  read("src/stories/V2Screens.stories.tsx"),
  read("src/components/theme-toggle.tsx"),
  read("src/components/four-record-summary.tsx"),
])

const failures=[]
const expectedSha="f0f93363c73895e52987f9a3c757e4f5115eca99"
if(!contracts.includes(expectedSha)) failures.push("rocksoul-assets sync SHA")
if(!contracts.includes('assetRelease: "1.1.0"')) failures.push("assets release 1.1.0")
if(!contracts.includes('repositoryAcceptance: "passed"')) failures.push("assets repository acceptance")
if(!contracts.includes('livePenpotVerification: "manual-follow-up"')) failures.push("live Penpot verification boundary")
for(const id of ["dashboard","cases","kanban","calendar","chat","ai","resources","profile","settings"]){
  if(!contracts.includes(`id: "${id}"`)) failures.push(`v2 navigation item ${id}`)
}
for(const resource of ["case","event","person","rgbl","aws","correlation"]){
  if(!contracts.includes(`resource: "${resource}"`)) failures.push(`resource descriptor ${resource}`)
}
for(const repo of ["rocksoul-mftl","rocksoul-legend","rocksoul-superhero","rocksoul-rgbl","rocksoul-aws","rocksoul-correlation"]){
  if(!contracts.includes(`repo: "${repo}"`)) failures.push(`canonical repository ${repo}`)
}
for(let id=17;id<=27;id++){
  if(!stories.includes(`export const S${id}`)) failures.push(`v2 Storybook screen ${id}`)
}
for(const screen of ["DashboardScreen","CommandPaletteReferenceScreen","NotificationsReferenceScreen","KanbanScreen","CalendarScreen","ChatScreen","AIWorkspaceScreen","ResourcesScreen","ProfileSettingsScreen","AuthorizationScreen","ApplicationStatesScreen"]){
  if(!screens.includes(`export function ${screen}`)) failures.push(`v2 application screen ${screen}`)
}
for(const state of ["empty","loading","error","offline","forbidden"]){
  if(!contracts.includes(`${state}:`)) failures.push(`system state ${state}`)
}
if(!shell.includes('w-[72px]')||!shell.includes('lg:w-[220px]')) failures.push("canonical 72/220 sidebar geometry")
if(!shell.includes('Skip to main content')) failures.push("skip link")
if(!shell.includes('data-mode="AutoMenu"')) failures.push("AutoMenu mode")
if(!theme.includes('"system"')||!theme.includes('"light"')||!theme.includes('"dark"')) failures.push("light/dark/system theme")
if(!four.includes('min-h-[92px]')) failures.push("mobile compact record geometry")
if(!screens.includes("ResourcesScreen")) failures.push("resources screen")
if(!screens.includes('activeResource="settings"')) failures.push("settings active navigation")
for(const file of [
  "public/brand/brand-assets.json","public/brand/logo-mark.svg","public/brand/logo-horizontal.svg",
  "public/brand/logo-stacked.svg","public/brand/wordmark.svg","public/brand/logo-monochrome.svg",
  "public/brand/rocksoul-lockup.svg","public/brand/favicon.svg","public/brand/apple-touch-icon.svg",
  "public/brand/app-icon-maskable.svg","public/brand/app-icon.svg","public/brand/social-avatar.svg",
  "public/brand/og-card.svg","public/brand/safari-pinned-tab.svg","public/brand/site.webmanifest",
  "public/brand/generated/manifest.json","public/brand/generated/favicon-16.png",
  "public/brand/generated/favicon-32.png","public/brand/generated/favicon-48.png",
  "public/brand/generated/favicon.ico","public/brand/generated/apple-touch-icon-180.png",
  "public/brand/generated/app-icon-192.png","public/brand/generated/app-icon-512.png",
  "public/brand/generated/app-icon-maskable-192.png","public/brand/generated/app-icon-maskable-512.png",
  "public/brand/generated/social-avatar-512.png","public/brand/generated/og-card-1200x630.png"
]){
  try{await access(path.join(root,file))}catch{failures.push(`brand asset ${file}`)}
}
const brandManifest=JSON.parse(await read("public/brand/brand-assets.json"))
if(brandManifest.tagline!=="Truth leaves a trace.") failures.push("brand tagline")
if(brandManifest.assets?.length!==13) failures.push("brand source asset inventory")
const deliveryManifest=JSON.parse(await read("public/brand/generated/manifest.json"))
if(deliveryManifest.outputs?.length!==11) failures.push("brand delivery asset inventory")
for(const output of deliveryManifest.outputs ?? []){
  if(!output.source?.startsWith("moonwitness/brand/")) failures.push(`delivery source provenance ${output.path}`)
}

if(failures.length){
  console.error("Assets v2 sync audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log(`Assets v2 sync audit passed against ${expectedSha}.`)
