import * as React from "react";
export type PageHeaderProps = {
    title: React.ReactNode;
    description?: React.ReactNode;
    eyebrow?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
};
declare function PageHeader({ title, description, eyebrow, breadcrumbs, actions, className }: PageHeaderProps): React.JSX.Element;
export type AppShellProps = {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    contentClassName?: string;
};
/** Generic application frame. Navigation, routing, and data stay with the consumer. */
declare function AppShell({ header, sidebar, children, footer, className, contentClassName }: AppShellProps): React.JSX.Element;
export { AppShell, PageHeader };
