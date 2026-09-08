import type { Meta, StoryObj } from "@storybook/react"
import { ResearchDomainOwnershipMap } from "../components/research-domain-ownership-map"

const meta = {
  title: "Domains/Research Ownership Map",
  component: ResearchDomainOwnershipMap,
  parameters: { layout: "fullscreen" },
  args: {
    className: "m-6",
  },
} satisfies Meta<typeof ResearchDomainOwnershipMap>

export default meta
type Story = StoryObj<typeof meta>

export const CanonicalOwnership: Story = {}
