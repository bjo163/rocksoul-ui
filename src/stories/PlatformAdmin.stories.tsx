import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlatformAdminVisual, PlatformBackendBoundary, PlatformRoleMatrix, PlatformServiceRegistry } from "../components/platform-admin"

const meta = { title: "Platform/Admin Contract" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const RoleMatrix: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><PlatformRoleMatrix currentRole="admin" /></div> }
export const RuntimeBoundary: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><PlatformBackendBoundary state="unconfigured" /></div> }
export const ServiceRegistry: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><PlatformServiceRegistry runtime={[{ id: "assets", state: "connected" }, { id: "ui", state: "connected" }, { id: "platform", state: "connected" }]} /></div> }
export const VisualContract: Story = { render: () => <div className="mw-platform min-h-screen bg-background p-8 text-foreground"><PlatformAdminVisual screen="dashboard" alt="Platform dashboard visual contract" className="w-full border border-border" /></div> }
