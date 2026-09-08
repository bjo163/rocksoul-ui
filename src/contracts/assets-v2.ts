export const ROCKSOUL_ASSETS_SYNC = {
  repository: "bjo163/rocksoul-assets",
  ref: "main",
  commit: "82f20b8a361a19abdc6591fe2f4c67e3fb9d4b05",
  manifestSchemaVersion: 3,
  applicationVersion: "v2",
  syncedAt: "2026-09-08",
  assetRelease: "1.3.1",
  assetReleaseStatus: "released",
  repositoryAcceptance: "passed",
  livePenpotVerification: "manual-follow-up",
  assetPackIndex: "moonwitness/asset-packs.json",
  assetPackCount: 42,
  canonicalAssetCount: 614,
  developerDistribution: ["dist/assets.json", "dist/assets.ts", "dist/assets.css", "dist/sprite.svg"],
  mirroredRuntimeFiles: 198,
  mirroredCorePacks: {
    icons: 44,
    dashboard: 20,
    dataViz: 16,
    heroBackgrounds: 8,
    stateIllustrations: 12,
    motion: 12,
    sfx: 14,
    runtimeMotion: 12,
  },
} as const

export const moonWitnessBrandContract = {
  brand: "MoonWitness",
  ecosystem: "MoonWitness × Rocksoul",
  tagline: "Truth leaves a trace.",
  sourceType: "editable-vector",
} as const

export const v2NavigationItems = [
  { id: "dashboard", label: "Dashboard", path: "/", kind: "system", permission: "authenticated" },
  { id: "cases", label: "Cases", path: "/cases", kind: "resource", resource: "case", permission: "case:read" },
  { id: "kanban", label: "Kanban", path: "/work/kanban", kind: "workspace", permission: "review:read" },
  { id: "calendar", label: "Calendar", path: "/work/calendar", kind: "workspace", permission: "review:read" },
  { id: "chat", label: "Chat", path: "/chat", kind: "workspace", permission: "community:read" },
  { id: "ai", label: "AI Workspace", path: "/ai", kind: "workspace", permission: "ai:use" },
  { id: "resources", label: "Resources", path: "/resources", kind: "system", permission: "resource:read" },
  { id: "profile", label: "Profile", path: "/profile", kind: "account", permission: "authenticated" },
  { id: "settings", label: "Settings", path: "/settings", kind: "account", permission: "authenticated" },
] as const

export const v2ResourceDescriptors = [
  { resource: "case", label: "STORY / Cases", path: "/cases", repo: "rocksoul-mftl" },
  { resource: "event", label: "EVENT / Events", path: "/events", repo: "rocksoul-legend" },
  { resource: "person", label: "PERSON / People", path: "/people", repo: "rocksoul-superhero" },
  { resource: "rgbl", label: "TEXT / RGBL", path: "/sources", repo: "rocksoul-rgbl" },
  { resource: "aws", label: "LAW / AWS", path: "/aws", repo: "rocksoul-aws" },
  { resource: "correlation", label: "CORRELATION / Evidence Graph", path: "/correlation", repo: "rocksoul-correlation" },
] as const

export const v2ScreenContract = [
  { id: "17", slug: "dashboard", activeNav: "Dashboard" },
  { id: "18", slug: "command-palette", activeNav: "Dashboard", overlay: true },
  { id: "19", slug: "notifications", activeNav: "Dashboard", overlay: true },
  { id: "20", slug: "kanban", activeNav: "Kanban" },
  { id: "21", slug: "calendar", activeNav: "Calendar" },
  { id: "22", slug: "chat", activeNav: "Chat" },
  { id: "23", slug: "ai-workspace", activeNav: "AI Workspace" },
  { id: "24", slug: "resources", activeNav: "Resources" },
  { id: "25", slug: "profile-settings", activeNav: "Settings" },
  { id: "26", slug: "authorization", activeNav: "Settings" },
  { id: "27", slug: "system-states", activeNav: "Dashboard" },
] as const

export const v2ShellContract = {
  desktop: { width: 1440, sidebar: 220, behavior: "persistent" },
  tablet: { width: 768, sidebar: 72, behavior: "icon-rail" },
  mobile: { width: 390, sidebar: 0, behavior: "drawer" },
  backendStates: ["online", "degraded", "offline"],
  themeStates: ["light", "dark", "system"],
  sidebarStates: ["expanded", "compact", "drawer-open", "drawer-closed"],
  notificationStates: ["empty", "unread", "open"],
  userMenuStates: ["closed", "open"],
  accessibility: {
    skipLink: true,
    landmarks: ["navigation", "banner", "main"],
    keyboardCommandPalette: true,
    focusVisible: true,
    drawerFocusTrap: true,
  },
} as const

export const v2SystemStateContract = {
  loading: ["skeleton-or-progress", "accessible-busy-state", "reduced-motion-safe"],
  empty: ["headline", "supporting-copy", "recovery-or-create-action"],
  error: ["error-summary", "system-context", "retry-or-back-action", "trace-id-when-available"],
  offline: ["backend-status", "last-known-state", "retry"],
  forbidden: ["required-permission", "current-role", "request-access-when-available"],
} as const
