import type { ImgHTMLAttributes } from "react";
import type { AppCommandAction, AppResource } from "./application-shell";
import { type PlatformAdminRoleId, type PlatformAdminScreenId, type PlatformRuntimeState } from "../contracts/platform-admin";
export declare const platformAdminResources: AppResource[];
export declare const platformAdminCommandActions: AppCommandAction[];
export declare const platformAdminPermissions: ("audit:read" | "authenticated" | "authorization:read" | "iam:read" | "moderation:read" | "service:read" | "settings:read")[];
export declare function PlatformRoleMatrix({ currentRole, }: {
    currentRole?: PlatformAdminRoleId;
}): import("react").JSX.Element;
export declare function PlatformBackendBoundary({ state, detail, }: {
    state: PlatformRuntimeState;
    detail?: string;
}): import("react").JSX.Element;
export type PlatformServiceRuntime = {
    id: string;
    state: PlatformRuntimeState;
    detail?: string;
    traceId?: string;
};
export declare function PlatformServiceRegistry({ runtime, }: {
    runtime?: PlatformServiceRuntime[];
}): import("react").JSX.Element;
export declare function PlatformAdminVisual({ screen, alt, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    screen: PlatformAdminScreenId;
    alt: string;
}): import("react").JSX.Element;
