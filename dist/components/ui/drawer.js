"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
import { Drawer as r } from "vaul";
//#region src/components/ui/drawer.tsx
function i({ ...e }) {
	return /* @__PURE__ */ t(r.Root, {
		"data-slot": "drawer",
		...e
	});
}
function a({ ...e }) {
	return /* @__PURE__ */ t(r.Trigger, {
		"data-slot": "drawer-trigger",
		...e
	});
}
function o({ ...e }) {
	return /* @__PURE__ */ t(r.Portal, {
		"data-slot": "drawer-portal",
		...e
	});
}
function s({ ...e }) {
	return /* @__PURE__ */ t(r.Close, {
		"data-slot": "drawer-close",
		...e
	});
}
function c({ className: n, ...i }) {
	return /* @__PURE__ */ t(r.Overlay, {
		"data-slot": "drawer-overlay",
		className: e("fixed inset-0 z-50 bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", n),
		...i
	});
}
function l({ className: i, children: a, ...s }) {
	return /* @__PURE__ */ n(o, {
		"data-slot": "drawer-portal",
		children: [/* @__PURE__ */ t(c, {}), /* @__PURE__ */ n(r.Content, {
			"data-slot": "drawer-content",
			className: e("group/drawer-content fixed z-50 flex h-auto flex-col bg-background", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", i),
			...s,
			children: [/* @__PURE__ */ t("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }), a]
		})]
	});
}
function u({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "drawer-header",
		className: e("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", n),
		...r
	});
}
function d({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "drawer-footer",
		className: e("mt-auto flex flex-col gap-2 p-4", n),
		...r
	});
}
function f({ className: n, ...i }) {
	return /* @__PURE__ */ t(r.Title, {
		"data-slot": "drawer-title",
		className: e("font-semibold text-foreground", n),
		...i
	});
}
function p({ className: n, ...i }) {
	return /* @__PURE__ */ t(r.Description, {
		"data-slot": "drawer-description",
		className: e("text-sm text-muted-foreground", n),
		...i
	});
}
//#endregion
export { i as Drawer, s as DrawerClose, l as DrawerContent, p as DrawerDescription, d as DrawerFooter, u as DrawerHeader, c as DrawerOverlay, o as DrawerPortal, f as DrawerTitle, a as DrawerTrigger };
