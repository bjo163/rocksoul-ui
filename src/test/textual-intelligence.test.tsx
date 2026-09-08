import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  ParallelTextLanes,
  SourceRightsSummary,
  TextualHierarchyTrace,
  TextualRelationTrace,
} from "../components/textual-intelligence"

describe("Textual intelligence visual contracts", () => {
  it("renders canonical hierarchy as ordered accessible records", () => {
    render(<TextualHierarchyTrace items={[
      { id: "mw:work:test", kind: "work", state: "available" },
      { id: "mw:expression:test:en", kind: "expression", state: "available" },
      { id: "mw:edition:test:v1", kind: "edition", state: "partial" },
    ]} />)
    expect(screen.getByRole("list", { name: /canonical textual hierarchy levels/i })).toBeInTheDocument()
    expect(screen.getByText("mw:work:test")).toBeInTheDocument()
    expect(screen.getByText("mw:edition:test:v1")).toBeInTheDocument()
  })

  it("preserves language and RTL direction on exact text lanes", () => {
    render(<ParallelTextLanes lanes={[
      { id: "mw:content:quran:test", language: "ar", script: "Arab", representation: "source", text: "نص" },
    ]} />)
    const text = screen.getByText("نص")
    expect(text).toHaveAttribute("lang", "ar")
    expect(text).toHaveAttribute("dir", "rtl")
  })

  it("renders missing text as unavailable without synthetic content", () => {
    render(<ParallelTextLanes lanes={[
      { id: "mw:content:missing", language: "en", representation: "translation", text: null },
    ]} />)
    expect(screen.getByText(/exact text unavailable/i)).toBeInTheDocument()
    expect(screen.getByText(/no text value was supplied/i)).toBeInTheDocument()
  })

  it("exposes declared integrity and rights metadata", () => {
    render(<SourceRightsSummary records={[
      { id: "mw:artifact:test", sha256: "abc123", rights: "public domain", license: "CC0-1.0", state: "available" },
    ]} />)
    expect(screen.getByText("abc123")).toBeInTheDocument()
    expect(screen.getByText("CC0-1.0")).toBeInTheDocument()
  })

  it("gives textual relations an accessible text equivalent", () => {
    render(<TextualRelationTrace relations={[
      { id: "mw:relation:test", subject: "mw:passage:a", relation: "aligned_with", object: "mw:passage:b", method: "explicit map" },
    ]} />)
    expect(screen.getByText(/mw:passage:a aligned with mw:passage:b/i)).toBeInTheDocument()
    expect(screen.getByText(/explicit map/i)).toBeInTheDocument()
  })
})
