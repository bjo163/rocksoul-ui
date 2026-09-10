import { t as e } from "../../cn-DhjIN-s0.js";
import { Separator as t } from "../ui/separator.js";
import { FormActions as n } from "../molecules/form-actions.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import "react";
//#region src/components/organisms/form-footer.tsx
function a({ bordered: a = !0, className: o, ...s }) {
	return /* @__PURE__ */ i("footer", {
		"data-slot": "form-footer",
		className: e(a && "border-t pt-4", o),
		children: [a ? /* @__PURE__ */ r(t, { className: "sr-only" }) : null, /* @__PURE__ */ r(n, { ...s })]
	});
}
//#endregion
export { a as FormFooter };
