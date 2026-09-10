import type { ImgHTMLAttributes } from "react"
import { MoonWitnessAssetImage } from "../asset-provider"
import type { MoonWitnessAssetPackId } from "../../contracts/asset-packs"
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
