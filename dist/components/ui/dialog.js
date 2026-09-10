"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { XIcon as t } from "./icons.js";
import { Button as n } from "./button.js";
import "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Dialog as a } from "radix-ui";
//#region src/components/ui/dialog.tsx
function o({ ...e }) {
	return /* @__PURE__ */ r(a.Root, {
		"data-slot": "dialog",
		...e
	});
}
function s({ ...e }) {
	return /* @__PURE__ */ r(a.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ r(a.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function l({ ...e }) {
	return /* @__PURE__ */ r(a.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function u({ className: t, ...n }) {
	return /* @__PURE__ */ r(a.Overlay, {
		"data-slot": "dialog-overlay",
		className: e("fixed inset-0 z-50 bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", t),
		...n
	});
}
function d({ className: n, children: o, showCloseButton: s = !0, ...l }) {
	return /* @__PURE__ */ i(c, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ r(u, {}), /* @__PURE__ */ i(a.Content, {
			"data-slot": "dialog-content",
			className: e("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-none border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", n),
			...l,
			children: [o, s && /* @__PURE__ */ i(a.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ r(t, {}), /* @__PURE__ */ r("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function f({ className: t, ...n }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "dialog-header",
		className: e("flex flex-col gap-2 text-center sm:text-left", t),
		...n
	});
}
function p({ className: t, showCloseButton: o = !1, children: s, ...c }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "dialog-footer",
		className: e("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
		...c,
		children: [s, o && /* @__PURE__ */ r(a.Close, {
			asChild: !0,
			children: /* @__PURE__ */ r(n, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function m({ className: t, ...n }) {
	return /* @__PURE__ */ r(a.Title, {
		"data-slot": "dialog-title",
		className: e("text-lg leading-none font-semibold", t),
		...n
	});
}
function h({ className: t, ...n }) {
	return /* @__PURE__ */ r(a.Description, {
		"data-slot": "dialog-description",
		className: e("text-sm text-muted-foreground", t),
		...n
	});
}
//#endregion
export { o as Dialog, l as DialogClose, d as DialogContent, h as DialogDescription, p as DialogFooter, f as DialogHeader, u as DialogOverlay, c as DialogPortal, m as DialogTitle, s as DialogTrigger };
