import { useEffect, useState, useMemo } from "react"
import { cn } from "../lib/cn"

export interface LiveProbe {
  reachable: boolean
  target_url: string
  response_time_ms: number
  http_status: number
  edge_datacenter: string
  protocol?: string
  tls_version?: string
}

export interface TrafficOverview {
  pageviews_24h: number
  unique_visitors_24h: number
  realtime_active_visitors_5m: number
  avg_pages_per_session: number
  bounce_rate_percent: number
  visitor_types?: {
    new_visitors: number
    returning_visitors: number
  }
}

export interface HourlyPoint {
  timestamp: string
  hour: string
  pageviews: number
  visitors: number
}

export interface WebStatsData {
  type: string
  domain: string
  period: string
  updated_at: string
  status: "operational" | "degraded"
  live_probe: LiveProbe
  traffic_overview: TrafficOverview
  charts?: {
    hourly_24h: HourlyPoint[]
  }
  top_pages?: Array<{ path: string; views: number; percentage: number }>
  client_environment?: {
    devices: Array<{ device: string; count: number; percentage: number }>
    top_browsers: Array<{ browser: string; count: number; percentage: number }>
    operating_systems: Array<{ os: string; count: number; percentage: number }>
  }
}

const DEFAULT_API_HOST = "https://api-worker.bjo163.workers.dev"

export interface WebStatsProps {
  domain?: string
  apiHost?: string
  autoTrack?: boolean
  className?: string
  variant?: "detailed" | "compact"
}

