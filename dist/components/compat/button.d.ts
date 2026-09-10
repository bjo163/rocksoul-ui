import type { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
/** @deprecated Use components/ui/button for new code. Kept for legacy product variants and loading props. */
declare const buttonVariants: (props?: ({
    variant?: "danger" | "ghost" | "primary" | "secondary" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leading?: ReactNode;
    trailing?: ReactNode;
}
export declare function Button({ className, variant, size, loading, disabled, leading, trailing, children, type, ...props }: ButtonProps): import("react").JSX.Element;
export { buttonVariants };
