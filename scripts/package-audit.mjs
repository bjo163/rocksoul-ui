import { access, readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const pkg=JSON.parse(await readFile(path.join(root,"package.json"),"utf8"))
const failures=[]

const requiredFiles=["dist/index.js","dist/index.d.ts","dist/styles.css"]
for(const file of requiredFiles){
  try{ await access(path.join(root,file)) }catch{ failures.push(`missing artifact ${file}`) }
}

if(pkg.name!=="@rocksoul/ui") failures.push("package name")
if(pkg.module!=="./dist/index.js") failures.push("module export")
if(pkg.types!=="./dist/index.d.ts") failures.push("types export")
if(pkg.exports?.["./styles.css"]!=="./dist/styles.css") failures.push("styles export")
if(!pkg.peerDependencies?.react||!pkg.peerDependencies?.["react-dom"]) failures.push("React peer dependencies")
if(!pkg.files?.includes("dist")) failures.push("dist package file allowlist")
try {
  const declarations = await readFile(path.join(root,"dist","index.d.ts"),"utf8")
  if (declarations.includes("styles.css")) failures.push("type entry must not import CSS")
} catch {}

if(failures.length){
  console.error("Package contract audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}
console.log("Package contract audit passed.")
