import { t as e } from "../../cn-DhjIN-s0.js";
import { Loader2Icon as t } from "./icons.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/ui/spinner.tsx
function r({ className: r, ...i }) {
	return /* @__PURE__ */ n(t, {
		role: "status",
		"aria-label": "Loading",
		className: e("size-4 animate-spin", r),
		...i
	});
}
//#endregion
export { r as Spinner };
