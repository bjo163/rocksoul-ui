import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "../ui/button.js";
import { Card as n, CardContent as r, CardDescription as i, CardHeader as a, CardTitle as o } from "../ui/card.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
//#region src/components/organisms/detail-panel.tsx
function l({ title: l, description: u, actions: d, onClose: f, closeLabel: p = "Close", className: m, children: h, ...g }) {
	return /* @__PURE__ */ c(n, {
		"data-slot": "detail-panel",
		className: e("min-w-0", m),
		...g,
		children: [(l || u || d || f) && /* @__PURE__ */ c(a, { children: [/* @__PURE__ */ c("div", {
			className: "min-w-0",
			children: [l ? /* @__PURE__ */ s(o, {
				className: "truncate",
				children: l
			}) : null, u ? /* @__PURE__ */ s(i, { children: u }) : null]
		}), (d || f) && /* @__PURE__ */ c("div", {
			className: "flex items-center gap-2",
			children: [d, f ? /* @__PURE__ */ s(t, {
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: f,
				children: p
			}) : null]
		})] }), /* @__PURE__ */ s(r, { children: h })]
	});
}
//#endregion
export { l as DetailPanel };
