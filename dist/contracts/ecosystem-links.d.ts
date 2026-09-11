export declare const ROCKSOUL_GITHUB_WEB_ORIGIN: "https://github.com";
export declare const ROCKSOUL_GITHUB_RAW_ORIGIN: "https://raw.githubusercontent.com";
export declare const rocksoulEcosystemRepositories: {
    readonly assets: "rocksoul-assets";
    readonly ui: "rocksoul-ui";
    readonly web: "rocksoul-web";
    readonly community: "rocksoul-community";
    readonly platform: "rocksoul-platform";
    readonly story: "rocksoul-mftl";
    readonly event: "rocksoul-legend";
    readonly person: "rocksoul-superhero";
    readonly text: "rocksoul-rgbl";
    readonly law: "rocksoul-aws";
    readonly perspective: "rocksoul-jizz";
    readonly relationship: "rocksoul-correlation";
};
export type RocksoulRepositoryName = typeof rocksoulEcosystemRepositories[keyof typeof rocksoulEcosystemRepositories];
export declare const ROCKSOUL_ECOSYSTEM_OWNER: string;
export declare function resolveRocksoulRepositoryUrl(repository: RocksoulRepositoryName, options?: {
    ref?: string;
    path?: string;
    raw?: boolean;
}): string;
export declare function resolvePinnedRocksoulAssetSourceUrl(path: string): string;
export interface CommunitySourceLocator {
    source: string;
    kind: "external" | "case" | "community" | "opaque";
    href?: string;
}
export declare function resolveCommunitySourceLocator(source?: string): CommunitySourceLocator | null;
