export interface CinematicWebHeroAssetSet {
    desktop: string;
    mobile: string;
    moon: string;
    grid: string;
    grain: string;
    scanlines: string;
    archive: readonly string[];
}
export declare const ROCKSOUL_CINEMATIC_WEB_HERO_SYNC: {
    readonly repository: "bjo163/rocksoul-assets";
    readonly ref: "main";
    readonly commit: "e978695a3dd92d952faaa0ff356980e9ad6438a2";
    readonly manifest: "moonwitness/cinematic-web-hero/manifest.json";
    readonly profileVersion: "1.0.0";
    readonly sourceRelease: "1.3.1";
};
export declare const MOONWITNESS_CINEMATIC_WEB_HERO_BASE: string;
export declare const cinematicWebHeroAssets: CinematicWebHeroAssetSet;
export declare const cinematicWebHeroContract: {
    readonly composition: "composite-photographic-master";
    readonly desktopAspectRatio: "16:9";
    readonly mobileAspectRatio: "3:4";
    readonly headlineLines: readonly ["WHERE MYTH", "FADES TO LEGEND"];
    readonly semanticUi: "live-html-svg";
    readonly reducedMotion: "static-by-default";
    readonly evidenceGraphTextEquivalent: true;
    readonly correlationImpliesCausation: false;
};
