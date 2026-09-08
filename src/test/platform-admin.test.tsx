import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { platformAdminContract, platformAdminVisuals } from "../contracts/platform-admin"
import { PlatformBackendBoundary, PlatformRoleMatrix } from "../components/platform-admin"

describe("platform admin contract", () => {
  it("has unique routes and visualizes every declared surface", () => {
    const routes = platformAdminContract.navigation.map((item) => item.path)
    expect(new Set(routes).size).toBe(routes.length)
    expect(Object.keys(platformAdminVisuals)).toHaveLength(platformAdminContract.navigation.length)
    expect(platformAdminContract.runtime.failClosed).toBe(true)
  })

  it("renders the authorization boundary from the contract", () => {
    render(<PlatformRoleMatrix currentRole="admin" />)
    expect(screen.getByText("Publish research conclusion")).toBeInTheDocument()
    const denyCount = platformAdminContract.capabilities.reduce(
      (count, capability) => count + platformAdminContract.roles.filter((role) => capability[role.id] === "deny").length,
      0,
    )
    expect(screen.getAllByText("deny")).toHaveLength(denyCount)
  })

  it("renders unconfigured backend state explicitly", () => {
    render(<PlatformBackendBoundary state="unconfigured" />)
    expect(screen.getByText("Fail closed.")).toBeInTheDocument()
  })
})
