"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { Separator as n } from "radix-ui";
//#region src/components/ui/separator.tsx
function r({ className: r, orientation: i = "horizontal", decorative: a = !0, ...o }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "separator",
		decorative: a,
		orientation: i,
		className: e("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", r),
		...o
	});
}
//#endregion
export { r as Separator };
