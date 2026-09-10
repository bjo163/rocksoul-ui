import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../components/compat/button"
import { CaseHeader } from "../components/case-header"
import { CorrelationScore } from "../components/correlation-score"
import { GraphNode } from "../components/evidence-graph"
import { FourRecordSummary } from "../components/four-record-summary"
import { LegalStatus } from "../components/legal-status"
import {
  AWSBoundary,
  AuditEventRow,
  CaseCard,
  Citation,
  DiscussionItem,
  EvidenceCard,
  GraphEdge,
  MetricTile,
  MWHeader,
  NotificationItem,
  PlatformSidebar,
  RepositoryCard,
  RepositoryHealthRow,
  SourceBlock,
  SubmissionCard,
  TimelineEntry,
} from "../components/archive-components"
import { mw0042 } from "../fixtures/mw0042"

const meta = {
  title: "QA/Component Contract Matrix",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">{children}</div>
)

export const HeaderVariants: Story = {
  render: () => (
    <div className="min-h-screen bg-background text-foreground">
      <MWHeader variant="transparent" />
      <div className="h-6" />
      <MWHeader variant="solid" />
      <div className="h-6" />
      <MWHeader variant="compact-mobile" caseId="MW-0042" />
    </div>
  ),
}

export const CaseVariants: Story = {
  render: () => <Frame>
    <div className="grid gap-6">
      <CaseHeader caseId="MW-0042" eyebrow="Public" title="The Silent Flight" summary="Public case header." status="unresolved" variant="public" />
      <CaseHeader caseId="MW-0042" eyebrow="Community" title="The Silent Flight" summary="Community case header." status="unresolved" variant="community" actions={<Button variant="secondary">Follow</Button>} />
      <div className="mw-platform bg-background p-4 text-foreground">
        <CaseHeader caseId="MW-0042" eyebrow="Platform" title="Review the blockers." summary="Platform case header." status="unresolved" variant="platform" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <CaseCard caseId="MW-0042" title="Default" summary="Default card." status="unresolved" traceCount={4} updatedAt="now" />
        <CaseCard caseId="MW-0042" title="Compact" summary="Compact card." status="partial" traceCount={4} updatedAt="now" variant="compact" />
        <CaseCard caseId="MW-0042" title="Featured" summary="Featured card." status="unresolved" traceCount={4} updatedAt="now" variant="featured" selected />
      </div>
    </div>
  </Frame>,
}

export const EvidenceAndSourceVariants: Story = {
  render: () => <Frame>
    <FourRecordSummary records={mw0042.records} />
    <div className="mt-6"><FourRecordSummary records={mw0042.records.slice(0,3)} compact /></div>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {mw0042.records.map((record,index)=><EvidenceCard
        key={record.domain}
        domain={record.domain}
        recordId={record.recordId}
        repo={record.sourceRepo}
        claim={record.description}
        provenance={record.source}
        verification={record.verification}
        status={record.status}
        canonical={record.canonicalStatus==="canonical"}
        selected={index===1}
        flagged={record.domain==="PERSON"}
      />)}
      <EvidenceCard domain="AWS" recordId="AWS-0042-A" repo="rocksoul-aws" claim="Legal layer." provenance="LAW-FIX-01" verification="reference-only" status="disputed" canonical={false} />
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <SourceBlock variant="quote" sourceId="SRC-Q" title="Quote" excerpt="Quoted source treatment." citation="Q-1" provenance="fixture/q" verification="source-linked" />
      <SourceBlock variant="record" sourceId="SRC-R" title="Record" excerpt="Record source treatment." citation="R-1" provenance="fixture/r" verification="verified-fixture" />
      <SourceBlock variant="legal-instrument" sourceId="LAW-FIX" title="Legal" excerpt="Reference-only law fixture." citation="LAW-FIX" provenance="fixture/law" verification="reference-only" />
      <Citation code="SRC-INLINE" source="Inline source" locator="fixture/inline" variant="inline" />
      <Citation code="SRC-BLOCK" source="Block source" locator="fixture/block" variant="block" />
      <Citation code="LAW-CITE" source="Legal source" locator="fixture/legal" variant="legal" />
    </div>
  </Frame>,
}

