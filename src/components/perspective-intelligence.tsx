import type {
  ActorFramingCell,
  PerspectiveCoverage,
  PerspectiveGeographyPoint,
  PerspectiveProvenanceStage,
  PerspectiveReactionPoint,
  PerspectiveSignalPoint,
  PerspectiveSnapshotPoint,
  PerspectiveChangePoint,
  PerspectiveVisualRecord,
} from "../contracts/perspective-intelligence"
import { clampPerspectiveMetric } from "../contracts/perspective-intelligence"

const POSITION_CLASS: Record<string, string> = {
  SUPPORT: "support",
  OPPOSE: "oppose",
  QUESTIONING: "questioning",
  MIXED: "mixed",
  NEUTRAL: "neutral",
  UNKNOWN: "unknown",
}

function compact(value: number) {
  return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(value)
}

function percent(value: number) {
  return `${Math.round(clampPerspectiveMetric(value) * 100)}%`
}

export function PerspectiveConstellation({
  phenomenon,
  perspectives,
  className = "",
}: {
  phenomenon: string
  perspectives: PerspectiveVisualRecord[]
  className?: string
}) {
  const count = Math.max(1, perspectives.length)
  const radius = 39
  const center = { x: 50, y: 50 }
  return (
    <section className={`mw-perspective-constellation ${className}`.trim()} aria-label="Perspective constellation">
      <div className="mw-perspective-constellation__canvas">
        <svg viewBox="0 0 100 100" role="img" aria-label={`${perspectives.length} perspectives surrounding ${phenomenon}`}>
          <title>Perspective constellation for {phenomenon}</title>
          <defs>
            <radialGradient id="mw-perspective-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--mw-perspective-violet)" stopOpacity=".42" />
              <stop offset="100%" stopColor="var(--mw-perspective-violet)" stopOpacity=".04" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="15" fill="url(#mw-perspective-core)" stroke="var(--mw-perspective-violet)" strokeWidth=".55" />
          {perspectives.map((item, index) => {
            const angle = (Math.PI * 2 * index) / count - Math.PI / 2
            const x = center.x + Math.cos(angle) * radius
            const y = center.y + Math.sin(angle) * radius
            const salience = clampPerspectiveMetric(item.salience ?? 0.5)
            return (
              <g key={item.id}>
                <line x1="50" y1="50" x2={x} y2={y} stroke="var(--mw-perspective-edge)" strokeWidth={0.15 + salience * 0.24} opacity={0.35 + salience * 0.5} />
                <circle cx={x} cy={y} r={2.5 + salience * 1.9} className={`mw-perspective-dot mw-perspective-dot--${POSITION_CLASS[item.position] ?? "unknown"}`} />
                <text x={x} y={y + 6.2} textAnchor="middle" className="mw-perspective-svg-label">{item.actorType}</text>
              </g>
            )
          })}
          <text x="50" y="49" textAnchor="middle" className="mw-perspective-svg-core">PHENOMENON</text>
          <text x="50" y="53" textAnchor="middle" className="mw-perspective-svg-sub">MANY VIEWS</text>
        </svg>
      </div>
      <div className="mw-perspective-constellation__legend">
        {perspectives.map((item) => (
          <article key={item.id}>
            <i className={`mw-perspective-legend-dot mw-perspective-legend-dot--${POSITION_CLASS[item.position] ?? "unknown"}`} />
            <div><strong>{item.label}</strong><span>{item.actorType} · {item.position}{item.framing ? ` · ${item.framing}` : ""}</span></div>
          </article>
        ))}
      </div>
    </section>
  )
}

const GEO_PRESETS: Record<string, [number, number]> = {
  GLOBAL: [50, 46],
  "US-NY": [25, 34],
  "US-TX": [22, 42],
  US: [24, 37],
  ID: [77, 58],
  EU: [51, 31],
  GB: [48, 28],
  IN: [69, 45],
  CN: [76, 38],
  JP: [84, 38],
  BR: [36, 62],
  ZA: [57, 70],
  AU: [84, 70],
}

