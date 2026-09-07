import type { Meta, StoryObj } from "@storybook/react-vite"
import { MW0042Overview } from "../screens/mw0042-overview"

const meta = {
  title: "QA/Responsive MW-0042",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Frame({ width }: { width: number }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div style={{ width, maxWidth: "100%", margin: "0 auto" }}>
        <MW0042Overview />
      </div>
    </div>
  )
}

export const Wide1440: Story = { render: () => <Frame width={1440} /> }
export const Desktop1024: Story = { render: () => <Frame width={1024} /> }
export const Tablet768: Story = { render: () => <Frame width={768} /> }
export const Mobile390: Story = { render: () => <Frame width={390} /> }
export const Minimum320: Story = { render: () => <Frame width={320} /> }
