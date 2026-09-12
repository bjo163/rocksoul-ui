import test from "node:test"
import assert from "node:assert/strict"
import { calculateReleasePlan } from "./release-plan.mjs"

const availableTag = (tag) => tag === "v99.0.0"

test("release planner: breaking footer produces major", () => {
  assert.deepEqual(calculateReleasePlan({
    previousVersion: "0.14.0",
    subjects: ["fix: cleanup"],
    body: "fix: cleanup\n\nBREAKING CHANGE: remove old API",
    tagExists: availableTag,
  }), { release: true, current: "0.14.0", next: "1.0.0", tag: "v1.0.0", bump: "major" })
})

test("release planner: conventional ! produces major", () => {
  assert.equal(calculateReleasePlan({ previousVersion: "0.14.0", subjects: ["feat!: replace API"] }).bump, "major")
})

test("release planner: feat produces minor", () => {
  assert.deepEqual(calculateReleasePlan({ previousVersion: "0.14.0", subjects: ["feat(ui): add thing", "fix: cleanup"] }), {
    release: true, current: "0.14.0", next: "0.15.0", tag: "v0.15.0", bump: "minor",
  })
})

test("release planner: ordinary changes produce patch", () => {
  assert.equal(calculateReleasePlan({ previousVersion: "0.14.0", subjects: ["fix: cleanup", "docs: clarify"] }).bump, "patch")
})

test("release planner: no commits produces no release", () => {
  assert.deepEqual(calculateReleasePlan({ previousVersion: "0.14.0", subjects: [] }), {
    release: false, current: "0.14.0", next: "0.14.0", tag: "v0.14.0", bump: null,
  })
})

test("release planner: invalid semantic version fails closed", () => {
  assert.throws(() => calculateReleasePlan({ previousVersion: "0.14", subjects: ["fix: cleanup"] }), /Invalid semantic version/)
})

test("release planner: existing calculated tag fails closed", () => {
  assert.throws(() => calculateReleasePlan({ previousVersion: "98.0.0", subjects: ["fix: cleanup"], tagExists: availableTag }), /already exists/)
})
