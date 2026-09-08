import type { Meta, StoryObj } from "@storybook/react-vite"
import { MoonWitnessRuntimeMotion, moonWitnessRuntimeMotionIds } from "../components/runtime-motion"

function RuntimeMotionGallery() {
  return (
    <main className="min-h-screen bg-background p-6 text-foreground">
      <p className="mw-eyebrow text-primary">Runtime motion / v1.3</p>
      <h1 className="mw-display mt-3 text-4xl font-black uppercase">Motion that knows when to stop.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">WebM delivery is local and muted. Reduced-motion preference replaces animation with a semantic text fallback.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moonWitnessRuntimeMotionIds.map((id)=>(
          <article key={id} className="border border-border bg-card p-4">
            <MoonWitnessRuntimeMotion id={id} alt={id.replaceAll("-"," ")} className="h-40 w-full object-contain" />
            <p className="mw-meta mt-3 text-muted-foreground">{id}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

const meta = {
  title: "Assets/Runtime Motion v1.3",
  component: RuntimeMotionGallery,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof RuntimeMotionGallery>

export default meta
type Story = StoryObj<typeof meta>
export const Gallery: Story = {}
