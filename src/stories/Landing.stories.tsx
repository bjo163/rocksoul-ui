import type { Meta, StoryObj } from "@storybook/react-vite"
import { LandingScreen } from "../screens/landing"

const meta = {
  title: "MoonWitness/Landing",
  component: LandingScreen,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LandingScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {}

export const Light: Story = {
  render: () => (
    <div data-theme="light">
      <LandingScreen />
    </div>
  ),
}
