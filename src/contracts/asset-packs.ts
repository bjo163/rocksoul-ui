export const moonWitnessAssetPacks = {
  icons: { count: 44, manifest: "assets/icons/icons.json", root: "assets/icons/svg" },
  dashboard: { count: 20, manifest: "assets/dashboard-pack/dashboard-pack.json", root: "assets/dashboard-pack/widgets" },
  dataViz: { count: 16, manifest: "assets/data-viz/data-viz.json", root: "assets/data-viz/charts" },
  heroBackgrounds: { count: 8, manifest: "assets/hero-backgrounds/backgrounds.json", root: "assets/hero-backgrounds/svg" },
  stateIllustrations: { count: 12, manifest: "assets/state-illustrations/states.json", root: "assets/state-illustrations/svg" },
  motion: { count: 6, manifest: "assets/motion/motion.json", root: "assets/motion/svg", reducedMotionRequired: true },
  sfx: { count: 10, manifest: "assets/sfx/sounds.json", deliveryManifest: "assets/sfx/generated/manifest.json", root: "assets/sfx/generated" },
} as const

export type MoonWitnessAssetPack = keyof typeof moonWitnessAssetPacks

export function moonWitnessAssetPath(pack: MoonWitnessAssetPack, file: string) {
  return `${moonWitnessAssetPacks[pack].root}/${file}`
}
