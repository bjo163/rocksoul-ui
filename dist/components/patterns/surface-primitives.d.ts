import { type ReactNode } from "react";
import { Button as PrimitiveButton } from "../ui/button";
import { Input as PrimitiveInput } from "../ui/input";
import { Textarea as PrimitiveTextarea } from "../ui/textarea";
export declare function SurfaceSelect({ label, options, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    options: Array<{
        label: string;
        value: string;
    }>;
}): import("react").JSX.Element;
export declare function SurfaceButton({ variant, ...props }: Omit<React.ComponentProps<typeof PrimitiveButton>, "variant"> & {
    variant?: "default" | "primary" | "secondary" | "danger" | "destructive" | "outline" | "ghost" | "link";
}): import("react").JSX.Element;
export declare function SurfaceInput({ label, variant: _variant, size: _size, ...props }: Omit<React.ComponentProps<typeof PrimitiveInput>, "size"> & {
    label?: string;
    variant?: string;
    size?: "sm" | "md" | "lg";
}): import("react").JSX.Element;
export declare function SurfaceTextarea({ label, characterCount: _characterCount, ...props }: React.ComponentProps<typeof PrimitiveTextarea> & {
    label?: string;
    characterCount?: boolean;
}): import("react").JSX.Element;
export declare function SurfaceAvatar({ label, size }: {
    label?: string;
    size?: "xs" | "sm" | "md" | "lg";
}): import("react").JSX.Element;
export declare function SurfaceDialog({ open, title, children, onClose, size, actions }: {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    size?: "sm" | "md" | "lg";
    actions?: ReactNode;
}): import("react").JSX.Element;
export declare function SurfaceDrawer({ open, title, children, onClose, position, footer }: {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    position?: "left" | "right";
    footer?: ReactNode;
}): import("react").JSX.Element;
