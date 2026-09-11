import { t as e } from "../../cn-DhjIN-s0.js";
import { PageHeader as t } from "./page-layout.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import "react";
//#region src/components/templates/page-templates.tsx
function i({ children: t, logo: i, title: a, description: o, footer: s, className: c }) {
	return /* @__PURE__ */ n("main", {
		"data-slot": "auth-layout",
		className: e("flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 py-8", c),
		children: /* @__PURE__ */ r("div", {
			className: "w-full max-w-md space-y-6",
			children: [
				i ? /* @__PURE__ */ n("div", {
					className: "flex justify-center",
					children: i
				}) : null,
				a || o ? /* @__PURE__ */ r("div", {
					className: "space-y-2 text-center",
					children: [/* @__PURE__ */ n("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: a
					}), o ? /* @__PURE__ */ n("p", {
						className: "text-sm text-muted-foreground",
						children: o
					}) : null]
				}) : null,
				t,
				s ? /* @__PURE__ */ n("div", {
					className: "text-center text-sm text-muted-foreground",
					children: s
				}) : null
			]
		})
	});
}
function a({ title: i, description: a, actions: o, header: s, children: c, footer: l, className: u, contentClassName: d, dataSlot: f = "page-template" }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": f,
		className: e("mx-auto flex w-full max-w-screen-2xl flex-col gap-6 p-6", u),
		children: [
			s ?? /* @__PURE__ */ n(t, {
				title: i,
				description: a,
				actions: o
			}),
			/* @__PURE__ */ n("section", {
				"data-slot": "page-template-content",
				className: e("min-w-0", d),
				children: c
			}),
			l ? /* @__PURE__ */ n("footer", {
				"data-slot": "page-template-footer",
				children: l
			}) : null
		]
	});
}
function o(e) {
	return /* @__PURE__ */ n(a, {
		dataSlot: "list-page",
		...e
	});
}
function s(e) {
	return /* @__PURE__ */ n(a, {
		dataSlot: "detail-page",
		...e
	});
}
function c(e) {
	return /* @__PURE__ */ n(a, {
		dataSlot: "dashboard-page",
		...e
	});
}
//#endregion
export { i as AuthLayout, c as DashboardPage, s as DetailPage, o as ListPage, a as TemplateFrame };
