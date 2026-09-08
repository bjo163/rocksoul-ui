import { useMemo, useState, type ReactNode } from "react"
import { Badge } from "./badge"
import { Button } from "./button"
import { Input } from "./form-controls"
import { Avatar, Dialog, Drawer, IconButton } from "./overlays"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "../lib/cn"

export type BackendState = "online" | "degraded" | "offline"
export type ResourceGroup = "Research" | "Workspaces" | "Account" | "System"

export interface AppResource {
  id: string
  label: string
  href: string
  group: ResourceGroup
  description: string
  shortcut?: string
  badge?: string
  requiredPermission?: string
}

export const applicationResources: AppResource[] = [
  { id: "dashboard", label: "Dashboard", href: "#dashboard", group: "Research", description: "Overview, metrics, recent activity.", shortcut: "D" },
  { id: "cases", label: "Cases", href: "#cases", group: "Research", description: "Investigative case review.", shortcut: "C" },
  { id: "repositories", label: "Repositories", href: "#repositories", group: "Research", description: "Source repository health.", shortcut: "R" },
  { id: "evidence", label: "Evidence", href: "#evidence", group: "Research", description: "Inspect provenance and source trails.", shortcut: "E" },
  { id: "correlation", label: "Correlation", href: "#correlation", group: "Research", description: "Relationship and Mizan review.", shortcut: "M" },
  { id: "legal", label: "Legal", href: "#legal", group: "Research", description: "AWS legal/regulatory layer.", shortcut: "L" },
  { id: "kanban", label: "Kanban", href: "#kanban", group: "Workspaces", description: "Research work board.", shortcut: "K" },
  { id: "calendar", label: "Calendar", href: "#calendar", group: "Workspaces", description: "Review windows and scheduled work.", shortcut: "A" },
  { id: "chat", label: "Chat", href: "#chat", group: "Workspaces", description: "Team discussion and review context.", shortcut: "H" },
  { id: "ai-workspace", label: "AI Workspace", href: "#ai-workspace", group: "Workspaces", description: "Evidence-aware analysis workspace.", shortcut: "I" },
  { id: "community", label: "Community", href: "#community", group: "Workspaces", description: "Discussion and context submissions." },
  { id: "profile", label: "Profile / Settings", href: "#profile", group: "Account", description: "Identity and preferences." },
  { id: "authorization", label: "Authorization", href: "#authorization", group: "System", description: "Roles, permissions, and access states.", requiredPermission: "authz:read" },
  { id: "audit", label: "Audit", href: "#audit", group: "System", description: "Review and action history.", requiredPermission: "audit:read" },
]

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex min-w-0 flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
            {index > 0 ? <span className="mw-meta text-muted-foreground" aria-hidden="true">/</span> : null}
            {item.href ? (
              <a href={item.href} className="mw-link min-h-0 truncate font-mono text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            ) : (
              <span className="truncate font-mono text-[10px] font-bold uppercase">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function BackendStatus({
  state,
  label = "Backend",
}: {
  state: BackendState
  label?: string
}) {
  const variant = state === "online" ? "supported" : state === "degraded" ? "partial" : "contested"
  return <Badge variant={variant}>{label}: {state}</Badge>
}

export function AutoMenu({
  resources = applicationResources,
  activeId,
  compact = false,
  permissions = [],
  onNavigate,
}: {
  resources?: AppResource[]
  activeId?: string
  compact?: boolean
  permissions?: string[]
  onNavigate?: () => void
}) {
  const visible = resources.filter((item) => !item.requiredPermission || permissions.includes(item.requiredPermission))
  const groups = Array.from(new Set(visible.map((item) => item.group)))

  return (
    <nav aria-label="Resource navigation" className="grid">
      {groups.map((group) => (
        <section key={group} className="border-b border-border py-2">
          {!compact ? <p className="mw-meta px-3 py-2 text-muted-foreground">{group}</p> : null}
          {visible.filter((item) => item.group === group).map((item) => (
            <a
              key={item.id}
              href={item.href}
              title={compact ? `${item.label} — ${item.description}` : undefined}
              aria-current={item.id === activeId ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "mw-link w-full gap-3 no-underline",
                compact ? "justify-center px-2" : "px-3",
                item.id === activeId ? "bg-card font-bold text-primary" : "text-muted-foreground hover:bg-card hover:text-foreground",
              )}
            >
              <span className="font-mono text-[10px] font-black uppercase">
                {compact ? item.label.slice(0, 2) : item.label}
              </span>
              {!compact && item.badge ? <Badge variant="info">{item.badge}</Badge> : null}
            </a>
          ))}
        </section>
      ))}
    </nav>
  )
}

export interface AppNotification {
  id: string
  title: string
  body: string
  state: "unread" | "read"
  variant: "case-update" | "reply" | "review" | "system"
}

export function NotificationsPanel({
  open,
  onClose,
  notifications,
}: {
  open: boolean
  onClose: () => void
  notifications: AppNotification[]
}) {
  return (
    <Drawer
      open={open}
      title="Notifications"
      onClose={onClose}
      position="right"
      footer={<Button variant="secondary" onClick={onClose}>Close</Button>}
    >
      <div className="grid">
        {notifications.length ? notifications.map((item) => (
          <article key={item.id} className={cn("border-b border-border p-4", item.state === "unread" && "bg-panel")}>
            <div className="flex items-center justify-between gap-3">
              <strong className="text-sm">{item.title}</strong>
              <Badge variant={item.state === "unread" ? "info" : "neutral"}>{item.variant}</Badge>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.body}</p>
            <p className="mw-meta mt-3 text-muted-foreground">{item.state}</p>
          </article>
        )) : (
          <div className="p-6">
            <p className="mw-eyebrow text-muted-foreground">No notifications</p>
            <p className="mt-3 text-sm">Nothing needs your attention.</p>
          </div>
        )}
      </div>
    </Drawer>
  )
}

