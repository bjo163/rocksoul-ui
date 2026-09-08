import { useMemo, useState } from "react"
import { LandingScreen } from "./screens/landing"
import { MW0042Overview } from "./screens/mw0042-overview"
import {
  AIWorkspaceScreen,
  ApplicationStatesScreen,
  AuthorizationScreen,
  CalendarScreen,
  ChatScreen,
  DashboardScreen,
  KanbanScreen,
  NotificationsReferenceScreen,
  ProfileSettingsScreen,
  ResourcesScreen,
} from "./screens/application-screens"
import { PlatformScreen } from "./screens/platform"
import { ApplicationActionsProvider, type ApplicationActions } from "./contracts/interactions"

const qaScreens = new Set(["dashboard","kanban","calendar","chat","ai","resources","profile","authorization","states","notifications","platform","mw0042"])

export function App() {
  const screen = new URLSearchParams(window.location.search).get("screen")
  const [lastAction, setLastAction] = useState("none")
  const actions = useMemo<ApplicationActions>(() => ({
    onMarkAllNotificationsRead: () => setLastAction("notifications:mark-all-read"),
    onChatSend: ({ channel, message }) => setLastAction(`chat:${channel}:${message}`),
    onAIAsk: ({ caseId, prompt }) => setLastAction(`ai:${caseId}:${prompt}`),
    onSaveProfile: ({ displayName }) => setLastAction(`profile:save:${displayName}`),
    onSignOutOtherSessions: () => setLastAction("profile:sign-out-other-sessions"),
    onAddIntegration: () => setLastAction("profile:add-integration"),
    onRequestAccess: ({ permission }) => setLastAction(`authorization:request:${permission}`),
    onKanbanMove: ({ itemId, from, to }) => setLastAction(`kanban:${itemId}:${from}->${to}`),
    onCalendarEventSelect: ({ id }) => setLastAction(`calendar:${id}`),
    onPlatformAction: ({ action, resource }) => setLastAction(`platform:${action}:${resource}`),
  }), [])

  if (!screen || !qaScreens.has(screen)) {
    return <><LandingScreen /><MW0042Overview /></>
  }

  let content
  switch (screen) {
    case "dashboard": content = <DashboardScreen />; break
    case "kanban": content = <KanbanScreen actions={actions} />; break
    case "calendar": content = <CalendarScreen actions={actions} />; break
    case "chat": content = <ChatScreen actions={actions} />; break
    case "ai": content = <AIWorkspaceScreen actions={actions} />; break
    case "resources": content = <ResourcesScreen />; break
    case "profile": content = <ProfileSettingsScreen actions={actions} />; break
    case "authorization": content = <AuthorizationScreen actions={actions} />; break
    case "states": content = <ApplicationStatesScreen />; break
    case "notifications": content = <NotificationsReferenceScreen />; break
    case "platform": content = <PlatformScreen actions={actions} />; break
    case "mw0042": content = <MW0042Overview />; break
    default: content = <DashboardScreen />
  }

  return (
    <ApplicationActionsProvider actions={actions}>
      {content}
      <output className="sr-only" data-qa-action aria-live="polite">{lastAction}</output>
    </ApplicationActionsProvider>
  )
}
