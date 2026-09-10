/** Raw design values. Components should consume semantic tokens instead. */
export const primitiveTokens = {
  color: {
    neutral: { white: "var(--mw-neutral-000)", 50: "var(--mw-neutral-050)", 100: "var(--mw-neutral-100)", 200: "var(--mw-neutral-200)", 400: "var(--mw-neutral-400)", 600: "var(--mw-neutral-600)", 700: "var(--mw-neutral-700)", 800: "var(--mw-neutral-800)", 900: "var(--mw-neutral-900)", 950: "var(--mw-neutral-950)" },
    brand: { crimson: "var(--mw-brand-crimson)", crimsonDark: "var(--mw-brand-crimson-dark)", crimsonSoft: "var(--mw-brand-crimson-soft)" },
  },
  space: { 0: "0px", 1: "var(--mw-space-4)", 2: "var(--mw-space-8)", 3: "var(--mw-space-12)", 4: "var(--mw-space-16)", 5: "var(--mw-space-20)", 6: "var(--mw-space-24)", 8: "var(--mw-space-32)", 10: "var(--mw-space-40)", 12: "var(--mw-space-48)", 16: "var(--mw-space-64)" },
  radius: { none: "var(--mw-radius-none)", xs: "var(--mw-radius-xs)", sm: "var(--mw-radius-sm)", md: "var(--mw-radius-md)", lg: "var(--mw-radius-lg)", pill: "var(--mw-radius-pill)" },
  motion: { fast: "var(--mw-motion-fast)", base: "var(--mw-motion-base)", slow: "var(--mw-motion-slow)", cinematic: "var(--mw-motion-cinematic)" },
} as const
