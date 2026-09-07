import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AWSBoundary,
  CaseCard,
  CaseTimeline,
  GraphEdge,
  NotificationItem,
  PlatformSidebar,
  RepositoryCard,
  SubmissionCard,
} from "../components/archive-components"

const meta = {
  title: "QA/Component State Matrix",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CaseAndRelationshipStates: Story = {
  render: () => (
    <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">
      <div className="grid gap-4 lg:grid-cols-2">
        <CaseCard caseId="MW-0042" title="The Silent Flight" summary="Enough to investigate. Not enough to close." status="unresolved" traceCount={4} updatedAt="05:30" featured />
        <div className="border border-border bg-card p-5">
          <p className="mw-meta text-muted-foreground">Graph edge variants</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <GraphEdge type="supports" />
            <GraphEdge type="contradicts" />
            <GraphEdge type="references" />
            <GraphEdge type="temporal" />
            <GraphEdge type="identity" highlighted />
            <GraphEdge type="legal" dimmed />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <AWSBoundary><p className="text-sm">Legal interpretation starts after this semantic boundary.</p></AWSBoundary>
      </div>
      <div className="mt-6">
        <CaseTimeline entries={[
          { timestamp: "02:14", title: "Movement starts", description: "Synthetic event trace.", source: "SRC-EVENT-0042-A", status: "verified-fixture" },
          { timestamp: "02:37", title: "Movement ends", description: "Identity still unresolved.", source: "SRC-PERSON-0042-A", status: "partial", flagged: true },
        ]} />
      </div>
    </div>
  ),
}

export const RepositoryStates: Story = {
  render: () => (
    <div className="mw-shell-wide grid min-h-screen gap-4 bg-background py-10 text-foreground sm:grid-cols-2 lg:grid-cols-4">
      <RepositoryCard repo="healthy" domain="STORY" status="healthy" records={10} schema="v1" lastSync="now" />
      <RepositoryCard repo="degraded" domain="PERSON" status="degraded" records={8} schema="v1" lastSync="2m" />
      <RepositoryCard repo="offline" domain="TEST" status="offline" records={0} schema="v1" lastSync="1h" />
      <RepositoryCard repo="syncing" domain="TEST" status="syncing" records={4} schema="v1" lastSync="now" />
    </div>
  ),
}

export const CommunityAndPlatformStates: Story = {
  render: () => (
    <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">
      <div className="grid gap-4 lg:grid-cols-2">
        <SubmissionCard id="SUB-0042-01" state="needs-context" title="Possible second event trace" body="Not canonical until provenance survives review." />
        <div className="border border-border bg-card">
          <NotificationItem title="Case updated" body="Identity remains partial." unread />
          <NotificationItem title="Review complete" body="Case stays unresolved." />
        </div>
      </div>
      <div className="mw-platform mt-6 flex min-h-96 border border-border bg-background text-foreground">
        <PlatformSidebar />
        <PlatformSidebar collapsed />
      </div>
    </div>
  ),
}
