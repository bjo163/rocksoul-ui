import * as React from "react";
import { Button } from "../ui/button";
export interface CopyButtonProps extends React.ComponentProps<typeof Button> {
    value: string;
    copiedLabel?: string;
    copyLabel?: string;
    onCopied?: () => void;
}
declare const CopyButton: React.ForwardRefExoticComponent<Omit<CopyButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { CopyButton };
