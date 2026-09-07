const steps = [
  { name: "Observe", target: "observe", copy: "Record before interpretation." },
  { name: "Trace", target: "trace", copy: "Keep provenance attached." },
  { name: "Reconstruct", target: "reconstruct", copy: "Relate fragments without forcing identity." },
  { name: "Weigh", target: "weigh", copy: "Expose dimensions, uncertainty, and contradiction." },
  { name: "Verify", target: "verify", copy: "Keep unresolved when evidence stops." },
] as const

export function WorkflowStrip() {
  return (
    <nav aria-label="MoonWitness method" className="border-y border-border">
      <ol className="grid sm:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.name} className="border-b border-border last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <a
              href={`#${step.target}`}
              className="flex min-h-28 flex-col justify-between gap-4 p-4 transition-colors hover:bg-muted"
            >
              <span className="mw-eyebrow text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {step.name}
              </span>
              <span className="text-sm leading-5 text-foreground">{step.copy}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
