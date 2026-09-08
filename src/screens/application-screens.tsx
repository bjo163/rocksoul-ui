import { useState } from "react"
import { ApplicationShell, type AppNotification } from "../components/application-shell"
import { Badge } from "../components/badge"
import { Button } from "../components/button"
import { Input, Select, Switch, Textarea } from "../components/form-controls"
import { MetricTile, StatePanel } from "../components/archive-components"
import { Tabs } from "../components/tabs"
import { cn } from "../lib/cn"

const notifications: AppNotification[] = [
  { id: "N-1", title: "MW-0042 review changed", body: "Identity remains partial after the latest review.", state: "unread", variant: "review" },
  { id: "N-2", title: "Repository recovered", body: "rocksoul-event is online.", state: "read", variant: "system" },
  { id: "N-3", title: "Community context submitted", body: "SUB-0042-01 still needs provenance.", state: "unread", variant: "case-update" },
]

function Shell({
  activeResource,
  title,
  children,
  backendState = "online",
}: {
  activeResource: string
  title: string
  children: React.ReactNode
  backendState?: "online" | "degraded" | "offline"
}) {
  return (
    <ApplicationShell
      activeResource={activeResource}
      breadcrumbs={[{ label: "MoonWitness", href: "#dashboard" }, { label: title }]}
      backendState={backendState}
      notifications={notifications}
    >
      <div className="px-4 py-8 sm:px-8 lg:px-12">
        {children}
      </div>
    </ApplicationShell>
  )
}

export function DashboardScreen() {
  return (
    <Shell activeResource="dashboard" title="Dashboard">
      <p className="mw-eyebrow text-primary">Application / Dashboard</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Operational overview.</h1>
      <p className="mw-reading mt-4 text-base leading-7 text-muted-foreground">Research state, queues, repository health, and review pressure without turning the dashboard into decoration.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Open cases" value="18" delta="+2" context="needs review" tone="warning" />
        <MetricTile label="Repositories" value="5" delta="4 online" context="1 degraded" />
        <MetricTile label="Queue" value="7" delta="+1" context="community + legal" tone="warning" />
        <MetricTile label="Backend" value="OK" delta="stable" context="fixture status" tone="good" />
      </div>
      <div className="mt-8 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
        <section className="border border-border bg-card">
          <div className="border-b border-border p-4"><p className="mw-meta text-muted-foreground">Recent activity</p></div>
          {[
            ["MW-0042", "review.unresolved", "05:32"],
            ["SUB-0042-01", "context.requested", "05:31"],
            ["rocksoul-event", "sync.completed", "05:29"],
          ].map(([resource, action, time]) => (
            <div key={`${resource}-${time}`} className="grid grid-cols-[1fr_1.3fr_auto] gap-3 border-b border-border p-4 text-sm">
              <strong>{resource}</strong><span className="text-muted-foreground">{action}</span><span className="mw-meta">{time}</span>
            </div>
          ))}
        </section>
        <section className="border border-border bg-card p-5">
          <p className="mw-meta text-muted-foreground">Quick actions</p>
          <div className="mt-4 grid gap-2">
            <Button>Open review queue</Button>
            <Button variant="secondary">Open AI Workspace</Button>
            <Button variant="ghost">Inspect repositories</Button>
          </div>
        </section>
      </div>
    </Shell>
  )
}

const kanbanColumns = [
  { title: "Observe", items: ["Capture new source", "Validate provenance"] },
  { title: "Trace", items: ["Cross-link EVENT", "Resolve PERSON field"] },
  { title: "Review", items: ["AWS jurisdiction", "MW-0042 closure gate"] },
  { title: "Done", items: ["RGBL motif extraction"] },
]

