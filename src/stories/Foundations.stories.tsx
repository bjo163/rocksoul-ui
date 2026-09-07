import type { Meta, StoryObj } from "@storybook/react-vite"
import { DesignSystemScreen } from "../screens/design-system"

const meta = {
  title: "00 Foundations/Design System",
  component: DesignSystemScreen,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof DesignSystemScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {}
export const Light: Story = {
  render: () => <div data-theme="light"><DesignSystemScreen /></div>,
}
