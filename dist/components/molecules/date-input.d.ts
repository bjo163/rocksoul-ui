import * as React from "react";
import { Input } from "../ui/input";
export interface DateInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
    min?: string;
    max?: string;
}
declare const DateInput: React.ForwardRefExoticComponent<Omit<DateInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { DateInput };
