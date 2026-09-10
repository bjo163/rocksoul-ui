import { type ReactNode } from "react";
export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
/** @deprecated Compose Tabs, TabsList, TabsTrigger and TabsContent from components/ui/tabs. */
export declare function Tabs({ items, variant }: {
    items: TabItem[];
    variant?: "underline" | "archive";
}): import("react").JSX.Element;
