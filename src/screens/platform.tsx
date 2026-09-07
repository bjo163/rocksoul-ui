import { useState } from "react"
import { Button } from "../components/button"
import {
  AuditEventRow,
  MetricTile,
  PlatformSidebar,
  RepositoryHealthRow,
  SubmissionCard,
} from "../components/archive-components"
import { Drawer } from "../components/overlays"
import { CaseHeader } from "../components/case-header"
import { LegalStatus } from "../components/legal-status"
import { mw0042 } from "../fixtures/mw0042"

const nav = ["Dashboard", "Cases", "Repositories", "Evidence", "Correlation", "Legal", "Community", "Audit"]

export function PlatformScreen() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div id="platform" className="mw-platform min-h-screen bg-background text-foreground">
      <header className="flex min-h-16 items-center justify-between border-b border-border px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="mw-touch border border-border px-3 font-mono text-[10px] font-bold uppercase md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
          <strong className="text-sm">MOONWITNESS / PLATFORM</strong>
        </div>
        <span className="mw-meta text-muted-foreground">{mw0042.caseId}</span>
      </header>
      <Drawer open={menuOpen} title="Platform navigation" onClose={() => setMenuOpen(false)}>
        <nav className="grid">
          {nav.map((item) => (
            <a key={item} href="#platform" className="mw-link border-b border-border text-sm" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </Drawer>
      <div className="flex">
        <PlatformSidebar />
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-14">
          <CaseHeader
            caseId={mw0042.caseId}
            eyebrow="15 / Platform / Case review"
            title="Review the blockers."
            summary="Two blockers remain before closure. Dense operational surfaces stay clean and readable."
            status="unresolved"
            variant="platform"
            metadata={[{ label: "review", value: "needs-review" }]}
          />

          <section className="mt-6 border border-border bg-card p-4">
            <p className="mw-meta text-muted-foreground">Blockers</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="border border-warning px-3 py-2 font-mono text-[10px] font-bold uppercase text-warning">Person identity incomplete</span>
              <span className="border border-primary px-3 py-2 font-mono text-[10px] font-bold uppercase text-primary">AWS jurisdiction unresolved</span>
            </div>
          </section>

          <section className="mt-6">
            <p className="mw-meta mb-3 text-muted-foreground">Repository health</p>
            <div className="border border-border">
              {mw0042.repositories.map((item) => (
                <RepositoryHealthRow
                  key={item.repo}
                  repo={item.repo}
                  status={item.status}
                  schema="v1"
                  queue={item.status === "degraded" ? 1 : 0}
                  errors={0}
                  lastSync="fixture"
                />
              ))}
            </div>
          </section>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
            <div>
              <SubmissionCard
                id={mw0042.community.submission.id}
                state="needs-context"
                title={mw0042.community.submission.title}
                body="Provenance incomplete. Request context before promotion."
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="danger">Request context</Button>
                <Button variant="secondary">Flag record</Button>
                <Button variant="ghost">Return to queue</Button>
              </div>
            </div>
            <LegalStatus {...mw0042.legal} />
          </div>

          <section className="mt-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MetricTile label="Canonical blockers" value="2" context="must remain visible" tone="warning" />
              <MetricTile label="Repositories" value="5" context="4 online / 1 degraded" />
              <MetricTile label="Open submissions" value="1" context="needs context" tone="warning" />
              <MetricTile label="Case state" value="OPEN" context="unresolved retained" />
            </div>
          </section>

          <section className="mt-6 border border-border bg-card">
            <div className="border-b border-border p-3"><p className="mw-meta text-muted-foreground">Audit trail</p></div>
            <AuditEventRow timestamp="05:30" actor="fixture" action="review.opened" resource="MW-0042" result="needs-review" traceId="TRACE-0042-A" />
            <AuditEventRow timestamp="05:31" actor="reviewer" action="context.requested" resource="SUB-0042-01" result="pending" traceId="TRACE-0042-B" />
          </section>
        </main>
      </div>
    </div>
  )
}
