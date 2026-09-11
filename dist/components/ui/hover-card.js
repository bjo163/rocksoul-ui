"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { HoverCard as n } from "radix-ui";
//#region src/components/ui/hover-card.tsx
function r({ ...e }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "hover-card",
		...e
	});
}
function i({ ...e }) {
	return /* @__PURE__ */ t(n.Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function a({ className: r, align: i = "center", sideOffset: a = 4, ...o }) {
	return /* @__PURE__ */ t(n.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ t(n.Content, {
			"data-slot": "hover-card-content",
			align: i,
			sideOffset: a,
			className: e("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-none border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", r),
			...o
		})
	});
}
//#endregion
export { r as HoverCard, a as HoverCardContent, i as HoverCardTrigger };
