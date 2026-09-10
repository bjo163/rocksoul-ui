import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const src = path.join(root, "src")
const forbiddenIdentity = "@moonwitness/ui"
const hexPattern = /#[0-9a-fA-F]{3,8}\b/g

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full)
  }
  return files
}

const files = await walk(src)
const violations = []

for (const file of files) {
  const content = await readFile(file, "utf8")
  const hexes = content.match(hexPattern) ?? []
  if (hexes.length) violations.push(`${path.relative(root, file)}: raw colors ${hexes.join(", ")}`)
  if (content.includes(forbiddenIdentity)) violations.push(`${path.relative(root, file)}: legacy package identity`)
}

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
if (packageJson.name !== "@rocksoul/ui") violations.push(`package.json: expected @rocksoul/ui, got ${packageJson.name}`)

const readme = await readFile(path.join(root, "README.md"), "utf8")
if (readme.includes(forbiddenIdentity)) violations.push("README.md: legacy package identity")

const styles = await readFile(path.join(src, "styles.css"), "utf8")
const requiredTokenLines = [
  "--mw-brand-crimson: #D1132A;",
  "--mw-brand-crimson-dark: #9F1022;",
  "--mw-brand-crimson-soft: #F7DDE2;",
  "--mw-status-supported: #16A36A;",
  "--mw-status-verified: #17A673;",
  "--mw-status-contested: #D1132A;",
  "--mw-status-partial: #D89B17;",
  "--mw-status-unresolved: #767676;",
  "--mw-status-restricted: #C46C17;",
  "--mw-status-prohibited: #B20F23;",
  "--mw-status-info: #3B82F6;",
  "--mw-rgbl-red: #E51735;",
  "--mw-rgbl-green: #10B981;",
  "--mw-rgbl-blue: #3B82F6;",
  "--mw-rgbl-light: #F4C542;",
  "--mw-aws-legal-paper: #F2EFE7;",
  "--mw-aws-legal-ink: #141414;",
  "--mw-surface-page: #0B0B0B;",
  "--mw-surface-raised: #151515;",
  "--mw-surface-panel: #1B1B1B;",
  "--mw-text-primary: #F7F4EC;",
  "--mw-border-default: #2E2E2E;",
  "--mw-touch-min: 44px;",
  "--mw-content-reading: 720px;",
  "--mw-content-wide: 1200px;",
  "--mw-motion-fast: 120ms;",
  "--mw-motion-base: 220ms;",
  "--mw-motion-slow: 420ms;",
  "--mw-motion-cinematic: 900ms;",
]
for (const token of requiredTokenLines) {
  if (!styles.includes(token)) violations.push(`styles.css: missing canonical token ${token}`)
}

const story = await readFile(path.join(src, "stories", "Screens.stories.tsx"), "utf8")
for (let index = 1; index <= 16; index += 1) {
  const id = `S${String(index).padStart(2, "0")}`
  if (!story.includes(`export const ${id}`)) violations.push(`Screens.stories.tsx: missing screen ${id}`)
}

const sourceText = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n")
const requiredComponents = [
  "MWHeader",
  "PlatformSidebar",
  "CaseHeader",
  "CaseCard",
  "FourRecordSummary",
  "EvidenceCard",
  "RepositoryCard",
  "SourceBlock",
  "Citation",
  "CorrelationScore",
  "EvidenceGraph",
  "GraphNode",
  "GraphEdge",
  "TimelineEntry",
  "LegalStatus",
  "AWSBoundary",
  "DiscussionItem",
  "SubmissionCard",
  "NotificationItem",
  "RepositoryHealthRow",
  "AuditEventRow",
  "MetricTile",
  "Button",
  "IconButton",
  "Input",
  "Textarea",
  "Select",
  "Checkbox",
  "Radio",
  "Switch",
  "Badge",
  "Tabs",
  "Tooltip",
  "Dialog",
  "Drawer",
  "Avatar",
  "Divider",
  "Skeleton",
]
for (const component of requiredComponents) {
  if (!sourceText.includes(`export function ${component}`) && !sourceText.includes(`export const ${component} =`)) violations.push(`component inventory: missing export ${component}`)
}


const patternSource = await readFile(path.join(src, "components", "patterns", "domain-patterns.tsx"), "utf8")
const requiredPatterns = [
  "PublicCasePattern",
  "EvidenceGridPattern",
  "CorrelationGraphPattern",
  "CaseTimelinePattern",
  "AWSLegalSummaryPattern",
  "RepositoryMonitor",
  "ModerationQueue",
  "CommunityCaseThreadPattern",
  "AuthFormPattern",
  "SearchFiltersPattern",
  "EmptyLoadingErrorPattern",
  "RelatedCases",
  "Pagination",
]
for (const pattern of requiredPatterns) {
  if (!patternSource.includes(`export function ${pattern}`)) violations.push(`pattern inventory: missing export function ${pattern}`)
}

const componentStory = await readFile(path.join(src, "stories", "ComponentMatrix.stories.tsx"), "utf8")
const requiredComponentProofs = [
  "HeaderVariants",
  "CaseVariants",
  "EvidenceAndSourceVariants",
  "CorrelationAndGraphVariants",
  "TimelineVariants",
  "LegalStateVariants",
  "CommunityStateVariants",
  "RepositoryAndMetricStates",
]
for (const proof of requiredComponentProofs) {
  if (!componentStory.includes(`export const ${proof}`)) violations.push(`component story proof: missing ${proof}`)
}

const patternStory = await readFile(path.join(src, "stories", "PatternMatrix.stories.tsx"), "utf8")
const requiredPatternProofs = [
  "PublicCase",
  "EvidenceGrid",
  "CorrelationGraph",
  "AWSLegalSummary",
  "Timeline",
  "RepositoryMonitorPattern",
  "ModerationQueuePattern",
  "CommunityThread",
  "AuthForm",
  "SearchAndFilters",
  "EmptyLoadingError",
]
for (const proof of requiredPatternProofs) {
  if (!patternStory.includes(`export const ${proof}`)) violations.push(`pattern story proof: missing ${proof}`)
}

if (violations.length) {
  console.error("Rocksoul UI contract audit failed:")
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log("Rocksoul UI contract audit passed.")
