import { useEffect, useState } from "react"

export type ThemePreference = "light" | "dark" | "system"
type EffectiveTheme = "light" | "dark"

const preferenceOrder: ThemePreference[] = ["system", "dark", "light"]

export function resolveTheme(preference: ThemePreference): EffectiveTheme {
  if (preference === "light" || preference === "dark") return preference
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export function applyTheme(preference: ThemePreference) {
  const effective = resolveTheme(preference)
  const root = document.documentElement
  root.dataset.themePreference = preference
  root.dataset.theme = effective
  root.dataset.effectiveTheme = effective
  root.classList.toggle("light", effective === "light")
}

function storedPreference(): ThemePreference {
  try {
    const stored = window.localStorage?.getItem("mw-theme")
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system"
  } catch {
    return "system"
  }
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(storedPreference)
  const [effective, setEffective] = useState<EffectiveTheme>(() => resolveTheme(storedPreference()))

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
