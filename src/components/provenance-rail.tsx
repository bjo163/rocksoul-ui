import { MoonWitnessResilientImage } from "./asset-provider"
import { semanticPrimitiveByNodeKind, semanticPrimitiveUrl } from "../contracts/semantic-asset-map"
import { cn } from "../lib/cn"
import { Button } from "./ui/button"

export type ProvenanceNodeKind = "story" | "claim" | "evidence" | "source" | "text" | "event" | "person" | "law" | "case" | "location"

export interface ProvenanceRailNode {
  id: string
  kind: ProvenanceNodeKind
  label: string
  detail?: string
  active?: boolean
  unresolved?: boolean
  external?: boolean
}

export interface ProvenanceRailProps {
  nodes: ProvenanceRailNode[]
  orientation?: "horizontal" | "vertical"
  className?: string
  description?: string
  onActivate?: (node: ProvenanceRailNode) => void
}

export function ProvenanceRail({
  nodes,
  orientation = "horizontal",
  className,
  description,
  onActivate,
}: ProvenanceRailProps) {
  const horizontal = orientation === "horizontal"
  const textEquivalent = description ?? nodes.map((node) => `${node.kind}: ${node.label}`).join(" → ")

  return (
    <section className={cn("border border-border bg-card p-4", className)} aria-label="Provenance rail">
      <div className={cn("flex gap-3", horizontal ? "items-stretch overflow-x-auto" : "flex-col")}>
        {nodes.map((node, index) => (
          <div key={node.id} className={cn("flex", horizontal ? "items-center" : "flex-col")}>
            <Button
              type="button"
              onClick={() => onActivate?.(node)}
              className={cn(
                "grid min-h-20 min-w-[150px] grid-cols-[32px_1fr] items-center gap-3 border bg-background p-3 text-left",
                node.active ? "border-primary" : "border-border",
                node.unresolved && "border-dashed border-warning",
                node.external && "shadow-[inset_0_-2px_var(--mw-status-info)]",
              )}
            >
              <MoonWitnessResilientImage src={semanticPrimitiveUrl(semanticPrimitiveByNodeKind[node.kind])} alt="" aria-hidden="true" className="h-8 w-8" />
              <span>
                <span className="mw-meta block text-primary">{node.kind}</span>
                <strong className="mt-1 block text-sm text-foreground">{node.label}</strong>
                {node.detail ? <small className="mt-1 block text-[10px] leading-4 text-muted-foreground">{node.detail}</small> : null}
              </span>
            </Button>
            {index < nodes.length - 1 ? (
              <span aria-hidden="true" className={cn("shrink-0 text-primary", horizontal ? "px-2 text-xl" : "self-center py-2")}>→</span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-border pt-3 text-xs leading-5 text-muted-foreground"><strong className="text-foreground">Text equivalent:</strong> {textEquivalent}</p>
    </section>
  )
}
