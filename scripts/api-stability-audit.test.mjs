import assert from "node:assert/strict"
import test from "node:test"
import { declarationPathForSource, declarationSignature } from "./api-stability-audit.mjs"

test("declaration signature ignores formatting-only whitespace differences", () => {
  const before = `export declare function Button(props: {\n  disabled?: boolean\n}): JSX.Element;\n`
  const after = `export   declare function Button(props: { disabled?: boolean }): JSX.Element;`
  assert.equal(declarationSignature(before), declarationSignature(after))
})

test("declaration signature detects component prop changes", () => {
  const before = `export declare function Button(props: { size?: "sm" | "md" }): JSX.Element;`
  const after = `export declare function Button(props: { size?: "sm" | "md" | "lg" }): JSX.Element;`
  assert.notEqual(declarationSignature(before), declarationSignature(after))
})

test("declaration signature detects exported type changes", () => {
  const before = `export type Status = "ready" | "error";`
  const after = `export type Status = "ready" | "error" | "loading";`
  assert.notEqual(declarationSignature(before), declarationSignature(after))
})

test("public source paths map to generated declaration paths", () => {
  assert.equal(declarationPathForSource("src/components/ui/button.tsx"), "dist/components/ui/button.d.ts")
  assert.equal(declarationPathForSource("src/index.ts"), "dist/index.d.ts")
})
