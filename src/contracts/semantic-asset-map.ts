import { ROCKSOUL_ASSETS_SYNC } from "./assets-v2"

export type SemanticPrimitiveId =
  | "graph-node" | "edge-supports" | "edge-contradicts" | "status-verified"
  | "status-contested" | "evidence-bounds" | "evidence-source" | "privacy-redacted"
  | "privacy-confidential" | "integrity-hash" | "provenance-chain" | "legal-basis"
  | "jurisdiction-zone" | "law-node" | "person-node" | "event-node"

export const semanticPrimitiveByNodeKind = {
  story: "graph-node", claim: "graph-node", evidence: "evidence-source", source: "evidence-source",
  text: "graph-node", event: "event-node", person: "person-node", law: "law-node",
  case: "graph-node", location: "jurisdiction-zone",
} as const satisfies Record<string, SemanticPrimitiveId>

export const productionScreenAssetMap = {
  dashboard: { required: ["dashboard", "data-viz", "graph-vector"], allowed: ["primitive", "specimen"] },
  cases: { required: ["evidence-media", "correlation-semantics", "evidence-integrity"], allowed: ["primitive", "specimen"] },
  platform: { required: ["architecture-diagram", "authorization-security", "theme-accessibility"], allowed: ["primitive", "specimen"] },
  auth: { required: ["authorization-security", "theme-accessibility"], allowed: ["primitive", "illustration"] },
} as const

export function semanticPrimitiveUrl(id: SemanticPrimitiveId, commit = ROCKSOUL_ASSETS_SYNC.acceptedMainCommit) {
  return `https://raw.githubusercontent.com/${ROCKSOUL_ASSETS_SYNC.repository}/${commit}/moonwitness/semantic-primitives-pack/svg/${id}.svg`
}
