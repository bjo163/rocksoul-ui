import type { SVGProps } from "react";
/** Canonical RockSoul ecosystem mark. Use this wrapper for new consumers. */
export declare function BrandIcon({ className, title, ...props }: SVGProps<SVGSVGElement> & {
    title?: string;
}): import("react").JSX.Element;
/** Canonical RockSoul wordmark lockup. Kept separate from product feature branding. */
export declare function RockSoulLogo({ compact, subtitle, className }: {
    compact?: boolean;
    subtitle?: string;
    className?: string;
}): import("react").JSX.Element;
