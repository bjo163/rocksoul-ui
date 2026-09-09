export declare const ROCKSOUL_ASSETS_SYNC: {
    readonly repository: "bjo163/rocksoul-assets";
    readonly ref: "main";
    readonly commit: "5b035d0d83612f847ccd8b35f2c1b04022500110";
    readonly acceptedMainCommit: "9457360699375a7a036aa7322e9b5eb007bc2a0c";
    readonly manifestSchemaVersion: 3;
    readonly applicationVersion: "v2";
    readonly syncedAt: "2026-09-08";
    readonly assetRelease: "1.3.1";
    readonly assetReleaseStatus: "released";
    readonly repositoryAcceptance: "passed";
    readonly livePenpotVerification: "manual-follow-up";
    readonly assetPackIndex: "moonwitness/asset-packs.json";
    readonly developerDistribution: readonly ["dist/assets.json", "dist/assets.ts", "dist/assets.css", "dist/sprite.svg"];
};
export declare const moonWitnessBrandContract: {
    readonly brand: "MoonWitness";
    readonly ecosystem: "MoonWitness × Rocksoul";
    readonly tagline: "Truth leaves a trace.";
    readonly sourceType: "editable-vector";
};
export declare const v2NavigationItems: readonly [{
    readonly id: "dashboard";
    readonly label: "Dashboard";
    readonly path: "/";
    readonly kind: "system";
    readonly permission: "authenticated";
}, {
    readonly id: "cases";
    readonly label: "Cases";
    readonly path: "/cases";
    readonly kind: "resource";
    readonly resource: "case";
    readonly permission: "case:read";
}, {
    readonly id: "kanban";
    readonly label: "Kanban";
    readonly path: "/work/kanban";
    readonly kind: "workspace";
    readonly permission: "review:read";
}, {
    readonly id: "calendar";
    readonly label: "Calendar";
    readonly path: "/work/calendar";
    readonly kind: "workspace";
    readonly permission: "review:read";
}, {
    readonly id: "chat";
    readonly label: "Chat";
    readonly path: "/chat";
    readonly kind: "workspace";
    readonly permission: "community:read";
}, {
    readonly id: "ai";
    readonly label: "AI Workspace";
    readonly path: "/ai";
    readonly kind: "workspace";
    readonly permission: "ai:use";
}, {
    readonly id: "resources";
    readonly label: "Resources";
    readonly path: "/resources";
    readonly kind: "system";
    readonly permission: "resource:read";
}, {
    readonly id: "profile";
    readonly label: "Profile";
    readonly path: "/profile";
    readonly kind: "account";
    readonly permission: "authenticated";
}, {
    readonly id: "settings";
    readonly label: "Settings";
    readonly path: "/settings";
    readonly kind: "account";
    readonly permission: "authenticated";
}];
export declare const v2ResourceDescriptors: readonly [{
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
export declare const v2ScreenContract: readonly [{
    readonly id: "17";
    readonly slug: "dashboard";
    readonly activeNav: "Dashboard";
}, {
    readonly id: "18";
    readonly slug: "command-palette";
    readonly activeNav: "Dashboard";
    readonly overlay: true;
}, {
    readonly id: "19";
    readonly slug: "notifications";
    readonly activeNav: "Dashboard";
    readonly overlay: true;
}, {
    readonly id: "20";
    readonly slug: "kanban";
    readonly activeNav: "Kanban";
}, {
    readonly id: "21";
    readonly slug: "calendar";
    readonly activeNav: "Calendar";
}, {
    readonly id: "22";
    readonly slug: "chat";
    readonly activeNav: "Chat";
}, {
    readonly id: "23";
    readonly slug: "ai-workspace";
    readonly activeNav: "AI Workspace";
}, {
    readonly id: "24";
    readonly slug: "resources";
    readonly activeNav: "Resources";
}, {
    readonly id: "25";
    readonly slug: "profile-settings";
    readonly activeNav: "Settings";
}, {
    readonly id: "26";
    readonly slug: "authorization";
    readonly activeNav: "Settings";
}, {
    readonly id: "27";
    readonly slug: "system-states";
    readonly activeNav: "Dashboard";
}];
export declare const v2ShellContract: {
    readonly desktop: {
        readonly width: 1440;
        readonly sidebar: 220;
        readonly behavior: "persistent";
    };
    readonly tablet: {
        readonly width: 768;
        readonly sidebar: 72;
        readonly behavior: "icon-rail";
    };
    readonly mobile: {
        readonly width: 390;
        readonly sidebar: 0;
        readonly behavior: "drawer";
    };
    readonly backendStates: readonly ["online", "degraded", "offline"];
    readonly themeStates: readonly ["light", "dark", "system"];
    readonly sidebarStates: readonly ["expanded", "compact", "drawer-open", "drawer-closed"];
    readonly notificationStates: readonly ["empty", "unread", "open"];
    readonly userMenuStates: readonly ["closed", "open"];
    readonly accessibility: {
        readonly skipLink: true;
        readonly landmarks: readonly ["navigation", "banner", "main"];
        readonly keyboardCommandPalette: true;
        readonly focusVisible: true;
        readonly drawerFocusTrap: true;
    };
};
export declare const v2SystemStateContract: {
    readonly loading: readonly ["skeleton-or-progress", "accessible-busy-state", "reduced-motion-safe"];
    readonly empty: readonly ["headline", "supporting-copy", "recovery-or-create-action"];
    readonly error: readonly ["error-summary", "system-context", "retry-or-back-action", "trace-id-when-available"];
    readonly offline: readonly ["backend-status", "last-known-state", "retry"];
    readonly forbidden: readonly ["required-permission", "current-role", "request-access-when-available"];
};
