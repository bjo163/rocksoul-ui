import { createContext, useContext, type ReactNode } from "react"

export interface ChatSendPayload { channel: string; message: string }
export interface AIAskPayload { caseId: string; prompt: string }
export interface CommunitySubmitPayload { mode: "question" | "context"; source?: string; body: string }
export interface AuthSubmitPayload { email: string; password: string; keepSignedIn: boolean }
export interface KanbanMovePayload { itemId: string; from: string; to: string }
export interface CalendarEventPayload { id: string; title: string; date: string }
export interface PlatformActionPayload {
  action: "request-context" | "flag-record" | "keep-unresolved" | "return-to-queue"
  resource: string
}

export interface ApplicationActions {
  onMarkAllNotificationsRead?: () => void | Promise<void>
  onSignOut?: () => void | Promise<void>
  onChatSend?: (payload: ChatSendPayload) => void | Promise<void>
  onAIAsk?: (payload: AIAskPayload) => void | Promise<void>
  onSaveProfile?: (payload: { displayName: string }) => void | Promise<void>
  onSignOutOtherSessions?: () => void | Promise<void>
  onAddIntegration?: () => void | Promise<void>
  onRequestAccess?: (payload: { permission: string; currentRole: string }) => void | Promise<void>
  onKanbanMove?: (payload: KanbanMovePayload) => void | Promise<void>
  onCalendarEventSelect?: (payload: CalendarEventPayload) => void | Promise<void>
  onRepositorySyncAll?: () => void | Promise<void>
  onRepositoryInspect?: (repo: string) => void | Promise<void>
  onModerationSelectAll?: () => void | Promise<void>
  onModerationRequestContext?: (submissionId: string) => void | Promise<void>
  onModerationReject?: (submissionId: string) => void | Promise<void>
  onModerationBulkRequestContext?: () => void | Promise<void>
  onModerationReturnSelected?: () => void | Promise<void>
  onPageChange?: (page: number) => void | Promise<void>
  onRetry?: (scope: string) => void | Promise<void>
  onClearFilters?: () => void | Promise<void>
  onCommunitySubmit?: (payload: CommunitySubmitPayload) => void | Promise<void>
  onAuthSubmit?: (payload: AuthSubmitPayload) => void | Promise<void>
  onAuthProvider?: () => void | Promise<void>
  onPlatformAction?: (payload: PlatformActionPayload) => void | Promise<void>
}

const ApplicationActionsContext = createContext<ApplicationActions>({})

export function ApplicationActionsProvider({ actions, children }: { actions?: ApplicationActions; children: ReactNode }) {
  return <ApplicationActionsContext.Provider value={actions ?? {}}>{children}</ApplicationActionsContext.Provider>
}

export function useApplicationActions() {
  return useContext(ApplicationActionsContext)
}
