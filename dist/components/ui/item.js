import { t as e } from "../../cn-DhjIN-s0.js";
import { Separator as t } from "./separator.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
import { Slot as r } from "radix-ui";
import { cva as i } from "class-variance-authority";
//#region src/components/ui/item.tsx
function a({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		role: "list",
		"data-slot": "item-group",
		className: e("group/item-group flex flex-col", t),
		...r
	});
}
function o({ className: r, ...i }) {
	return /* @__PURE__ */ n(t, {
		"data-slot": "item-separator",
		orientation: "horizontal",
		className: e("my-0", r),
		...i
	});
}
var s = i("group/item flex flex-wrap items-center rounded-none border border-transparent text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-accent/50", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-border",
			muted: "bg-muted/50"
		},
		size: {
			default: "gap-4 p-4",
			sm: "gap-2.5 px-4 py-3"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function c({ className: t, variant: i = "default", size: a = "default", asChild: o = !1, ...c }) {
	let l = o ? r.Root : "div";
	return /* @__PURE__ */ n(l, {
		"data-slot": "item",
		"data-variant": i,
		"data-size": a,
		className: e(s({
			variant: i,
			size: a,
			className: t
		})),
		...c
	});
}
var l = i("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "size-8 rounded-none border bg-muted [&_svg:not([class*='size-'])]:size-4",
		image: "size-10 overflow-hidden rounded-none [&_img]:size-full [&_img]:object-cover"
	} },
	defaultVariants: { variant: "default" }
});
function u({ className: t, variant: r = "default", ...i }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-media",
		"data-variant": r,
		className: e(l({
			variant: r,
			className: t
		})),
		...i
	});
}
function d({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-content",
		className: e("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", t),
		...r
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-title",
		className: e("flex w-fit items-center gap-2 text-sm leading-snug font-medium", t),
		...r
	});
}
function p({ className: t, ...r }) {
	return /* @__PURE__ */ n("p", {
		"data-slot": "item-description",
		className: e("line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", t),
		...r
	});
}
function m({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-actions",
		className: e("flex items-center gap-2", t),
		...r
	});
}
function h({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-header",
		className: e("flex basis-full items-center justify-between gap-2", t),
		...r
	});
}
function g({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "item-footer",
		className: e("flex basis-full items-center justify-between gap-2", t),
		...r
	});
}
//#endregion
export { c as Item, m as ItemActions, d as ItemContent, p as ItemDescription, g as ItemFooter, a as ItemGroup, h as ItemHeader, u as ItemMedia, o as ItemSeparator, f as ItemTitle };
