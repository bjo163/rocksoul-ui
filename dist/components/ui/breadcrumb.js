import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronRight as t, MoreHorizontal as n } from "./icons.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import "react";
import { Slot as a } from "radix-ui";
//#region src/components/ui/breadcrumb.tsx
function o({ ...e }) {
	return /* @__PURE__ */ r("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function s({ className: t, ...n }) {
	return /* @__PURE__ */ r("ol", {
		"data-slot": "breadcrumb-list",
		className: e("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", t),
		...n
	});
}
function c({ className: t, ...n }) {
	return /* @__PURE__ */ r("li", {
		"data-slot": "breadcrumb-item",
		className: e("inline-flex items-center gap-1.5", t),
		...n
	});
}
function l({ asChild: t, className: n, ...i }) {
	let o = t ? a.Root : "a";
	return /* @__PURE__ */ r(o, {
		"data-slot": "breadcrumb-link",
		className: e("transition-colors hover:text-foreground", n),
		...i
	});
}
function u({ className: t, ...n }) {
	return /* @__PURE__ */ r("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: e("font-normal text-foreground", t),
		...n
	});
}
function d({ children: n, className: i, ...a }) {
	return /* @__PURE__ */ r("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: e("[&>svg]:size-3.5", i),
		...a,
		children: n ?? /* @__PURE__ */ r(t, {})
	});
}
function f({ className: t, ...a }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: e("flex size-9 items-center justify-center", t),
		...a,
		children: [/* @__PURE__ */ r(n, { className: "size-4" }), /* @__PURE__ */ r("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
//#endregion
export { o as Breadcrumb, f as BreadcrumbEllipsis, c as BreadcrumbItem, l as BreadcrumbLink, s as BreadcrumbList, u as BreadcrumbPage, d as BreadcrumbSeparator };
