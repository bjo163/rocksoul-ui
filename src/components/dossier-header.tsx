import type { ReactNode } from "react"
import { Badge, type BadgeProps } from "./feedback/status-badge"
import { MoonWitnessAssetImage } from "./asset-provider"
import { cn } from "../lib/cn"

export interface DossierHeaderProps {
  eyebrow: string
  title: string
  summary?: string
  recordId?: string
  status?: { label: string; variant?: BadgeProps["variant"] }
  metadata?: Array<{ label: string; value: string }>
  actions?: ReactNode
  variant?: "compact" | "cinematic"
  className?: string
  assetFile?: string
}

export function DossierHeader({
  eyebrow,
  title,
  summary,
  recordId,
  status,
  metadata = [],
  actions,
  variant = "cinematic",
  className,
  assetFile = "svg/archive-dossier.svg",
}: DossierHeaderProps) {
  const cinematic = variant === "cinematic"
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden border border-border bg-background",
        cinematic ? "min-h-[320px] px-6 py-8 sm:min-h-[380px] sm:px-8 sm:py-10" : "px-5 py-6",
        className,
      )}
    >
      {cinematic ? (
        <>
          <MoonWitnessAssetImage
            pack="editorial"
            file={assetFile}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,.98),rgba(11,11,11,.84)_52%,rgba(11,11,11,.48)),linear-gradient(0deg,rgba(11,11,11,.92),transparent_62%)]"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className={cn("relative grid gap-8", cinematic && "lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,.55fr)] lg:items-end")}>
        <div>
          <p className="mw-eyebrow text-primary">{eyebrow}</p>
          <h2 className={cn(
            "mt-4 text-balance font-serif font-medium tracking-[-0.035em]",
            cinematic ? "text-[clamp(2.8rem,6vw,5rem)] leading-[.92]" : "text-[clamp(2rem,4vw,3.5rem)] leading-[.96]",
          )}>
            {title}
          </h2>
          {summary ? <p className="mw-reading mt-5 text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{summary}</p> : null}
          {recordId ? <p className="mw-meta mt-5 text-subtle">{recordId}</p> : null}
          {actions ? <div className="mt-6 flex flex-wrap gap-2">{actions}</div> : null}
        </div>

        {(status || metadata.length) ? (
          <aside className="border border-border bg-background/70 p-4 backdrop-blur-md" aria-label="Dossier metadata">
            {status ? <Badge variant={status.variant ?? "neutral"}>{status.label}</Badge> : null}
            <dl className="mt-4 grid gap-3">
              {metadata.map((item) => (
                <div key={item.label} className="grid gap-1 border-b border-border pb-3 last:border-b-0 last:pb-0">
                  <dt className="mw-meta text-subtle">{item.label}</dt>
                  <dd className="m-0 text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        ) : null}
      </div>
    </header>
  )
}
