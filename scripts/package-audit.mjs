import { access, readFile, stat } from "node:fs/promises"
import { pathToFileURL } from "node:url"
import path from "node:path"

const root=process.cwd()
const pkg=JSON.parse(await readFile(path.join(root,"package.json"),"utf8"))
const failures=[]

const requiredFiles=[
  "dist/index.js",
  "dist/index.d.ts",
  "dist/styles.css",
  "dist/brand/logo-mark.svg",
  "dist/brand/logo-horizontal.svg",
  "dist/brand/site.webmanifest",
  "dist/brand/generated/manifest.json",
  "dist/brand/generated/favicon-16.png",
  "dist/brand/generated/favicon-32.png",
  "dist/brand/generated/favicon-48.png",
  "dist/brand/generated/favicon.ico",
  "dist/brand/generated/apple-touch-icon-180.png",
  "dist/brand/generated/app-icon-192.png",
  "dist/brand/generated/app-icon-512.png",
  "dist/brand/generated/app-icon-maskable-192.png",
  "dist/brand/generated/app-icon-maskable-512.png",
  "dist/brand/generated/social-avatar-512.png",
  "dist/brand/generated/og-card-1200x630.png",
]
for(const file of requiredFiles){
  try{
    await access(path.join(root,file))
    const info=await stat(path.join(root,file))
    if(info.size===0) failures.push(`empty artifact ${file}`)
  }catch{
    failures.push(`missing artifact ${file}`)
  }
}

if(pkg.name!=="@rocksoul/ui") failures.push("package name")
if(pkg.main!=="./dist/index.js") failures.push("main export")
if(pkg.module!=="./dist/index.js") failures.push("module export")
if(pkg.types!=="./dist/index.d.ts") failures.push("types export")
if(pkg.style!=="./dist/styles.css") failures.push("style export")
if(pkg.exports?.["./styles.css"]!=="./dist/styles.css") failures.push("styles export")
if(pkg.exports?.["./brand/*"]!=="./dist/brand/*") failures.push("brand wildcard export")
try {
  const manifest=JSON.parse(await readFile(path.join(root,"dist","brand","generated","manifest.json"),"utf8"))
  if(manifest.outputs?.length!==11) failures.push("generated brand delivery inventory")
} catch {
  failures.push("generated brand delivery manifest")
}
if(!pkg.peerDependencies?.react||!pkg.peerDependencies?.["react-dom"]) failures.push("React peer dependencies")
if(!pkg.files?.includes("dist")) failures.push("dist package file allowlist")
if(pkg.scripts?.prepare!=="npm run build:lib") failures.push("Git dependency prepare build")

try {
  const declarations=await readFile(path.join(root,"dist","index.d.ts"),"utf8")
  if(declarations.includes("styles.css")) failures.push("type entry must not import CSS")
} catch {}

try {
  const library=await import(pathToFileURL(path.join(root,"dist","index.js")).href)
  const requiredExports=[
    "ApplicationShell",
    "AutoMenu",
    "DashboardScreen",
    "KanbanScreen",
    "CalendarScreen",
    "ChatScreen",
    "AIWorkspaceScreen",
    "ProfileSettingsScreen",
    "AuthorizationScreen",
    "StatePanel",
    "MW0042Overview",
  ]
  for(const name of requiredExports){
    if(!(name in library)) failures.push(`missing runtime export ${name}`)
  }
}catch(error){
  failures.push(`runtime import failed: ${error instanceof Error ? error.message : String(error)}`)
}

if(failures.length){
  console.error("Package contract audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log("Package contract audit passed.")
