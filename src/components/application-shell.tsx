import { useEffect, useMemo, useState, type ReactNode } from "react"
import { Badge } from "./feedback/status-badge"
import { Button } from "./compat/button"
import { MoonWitnessBrand } from "./brand"
import { Input } from "./compat/form-controls"
import { Avatar, Dialog, Drawer, IconButton } from "./compat/overlays"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "../lib/cn"
import { v2NavigationItems, v2ResourceDescriptors } from "../contracts/assets-v2"
import { useApplicationActions } from "../contracts/interactions"
import { NavigationLink } from "./navigation"

export type BackendState = "online" | "degraded" | "offline"
export type ResourceGroup = "System" | "Resource" | "Workspace" | "Account"
export type SurfacePersonality = "operator" | "editorial"

export interface AppResource {
  id: string
  label: string
  href: string
  group: ResourceGroup
  description: string
  shortcut?: string
  resource?: string
  requiredPermission: string
}

export interface AppCommandAction {
  label: string
  href: string
  shortcut?: string
}

const descriptionById: Record<string, string> = {
  dashboard: "What changed, what needs attention, and what can wait.",
  cases: "Investigative case review.",
  kanban: "Move work, not evidence.",
  calendar: "Reviews, releases, and research checkpoints.",
  chat: "Case conversations and review context.",
  ai: "Ask across records while keeping citations visible.",
  resources: "AutoMenu resource descriptors and permissions.",
  profile: "Profile identity and preferences.",
  settings: "Appearance, notifications, security, and integrations.",
}

const shortcutById: Record<string, string> = {
  dashboard: "D",
  cases: "C",
  kanban: "K",
  calendar: "A",
  chat: "H",
  ai: "I",
  resources: "R",
  profile: "P",
  settings: "S",
}

const groupByKind: Record<string, ResourceGroup> = {
  system: "System",
  resource: "Resource",
  workspace: "Workspace",
  account: "Account",
}

export const applicationResources: AppResource[] = v2NavigationItems.map((item) => ({
  id: item.id,
  label: item.label,
  href: item.path,
  group: groupByKind[item.kind],
  description: descriptionById[item.id],
  shortcut: shortcutById[item.id],
  resource: "resource" in item ? item.resource : undefined,
  requiredPermission: item.permission,
}))

export const resourceDescriptors = v2ResourceDescriptors

export const defaultApplicationPermissions = [
  "authenticated",
  "case:read",
  "review:read",
  "community:read",
  "ai:use",
  "resource:read",
] as const

function canSee(resource: AppResource, permissions: readonly string[]) {
  return permissions.includes(resource.requiredPermission)
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex min-w-0 flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
            {index > 0 ? <span className="mw-meta text-muted-foreground" aria-hidden="true">/</span> : null}
            {item.href ? (
              <NavigationLink href={item.href} className="mw-link min-h-0 truncate font-mono text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground">
                {item.label}
              </NavigationLink>
            ) : (
              <span className="truncate font-mono text-[10px] font-bold uppercase">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function BackendStatus({ state, label = "Backend" }: { state: BackendState; label?: string }) {
  const variant = state === "online" ? "supported" : state === "degraded" ? "partial" : "contested"
  return <Badge variant={variant}>{label}: {state}</Badge>
}

export function AutoMenu({
  resources = applicationResources,
  activeId,
  compact = false,
  permissions = defaultApplicationPermissions,
  onNavigate,
}: {
  resources?: AppResource[]
  activeId?: string
  compact?: boolean
  permissions?: readonly string[]
  onNavigate?: () => void
}) {
  const visible = resources.filter((item) => canSee(item, permissions))
  return (
    <nav aria-label="Resource navigation" data-mode="AutoMenu">
      <div className="grid gap-1 p-2">
        {visible.map((item) => (
          <NavigationLink
            key={item.id}
            href={item.href}
            title={compact ? `${item.label} — ${item.description}` : undefined}
            aria-current={item.id === activeId ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "mw-link min-h-9 w-full rounded-[8px] no-underline",
              compact ? "justify-center px-2" : "justify-center px-2 lg:justify-start lg:px-3",
              item.id === activeId ? "bg-card font-bold text-foreground" : "text-muted-foreground hover:bg-card hover:text-foreground",
            )}
          >
            <span className={cn("mr-2 size-2 rounded-full", item.id === activeId ? "bg-primary" : "bg-unresolved")} aria-hidden="true" />
            {compact ? (
              <span className="font-mono text-[9px] font-black uppercase">{item.label.slice(0, 2)}</span>
            ) : (
              <>
                <span className="font-mono text-[9px] font-black uppercase lg:hidden">{item.label.slice(0, 2)}</span>
                <span className="hidden text-sm lg:inline">{item.label}</span>
              </>
            )}
          </NavigationLink>
        ))}
      </div>
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
  onMarkAllRead,
}: {
  open: boolean
  onClose: () => void
  notifications: AppNotification[]
  onMarkAllRead?: () => void | Promise<void>
}) {
  const actions = useApplicationActions()
  const markAllRead = onMarkAllRead ?? actions.onMarkAllNotificationsRead
  return (
    <Drawer open={open} title="Notifications" onClose={onClose} position="right" footer={<Button variant="secondary" onClick={onClose}>Close</Button>}>
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="mw-meta text-muted-foreground">{notifications.filter((item) => item.state === "unread").length} unread</p>
        <button type="button" className="mw-link min-h-0 font-mono text-[10px] font-bold uppercase text-primary" onClick={() => void markAllRead?.()}>Mark all read</button>
      </div>
      <div className="grid" data-state={notifications.length ? "unread" : "empty"}>
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
          <div className="p-6"><p className="mw-eyebrow text-muted-foreground">No notifications</p><p className="mt-3 text-sm">Nothing needs your attention.</p></div>
        )}
        {notifications.length ? <article className="border-b border-border p-4"><p className="mw-meta text-success">System</p><p className="mt-2 text-xs leading-5">All repositories synchronized.</p></article> : null}
      </div>
    </Drawer>
  )
}

