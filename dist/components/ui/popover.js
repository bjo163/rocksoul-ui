"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { Popover as n } from "radix-ui";
//#region src/components/ui/popover.tsx
function r({ ...e }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "popover",
		...e
	});
}
function i({ ...e }) {
	return /* @__PURE__ */ t(n.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function a({ className: r, align: i = "center", sideOffset: a = 4, ...o }) {
	return /* @__PURE__ */ t(n.Portal, { children: /* @__PURE__ */ t(n.Content, {
		"data-slot": "popover-content",
		align: i,
		sideOffset: a,
		className: e("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-none border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", r),
		...o
	}) });
}
function o({ ...e }) {
	return /* @__PURE__ */ t(n.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "popover-header",
		className: e("flex flex-col gap-1 text-sm", n),
		...r
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "popover-title",
		className: e("font-medium", n),
		...r
	});
}
function l({ className: n, ...r }) {
	return /* @__PURE__ */ t("p", {
		"data-slot": "popover-description",
		className: e("text-muted-foreground", n),
		...r
	});
}
//#endregion
export { r as Popover, o as PopoverAnchor, a as PopoverContent, l as PopoverDescription, s as PopoverHeader, c as PopoverTitle, i as PopoverTrigger };
