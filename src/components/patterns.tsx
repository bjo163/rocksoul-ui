import { useState, type ReactNode } from "react"
import { Badge } from "./badge"
import { Checkbox, Input } from "./form-controls"
import { Button } from "./button"
import { CorrelationScore, type CorrelationScoreProps } from "./correlation-score"
import { EvidenceGraph } from "./evidence-graph"
import type { RecordSummary } from "./four-record-summary"
import { LegalStatus, type LegalStatusProps } from "./legal-status"
import {
  AWSBoundary,
  CaseCard,
  CaseTimeline,
  CommunityComposer,
  DiscussionItem,
  EvidenceCard,
  RepositoryHealthRow,
  SearchFilters,
  SourceBlock,
  SubmissionCard,
  type EvidenceCardProps,
} from "./archive-components"

export function Pagination({
  page = 1,
  pages = 1,
}: {
  page?: number
  pages?: number
}) {
  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
      <Button variant="ghost" disabled={page <= 1}>Previous</Button>
      <span className="mw-meta text-muted-foreground">Page {page} / {pages}</span>
      <Button variant="ghost" disabled={page >= pages}>Next</Button>
    </nav>
  )
}

export function EvidenceGridPattern({
  records,
}: {
  records: RecordSummary[]
}) {
  return (
    <section aria-labelledby="evidence-grid-heading">
      <div className="mb-5">
        <p className="mw-meta text-muted-foreground">Evidence grid</p>
        <h3 id="evidence-grid-heading" className="mt-2 text-xl font-bold">Inspect each record independently.</h3>
      </div>
      <SearchFilters resultCount={records.length} />
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {records.map((record, index) => (
          <EvidenceCard
            key={record.domain}
            domain={record.domain}
            recordId={record.recordId}
            repo={record.sourceRepo}
            claim={record.description}
            provenance={record.source}
            verification={record.verification}
            status={record.status}
            canonical={record.canonicalStatus === "canonical"}
            selected={index === 1}
            flagged={record.domain === "PERSON"}
            sourceHref={`#source-${record.domain.toLowerCase()}`}
          />
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {records.map((record) => (
          <SourceBlock
            key={record.source}
            id={`source-${record.domain.toLowerCase()}`}
            sourceId={record.source}
            title={record.title}
            excerpt={record.description}
            citation={record.recordId}
            provenance={`fixture/${record.domain.toLowerCase()}/0042/a`}
            verification={record.verification}
          />
        ))}
      </div>
      <Pagination page={1} pages={1} />
    </section>
  )
}

export function CorrelationGraphPattern({
  records,
  correlation,
}: {
  records: RecordSummary[]
  correlation: CorrelationScoreProps
}) {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]" aria-label="Correlation graph pattern">
      <EvidenceGraph records={records} score={correlation.score} />
      <CorrelationScore {...correlation} />
    </section>
  )
}

export function AWSLegalSummaryPattern({
  legal,
  sources,
}: {
  legal: LegalStatusProps
  sources: Array<{
    id: string
    title: string
    excerpt: string
    locator: string
  }>
}) {
  return (
    <section aria-label="AWS legal summary">
      <AWSBoundary legalState={legal.status}>
        <p className="text-sm font-semibold">Cool. Now the law gets involved.</p>
      </AWSBoundary>
      <div className="mt-4 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
        <LegalStatus {...legal} />
        <div className="grid gap-4">
          {sources.map((source) => (
            <SourceBlock
              key={source.id}
              id={`legal-${source.id.toLowerCase()}`}
              variant="legal-instrument"
              sourceId={source.id}
              title={source.title}
              excerpt={source.excerpt}
              citation={source.id}
              provenance={source.locator}
              verification="reference-only"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedCases({
  cases,
}: {
  cases: Array<{
    caseId: string
    title: string
    summary: string
    status: "supported" | "partial" | "unresolved" | "disputed"
    traceCount: number
    updatedAt: string
  }>
}) {
  return (
    <section aria-labelledby="related-cases-heading">
      <p className="mw-meta text-muted-foreground">Related cases</p>
      <h3 id="related-cases-heading" className="mt-2 text-xl font-bold">Similar trails, separate conclusions.</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cases.map((item) => <CaseCard key={item.caseId} {...item} variant="compact" />)}
      </div>
    </section>
  )
}

export function PublicCasePattern({
  header,
  evidence,
  correlation,
  legal,
  related,
  summary,
}: {
  header: ReactNode
  evidence: ReactNode
  correlation: ReactNode
  legal: ReactNode
  related: ReactNode
  summary: ReactNode
}) {
  return (
    <div className="grid gap-8">
      {header}
      {summary}
      {evidence}
      {correlation}
      {legal}
      {related}
    </div>
  )
}

export function RepositoryMonitor({
  repositories,
}: {
  repositories: Array<{ repo: string; status: "online" | "degraded" | "offline" | "syncing"; queue?: number; errors?: number }>
}) {
  return (
    <section aria-labelledby="repository-monitor-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mw-meta text-muted-foreground">Repository monitor</p>
          <h3 id="repository-monitor-heading" className="mt-2 text-lg font-bold">Source-layer health</h3>
        </div>
        <div className="flex gap-2">
          <Badge variant="info">job: idle</Badge>
          <Button variant="secondary" size="sm">Sync all</Button>
        </div>
      </div>
      <div className="mt-4 border border-border">
        {repositories.map((item) => (
          <RepositoryHealthRow
            key={item.repo}
            repo={item.repo}
            status={item.status}
            queue={item.queue ?? 0}
            errors={item.errors ?? 0}
            action={<Button variant="ghost" size="sm">Inspect</Button>}
          />
        ))}
      </div>
    </section>
  )
}

export function ModerationQueue({
  submission,
}: {
  submission: {
    id: string
    state: "unverified" | "in-review" | "verified" | "rejected" | "needs-context"
    title: string
    body: string
  }
}) {
  return (
    <section aria-labelledby="moderation-queue-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mw-meta text-muted-foreground">Moderation queue</p>
          <h3 id="moderation-queue-heading" className="mt-2 text-lg font-bold">Community submissions stay non-canonical until reviewed.</h3>
        </div>
        <div className="flex gap-2">
          <Badge variant="neutral">filter: needs context</Badge>
          <Button variant="ghost" size="sm">Select all</Button>
        </div>
      </div>
      <div className="mt-4">
        <SubmissionCard
          {...submission}
          canonicalEvidence={false}
          source="provenance incomplete"
          reviewer="unassigned"
          reviewActions={
            <>
              <Button variant="danger" size="sm">Request context</Button>
              <Button variant="secondary" size="sm">Reject</Button>
            </>
          }
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm">Bulk request context</Button>
        <Button variant="ghost" size="sm">Return selected</Button>
      </div>
    </section>
  )
}

export function CommunityCaseThreadPattern({
  question,
  moderatorNote,
  submission,
}: {
  question: string
  moderatorNote: string
  submission: {
    id: string
    state: "needs-context"
    title: string
    body: string
  }
}) {
  return (
    <section aria-label="Community case thread" className="border border-border bg-card p-5">
      <DiscussionItem kind="question" author="Member" role="member" timestamp="05:14" body={question} replies={1} />
      <DiscussionItem kind="moderator-note" author="Moderator" role="moderator" timestamp="05:20" body={moderatorNote} replies={0} />
      <div className="mt-5">
        <SubmissionCard {...submission} canonicalEvidence={false} source="provenance incomplete" />
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <CommunityComposer mode="question" />
        <CommunityComposer mode="context" />
      </div>
    </section>
  )
}

export function CaseTimelinePattern({
  entries,
}: {
  entries: Array<{
    timestamp: string
    title: string
    description: string
    source: string
    status: string
    flagged?: boolean
    variant?: "event" | "source" | "decision" | "community"
  }>
}) {
  return <CaseTimeline entries={entries} filter="all" />
}

export function SearchFiltersPattern() {
  return <SearchFilters resultCount={4} chips={["All records", "Canonical", "Source-linked"]} />
}

export function EmptyLoadingErrorPattern({
  children,
}: {
  children: ReactNode
}) {
  return <section aria-label="Empty loading error pattern">{children}</section>
}


export function AuthFormPattern() {
  const [state, setState] = useState<"default" | "error" | "loading">("default")
  return (
    <form
      aria-label="Sign in"
      onSubmit={(event) => {
        event.preventDefault()
        setState("loading")
      }}
    >
      <p className="mw-eyebrow text-primary">Sign in</p>
      <h2 className="mt-3 text-2xl font-bold">Your account, not your conclusion.</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Identity controls access. It never changes evidence status by itself.
      </p>
      <div className="mt-8 grid gap-5">
        <Input label="Email" type="email" autoComplete="email" placeholder="you@example.com" />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          error={state === "error" ? "That credential pair was not accepted." : undefined}
        />
        <Checkbox label="Keep me signed in" description="Use only on a device you control." />
        <Button type="submit" loading={state === "loading"}>Continue</Button>
        <Button type="button" variant="secondary">Continue with provider</Button>
        <button type="button" className="mw-link justify-start text-xs underline" onClick={() => setState("error")}>
          Preview error state
        </button>
      </div>
      <p className="mw-meta mt-8 border-t border-border pt-4 text-muted-foreground">
        By continuing you accept the community rules and evidence-integrity contract.
      </p>
    </form>
  )
}
