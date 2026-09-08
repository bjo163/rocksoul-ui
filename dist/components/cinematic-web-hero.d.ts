import type { ReactNode } from "react";
import { type CinematicWebHeroAssetSet } from "../contracts/cinematic-web-hero";
export interface CinematicWebHeroEvidenceItem {
    id: "STORY" | "EVENT" | "PERSON" | "RGBL";
    marker: string;
}
export interface CinematicWebHeroArchiveItem {
    label: string;
    code: string;
    src: string;
}
export interface CinematicWebHeroProps {
    assets?: CinematicWebHeroAssetSet;
    eyebrow?: ReactNode;
    title?: readonly [string, string];
    intro?: ReactNode;
    action?: ReactNode;
    caseIndex?: ReactNode;
    evidence?: readonly CinematicWebHeroEvidenceItem[];
    archive?: readonly CinematicWebHeroArchiveItem[];
    coordinates?: readonly [string, string];
    witnessCaption?: ReactNode;
    footerCenter?: ReactNode;
    footerRight?: ReactNode;
    footerMark?: ReactNode;
    id?: string;
    archiveId?: string;
    className?: string;
}
export declare function CinematicWebHero({ assets, eyebrow, title, intro, action, caseIndex, evidence, archive, coordinates, witnessCaption, footerCenter, footerRight, footerMark, id, archiveId, className, }: CinematicWebHeroProps): import("react").JSX.Element;
