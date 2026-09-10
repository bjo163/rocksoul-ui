"use client"

import * as React from "react"
import { cn } from "../../lib/cn"

export type PageHeaderProps = {
  title: React.ReactNode
  description?: React.ReactNode
  eyebrow?: React.ReactNode
  breadcrumbs?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

function PageHeader({ title, description, eyebrow, breadcrumbs, actions, className }: PageHeaderProps) {
  return (
    <header data-slot="page-header" className={cn("grid gap-4 border-b border-border pb-5 md:flex md:items-end md:justify-between", className)}>
      <div className="min-w-0 space-y-2">
        {breadcrumbs ? <div className="text-xs text-muted-foreground">{breadcrumbs}</div> : null}
        {eyebrow ? <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{eyebrow}</p> : null}
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  )
}

export type AppShellProps = {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  contentClassName?: string
}

/** Generic application frame. Navigation, routing, and data stay with the consumer. */
function AppShell({ header, sidebar, children, footer, className, contentClassName }: AppShellProps) {
  return (
    <div data-slot="app-shell" className={cn("min-h-screen bg-background text-foreground", className)}>
      {header ? <header data-slot="app-shell-header" className="border-b border-border">{header}</header> : null}
      <div className="flex min-h-[calc(100vh-1px)]">
        {sidebar ? <aside data-slot="app-shell-sidebar" className="hidden w-64 shrink-0 border-r border-border lg:block">{sidebar}</aside> : null}
        <main data-slot="app-shell-content" className={cn("min-w-0 flex-1", contentClassName)}>{children}</main>
      </div>
      {footer ? <footer data-slot="app-shell-footer" className="border-t border-border">{footer}</footer> : null}
    </div>
  )
}

export { AppShell, PageHeader }
