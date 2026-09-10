"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t, ChevronRight as n, CircleIcon as r } from "./icons.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import "react";
import { DropdownMenu as o } from "radix-ui";
//#region src/components/ui/dropdown-menu.tsx
function s({ ...e }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ i(o.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ i(o.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function u({ className: t, sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ i(o.Portal, { children: /* @__PURE__ */ i(o.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: n,
		className: e("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...r
	}) });
}
function d({ ...e }) {
	return /* @__PURE__ */ i(o.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function f({ className: t, inset: n, variant: r = "default", ...a }) {
	return /* @__PURE__ */ i(o.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": n,
		"data-variant": r,
		className: e("relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!", t),
		...a
	});
}
function p({ className: n, children: r, checked: s, ...c }) {
	return /* @__PURE__ */ a(o.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
		checked: s,
		...c,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(t, { className: "size-4" }) })
		}), r]
	});
}
function m({ ...e }) {
	return /* @__PURE__ */ i(o.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function h({ className: t, children: n, ...s }) {
	return /* @__PURE__ */ a(o.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
		...s,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(o.ItemIndicator, { children: /* @__PURE__ */ i(r, { className: "size-2 fill-current" }) })
		}), n]
	});
}
function g({ className: t, inset: n, ...r }) {
	return /* @__PURE__ */ i(o.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": n,
		className: e("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t),
		...r
	});
}
function _({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: e("-mx-1 my-1 h-px bg-border", t),
		...n
	});
}
function v({ className: t, ...n }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: e("ml-auto text-xs tracking-widest text-muted-foreground", t),
		...n
	});
}
function y({ ...e }) {
	return /* @__PURE__ */ i(o.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function b({ className: t, inset: r, children: s, ...c }) {
	return /* @__PURE__ */ a(o.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": r,
		className: e("flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", t),
		...c,
		children: [s, /* @__PURE__ */ i(n, { className: "ml-auto size-4" })]
	});
}
function x({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: e("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", t),
		...n
	});
}
//#endregion
export { s as DropdownMenu, p as DropdownMenuCheckboxItem, u as DropdownMenuContent, d as DropdownMenuGroup, f as DropdownMenuItem, g as DropdownMenuLabel, c as DropdownMenuPortal, m as DropdownMenuRadioGroup, h as DropdownMenuRadioItem, _ as DropdownMenuSeparator, v as DropdownMenuShortcut, y as DropdownMenuSub, x as DropdownMenuSubContent, b as DropdownMenuSubTrigger, l as DropdownMenuTrigger };
