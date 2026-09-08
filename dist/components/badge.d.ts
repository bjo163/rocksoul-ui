import type { HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "contested" | "disputed" | "info" | "neutral" | "partial" | "prohibited" | "restricted" | "supported" | "unresolved" | "verified" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
export declare function Badge({ className, variant, size, ...props }: BadgeProps): import("react").JSX.Element;
export { badgeVariants };
