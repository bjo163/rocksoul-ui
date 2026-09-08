import type { ImgHTMLAttributes } from "react"
import { MoonWitnessRegistryAssetImage } from "./asset-provider"
import {
  MOONWITNESS_STABLE_REPOSITORY_BASE,
  ROCKSOUL_ASSETS_REGISTRY,
  resolveMoonWitnessRegistryAssetUrl,
  type MoonWitnessAssetRegistryFormat,
  type MoonWitnessAssetRegistryPackId,
} from "../contracts/assets-registry"

export const MOONWITNESS_CANDIDATE_ASSET_BASE = MOONWITNESS_STABLE_REPOSITORY_BASE
export const resolveMoonWitnessCandidateAssetUrl = resolveMoonWitnessRegistryAssetUrl

/** @deprecated v1.3 is stable. Use MoonWitnessRegistryAssetImage. */
export function MoonWitnessCandidateAssetImage(props: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  pack: MoonWitnessAssetRegistryPackId
  assetId: string
  format?: MoonWitnessAssetRegistryFormat
  size?: string
  baseUrl?: string
  alt: string
}) {
  return <MoonWitnessRegistryAssetImage {...props} />
}

export const moonWitnessCandidateConsumption = {
  channel: "deprecated-stable-alias",
  registryVersion: ROCKSOUL_ASSETS_REGISTRY.version,
  packCount: ROCKSOUL_ASSETS_REGISTRY.packCount,
  canonicalAssetCount: ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount,
  defaultBaseUrl: MOONWITNESS_STABLE_REPOSITORY_BASE,
  stableByDefault: true,
} as const
