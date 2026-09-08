export const moonWitnessTokens = {
  color: {
    brand: {
      crimson: "var(--mw-brand-crimson)",
      crimsonDark: "var(--mw-brand-crimson-dark)",
      crimsonSoft: "var(--mw-brand-crimson-soft)",
    },
    status: {
      supported: "var(--mw-status-supported)",
      verified: "var(--mw-status-verified)",
      contested: "var(--mw-status-contested)",
      partial: "var(--mw-status-partial)",
      unresolved: "var(--mw-status-unresolved)",
      restricted: "var(--mw-status-restricted)",
      prohibited: "var(--mw-status-prohibited)",
      info: "var(--mw-status-info)",
      foreground: {
        supported: "var(--mw-status-supported-fg)",
        verified: "var(--mw-status-verified-fg)",
        contested: "var(--mw-status-contested-fg)",
        partial: "var(--mw-status-partial-fg)",
        unresolved: "var(--mw-status-unresolved-fg)",
        restricted: "var(--mw-status-restricted-fg)",
        prohibited: "var(--mw-status-prohibited-fg)",
        info: "var(--mw-status-info-fg)",
      },
    },
    rgbl: {
      red: "var(--mw-rgbl-red)",
      green: "var(--mw-rgbl-green)",
      blue: "var(--mw-rgbl-blue)",
      light: "var(--mw-rgbl-light)",
    },
  },
  breakpoint: {
    mobile: 390,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  },
  size: {
    touchMin: 44,
    sidebar: 272,
    reading: 720,
    wide: 1200,
  },
  motion: {
    fast: 120,
    base: 220,
    slow: 420,
    cinematic: 900,
  },
} as const
