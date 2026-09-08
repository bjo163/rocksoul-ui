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
  {
    local: "src/generated/legal-intelligence.json",
    remote: "moonwitness/ui/v2/legal-intelligence.json",
  },
]

const failures = []
const legalComponent = await readFile(path.join(root, "src/components/legal-applicability-matrix.tsx"), "utf8")
if (!legalComponent.includes("legalApplicabilityAxes") || !legalComponent.includes("legalResultVocabulary") || !legalComponent.includes("legalReviewPipeline")) {
  failures.push("legal applicability component must consume the generated canonical contract")
}
for (const duplicatedQuestion of [
  "Was the instrument or rule in force at the relevant time?",
  "Did the rule extend to the relevant place, conduct, forum, or effects?",
  "Was the actor, entity, State, organization, vessel, or protected class within scope?",
  "Did the rule govern the type of conduct, object, offense, right, or obligation at issue?",
]) {
  if (legalComponent.includes(duplicatedQuestion)) failures.push("legal applicability component duplicates canonical axis text")
}
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
