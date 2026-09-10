import * as React from "react";
import { Input } from "../ui/input";
export interface SearchInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
    onClear?: () => void;
    clearLabel?: string;
}
declare const SearchInput: React.ForwardRefExoticComponent<Omit<SearchInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { SearchInput };
