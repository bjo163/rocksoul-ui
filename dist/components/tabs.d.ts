import { type ReactNode } from "react";
export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
export declare function Tabs({ items, variant, }: {
    items: TabItem[];
    variant?: "underline" | "archive";
}): import("react").JSX.Element;
