import { type ReactNode } from "react";
export type BackendState = "online" | "degraded" | "offline";
export type ResourceGroup = "System" | "Resource" | "Workspace" | "Account";
export type SurfacePersonality = "operator" | "editorial";
export interface AppResource {
    id: string;
    label: string;
    href: string;
    group: ResourceGroup;
    description: string;
    shortcut?: string;
    resource?: string;
    requiredPermission: string;
}
export interface AppCommandAction {
    label: string;
    href: string;
    shortcut?: string;
}
export declare const applicationResources: AppResource[];
export declare const resourceDescriptors: readonly [{
    readonly resource: "case";
    readonly label: "STORY / Cases";
    readonly path: "/cases";
    readonly repo: "rocksoul-mftl";
}, {
    readonly resource: "event";
    readonly label: "EVENT / Events";
    readonly path: "/events";
    readonly repo: "rocksoul-legend";
}, {
    readonly resource: "person";
    readonly label: "PERSON / People";
    readonly path: "/people";
    readonly repo: "rocksoul-superhero";
}, {
    readonly resource: "rgbl";
    readonly label: "TEXT / RGBL";
    readonly path: "/sources";
    readonly repo: "rocksoul-rgbl";
}, {
    readonly resource: "aws";
    readonly label: "LAW / AWS";
    readonly path: "/aws";
    readonly repo: "rocksoul-aws";
}, {
    readonly resource: "perspective";
    readonly label: "PERSPECTIVE / Perspectives";
    readonly path: "/perspectives";
    readonly repo: "rocksoul-jizz";
}, {
    readonly resource: "correlation";
    readonly label: "RELATIONSHIP / Correlation";
    readonly path: "/correlation";
    readonly repo: "rocksoul-correlation";
}];
export declare const defaultApplicationPermissions: readonly ["authenticated", "case:read", "review:read", "community:read", "ai:use", "resource:read"];
export declare function Breadcrumbs({ items }: {
    items: Array<{
        label: string;
        href?: string;
    }>;
}): import("react").JSX.Element;
export declare function BackendStatus({ state, label }: {
    state: BackendState;
    label?: string;
}): import("react").JSX.Element;
export declare function AutoMenu({ resources, activeId, compact, permissions, onNavigate, }: {
    resources?: AppResource[];
    activeId?: string;
    compact?: boolean;
    permissions?: readonly string[];
    onNavigate?: () => void;
}): import("react").JSX.Element;
export interface AppNotification {
    id: string;
    title: string;
    body: string;
    state: "unread" | "read";
    variant: "case-update" | "reply" | "review" | "system";
}
export declare function NotificationsPanel({ open, onClose, notifications, onMarkAllRead, }: {
    open: boolean;
    onClose: () => void;
    notifications: AppNotification[];
    onMarkAllRead?: () => void | Promise<void>;
}): import("react").JSX.Element;
export declare function UserMenu({ name, role }: {
    name: string;
    role: string;
}): import("react").JSX.Element;
export declare function CommandPalette({ open, onClose, resources, permissions, quickActions, }: {
    open: boolean;
    onClose: () => void;
    resources?: AppResource[];
    permissions?: readonly string[];
    quickActions?: AppCommandAction[];
}): import("react").JSX.Element;
export declare function AppTopbar({ breadcrumbs, backendState, user, unreadCount, onOpenMenu, onOpenCommands, onOpenNotifications, }: {
    breadcrumbs: Array<{
        label: string;
        href?: string;
    }>;
    backendState: BackendState;
    user: {
        name: string;
        role: string;
    };
    unreadCount: number;
    onOpenMenu: () => void;
    onOpenCommands: () => void;
    onOpenNotifications: () => void;
}): import("react").JSX.Element;
export declare function ApplicationShell({ activeResource, breadcrumbs, children, backendState, user, permissions, resources, notifications, commandActions, surfacePersonality, }: {
    activeResource: string;
    breadcrumbs: Array<{
        label: string;
        href?: string;
    }>;
    children: ReactNode;
    backendState?: BackendState;
    user?: {
        name: string;
        role: string;
    };
    permissions?: readonly string[];
    resources?: AppResource[];
    notifications?: AppNotification[];
    commandActions?: AppCommandAction[];
    surfacePersonality?: SurfacePersonality;
}): import("react").JSX.Element;
