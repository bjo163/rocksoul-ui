import { ROCKSOUL_ASSETS_SYNC } from "./assets-v2"

export const ROCKSOUL_GITHUB_WEB_ORIGIN = "https://github.com" as const
export const ROCKSOUL_GITHUB_RAW_ORIGIN = "https://raw.githubusercontent.com" as const

export const rocksoulEcosystemRepositories = {
  assets: "rocksoul-assets",
  ui: "rocksoul-ui",
  web: "rocksoul-web",
  community: "rocksoul-community",
  platform: "rocksoul-platform",
  story: "rocksoul-mftl",
  event: "rocksoul-legend",
  person: "rocksoul-superhero",
  text: "rocksoul-rgbl",
  law: "rocksoul-aws",
  perspective: "rocksoul-jizz",
  relationship: "rocksoul-correlation",
} as const

export type RocksoulRepositoryName = typeof rocksoulEcosystemRepositories[keyof typeof rocksoulEcosystemRepositories]

export const ROCKSOUL_ECOSYSTEM_OWNER = ROCKSOUL_ASSETS_SYNC.repository.split("/")[0] as string

function cleanPath(path: string) {
  return path.replace(/^\/+/, "")
}

export function resolveRocksoulRepositoryUrl(
  repository: RocksoulRepositoryName,
  options: { ref?: string; path?: string; raw?: boolean } = {},
) {
  const ref = options.ref ?? "main"
  const path = options.path ? cleanPath(options.path) : undefined
  if (options.raw) {
    return path
      ? `${ROCKSOUL_GITHUB_RAW_ORIGIN}/${ROCKSOUL_ECOSYSTEM_OWNER}/${repository}/${ref}/${path}`
      : `${ROCKSOUL_GITHUB_RAW_ORIGIN}/${ROCKSOUL_ECOSYSTEM_OWNER}/${repository}/${ref}`
  }
  const base = `${ROCKSOUL_GITHUB_WEB_ORIGIN}/${ROCKSOUL_ECOSYSTEM_OWNER}/${repository}`
  return path ? `${base}/blob/${ref}/${path}` : base
}

export function resolvePinnedRocksoulAssetSourceUrl(path: string) {
  return resolveRocksoulRepositoryUrl(rocksoulEcosystemRepositories.assets, {
    ref: ROCKSOUL_ASSETS_SYNC.commit,
    path,
  })
}

export interface CommunitySourceLocator {
  source: string
  kind: "external" | "case" | "community" | "opaque"
  href?: string
}

export function resolveCommunitySourceLocator(source?: string): CommunitySourceLocator | null {
  const normalized = source?.trim()
  if (!normalized) return null

  try {
    const url = new URL(normalized)
    if (url.protocol === "http:" || url.protocol === "https:") {
      return { source: normalized, kind: "external", href: url.toString() }
    }
  } catch {}

  const caseMatch = normalized.match(/^(?:CASE|REVIEW)\/(MW-\d+)$/i)
  if (caseMatch) {
    const caseId = caseMatch[1].toLowerCase()
    return {
      source: normalized,
      kind: "case",
      href: resolvePinnedRocksoulAssetSourceUrl(
        `penpot/golden-cases/${caseId}/SCREEN-CONTRACT.md`,
      ),
    }
  }

  if (normalized.startsWith("COMMUNITY-")) {
    return {
      source: normalized,
      kind: "community",
      href: resolveRocksoulRepositoryUrl(rocksoulEcosystemRepositories.community, {
        path: "README.md",
      }),
    }
  }

  return { source: normalized, kind: "opaque" }
}
