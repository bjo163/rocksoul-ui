declare const categories: {
    readonly Core: readonly ["product-icons", "dashboard", "data-viz", "hero-backgrounds", "state-illustrations", "motion", "sfx", "graph-vector", "badge-status", "source-file"];
    readonly Investigation: readonly ["geospatial", "evidence-media", "correlation-semantics", "privacy-redaction", "evidence-integrity", "export-seal", "jurisdiction-locale"];
    readonly Workflow: readonly ["kanban-workflow", "calendar-temporal", "chat-collaboration", "ai-workspace", "authorization-security", "data-grid", "form-controls", "command-keyboard", "community-participation"];
    readonly Identity: readonly ["persona-avatar", "rocksoul-character", "theme-accessibility", "cursor-interaction"];
    readonly Media: readonly ["social-campaign", "platform-delivery", "onboarding", "document-report", "notification", "editorial", "cinematic-hero", "texture-material", "device-mockup"];
    readonly System: readonly ["architecture-diagram", "runtime-motion", "developer-distribution"];
};
type Category = "All" | keyof typeof categories;
export declare function AssetExplorer({ baseUrl, initialCategory, limit, compact, }: {
    baseUrl?: string;
    initialCategory?: Category;
    limit?: number;
    compact?: boolean;
}): import("react").JSX.Element;
export {};
