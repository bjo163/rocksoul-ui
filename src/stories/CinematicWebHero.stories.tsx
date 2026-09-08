import type { Meta, StoryObj } from "@storybook/react-vite"
import { CinematicWebHero } from "../components/cinematic-web-hero"

const meta = {
  title: "Public/Cinematic Web Hero",
  component: CinematicWebHero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CinematicWebHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CaseSpecific: Story = {
  args: {
    eyebrow: <>CASE SIGNAL.<br />REVIEWED TRACES.<br />UNCERTAINTY VISIBLE.</>,
    title: ["THE TRAILS", "START TO ALIGN"],
    caseIndex: "MW / CASE / 0042",
  },
}
