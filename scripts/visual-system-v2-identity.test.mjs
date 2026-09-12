import assert from "node:assert/strict"
import test from "node:test"
import { resolveVisualSystemV2Identity } from "./visual-system-v2-identity.mjs"

test("resolves an immutable upstream Visual System V2 identity", async () => {
  const identity = await resolveVisualSystemV2Identity()

  assert.equal(identity.schema, "rocksoul.visual-system-v2-identity.v1")
  assert.equal(identity.authorityRepository, "bjo163/rocksoul-assets")
  assert.equal(identity.visualSystemVersion, 2)
  assert.equal(identity.contractPath, "moonwitness/visual-system-v2.json")
  assert.match(identity.foundationCommit, /^[0-9a-f]{40}$/)
  assert.match(identity.runtimeDeliveryCommit, /^[0-9a-f]{40}$/)
  assert.match(identity.upstreamContractBlobSha, /^[0-9a-f]{40}$/)
})
