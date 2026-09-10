import { type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label: string;
    helper?: string;
    error?: string;
    variant?: "default" | "search";
    size?: "md" | "lg";
}
export declare function Input({ label, helper, error, variant, size, id: providedId, className, ...props }: InputProps): import("react").JSX.Element;
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    helper?: string;
    error?: string;
    characterCount?: boolean;
}
export declare function Textarea({ label, helper, error, characterCount, id: providedId, className, maxLength, value, defaultValue, onChange, ...props }: TextareaProps): import("react").JSX.Element;
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    helper?: string;
    error?: string;
    options: Array<{
        label: string;
        value: string;
    }>;
}
export declare function Select({ label, helper, error, options, id: providedId, className, ...props }: SelectProps): import("react").JSX.Element;
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    description?: string;
    indeterminate?: boolean;
}
export declare function Checkbox({ label, description, indeterminate, disabled, ...props }: CheckboxProps): import("react").JSX.Element;
export declare function Radio({ label, description, disabled, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
    description?: string;
}): import("react").JSX.Element;
export declare function Switch({ label, description, disabled, id: providedId, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
    description?: string;
}): import("react").JSX.Element;
