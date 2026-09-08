import type { ImgHTMLAttributes } from "react"
import {
  ROCKSOUL_ASSETS_CANDIDATE,
  moonWitnessCandidateAssetPath,
  type MoonWitnessCandidateFormat,
  type MoonWitnessCandidatePackId,
} from "../contracts/assets-candidate"

export const MOONWITNESS_CANDIDATE_ASSET_BASE =
  "https://raw.githubusercontent.com/bjo163/rocksoul-assets/2f458f0b0c34b936f15e08eb2f0d6fd39bd39b6d/moonwitness"

function cleanBase(base: string) {
  return base.replace(/\/+$/, "")
}

export function resolveMoonWitnessCandidateAssetUrl(
  pack: MoonWitnessCandidatePackId,
  assetId: string,
  options: {
    format?: MoonWitnessCandidateFormat
    baseUrl?: string
  } = {},
) {
  const path = moonWitnessCandidateAssetPath(pack, assetId, options.format ?? "svg")
  if (!path) return undefined
  const relative = path.replace(/^moonwitness\//, "")
  return `${cleanBase(options.baseUrl ?? MOONWITNESS_CANDIDATE_ASSET_BASE)}/${relative}`
}

export function MoonWitnessCandidateAssetImage({
  pack,
  assetId,
  format = "svg",
  baseUrl,
  alt,
  ...props
}: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  pack: MoonWitnessCandidatePackId
  assetId: string
  format?: MoonWitnessCandidateFormat
  baseUrl?: string
  alt: string
}) {
  const src = resolveMoonWitnessCandidateAssetUrl(pack, assetId, { format, baseUrl })
  if (!src) return null
  return <img src={src} alt={alt} {...props} />
}

export const moonWitnessCandidateConsumption = {
  channel: "candidate-v1.3",
  registryVersion: ROCKSOUL_ASSETS_CANDIDATE.registryVersion,
  packCount: ROCKSOUL_ASSETS_CANDIDATE.packCount,
  canonicalAssetCount: ROCKSOUL_ASSETS_CANDIDATE.canonicalAssetCount,
  defaultBaseUrl: MOONWITNESS_CANDIDATE_ASSET_BASE,
  stableByDefault: true,
} as const
