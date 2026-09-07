import {
  useId,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react"
import { cn } from "../lib/cn"

interface FieldFrameProps {
  id: string
  label: string
  helper?: string
  error?: string
  children: React.ReactNode
}

function FieldFrame({ id, label, helper, error, children }: FieldFrameProps) {
  const message = error ?? helper
  const messageId = message ? `${id}-message` : undefined
  return (
    <label htmlFor={id} className="grid gap-2 text-sm">
      <span className="mw-meta text-muted-foreground">{label}</span>
      {children}
      {message ? (
        <span id={messageId} className={cn("text-xs leading-5", error ? "text-primary" : "text-muted-foreground")}>
          {message}
        </span>
      ) : null}
    </label>
  )
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  helper?: string
  error?: string
}

export function Input({ label, helper, error, id: providedId, className, ...props }: InputProps) {
  const generated = useId()
  const id = providedId ?? generated
  return (
    <FieldFrame id={id} label={label} helper={helper} error={error}>
      <input
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error || helper ? `${id}-message` : undefined}
        className={cn(
          "mw-touch w-full rounded-none border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45",
          error ? "border-primary" : "border-border",
          className,
        )}
        {...props}
      />
    </FieldFrame>
  )
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  helper?: string
  error?: string
  characterCount?: boolean
}

export function Textarea({
  label,
  helper,
  error,
  characterCount,
  id: providedId,
  className,
  maxLength,
  value,
  defaultValue,
  ...props
}: TextareaProps) {
  const generated = useId()
  const id = providedId ?? generated
  const length =
    typeof value === "string"
      ? value.length
      : typeof defaultValue === "string"
        ? defaultValue.length
        : 0
  return (
    <FieldFrame id={id} label={label} helper={helper} error={error}>
      <textarea
        id={id}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error || helper ? `${id}-message` : undefined}
        className={cn(
          "min-h-28 w-full resize-y rounded-none border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45",
          error ? "border-primary" : "border-border",
          className,
        )}
        {...props}
      />
      {characterCount && maxLength ? (
        <span className="mw-meta justify-self-end text-muted-foreground">
          {length}/{maxLength}
        </span>
      ) : null}
    </FieldFrame>
  )
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  helper?: string
  error?: string
  options: Array<{ label: string; value: string }>
}

export function Select({ label, helper, error, options, id: providedId, className, ...props }: SelectProps) {
  const generated = useId()
  const id = providedId ?? generated
  return (
    <FieldFrame id={id} label={label} helper={helper} error={error}>
      <select
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error || helper ? `${id}-message` : undefined}
        className={cn(
          "mw-touch w-full rounded-none border bg-background px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45",
          error ? "border-primary" : "border-border",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldFrame>
  )
}

export function Checkbox({
  label,
  description,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; description?: string }) {
  return (
    <label className="flex min-h-11 cursor-pointer items-start gap-3 py-2">
      <input type="checkbox" className="mt-1 size-4 accent-[var(--mw-brand-crimson)]" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span> : null}
      </span>
    </label>
  )
}

export function Radio({
  label,
  description,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; description?: string }) {
  return (
    <label className="flex min-h-11 cursor-pointer items-start gap-3 py-2">
      <input type="radio" className="mt-1 size-4 accent-[var(--mw-brand-crimson)]" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span> : null}
      </span>
    </label>
  )
}

export function Switch({
  label,
  description,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; description?: string }) {
  const id = useId()
  return (
    <label htmlFor={id} className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-2">
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span> : null}
      </span>
      <span className="relative inline-flex h-6 w-11 items-center">
        <input id={id} type="checkbox" role="switch" className="peer sr-only" {...props} />
        <span className="absolute inset-0 border border-border-strong bg-panel peer-checked:border-primary peer-checked:bg-primary" />
        <span className="absolute left-1 size-4 bg-foreground transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
      </span>
    </label>
  )
}
