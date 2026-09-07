import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
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
  variant?: "default" | "search"
  size?: "md" | "lg"
}

export function Input({
  label,
  helper,
  error,
  variant = "default",
  size = "md",
  id: providedId,
  className,
  ...props
}: InputProps) {
  const generated = useId()
  const id = providedId ?? generated
  return (
    <FieldFrame id={id} label={label} helper={helper} error={error}>
      <div className="relative">
        {variant === "search" ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground" aria-hidden="true">
            /
          </span>
        ) : null}
        <input
          id={id}
          type={variant === "search" ? "search" : props.type}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error || helper ? `${id}-message` : undefined}
          className={cn(
            "w-full rounded-none border bg-background text-sm text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel",
            size === "lg" ? "min-h-12 px-4" : "min-h-11 px-3",
            variant === "search" && "pl-8",
            error ? "border-primary" : "border-border",
            className,
          )}
          {...props}
        />
      </div>
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
  onChange,
  ...props
}: TextareaProps) {
  const generated = useId()
  const id = providedId ?? generated
  const initialLength =
    typeof value === "string"
      ? value.length
      : typeof defaultValue === "string"
        ? defaultValue.length
        : 0
  const [length, setLength] = useState(initialLength)

  useEffect(() => {
    if (typeof value === "string") setLength(value.length)
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLength(event.currentTarget.value.length)
    onChange?.(event)
  }

  return (
    <FieldFrame id={id} label={label} helper={helper} error={error}>
      <textarea
        id={id}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error || helper ? `${id}-message` : undefined}
        className={cn(
          "min-h-28 w-full resize-y rounded-none border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel",
          error ? "border-primary" : "border-border",
          className,
        )}
        {...props}
      />
      {characterCount && maxLength ? (
        <span className="mw-meta justify-self-end text-muted-foreground" aria-live="polite">
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
          "min-h-11 w-full rounded-none border bg-background px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45",
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

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string
  description?: string
  indeterminate?: boolean
}

export function Checkbox({ label, description, indeterminate = false, disabled, ...props }: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <label className={cn("flex min-h-11 items-start gap-3 py-2", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer")}>
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className="mt-1 size-4 accent-[var(--mw-brand-crimson)]"
        aria-checked={indeterminate ? "mixed" : undefined}
        {...props}
      />
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
  disabled,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string; description?: string }) {
  return (
    <label className={cn("flex min-h-11 items-start gap-3 py-2", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer")}>
      <input type="radio" disabled={disabled} className="mt-1 size-4 accent-[var(--mw-brand-crimson)]" {...props} />
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
  disabled,
  id: providedId,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string; description?: string }) {
  const generated = useId()
  const id = providedId ?? generated
  return (
    <label htmlFor={id} className={cn("flex min-h-11 items-center justify-between gap-4 py-2", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer")}>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span> : null}
      </span>
      <span className="relative inline-flex h-6 w-11 items-center">
        <input id={id} type="checkbox" role="switch" disabled={disabled} className="peer sr-only" {...props} />
        <span className="absolute inset-0 border border-border-strong bg-panel peer-checked:border-primary peer-checked:bg-primary" />
        <span className="absolute left-1 size-4 bg-foreground transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
      </span>
    </label>
  )
}