export function UserMenu({
  name,
  role,
}: {
  name: string
  role: string
}) {
  return (
    <details className="relative">
      <summary className="mw-touch flex cursor-pointer list-none items-center gap-2 border border-border bg-card px-2">
        <Avatar label={name} size="sm" />
        <span className="hidden text-left lg:block">
          <span className="block text-xs font-bold">{name}</span>
          <span className="mw-meta block text-muted-foreground">{role}</span>
        </span>
      </summary>
      <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-56 border border-border bg-card p-2 shadow-lg">
        <a href="#profile" className="mw-link w-full px-3 text-sm">Profile / Settings</a>
        <a href="#authorization" className="mw-link w-full px-3 text-sm">Authorization</a>
        <button type="button" className="mw-link w-full px-3 text-left text-sm text-primary">Sign out</button>
      </div>
    </details>
  )
}

export function CommandPalette({
  open,
  onClose,
  resources = applicationResources,
  permissions = [],
}: {
  open: boolean
  onClose: () => void
  resources?: AppResource[]
  permissions?: string[]
}) {
  const [query, setQuery] = useState("")
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return resources.filter((item) => {
      if (item.requiredPermission && !permissions.includes(item.requiredPermission)) return false
      return !needle || `${item.label} ${item.description}`.toLowerCase().includes(needle)
    })
  }, [permissions, query, resources])

  return (
    <Dialog open={open} title="Command palette" onClose={onClose} size="lg">
      <Input
        label="Search commands and resources"
        variant="search"
        size="lg"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Cases, Kanban, AI Workspace…"
        autoFocus
      />
      <div className="mt-4 grid max-h-[55vh] overflow-y-auto border border-border">
        {results.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="grid min-h-14 grid-cols-[1fr_auto] gap-4 border-b border-border p-3 no-underline hover:bg-panel"
            onClick={onClose}
          >
            <span>
              <span className="block text-sm font-bold">{item.label}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{item.description}</span>
            </span>
            {item.shortcut ? <span className="mw-meta self-center text-muted-foreground">{item.shortcut}</span> : null}
          </a>
        ))}
        {!results.length ? <p className="p-5 text-sm text-muted-foreground">No matching command.</p> : null}
      </div>
    </Dialog>
  )
}

