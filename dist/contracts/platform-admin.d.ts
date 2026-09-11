export type PlatformAdminRoleId = "admin" | "moderator" | "researcher";
export type PlatformCapabilityAccess = "allow" | "limited" | "read" | "deny";
export type PlatformRuntimeState = "connected" | "degraded" | "offline" | "unconfigured";
export declare const platformAdminContract: {
    readonly schemaVersion: 1;
    readonly surface: "platform";
    readonly owner: "rocksoul-platform";
    readonly visualSource: "rocksoul-assets";
    readonly rule: "Platform owns product administration and IAM. Research workspace actions remain outside this surface.";
    readonly navigation: readonly [{
        readonly id: "dashboard";
        readonly label: "Dashboard";
        readonly path: "/";
        readonly group: "System";
        readonly permission: "authenticated";
        readonly screen: "28";
    }, {
        readonly id: "users";
        readonly label: "Users & Roles";
        readonly path: "/users";
        readonly group: "Resource";
        readonly permission: "iam:read";
        readonly screen: "29";
    }, {
        readonly id: "authorization";
        readonly label: "Authorization";
        readonly path: "/authorization";
        readonly group: "Resource";
        readonly permission: "authorization:read";
        readonly screen: "30";
    }, {
        readonly id: "moderation";
        readonly label: "Moderation";
        readonly path: "/moderation";
        readonly group: "Resource";
        readonly permission: "moderation:read";
        readonly screen: "31";
    }, {
        readonly id: "service-status";
        readonly label: "Service Status";
        readonly path: "/service-status";
        readonly group: "System";
        readonly permission: "service:read";
        readonly screen: "32";
    }, {
        readonly id: "audit";
        readonly label: "Audit Log";
        readonly path: "/audit";
        readonly group: "System";
        readonly permission: "audit:read";
        readonly screen: "33";
    }, {
        readonly id: "settings";
        readonly label: "Settings";
        readonly path: "/settings";
        readonly group: "Account";
        readonly permission: "settings:read";
        readonly screen: "34";
    }, {
        readonly id: "system-states";
        readonly label: "System States";
        readonly path: "/system-states";
        readonly group: "System";
        readonly permission: "service:read";
        readonly screen: "35";
    }];
    readonly commands: readonly [{
        readonly id: "invite-user";
        readonly label: "Invite a platform user";
        readonly path: "/users";
        readonly shortcut: "U";
        readonly permission: "iam:write";
    }, {
        readonly id: "review-moderation";
        readonly label: "Review moderation queue";
        readonly path: "/moderation";
        readonly shortcut: "M";
        readonly permission: "moderation:read";
    }, {
        readonly id: "inspect-service";
        readonly label: "Inspect service status";
        readonly path: "/service-status";
        readonly shortcut: "H";
        readonly permission: "service:read";
    }];
    readonly roles: readonly [{
        readonly id: "admin";
        readonly label: "Admin";
        readonly description: "Platform-wide administration and configuration.";
    }, {
        readonly id: "moderator";
        readonly label: "Moderator";
        readonly description: "Moderation authority without system configuration.";
    }, {
        readonly id: "researcher";
        readonly label: "Researcher";
        readonly description: "Authenticated consumer of Platform-owned authorization context.";
    }];
    readonly capabilities: readonly [{
        readonly id: "iam.users.read";
        readonly label: "Inspect platform users";
        readonly admin: "allow";
        readonly moderator: "allow";
        readonly researcher: "read";
    }, {
        readonly id: "iam.users.write";
        readonly label: "Manage user state";
        readonly admin: "allow";
        readonly moderator: "limited";
        readonly researcher: "deny";
    }, {
        readonly id: "moderation.write";
        readonly label: "Moderate submissions";
        readonly admin: "allow";
        readonly moderator: "allow";
        readonly researcher: "deny";
    }, {
        readonly id: "settings.write";
        readonly label: "Change system configuration";
        readonly admin: "allow";
        readonly moderator: "deny";
        readonly researcher: "deny";
    }, {
        readonly id: "research.publish";
        readonly label: "Publish research conclusion";
        readonly admin: "deny";
        readonly moderator: "deny";
        readonly researcher: "deny";
    }];
    readonly runtime: {
        readonly source: "/api/platform/bootstrap";
        readonly mutationMode: "server-authoritative";
        readonly failClosed: true;
        readonly requiredResources: readonly ["organization", "users", "roles", "moderation", "settings", "audit", "services"];
        readonly unconfiguredState: "read-only";
    };
    readonly serviceRegistry: readonly [{
        readonly id: "assets";
        readonly label: "Visual source";
        readonly repository: "rocksoul-assets";
        readonly kind: "design";
    }, {
        readonly id: "ui";
        readonly label: "UI implementation";
        readonly repository: "rocksoul-ui";
        readonly kind: "ui";
    }, {
        readonly id: "platform";
        readonly label: "Admin application";
        readonly repository: "rocksoul-platform";
        readonly kind: "application";
    }, {
        readonly id: "iam-api";
        readonly label: "IAM data plane";
        readonly repository: null;
        readonly kind: "backend";
    }];
    readonly systemStates: readonly ["loading", "empty", "error", "offline", "forbidden", "unconfigured"];
};
export declare const platformAdminVisuals: {
    readonly dashboard: "28-platform-dashboard.svg";
    readonly users: "29-platform-users.svg";
    readonly authorization: "30-platform-authorization.svg";
    readonly moderation: "31-platform-moderation.svg";
    readonly "service-status": "32-platform-service-status.svg";
    readonly audit: "33-platform-audit.svg";
    readonly settings: "34-platform-settings.svg";
    readonly "system-states": "35-platform-system-states.svg";
};
export type PlatformAdminScreenId = keyof typeof platformAdminVisuals;
