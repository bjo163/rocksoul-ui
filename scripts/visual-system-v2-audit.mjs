import { readFile } from "node:fs/promises"

const projection = JSON.parse(await readFile("src/contracts/visual-system-v2.compatibility.json", "utf8"))
const runtime = await readFile("src/contracts/visual-system-v2.ts", "utf8")
const assetSync = await readFile("src/contracts/assets-v2.ts", "utf8")
const pkg = JSON.parse(await readFile("package.json", "utf8"))

const failures = []

const exact = {
  typographyRoles: ["display", "body", "mono", "archive-serif"],
  densityModes: ["compact", "comfortable", "editorial"],
  surfacePersonalities: ["operator", "forensic", "editorial", "archive", "cinematic", "community"],
  graphNodeIds: ["canonical-record", "evidence", "source", "person", "event", "story", "rgbl-text", "legal-state", "external-reference", "unresolved-record", "inferred-candidate-record", "missing-record", "system-provider-resource"],
  graphEdgeIds: ["supports", "contradicts", "references", "temporal", "identity", "legal", "provenance", "dependency", "routes-to", "unresolved-candidate"],
  chartIds: ["line", "area", "bar", "stacked-bar", "heat-strip", "donut", "time-series", "threshold-boundary", "confidence-uncertainty"],
  lifecycleStatuses: ["canonical", "active", "legacy", "frozen-reference", "deprecated", "experimental"],
}

function sameSet(actual, expected) {
  return Array.isArray(actual)
    && actual.length === expected.length
    && new Set(actual).size === actual.length
    && expected.every((value) => actual.includes(value))
}

function readString(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*"([^"]+)"`))
  return match?.[1] ?? null
}

if (projection.schemaVersion !== 1) failures.push("compatibility projection schemaVersion must remain 1")
if (projection.visualSystemVersion !== 2) failures.push("visualSystemVersion must remain 2")
if (projection.status !== "frozen-specification") failures.push("Visual System V2 specification must remain frozen")
if (projection.authority?.repository !== "bjo163/rocksoul-assets") failures.push("unexpected Visual System authority repository")
if (projection.authority?.freezeIssue !== 90) failures.push("unexpected Visual System freeze issue")
if (projection.authority?.foundationRelease !== "1.6.0") failures.push("unexpected frozen foundation release")
if (!/^[0-9a-f]{40}$/.test(projection.authority?.foundationCommit ?? "")) failures.push("invalid frozen foundation commit")
if (projection.authority?.contractPath !== "moonwitness/visual-system-v2.json") failures.push("unexpected upstream V2 contract path")
if (projection.layers?.moonwitness !== "rigorous-system") failures.push("MoonWitness layer role drift")
if (projection.layers?.rocksoul !== "human-intervention") failures.push("ROCKSOUL layer role drift")

for (const [key, expected] of Object.entries(exact)) {
  if (!sameSet(projection[key], expected)) failures.push(key + " drifted from the frozen upstream projection")
}

const assetRepository = readString(assetSync, "repository")
const assetCommit = readString(assetSync, "commit")
const acceptedMainCommit = readString(assetSync, "acceptedMainCommit")
const contractPath = readString(assetSync, "visualContractPath")
const contractBlobSha = readString(assetSync, "visualContractBlobSha")

if (assetRepository !== "bjo163/rocksoul-assets") failures.push("runtime asset source repository drift")
if (!assetCommit || !/^[0-9a-f]{40}$/.test(assetCommit)) failures.push("runtime delivery commit is not immutable")
if (!acceptedMainCommit || !/^[0-9a-f]{40}$/.test(acceptedMainCommit)) failures.push("accepted runtime delivery commit is not immutable")
if (assetCommit !== acceptedMainCommit) failures.push("accepted runtime delivery commit differs from runtime delivery commit")
if (contractPath !== "moonwitness/visual-system-v2.json") failures.push("runtime visual contract path drift")
if (!contractBlobSha || !/^[0-9a-f]{40}$/.test(contractBlobSha)) failures.push("runtime visual contract blob SHA is not immutable")

