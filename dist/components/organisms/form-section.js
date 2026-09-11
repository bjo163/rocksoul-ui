import { t as e } from "../../cn-DhjIN-s0.js";
import { FieldGroup as t, FieldLegend as n, FieldSet as r } from "../ui/field.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import "react";
//#region src/components/organisms/form-section.tsx
function o({ title: o, description: s, legendVariant: c = "legend", className: l, children: u, ...d }) {
	return /* @__PURE__ */ a(r, {
		"data-slot": "form-section",
		className: e("gap-4", l),
		...d,
		children: [
			o ? /* @__PURE__ */ i(n, {
				variant: c,
				children: o
			}) : null,
			s ? /* @__PURE__ */ i("p", {
				className: "-mt-2 text-sm text-muted-foreground",
				children: s
			}) : null,
			/* @__PURE__ */ i(t, { children: u })
		]
	});
}
//#endregion
export { o as FormSection };
