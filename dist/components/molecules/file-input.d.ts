import * as React from "react";
import { Input } from "../ui/input";
export interface FileInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
    accept?: string;
    multiple?: boolean;
}
declare const FileInput: React.ForwardRefExoticComponent<Omit<FileInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { FileInput };
