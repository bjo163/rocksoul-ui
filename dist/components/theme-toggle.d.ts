export type ThemePreference = "light" | "dark" | "system";
type EffectiveTheme = "light" | "dark";
export declare function resolveTheme(preference: ThemePreference): EffectiveTheme;
export declare function applyTheme(preference: ThemePreference): void;
export declare function ThemeToggle(): import("react").JSX.Element;
export {};
