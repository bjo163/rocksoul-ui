import { execFileSync } from "node:child_process"
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const ROOT = process.cwd()
const DEFAULT_BASELINE = "config/design-audit-baseline.json"
const DEFAULT_EXCEPTIONS = "config/design-audit-exceptions.json"
const DEFAULT_GENERATED = "config/generated-sources.json"
const REPORT_PATH = "artifacts/audit/design-values.json"

const DESIGN_PROPERTIES = new Set([
  "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "margin-inline", "margin-block",
  "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "padding-inline", "padding-block",
  "gap", "row-gap", "column-gap", "top", "right", "bottom", "left", "inset",
  "width", "height", "min-width", "min-height", "max-width", "max-height",
  "border-radius", "border-width", "outline-width", "font-family", "font-size", "font-weight",
  "letter-spacing", "line-height", "transition-duration", "animation-duration", "animation-delay",
  "opacity", "z-index", "box-shadow", "text-shadow", "filter", "backdrop-filter",
])

const ARBITRARY_PREFIXES = [
  "p", "px", "py", "pt", "pr", "pb", "pl", "m", "mx", "my", "mt", "mr", "mb", "ml",
  "gap", "gap-x", "gap-y", "space-x", "space-y", "rounded", "border", "outline",
  "text", "tracking", "leading", "w", "h", "size", "min-w", "min-h", "max-w", "max-h",
  "top", "right", "bottom", "left", "inset", "translate-x", "translate-y",
  "bg", "shadow", "blur", "backdrop-blur", "opacity", "duration", "delay", "animate", "z", "ring",
]

