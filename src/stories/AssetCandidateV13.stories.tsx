import type { Meta, StoryObj } from "@storybook/react"
import { AssetExplorer } from "../components/asset-explorer"

const meta = {
  title: "Assets/v1.3 Stable Registry",
  component: AssetExplorer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AssetExplorer>

export default meta
type Story = StoryObj<typeof meta>

export const AllPacks: Story = {
  args: {},
}

export const Investigation: Story = {
  args: { initialCategory: "Investigation" },
}

export const Compact: Story = {
  args: { compact: true },
}
