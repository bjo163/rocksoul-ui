import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MoonWitnessResilientImage } from "../components/asset-provider"

describe("MoonWitnessResilientImage", () => {
  it("falls back to the local mirror once when the primary asset fails", () => {
    render(<MoonWitnessResilientImage src="https://cdn.example/asset.svg" fallbackSrc="/assets/asset.svg" alt="Asset" />)
    const image = screen.getByRole("img", { name: "Asset" })

    fireEvent.error(image)
    expect(image).toHaveAttribute("src", "/assets/asset.svg")

    fireEvent.error(image)
    expect(image).toHaveAttribute("src", "/assets/asset.svg")
  })
})
