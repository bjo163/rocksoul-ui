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

if (!assetSync.includes('repository: "bjo163/rocksoul-assets"')) failures.push("runtime asset source repository drift")
if (!assetSync.includes('applicationVersion: "v2"')) failures.push("runtime asset application version is not V2")
if (!assetSync.includes('repositoryAcceptance: "passed"')) failures.push("runtime asset delivery is not repository-accepted")
if (!/commit:\\s*"[0-9a-f]{40}"/.test(assetSync)) failures.push("runtime delivery commit is not immutable")
if (!/acceptedMainCommit:\\s*"[0-9a-f]{40}"/.test(assetSync)) failures.push("accepted runtime delivery commit is not immutable")

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

console.log(JSON.stringify({
  status: "PASS",
  visualSystemVersion: projection.visualSystemVersion,
  foundationRelease: projection.authority.foundationRelease,
  personalities: projection.surfacePersonalities.length,
  graphNodes: projection.graphNodeIds.length,
  graphEdges: projection.graphEdgeIds.length,
  charts: projection.chartIds.length,
}, null, 2))
