export interface CinematicWebHeroAssetSet {
  desktop: string
  mobile: string
  moon: string
  grid: string
  grain: string
  scanlines: string
  archive: readonly string[]
}

export const ROCKSOUL_CINEMATIC_WEB_HERO_SYNC = {
  repository: "bjo163/rocksoul-assets",
  ref: "main",
  commit: "82f20b8a361a19abdc6591fe2f4c67e3fb9d4b05",
  manifest: "moonwitness/cinematic-web-hero/manifest.json",
  profileVersion: "1.0.0",
  sourceRelease: "1.3.1",
} as const

export const MOONWITNESS_CINEMATIC_WEB_HERO_BASE =
  `https://raw.githubusercontent.com/${ROCKSOUL_CINEMATIC_WEB_HERO_SYNC.repository}/${ROCKSOUL_CINEMATIC_WEB_HERO_SYNC.commit}`

function asset(path: string) {
  return `${MOONWITNESS_CINEMATIC_WEB_HERO_BASE}/${path.replace(/^\/+/, "")}`
}

export const cinematicWebHeroAssets: CinematicWebHeroAssetSet = {
  desktop: asset("moonwitness/cinematic-hero-pack/webp/hero-master-desktop.webp"),
  mobile: asset("moonwitness/cinematic-hero-pack/webp/hero-master-mobile.webp"),
  moon: asset("moonwitness/cinematic-hero-pack/webp/moon-photographic.webp"),
  grid: asset("moonwitness/hero-backgrounds/svg/observatory-grid.svg"),
  grain: asset("moonwitness/texture-material-pack/svg/lunar-grain.svg"),
  scanlines: asset("moonwitness/texture-material-pack/svg/scanner-lines.svg"),
  archive: [
    asset("moonwitness/hero-backgrounds/png/lunar-trace.png"),
    asset("moonwitness/hero-backgrounds/png/archive-texture.png"),
    asset("moonwitness/hero-backgrounds/png/evidence-constellation.png"),
    asset("moonwitness/hero-backgrounds/png/correlation-web.png"),
  ],
} as const

export const cinematicWebHeroContract = {
  composition: "composite-photographic-master",
  desktopAspectRatio: "16:9",
  mobileAspectRatio: "3:4",
  headlineLines: ["WHERE MYTH", "FADES TO LEGEND"],
  semanticUi: "live-html-svg",
  reducedMotion: "static-by-default",
  evidenceGraphTextEquivalent: true,
  correlationImpliesCausation: false,
} as const
