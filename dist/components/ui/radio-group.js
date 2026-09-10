"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CircleIcon as t } from "./icons.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
import { RadioGroup as r } from "radix-ui";
//#region src/components/ui/radio-group.tsx
function i({ className: t, ...i }) {
	return /* @__PURE__ */ n(r.Root, {
		"data-slot": "radio-group",
		className: e("grid gap-3", t),
		...i
	});
}
function a({ className: i, ...a }) {
	return /* @__PURE__ */ n(r.Item, {
		"data-slot": "radio-group-item",
		className: e("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", i),
		...a,
		children: /* @__PURE__ */ n(r.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ n(t, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
export { i as RadioGroup, a as RadioGroupItem };
