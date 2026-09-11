import * as React from "react";
import { Input } from "../ui/input";
export interface PasswordInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
    showLabel?: string;
    hideLabel?: string;
}
declare const PasswordInput: React.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { PasswordInput };
