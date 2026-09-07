import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AWSLegalSummaryPattern,
  CaseTimelinePattern,
  CommunityCaseThreadPattern,
  CorrelationGraphPattern,
  EmptyLoadingErrorPattern,
  EvidenceGridPattern,
  ModerationQueue,
  RelatedCases,
  RepositoryMonitor,
  SearchFiltersPattern,
} from "../components/patterns"
import { StatePanel } from "../components/archive-components"
import { mw0042 } from "../fixtures/mw0042"

const meta = {
  title: "QA/Pattern Contract Matrix",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">{children}</div>
)

export const EvidenceGrid: Story = { render: () => <Frame><EvidenceGridPattern records={mw0042.records} /></Frame> }
export const CorrelationGraph: Story = { render: () => <Frame><CorrelationGraphPattern records={mw0042.records} correlation={mw0042.correlation} /></Frame> }
export const AWSLegalSummary: Story = {
  render: () => <Frame><AWSLegalSummaryPattern legal={mw0042.legal} sources={[
    {id:"LAW-FIX-01",title:"Synthetic Cross-Border Movement Instrument",excerpt:"Reference only.",locator:"fixture/aws/0042/law-01"},
  ]} /></Frame>,
}
export const Timeline: Story = {
  render: () => <Frame><CaseTimelinePattern entries={[
    {timestamp:"02:14",title:"Movement starts",description:"Fixture event.",source:"SRC-EVENT-0042-A",status:"verified-fixture",variant:"event"},
    {timestamp:"02:37",title:"Identity check",description:"Still incomplete.",source:"SRC-PERSON-0042-A",status:"partial",flagged:true,variant:"decision"},
  ]} /></Frame>,
}
export const RepositoryMonitorPattern: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><RepositoryMonitor repositories={mw0042.repositories} /></div> }
export const ModerationQueuePattern: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><ModerationQueue submission={mw0042.community.submission} /></div> }
export const CommunityThread: Story = {
  render: () => <Frame><CommunityCaseThreadPattern
    question="If identity is partial, why is the score high?"
    moderatorNote="Identity remains a blocker."
    submission={mw0042.community.submission}
  /></Frame>,
}
export const SearchAndFilters: Story = { render: () => <Frame><SearchFiltersPattern /></Frame> }
export const EmptyLoadingError: Story = {
  render: () => <Frame><EmptyLoadingErrorPattern><div className="grid gap-4 lg:grid-cols-3"><StatePanel state="empty" /><StatePanel state="loading" /><StatePanel state="error" /></div></EmptyLoadingErrorPattern></Frame>,
}
export const RelatedCasePattern: Story = {
  render: () => <Frame><RelatedCases cases={[
    {caseId:"MW-0038",title:"Night Window",summary:"Separate synthetic case.",status:"partial",traceCount:3,updatedAt:"fixture"},
    {caseId:"MW-0048",title:"Return Signal",summary:"Separate synthetic case.",status:"unresolved",traceCount:2,updatedAt:"fixture"},
  ]} /></Frame>,
}
