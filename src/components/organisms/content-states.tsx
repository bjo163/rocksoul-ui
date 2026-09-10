import * as React from "react"
import { Button } from "../ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"
import { Spinner } from "../ui/spinner"
import { cn } from "../../lib/cn"

export type ContentStateProps = React.ComponentProps<typeof Empty> & {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  action?: React.ReactNode
}

function ContentState({ title, description, icon, action, className, ...props }: ContentStateProps) {
  return (
    <Empty className={cn("min-h-48", className)} {...props}>
      {icon ? <EmptyMedia variant="icon">{icon}</EmptyMedia> : null}
      <EmptyHeader>
        <EmptyTitle>{title}</EmptyTitle>
        {description ? <EmptyDescription>{description}</EmptyDescription> : null}
      </EmptyHeader>
      {action ? <EmptyContent>{action}</EmptyContent> : null}
    </Empty>
  )
}

export type EmptyStateProps = Omit<ContentStateProps, "icon"> & { icon?: React.ReactNode }

function EmptyState(props: EmptyStateProps) {
  return <ContentState data-slot="empty-state" {...props} />
}

export type ErrorStateProps = Omit<ContentStateProps, "action"> & {
  onRetry?: () => void
  retryLabel?: string
  action?: React.ReactNode
}

function ErrorState({ onRetry, retryLabel = "Try again", action, ...props }: ErrorStateProps) {
  const retry = onRetry ? <Button type="button" onClick={onRetry}>{retryLabel}</Button> : null
  return <ContentState data-slot="error-state" action={<>{retry}{action}</>} {...props} />
}

export type LoadingStateProps = Omit<ContentStateProps, "action" | "icon"> & { label?: string }

function LoadingState({ label = "Loading", ...props }: LoadingStateProps) {
  return <ContentState data-slot="loading-state" icon={<Spinner aria-label={label} />} {...props} />
}

export { ContentState, EmptyState, ErrorState, LoadingState }
