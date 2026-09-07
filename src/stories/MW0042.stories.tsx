import type { Meta, StoryObj } from "@storybook/react-vite"
import { MW0042Overview } from "../screens/mw0042-overview"

const meta = {
  title: "Golden Cases/MW-0042/Overview",
  component: MW0042Overview,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MW0042Overview>

export default meta
type Story = StoryObj<typeof meta>

function Frame({ width, theme = "dark" }: { width: number; theme?: "dark" | "light" }) {
  return (
    <div data-theme={theme} className="min-h-screen bg-background p-4 text-foreground">
      <div style={{ width, maxWidth: "100%", margin: "0 auto" }}>
        <MW0042Overview />
      </div>
    </div>
  )
}

export const Desktop1440: Story = {
  render: () => <Frame width={1440} />,
}

export const Tablet768: Story = {
  render: () => <Frame width={768} />,
}

export const Mobile390: Story = {
  render: () => <Frame width={390} />,
}

export const LightMode: Story = {
  render: () => <Frame width={1440} theme="light" />,
}
