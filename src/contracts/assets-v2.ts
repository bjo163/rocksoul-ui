export const ROCKSOUL_ASSETS_SYNC = {
  repository: "bjo163/rocksoul-assets",
  ref: "main",
  commit: "92e5d90058f0293525ecf26f228d94461f4738b9",
  manifestSchemaVersion: 3,
  applicationVersion: "v2",
  syncedAt: "2026-09-08",
  assetRelease: "1.1.0",
  assetReleaseStatus: "released",
  repositoryAcceptance: "passed",
  livePenpotVerification: "manual-follow-up",
  assetPacks: {
    icons: 44,
    dashboard: 20,
    dataViz: 16,
    heroBackgrounds: 8,
    stateIllustrations: 12,
    motion: 6,
    sfx: 10,
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
  { resource: "case", label: "Cases", path: "/cases", repo: "moonwitness" },
  { resource: "event", label: "Events", path: "/events", repo: "rocksoul-event" },
  { resource: "person", label: "People", path: "/people", repo: "rocksoul-superhero" },
  { resource: "rgbl", label: "RGBL Sources", path: "/sources", repo: "rocksoul-rgbl" },
  { resource: "aws", label: "AWS Legal", path: "/aws", repo: "rocksoul-aws" },
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
