"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "./button.js";
import { Input as n } from "./input.js";
import { Textarea as r } from "./textarea.js";
import "react";
import { jsx as i } from "react/jsx-runtime";
import { cva as a } from "class-variance-authority";
//#region src/components/ui/input-group.tsx
function o({ className: t, ...n }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "input-group",
		role: "group",
		className: e("group/input-group relative flex w-full items-center rounded-none border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-input/30", "h-9 min-w-0 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50", "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", t),
		...n
	});
}
var s = a("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
		"inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
		"block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
		"block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
	} },
	defaultVariants: { align: "inline-start" }
});
function c({ className: t, align: n = "inline-start", ...r }) {
	return /* @__PURE__ */ i("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": n,
		className: e(s({ align: n }), t),
		onClick: (e) => {
			e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...r
	});
}
var l = a("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "h-8 gap-1.5 rounded-none px-2.5 has-[>svg]:px-2.5",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function u({ className: n, type: r = "button", variant: a = "ghost", size: o = "xs", ...s }) {
	return /* @__PURE__ */ i(t, {
		type: r,
		"data-size": o,
		variant: a,
		className: e(l({ size: o }), n),
		...s
	});
}
function d({ className: t, ...n }) {
	return /* @__PURE__ */ i("span", {
		className: e("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", t),
		...n
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ i(n, {
		"data-slot": "input-group-control",
		className: e("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", t),
		...r
	});
}
function p({ className: t, ...n }) {
	return /* @__PURE__ */ i(r, {
		"data-slot": "input-group-control",
		className: e("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", t),
		...n
	});
}
//#endregion
export { o as InputGroup, c as InputGroupAddon, u as InputGroupButton, f as InputGroupInput, d as InputGroupText, p as InputGroupTextarea };
