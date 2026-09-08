import type { Meta, StoryObj } from "@storybook/react"
import { moonWitnessCandidateAssets } from "../contracts/assets-candidate"
import { MoonWitnessCandidateAssetImage } from "../components/candidate-asset-provider"

function CandidateGallery() {
  const packs = Object.entries(moonWitnessCandidateAssets.packs) as Array<
    [keyof typeof moonWitnessCandidateAssets.packs, { svg?: Record<string, string>; png?: Record<string, string>; count: number }]
  >

  return (
    <main className="min-h-screen bg-background p-6 text-foreground">
      <p className="mw-eyebrow text-warning">MoonWitness visual language / candidate v1.3</p>
      <h1 className="mw-display mt-3 text-4xl font-black uppercase">40 packs. 587 canonical assets.</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
        This gallery follows the unreleased rocksoul-assets candidate branch. Stable application defaults remain on v1.2 until upstream promotion.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {packs.map(([packId, pack]) => {
          const first = Object.keys(pack.svg ?? {})[0]
          return (
            <article key={String(packId)} className="border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="mw-meta text-primary">{String(packId)}</p>
                <span className="mw-meta text-muted-foreground">{pack.count}</span>
              </div>
              <div className="mt-4 flex min-h-36 items-center justify-center overflow-hidden bg-panel p-3">
                {first ? (
                  <MoonWitnessCandidateAssetImage
                    pack={packId}
                    assetId={first}
                    alt={`${String(packId)} / ${first}`}
                    className="max-h-40 max-w-full"
                  />
                ) : (
                  <span className="mw-meta text-muted-foreground">No SVG preview</span>
                )}
              </div>
              <p className="mt-3 truncate font-mono text-[10px] text-muted-foreground">{first ?? "delivery-only"}</p>
            </article>
          )
        })}
      </div>
    </main>
  )
}

const meta = {
  title: "Assets/v1.3 Candidate Gallery",
  component: CandidateGallery,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CandidateGallery>

export default meta
type Story = StoryObj<typeof meta>
export const AllPacks: Story = {}
