import { useState } from "react"
import {
  ApplicationShell,
  CommandPalette,
  NotificationsPanel,
  applicationResources,
  defaultApplicationPermissions,
  resourceDescriptors,
  type AppNotification,
} from "../components/application-shell"
import { Badge } from "../components/feedback/status-badge"
import { Button } from "../components/compat/button"
import { Input, Switch, Textarea } from "../components/compat/form-controls"
import { MetricTile, StatePanel } from "../components/archive-components"
import { ThemeToggle } from "../components/theme-toggle"
import type { ApplicationActions } from "../contracts/interactions"

export const applicationNotifications: AppNotification[] = [
  { id: "N-1", title: "MW-0042 review changed", body: "Person identity remains incomplete.", state: "unread", variant: "review" },
  { id: "N-2", title: "New trace linked", body: "EVENT-0042-A received a source-linked trace.", state: "unread", variant: "case-update" },
  { id: "N-3", title: "RGBL source indexed", body: "A source fragment was indexed.", state: "unread", variant: "system" },
]

function Shell({
  activeResource,
  section,
  title,
  children,
  backendState = "online",
}: {
  activeResource: string
  section: string
  title: string
  children: React.ReactNode
  backendState?: "online" | "degraded" | "offline"
}) {
  return (
    <ApplicationShell
      activeResource={activeResource}
      breadcrumbs={[{ label: section }, { label: title }]}
      backendState={backendState}
      notifications={applicationNotifications}
    >
      <div className="px-4 py-8 sm:px-8 lg:px-8">
        {children}
      </div>
    </ApplicationShell>
  )
}

export function DashboardScreen() {
  return (
    <Shell activeResource="dashboard" section="HOME" title="Dashboard">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Good morning, Rocksoul.</h1>
      <p className="mt-3 text-sm text-muted-foreground">What changed, what needs attention, and what can wait.</p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Open cases" value="42" context="active investigations" />
        <MetricTile label="Review queue" value="07" context="needs context" tone="warning" />
        <MetricTile label="Backend" value="HEALTHY" context="global service state" tone="good" />
        <MetricTile label="Unread" value="3" context="notifications" tone="critical" />
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[1.9fr_1fr]">
        <section className="border border-border bg-card">
          <div className="border-b border-border p-5"><h2 className="text-lg font-bold">Recent activity</h2></div>
          {[
            ["CASE MW-0042", "Person identity remains incomplete", "12m", "text-primary"],
            ["EVENT", "New trace linked to EVENT-0042-A", "43m", "text-success"],
            ["RGBL", "Source fragment indexed", "2h", "text-info"],
          ].map(([kind, action, time, tone]) => (
            <div key={kind} className="grid grid-cols-[130px_1fr_auto] gap-4 border-b border-border p-5 text-sm">
              <span className={`mw-meta ${tone}`}>{kind}</span>
              <span>{action}</span>
              <span className="mw-meta text-muted-foreground">{time}</span>
            </div>
          ))}
        </section>

        <section className="border border-border bg-card p-5">
          <h2 className="text-lg font-bold">Attention</h2>
          <article className="mt-5 border border-warning bg-background p-5">
            <p className="mw-meta text-warning">Review</p>
            <p className="mt-3 text-sm font-bold">7 submissions need context</p>
          </article>
          <article className="mt-4 border border-primary bg-background p-5">
            <p className="mw-meta text-primary">Legal</p>
            <p className="mt-3 text-sm font-bold">2 disputed boundaries</p>
          </article>
        </section>
      </div>
    </Shell>
  )
}

const kanbanColumns = [
  { title: "INBOX", count: 5, tone: "neutral" as const, id: "MW-0042", item: "Identity context", meta: "Person · blocker" },
  { title: "IN REVIEW", count: 3, tone: "info" as const, id: "SUB-0042-01", item: "Possible second trace", meta: "Needs context" },
  { title: "BLOCKED", count: 2, tone: "partial" as const, id: "AWS-0042", item: "Jurisdiction unresolved", meta: "Legal review" },
  { title: "DONE", count: 12, tone: "verified" as const, id: "EVENT-0042-A", item: "Timestamp verified", meta: "Source linked" },
]

