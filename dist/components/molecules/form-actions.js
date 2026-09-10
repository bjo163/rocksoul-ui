import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/molecules/form-actions.tsx
var n = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	between: "justify-between"
};
function r({ className: r, align: i = "end", ...a }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "form-actions",
		className: e("flex flex-wrap items-center gap-2", n[i], r),
		...a
	});
}
//#endregion
export { r as FormActions };
