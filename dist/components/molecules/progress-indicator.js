import { t as e } from "../../cn-DhjIN-s0.js";
import { Progress as t } from "../ui/progress.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/progress-indicator.tsx
function i({ className: i, label: a, value: o = 0, showValue: s = !1, ...c }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "progress-indicator",
		className: "space-y-2",
		children: [a || s ? /* @__PURE__ */ r("div", {
			className: "flex justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ n("span", { children: a }), s ? /* @__PURE__ */ r("span", { children: [Math.round(o ?? 0), "%"] }) : null]
		}) : null, /* @__PURE__ */ n(t, {
			value: o,
			className: e(i),
			...c
		})]
	});
}
//#endregion
export { i as ProgressIndicator };