const COLOR_RE = /(?:#[0-9a-fA-F]{3,8}\b|(?:rgb|rgba|hsl|hsla|oklch|color)\s*\()/g
const MW_VAR_USE_RE = /var\(\s*(--mw-[\w-]+)\b/g
const MW_VAR_DECL_RE = /(--mw-[\w-]+)\s*:/g

function normalize(file) {
  return file.split(path.sep).join("/")
}

export function classifyPath(filePath) {
  const p = normalize(filePath)
  if (p.startsWith("src/generated/")) return "generated"
  if (p.includes("/fixtures/") || p.startsWith("src/fixtures/")) return "fixture"
  if (p.includes("/stories/") || /\.stories\.[jt]sx?$/.test(p)) return "story"
  if (p.includes("/test/") || p.includes("/tests/") || /\.(test|spec)\.[cm]?[jt]sx?$/.test(p)) return "test"
  if (p.startsWith("public/") && p.endsWith(".svg")) return "asset"
  if (p.startsWith("src/foundation/tokens/")) return "token-source"
  if (p === "src/styles.css") return "token-source"
  if (p.startsWith("docs/")) return "documentation"
  if (p.startsWith("dist/")) return "distribution"
  return "source"
}

function lineNumberAt(content, index) {
  return content.slice(0, index).split(/\r?\n/).length
}

function finding(rule, filePath, line, value, suggestedOwner, severity = "error") {
  return { rule, severity, path: normalize(filePath), line, value, suggestedOwner }
}

function tokenDeclarationAt(content, index) {
  const start = content.lastIndexOf("\n", index) + 1
  const endIndex = content.indexOf("\n", index)
  const end = endIndex === -1 ? content.length : endIndex
  return /--mw-[\w-]+\s*:/.test(content.slice(start, end))
}

function allowedAssetOrGenerated(classification) {
  return classification === "asset" || classification === "generated"
}

export function scanSource({ filePath, content, classification = classifyPath(filePath) }) {
  const findings = []
  const isCss = filePath.endsWith(".css")
  const isCode = /\.[cm]?[jt]sx?$/.test(filePath)
  const isSvg = filePath.endsWith(".svg")

  for (const match of content.matchAll(COLOR_RE)) {
    const value = match[0]
    const tokenLiteral = classification === "token-source" && tokenDeclarationAt(content, match.index ?? 0)
    if (!tokenLiteral && !allowedAssetOrGenerated(classification)) {
      findings.push(finding("raw-color", filePath, lineNumberAt(content, match.index ?? 0), value, "primitive-or-semantic-token"))
    }
  }

  if (isCode) {
    const prefix = ARBITRARY_PREFIXES.map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
    const arbitraryRe = new RegExp(`(?:^|[\\s"'\\x60:])((?:${prefix})-\\[[^\\]]+\\])`, "g")
    for (const match of content.matchAll(arbitraryRe)) {
      const value = match[1]
      const inner = value.slice(value.indexOf("[") + 1, -1)
      if (/^(?:var\(--mw-[\w-]+\)|(?:calc|min|max|clamp)\([^#]*var\(--mw-[\w-]+\)[^#]*\)|inherit|currentColor)$/.test(inner)) continue
      const rule =
        /^(?:bg|border|text|ring)-\[/.test(value) ? "arbitrary-tailwind-color" :
        /^(?:duration|delay)-\[/.test(value) ? "arbitrary-motion" :
        /^(?:animate)-\[/.test(value) && /infinite/i.test(inner) ? "infinite-animation" :
        /^(?:shadow|blur|backdrop-blur)-\[/.test(value) ? "arbitrary-effect" :
        /^(?:rounded)-\[/.test(value) ? "arbitrary-radius" :
        /^(?:z)-\[/.test(value) ? "arbitrary-z-index" :
        /^(?:opacity)-\[/.test(value) ? "arbitrary-opacity" :
        "arbitrary-tailwind-value"
      findings.push(finding(rule, filePath, lineNumberAt(content, match.index ?? 0), value, "semantic-or-component-token"))
    }

    const inlineStyleRe = /style\s*=\s*\{\{([\s\S]*?)\}\}/g
    for (const styleMatch of content.matchAll(inlineStyleRe)) {
      const body = styleMatch[1]
      const bodyOffset = (styleMatch.index ?? 0) + styleMatch[0].indexOf(body)
      const propRe = /\b([A-Za-z][A-Za-z0-9]*)\s*:\s*(-?\d+(?:\.\d+)?|"[^"]*"|'[^']*')/g
      for (const propMatch of body.matchAll(propRe)) {
        const kebab = propMatch[1].replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        if (!DESIGN_PROPERTIES.has(kebab)) continue
        const raw = propMatch[2]
        if (/^(?:0|1)$/.test(raw) && (kebab === "opacity" || kebab === "z-index")) continue
        findings.push(finding("inline-style-literal", filePath, lineNumberAt(content, bodyOffset + (propMatch.index ?? 0)), `${propMatch[1]}: ${raw}`, "semantic-or-component-token"))
      }
    }
  }

  if (isCss) {
    const declarationRe = /(^|[;{\n]\s*)([-\w]+)\s*:\s*([^;}{]+)(?=[;}])/gm
    for (const match of content.matchAll(declarationRe)) {
      const property = match[2]
      const value = match[3].trim()
      const line = lineNumberAt(content, match.index ?? 0)
      if (property.startsWith("--")) continue
      if (!DESIGN_PROPERTIES.has(property)) continue
      if (/^(?:inherit|initial|unset|normal|auto|none|0|var\(|calc\(|min\(|max\(|clamp\()/i.test(value)) continue

      if (property === "font-family") {
        const allowedFonts = /Inter Tight|Inter|IBM Plex Mono|Arial|SFMono-Regular|Consolas|sans-serif|monospace/
        if (!allowedFonts.test(value)) findings.push(finding("typography-font-family", filePath, line, value, "typography-token"))
        continue
      }

      let rule = "raw-design-value"
      if (/margin|padding|gap|top|right|bottom|left|inset|width|height/.test(property)) rule = "raw-spacing-or-geometry"
      else if (property === "border-radius") rule = "raw-radius"
      else if (/border-width|outline-width/.test(property)) rule = "raw-line-width"
      else if (/font-size|font-weight|letter-spacing|line-height/.test(property)) rule = "raw-typography"
      else if (/transition-duration|animation-duration|animation-delay/.test(property)) rule = "raw-motion"
      else if (property === "opacity") rule = "raw-opacity"
      else if (property === "z-index") rule = "raw-z-index"
      else if (/shadow|filter/.test(property)) rule = "raw-effect"
      findings.push(finding(rule, filePath, line, value, "primitive-quanta"))
    }

    for (const match of content.matchAll(/animation-iteration-count\s*:\s*infinite\b/g)) {
      findings.push(finding("infinite-animation", filePath, lineNumberAt(content, match.index ?? 0), "infinite", "explicit-motion-exception"))
    }
  }

  if ((isSvg || isCode) && !allowedAssetOrGenerated(classification)) {
    for (const match of content.matchAll(/\bstroke-width\s*=\s*["']([^"']+)["']/g)) {
      if (/^(?:var\(--mw-[\w-]+\)|currentColor)$/.test(match[1])) continue
      findings.push(finding("svg-stroke-width", filePath, lineNumberAt(content, match.index ?? 0), match[1], "line-quanta"))
    }
  }

  return findings
}

export function findCssVariableFindings(sources) {
  const declared = new Set()
  const uses = []
  for (const source of sources) {
    for (const match of source.content.matchAll(MW_VAR_DECL_RE)) declared.add(match[1])
    for (const match of source.content.matchAll(MW_VAR_USE_RE)) {
      uses.push({ name: match[1], path: source.filePath, line: lineNumberAt(source.content, match.index ?? 0) })
    }
  }
  return uses
    .filter((use) => !declared.has(use.name))
    .map((use) => finding("undefined-css-variable", use.path, use.line, use.name, "token-source"))
}

export function validateExceptions(exceptions, now = new Date()) {
  const failures = []
  for (const [index, entry] of (exceptions ?? []).entries()) {
    const label = `exceptions[${index}]`
    if (!entry.path || /[*?[\]{}]/.test(entry.path)) failures.push(`${label}: path must be exact; wildcards/globs are forbidden`)
    if (!entry.rule) failures.push(`${label}: rule is required`)
    if (!entry.reason) failures.push(`${label}: reason is required`)
    if (!entry.owner) failures.push(`${label}: owner is required`)
    if (entry.expires && Number.isNaN(Date.parse(entry.expires))) failures.push(`${label}: expires must be an ISO date`)
    if (entry.expires && new Date(entry.expires) < now) failures.push(`${label}: exception expired on ${entry.expires}`)
  }
  return failures
}

export function applyPolicy(findings, { strictPaths = new Set(), exceptions = [] } = {}) {
  return findings.map((item) => {
    const exception = exceptions.find((entry) =>
      entry.path === item.path &&
      entry.rule === item.rule &&
      (entry.value === undefined || entry.value === item.value)
    )
    if (exception) return { ...item, severity: "info", disposition: "approved-exception", exceptionOwner: exception.owner }
    if (item.rule === "undefined-css-variable" || item.rule === "generated-provenance") {
      return { ...item, severity: "error", disposition: "always-fail-closed" }
    }
    if (strictPaths.has(item.path)) return { ...item, severity: "error", disposition: "new-or-touched-debt" }
    return { ...item, severity: "warning", disposition: "baseline-debt" }
  })
}

async function walk(directory, output = []) {
  let entries
  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch {
    return output
  }
  for (const entry of entries) {
    const full = path.join(directory, entry.name)
    const rel = normalize(path.relative(ROOT, full))
    if (entry.isDirectory()) {
      if (rel === "node_modules" || rel === "dist" || rel.startsWith("artifacts/")) continue
      await walk(full, output)
    } else if (/\.(?:css|svg|[cm]?[jt]sx?)$/.test(entry.name)) {
      output.push(rel)
    }
  }
  return output
}

function changedPathsSince(baselineCommit) {
  try {
    const output = execFileSync("git", ["diff", "--name-only", `${baselineCommit}..HEAD`, "--", "src", "public"], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    })
    return new Set(output.split(/\r?\n/).filter(Boolean).map(normalize))
  } catch (error) {
    const detail = error?.stderr?.toString().trim() || error?.message || "unknown git error"
    throw new Error(`Cannot resolve design-audit baseline ${baselineCommit}: ${detail}`)
  }
}

async function loadJson(relativePath) {
  return JSON.parse(await readFile(path.join(ROOT, relativePath), "utf8"))
}

async function validateGeneratedRegistry(registry) {
  const findings = []
  const registered = new Map((registry.files ?? []).map((entry) => [normalize(entry.path), entry]))
  const generatedFiles = (await walk(path.join(ROOT, "src/generated"))).filter((file) => file.startsWith("src/generated/"))
  for (const file of generatedFiles) {
    const entry = registered.get(file)
    if (!entry) {
      findings.push(finding("generated-provenance", file, 1, "unregistered generated file", "generated-source-registry"))
      continue
    }
    if (!entry.source || !entry.generator || !entry.owner) {
      findings.push(finding("generated-provenance", file, 1, "incomplete provenance metadata", "generated-source-registry"))
    }
  }
  for (const file of registered.keys()) {
    if (!generatedFiles.includes(file)) findings.push(finding("generated-provenance", file, 1, "registry entry has no generated artifact", "generated-source-registry"))
  }
  return findings
}

function candidateReport(findings) {
  const counts = new Map()
  for (const item of findings) {
    if (!/^raw-|^arbitrary-|^inline-style/.test(item.rule)) continue
    const key = `${item.rule}\u0000${item.value}`
    const current = counts.get(key) ?? { rule: item.rule, value: item.value, occurrences: 0 }
    current.occurrences += 1
    counts.set(key, current)
  }
  return [...counts.values()].sort((a, b) => b.occurrences - a.occurrences || a.rule.localeCompare(b.rule) || a.value.localeCompare(b.value)).slice(0, 100)
}

export async function runDesignValueAudit() {
  const baseline = await loadJson(DEFAULT_BASELINE)
  const exceptionConfig = await loadJson(DEFAULT_EXCEPTIONS)
  const generatedRegistry = await loadJson(DEFAULT_GENERATED)
  const exceptionFailures = validateExceptions(exceptionConfig.exceptions)
  if (exceptionFailures.length) throw new Error(exceptionFailures.join("\n"))

  const strictPaths = changedPathsSince(baseline.baselineCommit)
  const files = [...await walk(path.join(ROOT, "src")), ...await walk(path.join(ROOT, "public"))]
    .filter((file, index, array) => array.indexOf(file) === index)
    .sort()
  const sources = await Promise.all(files.map(async (filePath) => ({
    filePath,
    classification: classifyPath(filePath),
    content: await readFile(path.join(ROOT, filePath), "utf8"),
  })))

  let findings = sources.flatMap((source) => scanSource(source))
  findings.push(...findCssVariableFindings(sources))
  findings.push(...await validateGeneratedRegistry(generatedRegistry))

  const governed = applyPolicy(findings, { strictPaths, exceptions: exceptionConfig.exceptions })
    .sort((a, b) => a.path.localeCompare(b.path) || a.line - b.line || a.rule.localeCompare(b.rule) || a.value.localeCompare(b.value))

  const report = {
    schemaVersion: 1,
    baselineCommit: baseline.baselineCommit,
    baselineCreatedAt: baseline.createdAt,
    strictPaths: [...strictPaths].sort(),
    summary: {
      errors: governed.filter((item) => item.severity === "error").length,
      warnings: governed.filter((item) => item.severity === "warning").length,
      info: governed.filter((item) => item.severity === "info").length,
    },
    candidates: candidateReport(governed),
    findings: governed,
  }

  await mkdir(path.join(ROOT, path.dirname(REPORT_PATH)), { recursive: true })
  await writeFile(path.join(ROOT, REPORT_PATH), `${JSON.stringify(report, null, 2)}\n`, "utf8")

  if (report.summary.errors) {
    console.error(`Design-value audit failed: ${report.summary.errors} new/touched error(s); ${report.summary.warnings} baselined warning(s).`)
    for (const item of governed.filter((entry) => entry.severity === "error").slice(0, 50)) {
      console.error(`- ${item.path}:${item.line} ${item.rule} ${item.value}`)
    }
    if (report.summary.errors > 50) console.error(`- ... ${report.summary.errors - 50} additional errors in ${REPORT_PATH}`)
    process.exitCode = 1
  } else {
    console.log(`Design-value audit passed: 0 new errors; ${report.summary.warnings} existing finding(s) remain visible in ${REPORT_PATH}.`)
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  await runDesignValueAudit()
}
