import { type AnchorHTMLAttributes, type ReactNode } from "react";
export interface NavigationLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    href: string;
}
export interface NavigationAdapter {
    navigate?: (href: string) => void;
    renderLink?: (props: NavigationLinkProps) => ReactNode;
}
export declare function NavigationProvider({ adapter, children }: {
    adapter?: NavigationAdapter;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function NavigationLink({ href, onClick, target, children, ...props }: NavigationLinkProps): import("react").JSX.Element;
