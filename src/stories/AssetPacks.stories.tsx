import type { Meta, StoryObj } from "@storybook/react"

const samples = [
  ["Product icon", "/assets/icons/svg/navigation/dashboard.svg"],
  ["Dashboard widget", "/assets/dashboard-pack/widgets/correlation-insight.svg"],
  ["Data viz", "/assets/data-viz/charts/node-link-correlation.svg"],
  ["Hero background", "/assets/hero-backgrounds/svg/observatory-grid.svg"],
  ["State illustration", "/assets/state-illustrations/svg/offline-backend.svg"],
  ["Motion reference", "/assets/motion/svg/observatory-ring.svg"],
] as const

function AssetPackGallery() {
  return (
    <main className="min-h-screen bg-background p-6 text-foreground">
      <p className="mw-eyebrow text-primary">MoonWitness Asset Packs / v1.1.0</p>
      <h1 className="mw-display mt-3 text-4xl font-black uppercase">Design once. Trace everywhere.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Representative production assets mirrored byte-for-byte from rocksoul-assets. SFX is opt-in and never autoplayed.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {samples.map(([label, src]) => (
          <article key={label} className="border border-border bg-card p-4">
            <p className="mw-meta text-muted-foreground">{label}</p>
            <div className="mt-4 flex min-h-48 items-center justify-center overflow-hidden bg-panel p-4">
              <img src={src} alt={label} className="max-h-56 max-w-full" />
            </div>
          </article>
        ))}
      </div>
      <section className="mt-6 border border-border bg-card p-5">
        <p className="mw-meta text-muted-foreground">SFX / explicit preview only</p>
        <audio className="mt-4 w-full" controls preload="none">
          <source src="/assets/sfx/generated/notification.ogg" type="audio/ogg" />
          <source src="/assets/sfx/generated/notification.wav" type="audio/wav" />
        </audio>
      </section>
    </main>
  )
}

const meta = {
  title: "Assets/v1.1 Pack Gallery",
  component: AssetPackGallery,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AssetPackGallery>

export default meta
type Story = StoryObj<typeof meta>
export const Gallery: Story = {}
