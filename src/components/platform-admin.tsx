import type { ImgHTMLAttributes } from "react"
import { Badge } from "./feedback/status-badge"
import { MoonWitnessResilientImage, useMoonWitnessAssetBaseUrl } from "./asset-provider"
import type { AppCommandAction, AppResource } from "./application-shell"
import {
  platformAdminContract,
  platformAdminVisuals,
  type PlatformAdminRoleId,
  type PlatformAdminScreenId,
  type PlatformCapabilityAccess,
  type PlatformRuntimeState,
} from "../contracts/platform-admin"

const groupByContract = {
  System: "System",
  Resource: "Resource",
  Account: "Account",
} as const

export const platformAdminResources: AppResource[] = platformAdminContract.navigation.map((item) => ({
  id: item.id,
  label: item.label,
  href: item.path,
  group: groupByContract[item.group],
  description: item.label + " / Platform administration contract.",
  shortcut: item.label.slice(0, 1).toUpperCase(),
  requiredPermission: item.permission,
}))

export const platformAdminCommandActions: AppCommandAction[] = platformAdminContract.commands.map((item) => ({
  label: item.label,
  href: item.path,
  shortcut: item.shortcut,
}))

export const platformAdminPermissions = Array.from(new Set(platformAdminContract.navigation.map((item) => item.permission)))

const accessVariant: Record<PlatformCapabilityAccess, "verified" | "partial" | "info" | "prohibited"> = {
  allow: "verified",
  limited: "partial",
  read: "info",
  deny: "prohibited",
}

export function PlatformRoleMatrix({
  currentRole,
}: {
  currentRole?: PlatformAdminRoleId
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 mw-meta text-muted-foreground">Capability</th>
            {platformAdminContract.roles.map((role) => (
              <th key={role.id} className="p-3 mw-meta text-muted-foreground">
                {role.label}{currentRole === role.id ? " / CURRENT" : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {platformAdminContract.capabilities.map((capability) => (
            <tr key={capability.id} className="border-b border-border">
              <th className="p-4 text-sm">{capability.label}</th>
              {platformAdminContract.roles.map((role) => {
                const access = capability[role.id] as PlatformCapabilityAccess
                return <td key={role.id} className="p-4"><Badge variant={accessVariant[access]}>{access}</Badge></td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const runtimeVariant: Record<PlatformRuntimeState, "verified" | "partial" | "prohibited" | "neutral"> = {
  connected: "verified",
  degraded: "partial",
  offline: "prohibited",
  unconfigured: "neutral",
}

export function PlatformBackendBoundary({
  state,
  detail,
}: {
  state: PlatformRuntimeState
  detail?: string
}) {
  return (
    <section className="border border-border bg-card p-5" data-platform-runtime={state}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mw-meta text-primary">IAM DATA PLANE</p>
          <h2 className="mt-2 text-lg font-bold">{state === "connected" ? "Server authoritative." : "Fail closed."}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {detail ?? (state === "unconfigured"
              ? "No Platform backend is configured. Mutations must remain unavailable."
              : "Runtime state comes from the Platform API, not from baked UI fixtures.")}
          </p>
        </div>
        <Badge variant={runtimeVariant[state]}>{state}</Badge>
      </div>
    </section>
  )
}

export type PlatformServiceRuntime = {
  id: string
  state: PlatformRuntimeState
  detail?: string
  traceId?: string
}

export function PlatformServiceRegistry({
  runtime = [],
}: {
  runtime?: PlatformServiceRuntime[]
}) {
  const byId = new Map(runtime.map((item) => [item.id, item]))
  return (
    <section className="border border-border bg-card">
      <div className="border-b border-border p-4">
        <p className="mw-meta text-muted-foreground">SERVICE REGISTRY / RUNTIME</p>
      </div>
      {platformAdminContract.serviceRegistry.map((service) => {
        const status = byId.get(service.id) ?? { id: service.id, state: "unconfigured" as const }
        return (
          <div key={service.id} className="grid gap-3 border-b border-border p-4 sm:grid-cols-[1fr_180px_auto] sm:items-center">
            <div>
              <strong className="text-sm">{service.label}</strong>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">{service.repository ?? service.kind}</p>
            </div>
            <span className="text-xs text-muted-foreground">{status.detail ?? "Runtime status unavailable."}</span>
            <Badge variant={runtimeVariant[status.state]}>{status.state}</Badge>
          </div>
        )
      })}
    </section>
  )
}

export function PlatformAdminVisual({
  screen,
  alt,
  ...props
}: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  screen: PlatformAdminScreenId
  alt: string
}) {
  const baseUrl = useMoonWitnessAssetBaseUrl()
  const src = baseUrl.replace(/\/+$/, "") + "/ui/v2/" + platformAdminVisuals[screen]
  const fallbackSrc = "/assets/ui/v2/" + platformAdminVisuals[screen]
  return <MoonWitnessResilientImage src={src} fallbackSrc={fallbackSrc} alt={alt} {...props} />
}
