import { type ReactNode } from "react";
export declare function IconButton({ label, children, variant, size, loading, disabled, className, type, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    children: ReactNode;
    variant?: "ghost" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
}): import("react").JSX.Element;
export declare function Tooltip({ label, children, shortcut }: {
    label: string;
    children: ReactNode;
    shortcut?: string;
}): import("react").JSX.Element;
export declare function Dialog({ open, title, children, onClose, size, actions, }: {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    size?: "sm" | "md" | "lg";
    actions?: ReactNode;
}): import("react").JSX.Element;
export declare function Drawer({ open, title, children, onClose, position, footer, }: {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    position?: "left" | "right" | "bottom-mobile";
    footer?: ReactNode;
}): import("react").JSX.Element;
export declare function Avatar({ label, size, src, status, }: {
    label?: string;
    size?: "xs" | "sm" | "md" | "lg";
    src?: string;
    status?: "online" | "away" | "offline";
}): import("react").JSX.Element;
export declare function Divider({ variant }: {
    variant?: "default" | "soft" | "legal-boundary";
}): import("react").JSX.Element;
export declare function Skeleton({ variant }: {
    variant?: "text" | "card" | "table-row" | "graph-node";
}): import("react").JSX.Element;
