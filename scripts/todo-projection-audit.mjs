import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const todo = JSON.parse(await readFile(path.join(root, "ROCKSOUL-TODO.json"), "utf8"))
const allowed = new Set(todo.projection?.status_values ?? [])
const failures = []
const tasks = Array.isArray(todo.tasks) ? todo.tasks : []
const gates = Array.isArray(todo.release_gates) ? todo.release_gates : []

if (todo.schema !== "rocksoul.todo.v2") failures.push(`schema: ${todo.schema}`)
if (todo.repository_id !== "rocksoul-ui") failures.push(`repository_id: ${todo.repository_id}`)
if (todo.authority?.type !== "github-issues") failures.push("authority.type must be github-issues")
if (todo.authority?.sot_issue !== 86) failures.push("authority.sot_issue must be 86")
if (todo.projection?.generated_from !== "github issue graph") failures.push("projection.generated_from must be github issue graph")

const assertUnique = (items, key, label) => {
  const seen = new Set()
  for (const item of items) {
    const value = item?.[key]
    if (value == null) failures.push(`${label} missing ${key}`)
    else if (seen.has(String(value))) failures.push(`duplicate ${label} ${key}: ${value}`)
    else seen.add(String(value))
  }
}

assertUnique(tasks, "issue", "task")
assertUnique(tasks, "id", "task")
assertUnique(gates, "issue", "release gate")
assertUnique(gates, "id", "release gate")

for (const item of [...tasks, ...gates]) {
  if (!allowed.has(item.status)) failures.push(`${item.id ?? item.issue}: invalid status ${item.status}`)
  if (!Number.isInteger(item.issue) || item.issue <= 0) failures.push(`${item.id ?? item.issue}: invalid issue number`)
}

const taskByIssue = new Map(tasks.map((item) => [item.issue, item]))
for (const gate of gates) {
  if (!taskByIssue.has(gate.issue)) failures.push(`release gate ${gate.issue} has no task projection`)
}
for (const task of tasks) {
  if (task.sot !== 86) failures.push(`${task.id}: sot must be 86`)
}

if (!Array.isArray(todo.semantic_safety_invariants) || todo.semantic_safety_invariants.length === 0) {
  failures.push("semantic_safety_invariants must be a non-empty array")
}

if (failures.length) {
  console.error("TODO projection audit failed:")
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`TODO projection audit passed: ${tasks.length} tasks, ${gates.length} release gates`)
