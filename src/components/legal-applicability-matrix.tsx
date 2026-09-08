import { useId } from "react"
import { Badge } from "./badge"
import { cn } from "../lib/cn"
import {
  legalApplicabilityAxes,
  legalIntelligenceContract,
  legalResultVocabulary,
  legalReviewPipeline,
  type LegalApplicabilityAxisId,
} from "../contracts/legal-intelligence"

export type LegalApplicabilityAssessmentState =
  | "supported"
  | "not-supported"
  | "disputed"
  | "unresolved"

export interface LegalApplicabilityAssessment {
  axisId: LegalApplicabilityAxisId
  state: LegalApplicabilityAssessmentState
  basis?: string
  sourceRefs?: string[]
}

export interface LegalApplicabilityMatrixProps {
  assessments?: LegalApplicabilityAssessment[]
  className?: string
  title?: string
  description?: string
  showVocabulary?: boolean
  showPipeline?: boolean
}

const assessmentBadge = {
  supported: "verified",
  "not-supported": "restricted",
  disputed: "disputed",
  unresolved: "unresolved",
} as const

const legalResultBadge = {
  permitted: "verified",
  restricted: "restricted",
  prohibited: "prohibited",
  disputed: "disputed",
  unresolved: "unresolved",
} as const

function assessmentFor(
  assessments: readonly LegalApplicabilityAssessment[],
  axisId: string,
): LegalApplicabilityAssessment {
  return assessments.find((assessment) => assessment.axisId === axisId) ?? {
    axisId,
    state: "unresolved",
    basis: "Not assessed.",
  }
}

export function LegalApplicabilityMatrix({
  assessments = [],
  className,
  title = "Legal applicability matrix",
  description = "Applicability is assessed across independent temporal, territorial, personal, and subject-matter axes. Axis state is not itself a legal verdict.",
  showVocabulary = true,
  showPipeline = true,
}: LegalApplicabilityMatrixProps) {
  const headingId = useId()
  const descriptionId = useId()

  return (
    <section
      className={cn("border border-primary bg-card p-5", className)}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="mw-eyebrow text-primary">LAW / applicability</p>
          <h3 id={headingId} className="mw-display mt-2 text-2xl font-black uppercase">
            {title}
          </h3>
          <p id={descriptionId} className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
        <Badge variant="unresolved">{legalIntelligenceContract.principle}</Badge>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2" role="list" aria-label="Applicability axes">
        {legalApplicabilityAxes.map((axis) => {
          const assessment = assessmentFor(assessments, axis.id)
          return (
            <article
              key={axis.id}
              role="listitem"
              className="border border-border bg-background p-4"
              data-axis={axis.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="mw-meta text-primary">{axis.id}</p>
                  <h4 className="mt-1 font-bold text-foreground">{axis.label}</h4>
                </div>
                <Badge variant={assessmentBadge[assessment.state]}>{assessment.state}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{axis.question}</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="mw-meta text-muted-foreground">Basis</p>
                <p className="mt-1 text-sm text-foreground">{assessment.basis ?? "Not assessed."}</p>
                {assessment.sourceRefs?.length ? (
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                    Sources: {assessment.sourceRefs.join(" · ")}
                  </p>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>

      {showVocabulary ? (
        <div className="mt-5 border-t border-border pt-4">
          <p className="mw-meta text-muted-foreground">Reviewed result vocabulary</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {legalResultVocabulary.map((state) => (
              <Badge key={state.id} variant={legalResultBadge[state.id as keyof typeof legalResultBadge] ?? "neutral"}>
                {state.label}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Result vocabulary is available only after source, authority, applicability, competing claims,
            and review remain inspectable.
          </p>
        </div>
      ) : null}

      {showPipeline ? (
        <ol className="mt-5 grid gap-2 border-t border-border pt-4 lg:grid-cols-5" aria-label="Legal review pipeline">
          {legalReviewPipeline.map((step, index) => (
            <li key={step.id} className="relative border border-border bg-background p-3">
              <p className="mw-meta text-primary">{String(index + 1).padStart(2, "0")}</p>
              <strong className="mt-1 block text-xs text-foreground">{step.label}</strong>
              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      ) : null}

      <p className="mw-meta mt-5 border-t border-border pt-4 text-muted-foreground">
        Text equivalent: every axis, state, basis, source reference, review stage, and guardrail remains live text.
      </p>
    </section>
  )
}
