import { useEffect, useState, type ReactNode } from "react"
import { Badge } from "./badge"
import { Button } from "./button"
import { Input, Select, Textarea } from "./form-controls"
import { Avatar, Drawer } from "./overlays"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "../lib/cn"
import type { RecordDomain, RecordStatus } from "./four-record-summary"

export function MWHeader({
  caseId,
  surface = "web",
}: {
  caseId?: string
  surface?: "web" | "community"
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-colors",
        scrolled ? "border-border bg-background/95" : "border-transparent bg-background/80",
      )}
      data-state={scrolled ? "scrolled" : "transparent"}
    >
      <div className="mw-shell-wide flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="mw-link flex-col items-start justify-center no-underline">
          <span className="text-sm font-bold">MOONWITNESS</span>
          <span className="mw-meta text-muted-foreground">INDEPENDENT OBSERVATORY</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center md:flex">
          {["Observe", "Records", "Cases", "Community"].map((label) => (
            <a
              key={label}
              href={label === "Cases" ? "#case" : "#method"}
              className="mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <a href="#search" className="mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em]">
            Search
          </a>
          <span className="mw-meta ml-2 border border-success px-2 py-1 text-success">Live</span>
          <ThemeToggle />
          <Avatar label={surface === "community" ? "Member" : "Guest"} size="sm" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {caseId ? <span className="mw-meta text-muted-foreground">{caseId}</span> : null}
          <button
            className="mw-touch border border-border px-3 font-mono text-[10px] font-bold uppercase"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <Drawer open={menuOpen} title="MoonWitness" onClose={() => setMenuOpen(false)}>
        <nav id="mobile-navigation" className="grid">
          {["Observe", "Records", "Cases", "Community", "Search"].map((label) => (
            <a
              key={label}
              href={label === "Cases" ? "#case" : "#method"}
              className="mw-link border-b border-border font-mono text-xs font-bold uppercase tracking-[0.1em]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <span className="mw-meta text-success">System live</span>
            <ThemeToggle />
          </div>
        </nav>
      </Drawer>
    </header>
  )
}

export interface EvidenceCardProps {
  domain: RecordDomain | "AWS"
  recordId: string
  repo: string
  claim: string
  provenance: string
  verification: string
  status: RecordStatus | "disputed"
  canonical: boolean
  selected?: boolean
  flagged?: boolean
}

const domainTone: Record<EvidenceCardProps["domain"], string> = {
  STORY: "text-rgbl-red",
  EVENT: "text-rgbl-green",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue",
  AWS: "text-primary",
}

export function EvidenceCard({
  domain,
  recordId,
  repo,
  claim,
  provenance,
  verification,
  status,
  canonical,
  selected,
  flagged,
}: EvidenceCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-72 flex-col border bg-card p-4",
        flagged ? "border-warning" : selected ? "border-foreground" : "border-border",
      )}
      aria-label={`${domain} evidence: ${status}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("mw-eyebrow", domainTone[domain])}>{domain}</span>
        <Badge variant={status === "disputed" ? "disputed" : status}>{status}</Badge>
      </div>
      <p className="mw-meta mt-4 text-muted-foreground">{recordId}</p>
      <p className="mt-3 text-base font-bold">{claim}</p>
      <dl className="mw-meta mt-5 grid gap-2 border-t border-border pt-4">
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Repo</dt><dd>{repo}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Provenance</dt><dd className="text-right">{provenance}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Verification</dt><dd>{verification}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Canonical</dt><dd>{canonical ? "YES" : "NO"}</dd></div>
      </dl>
      <a href="#source" className="mw-link mt-auto pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline">
        Inspect source →
      </a>
    </article>
  )
}

export function RepositoryCard({
  repo,
  domain,
  status,
  records,
  schema,
  lastSync,
}: {
  repo: string
  domain: string
  status: "healthy" | "degraded" | "offline" | "syncing"
  records: number
  schema: string
  lastSync: string
}) {
  const tone = status === "healthy" ? "supported" : status === "degraded" ? "partial" : status === "offline" ? "contested" : "info"
  return (
    <article className="mw-panel p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mw-eyebrow text-muted-foreground">{domain}</p>
          <h3 className="mt-2 text-base font-bold">{repo}</h3>
        </div>
        <Badge variant={tone}>{status}</Badge>
      </div>
      <dl className="mw-meta mt-6 grid gap-2 text-muted-foreground">
        <div className="flex justify-between"><dt>Records</dt><dd className="text-foreground">{records}</dd></div>
        <div className="flex justify-between"><dt>Schema</dt><dd className="text-foreground">{schema}</dd></div>
        <div className="flex justify-between"><dt>Last sync</dt><dd className="text-foreground">{lastSync}</dd></div>
      </dl>
    </article>
  )
}

export function SourceBlock({
  variant = "record",
  sourceId,
  title,
  excerpt,
  citation,
  provenance,
  verification,
}: {
  variant?: "quote" | "record" | "legal-instrument"
  sourceId: string
  title: string
  excerpt: string
  citation: string
  provenance: string
  verification: string
}) {
  return (
    <figure
      id="source"
      className={cn(
        "border bg-card p-5",
        variant === "legal-instrument" ? "border-primary" : "border-border",
      )}
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-3">
        <span className="mw-eyebrow text-muted-foreground">{sourceId}</span>
        <Badge variant={variant === "legal-instrument" ? "contested" : "info"}>{verification}</Badge>
      </figcaption>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <blockquote className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{excerpt}</blockquote>
      <dl className="mw-meta mt-5 grid gap-2 border-t border-border pt-4 text-muted-foreground">
        <div><dt className="inline">Citation / </dt><dd className="inline text-foreground">{citation}</dd></div>
        <div><dt className="inline">Provenance / </dt><dd className="inline text-foreground">{provenance}</dd></div>
      </dl>
    </figure>
  )
}

export function Citation({
  code,
  source,
  locator,
  variant = "inline",
}: {
  code: string
  source: string
  locator: string
  variant?: "inline" | "block" | "legal"
}) {
  const [copied, setCopied] = useState(false)
  const label = `${code} · ${source} · ${locator}`
  if (variant === "inline") {
    return (
      <button
        type="button"
        className="mw-touch inline-flex items-center border-b border-border font-mono text-[10px] uppercase tracking-[0.08em] hover:border-foreground"
        onClick={() => {
          void navigator.clipboard?.writeText(label)
          setCopied(true)
        }}
      >
        {copied ? "Copied" : code}
      </button>
    )
  }
  return (
    <div className={cn("border p-4", variant === "legal" ? "border-primary bg-legal-paper text-legal-ink" : "border-border bg-card")}>
      <p className="mw-meta">{code}</p>
      <p className="mt-2 text-sm font-semibold">{source}</p>
      <p className="mw-meta mt-2 opacity-70">{locator}</p>
      <Button className="mt-4" variant={variant === "legal" ? "danger" : "secondary"} onClick={() => {
        void navigator.clipboard?.writeText(label)
        setCopied(true)
      }}>
        {copied ? "Copied" : "Copy citation"}
      </Button>
    </div>
  )
}

export function TimelineEntry({
  timestamp,
  title,
  description,
  source,
  status,
  flagged,
}: {
  timestamp: string
  title: string
  description: string
  source: string
  status: string
  flagged?: boolean
}) {
  return (
    <article className={cn("grid gap-3 border-l-2 py-4 pl-4 sm:grid-cols-[120px_1fr]", flagged ? "border-warning" : "border-border")}>
      <div>
        <p className="mw-meta text-muted-foreground">{timestamp}</p>
        <p className="mw-meta mt-1">{status}</p>
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        <p className="mw-meta mt-3 text-muted-foreground">{source}</p>
      </div>
    </article>
  )
}

export function DiscussionItem({
  kind,
  author,
  role,
  body,
  timestamp,
  edited,
}: {
  kind: "comment" | "question" | "community-note" | "moderator-note"
  author: string
  role: string
  body: string
  timestamp: string
  edited?: boolean
}) {
  const variant = kind === "question" ? "info" : kind === "moderator-note" ? "verified" : "neutral"
  return (
    <article className="border-b border-border py-5">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar label={author} size="sm" />
        <strong className="text-sm">{author}</strong>
        <Badge variant={variant}>{kind}</Badge>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-6">{body}</p>
      <p className="mw-meta mt-4 text-muted-foreground">{role} · {timestamp}{edited ? " · edited" : ""}</p>
    </article>
  )
}

export function SubmissionCard({
  id,
  state,
  title,
  body,
  canonicalEvidence = false,
}: {
  id: string
  state: "unverified" | "in-review" | "verified" | "rejected" | "needs-context"
  title: string
  body: string
  canonicalEvidence?: boolean
}) {
  const tone =
    state === "verified" ? "verified" :
    state === "rejected" ? "contested" :
    state === "needs-context" ? "partial" :
    state === "in-review" ? "info" : "unresolved"
  return (
    <article className={cn("border bg-card p-4", state === "needs-context" ? "border-warning" : "border-border")}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="mw-meta text-muted-foreground">{id}</p>
        <Badge variant={tone}>{state.replace("-", " ")}</Badge>
      </div>
      <h3 className="mt-4 text-sm font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
      <p className="mw-meta mt-4 text-muted-foreground">
        {canonicalEvidence ? "Canonical evidence" : "Not canonical evidence"}
      </p>
    </article>
  )
}

export function NotificationItem({
  title,
  body,
  unread,
}: {
  title: string
  body: string
  unread?: boolean
}) {
  return (
    <article className={cn("border-b border-border p-4", unread && "bg-panel")}>
      <p className="text-sm font-bold">{title}</p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">{body}</p>
      <p className="mw-meta mt-2 text-muted-foreground">{unread ? "Unread" : "Read"}</p>
    </article>
  )
}

export function RepositoryHealthRow({
  repo,
  status,
  commit = "fixture",
  schema = "v1",
  records = "—",
  queue = 0,
  errors = 0,
  lastSync = "now",
}: {
  repo: string
  status: "online" | "degraded" | "offline" | "syncing"
  commit?: string
  schema?: string
  records?: string | number
  queue?: number
  errors?: number
  lastSync?: string
}) {
  const tone = status === "online" ? "supported" : status === "degraded" ? "partial" : status === "offline" ? "contested" : "info"
  return (
    <div className="grid min-h-11 grid-cols-[1.5fr_auto] items-center gap-3 border-b border-border bg-card px-3 py-2 md:grid-cols-[1.5fr_.8fr_.7fr_.6fr_.6fr_.6fr_.8fr_auto]">
      <span className="mw-meta">{repo}</span>
      <span className="md:hidden"><Badge variant={tone}>{status}</Badge></span>
      <span className="mw-meta hidden text-muted-foreground md:block">{commit}</span>
      <span className="mw-meta hidden text-muted-foreground md:block">{schema}</span>
      <span className="mw-meta hidden text-muted-foreground md:block">{records}</span>
      <span className="mw-meta hidden text-muted-foreground md:block">Q {queue}</span>
      <span className="mw-meta hidden text-muted-foreground md:block">E {errors}</span>
      <span className="mw-meta hidden text-muted-foreground md:block">{lastSync}</span>
      <span className="hidden md:block"><Badge variant={tone}>{status}</Badge></span>
    </div>
  )
}

export function AuditEventRow({
  timestamp,
  actor,
  action,
  resource,
  result,
  traceId,
}: {
  timestamp: string
  actor: string
  action: string
  resource: string
  result: string
  traceId: string
}) {
  return (
    <div className="grid gap-1 border-b border-border px-3 py-3 text-xs md:grid-cols-[130px_1fr_1fr_1fr_1fr_1fr]">
      {[timestamp, actor, action, resource, result, traceId].map((value, index) => (
        <span key={index} className={index === 0 ? "mw-meta text-muted-foreground" : "font-mono text-[10px]"}>{value}</span>
      ))}
    </div>
  )
}

export function MetricTile({
  label,
  value,
  context,
  tone = "neutral",
}: {
  label: string
  value: string
  context: string
  tone?: "neutral" | "good" | "warning" | "critical"
}) {
  const toneClass = tone === "good" ? "text-success" : tone === "warning" ? "text-warning" : tone === "critical" ? "text-primary" : "text-foreground"
  return (
    <article className="border border-border bg-card p-4">
      <p className="mw-meta text-muted-foreground">{label}</p>
      <p className={cn("mt-3 text-4xl font-black", toneClass)}>{value}</p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">{context}</p>
    </article>
  )
}

export function PlatformSidebar({
  active = "Cases",
  collapsed = false,
}: {
  active?: string
  collapsed?: boolean
}) {
  const items = ["Dashboard", "Cases", "Repositories", "Evidence", "Correlation", "Legal", "Community", "Audit"]
  return (
    <aside
      className={cn(
        "hidden min-h-[calc(100vh-64px)] shrink-0 border-r border-border bg-panel lg:block",
        collapsed ? "w-16" : "w-[240px]",
      )}
      data-state={collapsed ? "collapsed" : "expanded"}
    >
      <nav aria-label="Platform">
        {items.map((item) => (
          <a
            key={item}
            href="#platform"
            title={collapsed ? item : undefined}
            className={cn(
              "mw-link w-full px-5 text-sm no-underline",
              collapsed && "justify-center px-2 font-mono text-[10px]",
              item === active ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {collapsed ? item.slice(0, 2).toUpperCase() : item}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export function SearchFilters() {
  return (
    <form id="search" className="grid gap-3 border border-border bg-card p-4 md:grid-cols-[1fr_220px_auto]">
      <Input label="Search" placeholder="Search records, IDs, sources…" />
      <Select
        label="Status"
        defaultValue="all"
        options={[
          { label: "All states", value: "all" },
          { label: "Supported", value: "supported" },
          { label: "Partial", value: "partial" },
          { label: "Unresolved", value: "unresolved" },
        ]}
      />
      <div className="self-end"><Button type="submit">Apply</Button></div>
    </form>
  )
}

export function StatePanel({
  state,
}: {
  state: "empty" | "loading" | "error"
}) {
  if (state === "loading") {
    return (
      <div className="border border-border bg-card p-6" aria-busy="true">
        <p className="mw-eyebrow text-muted-foreground">Loading</p>
        <p className="mt-3 text-lg font-bold">Tracing the records…</p>
        <p className="mt-2 text-sm text-muted-foreground">No conclusion is being drawn while data is incomplete.</p>
      </div>
    )
  }
  if (state === "error") {
    return (
      <div className="border border-primary bg-card p-6" role="alert">
        <p className="mw-eyebrow text-primary">Couldn’t load this source</p>
        <p className="mt-3 text-lg font-bold">The trail broke here.</p>
        <p className="mt-2 text-sm text-muted-foreground">Try the source again. Existing records remain unchanged.</p>
        <Button className="mt-4" variant="danger">Retry source</Button>
      </div>
    )
  }
  return (
    <div className="border border-border bg-card p-6">
      <p className="mw-eyebrow text-muted-foreground">Nothing here yet</p>
      <p className="mt-3 text-lg font-bold">Still open.</p>
      <p className="mt-2 text-sm text-muted-foreground">No record matches the current filters.</p>
      <Button className="mt-4" variant="secondary">Clear filters</Button>
    </div>
  )
}

export function CommunityComposer() {
  return (
    <form className="border border-primary bg-card p-4">
      <p className="mw-eyebrow text-primary">Submit context</p>
      <p className="mt-3 text-lg font-bold">Source first. Interpretation later.</p>
      <div className="mt-4 grid gap-4">
        <Input label="Source / provenance" placeholder="Paste source ID or locator" />
        <Textarea label="Context" maxLength={600} characterCount placeholder="What does this add, and what remains uncertain?" />
        <Button type="submit">Submit context</Button>
      </div>
    </form>
  )
}


export function CaseCard({
  caseId,
  title,
  summary,
  status,
  traceCount,
  updatedAt,
  featured = false,
  selected = false,
}: {
  caseId: string
  title: string
  summary: string
  status: "supported" | "partial" | "unresolved" | "disputed"
  traceCount: number
  updatedAt: string
  featured?: boolean
  selected?: boolean
}) {
  return (
    <article
      className={cn(
        "border bg-card p-5 transition-colors hover:border-border-strong",
        selected ? "border-foreground" : featured ? "border-primary" : "border-border",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="mw-meta text-muted-foreground">CASE / {caseId}</span>
        <Badge variant={status}>{status}</Badge>
      </div>
      <h3 className="mw-display mt-5 text-2xl font-black uppercase">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>
      <div className="mw-meta mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-muted-foreground">
        <span>{traceCount} traces</span>
        <span>updated {updatedAt}</span>
      </div>
    </article>
  )
}

export function GraphEdge({
  type,
  label,
  highlighted = false,
  dimmed = false,
}: {
  type: "supports" | "contradicts" | "references" | "temporal" | "identity" | "legal"
  label?: string
  highlighted?: boolean
  dimmed?: boolean
}) {
  const className =
    type === "supports" || type === "temporal"
      ? "border-success"
      : type === "identity"
        ? "border-warning"
        : type === "references"
          ? "border-info"
          : "border-primary"

  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center border-l-2 pl-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em]",
        className,
        highlighted ? "text-foreground" : "text-muted-foreground",
        dimmed && "opacity-40",
      )}
      aria-label={`${type} relationship${label ? `: ${label}` : ""}`}
    >
      {label ?? type}
    </span>
  )
}

export function AWSBoundary({
  children,
  active = true,
}: {
  children?: ReactNode
  active?: boolean
}) {
  return (
    <section
      className={cn("border-t-2 pt-5", active ? "border-primary" : "border-border")}
      aria-label="AWS legal boundary"
    >
      <p className={cn("mw-eyebrow", active ? "text-primary" : "text-muted-foreground")}>THE BOUNDARY / AWS</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  )
}

export function CaseTimeline({
  entries,
}: {
  entries: Array<{
    timestamp: string
    title: string
    description: string
    source: string
    status: string
    flagged?: boolean
  }>
}) {
  return (
    <section aria-label="Case timeline" className="border-t border-border">
      {entries.map((entry) => (
        <TimelineEntry key={`${entry.timestamp}-${entry.title}`} {...entry} />
      ))}
    </section>
  )
}
