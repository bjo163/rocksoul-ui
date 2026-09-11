"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { SearchIcon as t } from "./icons.js";
import { Dialog as n, DialogContent as r, DialogDescription as i, DialogHeader as a, DialogTitle as o } from "./dialog.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
import { Command as l } from "cmdk";
//#region src/components/ui/command.tsx
function u({ className: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		"data-slot": "command",
		className: e("flex h-full w-full flex-col overflow-hidden rounded-none bg-popover text-popover-foreground", t),
		...n
	});
}
function d({ title: t = "Command Palette", description: l = "Search for a command to run...", children: d, className: f, showCloseButton: p = !0, ...m }) {
	return /* @__PURE__ */ c(n, {
		...m,
		children: [/* @__PURE__ */ c(a, {
			className: "sr-only",
			children: [/* @__PURE__ */ s(o, { children: t }), /* @__PURE__ */ s(i, { children: l })]
		}), /* @__PURE__ */ s(r, {
			className: e("overflow-hidden p-0", f),
			showCloseButton: p,
			children: /* @__PURE__ */ s(u, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: d
			})
		})]
	});
}
function f({ className: n, ...r }) {
	return /* @__PURE__ */ c("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ s(t, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ s(l.Input, {
			"data-slot": "command-input",
			className: e("flex h-10 w-full rounded-none bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", n),
			...r
		})]
	});
}
function p({ className: t, ...n }) {
	return /* @__PURE__ */ s(l.List, {
		"data-slot": "command-list",
		className: e("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", t),
		...n
	});
}
function m({ ...e }) {
	return /* @__PURE__ */ s(l.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function h({ className: t, ...n }) {
	return /* @__PURE__ */ s(l.Group, {
		"data-slot": "command-group",
		className: e("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t),
		...n
	});
}
function g({ className: t, ...n }) {
	return /* @__PURE__ */ s(l.Separator, {
		"data-slot": "command-separator",
		className: e("-mx-1 h-px bg-border", t),
		...n
	});
}
function _({ className: t, ...n }) {
	return /* @__PURE__ */ s(l.Item, {
		"data-slot": "command-item",
		className: e("relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", t),
		...n
	});
}
function v({ className: t, ...n }) {
	return /* @__PURE__ */ s("span", {
		"data-slot": "command-shortcut",
		className: e("ml-auto text-xs tracking-widest text-muted-foreground", t),
		...n
	});
}
//#endregion
export { u as Command, d as CommandDialog, m as CommandEmpty, h as CommandGroup, f as CommandInput, _ as CommandItem, p as CommandList, g as CommandSeparator, v as CommandShortcut };
