"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { Label as n } from "radix-ui";
//#region src/components/ui/label.tsx
function r({ className: r, ...i }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "label",
		className: e("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", r),
		...i
	});
}
//#endregion
export { r as Label };