export function UserMenu({ name, role }: { name: string; role: string }) {
  const actions = useApplicationActions()
  return (
    <details className="relative">
      <summary className="mw-touch flex cursor-pointer list-none items-center gap-2 rounded-full border border-border bg-background px-2">
        <Avatar label={name} size="sm" />
        <span className="hidden text-left xl:block"><span className="block text-xs font-bold">{name}</span><span className="mw-meta block text-muted-foreground">{role}</span></span>
      </summary>
      <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-56 border border-border bg-card p-2 shadow-lg">
        <NavigationLink href="/profile" className="mw-link w-full px-3 text-sm">Profile</NavigationLink>
        <NavigationLink href="/settings" className="mw-link w-full px-3 text-sm">Settings</NavigationLink>
        <button type="button" className="mw-link w-full px-3 text-left text-sm text-primary" onClick={() => void actions.onSignOut?.()}>Sign out</button>
      </div>
    </details>
  )
}

const defaultCommandActions: AppCommandAction[] = [
  { label: "Open case by ID", shortcut: "C", href: "/cases" },
  { label: "Create review task", shortcut: "R", href: "/work/kanban" },
  { label: "Ask AI Workspace", shortcut: "A", href: "/ai" },
]

export function CommandPalette({
  open,
  onClose,
  resources = applicationResources,
  permissions = defaultApplicationPermissions,
  quickActions = defaultCommandActions,
}: {
  open: boolean
  onClose: () => void
  resources?: AppResource[]
  permissions?: readonly string[]
  quickActions?: AppCommandAction[]
}) {
  const [query, setQuery] = useState("")
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return resources.filter((item) => canSee(item, permissions) && (!needle || `${item.label} ${item.description}`.toLowerCase().includes(needle)))
  }, [permissions, query, resources])

  return (
    <Dialog open={open} title="Command palette / ⌘K" onClose={onClose} size="lg">
      <Input label="Search actions, resources, cases" variant="search" size="lg" value={query} onChange={(event) => setQuery(event.currentTarget.value)} placeholder="Search actions, resources, cases…" autoFocus />

      <p className="mw-meta mt-5 text-muted-foreground">Quick actions</p>
      <div className="mt-3 grid border border-border">
        {quickActions.map((item) => (
          <NavigationLink key={item.label} href={item.href} className="grid min-h-13 grid-cols-[1fr_auto] items-center border-b border-border px-4 no-underline hover:bg-panel" onClick={onClose}>
            <span className="text-sm font-bold">{item.label}</span>
            <span className="mw-meta text-muted-foreground">{item.shortcut}</span>
          </NavigationLink>
        ))}
      </div>

      <p className="mw-meta mt-5 text-muted-foreground">Resources / Auto Menu</p>
      <div className="mt-3 grid max-h-[40vh] overflow-y-auto border border-border">
        {results.map((item) => (
          <NavigationLink key={item.id} href={item.href} className="grid min-h-14 grid-cols-[1fr_auto] gap-4 border-b border-border p-3 no-underline hover:bg-panel" onClick={onClose}>
            <span>
              <span className="block text-sm font-bold">{item.label}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{item.description}</span>
            </span>
            {item.shortcut ? <span className="mw-meta self-center text-muted-foreground">{item.shortcut}</span> : null}
          </NavigationLink>
        ))}
        {!results.length ? <p className="p-5 text-sm text-muted-foreground">No matching command.</p> : null}
      </div>
      <p className="mw-meta mt-4 text-muted-foreground">↑↓ Navigate / Enter open / Esc close</p>
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
    <header className="sticky top-0 z-30 border-b border-border bg-panel/95 backdrop-blur" role="banner">
      <div className="flex min-h-[68px] items-center gap-3 px-3 sm:px-5 lg:px-8">
        <IconButton label="Open navigation" className="md:hidden" onClick={onOpenMenu}>≡</IconButton>
        <div className="min-w-0 flex-1"><Breadcrumbs items={breadcrumbs} /></div>
        <div className="hidden sm:block"><BackendStatus state={backendState} /></div>
        <IconButton label="Open command palette" aria-keyshortcuts="Control+K Meta+K" onClick={onOpenCommands}>⌘</IconButton>
        <button type="button" className="mw-touch relative inline-flex items-center justify-center rounded-full border border-border bg-background px-3 font-mono text-[10px] font-bold uppercase" onClick={onOpenNotifications} aria-label={`Notifications, ${unreadCount} unread`}>
          {unreadCount || 0}
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
  user = { name: "Rocksoul", role: "researcher" },
  permissions = defaultApplicationPermissions,
  resources = applicationResources,
  notifications = [],
  commandActions,
  surfacePersonality = "operator",
}: {
  activeResource: string
  breadcrumbs: Array<{ label: string; href?: string }>
  children: ReactNode
  backendState?: BackendState
  user?: { name: string; role: string }
  permissions?: readonly string[]
  resources?: AppResource[]
  notifications?: AppNotification[]
  commandActions?: AppCommandAction[]
  surfacePersonality?: SurfacePersonality
}) {
  const [navOpen, setNavOpen] = useState(false)
  const [commandsOpen, setCommandsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const unreadCount = notifications.filter((item) => item.state === "unread").length

  useEffect(() => {
    const openPalette = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setCommandsOpen(true)
      }
    }
    window.addEventListener("keydown", openPalette)
    return () => window.removeEventListener("keydown", openPalette)
  }, [])

  return (
    <div className="mw-platform min-h-screen bg-background text-foreground" data-surface-personality={surfacePersonality}>
      <a href="#mw-main-content" className="fixed left-3 top-3 z-50 -translate-y-20 bg-primary px-4 py-3 text-sm font-bold text-primary-foreground focus:translate-y-0">Skip to main content</a>

      <div className="flex min-h-screen">
        <aside className={cn("relative hidden shrink-0 border-r border-border bg-panel md:block", compact ? "w-[72px]" : "w-[72px] lg:w-[220px]")} data-state={compact ? "compact" : "expanded"}>
          <div className="flex min-h-[112px] items-center justify-between border-b border-border px-3">
            <MoonWitnessBrand compact={compact} subtitle="APPLICATION" className={cn(!compact && "hidden lg:inline-flex")} />
            {!compact ? <MoonWitnessBrand compact className="lg:hidden" /> : null}
            <IconButton label={compact ? "Expand sidebar" : "Compact sidebar"} size="sm" variant="ghost" className="hidden lg:inline-flex" onClick={() => setCompact((value) => !value)}>{compact ? "›" : "‹"}</IconButton>
          </div>
          <AutoMenu resources={resources} activeId={activeResource} compact={compact} permissions={permissions} />
          <div className="absolute bottom-6 hidden px-4 lg:block">
            <p className="mw-meta text-muted-foreground">CMD K / COMMAND</p>
            <p className="mw-meta mt-3 text-muted-foreground">AUTO MENU / LIVE</p>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <AppTopbar breadcrumbs={breadcrumbs} backendState={backendState} user={user} unreadCount={unreadCount} onOpenMenu={() => setNavOpen(true)} onOpenCommands={() => setCommandsOpen(true)} onOpenNotifications={() => setNotificationsOpen(true)} />
          <main id="mw-main-content" className="min-w-0" tabIndex={-1}>{children}</main>
        </div>
      </div>

      <Drawer open={navOpen} title="Navigation" onClose={() => setNavOpen(false)} position="left">
        <MoonWitnessBrand subtitle="APPLICATION" className="mb-5" />
        <div className="mb-4"><BackendStatus state={backendState} /></div>
        <AutoMenu resources={resources} activeId={activeResource} permissions={permissions} onNavigate={() => setNavOpen(false)} />
      </Drawer>

      <CommandPalette open={commandsOpen} onClose={() => setCommandsOpen(false)} resources={resources} permissions={permissions} quickActions={commandActions} />
      <NotificationsPanel open={notificationsOpen} onClose={() => setNotificationsOpen(false)} notifications={notifications} />
    </div>
  )
}
