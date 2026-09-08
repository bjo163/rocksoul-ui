import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const contract = await readFile(path.join(root, "src", "contracts", "assets-v2.ts"), "utf8")
const runtimeMatch = contract.match(/commit:\s*"([0-9a-f]{40})"/)
const acceptedMainMatch = contract.match(/acceptedMainCommit:\s*"([0-9a-f]{40})"/)
const releaseMatch = contract.match(/assetRelease:\s*"([^"]+)"/)
const countMatch = contract.match(/assetPackCount:\s*(\d+)/)

if (!runtimeMatch || !acceptedMainMatch || !releaseMatch || !countMatch) {
  console.error("Assets freshness audit failed: stable sync metadata not found.")
  process.exit(1)
}

const runtimeCommit = runtimeMatch[1]
const acceptedMainCommit = acceptedMainMatch[1]
const expectedRelease = releaseMatch[1]
const expectedPackCount = Number(countMatch[1])

let current = ""
try {
  current = execFileSync(
    "git",
    ["ls-remote", "https://github.com/bjo163/rocksoul-assets.git", "refs/heads/main"],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
  ).trim().split(/\s+/)[0]
} catch {
  console.error("Assets freshness audit failed: unable to query rocksoul-assets/main.")
  process.exit(1)
}

if (current === runtimeCommit) {
  console.log(`Assets freshness audit passed at runtime pin: ${runtimeCommit}`)
  process.exit(0)
}

if (current === acceptedMainCommit) {
  console.log(`Assets freshness audit passed at accepted main head: ${acceptedMainCommit} (runtime pin ${runtimeCommit})`)
  process.exit(0)
}

function allowedPostReleaseFile(file) {
  return (
    file === "README.md" ||
    file.startsWith("docs/") ||
    file.startsWith("moonwitness/brand/generated/")
  )
}

try {
  const [versionResponse, packsResponse, compareResponse] = await Promise.all([
    fetch("https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/VERSION"),
    fetch("https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/asset-packs.json"),
    fetch(`https://api.github.com/repos/bjo163/rocksoul-assets/compare/${acceptedMainCommit}...${current}`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "rocksoul-ui-assets-freshness" },
    }),
  ])

  if (!versionResponse.ok || !packsResponse.ok || !compareResponse.ok) {
    throw new Error("upstream metadata unavailable")
  }

  const version = (await versionResponse.text()).trim().replace(/^v/, "")
  const packs = await packsResponse.json()
  const compare = await compareResponse.json()
  const packCount = Array.isArray(packs.packs) ? packs.packs.length : 0

  if (version !== expectedRelease || packs.version !== expectedRelease || packCount !== expectedPackCount) {
    console.error("Assets freshness audit failed: upstream main changed release contract.")
    console.error(`- recorded release: ${expectedRelease} / ${expectedPackCount} packs`)
    console.error(`- upstream release: ${version} / ${packCount} packs`)
    process.exit(1)
  }

  const changedFiles = Array.isArray(compare.files)
    ? compare.files.map((file) => file.filename).filter(Boolean)
    : []
  const contractChanges = changedFiles.filter((file) => !allowedPostReleaseFile(file))

  if (contractChanges.length) {
    console.error("Assets freshness audit failed: consumer-visible source/contract drift requires an explicit UI sync.")
    for (const file of contractChanges) console.error(`- ${file}`)
    console.error(`- accepted assets head: ${acceptedMainCommit}`)
    console.error(`- current assets head:  ${current}`)
    process.exit(1)
  }

  console.warn(`Assets main advanced after accepted sync: ${acceptedMainCommit} -> ${current}`)
  console.warn("Only documentation or generated brand delivery changed; runtime/source contracts remain accepted.")
  console.log(`Assets freshness audit passed with bounded post-release drift: v${version} / ${packCount} packs`)
} catch (error) {
  console.error("Assets freshness audit failed: unable to verify bounded release compatibility.")
  if (error instanceof Error) console.error(error.message)
  process.exit(1)
}
