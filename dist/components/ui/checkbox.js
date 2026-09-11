"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t } from "./icons.js";
import { jsx as n } from "react/jsx-runtime";
import "react";
import { Checkbox as r } from "radix-ui";
//#region src/components/ui/checkbox.tsx
function i({ className: i, ...a }) {
	return /* @__PURE__ */ n(r.Root, {
		"data-slot": "checkbox",
		className: e("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", i),
		...a,
		children: /* @__PURE__ */ n(r.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ n(t, { className: "size-3.5" })
		})
	});
}
//#endregion
export { i as Checkbox };
