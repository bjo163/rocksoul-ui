"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "../ui/button.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/organisms/filter-bar.tsx
function i({ filters: i, onReset: a, resetLabel: o = "Clear filters", actions: s, label: c = "Filters", className: l }) {
	let u = i.some((e) => e.active);
	return /* @__PURE__ */ r("div", {
		"data-slot": "filter-bar",
		role: "region",
		"aria-label": c,
		className: e("flex flex-wrap items-end gap-3", l),
		children: [i.map((e) => /* @__PURE__ */ r("div", {
			"data-slot": "filter-bar-item",
			className: "grid min-w-40 gap-1.5",
			children: [/* @__PURE__ */ n("span", {
				id: `${e.id}-label`,
				className: "text-xs font-medium text-muted-foreground",
				children: e.label
			}), /* @__PURE__ */ n("div", {
				id: e.id,
				"aria-labelledby": `${e.id}-label`,
				children: e.control
			})]
		}, e.id)), /* @__PURE__ */ r("div", {
			className: "ml-auto flex items-center gap-2",
			children: [s, a && u ? /* @__PURE__ */ n(t, {
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: a,
				children: o
			}) : null]
		})]
	});
}
//#endregion
export { i as FilterBar };
