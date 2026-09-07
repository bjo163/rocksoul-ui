import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const fixture = await readFile(path.join(root, "src", "fixtures", "mw0042.ts"), "utf8")
const screens = await readFile(path.join(root, "src", "screens", "domain-screens.tsx"), "utf8")

const checks = [
  [fixture.includes('start: "02:14"') && fixture.includes('end: "02:37"') && fixture.includes('timezone: "LOCAL/FIXTURE"'), "EVENT temporal fixture"],
  [fixture.includes("matchDimensions") && fixture.includes("identity: false"), "PERSON identity dimensions"],
  [fixture.includes("channels") && fixture.includes('red: "movement"') && fixture.includes('light: "unresolved relation"'), "RGBL channel fixture"],
  [fixture.includes("LAW-FIX-01") && fixture.includes("LAW-FIX-02"), "AWS synthetic instruments"],
  [screens.includes("Temporal window / fixture"), "EVENT screen-specific presentation"],
  [screens.includes("Identity dimensions / partial"), "PERSON screen-specific presentation"],
  [screens.includes("RGBL channels / semantic source reading"), "RGBL screen-specific presentation"],
  [screens.includes("AWSBoundary") && screens.includes("LegalStatus"), "AWS downstream legal presentation"],
]

const failures = checks.filter(([ok]) => !ok).map(([, label]) => label)
if (failures.length) {
  console.error("Domain contract audit failed:")
  failures.forEach((failure) => console.error(`- missing ${failure}`))
  process.exit(1)
}
console.log("Domain contract audit passed.")
