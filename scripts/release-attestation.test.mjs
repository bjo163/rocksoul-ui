import assert from "node:assert/strict"
import test from "node:test"
import { assertExactReleaseSha } from "./release-attestation.mjs"

const SHA_A = "a".repeat(40)
const SHA_B = "b".repeat(40)

test("accepts only the exact validated main SHA", () => {
  assert.deepEqual(assertExactReleaseSha(SHA_A, SHA_A), {
    validatedSha: SHA_A,
    currentMainSha: SHA_A,
  })
})

test("fails closed when validation is stale", () => {
  assert.throws(
    () => assertExactReleaseSha(SHA_A, SHA_B),
    /Stale release validation: validated=.* current-main=.*/,
  )
})

test("fails closed on malformed validation provenance", () => {
  assert.throws(() => assertExactReleaseSha("main", SHA_A), /Invalid validated release SHA/)
  assert.throws(() => assertExactReleaseSha(SHA_A, "HEAD"), /Invalid current main SHA/)
})
