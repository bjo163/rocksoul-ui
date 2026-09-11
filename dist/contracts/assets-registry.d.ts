import { assets } from "../generated/assets-v1.3";
export declare const moonWitnessAssets: typeof assets;
export declare const ROCKSOUL_ASSETS_REGISTRY: {
    readonly repository: "bjo163/rocksoul-assets";
    readonly ref: "main";
    readonly commit: "fd6a545160312bfe4b3419d846961abbcd7bfabd";
    readonly version: "1.7.0";
    readonly packCount: number;
    readonly canonicalAssetCount: 650;
    readonly deliveryFileCount: 1676;
    readonly coveragePercent: 100;
    readonly canonicalFormat: "svg";
    readonly developerDistribution: readonly ["dist/assets.json", "dist/assets.ts", "dist/assets.css", "dist/sprite.svg"];
};
export type MoonWitnessAssetRegistryPackId = keyof typeof assets.packs;
export type MoonWitnessAssetRegistryFormat = "svg" | "png";
export type MoonWitnessAssetRootMode = "repository" | "moonwitness";
export declare const MOONWITNESS_STABLE_REPOSITORY_BASE: string;
export declare const MOONWITNESS_ACCEPTED_REPOSITORY_BASE: string;
export declare function moonWitnessRegistryAssetPath(pack: MoonWitnessAssetRegistryPackId, assetId: string, options?: {
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
}): string | undefined;
export declare function hasMoonWitnessRegistryAsset(pack: MoonWitnessAssetRegistryPackId, assetId: string, options?: {
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
}): boolean;
export declare function resolveMoonWitnessRegistryAssetUrl(pack: MoonWitnessAssetRegistryPackId, assetId: string, options?: {
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
    baseUrl?: string;
    rootMode?: MoonWitnessAssetRootMode;
}): string | undefined;
