"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t, ChevronDownIcon as n, ChevronUpIcon as r } from "./icons.js";
import "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { Select as o } from "radix-ui";
//#region src/components/ui/select.tsx
function s({ ...e }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "select",
		...e
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ i(o.Group, {
		"data-slot": "select-group",
		...e
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ i(o.Value, {
		"data-slot": "select-value",
		...e
	});
}
function u({ className: t, size: r = "default", children: s, ...c }) {
	return /* @__PURE__ */ a(o.Trigger, {
		"data-slot": "select-trigger",
		"data-size": r,
		className: e("flex w-fit items-center justify-between gap-2 rounded-none border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", t),
		...c,
		children: [s, /* @__PURE__ */ i(o.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ i(n, { className: "size-4 opacity-50" })
		})]
	});
}
function d({ className: t, children: n, position: r = "item-aligned", align: s = "center", ...c }) {
	return /* @__PURE__ */ i(o.Portal, { children: /* @__PURE__ */ a(o.Content, {
		"data-slot": "select-content",
		className: e("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t),
		position: r,
		align: s,
		...c,
		children: [
			/* @__PURE__ */ i(h, {}),
			/* @__PURE__ */ i(o.Viewport, {
				className: e("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: n
			}),
			/* @__PURE__ */ i(g, {})
		]
	}) });
}
function f({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Label, {
		"data-slot": "select-label",
		className: e("px-2 py-1.5 text-xs text-muted-foreground", t),
		...n
	});
}
function p({ className: n, children: r, ...s }) {
	return /* @__PURE__ */ a(o.Item, {
		"data-slot": "select-item",
		className: e("relative flex w-full cursor-default items-center gap-2 rounded-none py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", n),
		...s,
		children: [/* @__PURE__ */ i("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(t, { className: "size-4" }) })
		}), /* @__PURE__ */ i(o.ItemText, { children: r })]
	});
}
function m({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Separator, {
		"data-slot": "select-separator",
		className: e("pointer-events-none -mx-1 my-1 h-px bg-border", t),
		...n
	});
}
function h({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: e("flex cursor-default items-center justify-center py-1", t),
		...n,
		children: /* @__PURE__ */ i(r, { className: "size-4" })
	});
}
function g({ className: t, ...r }) {
	return /* @__PURE__ */ i(o.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: e("flex cursor-default items-center justify-center py-1", t),
		...r,
		children: /* @__PURE__ */ i(n, { className: "size-4" })
	});
}
//#endregion
export { s as Select, d as SelectContent, c as SelectGroup, p as SelectItem, f as SelectLabel, g as SelectScrollDownButton, h as SelectScrollUpButton, m as SelectSeparator, u as SelectTrigger, l as SelectValue };
