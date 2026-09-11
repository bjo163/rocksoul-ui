import * as React from "react";
export type TimelineItem = {
    id: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    timestamp?: React.ReactNode;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    status?: "default" | "active" | "complete" | "error";
};
export type TimelineProps = React.ComponentProps<"ol"> & {
    items: TimelineItem[];
};
declare function Timeline({ items, className, ...props }: TimelineProps): React.JSX.Element;
export { Timeline };
