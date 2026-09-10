"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "./button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import "react";
import { AlertDialog as i } from "radix-ui";
//#region src/components/ui/alert-dialog.tsx
function a({ ...e }) {
	return /* @__PURE__ */ n(i.Root, {
		"data-slot": "alert-dialog",
		...e
	});
}
function o({ ...e }) {
	return /* @__PURE__ */ n(i.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...e
	});
}
function s({ ...e }) {
	return /* @__PURE__ */ n(i.Portal, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function c({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: e("fixed inset-0 z-50 bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", t),
		...r
	});
}
function l({ className: t, size: a = "default", ...o }) {
	return /* @__PURE__ */ r(s, { children: [/* @__PURE__ */ n(c, {}), /* @__PURE__ */ n(i.Content, {
		"data-slot": "alert-dialog-content",
		"data-size": a,
		className: e("group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-none border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg", t),
		...o
	})] });
}
function u({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "alert-dialog-header",
		className: e("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", t),
		...r
	});
}
function d({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "alert-dialog-footer",
		className: e("flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", t),
		...r
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Title, {
		"data-slot": "alert-dialog-title",
		className: e("text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", t),
		...r
	});
}
function p({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Description, {
		"data-slot": "alert-dialog-description",
		className: e("text-sm text-muted-foreground", t),
		...r
	});
}
function m({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "alert-dialog-media",
		className: e("mb-2 inline-flex size-16 items-center justify-center rounded-none bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8", t),
		...r
	});
}
function h({ className: r, variant: a = "default", size: o = "default", ...s }) {
	return /* @__PURE__ */ n(t, {
		variant: a,
		size: o,
		asChild: !0,
		children: /* @__PURE__ */ n(i.Action, {
			"data-slot": "alert-dialog-action",
			className: e(r),
			...s
		})
	});
}
function g({ className: r, variant: a = "outline", size: o = "default", ...s }) {
	return /* @__PURE__ */ n(t, {
		variant: a,
		size: o,
		asChild: !0,
		children: /* @__PURE__ */ n(i.Cancel, {
			"data-slot": "alert-dialog-cancel",
			className: e(r),
			...s
		})
	});
}
//#endregion
export { a as AlertDialog, h as AlertDialogAction, g as AlertDialogCancel, l as AlertDialogContent, p as AlertDialogDescription, d as AlertDialogFooter, u as AlertDialogHeader, m as AlertDialogMedia, c as AlertDialogOverlay, s as AlertDialogPortal, f as AlertDialogTitle, o as AlertDialogTrigger };
