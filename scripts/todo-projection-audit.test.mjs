import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs/promises"
import crypto from "node:crypto"

const todoPath = new URL("../ROCKSOUL-TODO.json", import.meta.url)
const validStatuses = ["PLANNED", "READY", "IN_PROGRESS", "BLOCKED", "VERIFYING", "VERIFIED", "CLOSED"]

function fingerprint(todo) {
  const copy = structuredClone(todo)
  delete copy.projection.generated_at
  return crypto.createHash("sha256").update(JSON.stringify(copy)).digest("hex")
}

test("TODO projection has one canonical schema and status vocabulary", async () => {
  const todo = JSON.parse(await fs.readFile(todoPath, "utf8"))
  assert.equal(todo.schema, "rocksoul.todo.v2")
  assert.equal(todo.authority.type, "github-issues")
  assert.equal(todo.authority.sot_issue, 86)
  assert.deepEqual(todo.projection.status_values, validStatuses)
})

test("TODO projection IDs are unique by canonical content", async () => {
  const todo = JSON.parse(await fs.readFile(todoPath, "utf8"))
  const entries = [...todo.release_gates, ...todo.tasks]
  const byId = new Map()
  for (const entry of entries) {
    const prior = byId.get(entry.id)
    if (prior) assert.deepEqual(prior, entry)
    byId.set(entry.id, entry)
  }
  assert.equal(byId.size, todo.tasks.length)
})

test("TODO projection fingerprint is deterministic", async () => {
  const todo = JSON.parse(await fs.readFile(todoPath, "utf8"))
  assert.equal(fingerprint(todo), fingerprint(structuredClone(todo)))
})
