"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { XIcon as t } from "./icons.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import "react";
import { Dialog as i } from "radix-ui";
//#region src/components/ui/sheet.tsx
function a({ ...e }) {
	return /* @__PURE__ */ n(i.Root, {
		"data-slot": "sheet",
		...e
	});
}
function o({ ...e }) {
	return /* @__PURE__ */ n(i.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function s({ ...e }) {
	return /* @__PURE__ */ n(i.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ n(i.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function l({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Overlay, {
		"data-slot": "sheet-overlay",
		className: e("fixed inset-0 z-50 bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", t),
		...r
	});
}
function u({ className: a, children: o, side: s = "right", showCloseButton: u = !0, ...d }) {
	return /* @__PURE__ */ r(c, { children: [/* @__PURE__ */ n(l, {}), /* @__PURE__ */ r(i.Content, {
		"data-slot": "sheet-content",
		className: e("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", s === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", s === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", s === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", s === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", a),
		...d,
		children: [o, u && /* @__PURE__ */ r(i.Close, {
			className: "absolute top-4 right-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ n(t, { className: "size-4" }), /* @__PURE__ */ n("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function d({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "sheet-header",
		className: e("flex flex-col gap-1.5 p-4", t),
		...r
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "sheet-footer",
		className: e("mt-auto flex flex-col gap-2 p-4", t),
		...r
	});
}
function p({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Title, {
		"data-slot": "sheet-title",
		className: e("font-semibold text-foreground", t),
		...r
	});
}
function m({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Description, {
		"data-slot": "sheet-description",
		className: e("text-sm text-muted-foreground", t),
		...r
	});
}
//#endregion
export { a as Sheet, s as SheetClose, u as SheetContent, m as SheetDescription, f as SheetFooter, d as SheetHeader, p as SheetTitle, o as SheetTrigger };
