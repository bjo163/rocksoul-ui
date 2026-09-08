import { useEffect, useState } from "react"

export type ThemePreference = "light" | "dark" | "system"
type EffectiveTheme = "light" | "dark"

const preferenceOrder: ThemePreference[] = ["system", "dark", "light"]

function resolveTheme(preference: ThemePreference): EffectiveTheme {
  if (preference === "light" || preference === "dark") return preference
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function applyTheme(preference: ThemePreference) {
  const effective = resolveTheme(preference)
  const root = document.documentElement
  root.dataset.themePreference = preference
  root.dataset.theme = effective
  root.classList.toggle("light", effective === "light")
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system")
  const [effective, setEffective] = useState<EffectiveTheme>("dark")

  useEffect(() => {
    // JSDOM and privacy-restricted browser contexts may expose no usable
    // storage. Theme selection remains functional for the current session.
    const stored = (() => {
      try { return window.localStorage?.getItem("mw-theme") }
      catch { return null }
    })()
    const initial: ThemePreference =
      stored === "light" || stored === "dark" || stored === "system" ? stored : "system"
    setPreference(initial)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)")
    const sync = () => {
      applyTheme(preference)
      setEffective(resolveTheme(preference))
    }
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [preference])

  const currentIndex = preferenceOrder.indexOf(preference)
  const next = preferenceOrder[(currentIndex + 1) % preferenceOrder.length]

  return (
    <button
      type="button"
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[16px] border border-border bg-background px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
      aria-label={`Theme ${preference}, currently ${effective}. Switch to ${next}.`}
      title={`Theme: ${preference} · effective: ${effective}`}
      onClick={() => {
        setPreference(next)
        try { window.localStorage?.setItem("mw-theme", next) }
        catch { /* storage is optional; DOM state still reflects the choice */ }
      }}
    >
      {preference}
    </button>
  )
}
