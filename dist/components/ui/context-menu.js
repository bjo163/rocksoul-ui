"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t, ChevronRight as n, CircleIcon as r } from "./icons.js";
import "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { ContextMenu as o } from "radix-ui";
//#region src/components/ui/context-menu.tsx
function s({ ...e }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "context-menu",
		...e
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ i(o.Trigger, {
		"data-slot": "context-menu-trigger",
		...e
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ i(o.Group, {
		"data-slot": "context-menu-group",
		...e
	});
}
function u({ ...e }) {
	return /* @__PURE__ */ i(o.Portal, {
		"data-slot": "context-menu-portal",
		...e
	});
}
function d({ ...e }) {
	return /* @__PURE__ */ i(o.Sub, {
		"data-slot": "context-menu-sub",
		...e
	});
}
function f({ ...e }) {
	return /* @__PURE__ */ i(o.RadioGroup, {
		"data-slot": "context-menu-radio-group",
		...e
	});
}
function p({ className: t, inset: r, children: s, ...c }) {
	return /* @__PURE__ */ a(o.SubTrigger, {
		"data-slot": "context-menu-sub-trigger",
		"data-inset": r,
		className: e("flex cursor-default items-center rounded-none px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", t),
		...c,
		children: [s, /* @__PURE__ */ i(n, { className: "ml-auto" })]
	});
}
function m({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.SubContent, {
		"data-slot": "context-menu-sub-content",
		className: e("z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...n
	});
}
function h({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Portal, { children: /* @__PURE__ */ i(o.Content, {
		"data-slot": "context-menu-content",
		className: e("z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...n
	}) });
}
function g({ className: t, inset: n, variant: r = "default", ...a }) {
	return /* @__PURE__ */ i(o.Item, {
		"data-slot": "context-menu-item",
		"data-inset": n,
		"data-variant": r,
		className: e("relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!", t),
		...a
	});
}
function _({ className: n, children: r, checked: s, ...c }) {
	return /* @__PURE__ */ a(o.CheckboxItem, {
		"data-slot": "context-menu-checkbox-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
		checked: s,
		...c,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(t, { className: "size-4" }) })
		}), r]
	});
}
function v({ className: t, children: n, ...s }) {
	return /* @__PURE__ */ a(o.RadioItem, {
		"data-slot": "context-menu-radio-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
		...s,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(r, { className: "size-2 fill-current" }) })
		}), n]
	});
}
function y({ className: t, inset: n, ...r }) {
	return /* @__PURE__ */ i(o.Label, {
		"data-slot": "context-menu-label",
		"data-inset": n,
		className: e("px-2 py-1.5 text-sm font-medium text-foreground data-[inset]:pl-8", t),
		...r
	});
}
function b({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Separator, {
		"data-slot": "context-menu-separator",
		className: e("-mx-1 my-1 h-px bg-border", t),
		...n
	});
}
function x({ className: t, ...n }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "context-menu-shortcut",
		className: e("ml-auto text-xs tracking-widest text-muted-foreground", t),
		...n
	});
}
//#endregion
export { s as ContextMenu, _ as ContextMenuCheckboxItem, h as ContextMenuContent, l as ContextMenuGroup, g as ContextMenuItem, y as ContextMenuLabel, u as ContextMenuPortal, f as ContextMenuRadioGroup, v as ContextMenuRadioItem, b as ContextMenuSeparator, x as ContextMenuShortcut, d as ContextMenuSub, m as ContextMenuSubContent, p as ContextMenuSubTrigger, c as ContextMenuTrigger };
