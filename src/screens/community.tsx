import { Button } from "../components/ui/button"
import { MetricTile, MWHeader } from "../components/archive-components"
import { CaseHeader } from "../components/case-header"
import { CommunityCaseThreadPattern } from "../components/patterns/domain-patterns"
import { mw0042 } from "../fixtures/mw0042"

export function CommunityScreen() {
  return (
    <div className="bg-background text-foreground">
      <MWHeader caseId={mw0042.caseId} surface="community" />
      <main className="mw-shell-wide py-12">
        <CaseHeader
          caseId={mw0042.caseId}
          eyebrow="13 / Community / MW-0042"
          title={mw0042.title}
          summary="Ask, follow, save, and submit context without mutating canonical evidence."
          status={mw0042.status}
          variant="community"
          actions={
            <>
              <Button variant="secondary">Follow</Button>
              <Button variant="ghost">Save</Button>
            </>
          }
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_.7fr]">
          <CommunityCaseThreadPattern
            question="If the person match is partial, why is the overall correlation still high?"
            moderatorNote="Temporal and source-independence dimensions are strong. Identity remains a blocking uncertainty and is shown separately."
            submission={mw0042.community.submission}
          />

          <aside className="grid content-start gap-4">
            <div className="grid grid-cols-3 gap-3">
              <MetricTile label="Following" value={String(mw0042.community.following)} context="members" />
              <MetricTile label="Saved" value={String(mw0042.community.saved)} context="case saves" />
              <MetricTile label="Discussion" value={String(mw0042.community.discussions)} context="threads" />
            </div>
            <p className="mw-meta border border-warning p-4 text-warning">
              Community submission ≠ canonical evidence. Provenance must survive review first.
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
