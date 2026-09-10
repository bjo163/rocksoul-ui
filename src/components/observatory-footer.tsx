import type { ReactNode } from "react"
import { cn } from "../lib/cn"
import { MoonWitnessMark } from "./brand"
import { WebStats, type WebStatsProps } from "./web-stats"

export interface ObservatoryFooterProps {
  domain?: string
  apiHost?: string
  showStats?: boolean
  statsVariant?: "detailed" | "compact"
  statsProps?: Partial<WebStatsProps>
  customStats?: ReactNode
  tagline?: string
  legalNote?: string
  className?: string
}

export function ObservatoryFooter({
  domain = "moonwitness.biz.id",
  apiHost,
  showStats = true,
  statsVariant = "detailed",
  statsProps,
  customStats,
  tagline = "MoonWitness watches. Rocksoul follows. The record connects. The law draws the line. The trail stays inspectable.",
  legalNote = "TRUTH LEAVES A TRACE.",
  className,
}: ObservatoryFooterProps) {
  return (
    <footer id="about" className={cn("border-t border-border bg-background pt-10 font-mono text-foreground", className)}>
      {/* Integrated Web Stats Section (Optional / Default: True) */}
      {showStats ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          {customStats ? (
            customStats
          ) : (
            <WebStats
              domain={domain}
              apiHost={apiHost}
              variant={statsVariant}
              {...statsProps}
            />
          )}
        </div>
      ) : null}

      {/* Main Footer Brand & Metadata */}
      <div className="border-t border-border/60 bg-panel/40 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <MoonWitnessMark className="h-8 w-8 text-foreground" />
              <div>
                <strong className="block text-sm font-black tracking-wider text-foreground">MOONWITNESS</strong>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">INDEPENDENT OBSERVATORY</span>
              </div>
            </div>

            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
              {tagline}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 text-[10px] text-muted-foreground md:flex-row md:justify-between">
            <span>ROCKSOUL / PUBLIC WEB · {domain}</span>
            <span>{legalNote}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
