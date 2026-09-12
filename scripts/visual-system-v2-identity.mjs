import { readFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"
import { resolve } from "node:path"

function readString(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*"([^"]+)"`))
  return match?.[1] ?? null
}

export async function resolveVisualSystemV2Identity() {
  const projection = JSON.parse(await readFile("src/contracts/visual-system-v2.compatibility.json", "utf8"))
  const assetSync = await readFile("src/contracts/assets-v2.ts", "utf8")

  const identity = {
    schema: "rocksoul.visual-system-v2-identity.v1",
    authorityRepository: projection.authority?.repository ?? null,
    visualSystemVersion: projection.visualSystemVersion ?? null,
    foundationRelease: projection.authority?.foundationRelease ?? null,
    foundationCommit: projection.authority?.foundationCommit ?? null,
    contractPath: readString(assetSync, "visualContractPath"),
    runtimeDeliveryCommit: readString(assetSync, "commit"),
    upstreamContractBlobSha: readString(assetSync, "visualContractBlobSha"),
  }

  const failures = []
  if (identity.authorityRepository !== "bjo163/rocksoul-assets") failures.push("unexpected authority repository")
  if (identity.visualSystemVersion !== 2) failures.push("unexpected Visual System version")
  if (!/^[0-9a-f]{40}$/.test(identity.foundationCommit ?? "")) failures.push("invalid foundation commit")
  if (!/^[0-9a-f]{40}$/.test(identity.runtimeDeliveryCommit ?? "")) failures.push("invalid runtime delivery commit")
  if (!/^[0-9a-f]{40}$/.test(identity.upstreamContractBlobSha ?? "")) failures.push("invalid upstream contract blob SHA")
  if (identity.contractPath !== "moonwitness/visual-system-v2.json") failures.push("unexpected upstream contract path")

  if (failures.length) {
    throw new Error(`Visual System V2 identity invalid: ${failures.join("; ")}`)
  }

  return Object.freeze(identity)
}

const invokedDirectly = process.argv[1]
  && import.meta.url === pathToFileURL(resolve(process.argv[1])).href

if (invokedDirectly) {
  try {
    console.log(JSON.stringify(await resolveVisualSystemV2Identity()))
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exit(1)
  }
}
