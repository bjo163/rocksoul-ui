import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../components/button"

const meta = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Enter the case",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Danger: Story = { args: { variant: "danger", children: "Keep case open" } }
export const Disabled: Story = { args: { disabled: true } }
