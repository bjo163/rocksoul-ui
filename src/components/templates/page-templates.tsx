import * as React from "react"
import { cn } from "../../lib/cn"
import { PageHeader } from "./page-layout"

export type AuthLayoutProps = {
  children: React.ReactNode
  logo?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

function AuthLayout({ children, logo, title, description, footer, className }: AuthLayoutProps) {
  return (
    <main data-slot="auth-layout" className={cn("flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 py-8", className)}>
      <div className="w-full max-w-md space-y-6">
        {logo ? <div className="flex justify-center">{logo}</div> : null}
        {(title || description) ? <div className="space-y-2 text-center"><h1 className="text-2xl font-semibold tracking-tight">{title}</h1>{description ? <p className="text-sm text-muted-foreground">{description}</p> : null}</div> : null}
        {children}
        {footer ? <div className="text-center text-sm text-muted-foreground">{footer}</div> : null}
      </div>
    </main>
  )
}

export type PageTemplateProps = {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  header?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  contentClassName?: string
  dataSlot?: string
}

function TemplateFrame({ title, description, actions, header, children, footer, className, contentClassName, dataSlot = "page-template" }: PageTemplateProps) {
  return <div data-slot={dataSlot} className={cn("mx-auto flex w-full max-w-screen-2xl flex-col gap-6 p-6", className)}>
    {header ?? <PageHeader title={title} description={description} actions={actions} />}
    <section data-slot="page-template-content" className={cn("min-w-0", contentClassName)}>{children}</section>
    {footer ? <footer data-slot="page-template-footer">{footer}</footer> : null}
  </div>
}

export function ListPage(props: PageTemplateProps) { return <TemplateFrame dataSlot="list-page" {...props} /> }
export function DetailPage(props: PageTemplateProps) { return <TemplateFrame dataSlot="detail-page" {...props} /> }
export function DashboardPage(props: PageTemplateProps) { return <TemplateFrame dataSlot="dashboard-page" {...props} /> }

export type SplitViewPageProps = Omit<PageTemplateProps, "children"> & {
  primary: React.ReactNode
  secondary: React.ReactNode
  secondaryClassName?: string
}

function SplitViewPage({ primary, secondary, secondaryClassName, ...props }: SplitViewPageProps) {
  return <TemplateFrame dataSlot="split-view-page" {...props}>
    <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)]">
      <div data-slot="split-view-primary" className="min-w-0">{primary}</div>
      <aside data-slot="split-view-secondary" className={cn("min-w-0", secondaryClassName)}>{secondary}</aside>
    </div>
  </TemplateFrame>
}

export { AuthLayout, TemplateFrame }
