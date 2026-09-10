export type SemanticPrimitiveId = "graph-node" | "edge-supports" | "edge-contradicts" | "status-verified" | "status-contested" | "evidence-bounds" | "evidence-source" | "privacy-redacted" | "privacy-confidential" | "integrity-hash" | "provenance-chain" | "legal-basis" | "jurisdiction-zone" | "law-node" | "person-node" | "event-node";
export declare const semanticPrimitiveByNodeKind: {
    readonly story: "graph-node";
    readonly claim: "graph-node";
    readonly evidence: "evidence-source";
    readonly source: "evidence-source";
    readonly text: "graph-node";
    readonly event: "event-node";
    readonly person: "person-node";
    readonly law: "law-node";
    readonly case: "graph-node";
    readonly location: "jurisdiction-zone";
};
export declare const productionScreenAssetMap: {
    readonly dashboard: {
        readonly required: readonly ["dashboard", "data-viz", "graph-vector"];
        readonly allowed: readonly ["primitive", "specimen"];
    };
    readonly cases: {
        readonly required: readonly ["evidence-media", "correlation-semantics", "evidence-integrity"];
        readonly allowed: readonly ["primitive", "specimen"];
    };
    readonly platform: {
        readonly required: readonly ["architecture-diagram", "authorization-security", "theme-accessibility"];
        readonly allowed: readonly ["primitive", "specimen"];
    };
    readonly auth: {
        readonly required: readonly ["authorization-security", "theme-accessibility"];
        readonly allowed: readonly ["primitive", "illustration"];
    };
};
export declare function semanticPrimitiveUrl(id: SemanticPrimitiveId, commit?: "ce46a35d904ae3d4f5338c5193e5c78a8ea9ec2f"): string;
