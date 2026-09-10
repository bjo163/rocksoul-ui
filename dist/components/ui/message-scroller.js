"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ArrowDownIcon as t } from "./icons.js";
import { Button as n } from "./button.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import "react";
import { MessageScroller as o, useMessageScroller as s, useMessageScrollerScrollable as c, useMessageScrollerVisibility as l } from "@shadcn/react/message-scroller";
//#region src/components/ui/message-scroller.tsx
function u(e) {
	return /* @__PURE__ */ i(o.Provider, { ...e });
}
function d({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "message-scroller",
		className: e("group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden", t),
		...n
	});
}
function f({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Viewport, {
		"data-slot": "message-scroller-viewport",
		className: e("size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-none data-pending-scroll:invisible", t),
		...n
	});
}
function p({ className: t, ...n }) {
	return /* @__PURE__ */ i(o.Content, {
		"data-slot": "message-scroller-content",
		className: e("flex h-max min-h-full flex-col gap-8", t),
		...n
	});
}
function m({ className: t, scrollAnchor: n = !1, ...r }) {
	return /* @__PURE__ */ i(o.Item, {
		"data-slot": "message-scroller-item",
		scrollAnchor: n,
		className: e("min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]", t),
		...r
	});
}
function h({ direction: s = "end", className: c, children: l, render: u, variant: d = "secondary", size: f = "icon-sm", ...p }) {
	return /* @__PURE__ */ i(o.Button, {
		"data-slot": "message-scroller-button",
		"data-direction": s,
		"data-variant": d,
		"data-size": f,
		direction: s,
		className: e("absolute inset-s-1/2 -translate-x-1/2 border-border bg-background text-foreground transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180", c),
		render: u ?? /* @__PURE__ */ i(n, {
			variant: d,
			size: f
		}),
		...p,
		children: l ?? /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(t, {}), /* @__PURE__ */ i("span", {
			className: "sr-only",
			children: s === "end" ? "Scroll to end" : "Scroll to start"
		})] })
	});
}
//#endregion
export { d as MessageScroller, h as MessageScrollerButton, p as MessageScrollerContent, m as MessageScrollerItem, u as MessageScrollerProvider, f as MessageScrollerViewport, s as useMessageScroller, c as useMessageScrollerScrollable, l as useMessageScrollerVisibility };
