import type { SVGProps } from "react";
export declare const moonWitnessBrandAssets: {
    readonly mark: "brand/logo-mark.svg";
    readonly horizontal: "brand/logo-horizontal.svg";
    readonly stacked: "brand/logo-stacked.svg";
    readonly wordmark: "brand/wordmark.svg";
    readonly monochrome: "brand/logo-monochrome.svg";
    readonly ecosystemLockup: "brand/rocksoul-lockup.svg";
    readonly favicon: "brand/favicon.svg";
    readonly appleTouch: "brand/apple-touch-icon.svg";
    readonly maskable: "brand/app-icon-maskable.svg";
    readonly appIcon: "brand/app-icon.svg";
    readonly socialAvatar: "brand/social-avatar.svg";
    readonly ogCard: "brand/og-card.svg";
    readonly safariPinned: "brand/safari-pinned-tab.svg";
    readonly webmanifest: "brand/site.webmanifest";
    readonly deliveryManifest: "brand/generated/manifest.json";
    readonly favicon16: "brand/generated/favicon-16.png";
    readonly favicon32: "brand/generated/favicon-32.png";
    readonly favicon48: "brand/generated/favicon-48.png";
    readonly faviconIco: "brand/generated/favicon.ico";
    readonly appleTouch180: "brand/generated/apple-touch-icon-180.png";
    readonly appIcon192: "brand/generated/app-icon-192.png";
    readonly appIcon512: "brand/generated/app-icon-512.png";
    readonly appIconMaskable192: "brand/generated/app-icon-maskable-192.png";
    readonly appIconMaskable512: "brand/generated/app-icon-maskable-512.png";
    readonly socialAvatar512: "brand/generated/social-avatar-512.png";
    readonly ogCard1200x630: "brand/generated/og-card-1200x630.png";
};
export declare function MoonWitnessMark({ className, title, ...props }: SVGProps<SVGSVGElement> & {
    title?: string;
}): import("react").JSX.Element;
export declare function MoonWitnessBrand({ compact, ecosystem, subtitle, className, }: {
    compact?: boolean;
    ecosystem?: boolean;
    subtitle?: string;
    className?: string;
}): import("react").JSX.Element;
