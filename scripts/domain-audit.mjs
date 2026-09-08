import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const fixture = await readFile(path.join(root, "src", "fixtures", "mw0042.ts"), "utf8")
const screens = await readFile(path.join(root, "src", "screens", "domain-screens.tsx"), "utf8")
const ecosystem = await readFile(path.join(root, "src", "contracts", "ecosystem-domains.ts"), "utf8")
const graph = await readFile(path.join(root, "src", "components", "evidence-graph.tsx"), "utf8")
const summary = await readFile(path.join(root, "src", "components", "domain-record-summary.tsx"), "utf8")
const assetsV2 = await readFile(path.join(root, "src", "contracts", "assets-v2.ts"), "utf8")
const researchDomainMap = await readFile(path.join(root, "src", "components", "research-domain-ownership-map.tsx"), "utf8")

function ownerBlock(domain) {
  const marker = "  " + domain + ": {"
  const start = ecosystem.indexOf(marker)
  if (start < 0) return ""
  const end = ecosystem.indexOf("\n  },", start)
  return ecosystem.slice(start, end < 0 ? ecosystem.length : end)
}

function hasOwner(domain, repository, prefix) {
  const block = ownerBlock(domain)
  return block.includes('repository: "' + repository + '"') && block.includes('prefix: "' + prefix + '"')
}

const checks = [
  [fixture.includes('start: "02:14"') && fixture.includes('end: "02:37"') && fixture.includes('timezone: "LOCAL/FIXTURE"'), "EVENT temporal fixture"],
  [fixture.includes("matchDimensions") && fixture.includes("identity: false"), "PERSON identity dimensions"],
  [fixture.includes("channels") && fixture.includes('red: "movement"') && fixture.includes('light: "unresolved relation"'), "RGBL channel fixture"],
  [fixture.includes("LAW-FIX-01") && fixture.includes("LAW-FIX-02"), "AWS synthetic instruments"],
  [screens.includes("Temporal window / fixture"), "EVENT screen-specific presentation"],
  [screens.includes("Identity dimensions / partial"), "PERSON screen-specific presentation"],
  [screens.includes("RGBL channels / semantic source reading"), "RGBL screen-specific presentation"],
  [screens.includes("AWSBoundary") && screens.includes("LegalStatus"), "AWS downstream legal presentation"],
  [hasOwner("STORY", "rocksoul-mftl", "mftl:"), "STORY canonical owner"],
  [hasOwner("EVENT", "rocksoul-legend", "legend:"), "EVENT canonical owner"],
  [hasOwner("PERSON", "rocksoul-superhero", "superhero:"), "PERSON canonical owner"],
  [hasOwner("PERSPECTIVE", "rocksoul-jizz", "jizz:"), "PERSPECTIVE canonical owner"],
  [hasOwner("TEXT", "rocksoul-rgbl", "rgbl:"), "TEXT semantic owner"],
  [hasOwner("LAW", "rocksoul-aws", "aws:"), "LAW semantic owner"],
  [hasOwner("RELATIONSHIP", "rocksoul-correlation", "correlation:"), "RELATIONSHIP canonical owner"],
  [graph.includes('PERSPECTIVE: "text-warning border-warning"'), "PERSPECTIVE graph-node support"],
  [summary.includes("ResearchDomain") && summary.includes("canonicalOwnerFor"), "generic domain-record summary"],
  [assetsV2.includes('PERSPECTIVE / Perspectives') && assetsV2.includes('repo: "rocksoul-jizz"'), "PERSPECTIVE resource descriptor"],
  [assetsV2.includes('RELATIONSHIP / Correlation') && assetsV2.includes('repo: "rocksoul-correlation"'), "RELATIONSHIP resource descriptor"],
  [researchDomainMap.includes("canonicalDomainOwners") && researchDomainMap.includes("Text equivalent"), "data-driven research-domain ownership visual"],
  [!["rocksoul-mftl","rocksoul-legend","rocksoul-superhero","rocksoul-rgbl","rocksoul-aws","rocksoul-jizz"].some((repo) => researchDomainMap.includes(repo)), "ownership visual contains no duplicated repository literals"],
]

const failures = checks.filter(([ok]) => !ok).map(([, label]) => label)
if (failures.length) {
  console.error("Domain contract audit failed:")
  failures.forEach((failure) => console.error(`- missing ${failure}`))
  process.exit(1)
}
console.log("Domain contract audit passed.")