export function WebStats({
  domain = "moonwitness.biz.id",
  apiHost = DEFAULT_API_HOST,
  autoTrack = true,
  className,
  variant = "detailed",
}: WebStatsProps) {
  const [data, setData] = useState<WebStatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 1. Auto Beacon Tracking
  useEffect(() => {
    if (!autoTrack || typeof window === "undefined") return

    try {
      const payload = {
        path: window.location.pathname || "/",
        referrer: document.referrer || "direct",
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
      }

      if (navigator.sendBeacon) {
        navigator.sendBeacon(`${apiHost}/public/web/track/${domain}`, JSON.stringify(payload))
      } else {
        fetch(`${apiHost}/public/web/track/${domain}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {})
      }
    } catch {
      // Ignore beacon error
    }
  }, [domain, apiHost, autoTrack])

  // 2. Fetch Live Stats
  useEffect(() => {
    let isMounted = true

    async function loadStats() {
      try {
        setLoading(true)
        const res = await fetch(`${apiHost}/public/web/stats/${domain}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = (await res.json()) as WebStatsData
        if (isMounted) {
          setData(json)
          setError(null)
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to load telemetry"
        if (isMounted) setError(message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadStats()
    const interval = setInterval(loadStats, 30000)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [domain, apiHost])

  const maxViews = useMemo(() => {
    return Math.max(...(data?.charts?.hourly_24h?.map((p) => p.pageviews) || [1]), 1)
  }, [data])

  if (error) {
    return (
      <div className={cn("p-4 border border-border bg-panel text-xs text-muted-foreground font-mono", className)}>
        Telemetry offline for <code>{domain}</code>: {error}
      </div>
    )
  }

  if (loading && !data) {
    return (
      <div className={cn("p-6 border border-border bg-panel text-center text-xs text-muted-foreground font-mono animate-pulse", className)}>
        Synchronizing observatory web stats...
      </div>
    )
  }

  if (!data) return null

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap items-center gap-4 border border-border bg-panel px-4 py-2 text-xs font-mono", className)}>
        <span className="inline-flex items-center gap-2 text-success">
          <span className="h-2 w-2 rounded-full bg-success animate-ping" />
          OPERATIONAL
        </span>
        <span className="text-muted-foreground">VISITORS 24H: <b>{data.traffic_overview.unique_visitors_24h}</b></span>
        <span className="text-muted-foreground">PAGEVIEWS: <b>{data.traffic_overview.pageviews_24h}</b></span>
        <span className="text-muted-foreground">ACTIVE NOW: <b className="text-success">{data.traffic_overview.realtime_active_visitors_5m}</b></span>
        <span className="ml-auto text-[10px] text-muted-foreground">EDGE: {data.live_probe.edge_datacenter} · {data.live_probe.response_time_ms}ms</span>
      </div>
    )
  }

  return (
    <div className={cn("border border-border bg-panel p-6 font-mono text-foreground", className)}>
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase">04 / WEB OBSERVATORY TELEMETRY</span>
          <h3 className="text-lg font-bold tracking-tight text-foreground mt-1">Live Web Analytics · {domain}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            EDGE: {data.live_probe.edge_datacenter} · {data.live_probe.response_time_ms}ms
          </span>
          <span className="text-[10px] text-muted-foreground uppercase">LAST 24H</span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="border border-border bg-card p-4">
          <span className="text-[10px] text-muted-foreground uppercase">UNIQUE VISITORS</span>
          <div className="mt-1 text-2xl font-bold">{data.traffic_overview.unique_visitors_24h}</div>
          <span className="text-[10px] text-muted-foreground">
            {data.traffic_overview.visitor_types?.new_visitors || 0} new · {data.traffic_overview.visitor_types?.returning_visitors || 0} ret
          </span>
        </div>

        <div className="border border-border bg-card p-4">
          <span className="text-[10px] text-muted-foreground uppercase">TOTAL PAGEVIEWS</span>
          <div className="mt-1 text-2xl font-bold">{data.traffic_overview.pageviews_24h}</div>
          <span className="text-[10px] text-muted-foreground">{data.traffic_overview.avg_pages_per_session} pages / visit</span>
        </div>

        <div className="border border-success/40 bg-success/5 p-4">
          <span className="text-[10px] text-success uppercase">ACTIVE NOW (5M)</span>
          <div className="mt-1 text-2xl font-bold text-success">{data.traffic_overview.realtime_active_visitors_5m}</div>
          <span className="text-[10px] text-muted-foreground">Live presence</span>
        </div>

        <div className="border border-border bg-card p-4">
          <span className="text-[10px] text-muted-foreground uppercase">PROTOCOL & SSL</span>
          <div className="mt-1 text-sm font-semibold truncate">{data.live_probe.protocol || "HTTP/2 - HTTPS"}</div>
          <span className="text-[10px] text-muted-foreground">HTTP {data.live_probe.http_status} OK</span>
        </div>
      </div>

      {/* 24-Hour Time Series Bar Chart */}
      <div className="mt-6 border border-border bg-card p-4">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-4">
          <span>24-HOUR TRAFFIC TIME-SERIES</span>
          <span>● Pageviews / hour</span>
        </div>
        <div className="flex h-24 items-end gap-1.5 border-b border-border/60 pb-2">
          {data.charts?.hourly_24h?.map((point, index) => {
            const height = Math.max(Math.round((point.pageviews / maxViews) * 100), point.pageviews > 0 ? 16 : 4)
            return (
              <div key={index} className="group relative flex-1 h-full flex flex-col justify-end items-center">
                <div
                  className={cn(
                    "w-full rounded-t transition-all",
                    point.pageviews > 0 ? "bg-primary shadow-[0_0_8px_rgba(56,139,253,0.5)]" : "bg-border/60"
                  )}
                  style={{ height: `${height}%` }}
                />
                {index % 4 === 0 && (
                  <span className="absolute -bottom-5 text-[9px] text-muted-foreground whitespace-nowrap">
                    {point.hour}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Top Pages & Environments */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="border border-border bg-card p-4">
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase mb-3">TOP ACCESSED PATHS</h4>
          <div className="space-y-2 text-xs">
            {data.top_pages && data.top_pages.length > 0 ? (
              data.top_pages.slice(0, 5).map((p) => (
                <div key={p.path} className="flex justify-between items-center">
                  <code className="rounded bg-panel px-1.5 py-0.5 text-primary text-[11px]">{p.path}</code>
                  <span className="text-muted-foreground">{p.views} views ({p.percentage}%)</span>
                </div>
              ))
            ) : (
              <span className="text-muted-foreground text-[11px]">No path logs yet</span>
            )}
          </div>
        </div>

        <div className="border border-border bg-card p-4">
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase mb-3">CLIENT ENVIRONMENT</h4>
          <div className="flex flex-wrap gap-2">
            {data.client_environment?.devices?.map((d) => (
              <span key={d.device} className="rounded border border-border bg-panel px-2 py-0.5 text-[11px] text-muted-foreground">
                {d.device}: {d.percentage}%
              </span>
            ))}
            {data.client_environment?.operating_systems?.map((o) => (
              <span key={o.os} className="rounded border border-border bg-panel px-2 py-0.5 text-[11px] text-muted-foreground">
                {o.os}: {o.percentage}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
