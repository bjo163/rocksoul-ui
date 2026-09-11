export const visualGoldenCorpusVersion = "1.0.0" as const

export type GoldenSurface =
  | "table"
  | "graph"
  | "map"
  | "timeline"
  | "inspector"
  | "document"
  | "console"
  | "print"

export type GoldenFixture = Readonly<{
  id: string
  title: string
  surfaces: readonly GoldenSurface[]
  tags: readonly string[]
  seed?: number
  valid: boolean
}>

export const visualGoldenFixtures = [
  { id: "verified-evidence-provenance", title: "Verified evidence with complete provenance", surfaces: ["table", "graph", "inspector", "document", "print"], tags: ["evidence", "verified", "provenance"], valid: true },
  { id: "reported-disputed-evidence", title: "Reported and disputed evidence", surfaces: ["table", "graph", "timeline", "inspector"], tags: ["evidence", "disputed"], valid: true },
  { id: "inferred-medium-confidence", title: "Inferred relation with medium confidence", surfaces: ["graph", "map", "inspector"], tags: ["inference", "confidence"], valid: true },
  { id: "unresolved-duplicate", title: "Unresolved duplicate identity", surfaces: ["table", "graph", "inspector"], tags: ["identity", "unresolved"], valid: true },
  { id: "missing-source", title: "Missing source", surfaces: ["table", "graph", "inspector", "document"], tags: ["source", "missing"], valid: true },
  { id: "stale-healthy-resource", title: "Stale but healthy resource", surfaces: ["table", "timeline", "console", "inspector"], tags: ["resource", "stale", "healthy"], valid: true },
  { id: "degraded-retrying-job", title: "Degraded resource with retrying job", surfaces: ["table", "timeline", "console", "inspector"], tags: ["process", "retrying", "degraded"], valid: true },
  { id: "restricted-record", title: "Cross-border restricted record", surfaces: ["table", "graph", "inspector", "document"], tags: ["restricted", "legal"], valid: true },
  { id: "protected-anonymous-source", title: "Protected witness and anonymous source", surfaces: ["table", "graph", "inspector", "document"], tags: ["trust", "privacy", "source"], valid: true },
  { id: "temporal-precision", title: "Exact, approximate and unknown time", surfaces: ["table", "timeline", "graph", "inspector"], tags: ["temporal", "uncertainty"], valid: true },
  { id: "verified-disputed-location", title: "Verified versus disputed map location", surfaces: ["map", "graph", "inspector"], tags: ["location", "disputed"], valid: true },
  { id: "observed-inferred-route", title: "Observed versus inferred route", surfaces: ["map", "graph", "timeline", "inspector"], tags: ["route", "inference"], valid: true },
  { id: "ai-summary-sources", title: "AI summary backed by retrieved sources", surfaces: ["document", "inspector", "console"], tags: ["ai", "source-backed"], valid: true },
  { id: "ai-review-pending", title: "AI inference pending human review", surfaces: ["document", "inspector", "console"], tags: ["ai", "human-review", "pending"], valid: true },
  { id: "tool-success-unverified", title: "Tool success with evidence still unverified", surfaces: ["table", "inspector", "console"], tags: ["tool", "success", "unverified"], valid: true },
  { id: "deployment-degraded-target", title: "Deployment success with target health degraded", surfaces: ["table", "timeline", "console", "inspector"], tags: ["deployment", "health", "degraded"], valid: true },
  { id: "rollback-attempt-history", title: "Rollback with attempt history", surfaces: ["timeline", "console", "inspector"], tags: ["deployment", "rollback", "history"], valid: true },
  { id: "change-set", title: "Added, removed, modified and moved change set", surfaces: ["table", "graph", "timeline", "document", "console"], tags: ["change", "diff"], valid: true },
  { id: "critical-acknowledged-unresolved", title: "Critical incident acknowledged but unresolved", surfaces: ["table", "timeline", "console", "inspector"], tags: ["critical", "acknowledged", "unresolved"], valid: true },
  { id: "dense-multistate-composite", title: "Dense multi-state Visual Constitution composite", surfaces: ["table", "graph", "map", "timeline", "inspector", "document", "console", "print"], tags: ["composite", "stress", "constitution"], seed: 20260912, valid: true },
] as const satisfies readonly GoldenFixture[]

export const visualGoldenInvalidFixtures = [
  { id: "invalid-verified-and-unverified", reason: "Mutually exclusive verification states" },
  { id: "invalid-public-and-confidential", reason: "Exclusive privacy states" },
  { id: "invalid-disabled-and-draggable", reason: "Disabled interaction cannot remain draggable" },
  { id: "invalid-complete-and-missing", reason: "Conflicting completeness states" },
  { id: "invalid-succeeded-and-running", reason: "Terminal and running process states conflict" },
] as const