export const CorrelationAndGraphVariants: Story = {
  render: () => <Frame>
    <div className="grid gap-4 lg:grid-cols-2">
      <CorrelationScore {...mw0042.correlation} variant="summary" />
      <CorrelationScore {...mw0042.correlation} variant="detailed" />
    </div>
    <div className="mt-6 flex flex-wrap items-center gap-5">
      <GraphNode type="STORY" label="STORY" status="supported" relationCount={1} />
      <GraphNode type="EVENT" label="EVENT" status="supported" relationCount={1} state="selected" />
      <GraphNode type="PERSON" label="PERSON" status="partial" relationCount={1} state="unresolved" />
      <GraphNode type="RGBL" label="RGBL" status="supported" relationCount={1} />
      <GraphNode type="CASE" label="0.87" status="correlation" relationCount={4} state="selected" />
      <GraphNode type="AWS" label="AWS" status="downstream" relationCount={1} state="dimmed" />
    </div>
    <div className="mt-6 flex flex-wrap gap-4">
      <GraphEdge type="supports" />
      <GraphEdge type="contradicts" />
      <GraphEdge type="references" />
      <GraphEdge type="temporal" highlighted />
      <GraphEdge type="identity" highlighted />
      <GraphEdge type="legal" dimmed />
    </div>
  </Frame>,
}

export const TimelineVariants: Story = {
  render: () => <Frame>
    {(["event","source","decision","community"] as const).map((variant)=>(
      <TimelineEntry key={variant} variant={variant} timestamp="05:30" title={variant} description={`${variant} timeline state`} source="SRC-FIXTURE" status="default" flagged={variant==="decision"} />
    ))}
  </Frame>,
}

export const LegalStateVariants: Story = {
  render: () => <Frame>
    <div className="grid gap-4 xl:grid-cols-2">
      {(["permitted","restricted","prohibited","disputed","unresolved"] as const).map((status)=>(
        <LegalStatus key={status} status={status} jurisdiction="fixture jurisdiction" review="review state" prompt="Source law and MoonWitness review remain separate." />
      ))}
    </div>
    <div className="mt-6 grid gap-4">
      <AWSBoundary active legalState="disputed"><p>Active semantic legal boundary.</p></AWSBoundary>
      <AWSBoundary active={false} legalState="unresolved"><p>Inactive boundary preview.</p></AWSBoundary>
    </div>
  </Frame>,
}

export const CommunityStateVariants: Story = {
  render: () => <Frame>
    <div className="grid gap-2">
      <DiscussionItem kind="comment" author="Member" role="member" timestamp="now" body="Default comment." />
      <DiscussionItem kind="question" author="Member" role="member" timestamp="now" body="Edited question." state="edited" />
      <DiscussionItem kind="community-note" author="Member" role="member" timestamp="now" body="Reported note." state="reported" />
      <DiscussionItem kind="moderator-note" author="Moderator" role="moderator" timestamp="now" body="Hidden note." state="hidden" />
    </div>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {(["unverified","in-review","verified","rejected","needs-context"] as const).map((state)=>(
        <SubmissionCard key={state} id={`SUB-${state}`} state={state} title={state} body="Submission state." canonicalEvidence={state==="verified"} reviewer={state==="in-review"?"reviewer":"unassigned"} />
      ))}
    </div>
    <div className="mt-6 grid gap-2 lg:grid-cols-2">
      {(["case-update","reply","review","system"] as const).map((variant)=>(
        <NotificationItem key={variant} variant={variant} title={variant} body="Notification variant." unread={variant!=="system"} />
      ))}
    </div>
  </Frame>,
}

export const RepositoryAndMetricStates: Story = {
  render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground">
    <div className="grid gap-4 md:grid-cols-2">
      <RepositoryCard repo="rocksoul-legend" domain="STORY" status="healthy" records={10} schema="v1" lastSync="now" variant="public" />
      <RepositoryCard repo="rocksoul-superhero" domain="PERSON" status="degraded" records={8} schema="v1" lastSync="now" variant="platform" />
    </div>
    <div className="mt-6 border border-border">
      <RepositoryHealthRow repo="online" status="online" action={<Button variant="ghost" size="sm">Inspect</Button>} />
      <RepositoryHealthRow repo="degraded" status="degraded" queue={1} />
      <RepositoryHealthRow repo="offline" status="offline" errors={1} />
      <RepositoryHealthRow repo="syncing" status="syncing" queue={2} />
    </div>
    <div className="mt-6 grid gap-3 md:grid-cols-4">
      <MetricTile label="Neutral" value="10" delta="0" context="neutral" />
      <MetricTile label="Good" value="11" delta="+1" context="good" tone="good" />
      <MetricTile label="Warning" value="2" delta="+1" context="warning" tone="warning" />
      <MetricTile label="Critical" value="1" delta="+1" context="critical" tone="critical" />
    </div>
    <div className="mt-6 border border-border bg-card">
      <AuditEventRow timestamp="05:30" actor="reviewer" action="review.opened" resource="MW-0042" result="open" traceId="TRACE-X" />
    </div>
    <div className="mt-6 flex min-h-96 border border-border">
      <PlatformSidebar />
      <PlatformSidebar collapsed />
    </div>
  </div>,
}
