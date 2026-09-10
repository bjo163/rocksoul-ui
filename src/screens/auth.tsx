import { AuthFormPattern } from "../components/patterns/domain-patterns"

export function AuthScreen() {
  return (
    <section className="flex min-h-[760px] items-center justify-center bg-background px-4 py-12 text-foreground">
      <div className="grid w-full max-w-5xl overflow-hidden border border-border bg-card lg:grid-cols-[1fr_.85fr]">
        <div className="hidden min-h-[620px] border-r border-border p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="mw-eyebrow text-primary">14 / Community identity</p>
            <h1 className="mw-display mt-5 text-6xl font-black uppercase leading-[0.92]">Enter the observatory.</h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Membership can unlock following, saved cases, discussion, and context submission. Public evidence remains readable without login.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <AuthFormPattern />
        </div>
      </div>
    </section>
  )
}
