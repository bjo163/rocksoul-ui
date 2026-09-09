import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react"
import { moonWitnessAssetPacks, moonWitnessAssetRelativePath, type MoonWitnessAssetPackId, type MoonWitnessSfxId } from "../contracts/asset-packs"
import {
  MOONWITNESS_STABLE_REPOSITORY_BASE,
  resolveMoonWitnessRegistryAssetUrl,
  type MoonWitnessAssetRegistryFormat,
  type MoonWitnessAssetRegistryPackId,
  type MoonWitnessAssetRootMode,
} from "../contracts/assets-registry"

const DEFAULT_ASSET_BASE = "/assets"
const AssetBaseContext = createContext(DEFAULT_ASSET_BASE)

function cleanBase(base: string) {
  return base.replace(/\/+$/, "")
}

export function MoonWitnessAssetProvider({
  baseUrl = DEFAULT_ASSET_BASE,
  children,
}: {
  baseUrl?: string
  children: ReactNode
}) {
  return <AssetBaseContext.Provider value={cleanBase(baseUrl)}>{children}</AssetBaseContext.Provider>
}

export function useMoonWitnessAssetBaseUrl() {
  return useContext(AssetBaseContext)
}

export function resolveMoonWitnessAssetUrl(baseUrl: string, pack: MoonWitnessAssetPackId, file: string) {
  return `${cleanBase(baseUrl)}/${moonWitnessAssetRelativePath(pack, file)}`
}

export function MoonWitnessAssetImage({
  pack,
  file,
  alt,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  pack: MoonWitnessAssetPackId
  file: string
  alt: string
}) {
  const baseUrl = useMoonWitnessAssetBaseUrl()
  return <img src={resolveMoonWitnessAssetUrl(baseUrl, pack, file)} alt={alt} {...props} />
}

export function MoonWitnessRegistryAssetImage({
  pack,
  assetId,
  format = "svg",
  size,
  baseUrl = MOONWITNESS_STABLE_REPOSITORY_BASE,
  rootMode = "repository",
  alt,
  ...props
}: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  pack: MoonWitnessAssetRegistryPackId
  assetId: string
  format?: MoonWitnessAssetRegistryFormat
  size?: string
  baseUrl?: string
  rootMode?: MoonWitnessAssetRootMode
  alt: string
}) {
  const remoteSrc = resolveMoonWitnessRegistryAssetUrl(pack, assetId, { format, size, baseUrl, rootMode })
  const localSrc = resolveMoonWitnessRegistryAssetUrl(pack, assetId, {
    format,
    size,
    baseUrl: DEFAULT_ASSET_BASE,
    rootMode,
  })
  const [src, setSrc] = useState(remoteSrc)
  useEffect(() => setSrc(remoteSrc), [remoteSrc])
  if (!src) return null
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      onError={(event) => {
        if (src !== localSrc && localSrc) {
          setSrc(localSrc)
        }
        props.onError?.(event)
      }}
    />
  )
}

export function MoonWitnessStatusAsset({
  status,
  label = status,
  className,
}: {
  status: "supported" | "verified" | "partial" | "unresolved" | "blocked" | "disputed" | "degraded" | "offline" | "needs-context" | "source-linked" | "legal-review" | "archived"
  label?: string
  className?: string
}) {
  return (
    <span className={className}>
      <MoonWitnessAssetImage pack="badge-status" file={`svg/${status}.svg`} alt="" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  )
}

export function MoonWitnessPersonMark({
  alt = "Person",
  className,
}: {
  alt?: string
  className?: string
}) {
  return <MoonWitnessRegistryAssetImage pack="product-icons" assetId="person" alt={alt} className={className} />
}

export function MoonWitnessPersonaAvatar({
  persona,
  alt,
  className,
}: {
  persona: "rocksoul" | "researcher" | "analyst" | "moderator" | "admin" | "community-member" | "anonymous-source" | "protected-witness" | "ai-system"
  alt: string
  className?: string
}) {
  return <MoonWitnessAssetImage pack="persona-avatar" file={`svg/${persona}.svg`} alt={alt} className={className} />
}

export function useMoonWitnessSfx({
  enabled = false,
  volume = 0.35,
  format = "ogg",
}: {
  enabled?: boolean
  volume?: number
  format?: "ogg" | "wav"
} = {}) {
  const baseUrl = useMoonWitnessAssetBaseUrl()
  return useCallback((id: MoonWitnessSfxId) => {
    if (!enabled || typeof Audio === "undefined") return
    const src = `${cleanBase(baseUrl)}/sfx/generated/${id}.${format}`
    const audio = new Audio(src)
    audio.volume = Math.max(0, Math.min(1, volume))
    void audio.play().catch(() => undefined)
  }, [baseUrl, enabled, format, volume])
}

export const moonWitnessAssetConsumption = {
  localMirrorBase: DEFAULT_ASSET_BASE,
  registryRepositoryBase: MOONWITNESS_STABLE_REPOSITORY_BASE,
  packCount: Object.keys(moonWitnessAssetPacks).length,
  preferSvgInProductUi: true,
  rasterIsDerivative: true,
  runtimeMotionFormats: ["svg", "apng", "webm", "lottie"],
  sfxOptInOnly: true,
} as const
