import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronDownIcon as t } from "./icons.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/native-select.tsx
function i({ className: i, size: a = "default", ...o }) {
	return /* @__PURE__ */ r("div", {
		className: "group/native-select relative w-full has-[select:disabled]:opacity-50",
		"data-slot": "native-select-wrapper",
		children: [/* @__PURE__ */ n("select", {
			size: typeof a == "number" ? a : void 0,
			"data-slot": "native-select",
			"data-size": a,
			className: e("h-9 w-full min-w-0 appearance-none rounded-none border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-input/30 dark:hover:bg-input/50", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", i),
			...o
		}), /* @__PURE__ */ n(t, {
			className: "pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground opacity-50 select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]
	});
}
function a({ className: t, ...r }) {
	return /* @__PURE__ */ n("option", {
		"data-slot": "native-select-option",
		className: e("bg-[Canvas] text-[CanvasText]", t),
		...r
	});
}
function o({ className: t, ...r }) {
	return /* @__PURE__ */ n("optgroup", {
		"data-slot": "native-select-optgroup",
		className: e("bg-[Canvas] text-[CanvasText]", t),
		...r
	});
}
//#endregion
export { i as NativeSelect, o as NativeSelectOptGroup, a as NativeSelectOption };
