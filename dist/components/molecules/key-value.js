import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/key-value.tsx
function r({ className: r, label: i, value: a, ...o }) {
	return /* @__PURE__ */ n("dl", {
		"data-slot": "key-value",
		className: e("grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1", r),
		...o,
		children: [/* @__PURE__ */ t("dt", {
			className: "text-sm text-muted-foreground",
			children: i
		}), /* @__PURE__ */ t("dd", {
			className: "text-right text-sm font-medium text-foreground",
			children: a
		})]
	});
}
//#endregion
export { r as KeyValue };
