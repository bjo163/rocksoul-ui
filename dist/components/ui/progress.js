"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { Progress as n } from "radix-ui";
//#region src/components/ui/progress.tsx
function r({ className: r, value: i, ...a }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "progress",
		className: e("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", r),
		...a,
		children: /* @__PURE__ */ t(n.Indicator, {
			"data-slot": "progress-indicator",
			className: "h-full w-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (i || 0)}%)` }
		})
	});
}
//#endregion
export { r as Progress };
