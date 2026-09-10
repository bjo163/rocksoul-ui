import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronLeftIcon as t, ChevronRight as n, MoreHorizontal as r } from "./icons.js";
import { buttonVariants as i } from "./button.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import "react";
//#region src/components/ui/pagination.tsx
function s({ className: t, ...n }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "Pagination",
		"data-slot": "pagination",
		className: e("mx-auto flex w-full justify-center", t),
		...n
	});
}
function c({ className: t, ...n }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: e("flex flex-row items-center gap-1", t),
		...n
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function u({ className: t, isActive: n, size: r = "icon", ...o }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": n ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": n,
		className: e(i({
			variant: n ? "outline" : "ghost",
			size: r
		}), t),
		...o
	});
}
function d({ className: n, ...r }) {
	return /* @__PURE__ */ o(u, {
		"aria-label": "Go to previous page",
		size: "default",
		className: e("gap-1 px-2.5 sm:pl-2.5", n),
		...r,
		children: [/* @__PURE__ */ a(t, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ o(u, {
		"aria-label": "Go to next page",
		size: "default",
		className: e("gap-1 px-2.5 sm:pr-2.5", t),
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(n, {})]
	});
}
function p({ className: t, ...n }) {
	return /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: e("flex size-9 items-center justify-center", t),
		...n,
		children: [/* @__PURE__ */ a(r, { className: "size-4" }), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
//#endregion
export { s as Pagination, c as PaginationContent, p as PaginationEllipsis, l as PaginationItem, u as PaginationLink, f as PaginationNext, d as PaginationPrevious };