export function AppTopbar({
  breadcrumbs,
  backendState,
  user,
  unreadCount,
  onOpenMenu,
  onOpenCommands,
  onOpenNotifications,
}: {
  breadcrumbs: Array<{ label: string; href?: string }>
  backendState: BackendState
  user: { name: string; role: string }
  unreadCount: number
  onOpenMenu: () => void
  onOpenCommands: () => void
  onOpenNotifications: () => void
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex min-h-16 items-center gap-3 px-3 sm:px-5">
        <IconButton label="Open navigation" className="md:hidden" onClick={onOpenMenu}>≡</IconButton>
        <div className="min-w-0 flex-1">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="hidden sm:block"><BackendStatus state={backendState} /></div>
        <IconButton label="Open command palette" onClick={onOpenCommands}>⌘</IconButton>
        <button
          type="button"
          className="mw-touch relative inline-flex items-center justify-center border border-border bg-card px-3 font-mono text-[10px] font-bold uppercase"
          onClick={onOpenNotifications}
          aria-label={`Notifications, ${unreadCount} unread`}
        >
          N
          {unreadCount ? <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-primary px-1 text-center text-[9px] text-white">{unreadCount}</span> : null}
        </button>
        <ThemeToggle />
        <UserMenu name={user.name} role={user.role} />
      </div>
    </header>
  )
}

export function ApplicationShell({
  activeResource,
  breadcrumbs,
  children,
  backendState = "online",
  user = { name: "Researcher", role: "reviewer" },
  permissions = ["authz:read", "audit:read"],
  resources = applicationResources,
  notifications = [],
}: {
  activeResource: string
  breadcrumbs: Array<{ label: string; href?: string }>
  children: ReactNode
  backendState?: BackendState
  user?: { name: string; role: string }
  permissions?: string[]
  resources?: AppResource[]
  notifications?: AppNotification[]
}) {
  const [navOpen, setNavOpen] = useState(false)
  const [commandsOpen, setCommandsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [compact, setCompact] = useState(true)
  const unreadCount = notifications.filter((item) => item.state === "unread").length

  return (
    <div className="mw-platform min-h-screen bg-background text-foreground">
      <AppTopbar
        breadcrumbs={breadcrumbs}
        backendState={backendState}
        user={user}
        unreadCount={unreadCount}
        onOpenMenu={() => setNavOpen(true)}
        onOpenCommands={() => setCommandsOpen(true)}
        onOpenNotifications={() => setNotificationsOpen(true)}
      />

      <div className="flex min-h-[calc(100vh-64px)]">
        <aside className={cn("hidden shrink-0 border-r border-border bg-panel md:block", compact ? "w-[84px]" : "w-[272px]")}>
          <div className="flex min-h-14 items-center justify-between border-b border-border px-3">
            {!compact ? <strong className="text-sm">MOONWITNESS</strong> : <strong className="mw-meta text-primary">MW</strong>}
            <IconButton label={compact ? "Expand sidebar" : "Compact sidebar"} size="sm" variant="ghost" onClick={() => setCompact((value) => !value)}>
              {compact ? "›" : "‹"}
            </IconButton>
          </div>
          <AutoMenu resources={resources} activeId={activeResource} compact={compact} permissions={permissions} />
          <div className="border-t border-border p-3 sm:hidden">
            <BackendStatus state={backendState} />
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <Drawer open={navOpen} title="Navigation" onClose={() => setNavOpen(false)} position="left">
        <div className="mb-4"><BackendStatus state={backendState} /></div>
        <AutoMenu resources={resources} activeId={activeResource} permissions={permissions} onNavigate={() => setNavOpen(false)} />
      </Drawer>

      <CommandPalette open={commandsOpen} onClose={() => setCommandsOpen(false)} resources={resources} permissions={permissions} />
      <NotificationsPanel open={notificationsOpen} onClose={() => setNotificationsOpen(false)} notifications={notifications} />
    </div>
  )
}
