import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const read = (file) => readFile(path.join(root, file), "utf8")

const [
  styles,
  graph,
  forms,
  overlays,
  legal,
  community,
  publicCase,
  patterns,
  eventIntelligence,
] = await Promise.all([
  read("src/styles.css"),
  read("src/components/evidence-graph.tsx"),
  read("src/components/form-controls.tsx"),
  read("src/components/overlays.tsx"),
  read("src/components/legal-status.tsx"),
  read("src/screens/community.tsx"),
  read("src/screens/mw0042-overview.tsx"),
  read("src/components/patterns.tsx"),
  read("src/components/event-intelligence.tsx"),
])

const checks = [
  [styles.includes(":focus-visible"), "global visible focus rule"],
  [styles.includes("--mw-touch-min: 44px;"), "44px minimum touch token"],
  [styles.includes("@media (prefers-reduced-motion: reduce)"), "reduced motion rule"],
  [graph.includes('aria-pressed={state === "selected"}'), "graph keyboard selected state"],
  [graph.includes("Text equivalent"), "graph semantic text equivalent"],
  [forms.includes("aria-describedby"), "form helper/error association"],
  [forms.includes("aria-invalid"), "form invalid state"],
  [forms.includes('aria-checked={indeterminate ? "mixed"'), "checkbox indeterminate semantics"],
  [overlays.includes("aria-labelledby={titleId}"), "modal accessible names"],
  [overlays.includes("onCancel"), "Escape-close modal behavior"],
  [overlays.includes("restoreRef.current?.focus()"), "modal focus restoration"],
  [legal.includes("not a court judgment"), "legal-analysis guardrail"],
  [community.includes("Community submission ≠ canonical evidence"), "community/canonical separation"],
  [publicCase.includes("EvidenceGridPattern"), "public provenance inspection pattern"],
  [patterns.includes('aria-label="Pagination"'), "pagination navigation label"],
  [eventIntelligence.includes("Text equivalent"), "event topology text equivalent"],
  [eventIntelligence.includes('role="progressbar"'), "historicity semantic progress"],
  [eventIntelligence.includes("Confidence is scoped evidence assessment"), "historicity confidence scope guardrail"],
]

const failures = checks.filter(([ok]) => !ok).map(([, label]) => label)
if (failures.length) {
  console.error("Accessibility contract audit failed:")
  for (const failure of failures) console.error(`- missing ${failure}`)
  process.exit(1)
}

console.log("Accessibility contract audit passed.")
