import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const contract = await readFile(path.join(root, "src/contracts/assets-v2.ts"), "utf8")
const repository = contract.match(/repository:\s*"([^"]+)"/)?.[1]
const commit = contract.match(/commit:\s*"([0-9a-f]{40})"/)?.[1]

if (!repository || !commit) {
  console.error("Research visual contract audit failed: asset source metadata missing.")
  process.exit(1)
}

const specs = [
  {
    local: "src/generated/research-domains.json",
    remote: "moonwitness/ui/v2/research-domains.json",
  },
  {
    local: "src/generated/status-semantics.json",
    remote: "moonwitness/ui/v2/status-semantics.json",
  },
]

const failures = []
for (const spec of specs) {
  const local = JSON.parse(await readFile(path.join(root, spec.local), "utf8"))
  const url = `https://raw.githubusercontent.com/${repository}/${commit}/${spec.remote}`
  const response = await fetch(url)
  if (!response.ok) {
    failures.push(`${spec.remote}: upstream HTTP ${response.status}`)
    continue
  }
  const remote = await response.json()
  if (JSON.stringify(local) !== JSON.stringify(remote)) {
    failures.push(`${spec.local}: generated mirror differs from ${spec.remote}@${commit}`)
  }
}

if (failures.length) {
  console.error("Research visual contract audit failed:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Research visual contracts match ${repository}@${commit}.`)
