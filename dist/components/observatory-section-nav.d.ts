export interface ObservatorySectionNavItem {
    id: string;
    label: string;
}
export declare function ObservatorySectionNav({ items, label, offset, className, }: {
    items: ObservatorySectionNavItem[];
    label?: string;
    offset?: number;
    className?: string;
}): import("react").JSX.Element;