export function KanbanScreen() {
  return (
    <Shell activeResource="kanban" title="Kanban">
      <p className="mw-eyebrow text-primary">Workspace / Kanban</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="mw-display text-4xl font-black uppercase sm:text-6xl">Research flow.</h1>
          <p className="mt-3 text-sm text-muted-foreground">Board state is operational metadata, never evidence.</p>
        </div>
        <Button>Add work item</Button>
      </div>
      <div className="mt-8 grid gap-4 xl:grid-cols-4">
        {kanbanColumns.map((column) => (
          <section key={column.title} className="border border-border bg-panel p-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">{column.title}</h2>
              <Badge variant="neutral">{column.items.length}</Badge>
            </div>
            <div className="mt-3 grid gap-3">
              {column.items.map((item) => (
                <article key={item} className="border border-border bg-card p-4">
                  <p className="text-sm font-bold">{item}</p>
                  <p className="mw-meta mt-3 text-muted-foreground">MW-0042 / fixture</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  )
}

export function CalendarScreen() {
  const days = ["Mon 07", "Tue 08", "Wed 09", "Thu 10", "Fri 11", "Sat 12", "Sun 13"]
  const events: Record<string, string[]> = {
    "Tue 08": ["05:30 Case review", "10:00 Repository sync"],
    "Wed 09": ["14:00 Legal review"],
    "Fri 11": ["09:00 Community moderation"],
  }
  return (
    <Shell activeResource="calendar" title="Calendar">
      <p className="mw-eyebrow text-primary">Workspace / Calendar</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Review windows.</h1>
      <div className="mt-8 grid gap-3 md:grid-cols-7">
        {days.map((day) => (
          <section key={day} className="min-h-48 border border-border bg-card p-3">
            <h2 className="mw-meta text-muted-foreground">{day}</h2>
            <div className="mt-4 grid gap-2">
              {(events[day] ?? []).map((event) => <div key={event} className="border-l-2 border-primary bg-panel p-2 text-xs">{event}</div>)}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  )
}

export function ChatScreen() {
  return (
    <Shell activeResource="chat" title="Chat">
      <p className="mw-eyebrow text-primary">Workspace / Chat</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Discussion with provenance.</h1>
      <div className="mt-8 grid min-h-[560px] gap-5 lg:grid-cols-[260px_1fr]">
        <aside className="border border-border bg-panel p-3">
          <p className="mw-meta text-muted-foreground">Channels</p>
          {["# case-mw-0042", "# legal-review", "# repository-health"].map((channel, index) => (
            <button key={channel} type="button" className={cn("mw-link w-full px-3 text-left text-sm", index === 0 ? "bg-card font-bold text-primary" : "text-muted-foreground")}>{channel}</button>
          ))}
        </aside>
        <section className="flex flex-col border border-border bg-card">
          <div className="border-b border-border p-4"><strong># case-mw-0042</strong></div>
          <div className="flex-1 space-y-5 p-5">
            <article><strong className="text-sm">Researcher</strong><p className="mt-2 text-sm">Identity dimension is still 0.64. Do not close.</p><p className="mw-meta mt-2 text-muted-foreground">05:28</p></article>
            <article><strong className="text-sm">Reviewer</strong><p className="mt-2 text-sm">Agreed. I requested context on SUB-0042-01.</p><p className="mw-meta mt-2 text-muted-foreground">05:31</p></article>
          </div>
          <form className="border-t border-border p-4" onSubmit={(event) => event.preventDefault()}>
            <Textarea label="Message" maxLength={800} characterCount placeholder="Reference a case, source, or trace…" />
            <div className="mt-3 flex justify-end"><Button type="submit">Send</Button></div>
          </form>
        </section>
      </div>
    </Shell>
  )
}

export function AIWorkspaceScreen() {
  const [mode, setMode] = useState("mizan")
  return (
    <Shell activeResource="ai-workspace" title="AI Workspace" backendState="degraded">
      <p className="mw-eyebrow text-primary">Workspace / AI</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Evidence-aware analysis.</h1>
      <p className="mw-reading mt-4 text-sm leading-6 text-muted-foreground">The workspace must show source scope, uncertainty, and the difference between evidence, inference, and legal interpretation.</p>
      <div className="mt-8 grid gap-5 xl:grid-cols-[.75fr_1.25fr]">
        <section className="border border-border bg-card p-5">
          <Select
            label="Analysis mode"
            value={mode}
            onChange={(event) => setMode(event.currentTarget.value)}
            options={[
              { label: "Mizan analysis", value: "mizan" },
              { label: "Evidence summary", value: "evidence" },
              { label: "Contradiction scan", value: "contradiction" },
            ]}
          />
          <div className="mt-4"><Input label="Case scope" readOnly value="MW-0042" /></div>
          <div className="mt-4"><Textarea label="Prompt" maxLength={1200} characterCount defaultValue="Explain why the case remains unresolved." /></div>
          <div className="mt-4"><Button>Run analysis</Button></div>
        </section>
        <section className="border border-border bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="mw-meta text-muted-foreground">Analysis output / {mode}</p>
            <Badge variant="partial">confidence: medium-high</Badge>
          </div>
          <h2 className="mt-5 text-xl font-bold">Closure is blocked by identity uncertainty.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Temporal, motif, and source-independence dimensions align strongly. Identity remains partial and therefore cannot be aesthetically completed by the UI.</p>
          <div className="mt-6 grid gap-2 border-t border-border pt-4">
            <p className="mw-meta">Sources in scope</p>
            {["SRC-STORY-0042-A", "SRC-EVENT-0042-A", "SRC-PERSON-0042-A", "SRC-RGBL-0042-A"].map((source) => <code key={source} className="text-xs">{source}</code>)}
          </div>
          <p className="mw-meta mt-6 border-l-2 border-warning pl-3 text-warning">Inference ≠ verified fact · legal review starts after AWS boundary</p>
        </section>
      </div>
    </Shell>
  )
}

export function ProfileSettingsScreen() {
  return (
    <Shell activeResource="profile" title="Profile / Settings">
      <p className="mw-eyebrow text-primary">Account / Profile + Settings</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Personal controls.</h1>
      <Tabs
        variant="archive"
        items={[
          {
            id: "profile",
            label: "Profile",
            content: <div className="grid max-w-xl gap-4 py-6"><Input label="Display name" defaultValue="Researcher" /><Input label="Role" readOnly value="reviewer" /><Button>Save profile</Button></div>,
          },
          {
            id: "preferences",
            label: "Preferences",
            content: <div className="max-w-xl py-6"><Switch label="Review notifications" defaultChecked /><Switch label="Repository health alerts" defaultChecked /><Switch label="Reduced visual density" /></div>,
          },
          {
            id: "security",
            label: "Security",
            content: <div className="grid max-w-xl gap-4 py-6"><Input label="Session" readOnly value="Current browser / fixture" /><Button variant="danger">Sign out other sessions</Button></div>,
          },
        ]}
      />
    </Shell>
  )
}

export type AuthorizationState = "allowed" | "denied" | "pending"

export function AuthorizationStateCard({
  state,
  permission,
}: {
  state: AuthorizationState
  permission: string
}) {
  if (state === "pending") return <StatePanel state="loading" />
  if (state === "denied") {
    return (
      <section className="border border-primary bg-card p-6" role="alert">
        <Badge variant="prohibited">access denied</Badge>
        <h2 className="mt-4 text-xl font-bold">You do not have this permission.</h2>
        <p className="mt-2 text-sm text-muted-foreground">{permission}</p>
        <Button className="mt-5" variant="secondary">Request access</Button>
      </section>
    )
  }
  return (
    <section className="border border-success bg-card p-6">
      <Badge variant="verified">access granted</Badge>
      <h2 className="mt-4 text-xl font-bold">Permission available.</h2>
      <p className="mt-2 text-sm text-muted-foreground">{permission}</p>
    </section>
  )
}

export function AuthorizationScreen() {
  const permissions = [
    ["cases:read", true, true, true],
    ["cases:review", false, true, true],
    ["legal:review", false, false, true],
    ["audit:read", false, true, true],
    ["authz:write", false, false, true],
  ] as const
  return (
    <Shell activeResource="authorization" title="Authorization">
      <p className="mw-eyebrow text-primary">System / Authorization UX</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Access is visible.</h1>
      <p className="mw-reading mt-4 text-sm leading-6 text-muted-foreground">Users should know whether an action is unavailable, forbidden, or still being resolved—without discovering it only after failure.</p>
      <div className="mt-8 overflow-x-auto border border-border bg-card">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead><tr className="border-b border-border">{["Permission","Viewer","Reviewer","Admin"].map((head)=><th key={head} className="p-3 font-mono text-[10px] uppercase text-muted-foreground">{head}</th>)}</tr></thead>
          <tbody>
            {permissions.map(([permission, viewer, reviewer, admin]) => (
              <tr key={permission} className="border-b border-border">
                <th className="p-3 font-mono text-xs">{permission}</th>
                {[viewer, reviewer, admin].map((allowed,index)=><td key={index} className="p-3"><Badge variant={allowed ? "verified" : "unresolved"}>{allowed ? "allow" : "deny"}</Badge></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <AuthorizationStateCard state="allowed" permission="cases:read" />
        <AuthorizationStateCard state="denied" permission="legal:review" />
        <AuthorizationStateCard state="pending" permission="authz:resolve" />
      </div>
    </Shell>
  )
}

export function ApplicationStatesScreen() {
  return (
    <Shell activeResource="dashboard" title="Async states" backendState="offline">
      <p className="mw-eyebrow text-primary">Application / States</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">Failure is a designed state.</h1>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <StatePanel state="empty" />
        <StatePanel state="loading" />
        <StatePanel state="error" />
      </div>
    </Shell>
  )
}
