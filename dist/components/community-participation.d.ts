import type { ImgHTMLAttributes } from "react";
export declare const communityParticipationAssetIds: readonly ["source-linked", "discussion-thread", "proposal-review", "identity-bridge", "saved-case", "notification", "moderation-history", "attributed-reply"];
export type CommunityParticipationAssetId = typeof communityParticipationAssetIds[number];
export declare function MoonWitnessCommunityParticipationAsset({ asset, alt, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    asset: CommunityParticipationAssetId;
    alt: string;
}): import("react").JSX.Element;
export declare function CommunitySourceLocatorLink({ source, className, }: {
    source?: string;
    className?: string;
}): import("react").JSX.Element;
