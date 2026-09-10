"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
import { Tooltip as r } from "radix-ui";
//#region src/components/ui/tooltip.tsx
function i({ delayDuration: e = 0, ...n }) {
	return /* @__PURE__ */ t(r.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...n
	});
}
function a({ ...e }) {
	return /* @__PURE__ */ t(r.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function o({ ...e }) {
	return /* @__PURE__ */ t(r.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function s({ className: i, sideOffset: a = 0, children: o, ...s }) {
	return /* @__PURE__ */ t(r.Portal, { children: /* @__PURE__ */ n(r.Content, {
		"data-slot": "tooltip-content",
		sideOffset: a,
		className: e("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-none bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", i),
		...s,
		children: [o, /* @__PURE__ */ t(r.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
//#endregion
export { a as Tooltip, s as TooltipContent, i as TooltipProvider, o as TooltipTrigger };