export function PerspectiveGeographyField({
  points,
  className = "",
}: {
  points: PerspectiveGeographyPoint[]
  className?: string
}) {
  const max = Math.max(1, ...points.map((p) => p.count))
  return (
    <section className={`mw-perspective-geo ${className}`.trim()} aria-label="Perspective geography coverage">
      <svg viewBox="0 0 100 58" role="img">
        <title>Geographic coverage of perspective observations</title>
        <path className="mw-perspective-world" d="M7 22 15 16 25 18 29 24 23 28 17 26 12 30 7 27ZM27 31 31 29 35 35 32 43 29 48 26 39ZM40 16 49 13 58 16 62 21 57 24 51 23 46 25 40 22ZM49 26 55 26 58 32 56 42 52 48 49 40 47 32ZM59 15 68 13 79 16 87 20 94 25 90 30 81 29 75 33 68 29 62 23ZM84 40 89 38 95 42 92 48 87 49 83 45Z" />
        {points.map((point, index) => {
          const preset = GEO_PRESETS[point.label] ?? [12 + (index * 13) % 76, 18 + (index * 11) % 34]
          const x = point.x ?? preset[0]
          const y = point.y ?? preset[1]
          const r = 1.3 + (point.count / max) * 2.5
          return (
            <g key={point.id}>
              <circle cx={x} cy={y} r={r + 1.8} className="mw-perspective-geo-halo" />
              <circle cx={x} cy={y} r={r} className="mw-perspective-geo-point" />
              <text x={x + 2.2} y={y - 2.2} className="mw-perspective-svg-label">{point.label}</text>
            </g>
          )
        })}
      </svg>
      <div className="mw-perspective-geo__list">
        {points.map((point) => <span key={point.id}><b>{point.label}</b>{compact(point.count)}</span>)}
      </div>
    </section>
  )
}

export function DivergenceCompass({
  divergence,
  uncertainty,
  convergence = 1 - divergence,
  coverage,
  className = "",
}: {
  divergence: number
  uncertainty: number
  convergence?: number
  coverage?: number
  className?: string
}) {
  const x = 14 + clampPerspectiveMetric(divergence) * 72
  const y = 14 + clampPerspectiveMetric(uncertainty) * 72
  return (
    <section className={`mw-divergence-compass ${className}`.trim()} aria-label="Divergence and uncertainty compass">
      <svg viewBox="0 0 100 100" role="img">
        <title>Divergence {percent(divergence)}, uncertainty {percent(uncertainty)}</title>
        {[18, 30, 42].map((r) => <circle key={r} cx="50" cy="50" r={r} className="mw-divergence-ring" />)}
        <line x1="8" y1="50" x2="92" y2="50" className="mw-divergence-axis" />
        <line x1="50" y1="8" x2="50" y2="92" className="mw-divergence-axis" />
        <circle cx={x} cy={y} r="4.2" className="mw-divergence-point" />
        <text x="9" y="47" className="mw-perspective-svg-label">CONVERGE</text>
        <text x="72" y="47" className="mw-perspective-svg-label">DIVERGE</text>
        <text x="52" y="12" className="mw-perspective-svg-label">LOW U</text>
        <text x="52" y="91" className="mw-perspective-svg-label">HIGH U</text>
      </svg>
      <div className="mw-divergence-compass__metrics">
        <span><small>DIVERGENCE</small><strong>{percent(divergence)}</strong></span>
        <span><small>CONVERGENCE</small><strong>{percent(convergence)}</strong></span>
        <span><small>UNCERTAINTY</small><strong>{percent(uncertainty)}</strong></span>
        {coverage !== undefined ? <span><small>COVERAGE</small><strong>{percent(coverage)}</strong></span> : null}
      </div>
    </section>
  )
}

export function ActorFramingMatrix({
  cells,
  className = "",
}: {
  cells: ActorFramingCell[]
  className?: string
}) {
  const actors = [...new Set(cells.map((c) => c.actor))]
  const frames = [...new Set(cells.map((c) => c.framing))]
  const byKey = new Map(cells.map((c) => [`${c.actor}::${c.framing}`, clampPerspectiveMetric(c.value)]))
  return (
    <section className={`mw-actor-framing-matrix ${className}`.trim()} aria-label="Actor by framing matrix">
      <div className="mw-actor-framing-matrix__scroll">
        <div className="mw-actor-framing-matrix__grid" style={{ gridTemplateColumns: `minmax(110px, 1.2fr) repeat(${frames.length}, minmax(70px, 1fr))` }}>
          <span />
          {frames.map((frame) => <b key={frame}>{frame}</b>)}
          {actors.flatMap((actor) => [
            <strong key={`${actor}-label`}>{actor}</strong>,
            ...frames.map((frame) => {
              const value = byKey.get(`${actor}::${frame}`) ?? 0
              return <i key={`${actor}-${frame}`} style={{ opacity: 0.12 + value * 0.88 }} title={`${actor} × ${frame}: ${percent(value)}`}><span>{value > 0 ? Math.round(value * 100) : ""}</span></i>
            }),
          ])}
        </div>
      </div>
      <p>Cell intensity represents observed presence or salience. It does not represent support.</p>
    </section>
  )
}

