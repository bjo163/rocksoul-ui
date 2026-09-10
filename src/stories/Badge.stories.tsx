import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatusBadge } from "../components/feedback/status-badge"

const meta = {
  title: "Primitives/Badge",
  component: StatusBadge,
  args: {
    children: "unresolved",
  },
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Unresolved: Story = { args: { variant: "unresolved" } }
export const Supported: Story = { args: { variant: "supported", children: "supported" } }
export const Partial: Story = { args: { variant: "partial", children: "partial" } }
export const Disputed: Story = { args: { variant: "disputed", children: "disputed" } }