for (const needle of [
  'import compatibilityProjection from "./visual-system-v2.compatibility.json"',
  'import { ROCKSOUL_ASSETS_SYNC } from "./assets-v2"',
  "visualSystemV2RuntimeIdentity",
  "runtimeDelivery",
  "isVisualSystemV2SurfacePersonality",
  "isVisualSystemV2GraphNodeId",
  "isVisualSystemV2GraphEdgeId",
]) {
  if (!runtime.includes(needle)) failures.push("runtime compatibility adapter missing: " + needle)
}

if (pkg.scripts?.["audit:visual-system-v2"] !== "node scripts/visual-system-v2-audit.mjs") failures.push("package script audit:visual-system-v2 is missing")
if (!pkg.scripts?.ci?.includes("npm run audit:visual-system-v2")) failures.push("canonical CI does not run audit:visual-system-v2")

if (failures.length) {
  console.error("Visual System V2 compatibility audit failed:")
  failures.forEach((failure) => console.error("- " + failure))
  process.exit(1)
}

const apiUrl = `https://api.github.com/repos/${assetRepository}/contents/${contractPath}?ref=${assetCommit}`
try {
  const response = await fetch(apiUrl, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "rocksoul-ui-visual-contract-audit",
    },
  })
  if (!response.ok) throw new Error(`GitHub API ${response.status}`)
  const payload = await response.json()

  if (payload.sha !== contractBlobSha) {
    throw new Error(`upstream contract blob SHA mismatch: expected ${contractBlobSha}, received ${payload.sha ?? "missing"}`)
  }

  if (payload.encoding !== "base64" || typeof payload.content !== "string") {
    throw new Error("upstream contract response is not base64 content")
  }

  const upstream = JSON.parse(Buffer.from(payload.content.replace(/\\s/g, ""), "base64").toString("utf8"))
  const upstreamProjection = {
    schemaVersion: upstream.schemaVersion,
    status: upstream.status,
    typographyRoles: upstream.typography?.roles?.map(({ id }) => id),
    densityModes: Object.keys(upstream.densityModes ?? {}),
    surfacePersonalities: Object.keys(upstream.surfacePersonalities ?? {}),
    graphNodeIds: upstream.graphGrammar?.nodes?.map(({ id }) => id),
    graphEdgeIds: upstream.graphGrammar?.edges?.map(({ id }) => id),
    chartIds: upstream.dataVizGrammar?.charts?.map(({ id }) => id),
    lifecycleStatuses: upstream.lifecycle?.statuses,
  }

  if (upstream.schemaVersion !== 1) failures.push("upstream visual contract schemaVersion is unsupported")
  if (upstream.status !== "foundation") failures.push("upstream visual contract status is unsupported")

  for (const key of Object.keys(exact)) {
    if (!sameSet(upstreamProjection[key], projection[key])) {
      failures.push(`upstream ${key} does not match the UI frozen projection`)
    }
  }
} catch (error) {
  failures.push(`fail-closed upstream contract handshake: ${error instanceof Error ? error.message : String(error)}`)
}

if (failures.length) {
  console.error("Visual System V2 compatibility audit failed:")
  failures.forEach((failure) => console.error("- " + failure))
  process.exit(1)
}

console.log(JSON.stringify({
  status: "PASS",
  visualSystemVersion: projection.visualSystemVersion,
  foundationRelease: projection.authority.foundationRelease,
  upstreamCommit: assetCommit,
  upstreamContractBlobSha: contractBlobSha,
  personalities: projection.surfacePersonalities.length,
  graphNodes: projection.graphNodeIds.length,
  graphEdges: projection.graphEdgeIds.length,
  charts: projection.chartIds.length,
}, null, 2))
