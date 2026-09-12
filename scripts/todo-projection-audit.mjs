import fs from "node:fs/promises"
import crypto from "node:crypto"

const TODO_PATH = new URL("../ROCKSOUL-TODO.json", import.meta.url)
const STATUS_VALUES = new Set(["PLANNED", "READY", "IN_PROGRESS", "BLOCKED", "VERIFYING", "VERIFIED", "CLOSED"])
const REQUIRED_ITEM_KEYS = ["issue", "id", "status", "priority", "sot"]

function fail(message) {
  console.error(`TODO projection audit failed: ${message}`)
  process.exitCode = 1
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function normalizeForFingerprint(todo) {
  const copy = structuredClone(todo)
  if (copy.projection) delete copy.projection.generated_at
  return JSON.stringify(copy)
}

function declaredBodyStatus(body = "") {
  const match = body.match(/(?:\*\*)?Current status(?:\*\*)?\s*\n\*{0,2}\s*([A-Z_]+)/i)
  return match?.[1]?.toUpperCase() ?? null
}

async function fetchIssue(repository, issue, token) {
  const response = await fetch(`https://api.github.com/repos/${repository}/issues/${issue}`, {
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28",
      "user-agent": "rocksoul-ui-todo-projection-audit",
    },
  })
  if (!response.ok) throw new Error(`GitHub issue #${issue} lookup failed: HTTP ${response.status}`)
  return response.json()
}

async function main() {
  const text = await fs.readFile(TODO_PATH, "utf8")
  const todo = JSON.parse(text)

  assert(todo.repository_id === "rocksoul-ui", "repository_id must be rocksoul-ui")
  assert(todo.schema === "rocksoul.todo.v2", "schema must be rocksoul.todo.v2")
  assert(todo.authority?.type === "github-issues", "authority.type must be github-issues")
  assert(todo.authority?.sot_issue === 86, "authority.sot_issue must be #86")
  assert(todo.authority?.repository === "bjo163/rocksoul-ui", "authority.repository mismatch")
  assert(todo.projection?.generated_from === "github issue graph", "projection.generated_from mismatch")
  assert(Array.isArray(todo.projection?.status_values), "projection.status_values must be an array")
  assert(JSON.stringify(todo.projection.status_values) === JSON.stringify([...STATUS_VALUES]), "status vocabulary drift detected")
  assert(Array.isArray(todo.release_gates), "release_gates must be an array")
  assert(Array.isArray(todo.tasks), "tasks must be an array")

  const items = [...todo.release_gates, ...todo.tasks]
  const canonicalById = new Map()
  const duplicateIds = []
  const invalidItems = []
  const seenIssueNumbers = new Set()

  for (const item of items) {
    for (const key of REQUIRED_ITEM_KEYS) {
      if (!(key in item)) invalidItems.push(`${item.id ?? "<unknown>"}: missing ${key}`)
    }
    if (!Number.isInteger(item.issue) || item.issue <= 0) invalidItems.push(`${item.id ?? "<unknown>"}: invalid issue`) 
    if (typeof item.id !== "string" || !item.id) invalidItems.push(`${item.issue ?? "<unknown>"}: invalid id`)
    if (!STATUS_VALUES.has(item.status)) invalidItems.push(`${item.id ?? "<unknown>"}: invalid status ${item.status}`)
    if (item.sot !== 86) invalidItems.push(`${item.id ?? "<unknown>"}: sot must be 86`)

    if (Number.isInteger(item.issue)) seenIssueNumbers.add(item.issue)
    if (item.id) {
      const previous = canonicalById.get(item.id)
      if (previous && JSON.stringify(previous) !== JSON.stringify(item)) duplicateIds.push(item.id)
      canonicalById.set(item.id, item)
    }
  }

  assert(invalidItems.length === 0, invalidItems.join("; "))
  assert(duplicateIds.length === 0, `conflicting duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}`)

  const gateById = new Map(todo.release_gates.map((item) => [item.id, item]))
  for (const gate of todo.release_gates) {
    const task = todo.tasks.find((item) => item.id === gate.id)
    assert(task, `release gate ${gate.id} has no matching task projection`)
    assert(task.issue === gate.issue, `${gate.id}: gate/task issue mismatch`)
    assert(task.status === gate.status, `${gate.id}: gate/task status mismatch`)
    assert(task.priority === gate.priority, `${gate.id}: gate/task priority mismatch`)
  }

  for (const item of todo.tasks) {
    assert(item.id.startsWith("UI-") || item.id.startsWith("P0-") || item.id.startsWith("P1-"), `${item.id}: non-canonical task ID prefix`)
    if (gateById.has(item.id)) assert(gateById.get(item.id).issue === item.issue, `${item.id}: duplicate gate mapping drift`)
  }

  const fingerprint = crypto.createHash("sha256").update(normalizeForFingerprint(todo)).digest("hex")
  console.log(`projection_fingerprint=${fingerprint}`)
  console.log(`task_ids=${canonicalById.size}`)
  console.log(`referenced_issue_numbers=${seenIssueNumbers.size}`)

  const token = process.env.GITHUB_TOKEN
  const repository = process.env.GITHUB_REPOSITORY || todo.authority.repository
  if (!token) {
    console.log("online_check=skipped (GITHUB_TOKEN not set)")
    return
  }

  const uniqueIssues = [...seenIssueNumbers]
  const issues = []
  const concurrency = 8
  for (let offset = 0; offset < uniqueIssues.length; offset += concurrency) {
    const batch = uniqueIssues.slice(offset, offset + concurrency)
    issues.push(...await Promise.all(batch.map((issue) => fetchIssue(repository, issue, token))))
  }

  const byIssue = new Map(issues.map((issue) => [issue.number, issue]))
  const orphanIssues = uniqueIssues.filter((issue) => !byIssue.has(issue))
  assert(orphanIssues.length === 0, `orphan issue references: ${orphanIssues.map((issue) => `#${issue}`).join(", ")}`)

  const drift = []
  for (const item of todo.tasks) {
    const issue = byIssue.get(item.issue)
    if (issue.state === "closed" && item.status !== "CLOSED") {
      drift.push(`${item.id}: projection=${item.status}, github=closed`)
    }
    if (issue.state !== "closed" && item.status === "CLOSED") {
      drift.push(`${item.id}: projection=CLOSED, github=${issue.state}`)
    }
    const bodyStatus = declaredBodyStatus(issue.body)
    if (bodyStatus && STATUS_VALUES.has(bodyStatus) && bodyStatus !== item.status) {
      drift.push(`${item.id}: projection=${item.status}, issue-body=${bodyStatus}`)
    }
  }
  assert(drift.length === 0, drift.join("; "))
  console.log(`online_check=passed (${issues.length} issues)`)
}

try {
  await main()
} catch (error) {
  fail(error instanceof Error ? error.message : String(error))
}
