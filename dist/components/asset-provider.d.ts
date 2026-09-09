import { type ImgHTMLAttributes, type ReactNode } from "react";
import { type MoonWitnessAssetPackId, type MoonWitnessSfxId } from "../contracts/asset-packs";
import { type MoonWitnessAssetRegistryFormat, type MoonWitnessAssetRegistryPackId, type MoonWitnessAssetRootMode } from "../contracts/assets-registry";
export declare function MoonWitnessAssetProvider({ baseUrl, children, }: {
    baseUrl?: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useMoonWitnessAssetBaseUrl(): string;
export declare function resolveMoonWitnessAssetUrl(baseUrl: string, pack: MoonWitnessAssetPackId, file: string): string;
export declare function MoonWitnessAssetImage({ pack, file, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & {
    pack: MoonWitnessAssetPackId;
    file: string;
    alt: string;
}): import("react").JSX.Element;
export declare function MoonWitnessRegistryAssetImage({ pack, assetId, format, size, baseUrl, rootMode, alt, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    pack: MoonWitnessAssetRegistryPackId;
    assetId: string;
    format?: MoonWitnessAssetRegistryFormat;
    size?: string;
    baseUrl?: string;
    rootMode?: MoonWitnessAssetRootMode;
    alt: string;
}): import("react").JSX.Element | null;
export declare function MoonWitnessResilientImage({ src, fallbackSrc, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    fallbackSrc?: string;
    alt: string;
}): import("react").JSX.Element;
export declare function MoonWitnessStatusAsset({ status, label, className, }: {
    status: "supported" | "verified" | "partial" | "unresolved" | "blocked" | "disputed" | "degraded" | "offline" | "needs-context" | "source-linked" | "legal-review" | "archived";
    label?: string;
    className?: string;
}): import("react").JSX.Element;
export declare function MoonWitnessPersonMark({ alt, className, }: {
    alt?: string;
    className?: string;
}): import("react").JSX.Element;
export declare function MoonWitnessPersonaAvatar({ persona, alt, className, }: {
    persona: "rocksoul" | "researcher" | "analyst" | "moderator" | "admin" | "community-member" | "anonymous-source" | "protected-witness" | "ai-system";
    alt: string;
    className?: string;
}): import("react").JSX.Element;
export declare function useMoonWitnessSfx({ enabled, volume, format, }?: {
    enabled?: boolean;
    volume?: number;
    format?: "ogg" | "wav";
}): (id: MoonWitnessSfxId) => void;
export declare const moonWitnessAssetConsumption: {
    readonly localMirrorBase: "/assets";
    readonly registryRepositoryBase: string;
    readonly packCount: number;
    readonly preferSvgInProductUi: true;
    readonly rasterIsDerivative: true;
    readonly runtimeMotionFormats: readonly ["svg", "apng", "webm", "lottie"];
    readonly sfxOptInOnly: true;
};
