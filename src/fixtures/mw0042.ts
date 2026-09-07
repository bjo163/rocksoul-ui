import type { RecordSummary } from "../components/four-record-summary"

export const mw0042 = {
  caseId: "MW-0042",
  eyebrow: "GOLDEN CASE / DESIGN FIXTURE",
  title: "The Silent Flight",
  summary:
    "Four separate records appear to line up around one unexplained movement. Enough to investigate. Not enough to close.",
  status: "unresolved" as const,
  updatedAt: "2026-09-08T05:30:00+07:00",
  tags: ["movement", "night", "identity", "source-text", "legal-boundary"],
  records: [
    {
      domain: "STORY",
      recordId: "STORY-0042-A",
      title: "A route nobody remembers taking",
      description:
        "A recurring account describes a silent departure, a missing interval, and a return before sunrise.",
      source: "SRC-STORY-0042-A",
      sourceRepo: "rocksoul-legend",
      canonicalStatus: "canonical",
      verification: "source-linked",
      status: "supported",
    },
    {
      domain: "EVENT",
      recordId: "EVENT-0042-A",
      title: "Movement recorded inside the missing interval",
      description:
        "A timestamped event record places an unidentified movement inside the same time window.",
      source: "SRC-EVENT-0042-A",
      sourceRepo: "rocksoul-event",
      canonicalStatus: "canonical",
      verification: "verified-fixture",
      status: "supported",
    },
    {
      domain: "PERSON",
      recordId: "PERSON-0042-A",
      title: "Identity match is incomplete",
      description:
        "Two attributes line up with the person record, but one key identity field remains unverified.",
      source: "SRC-PERSON-0042-A",
      sourceRepo: "rocksoul-superhero",
      canonicalStatus: "reference",
      verification: "partial",
      status: "partial",
    },
    {
      domain: "RGBL",
      recordId: "RGBL-0042-A",
      title: "The text preserves the same motif",
      description:
        "A source fragment contains a movement / silence / return motif. Semantic relation is present; causal relation is not established.",
      source: "SRC-RGBL-0042-A",
      sourceRepo: "rocksoul-rgbl",
      canonicalStatus: "canonical",
      verification: "source-linked",
      status: "supported",
    },
  ] satisfies RecordSummary[],
  correlation: {
    score: 0.87,
    confidence: "medium-high",
    explanation:
      "The trails are starting to line up. That still doesn’t make them the same thing. Identity remains incomplete.",
    dimensions: [
      { label: "Temporal", value: 0.94 },
      { label: "Motif", value: 0.89 },
      { label: "Source independence", value: 0.91 },
      { label: "Identity", value: 0.64, tone: "warning" as const },
    ],
  },
  legal: {
    status: "disputed" as const,
    jurisdiction: "jurisdiction unresolved",
    review: "needs legal review",
    prompt:
      "Even if the movement happened as reconstructed, the applicable authority and rule remain unresolved.",
    basis: "LAW-FIX-01 / LAW-FIX-02 · reference-only",
  },
  community: {
    following: 128,
    saved: 44,
    discussions: 17,
    submission: {
      id: "SUB-0042-01",
      state: "needs-context" as const,
      title: "Possible second event trace",
      body: "Community member submitted an additional timestamp, but provenance is incomplete.",
    },
  },
  repositories: [
    { repo: "rocksoul-legend", status: "online" as const },
    { repo: "rocksoul-event", status: "online" as const },
    { repo: "rocksoul-superhero", status: "degraded" as const },
    { repo: "rocksoul-rgbl", status: "online" as const },
    { repo: "rocksoul-aws", status: "online" as const },
  ],
}
