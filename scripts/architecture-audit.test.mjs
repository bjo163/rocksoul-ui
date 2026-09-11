import assert from "node:assert/strict"
import test from "node:test"
import { dependencyDirectionViolation } from "./architecture-audit.mjs"

test("architecture direction allows downward dependency", () => {
  assert.equal(dependencyDirectionViolation(4, 2), false)
})

test("architecture direction rejects upward dependency", () => {
  assert.equal(dependencyDirectionViolation(2, 4), true)
})
