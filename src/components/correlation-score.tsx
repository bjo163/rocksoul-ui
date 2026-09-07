export interface CorrelationDimension {
  label: string
  value: number
  tone?: "default" | "warning"
}

export interface CorrelationScoreProps {
  score: number
  confidence: string
  explanation: string
  dimensions: CorrelationDimension[]
  methodHref?: string
}

export function CorrelationScore({
  score,
  confidence,
  explanation,
  dimensions,
  methodHref = "#method",
}: CorrelationScoreProps) {
  return (
    <section className="border border-border bg-panel p-5" aria-labelledby="correlation-heading">
      <p className="mw-meta text-muted-foreground">Correlation preview</p>

      <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
        <h3 id="correlation-heading" className="mw-display text-6xl font-black">
          {score.toFixed(2)}
        </h3>
        <div className="pb-1">
          <p className="mw-meta text-success">{confidence}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{explanation}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {dimensions.map((dimension) => (
          <div key={dimension.label} className="grid grid-cols-[minmax(100px,1fr)_1.6fr_auto] items-center gap-3">
            <span className="mw-meta text-muted-foreground">{dimension.label}</span>
            <div className="h-2 overflow-hidden rounded-full bg-card" aria-hidden="true">
              <div
                className={dimension.tone === "warning" ? "h-full bg-warning" : "h-full bg-success"}
                style={{ width: `${Math.round(dimension.value * 100)}%` }}
              />
            </div>
            <span className={dimension.tone === "warning" ? "mw-meta text-warning" : "mw-meta text-success"}>
              {dimension.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <a href={methodHref} className="mw-link mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline">
        How this score is weighed →
      </a>
    </section>
  )
}
