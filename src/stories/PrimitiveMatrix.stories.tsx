import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "../components/badge"
import { Button } from "../components/button"
import { Checkbox, Input, Radio, Select, Switch, Textarea } from "../components/form-controls"
import { Avatar, Dialog, Divider, Drawer, IconButton, Skeleton, Tooltip } from "../components/overlays"
import { Tabs } from "../components/tabs"

const meta = {
  title: "QA/Primitive Contract Matrix",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ButtonsAndBadges: Story = {
  render: () => (
    <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">
      <p className="mw-eyebrow text-primary">Buttons / variants / sizes / states</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {(["primary","secondary","ghost","danger"] as const).map((variant) => (
          <Button key={variant} variant={variant}>{variant}</Button>
        ))}
        <Button size="sm">small</Button>
        <Button size="md">medium</Button>
        <Button size="lg">large</Button>
        <Button loading>loading</Button>
        <Button disabled>disabled</Button>
      </div>
      <p className="mw-eyebrow mt-10 text-primary">Icon button</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <IconButton label="Ghost action" variant="ghost">G</IconButton>
        <IconButton label="Outline action" variant="outline">O</IconButton>
        <IconButton label="Danger action" variant="danger">D</IconButton>
        <IconButton label="Loading action" loading>L</IconButton>
        <IconButton label="Disabled action" disabled>X</IconButton>
      </div>
      <p className="mw-eyebrow mt-10 text-primary">Badges</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(["supported","verified","contested","partial","unresolved","restricted","prohibited","info","neutral"] as const).map((state) => (
          <Badge key={state} variant={state}>{state}</Badge>
        ))}
      </div>
    </div>
  ),
}

export const FieldsAndSelection: Story = {
  render: () => (
    <div className="mw-shell-wide grid min-h-screen gap-6 bg-background py-10 text-foreground lg:grid-cols-2">
      <div className="grid content-start gap-4">
        <Input label="Default input" placeholder="Record ID" />
        <Input label="Search input" variant="search" size="lg" placeholder="Search source…" />
        <Input label="Filled" defaultValue="SRC-STORY-0042-A" />
        <Input label="Error" error="Source locator is required." />
        <Input label="Disabled" disabled defaultValue="Locked" />
        <Input label="Read only" readOnly defaultValue="Canonical" />
        <Textarea label="Textarea" maxLength={80} characterCount defaultValue="Not enough yet." />
        <Textarea label="Textarea error" error="Context is required." />
        <Select label="Select" options={[{label:"Supported",value:"supported"},{label:"Partial",value:"partial"}]} />
        <Select label="Disabled select" disabled options={[{label:"Locked",value:"locked"}]} />
      </div>
      <div className="content-start">
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Indeterminate" indeterminate />
        <Checkbox label="Disabled" disabled />
        <Radio name="matrix-radio" label="Radio A" defaultChecked />
        <Radio name="matrix-radio" label="Radio B" />
        <Switch label="Off" />
        <Switch label="On" defaultChecked />
        <Switch label="Disabled" disabled />
      </div>
    </div>
  ),
}

function OverlayDemo() {
  const [dialog, setDialog] = useState<"sm"|"md"|"lg"|null>(null)
  const [drawer, setDrawer] = useState<"left"|"right"|"bottom-mobile"|null>(null)
  return (
    <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">
      <div className="flex flex-wrap gap-3">
        {(["sm","md","lg"] as const).map((size) => <Button key={size} variant="secondary" onClick={()=>setDialog(size)}>Dialog {size}</Button>)}
        {(["left","right","bottom-mobile"] as const).map((position) => <Button key={position} variant="ghost" onClick={()=>setDrawer(position)}>Drawer {position}</Button>)}
        <Tooltip label="Non-essential helper" shortcut="⌘K"><Button variant="secondary">Tooltip</Button></Tooltip>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <Avatar label="Initial User" size="xs" />
        <Avatar label="Initial User" size="sm" status="online" />
        <Avatar label="Initial User" size="md" status="away" />
        <Avatar size="lg" status="offline" />
      </div>
      <div className="mt-8 grid gap-4">
        <Divider />
        <Divider variant="soft" />
        <Divider variant="legal-boundary" />
        <Skeleton variant="text" />
        <Skeleton variant="card" />
        <Skeleton variant="table-row" />
        <Skeleton variant="graph-node" />
      </div>
      <div className="mt-8">
        <Tabs variant="archive" items={[
          {id:"one",label:"One",content:<p>First panel</p>},
          {id:"two",label:"Two",content:<p>Second panel</p>},
          {id:"three",label:"Disabled",content:<p>Disabled</p>,disabled:true},
        ]} />
      </div>
      {dialog ? <Dialog open title={`Dialog ${dialog}`} size={dialog} onClose={()=>setDialog(null)}><p>Accessible modal state.</p></Dialog> : null}
      {drawer ? <Drawer open title={`Drawer ${drawer}`} position={drawer} onClose={()=>setDrawer(null)}><p>Accessible drawer state.</p></Drawer> : null}
    </div>
  )
}

export const OverlaysAndUtility: Story = { render: () => <OverlayDemo /> }
