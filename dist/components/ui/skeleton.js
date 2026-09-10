import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/skeleton.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "skeleton",
		className: e("animate-pulse rounded-none bg-accent", n),
		...r
	});
}
//#endregion
export { n as Skeleton };
