export const moonWitnessAssetPacks = {
  "product-icons": { id: "product-icons", count: 44, root: "icons", manifest: "icons/icons.json" },
  "dashboard": { id: "dashboard", count: 20, root: "dashboard-pack", manifest: "dashboard-pack/dashboard-pack.json" },
  "data-viz": { id: "data-viz", count: 20, root: "data-viz", manifest: "data-viz/data-viz.json" },
  "hero-backgrounds": { id: "hero-backgrounds", count: 8, root: "hero-backgrounds", manifest: "hero-backgrounds/backgrounds.json" },
  "state-illustrations": { id: "state-illustrations", count: 12, root: "state-illustrations", manifest: "state-illustrations/states.json" },
  "motion": { id: "motion", count: 12, root: "motion", manifest: "motion/motion.json" },
  "application-screens": { id: "application-screens", count: 20, root: "ui/v2", manifest: "ui/v2/manifest.json" },
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
  "evidence-media": { id: "evidence-media", count: 24, root: "evidence-media-pack", manifest: "evidence-media-pack/manifest.json" },
  "correlation-semantics": { id: "correlation-semantics", count: 24, root: "correlation-semantics-pack", manifest: "correlation-semantics-pack/manifest.json" },
  "kanban-workflow": { id: "kanban-workflow", count: 18, root: "kanban-pack", manifest: "kanban-pack/manifest.json" },
  "calendar-temporal": { id: "calendar-temporal", count: 16, root: "calendar-pack", manifest: "calendar-pack/manifest.json" },
  "chat-collaboration": { id: "chat-collaboration", count: 24, root: "chat-pack", manifest: "chat-pack/manifest.json" },
  "ai-workspace": { id: "ai-workspace", count: 18, root: "ai-workspace-pack", manifest: "ai-workspace-pack/manifest.json" },
  "authorization-security": { id: "authorization-security", count: 18, root: "security-pack", manifest: "security-pack/manifest.json" },
  "data-grid": { id: "data-grid", count: 16, root: "data-grid-pack", manifest: "data-grid-pack/manifest.json" },
  "form-controls": { id: "form-controls", count: 20, root: "form-controls-pack", manifest: "form-controls-pack/manifest.json" },
  "theme-accessibility": { id: "theme-accessibility", count: 12, root: "theme-accessibility-pack", manifest: "theme-accessibility-pack/manifest.json" },
  "privacy-redaction": { id: "privacy-redaction", count: 16, root: "privacy-redaction-pack", manifest: "privacy-redaction-pack/manifest.json" },
  "evidence-integrity": { id: "evidence-integrity", count: 16, root: "integrity-pack", manifest: "integrity-pack/manifest.json" },
  "export-seal": { id: "export-seal", count: 12, root: "export-seal-pack", manifest: "export-seal-pack/manifest.json" },
  "rocksoul-character": { id: "rocksoul-character", count: 12, root: "rocksoul-character-pack", manifest: "rocksoul-character-pack/manifest.json" },
  "command-keyboard": { id: "command-keyboard", count: 14, root: "command-keyboard-pack", manifest: "command-keyboard-pack/manifest.json" },
  "texture-material": { id: "texture-material", count: 12, root: "texture-material-pack", manifest: "texture-material-pack/manifest.json" },
  "architecture-diagram": { id: "architecture-diagram", count: 16, root: "architecture-diagram-pack", manifest: "architecture-diagram-pack/manifest.json" },
  "device-mockup": { id: "device-mockup", count: 8, root: "device-mockup-pack", manifest: "device-mockup-pack/manifest.json" },
  "jurisdiction-locale": { id: "jurisdiction-locale", count: 16, root: "jurisdiction-locale-pack", manifest: "jurisdiction-locale-pack/manifest.json" },
  "cinematic-hero": { id: "cinematic-hero", count: 12, root: "cinematic-hero-pack", manifest: "cinematic-hero-pack/manifest.json" },
  "runtime-motion": { id: "runtime-motion", count: 12, root: "runtime-motion-pack", manifest: "runtime-motion-pack/manifest.json" },
  "developer-distribution": { id: "developer-distribution", count: 4, root: "developer-pack", manifest: "developer-pack/manifest.json" },
  "community-participation": { id: "community-participation", count: 8, root: "community-participation-pack", manifest: "community-participation-pack/manifest.json" },
} as const

export type MoonWitnessAssetPackId = keyof typeof moonWitnessAssetPacks
export type MoonWitnessSfxId =
  | "ui-click-soft" | "command-open" | "notification" | "notification-critical"
  | "success" | "warning" | "error" | "evidence-linked" | "trace-found"
  | "ai-complete" | "upload-complete" | "case-open" | "case-resolved" | "ai-start"

export const moonWitnessAssetPackVersion = "1.3.1" as const
export const moonWitnessAssetPackIndexPath = "asset-packs.json" as const

export function moonWitnessAssetRelativePath(pack: MoonWitnessAssetPackId, file: string) {
  return `${moonWitnessAssetPacks[pack].root}/${file.replace(/^\/+/, "")}`
}
