export const moonWitnessAssetPacks = {
  "product-icons": { id: "product-icons", count: 44, root: "icons", manifest: "icons/icons.json" },
  "dashboard": { id: "dashboard", count: 20, root: "dashboard-pack", manifest: "dashboard-pack/dashboard-pack.json" },
  "data-viz": { id: "data-viz", count: 16, root: "data-viz", manifest: "data-viz/data-viz.json" },
  "hero-backgrounds": { id: "hero-backgrounds", count: 8, root: "hero-backgrounds", manifest: "hero-backgrounds/backgrounds.json" },
  "state-illustrations": { id: "state-illustrations", count: 12, root: "state-illustrations", manifest: "state-illustrations/states.json" },
  "motion": { id: "motion", count: 12, root: "motion", manifest: "motion/motion.json" },
  "sfx": { id: "sfx", count: 14, root: "sfx", manifest: "sfx/sounds.json" },
  "graph-vector": { id: "graph-vector", count: 10, root: "graph-pack", manifest: "graph-pack/manifest.json" },
  "badge-status": { id: "badge-status", count: 12, root: "badge-pack", manifest: "badge-pack/manifest.json" },
  "source-file": { id: "source-file", count: 15, root: "source-file-pack", manifest: "source-file-pack/manifest.json" },
  "geospatial": { id: "geospatial", count: 15, root: "geospatial-pack", manifest: "geospatial-pack/manifest.json" },
  "cursor-interaction": { id: "cursor-interaction", count: 17, root: "cursor-pack", manifest: "cursor-pack/manifest.json" },
  "persona-avatar": { id: "persona-avatar", count: 9, root: "persona-pack", manifest: "persona-pack/manifest.json" },
  "social-campaign": { id: "social-campaign", count: 8, root: "social-campaign-pack", manifest: "social-campaign-pack/manifest.json" },
  "platform-delivery": { id: "platform-delivery", count: 8, root: "platform-delivery-pack", manifest: "platform-delivery-pack/manifest.json" },
  "onboarding": { id: "onboarding", count: 8, root: "onboarding-pack", manifest: "onboarding-pack/manifest.json" },
  "document-report": { id: "document-report", count: 9, root: "document-report-pack", manifest: "document-report-pack/manifest.json" },
  "notification": { id: "notification", count: 8, root: "notification-pack", manifest: "notification-pack/manifest.json" },
  "editorial": { id: "editorial", count: 6, root: "editorial-pack", manifest: "editorial-pack/manifest.json" },
} as const

export type MoonWitnessAssetPackId = keyof typeof moonWitnessAssetPacks
export type MoonWitnessSfxId =
  | "ui-click-soft" | "command-open" | "notification" | "notification-critical"
  | "success" | "warning" | "error" | "evidence-linked" | "trace-found"
  | "ai-complete" | "upload-complete" | "case-open" | "case-resolved" | "ai-start"

export const moonWitnessAssetPackVersion = "1.2.0" as const
export const moonWitnessAssetPackIndexPath = "asset-packs.json" as const

export function moonWitnessAssetRelativePath(pack: MoonWitnessAssetPackId, file: string) {
  return `${moonWitnessAssetPacks[pack].root}/${file.replace(/^\/+/, "")}`
}
