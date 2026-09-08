import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ApplicationShell,
  AutoMenu,
  BackendStatus,
  Breadcrumbs,
  CommandPalette,
  NotificationsPanel,
  UserMenu,
  applicationResources,
} from "../components/application-shell"
import {
  AIWorkspaceScreen,
  ApplicationStatesScreen,
  AuthorizationScreen,
  CalendarScreen,
  ChatScreen,
  DashboardScreen,
  KanbanScreen,
  ProfileSettingsScreen,
} from "../screens/application-screens"

const meta = {
  title: "Application Framework",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = { render: () => <DashboardScreen /> }
export const Kanban: Story = { render: () => <KanbanScreen /> }
export const Calendar: Story = { render: () => <CalendarScreen /> }
export const Chat: Story = { render: () => <ChatScreen /> }
export const AIWorkspace: Story = { render: () => <AIWorkspaceScreen /> }
export const ProfileSettings: Story = { render: () => <ProfileSettingsScreen /> }
export const AuthorizationUX: Story = { render: () => <AuthorizationScreen /> }
export const ErrorEmptyLoading: Story = { render: () => <ApplicationStatesScreen /> }

export const ShellParts: Story = {
  render: () => (
    <div className="mw-platform min-h-screen bg-background p-8 text-foreground">
      <div className="grid gap-6">
        <Breadcrumbs items={[{label:"MoonWitness",href:"#dashboard"},{label:"Cases",href:"#cases"},{label:"MW-0042"}]} />
        <div className="flex flex-wrap items-center gap-3">
          <BackendStatus state="online" />
          <BackendStatus state="degraded" />
          <BackendStatus state="offline" />
          <UserMenu name="Researcher" role="reviewer" />
        </div>
        <div className="max-w-sm border border-border bg-panel"><AutoMenu resources={applicationResources} activeId="dashboard" permissions={["authz:read","audit:read"]} /></div>
        <div className="max-w-[84px] border border-border bg-panel"><AutoMenu resources={applicationResources} activeId="dashboard" compact permissions={["authz:read","audit:read"]} /></div>
        <p className="text-sm text-muted-foreground">CommandPalette and NotificationsPanel are exercised inside every ApplicationShell screen.</p>
      </div>
    </div>
  ),
}
