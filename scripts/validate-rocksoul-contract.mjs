import fs from 'node:fs';

const repo = JSON.parse(fs.readFileSync('ROCKSOUL-REPO.json', 'utf8'));
const todo = JSON.parse(fs.readFileSync('ROCKSOUL-TODO.json', 'utf8'));
const statuses = new Set(['NOT_STARTED', 'IN_PROGRESS', 'WAITING_REVIEW', 'VERIFIED', 'BLOCKED', 'PLANNED']);
const errors = [];
const supportedRepoSchemas = new Set(['rocksoul.repository.v1', 'rocksoul.repository.v2']);
const supportedTodoSchemas = new Set(['rocksoul.todo.v1', 'rocksoul.todo.v2']);
if (!supportedRepoSchemas.has(repo.schema)) errors.push('unsupported repository schema');
if (!supportedTodoSchemas.has(todo.schema)) errors.push('unsupported TODO schema');
if (!repo.repository_id || todo.repository_id !== repo.repository_id) errors.push('repository_id mismatch');
if (repo.schema === 'rocksoul.repository.v2') {
  if (repo.governance?.contract_mode !== 'strict') errors.push('v2 repository must enable strict governance');
  if (repo.governance?.canonical_package_manager !== 'npm') errors.push('v2 repository must use npm governance');
  if (repo.governance?.canonical_lockfile !== 'package-lock.json') errors.push('v2 repository must use package-lock.json governance');
}
if (!repo.tracking?.master_todo && !repo.governance?.canonical_lockfile) errors.push('tracking.master_todo or v2 governance is required');
const ids = new Set();
for (const task of todo.tasks ?? []) {
  if (!task.id || !task.title || !statuses.has(task.status)) errors.push(`invalid task: ${task.id || '<missing>'}`);
  if (ids.has(task.id)) errors.push(`duplicate task id: ${task.id}`);
  ids.add(task.id);
  if (task.github_issue !== null && task.github_issue !== undefined && typeof task.github_issue !== 'string') errors.push(`invalid github_issue: ${task.id}`);
  if (typeof task.github_issue === 'string' && !task.github_issue.startsWith('https://github.com/')) errors.push(`invalid github_issue: ${task.id}`);
}
if (errors.length) { console.error(errors.map(error => `FAIL: ${error}`).join('\n')); process.exit(1); }
console.log(`PASS: ${repo.repository_id} contract; schema=${repo.schema}; tasks=${todo.tasks?.length ?? 0}`);
