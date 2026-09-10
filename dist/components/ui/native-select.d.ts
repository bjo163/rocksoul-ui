import * as React from "react";
declare function NativeSelect({ className, size, ...props }: Omit<React.ComponentProps<"select">, "size"> & {
    size?: "sm" | "default" | number;
}): React.JSX.Element;
declare function NativeSelectOption({ className, ...props }: React.ComponentProps<"option">): React.JSX.Element;
declare function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<"optgroup">): React.JSX.Element;
export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
