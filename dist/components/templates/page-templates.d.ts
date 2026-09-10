import * as React from "react";
export type AuthLayoutProps = {
    children: React.ReactNode;
    logo?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
};
declare function AuthLayout({ children, logo, title, description, footer, className }: AuthLayoutProps): React.JSX.Element;
export type PageTemplateProps = {
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    header?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    dataSlot?: string;
};
declare function TemplateFrame({ title, description, actions, header, children, footer, className, contentClassName, dataSlot }: PageTemplateProps): React.JSX.Element;
export declare function ListPage(props: PageTemplateProps): React.JSX.Element;
export declare function DetailPage(props: PageTemplateProps): React.JSX.Element;
export declare function DashboardPage(props: PageTemplateProps): React.JSX.Element;
export type SplitViewPageProps = Omit<PageTemplateProps, "children"> & {
    primary: React.ReactNode;
    secondary: React.ReactNode;
    secondaryClassName?: string;
};
export { AuthLayout, TemplateFrame };
