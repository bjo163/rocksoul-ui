import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/kbd.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("kbd", {
		"data-slot": "kbd",
		className: e("pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-none bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none", "[&_svg:not([class*='size-'])]:size-3", "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10", n),
		...r
	});
}
function r({ className: n, ...r }) {
	return /* @__PURE__ */ t("kbd", {
		"data-slot": "kbd-group",
		className: e("inline-flex items-center gap-1", n),
		...r
	});
}
//#endregion
export { n as Kbd, r as KbdGroup };