export function KanbanScreen({ actions }: { actions?: ApplicationActions } = {}) {
  return (
    <Shell activeResource="kanban" section="WORK" title="Kanban">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Review workflow</h1>
      <p className="mt-3 text-sm text-muted-foreground">Move work, not evidence. Status changes are audited.</p>

      <div className="mt-10 grid gap-4 xl:grid-cols-4">
        {kanbanColumns.map((column) => (
          <section key={column.title} className="min-h-[540px] border border-border bg-panel p-4">
            <div className="flex items-center justify-between">
              <h2 className="mw-meta">{column.title} / {column.count}</h2>
              <Badge variant={column.tone}>{column.count}</Badge>
            </div>
            <article className="mt-5 border border-border bg-background p-4"><p className="mw-meta text-primary">{column.id}</p><p className="mt-3 text-sm font-bold">{column.item}</p><p className="mw-meta mt-3 text-muted-foreground">{column.meta}</p><Button className="mt-4" size="sm" variant="ghost" onClick={() => void actions?.onKanbanMove?.({ itemId: column.id, from: column.title, to: column.title === "DONE" ? "DONE" : "IN REVIEW" })}>Move next</Button></article>
          </section>
        ))}
      </div>
    </Shell>
  )
}

export function CalendarScreen({ actions }: { actions?: ApplicationActions } = {}) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
  return (
    <Shell activeResource="calendar" section="WORK" title="Calendar">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">September 2026</h1>
      <p className="mt-3 text-sm text-muted-foreground">Reviews, releases, and research checkpoints.</p>

      <div className="mt-8 grid grid-cols-7 border border-border bg-card">
        {days.map((day) => <div key={day} className="border-b border-r border-border p-3 text-center mw-meta text-muted-foreground">{day}</div>)}
        {Array.from({ length: 35 }).map((_, index) => {
          const day = index + 1
          return (
            <div key={day} className="min-h-28 border-b border-r border-border p-2">
              <span className="mw-meta text-muted-foreground">{day <= 30 ? day : ""}</span>
              {day === 8 ? (
                <div className="mt-2 grid gap-1">
                  <button type="button" className="border-l-2 border-primary bg-panel p-2 text-left text-[10px]" onClick={() => void actions?.onCalendarEventSelect?.({ id: "mw-0042-review", title: "MW-0042 REVIEW", date: "2026-09-08" })}>MW-0042 REVIEW</button><button type="button" className="border-l-2 border-success bg-panel p-2 text-left text-[10px]" onClick={() => void actions?.onCalendarEventSelect?.({ id: "source-sync", title: "SOURCE SYNC", date: "2026-09-08" })}>SOURCE SYNC</button><button type="button" className="border-l-2 border-info bg-panel p-2 text-left text-[10px]" onClick={() => void actions?.onCalendarEventSelect?.({ id: "release-gate", title: "RELEASE GATE", date: "2026-09-08" })}>RELEASE GATE</button>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </Shell>
  )
}

export function ChatScreen({ actions }: { actions?: ApplicationActions } = {}) {
  const [channel, setChannel] = useState("# mw-0042")
  const [message, setMessage] = useState("")
  return (
    <Shell activeResource="chat" section="WORK" title="Chat">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Case conversations</h1>
      <div className="mt-8 grid min-h-[640px] gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="border border-border bg-panel p-4">
          <p className="mw-meta text-muted-foreground">Channels</p>
          {["# mw-0042", "# research", "# legal-review"].map((item, index) => (
            <button key={item} type="button" onClick={() => setChannel(item)} className={`mw-link mt-2 w-full px-3 text-left text-sm ${channel === item ? "bg-card font-bold text-primary" : "text-muted-foreground"}`}>
              {item}{index === 0 ? <Badge variant="info">3</Badge> : null}
            </button>
          ))}
        </aside>
        <section className="flex flex-col border border-border bg-card">
          <div className="border-b border-border p-4"><strong>{channel}</strong></div>
          <div className="flex-1 space-y-6 p-5">
            <article><strong className="text-sm">Rocksoul</strong><p className="mt-2 text-sm">Identity match is still the blocker.</p></article>
            <article><strong className="text-sm">Mira</strong><p className="mt-2 text-sm">I linked the source fragment. Provenance is complete.</p></article>
          </div>
          <form className="border-t border-border p-4" onSubmit={(event) => { event.preventDefault(); if (!message.trim()) return; void actions?.onChatSend?.({ channel, message: message.trim() }); setMessage("") }}>
            <Textarea label={`Message ${channel}…`} value={message} onChange={(event) => setMessage(event.currentTarget.value)} maxLength={800} characterCount placeholder={`Message ${channel}…`} />
            <div className="mt-3 flex justify-end"><Button type="submit" disabled={!message.trim()}>Send</Button></div>
          </form>
        </section>
      </div>
    </Shell>
  )
}

export function AIWorkspaceScreen({ actions }: { actions?: ApplicationActions } = {}) {
  const [prompt, setPrompt] = useState("")
  return (
    <Shell activeResource="ai" section="WORK" title="AI Workspace">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">AI Workspace</h1>
      <p className="mt-3 text-sm text-muted-foreground">Ask across records. Keep citations visible. Never collapse uncertainty.</p>
      <div className="mt-8 grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <section className="flex min-h-[620px] flex-col border border-border bg-card p-5">
          <p className="mw-meta text-muted-foreground">Conversation</p>
          <article className="mt-6 border-l-2 border-info pl-4"><p className="mw-meta text-info">You</p><p className="mt-2 text-sm">Why is MW-0042 still unresolved?</p></article>
          <article className="mt-6 border-l-2 border-primary pl-4"><p className="mw-meta text-primary">MoonWitness AI</p><p className="mt-2 text-sm leading-7">Temporal and motif signals are strong, but identity remains partial.</p><p className="mt-2 text-sm leading-7">The legal layer also has unresolved jurisdiction.</p><div className="mt-5 border-t border-border pt-4"><p className="mw-meta text-muted-foreground">Citations</p><p className="mt-2 font-mono text-xs">EVENT-0042-A · PERSON-0042-A · AWS-0042-A</p></div><p className="mw-meta mt-5 border-l-2 border-warning pl-3 text-warning">Correlation supports investigation, not closure.</p></article>
          <form className="mt-auto border-t border-border pt-4" onSubmit={(event) => { event.preventDefault(); if (!prompt.trim()) return; void actions?.onAIAsk?.({ caseId: "MW-0042", prompt: prompt.trim() }); setPrompt("") }}>
            <Textarea label="Ask with case context…" value={prompt} onChange={(event) => setPrompt(event.currentTarget.value)} maxLength={1200} characterCount placeholder="Ask with case context…" />
            <Button className="mt-3" type="submit" disabled={!prompt.trim()}>Ask</Button>
          </form>
        </section>
        <aside className="border border-border bg-panel p-5"><p className="mw-meta text-muted-foreground">Context</p><dl className="mt-5 grid gap-5 text-sm"><div><dt className="mw-meta text-muted-foreground">Case</dt><dd className="mt-2 font-bold">MW-0042 / The Silent Flight</dd></div><div><dt className="mw-meta text-muted-foreground">Sources</dt><dd className="mt-2">4 canonical records</dd></div><div><dt className="mw-meta text-muted-foreground">Legal</dt><dd className="mt-2">2 legal instruments</dd></div><div><dt className="mw-meta text-muted-foreground">Community</dt><dd className="mt-2">17 discussions</dd></div></dl></aside>
      </div>
    </Shell>
  )
}

const resourceAccess: Record<string, string> = {
  case: "READ / WRITE",
  event: "READ / WRITE",
  person: "READ / REVIEW",
  rgbl: "READ / WRITE",
  aws: "REVIEWER+",
  perspective: "READ / ANALYZE",
  correlation: "READ / ANALYZE",
}

export function ResourcesScreen() {
  return (
    <Shell activeResource="resources" section="DATA" title="Resources">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Resource navigation</h1>
      <p className="mt-3 text-sm text-muted-foreground">AutoMenu-driven. Routes are generated from resource descriptors and permissions.</p>

      <section className="mt-8 border border-border bg-card p-5">
        <p className="mw-meta text-primary">Auto Menu</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead><tr className="border-b border-border">{["Resource","Route","Repository","Access"].map((head)=><th key={head} className="p-3 mw-meta text-muted-foreground">{head}</th>)}</tr></thead>
            <tbody>
              {resourceDescriptors.map((item) => (
                <tr key={item.resource} className="border-b border-border">
                  <th className="p-4 text-sm">{item.label}</th>
                  <td className="p-4 font-mono text-xs">{item.path}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{item.repo}</td>
                  <td className="p-4"><Badge variant={item.resource === "aws" ? "partial" : item.resource === "correlation" || item.resource === "perspective" ? "info" : "verified"}>{resourceAccess[item.resource]}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mw-meta mt-6 border-l-2 border-primary pl-4 text-muted-foreground">
        RULE / If a resource is registered and allowed, AutoMenu exposes it. No hand-maintained duplicate nav.
      </p>
    </Shell>
  )
}

export function ProfileSettingsScreen({ actions }: { actions?: ApplicationActions } = {}) {
  const [section, setSection] = useState("Profile")
  const [displayName, setDisplayName] = useState("Rocksoul")
  const sections = ["Profile", "Appearance", "Notifications", "Security", "API / Integrations"]
  return (
    <Shell activeResource="settings" section="ACCOUNT" title="Profile / Settings">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Profile & Settings</h1>

      <div className="mt-8 grid gap-5 lg:grid-cols-[330px_1fr]">
        <aside className="border border-border bg-card p-6">
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">RS</span>
            <div><strong>Rocksoul</strong><p className="mw-meta mt-1 text-muted-foreground">researcher</p></div>
          </div>
          <nav className="mt-5 grid">
            {sections.map((item) => <button key={item} type="button" onClick={() => setSection(item)} className={`mw-link w-full px-3 text-left text-sm ${section === item ? "font-bold text-primary" : "text-muted-foreground"}`}>{item}</button>)}
          </nav>
        </aside>

        <section className="border border-border bg-card p-6">
          <h2 className="text-xl font-bold">{section}</h2>
          {section === "Profile" ? (
            <div className="mt-6 grid max-w-xl gap-5"><Input label="Display name" value={displayName} onChange={(event) => setDisplayName(event.currentTarget.value)} /><Input label="Role" readOnly value="researcher" /><Button onClick={() => void actions?.onSaveProfile?.({ displayName })}>Save profile</Button></div>
          ) : null}
          {section === "Appearance" ? (
            <div className="mt-6"><p className="mw-meta text-muted-foreground">Theme / Light · Dark · System</p><div className="mt-4"><ThemeToggle /></div></div>
          ) : null}
          {section === "Notifications" ? (
            <div className="mt-6 max-w-xl"><Switch label="Case updates" defaultChecked /><Switch label="Mentions and review assignments" defaultChecked /></div>
          ) : null}
          {section === "Security" ? (
            <div className="mt-6 grid max-w-xl gap-4"><Input label="Current session" readOnly value="Current browser / fixture" /><Button variant="danger" onClick={() => void actions?.onSignOutOtherSessions?.()}>Sign out other sessions</Button></div>
          ) : null}
          {section === "API / Integrations" ? (
            <div className="mt-6 grid max-w-xl gap-4"><StatePanel state="empty" /><Button variant="secondary" onClick={() => void actions?.onAddIntegration?.()}>Add integration</Button></div>
          ) : null}
        </section>
      </div>
    </Shell>
  )
}

export function AuthorizationScreen({ actions }: { actions?: ApplicationActions } = {}) {
  const capabilities: Array<[string, string, "verified" | "partial" | "prohibited"]> = [
    ["View canonical records", "ALLOWED", "verified"],
    ["Request context", "ALLOWED", "verified"],
    ["Resolve identity blocker", "REQUIRES EVIDENCE", "partial"],
    ["Publish legal conclusion", "LEGAL REVIEWER+", "prohibited"],
  ]
  return (
    <Shell activeResource="settings" section="SECURITY" title="Authorization UX">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Authorization UX</h1>
      <p className="mt-3 text-sm text-muted-foreground">Permissions are explained before actions fail.</p>

      <section className="mt-8 border border-border bg-card p-6">
        <h2 className="text-lg font-bold">Role: Researcher</h2>
        <p className="mt-2 text-sm text-muted-foreground">Can inspect and review evidence. Cannot publish legal decisions.</p>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_.7fr]">
          <div className="grid">
            <div className="grid grid-cols-[1fr_180px] border-b border-border py-3 mw-meta text-muted-foreground"><span>Capability</span><span>Access</span></div>
            {capabilities.map(([capability, access, tone]) => (
              <div key={capability} className="grid grid-cols-[1fr_180px] items-center border-b border-border py-4 text-sm">
                <span>{capability}</span><Badge variant={tone}>{access}</Badge>
              </div>
            ))}
          </div>
          <div className="border border-primary bg-background p-6">
            <p className="mw-meta text-primary">Action blocked</p>
            <h3 className="mt-4 text-lg font-bold">You can’t publish this decision.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Legal Reviewer or Admin is required.</p>
            <Button className="mt-6" variant="danger" onClick={() => void actions?.onRequestAccess?.({ permission: "legal:publish", currentRole: "researcher" })}>Request access</Button>
          </div>
        </div>
      </section>
    </Shell>
  )
}

export function ApplicationStatesScreen() {
  return (
    <Shell activeResource="dashboard" section="SYSTEM" title="System States" backendState="offline">
      <h1 className="mw-display text-4xl font-black uppercase sm:text-[38px]">Error / Empty / Loading / Offline / Forbidden</h1>
      <p className="mt-3 text-sm text-muted-foreground">One recovery language across every resource.</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
        <StatePanel state="error" traceId="TRACE-0042-QUERY" />
        <StatePanel state="empty" />
        <StatePanel state="loading" />
        <StatePanel state="offline" lastKnownState="42 cases cached at 05:32" />
        <StatePanel state="forbidden" requiredPermission="legal:publish" currentRole="researcher" />
      </div>
    </Shell>
  )
}

export function CommandPaletteReferenceScreen() {
  return (
    <>
      <DashboardScreen />
      <CommandPalette open onClose={() => undefined} resources={applicationResources} permissions={defaultApplicationPermissions} />
    </>
  )
}

export function NotificationsReferenceScreen() {
  return (
    <>
      <DashboardScreen />
      <NotificationsPanel open onClose={() => undefined} notifications={applicationNotifications} />
    </>
  )
}
