import type { ImgHTMLAttributes } from "react";
import { MoonWitnessRegistryAssetImage } from "../asset-provider";
import type { MoonWitnessAssetPackId } from "../../contracts/asset-packs";
import type { MoonWitnessAssetRegistryFormat, MoonWitnessAssetRegistryPackId, MoonWitnessAssetRootMode } from "../../contracts/assets-registry";
/** Uses the existing ROCKSOUL asset provider, including consumer base URLs. */
declare function Asset({ className, pack, file, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & {
    pack: MoonWitnessAssetPackId;
    file: string;
    alt: string;
}): import("react").JSX.Element;
export { Asset };
/**
 * Resolves a canonical asset from the version-pinned RockSoul registry.
 * Use this for the 44 registry packs; use Asset for an explicitly known local file.
 */
declare function RegistryAsset({ className, pack, assetId, format, size, baseUrl, rootMode, alt, ...props }: Omit<React.ComponentProps<typeof MoonWitnessRegistryAssetImage>, "className"> & {
    pack: MoonWitnessAssetRegistryPackId;
    assetId: string;
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
    baseUrl?: string;
    rootMode?: MoonWitnessAssetRootMode;
    alt: string;
    className?: string;
}): import("react").JSX.Element;
export { RegistryAsset };
