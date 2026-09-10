import type { ImgHTMLAttributes } from "react"
import { MoonWitnessAssetImage, MoonWitnessRegistryAssetImage } from "../asset-provider"
import type { MoonWitnessAssetPackId } from "../../contracts/asset-packs"
import type { MoonWitnessAssetRegistryFormat, MoonWitnessAssetRegistryPackId, MoonWitnessAssetRootMode } from "../../contracts/assets-registry"
import { cn } from "../../lib/cn"

/** Uses the existing ROCKSOUL asset provider, including consumer base URLs. */
function Asset({ className, pack, file, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & {
  pack: MoonWitnessAssetPackId
  file: string
  alt: string
}) {
  return <MoonWitnessAssetImage data-slot="asset" pack={pack} file={file} alt={alt}
    className={cn("max-w-full object-contain", className)} {...props} />
}

export { Asset }

/**
 * Resolves a canonical asset from the version-pinned RockSoul registry.
 * Use this for the 44 registry packs; use Asset for an explicitly known local file.
 */
function RegistryAsset({ className, pack, assetId, format, size, baseUrl, rootMode, alt, ...props }: Omit<React.ComponentProps<typeof MoonWitnessRegistryAssetImage>, "className"> & {
  pack: MoonWitnessAssetRegistryPackId
  assetId: string
  format?: MoonWitnessAssetRegistryFormat
  size?: string
  baseUrl?: string
  rootMode?: MoonWitnessAssetRootMode
  alt: string
  className?: string
}) {
  return <MoonWitnessRegistryAssetImage data-slot="registry-asset" pack={pack} assetId={assetId} format={format} size={size} baseUrl={baseUrl} rootMode={rootMode} alt={alt} className={cn("max-w-full object-contain", className)} {...props} />
}

export { RegistryAsset }
