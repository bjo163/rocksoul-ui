import { MW0042Overview } from "./screens/mw0042-overview"

export function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Rocksoul UI / Code-first design system
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">Golden slice playground</h1>
          </div>
          <span className="text-xs text-muted-foreground">MW-0042 / synthetic fixture</span>
        </div>
        <MW0042Overview />
      </div>
    </main>
  )
}
