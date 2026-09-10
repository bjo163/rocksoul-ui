const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const ALLOW_BOOKKEEPING = new Set([
  'ROCKSOUL-REPO.json',
])

const ALLOW_POST_RELEASE = (file) =>
  file === 'README.md' ||
  file.startsWith('docs/') ||
  file.startsWith('moonwitness/brand/generated/') ||
  file.startsWith('penpot/generated/')

function classify(file) {
  if (ALLOW_BOOKKEEPING.has(file)) return 'ALLOW_BOOKKEEPING'
  if (ALLOW_POST_RELEASE(file)) return 'ALLOW_POST_RELEASE'
  if (file.startsWith('moonwitness/') || file.startsWith('asset-packs/')) return 'BLOCK_RUNTIME'
  return 'UNKNOWN_BLOCK'
}

assert(classify('ROCKSOUL-REPO.json') === 'ALLOW_BOOKKEEPING', 'repository bookkeeping must be allowed')
assert(classify('docs/release.md') === 'ALLOW_POST_RELEASE', 'bounded docs must be allowed')
assert(classify('moonwitness/asset-packs.json') === 'BLOCK_RUNTIME', 'runtime asset metadata must block')
assert(classify('src/unknown-contract.ts') === 'UNKNOWN_BLOCK', 'unknown changes must fail closed')

console.log('Asset freshness classification regression tests passed.')
