import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/filter-group.tsx
function r({ className: r, legend: i, children: a, ...o }) {
	return /* @__PURE__ */ n("fieldset", {
		"data-slot": "filter-group",
		className: e("flex flex-wrap items-end gap-3", r),
		...o,
		children: [i ? /* @__PURE__ */ t("legend", {
			className: "sr-only",
			children: i
		}) : null, a]
	});
}
//#endregion
export { r as FilterGroup };
