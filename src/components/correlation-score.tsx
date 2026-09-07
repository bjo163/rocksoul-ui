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
}

export function CorrelationScore({
  score,
  confidence,
  explanation,
  dimensions,
}: CorrelationScoreProps) {
  return (
    <section className="border border-border bg-card p-5" aria-labelledby="correlation-heading">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Correlation preview
      </p>

      <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
        <h3 id="correlation-heading" className="text-6xl font-black tracking-[-0.06em]">
          {score.toFixed(2)}
        </h3>
        <div className="pb-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-success">
            {confidence}
          </p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">{explanation}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {dimensions.map((dimension) => (
          <div key={dimension.label} className="grid grid-cols-[minmax(110px,1fr)_2fr_auto] items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
              {dimension.label}
            </span>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div
                className={dimension.tone === "warning" ? "h-full bg-warning" : "h-full bg-success"}
                style={{ width: `${Math.round(dimension.value * 100)}%` }}
              />
            </div>
            <span className={dimension.tone === "warning" ? "font-mono text-xs text-warning" : "font-mono text-xs text-success"}>
              {dimension.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
