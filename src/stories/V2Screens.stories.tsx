import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AIWorkspaceScreen,
  ApplicationStatesScreen,
  AuthorizationScreen,
  CalendarScreen,
  ChatScreen,
  CommandPaletteReferenceScreen,
  DashboardScreen,
  KanbanScreen,
  NotificationsReferenceScreen,
  ProfileSettingsScreen,
  ResourcesScreen,
} from "../screens/application-screens"

const meta = {
  title: "17-27 Application v2",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const S17Dashboard: Story = { render: () => <DashboardScreen /> }
export const S18CommandPalette: Story = { render: () => <CommandPaletteReferenceScreen /> }
export const S19Notifications: Story = { render: () => <NotificationsReferenceScreen /> }
export const S20Kanban: Story = { render: () => <KanbanScreen /> }
export const S21Calendar: Story = { render: () => <CalendarScreen /> }
export const S22Chat: Story = { render: () => <ChatScreen /> }
export const S23AIWorkspace: Story = { render: () => <AIWorkspaceScreen /> }
export const S24Resources: Story = { render: () => <ResourcesScreen /> }
export const S25ProfileSettings: Story = { render: () => <ProfileSettingsScreen /> }
export const S26Authorization: Story = { render: () => <AuthorizationScreen /> }
export const S27SystemStates: Story = { render: () => <ApplicationStatesScreen /> }
