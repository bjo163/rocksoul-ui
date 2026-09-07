import { useEffect, useState } from "react"

type Theme = "dark" | "light"

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.classList.toggle("light", theme === "light")
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const stored = window.localStorage.getItem("mw-theme")
    const preferred: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark"

    setTheme(preferred)
    applyTheme(preferred)
  }, [])

  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border bg-card px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "light"}
      onClick={() => {
        setTheme(nextTheme)
        applyTheme(nextTheme)
        window.localStorage.setItem("mw-theme", nextTheme)
      }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  )
}
