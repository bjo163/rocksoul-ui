import * as React from "react";
import { Empty } from "../ui/empty";
export type ContentStateProps = React.ComponentProps<typeof Empty> & {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    action?: React.ReactNode;
};
declare function ContentState({ title, description, icon, action, className, ...props }: ContentStateProps): React.JSX.Element;
export type EmptyStateProps = Omit<ContentStateProps, "icon"> & {
    icon?: React.ReactNode;
};
declare function EmptyState(props: EmptyStateProps): React.JSX.Element;
export type ErrorStateProps = Omit<ContentStateProps, "action"> & {
    onRetry?: () => void;
    retryLabel?: string;
    action?: React.ReactNode;
};
declare function ErrorState({ onRetry, retryLabel, action, ...props }: ErrorStateProps): React.JSX.Element;
export type LoadingStateProps = Omit<ContentStateProps, "action" | "icon"> & {
    label?: string;
};
declare function LoadingState({ label, ...props }: LoadingStateProps): React.JSX.Element;
export { ContentState, EmptyState, ErrorState, LoadingState };
