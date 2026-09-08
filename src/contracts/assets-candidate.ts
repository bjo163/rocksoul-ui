import { assets as candidateAssets } from "../generated/assets-v1.3"

export const ROCKSOUL_ASSETS_CANDIDATE = {
  repository: "bjo163/rocksoul-assets",
  ref: "feat/complete-visual-language-v1.3",
  commit: "f78a4d33b23542f252f3cebb14938f28a3ca0ad5",
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
