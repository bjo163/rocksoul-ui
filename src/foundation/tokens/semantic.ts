/** Meaningful roles consumed by UI components. */
export const semanticTokens = {
  surface: { page: "var(--mw-surface-page)", raised: "var(--mw-surface-raised)", panel: "var(--mw-surface-panel)", overlay: "var(--mw-surface-overlay)" },
  text: { primary: "var(--mw-text-primary)", secondary: "var(--mw-text-secondary)", muted: "var(--mw-text-muted)", inverse: "var(--mw-text-inverse)" },
  border: { default: "var(--mw-border-default)", strong: "var(--mw-border-strong)" },
  action: { primary: "var(--mw-brand-crimson-ui)", focus: "var(--mw-focus)" },
  status: { success: "var(--mw-status-supported-fg)", info: "var(--mw-status-info-fg)", warning: "var(--mw-status-partial-fg)", danger: "var(--mw-status-prohibited-fg)" },
} as const
