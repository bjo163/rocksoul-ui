"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t, ChevronRight as n, CircleIcon as r } from "./icons.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import "react";
import { Menubar as o } from "radix-ui";
//#region src/components/ui/menubar.tsx
function s({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "menubar",
		className: e("flex h-9 items-center gap-1 rounded-none border bg-background p-1 shadow-xs", t),
		...n
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ i(o.Menu, {
		"data-slot": "menubar-menu",
		...e
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ i(o.Group, {
		"data-slot": "menubar-group",
		...e
	});
}
function u({ ...e }) {
	return /* @__PURE__ */ i(o.Portal, {
		"data-slot": "menubar-portal",
		...e
	});
}
function d({ ...e }) {
	return /* @__PURE__ */ i(o.RadioGroup, {
		"data-slot": "menubar-radio-group",
		...e
	});
}
function f({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Trigger, {
		"data-slot": "menubar-trigger",
		className: e("flex items-center rounded-none px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", t),
		...n
	});
}
function p({ className: t, align: n = "start", alignOffset: r = -4, sideOffset: a = 8, ...s }) {
	return /* @__PURE__ */ i(u, { children: /* @__PURE__ */ i(o.Content, {
		"data-slot": "menubar-content",
		align: n,
		alignOffset: r,
		sideOffset: a,
		className: e("z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...s
	}) });
}
function m({ className: t, inset: n, variant: r = "default", ...a }) {
	return /* @__PURE__ */ i(o.Item, {
		"data-slot": "menubar-item",
		"data-inset": n,
		"data-variant": r,
		className: e("relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!", t),
		...a
	});
}
function h({ className: n, children: r, checked: s, ...c }) {
	return /* @__PURE__ */ a(o.CheckboxItem, {
		"data-slot": "menubar-checkbox-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
		checked: s,
		...c,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(t, { className: "size-4" }) })
		}), r]
	});
}
function g({ className: t, children: n, ...s }) {
	return /* @__PURE__ */ a(o.RadioItem, {
		"data-slot": "menubar-radio-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
		...s,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(r, { className: "size-2 fill-current" }) })
		}), n]
	});
}
function _({ className: t, inset: n, ...r }) {
	return /* @__PURE__ */ i(o.Label, {
		"data-slot": "menubar-label",
		"data-inset": n,
		className: e("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t),
		...r
	});
}
function v({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Separator, {
		"data-slot": "menubar-separator",
		className: e("-mx-1 my-1 h-px bg-border", t),
		...n
	});
}
function y({ className: t, ...n }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "menubar-shortcut",
		className: e("ml-auto text-xs tracking-widest text-muted-foreground", t),
		...n
	});
}
function b({ ...e }) {
	return /* @__PURE__ */ i(o.Sub, {
		"data-slot": "menubar-sub",
		...e
	});
}
function x({ className: t, inset: r, children: s, ...c }) {
	return /* @__PURE__ */ a(o.SubTrigger, {
		"data-slot": "menubar-sub-trigger",
		"data-inset": r,
		className: e("flex cursor-default items-center rounded-none px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", t),
		...c,
		children: [s, /* @__PURE__ */ i(n, { className: "ml-auto h-4 w-4" })]
	});
}
function S({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.SubContent, {
		"data-slot": "menubar-sub-content",
		className: e("z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...n
	});
}
//#endregion
export { s as Menubar, h as MenubarCheckboxItem, p as MenubarContent, l as MenubarGroup, m as MenubarItem, _ as MenubarLabel, c as MenubarMenu, u as MenubarPortal, d as MenubarRadioGroup, g as MenubarRadioItem, v as MenubarSeparator, y as MenubarShortcut, b as MenubarSub, S as MenubarSubContent, x as MenubarSubTrigger, f as MenubarTrigger };
