import * as React from "react";
export type AttachmentListItem = {
    id: string;
    name: React.ReactNode;
    description?: React.ReactNode;
    media?: React.ReactNode;
    state?: "idle" | "uploading" | "processing" | "error" | "done";
    actions?: React.ReactNode;
};
export type AttachmentListProps = React.ComponentProps<"div"> & {
    items: AttachmentListItem[];
    orientation?: "horizontal" | "vertical";
};
declare function AttachmentList({ items, orientation, className, ...props }: AttachmentListProps): React.JSX.Element;
export { AttachmentList };
