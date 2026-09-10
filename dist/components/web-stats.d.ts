export interface LiveProbe {
    reachable: boolean;
    target_url: string;
    response_time_ms: number;
    http_status: number;
    edge_datacenter: string;
    protocol?: string;
    tls_version?: string;
}
export interface TrafficOverview {
    pageviews_24h: number;
    unique_visitors_24h: number;
    realtime_active_visitors_5m: number;
    avg_pages_per_session: number;
    bounce_rate_percent: number;
    visitor_types?: {
        new_visitors: number;
        returning_visitors: number;
    };
}
export interface HourlyPoint {
    timestamp: string;
    hour: string;
    pageviews: number;
    visitors: number;
}
export interface WebStatsData {
    type: string;
    domain: string;
    period: string;
    updated_at: string;
    status: "operational" | "degraded";
    live_probe: LiveProbe;
    traffic_overview: TrafficOverview;
    charts?: {
        hourly_24h: HourlyPoint[];
    };
    top_pages?: Array<{
        path: string;
        views: number;
        percentage: number;
    }>;
    client_environment?: {
        devices: Array<{
            device: string;
            count: number;
            percentage: number;
        }>;
        top_browsers: Array<{
            browser: string;
            count: number;
            percentage: number;
        }>;
        operating_systems: Array<{
            os: string;
            count: number;
            percentage: number;
        }>;
    };
}
export interface WebStatsProps {
    domain?: string;
    apiHost?: string;
    autoTrack?: boolean;
    className?: string;
    variant?: "detailed" | "compact";
}
export declare function WebStats({ domain, apiHost, autoTrack, className, variant, }: WebStatsProps): import("react").JSX.Element | null;