export function ZigzagTimeline({
  signals,
  className = "",
}: {
  signals: PerspectiveSignalPoint[]
  className?: string
}) {
  const width = 100
  const points = signals.map((signal, index) => {
    const x = signals.length <= 1 ? 50 : 7 + (index / (signals.length - 1)) * 86
    const y = 84 - clampPerspectiveMetric(signal.confidence) * 62
    return { ...signal, x, y }
  })
  return (
    <section className={`mw-zigzag-timeline ${className}`.trim()} aria-label="Zigzag signal timeline">
      <svg viewBox={`0 0 ${width} 100`} role="img">
        <title>Signal timeline across the perspective field</title>
        <line x1="6" y1="86" x2="94" y2="86" className="mw-zigzag-axis" />
        {points.length > 1 ? <polyline points={points.map((p) => `${p.x},${p.y}`).join(" ")} className="mw-zigzag-line" /> : null}
        {points.map((point) => (
          <g key={point.id}>
            <circle cx={point.x} cy={point.y} r="2.5" className="mw-zigzag-point" />
            <text x={point.x} y={point.y - 5} textAnchor="middle" className="mw-perspective-svg-label">{point.type}</text>
          </g>
        ))}
      </svg>
      <ol className="mw-zigzag-timeline__list">
        {signals.map((signal) => <li key={signal.id}><b>{signal.type}</b><strong>{percent(signal.confidence)}</strong><span>{signal.label}</span>{signal.detail ? <small>{signal.detail}</small> : null}</li>)}
      </ol>
    </section>
  )
}

export function TemporalPerspectiveHistory({
  snapshots,
  changes = [],
  className = "",
}: {
  snapshots: PerspectiveSnapshotPoint[]
  changes?: PerspectiveChangePoint[]
  className?: string
}) {
  const ordered = [...snapshots].sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
  const linePoints = (key: "divergence" | "uncertainty") => ordered.map((item, index) => {
    const x = ordered.length <= 1 ? 50 : 8 + (index / (ordered.length - 1)) * 84
    const y = 86 - clampPerspectiveMetric(item[key]) * 68
    return `${x},${y}`
  }).join(" ")
  return (
    <section className={`mw-perspective-history ${className}`.trim()} aria-label="Perspective temporal history">
      <div className="mw-perspective-history__chart">
        <svg viewBox="0 0 100 100" role="img">
          <title>{ordered.length > 1 ? "Comparable perspective snapshots over time" : "Perspective baseline snapshot; trend not yet established"}</title>
          <line x1="7" y1="86" x2="93" y2="86" className="mw-zigzag-axis" />
          <line x1="7" y1="18" x2="7" y2="86" className="mw-zigzag-axis" />
          {ordered.length > 1 ? (
            <>
              <polyline points={linePoints("divergence")} className="mw-perspective-history__divergence" />
              <polyline points={linePoints("uncertainty")} className="mw-perspective-history__uncertainty" />
            </>
          ) : null}
          {ordered.map((item, index) => {
            const x = ordered.length <= 1 ? 50 : 8 + (index / (ordered.length - 1)) * 84
            const yd = 86 - clampPerspectiveMetric(item.divergence) * 68
            const yu = 86 - clampPerspectiveMetric(item.uncertainty) * 68
            return (
              <g key={item.id}>
                <circle cx={x} cy={yd} r="2.2" className="mw-perspective-history__dot-d" />
                <circle cx={x} cy={yu} r="1.9" className="mw-perspective-history__dot-u" />
                <text x={x} y="94" textAnchor="middle" className="mw-perspective-svg-label">{new Date(item.timestamp).toISOString().slice(0,10)}</text>
              </g>
            )
          })}
        </svg>
        <div className="mw-perspective-history__legend">
          <span><i className="mw-perspective-history__legend-d" />DIVERGENCE</span>
          <span><i className="mw-perspective-history__legend-u" />UNCERTAINTY</span>
        </div>
      </div>
      <div className="mw-perspective-history__ledger">
        <strong>{ordered.length > 1 ? "CHANGE LEDGER" : "BASELINE ESTABLISHED"}</strong>
        {ordered.length <= 1 ? <p>One comparable snapshot exists. JIZZ must not call this a trend until a later snapshot is measured with compatible methodology.</p> : null}
        {changes.length ? (
          <ol>{changes.map((change) => <li key={change.id}><b>{change.type}</b>{change.dimension ? <span>{change.dimension}</span> : null}{change.confidence !== undefined ? <em>{percent(change.confidence)}</em> : null}<small>{change.rationale ?? "Derived temporal change."}</small></li>)}</ol>
        ) : <p>No CHANGE record has passed the temporal comparison gate yet.</p>}
      </div>
    </section>
  )
}

