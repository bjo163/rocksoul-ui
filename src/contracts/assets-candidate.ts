import { assets as candidateAssets } from "../generated/assets-v1.3"

export const ROCKSOUL_ASSETS_CANDIDATE = {
  repository: "bjo163/rocksoul-assets",
  ref: "feat/complete-visual-language-v1.3",
  commit: "7c5c17ea9748499523bc2f4d9c759963f902fc4a",
  registryVersion: "1.3.0",
  status: "release-candidate-pending-ci",
  upstreamStableRelease: "1.2.0",
  upstreamCandidateRelease: "1.3.0",
  upstreamRepositoryAcceptance: "pending-ci",
  upstreamStableCommit: "95a6912409f849029e18093658b1c0e8158a32f0",
  packCount: 41,
  canonicalAssetCount: 591,
  developerDist: ["dist/assets.ts", "dist/assets.json", "dist/assets.css", "dist/sprite.svg"],
  promotionRule: "Do not replace stable assets sync until rocksoul-assets/main contains v1.3.0 with repository acceptance passed.",
  candidateDriftPolicy: "Pinned snapshot is immutable; feature-branch generator drift is advisory until stable promotion.",
} as const

export type MoonWitnessCandidatePackId = keyof typeof candidateAssets.packs
export type MoonWitnessCandidateFormat = "svg" | "png"

type CandidatePackRecord = {
  svg?: Record<string, string>
  png?: Record<string, string>
}

export function moonWitnessCandidateAssetPath(
  pack: MoonWitnessCandidatePackId,
  assetId: string,
  format: MoonWitnessCandidateFormat = "svg",
) {
  const record = candidateAssets.packs[pack] as unknown as CandidatePackRecord
  return record[format]?.[assetId]
}

export function hasMoonWitnessCandidateAsset(
  pack: MoonWitnessCandidatePackId,
  assetId: string,
  format: MoonWitnessCandidateFormat = "svg",
) {
  return Boolean(moonWitnessCandidateAssetPath(pack, assetId, format))
}

export { candidateAssets as moonWitnessCandidateAssets }
