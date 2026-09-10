import type { HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "contested" | "disputed" | "info" | "neutral" | "partial" | "prohibited" | "restricted" | "supported" | "unresolved" | "verified" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
export declare function StatusBadge({ className, variant, size, ...props }: BadgeProps): import("react").JSX.Element;
/** @deprecated Use StatusBadge for domain status or components/ui/badge for a generic badge. */
export declare const Badge: typeof StatusBadge;
export { badgeVariants };
