import { readFile } from "node:fs/promises"

const [contract, rail] = await Promise.all([
  readFile("src/contracts/semantic-asset-map.ts", "utf8"),
  readFile("src/components/provenance-rail.tsx", "utf8"),
])
const requiredKinds = ["story", "claim", "evidence", "source", "text", "event", "person", "law", "case", "location"]
const requiredScreens = ["dashboard", "cases", "platform", "auth"]
const failures = []
for (const kind of requiredKinds) if (!contract.includes(`${kind}:`)) failures.push(`missing node mapping ${kind}`)
for (const screen of requiredScreens) if (!contract.includes(`${screen}:`)) failures.push(`missing screen mapping ${screen}`)
if (!contract.includes("semantic-primitives-pack/svg")) failures.push("semantic primitive source path")
if (!rail.includes("semanticPrimitiveByNodeKind")) failures.push("provenance rail does not consume semantic mapping")
if (rail.includes('pack="correlation-semantics"')) failures.push("provenance rail still consumes specimen correlation pack")
if (failures.length) { console.error(failures.map((item) => `- ${item}`).join("\n")); process.exit(1) }
console.log(JSON.stringify({ nodeKinds: requiredKinds.length, productionScreens: requiredScreens.length, consumer: "provenance-rail", status: "PASS" }, null, 2))
