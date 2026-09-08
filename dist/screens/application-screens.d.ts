import { type AppNotification } from "../components/application-shell";
import type { ApplicationActions } from "../contracts/interactions";
export declare const applicationNotifications: AppNotification[];
export declare function DashboardScreen(): import("react").JSX.Element;
export declare function KanbanScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function CalendarScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function ChatScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function AIWorkspaceScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function ResourcesScreen(): import("react").JSX.Element;
export declare function ProfileSettingsScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function AuthorizationScreen({ actions }?: {
    actions?: ApplicationActions;
}): import("react").JSX.Element;
export declare function ApplicationStatesScreen(): import("react").JSX.Element;
export declare function CommandPaletteReferenceScreen(): import("react").JSX.Element;
export declare function NotificationsReferenceScreen(): import("react").JSX.Element;
