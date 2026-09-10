import assert from "node:assert/strict"
import test from "node:test"
import { applyPolicy, findCssVariableFindings, scanSource, validateExceptions } from "./design-value-audit.mjs"

function rules(source, filePath = "src/components/example.tsx", classification = "source") {
  return new Set(scanSource({ filePath, content: source, classification }).map((item) => item.rule))
}

test("valid semantic-token usage produces no design findings", () => {
  assert.equal(scanSource({
    filePath: "src/components/example.tsx",
    content: 'export const Example = () => <div className="bg-background text-foreground p-4" />',
    classification: "source",
  }).length, 0)
})

test("detects hardcoded hex", () => {
  assert.ok(rules('export const x = <div style={{ color: "#ffffff" }} />').has("raw-color"))
})

test("detects rgb and hsl colors", () => {
  const result = rules("const x = 'rgb(0 0 0)'; const y = 'hsl(0 0% 0%)'")
  assert.ok(result.has("raw-color"))
})

test("detects arbitrary Tailwind color", () => {
  assert.ok(rules('const x = "bg-[#123456]"').has("arbitrary-tailwind-color"))
})

test("detects arbitrary spacing", () => {
  assert.ok(rules('const x = "gap-[13px]"').has("arbitrary-tailwind-value"))
})

test("detects arbitrary motion", () => {
  assert.ok(rules('const x = "duration-[173ms]"').has("arbitrary-motion"))
})

test("detects arbitrary shadow/effect", () => {
  assert.ok(rules('const x = "shadow-[0_0_30px_#00ffff]"').has("arbitrary-effect"))
})

test("detects undefined --mw CSS variables", () => {
  const findings = findCssVariableFindings([
    { filePath: "src/a.css", content: ".a { color: var(--mw-not-declared); }" },
    { filePath: "src/b.css", content: ":root { --mw-known: #fff; } .b { color: var(--mw-known); }" },
  ])
  assert.deepEqual(findings.map((item) => item.value), ["--mw-not-declared"])
})

test("allows raw literal inside canonical token declaration", () => {
  const findings = scanSource({
    filePath: "src/styles.css",
    content: ":root { --mw-neutral-000: #fff; --mw-space-4: 4px; }",
    classification: "token-source",
  })
  assert.equal(findings.length, 0)
})

test("allows literal colors in canonical asset SVG classification", () => {
  const findings = scanSource({
    filePath: "public/assets/icon.svg",
    content: '<svg><path fill="#ffffff" stroke="#111111" stroke-width="1"/></svg>',
    classification: "asset",
  })
  assert.equal(findings.length, 0)
})

test("centralized exact exception downgrades a finding", () => {
  const [raw] = scanSource({ filePath: "src/a.css", content: ".a { gap: 13px; }", classification: "source" })
  const [governed] = applyPolicy([raw], {
    strictPaths: new Set(["src/a.css"]),
    exceptions: [{ path: "src/a.css", rule: raw.rule, value: raw.value, reason: "intrinsic fixture", owner: "design-system", expires: "2099-01-01" }],
  })
  assert.equal(governed.disposition, "approved-exception")
  assert.equal(governed.severity, "info")
})

test("new or touched debt fails closed while baseline debt remains visible", () => {
  const raw = { rule: "raw-color", severity: "error", path: "src/new.tsx", line: 1, value: "#fff", suggestedOwner: "primitive-token" }
  const strict = applyPolicy([raw], { strictPaths: new Set(["src/new.tsx"]) })[0]
  const legacy = applyPolicy([{ ...raw, path: "src/legacy.tsx" }], { strictPaths: new Set(["src/new.tsx"]) })[0]
  assert.equal(strict.severity, "error")
  assert.equal(strict.disposition, "new-or-touched-debt")
  assert.equal(legacy.severity, "warning")
  assert.equal(legacy.disposition, "baseline-debt")
})

test("allows literal colors in registered generated-source classification", () => {
  const findings = scanSource({
    filePath: "src/generated/example.ts",
    content: 'export const palette = "#ffffff"',
    classification: "generated",
  })
  assert.equal(findings.length, 0)
})

test("critical undefined variables fail closed even on unchanged baseline paths", () => {
  const raw = { rule: "undefined-css-variable", severity: "error", path: "src/legacy.css", line: 1, value: "--mw-missing", suggestedOwner: "token-source" }
  const governed = applyPolicy([raw], { strictPaths: new Set() })[0]
  assert.equal(governed.severity, "error")
  assert.equal(governed.disposition, "always-fail-closed")
})

test("exception contract forbids wildcard paths", () => {
  const failures = validateExceptions([{ path: "src/components/**", rule: "raw-color", reason: "too broad", owner: "nobody" }], new Date("2026-09-11"))
  assert.ok(failures.some((message) => message.includes("wildcards")))
})
