import type { Meta, StoryObj } from "@storybook/react-vite"
import { MoonWitnessAssetImage, MoonWitnessAssetProvider } from "../components/asset-provider"
import { MOONWITNESS_STABLE_REPOSITORY_BASE, ROCKSOUL_ASSETS_REGISTRY } from "../contracts/assets-registry"

const base = `${MOONWITNESS_STABLE_REPOSITORY_BASE}/moonwitness`

const samples = [
  ["Graph vector", "graph-vector", "svg/evidence-graph.svg"],
  ["Badge", "badge-status", "svg/verified.svg"],
  ["Source file", "source-file", "svg/pdf.svg"],
  ["Geospatial", "geospatial", "svg/map-pin.svg"],
  ["Persona", "persona-avatar", "svg/researcher.svg"],
  ["Onboarding", "onboarding", "svg/correlate-evidence.svg"],
  ["Notification", "notification", "svg/inbox-card.svg"],
  ["Editorial", "editorial", "svg/lunar-observatory.svg"],
] as const

function AssetPackGallery() {
  return (
    <MoonWitnessAssetProvider baseUrl={base}>
      <main className="min-h-screen bg-background p-6 text-foreground">
        <p className="mw-eyebrow text-primary">MoonWitness Asset Packs / registry</p>
        <h1 className="mw-display mt-3 text-4xl font-black uppercase">{ROCKSOUL_ASSETS_REGISTRY.packCount} packs. One consumption contract.</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Product UI prefers canonical SVG. Raster derivatives stay for external/raster-only delivery. SFX remains opt-in.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {samples.map(([label, pack, file]) => (
            <article key={label} className="border border-border bg-card p-4">
              <p className="mw-meta text-muted-foreground">{label}</p>
              <div className="mt-4 flex min-h-44 items-center justify-center overflow-hidden bg-panel p-4">
                <MoonWitnessAssetImage pack={pack} file={file} alt={label} className="max-h-48 max-w-full" />
              </div>
            </article>
          ))}
        </div>
        <section className="mt-6 border border-border bg-card p-5">
          <p className="mw-meta text-muted-foreground">SFX / explicit preview only</p>
          <audio className="mt-4 w-full" controls preload="none">
            <source src={`${base}/sfx/generated/notification.ogg`} type="audio/ogg" />
            <source src={`${base}/sfx/generated/notification.wav`} type="audio/wav" />
          </audio>
        </section>
      </main>
    </MoonWitnessAssetProvider>
  )
}

const meta = {
  title: "Assets/Registry Pack Gallery",
  component: AssetPackGallery,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AssetPackGallery>

export default meta
type Story = StoryObj<typeof meta>
export const Gallery: Story = {}
