import test from 'node:test'
import assert from 'node:assert/strict'

const classify = (subjects, body = subjects.join('\n')) => {
  const breaking = /(^|\n)\s*(BREAKING CHANGE|BREAKING-CHANGE)\s*:/m.test(body) || subjects.some((s) => /^[a-z]+(?:\([^)]*\))?!:/.test(s))
  if (breaking) return 'major'
  if (subjects.some((s) => /^feat(?:\([^)]*\))?:/.test(s))) return 'minor'
  return 'patch'
}

test('release classification: breaking takes precedence', () => {
  assert.equal(classify(['feat(ui): add thing!', 'fix: cleanup']), 'major')
})

test('release classification: feat produces minor', () => {
  assert.equal(classify(['feat(ui): add thing', 'fix: cleanup']), 'minor')
})

test('release classification: ordinary changes produce patch', () => {
  assert.equal(classify(['fix: cleanup', 'docs: clarify']), 'patch')
})

test('release classification: BREAKING CHANGE footer is detected', () => {
  assert.equal(classify(['fix: cleanup'], 'fix: cleanup\n\nBREAKING CHANGE: remove old API'), 'major')
})
