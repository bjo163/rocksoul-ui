import { t as e } from "../../cn-DhjIN-s0.js";
import { Separator as t } from "./separator.js";
import { jsx as n } from "react/jsx-runtime";
import { Slot as r } from "radix-ui";
import { cva as i } from "class-variance-authority";
//#region src/components/ui/button-group.tsx
var a = i("flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
		vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function o({ className: t, orientation: r, ...i }) {
	return /* @__PURE__ */ n("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": r,
		className: e(a({ orientation: r }), t),
		...i
	});
}
function s({ className: t, asChild: i = !1, ...a }) {
	let o = i ? r.Root : "div";
	return /* @__PURE__ */ n(o, {
		className: e("flex items-center gap-2 rounded-none border bg-muted px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", t),
		...a
	});
}
function c({ className: r, orientation: i = "vertical", ...a }) {
	return /* @__PURE__ */ n(t, {
		"data-slot": "button-group-separator",
		orientation: i,
		className: e("relative m-0! self-stretch bg-input data-[orientation=vertical]:h-auto", r),
		...a
	});
}
//#endregion
export { o as ButtonGroup, c as ButtonGroupSeparator, s as ButtonGroupText, a as buttonGroupVariants };
