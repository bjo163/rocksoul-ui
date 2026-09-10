import * as React from "react";
import { Button } from "../ui/button";
export interface SplitButtonItem {
    label: React.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
}
export interface SplitButtonProps extends Omit<React.ComponentProps<typeof Button>, "children"> {
    children: React.ReactNode;
    items: readonly SplitButtonItem[];
}
declare function SplitButton({ children, items, ...props }: SplitButtonProps): React.JSX.Element;
export { SplitButton };
