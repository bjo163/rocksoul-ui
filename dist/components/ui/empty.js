import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
//#region src/components/ui/empty.tsx
function r({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty",
		className: e("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-none border-dashed p-6 text-center text-balance md:p-12", n),
		...r
	});
}
function i({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty-header",
		className: e("flex max-w-sm flex-col items-center gap-2 text-center", n),
		...r
	});
}
var a = n("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-10 shrink-0 items-center justify-center rounded-none bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
	} },
	defaultVariants: { variant: "default" }
});
function o({ className: n, variant: r = "default", ...i }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty-icon",
		"data-variant": r,
		className: e(a({
			variant: r,
			className: n
		})),
		...i
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty-title",
		className: e("text-lg font-medium tracking-tight", n),
		...r
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty-description",
		className: e("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", n),
		...r
	});
}
function l({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "empty-content",
		className: e("flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance", n),
		...r
	});
}
//#endregion
export { r as Empty, l as EmptyContent, c as EmptyDescription, i as EmptyHeader, o as EmptyMedia, s as EmptyTitle };
