import type { ImgHTMLAttributes } from "react";
import { resolveMoonWitnessRegistryAssetUrl, type MoonWitnessAssetRegistryFormat, type MoonWitnessAssetRegistryPackId } from "../contracts/assets-registry";
export declare const MOONWITNESS_CANDIDATE_ASSET_BASE: string;
export declare const resolveMoonWitnessCandidateAssetUrl: typeof resolveMoonWitnessRegistryAssetUrl;
/** @deprecated v1.3 is stable. Use MoonWitnessRegistryAssetImage. */
export declare function MoonWitnessCandidateAssetImage(props: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    pack: MoonWitnessAssetRegistryPackId;
    assetId: string;
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
    baseUrl?: string;
    alt: string;
}): import("react").JSX.Element;
export declare const moonWitnessCandidateConsumption: {
    readonly channel: "deprecated-stable-alias";
    readonly registryVersion: "1.3.1";
    readonly packCount: number;
    readonly canonicalAssetCount: 634;
    readonly defaultBaseUrl: string;
    readonly stableByDefault: true;
};
