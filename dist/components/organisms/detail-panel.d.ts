import * as React from "react";
import { Card } from "../ui/card";
export type DetailPanelProps = React.ComponentProps<typeof Card> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    onClose?: () => void;
    closeLabel?: string;
};
/** A generic detail surface. Data loading and selection stay with the consumer. */
declare function DetailPanel({ title, description, actions, onClose, closeLabel, className, children, ...props }: DetailPanelProps): React.JSX.Element;
export { DetailPanel };
