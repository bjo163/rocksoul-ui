import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/stat.tsx
function r({ className: r, label: i, value: a, description: o, trend: s, ...c }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "stat",
		className: e("space-y-1", r),
		...c,
		children: [
			/* @__PURE__ */ n("div", {
				className: "flex items-center justify-between gap-3 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ t("span", { children: i }), s ? /* @__PURE__ */ t("span", { children: s }) : null]
			}),
			/* @__PURE__ */ t("div", {
				className: "text-2xl font-semibold tracking-tight",
				children: a
			}),
			o ? /* @__PURE__ */ t("div", {
				className: "text-sm text-muted-foreground",
				children: o
			}) : null
		]
	});
}
//#endregion
export { r as Stat };