export function ReactionSpectrum({
  reactions,
  className = "",
}: {
  reactions: PerspectiveReactionPoint[]
  className?: string
}) {
  const max = Math.max(1, ...reactions.map((r) => r.count))
  return (
    <section className={`mw-reaction-spectrum ${className}`.trim()} aria-label="Reaction spectrum">
      {reactions.map((reaction) => (
        <article key={reaction.type}>
          <i style={{ width: `${28 + (reaction.count / max) * 54}px`, height: `${28 + (reaction.count / max) * 54}px` }} />
          <strong>{reaction.type}</strong>
          <span>{reaction.count}</span>
        </article>
      ))}
    </section>
  )
}

export function CoverageRadar({
  coverage,
  className = "",
}: {
  coverage: PerspectiveCoverage
  className?: string
}) {
  const values = [
    coverage.source,
    coverage.actor,
    coverage.geography,
    coverage.language,
    coverage.framing,
    coverage.position,
  ].map(clampPerspectiveMetric)
  const labels = ["SOURCE", "ACTOR", "GEO", "LANG", "FRAME", "POSITION"]
  const point = (value: number, index: number, scale = 39) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2
    return [50 + Math.cos(angle) * scale * value, 50 + Math.sin(angle) * scale * value]
  }
  const polygon = values.map((value, index) => point(value, index)).map(([x, y]) => `${x},${y}`).join(" ")
  return (
    <section className={`mw-coverage-radar ${className}`.trim()} aria-label="Perspective coverage radar">
      <svg viewBox="0 0 100 100" role="img">
        <title>Coverage across source, actor, geography, language, framing and position dimensions</title>
        {[0.25, 0.5, 0.75, 1].map((scale) => (
          <polygon key={scale} points={labels.map((_, index) => point(1, index, 39 * scale)).map(([x, y]) => `${x},${y}`).join(" ")} className="mw-coverage-radar__ring" />
        ))}
        {labels.map((label, index) => {
          const [x, y] = point(1.13, index)
          return <text key={label} x={x} y={y} textAnchor="middle" className="mw-perspective-svg-label">{label}</text>
        })}
        <polygon points={polygon} className="mw-coverage-radar__value" />
      </svg>
      <p>Coverage quality is not evidence strength.</p>
    </section>
  )
}

export function ProvenanceFlow({
  stages,
  className = "",
}: {
  stages: PerspectiveProvenanceStage[]
  className?: string
}) {
  return (
    <section className={`mw-perspective-provenance ${className}`.trim()} aria-label="Perspective provenance flow">
      <ol>
        {stages.map((stage, index) => (
          <li key={stage.id} data-state={stage.state ?? "pending"}>
            {stage.href ? <a href={stage.href} target="_blank" rel="noreferrer">{stage.label}</a> : <strong>{stage.label}</strong>}
            {stage.count !== undefined ? <span>{stage.count}</span> : null}
            {index < stages.length - 1 ? <i aria-hidden="true">→</i> : null}
          </li>
        ))}
      </ol>
      <p>Issue first · source second · canon last.</p>
    </section>
  )
}

export function PerspectiveIntelligenceBoard({
  phenomenon,
  perspectives,
  geography,
  divergence,
  convergence,
  uncertainty,
  coverage,
  framingCells,
  signals,
  reactions,
  snapshots = [],
  changes = [],
  provenance,
  className = "",
}: {
  phenomenon: string
  perspectives: PerspectiveVisualRecord[]
  geography: PerspectiveGeographyPoint[]
  divergence: number
  convergence?: number
  uncertainty: number
  coverage: PerspectiveCoverage
  framingCells: ActorFramingCell[]
  signals: PerspectiveSignalPoint[]
  reactions: PerspectiveReactionPoint[]
  snapshots?: PerspectiveSnapshotPoint[]
  changes?: PerspectiveChangePoint[]
  provenance: PerspectiveProvenanceStage[]
  className?: string
}) {
  return (
    <section className={`mw-perspective-board ${className}`.trim()} aria-label="Perspective intelligence visual board">
      <div className="mw-perspective-board__wide"><PerspectiveConstellation phenomenon={phenomenon} perspectives={perspectives} /></div>
      <PerspectiveGeographyField points={geography} />
      <DivergenceCompass divergence={divergence} convergence={convergence} uncertainty={uncertainty} coverage={(coverage.source + coverage.actor + coverage.geography + coverage.language + coverage.framing + coverage.position) / 6} />
      <div className="mw-perspective-board__wide"><ActorFramingMatrix cells={framingCells} /></div>
      <div className="mw-perspective-board__wide"><ZigzagTimeline signals={signals} /></div>
      <div className="mw-perspective-board__wide"><TemporalPerspectiveHistory snapshots={snapshots} changes={changes} /></div>
      <ReactionSpectrum reactions={reactions} />
      <CoverageRadar coverage={coverage} />
      <div className="mw-perspective-board__wide"><ProvenanceFlow stages={provenance} /></div>
    </section>
  )
}
