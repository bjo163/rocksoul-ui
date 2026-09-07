import type { RecordSummary } from "../components/four-record-summary"

export const mw0042 = {
  caseId: "MW-0042",
  eyebrow: "GOLDEN CASE / SYNTHETIC FIXTURE",
  title: "The Silent Flight",
  summary:
    "Four separate records appear to line up around one unexplained movement. Enough to investigate. Not enough to close.",
  status: "unresolved" as const,
  records: [
    {
      domain: "STORY",
      title: "A route nobody remembers taking",
      description:
        "A recurring account describes a silent departure, a missing interval, and a return before sunrise.",
      source: "SRC-STORY-0042-A",
      status: "supported",
    },
    {
      domain: "EVENT",
      title: "Movement inside the missing interval",
      description:
        "A timestamped event record places an unidentified movement inside the same time window.",
      source: "SRC-EVENT-0042-A",
      status: "supported",
    },
    {
      domain: "PERSON",
      title: "Identity match is incomplete",
      description:
        "Two attributes line up with the person record, but one key identity field remains unverified.",
      source: "SRC-PERSON-0042-A",
      status: "partial",
    },
    {
      domain: "RGBL",
      title: "The text preserves the same motif",
      description:
        "Movement, silence, and return appear in the source fragment. Causal relation is not established.",
      source: "SRC-RGBL-0042-A",
      status: "supported",
    },
  ] satisfies RecordSummary[],
  correlation: {
    score: 0.87,
    confidence: "medium-high",
    explanation:
      "The trails are starting to line up. That still does not make them the same thing. Identity remains incomplete.",
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
    prompt:
      "Even if the movement happened as reconstructed, what authority or rule would apply?",
  },
}
