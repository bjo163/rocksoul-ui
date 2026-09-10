import { useState, type ReactNode } from "react"
import { cn } from "../../lib/cn"
import { Tabs as PrimitiveTabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

/** @deprecated Compose Tabs, TabsList, TabsTrigger and TabsContent from components/ui/tabs. */
export function Tabs({ items, variant = "underline" }: {
  items: TabItem[]
  variant?: "underline" | "archive"
}) {
  const first = items.find(item => !item.disabled)?.id ?? ""
  const [selected, setSelected] = useState(first)
  const active = items.some(item => item.id === selected && !item.disabled) ? selected : first
  return <PrimitiveTabs value={active} onValueChange={setSelected}>
    <TabsList aria-label="Sections" variant="line" className="h-auto flex-wrap border-b border-border">
      {items.map(item => <TabsTrigger key={item.id} value={item.id} disabled={item.disabled}
        className={cn("mw-touch px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em]",
          variant === "archive" ? "data-[state=active]:bg-panel" : "data-[state=active]:border-b-2 data-[state=active]:border-primary")}>
        {item.label}
      </TabsTrigger>)}
    </TabsList>
    {items.map(item => <TabsContent key={item.id} value={item.id} forceMount hidden={item.id !== active} className="pt-4">{item.content}</TabsContent>)}
  </PrimitiveTabs>
}
