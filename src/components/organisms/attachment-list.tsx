import * as React from "react"
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from "../ui/attachment"
import { cn } from "../../lib/cn"

export type AttachmentListItem = {
  id: string
  name: React.ReactNode
  description?: React.ReactNode
  media?: React.ReactNode
  state?: "idle" | "uploading" | "processing" | "error" | "done"
  actions?: React.ReactNode
}

export type AttachmentListProps = React.ComponentProps<"div"> & {
  items: AttachmentListItem[]
  orientation?: "horizontal" | "vertical"
}

function AttachmentList({ items, orientation = "horizontal", className, ...props }: AttachmentListProps) {
  return (
    <AttachmentGroup data-slot="attachment-list" className={cn(orientation === "vertical" && "flex-col overflow-visible", className)} {...props}>
      {items.map(item => (
        <Attachment key={item.id} state={item.state} orientation={orientation} className={orientation === "vertical" ? "w-full" : undefined}>
          <AttachmentMedia variant={item.media ? "image" : "icon"}>{item.media}</AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{item.name}</AttachmentTitle>
            {item.description ? <AttachmentDescription>{item.description}</AttachmentDescription> : null}
          </AttachmentContent>
          {item.actions}
        </Attachment>
      ))}
    </AttachmentGroup>
  )
}

export { AttachmentList }
