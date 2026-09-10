import { ApplicationShell, type AppNotification } from "../components/application-shell"
import { Button } from "../components/ui/button"
import { AuditEventRow, MetricTile } from "../components/archive-components"
import { CaseHeader } from "../components/case-header"
import { AWSLegalSummaryPattern, ModerationQueue, RepositoryMonitor } from "../components/patterns/domain-patterns"
import { mw0042 } from "../fixtures/mw0042"
import type { ApplicationActions } from "../contracts/interactions"

const notifications: AppNotification[] = [
  {
    id: "PLATFORM-N-1",
    title: "Canonical blocker remains",
    body: "PERSON identity is still incomplete.",
    state: "unread",
    variant: "review",
  },
  {
    id: "PLATFORM-N-2",
    title: "Context requested",
    body: "SUB-0042-01 is waiting for provenance.",
    state: "unread",
    variant: "case-update",
  },
]

export function PlatformScreen({ actions }: { actions?: ApplicationActions } = {}) {
  return (
    <ApplicationShell
      activeResource="cases"
      breadcrumbs={[
        { label: "MoonWitness", href: "#dashboard" },
        { label: "Cases", href: "#cases" },
        { label: mw0042.caseId },
      ]}
      backendState="degraded"
      notifications={notifications}
    >
      <div id="platform" className="px-4 py-8 sm:px-8 lg:px-12">
        <CaseHeader
          caseId={mw0042.caseId}
          eyebrow="15 / Platform / Case review"
          title="Review the blockers."
          summary="Two blockers remain before closure. Dense operational surfaces stay clean and readable."
          status="unresolved"
          variant="platform"
          metadata={[{ label: "review", value: "needs-review" }]}
          actions={<Button variant="secondary" onClick={() => void actions?.onPlatformAction?.({ action: "keep-unresolved", resource: mw0042.caseId })}>Keep case unresolved</Button>}
        />

        <section className="mt-6 border border-border bg-card p-4">
          <p className="mw-meta text-muted-foreground">Canonical blockers</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="border border-warning px-3 py-2 font-mono text-[10px] font-bold uppercase text-warning">Person identity incomplete</span>
            <span className="border border-primary px-3 py-2 font-mono text-[10px] font-bold uppercase text-primary">AWS jurisdiction unresolved</span>
          </div>
        </section>

        <section className="mt-6">
          <RepositoryMonitor
            repositories={mw0042.repositories.map((item) => ({
              ...item,
              queue: item.status === "degraded" ? 1 : 0,
              errors: 0,
            }))}
          />
        </section>

        <section className="mt-6">
          <ModerationQueue submission={mw0042.community.submission} />
        </section>

        <section className="mt-6">
          <AWSLegalSummaryPattern
            legal={mw0042.legal}
            sources={[
              {
                id: "LAW-FIX-01",
                title: "Synthetic Cross-Border Movement Instrument",
                excerpt: "Fixture-only legal source for review workflow.",
                locator: "fixture/aws/0042/law-01",
              },
            ]}
          />
        </section>

        <section className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MetricTile label="Canonical blockers" value="2" context="must remain visible" delta="0" tone="warning" />
            <MetricTile label="Repositories" value="5" context="4 online / 1 degraded" delta="1 degraded" />
            <MetricTile label="Open submissions" value="1" context="needs context" delta="+1" tone="warning" />
            <MetricTile label="Case state" value="OPEN" context="unresolved retained" />
          </div>
        </section>

        <section id="audit" className="mt-6 scroll-mt-24 border border-border bg-card">
          <div className="border-b border-border p-3"><p className="mw-meta text-muted-foreground">Audit trail</p></div>
          <AuditEventRow timestamp="05:30" actor="fixture" action="review.opened" resource="MW-0042" result="needs-review" traceId="TRACE-0042-A" />
          <AuditEventRow timestamp="05:31" actor="reviewer" action="context.requested" resource="SUB-0042-01" result="pending" traceId="TRACE-0042-B" />
          <AuditEventRow timestamp="05:32" actor="reviewer" action="review.unresolved" resource="MW-0042" result="open" traceId="TRACE-0042-C" />
        </section>

        <div className="sticky bottom-0 mt-6 flex flex-wrap gap-2 border-t border-border bg-background/95 py-3 backdrop-blur md:static md:bg-transparent">
          <Button variant="destructive" onClick={() => void actions?.onPlatformAction?.({ action: "request-context", resource: mw0042.caseId })}>Request context</Button>
          <Button variant="secondary" onClick={() => void actions?.onPlatformAction?.({ action: "flag-record", resource: mw0042.caseId })}>Flag record</Button>
          <Button variant="secondary" onClick={() => void actions?.onPlatformAction?.({ action: "keep-unresolved", resource: mw0042.caseId })}>Keep case unresolved</Button>
          <Button variant="ghost" onClick={() => void actions?.onPlatformAction?.({ action: "return-to-queue", resource: mw0042.caseId })}>Return to queue</Button>
        </div>
      </div>
    </ApplicationShell>
  )
}
