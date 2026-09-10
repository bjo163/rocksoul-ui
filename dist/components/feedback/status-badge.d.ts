import type { HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const statusBadgeVariants: (props?: ({
    variant?: "contested" | "disputed" | "info" | "neutral" | "partial" | "prohibited" | "restricted" | "supported" | "unresolved" | "verified" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusBadgeVariants> {
}
/** @deprecated Use StatusBadgeProps for domain status components. */
export type BadgeProps = StatusBadgeProps;
export declare function StatusBadge({ className, variant, size, ...props }: StatusBadgeProps): import("react").JSX.Element;
/** @deprecated Use StatusBadge for domain states. */
export declare const Badge: typeof StatusBadge;
export { statusBadgeVariants };
