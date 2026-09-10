import * as React from "react"
import { Input } from "../ui/input"

export interface FileInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
  accept?: string
  multiple?: boolean
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, accept, multiple, ...props }, ref) => (
    <Input
      ref={ref}
      type="file"
      accept={accept}
      multiple={multiple}
      className={className}
      {...props}
    />
  )
)
FileInput.displayName = "FileInput"

export { FileInput }
