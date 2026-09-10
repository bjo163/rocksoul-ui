import assert from "node:assert/strict"
import test from "node:test"
import { apiSignature } from "./api-stability-audit.mjs"

test("API signature ignores function implementation-only changes", () => {
  const before = `function Button(props: { disabled?: boolean }): JSX.Element { return <button /> }\nexport { Button }`
  const after = `function Button(props: { disabled?: boolean }): JSX.Element { return <button data-slot="button" /> }\nexport { Button }`
  assert.deepEqual(apiSignature(before, "button.tsx"), apiSignature(after, "button.tsx"))
})

test("API signature detects bottom-exported component prop changes", () => {
  const before = `function Button(props: { size?: "sm" | "md" }): JSX.Element { return <button /> }\nexport { Button }`
  const after = `function Button(props: { size?: "sm" | "md" | "lg" }): JSX.Element { return <button /> }\nexport { Button }`
  assert.notDeepEqual(apiSignature(before, "button.tsx"), apiSignature(after, "button.tsx"))
})

test("API signature detects exported type changes", () => {
  const before = `export type Status = "ready" | "error"`
  const after = `export type Status = "ready" | "error" | "loading"`
  assert.notDeepEqual(apiSignature(before), apiSignature(after))
})
