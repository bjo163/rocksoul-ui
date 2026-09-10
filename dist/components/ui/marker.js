import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { Slot as n } from "radix-ui";
import { cva as r } from "class-variance-authority";
//#region src/components/ui/marker.tsx
var i = r("group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground", { variants: { variant: {
	default: "",
	separator: "before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
	border: "border-b border-border pb-2"
} } });
function a({ className: r, variant: a = "default", asChild: o = !1, ...s }) {
	let c = o ? n.Root : "div";
	return /* @__PURE__ */ t(c, {
		"data-slot": "marker",
		"data-variant": a,
		className: e(i({
			variant: a,
			className: r
		})),
		...s
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("span", {
		"data-slot": "marker-icon",
		"aria-hidden": "true",
		className: e("size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
		...r
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("span", {
		"data-slot": "marker-content",
		className: e("min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", n),
		...r
	});
}
//#endregion
export { a as Marker, s as MarkerContent, o as MarkerIcon, i as markerVariants };
