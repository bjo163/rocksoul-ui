export type ResearchDomain = "STORY" | "EVENT" | "PERSON" | "TEXT" | "LAW" | "PERSPECTIVE";
export type PublicGraphDomain = ResearchDomain | "RELATIONSHIP";
export type ReferenceNodeKind = "story" | "claim" | "evidence" | "source" | "text" | "event" | "person" | "law" | "case" | "location";
export type CanonicalDomainOwner = {
    label: string;
    repository: string;
    prefix: `${string}:`;
    resource: string;
    nodeKind: ReferenceNodeKind;
    iconAssetId: string;
    idKinds: Readonly<Record<string, ReferenceNodeKind>>;
    defaultKind: ReferenceNodeKind;
};
export declare const canonicalDomainOwners: Record<PublicGraphDomain, CanonicalDomainOwner>;
export declare const researchDomainVisualContract: {
    schemaVersion: number;
    rule: string;
    domains: ({
        domain: string;
        label: string;
        repository: string;
        prefix: string;
        resource: string;
        nodeKind: string;
        iconAssetId: string;
        idKinds: {
            SOURCE: string;
            CLAIM: string;
            EVIDENCE: string;
            CAND: string;
            MYTH: string;
            ENTITY: string;
            EVT?: undefined;
            PLC?: undefined;
            ART?: undefined;
            PER?: undefined;
            SRC?: undefined;
            CLM?: undefined;
            EVD?: undefined;
            REL?: undefined;
        };
        defaultKind: string;
    } | {
        domain: string;
        label: string;
        repository: string;
        prefix: string;
        resource: string;
        nodeKind: string;
        iconAssetId: string;
        idKinds: {
            SOURCE?: undefined;
            CLAIM?: undefined;
            EVIDENCE?: undefined;
            CAND?: undefined;
            MYTH?: undefined;
            ENTITY?: undefined;
            EVT: string;
            PLC: string;
            SRC: string;
            CLM: string;
            EVD: string;
            REL: string;
            ART: string;
            PER?: undefined;
        };
        defaultKind: string;
    } | {
        domain: string;
        label: string;
        repository: string;
        prefix: string;
        resource: string;
        nodeKind: string;
        iconAssetId: string;
        idKinds: {
            SOURCE?: undefined;
            CLAIM?: undefined;
            EVIDENCE?: undefined;
            CAND?: undefined;
            MYTH?: undefined;
            ENTITY?: undefined;
            EVT?: undefined;
            PLC?: undefined;
            ART?: undefined;
            PER: string;
            SRC: string;
            CLM: string;
            EVD: string;
            REL: string;
        };
        defaultKind: string;
    } | {
        domain: string;
        label: string;
        repository: string;
        prefix: string;
        resource: string;
        nodeKind: string;
        iconAssetId: string;
        idKinds: {
            SOURCE?: undefined;
            CLAIM?: undefined;
            EVIDENCE?: undefined;
            CAND?: undefined;
            MYTH?: undefined;
            ENTITY?: undefined;
            EVT?: undefined;
            PLC?: undefined;
            ART?: undefined;
            PER?: undefined;
            SRC?: undefined;
            CLM?: undefined;
            EVD?: undefined;
            REL?: undefined;
        };
        defaultKind: string;
    })[];
    relationshipLayer: {
        domain: string;
        label: string;
        repository: string;
        prefix: string;
        resource: string;
        nodeKind: string;
        iconAssetId: string;
        idKinds: {};
        defaultKind: string;
    };
};
export interface QualifiedReference {
    ref: string;
    domain: PublicGraphDomain;
    repository: string;
    prefix: string;
    id: string;
    idPrefix: string;
    kind: ReferenceNodeKind;
}
export declare function canonicalOwnerFor(domain: PublicGraphDomain): CanonicalDomainOwner;
export declare function isResearchDomain(value: string): value is ResearchDomain;
export declare function parseQualifiedReference(ref: string): QualifiedReference | null;
/** Repository/product aliases retained for compatibility. Prefer semantic TEXT / LAW in new graph contracts. */
export type LegacyRepositoryDomainLabel = "RGBL" | "AWS";
