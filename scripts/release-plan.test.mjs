import assert from "node:assert/strict"
import test from "node:test"
import { calculateReleasePlan } from "./release-plan.mjs"

const plan = (subjects, body = "", previousVersion = "1.2.3") => calculateReleasePlan({
  previousVersion,
  subjects,
  body,
  tagExists: () => false,
})

test("breaking footer selects major", () => {
  assert.deepEqual(plan(["fix: parser"], "BREAKING CHANGE: parser contract changed"), {
    release: true, current: "1.2.3", next: "2.0.0", tag: "v2.0.0", bump: "major",
  })
})

test("breaking conventional commit selects major", () => {
  assert.deepEqual(plan(["feat!: replace API"]), {
    release: true, current: "1.2.3", next: "2.0.0", tag: "v2.0.0", bump: "major",
  })
})

test("feat selects minor", () => {
  assert.deepEqual(plan(["feat: add graph"]), {
    release: true, current: "1.2.3", next: "1.3.0", tag: "v1.3.0", bump: "minor",
  })
})

test("ordinary changes select patch", () => {
  assert.deepEqual(plan(["fix: spacing", "docs: update guide"]), {
    release: true, current: "1.2.3", next: "1.2.4", tag: "v1.2.4", bump: "patch",
  })
})

test("no commits produce no release", () => {
  assert.deepEqual(plan([]), { release: false, current: "1.2.3" })
})

test("invalid semver fails closed", () => {
  assert.throws(() => plan(["fix: bug"], "", "1.2"), /Invalid semantic package version/)
})

test("existing tag fails closed", () => {
  assert.throws(() => calculateReleasePlan({
    previousVersion: "1.2.3",
    subjects: ["fix: bug"],
    body: "",
    tagExists: (tag) => tag === "v1.2.4",
  }), /Release v1.2.4 already exists\./)
})
