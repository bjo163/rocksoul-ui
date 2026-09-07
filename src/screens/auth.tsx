import { useState } from "react"
import { Button } from "../components/button"
import { Checkbox, Input } from "../components/form-controls"

export function AuthScreen() {
  const [mode, setMode] = useState<"default" | "error" | "loading">("default")
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

        <form
          className="p-6 sm:p-10"
          onSubmit={(event) => {
            event.preventDefault()
            setMode("loading")
          }}
        >
          <p className="mw-eyebrow text-primary">Sign in</p>
          <h2 className="mt-3 text-2xl font-bold">Your account, not your conclusion.</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Identity controls access. It never changes evidence status by itself.</p>

          <div className="mt-8 grid gap-5">
            <Input label="Email" type="email" autoComplete="email" placeholder="you@example.com" />
            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              error={mode === "error" ? "That credential pair was not accepted." : undefined}
            />
            <Checkbox label="Keep me signed in" description="Use only on a device you control." />
            <Button type="submit" loading={mode === "loading"}>Continue</Button>
            <Button type="button" variant="secondary">Continue with provider</Button>
            <button type="button" className="mw-link justify-start text-xs underline" onClick={() => setMode("error")}>
              Preview error state
            </button>
          </div>

          <p className="mw-meta mt-8 border-t border-border pt-4 text-muted-foreground">
            By continuing you accept the community rules and evidence-integrity contract.
          </p>
        </form>
      </div>
    </section>
  )
}
