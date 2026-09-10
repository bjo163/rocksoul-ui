import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatusBadge } from "../components/feedback/status-badge"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Separator } from "../components/ui/separator"
import { Skeleton } from "../components/ui/skeleton"
import { Switch } from "../components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { SurfaceAvatar, SurfaceDialog, SurfaceDrawer, SurfaceInput, SurfaceSelect, SurfaceTextarea } from "../components/patterns/surface-primitives"

const meta = { title: "QA/Primitive Contract Matrix", parameters: { layout: "fullscreen" } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ButtonsAndBadges: Story = {
  render: () => <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground"><p className="mw-eyebrow text-primary">Buttons / variants / sizes / states</p><div className="mt-4 flex flex-wrap gap-3">{(["default", "secondary", "ghost", "destructive"] as const).map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}<Button size="sm">small</Button><Button size="lg">large</Button><Button disabled>disabled</Button></div><p className="mw-eyebrow mt-10 text-primary">Badges</p><div className="mt-4 flex flex-wrap gap-2">{(["supported", "verified", "contested", "partial", "unresolved", "restricted", "prohibited", "info", "neutral"] as const).map((state) => <StatusBadge key={state} variant={state}>{state}</StatusBadge>)}</div></div>,
}

export const FieldsAndSelection: Story = {
  render: () => <div className="mw-shell-wide grid min-h-screen gap-6 bg-background py-10 text-foreground lg:grid-cols-2"><div className="grid content-start gap-4"><SurfaceInput label="Default input" placeholder="Record ID" /><SurfaceInput label="Filled" defaultValue="SRC-STORY-0042-A" /><SurfaceTextarea label="Textarea" defaultValue="Not enough yet." /><SurfaceSelect aria-label="Select" label="Select" options={[{ label: "Supported", value: "supported" }, { label: "Partial", value: "partial" }]} /></div><div className="grid content-start gap-4"><Label htmlFor="matrix-email">Email</Label><Input id="matrix-email" type="email" /><label className="flex items-center gap-2"><Checkbox aria-label="Keep me signed in" />Keep me signed in</label><RadioGroup defaultValue="a" aria-label="Matrix radio"><label className="flex items-center gap-2"><RadioGroupItem value="a" />Radio A</label><label className="flex items-center gap-2"><RadioGroupItem value="b" />Radio B</label></RadioGroup><label className="flex items-center gap-2"><Switch aria-label="Notifications" />Notifications</label></div></div>,
}

function OverlayDemo() {
  const [dialog, setDialog] = useState(false)
  const [drawer, setDrawer] = useState(false)
  return <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground"><div className="flex flex-wrap gap-3"><Button variant="secondary" onClick={() => setDialog(true)}>Open dialog</Button><Button variant="ghost" onClick={() => setDrawer(true)}>Open drawer</Button></div><div className="mt-8 flex items-center gap-4"><SurfaceAvatar label="Initial User" size="sm" /><SurfaceAvatar label="Initial User" size="lg" /></div><div className="mt-8 grid gap-4"><Separator /><Skeleton className="h-4 w-48" /><Skeleton className="h-24 w-full" /></div><div className="mt-8"><Tabs defaultValue="one"><TabsList><TabsTrigger value="one">One</TabsTrigger><TabsTrigger value="two">Two</TabsTrigger></TabsList><TabsContent value="one">First panel</TabsContent><TabsContent value="two">Second panel</TabsContent></Tabs></div>{dialog ? <SurfaceDialog open title="Details" onClose={() => setDialog(false)} actions={<Button onClick={() => setDialog(false)}>Confirm</Button>}>Accessible modal state.</SurfaceDialog> : null}{drawer ? <SurfaceDrawer open title="Navigation" onClose={() => setDrawer(false)} footer={<Button onClick={() => setDrawer(false)}>Close</Button>}>Accessible drawer state.</SurfaceDrawer> : null}</div>
}

export const OverlaysAndUtility: Story = { render: () => <OverlayDemo /> }
