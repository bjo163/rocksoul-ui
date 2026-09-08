import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { platformAdminContract, platformAdminVisuals } from "../contracts/platform-admin"
import { PlatformBackendBoundary, PlatformRoleMatrix } from "../components/platform-admin"

describe("platform admin contract", () => {
  it("has unique routes and eight visualized surfaces", () => {
    const routes = platformAdminContract.navigation.map((item) => item.path)
    expect(new Set(routes).size).toBe(routes.length)
    expect(Object.keys(platformAdminVisuals)).toHaveLength(8)
    expect(platformAdminContract.runtime.failClosed).toBe(true)
  })

  it("renders the authorization boundary", () => {
    render(<PlatformRoleMatrix currentRole="admin" />)
    expect(screen.getByText("Publish research conclusion")).toBeInTheDocument()
    expect(screen.getAllByText("deny")).toHaveLength(3)
  })

  it("renders unconfigured backend state explicitly", () => {
    render(<PlatformBackendBoundary state="unconfigured" />)
    expect(screen.getByText("Fail closed.")).toBeInTheDocument()
  })
})
