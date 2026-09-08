export declare const mw0042: {
    caseId: string;
    eyebrow: string;
    title: string;
    summary: string;
    status: "unresolved";
    updatedAt: string;
    tags: string[];
    records: ({
        domain: "STORY";
        recordId: string;
        title: string;
        description: string;
        source: string;
        sourceRepo: string;
        canonicalStatus: "canonical";
        verification: string;
        status: "supported";
    } | {
        domain: "EVENT";
        recordId: string;
        title: string;
        description: string;
        source: string;
        sourceRepo: string;
        canonicalStatus: "canonical";
        verification: string;
        status: "supported";
    } | {
        domain: "PERSON";
        recordId: string;
        title: string;
        description: string;
        source: string;
        sourceRepo: string;
        canonicalStatus: "reference";
        verification: string;
        status: "partial";
    } | {
        domain: "RGBL";
        recordId: string;
        title: string;
        description: string;
        source: string;
        sourceRepo: string;
        canonicalStatus: "canonical";
        verification: string;
        status: "supported";
    })[];
    recordDetails: {
        STORY: {
            sourceType: string;
            locator: string;
            independent: boolean;
        };
        EVENT: {
            temporal: {
                start: string;
                end: string;
                timezone: string;
            };
            sourceType: string;
            locator: string;
            independent: boolean;
        };
        PERSON: {
            matchDimensions: {
                role: boolean;
                movement: boolean;
                identity: boolean;
            };
            sourceType: string;
            locator: string;
            independent: boolean;
        };
        RGBL: {
            channels: {
                red: string;
                green: string;
                blue: string;
                light: string;
            };
            sourceType: string;
            locator: string;
            independent: boolean;
        };
    };
    correlation: {
        score: number;
        confidence: string;
        explanation: string;
        dimensions: ({
            label: string;
            value: number;
            tone?: undefined;
        } | {
            label: string;
            value: number;
            tone: "warning";
        })[];
    };
    legal: {
        status: "disputed";
        jurisdiction: string;
        review: string;
        prompt: string;
        basis: string;
        instruments: {
            id: string;
            title: string;
            type: string;
            status: string;
            locator: string;
        }[];
        conclusion: string;
    };
    community: {
        following: number;
        saved: number;
        discussions: number;
        submission: {
            id: string;
            state: "needs-context";
            title: string;
            body: string;
        };
    };
    repositories: ({
        repo: string;
        status: "online";
    } | {
        repo: string;
        status: "degraded";
    })[];
};
