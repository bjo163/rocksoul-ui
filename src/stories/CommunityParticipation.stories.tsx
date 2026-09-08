import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CommunitySourceLocatorLink,
  MoonWitnessCommunityParticipationAsset,
  communityParticipationAssetIds,
} from "../components/community-participation"

const meta = {
  title: "Community/Participation Visual Contract",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const VisualMatrix: Story = {
  render: () => (
    <div className="mw-shell-wide min-h-screen bg-background py-10 text-foreground">
      <p className="mw-eyebrow text-primary">COMMUNITY / PARTICIPATION ASSET CONTRACT</p>
      <h1 className="mw-display mt-4 text-4xl font-black uppercase">Participation stays visually distinct from canon.</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {communityParticipationAssetIds.map((asset) => (
          <article key={asset} className="border border-border bg-card p-5">
            <MoonWitnessCommunityParticipationAsset asset={asset} alt={asset.replaceAll("-", " ")} className="h-32 w-full object-contain" />
            <p className="mw-meta mt-4 text-muted-foreground">{asset}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-3 border border-border bg-card p-5">
        <CommunitySourceLocatorLink source="CASE/MW-0042" />
        <CommunitySourceLocatorLink source="COMMUNITY-RULES/PROVENANCE" />
        <CommunitySourceLocatorLink source="https://example.org/source" />
        <CommunitySourceLocatorLink source="OPAQUE-LOCATOR" />
      </div>
    </div>
  ),
}
