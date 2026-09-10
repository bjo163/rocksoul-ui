import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../components/ui/button"
import { Asset } from "../components/ui/asset"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { Switch } from "../components/ui/switch"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"
import { Progress } from "../components/ui/progress"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../components/ui/tooltip"

function PrimitiveShowcase({ theme }: { theme: "light" | "dark" }) {
  return <div data-theme={theme} className="w-full max-w-4xl bg-background p-8 text-foreground">
    <header className="mb-8 flex items-center gap-4">
      <Asset pack="product-icons" file="svg/domain/evidence.svg" alt="" className="size-10" />
      <div><h1 className="font-display text-2xl font-black">ROCKSOUL / UI</h1>
        <p className="font-mono text-xs text-muted-foreground">Composable primitives · owned assets · semantic tokens</p></div>
    </header>
    <div className="mb-8 flex flex-wrap gap-3">
      <Button>Review evidence</Button><Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button><Button variant="destructive">Remove</Button>
      <Button disabled>Disabled</Button>
    </div>
    <Tabs defaultValue="record"><TabsList aria-label="Showcase sections">
      <TabsTrigger value="record">Record</TabsTrigger><TabsTrigger value="details">Details</TabsTrigger>
    </TabsList><TabsContent value="record">
      <Card><CardHeader><CardTitle>Evidence intake <Badge variant="outline">Draft</Badge></CardTitle>
        <CardDescription>ROCKSOUL components share the existing product identity.</CardDescription></CardHeader>
        <CardContent className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor={`title-${theme}`}>Record title</Label><Input id={`title-${theme}`} placeholder="Enter title" /></div>
          <div className="space-y-2"><Label htmlFor={`status-${theme}`}>Status</Label><Select defaultValue="candidate"><SelectTrigger id={`status-${theme}`} className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="candidate">Candidate</SelectItem><SelectItem value="reviewed">Reviewed</SelectItem></SelectContent></Select></div>
          <Label><Checkbox /> Include provenance</Label><Label><Switch /> Notify reviewers</Label>
          <div className="space-y-2 sm:col-span-2"><Label>Review progress</Label><Progress value={60} aria-label="Review progress" /></div>
        </CardContent><CardFooter className="gap-3">
          <Dialog><DialogTrigger asChild><Button>Open review</Button></DialogTrigger>
            <DialogContent><DialogHeader><DialogTitle>Review evidence</DialogTitle><DialogDescription>Confirm provenance before publishing.</DialogDescription></DialogHeader><Input aria-label="Review note" placeholder="Add a note" /></DialogContent></Dialog>
          <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="ghost">Source policy</Button></TooltipTrigger><TooltipContent>Preserve source attribution.</TooltipContent></Tooltip></TooltipProvider>
        </CardFooter></Card>
    </TabsContent><TabsContent value="details">
      <Accordion type="single" collapsible><AccordionItem value="ownership"><AccordionTrigger>Asset ownership</AccordionTrigger><AccordionContent>Icons and imagery use ROCKSOUL assets; colors follow the active ROCKSOUL theme.</AccordionContent></AccordionItem></Accordion>
    </TabsContent></Tabs>
  </div>
}

const meta = { title: "ROCKSOUL UI/Primitives", component: PrimitiveShowcase, parameters: { layout: "fullscreen" }, args: { theme: "dark" } } satisfies Meta<typeof PrimitiveShowcase>
export default meta
type Story = StoryObj<typeof meta>
export const Dark: Story = {}
export const Light: Story = { args: { theme: "light" } }
