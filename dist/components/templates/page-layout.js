"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
//#region src/components/templates/page-layout.tsx
function r({ title: r, description: i, eyebrow: a, breadcrumbs: o, actions: s, className: c }) {
	return /* @__PURE__ */ n("header", {
		"data-slot": "page-header",
		className: e("grid gap-4 border-b border-border pb-5 md:flex md:items-end md:justify-between", c),
		children: [/* @__PURE__ */ n("div", {
			className: "min-w-0 space-y-2",
			children: [
				o ? /* @__PURE__ */ t("div", {
					className: "text-xs text-muted-foreground",
					children: o
				}) : null,
				a ? /* @__PURE__ */ t("p", {
					className: "font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground",
					children: a
				}) : null,
				/* @__PURE__ */ t("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: r
				}),
				i ? /* @__PURE__ */ t("p", {
					className: "max-w-2xl text-sm leading-6 text-muted-foreground",
					children: i
				}) : null
			]
		}), s ? /* @__PURE__ */ t("div", {
			className: "flex shrink-0 flex-wrap items-center gap-2",
			children: s
		}) : null]
	});
}
function i({ header: r, sidebar: i, children: a, footer: o, className: s, contentClassName: c }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "app-shell",
		className: e("min-h-screen bg-background text-foreground", s),
		children: [
			r ? /* @__PURE__ */ t("header", {
				"data-slot": "app-shell-header",
				className: "border-b border-border",
				children: r
			}) : null,
			/* @__PURE__ */ n("div", {
				className: "flex min-h-[calc(100vh-1px)]",
				children: [i ? /* @__PURE__ */ t("aside", {
					"data-slot": "app-shell-sidebar",
					className: "hidden w-64 shrink-0 border-r border-border lg:block",
					children: i
				}) : null, /* @__PURE__ */ t("main", {
					"data-slot": "app-shell-content",
					className: e("min-w-0 flex-1", c),
					children: a
				})]
			}),
			o ? /* @__PURE__ */ t("footer", {
				"data-slot": "app-shell-footer",
				className: "border-t border-border",
				children: o
			}) : null
		]
	});
}
//#endregion
export { i as AppShell, r as PageHeader };
