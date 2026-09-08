import { assets } from "../generated/assets-v1.3"
import { ROCKSOUL_ASSETS_SYNC } from "./assets-v2"

export const moonWitnessAssets = assets
export const ROCKSOUL_ASSETS_REGISTRY = {
  repository: ROCKSOUL_ASSETS_SYNC.repository,
  ref: ROCKSOUL_ASSETS_SYNC.ref,
  commit: ROCKSOUL_ASSETS_SYNC.commit,
  version: assets.version,
  packCount: Object.keys(assets.packs).length,
  canonicalAssetCount: assets.coverage.extensions.svg,
  deliveryFileCount: assets.coverage.deliveryFiles,
  coveragePercent: assets.coverage.coveragePercent,
  canonicalFormat: assets.canonicalFormat,
  developerDistribution: ROCKSOUL_ASSETS_SYNC.developerDistribution,
} as const

export type MoonWitnessAssetRegistryPackId = keyof typeof assets.packs
export type MoonWitnessAssetRegistryFormat = "svg" | "png"
export type MoonWitnessAssetRootMode = "repository" | "moonwitness"

type RegistryPathValue = string | Record<string, string>
type RegistryPack = {
  manifest: string
  count: number
  svg?: Record<string, RegistryPathValue>
  png?: Record<string, RegistryPathValue>
}

export const MOONWITNESS_STABLE_REPOSITORY_BASE =
  `https://raw.githubusercontent.com/${ROCKSOUL_ASSETS_SYNC.repository}/${ROCKSOUL_ASSETS_SYNC.commit}`

function cleanBase(base: string) {
  return base.replace(/\/+$/, "")
}

function normalizePathValue(value: RegistryPathValue | undefined, size?: string) {
  if (typeof value === "string") return value
  if (!value) return undefined
  if (size && value[size]) return value[size]
  return Object.values(value)[0]
}

export function moonWitnessRegistryAssetPath(
  pack: MoonWitnessAssetRegistryPackId,
  assetId: string,
  options: { format?: MoonWitnessAssetRegistryFormat; size?: string } = {},
) {
  const record = assets.packs[pack] as unknown as RegistryPack
  return normalizePathValue(record[options.format ?? "svg"]?.[assetId], options.size)
}

export function hasMoonWitnessRegistryAsset(
  pack: MoonWitnessAssetRegistryPackId,
  assetId: string,
  options: { format?: MoonWitnessAssetRegistryFormat; size?: string } = {},
) {
  return Boolean(moonWitnessRegistryAssetPath(pack, assetId, options))
}

export function resolveMoonWitnessRegistryAssetUrl(
  pack: MoonWitnessAssetRegistryPackId,
  assetId: string,
  options: {
    format?: MoonWitnessAssetRegistryFormat
    size?: string
    baseUrl?: string
    rootMode?: MoonWitnessAssetRootMode
  } = {},
) {
  const path = moonWitnessRegistryAssetPath(pack, assetId, options)
  if (!path) return undefined
  const rootMode = options.rootMode ?? "repository"
  const relative = rootMode === "moonwitness" ? path.replace(/^moonwitness\//, "") : path
  return `${cleanBase(options.baseUrl ?? MOONWITNESS_STABLE_REPOSITORY_BASE)}/${relative}`
}
