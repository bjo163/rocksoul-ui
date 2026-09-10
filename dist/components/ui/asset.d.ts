import type { ImgHTMLAttributes } from "react";
import type { MoonWitnessAssetPackId } from "../../contracts/asset-packs";
/** Uses the existing ROCKSOUL asset provider, including consumer base URLs. */
declare function Asset({ className, pack, file, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & {
    pack: MoonWitnessAssetPackId;
    file: string;
    alt: string;
}): import("react").JSX.Element;
export { Asset };
