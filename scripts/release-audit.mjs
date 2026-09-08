import { access, readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const pkg=JSON.parse(await readFile(path.join(root,"package.json"),"utf8"))
const [indexSource, assetsContract, assetsRegistry, heroContract, readme] = await Promise.all([
  readFile(path.join(root,"src","index.ts"),"utf8"),
  readFile(path.join(root,"src","contracts","assets-v2.ts"),"utf8"),
  readFile(path.join(root,"src","contracts","assets-registry.ts"),"utf8"),
  readFile(path.join(root,"src","contracts","cinematic-web-hero.ts"),"utf8"),
  readFile(path.join(root,"README.md"),"utf8"),
])

const failures=[]

if(pkg.name!=="@rocksoul/ui") failures.push("package name")
if(pkg.version!=="0.12.0") failures.push(`package version ${pkg.version} != 0.12.0`)
if(pkg.private!==true) failures.push("GitHub-distributed package must remain private/non-npm")
if(pkg.scripts?.prepare!=="npm run build:lib") failures.push("Git dependency prepare hook")
if(pkg.scripts?.["audit:release"]!=="node scripts/release-audit.mjs") failures.push("release audit script")

for(const symbol of ["CinematicWebHero","cinematicWebHeroAssets","cinematicWebHeroContract"]){
  if(!indexSource.includes("cinematic-web-hero")) failures.push(`public export path for ${symbol}`)
}

if(!assetsContract.includes('assetRelease: "1.3.1"')) failures.push("assets release v1.3.1")
if(!assetsRegistry.includes("Object.keys(assets.packs).length")) failures.push("derived asset pack inventory")
if(!assetsRegistry.includes("assets.coverage.extensions.svg")) failures.push("derived canonical SVG inventory")
if(!heroContract.includes('profileVersion: "1.0.0"')) failures.push("cinematic delivery profile 1.0.0")
if(!heroContract.includes('sourceRelease: "1.3.1"')) failures.push("cinematic source release v1.3.1")
if(!readme.includes("@rocksoul/ui")) failures.push("README package identity")
if(!readme.includes("CinematicWebHero")) failures.push("README cinematic hero documentation")

for(const file of ["dist/index.js","dist/index.d.ts","dist/styles.css"]){
  try{ await access(path.join(root,file)) }catch{ failures.push(`release artifact ${file}`) }
}

if(failures.length){
  console.error("Release closure audit failed:")
  failures.forEach((failure)=>console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Release closure audit passed: ${pkg.name} ${pkg.version} / assets ${assetsContract.match(/assetRelease:\s*"([^"]+)"/)?.[1]} / cinematic web hero ${heroContract.match(/profileVersion:\s*"([^"]+)"/)?.[1]}.`)
