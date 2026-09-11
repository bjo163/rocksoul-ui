"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { Toggle as n } from "radix-ui";
import { cva as r } from "class-variance-authority";
//#region src/components/ui/toggle.tsx
var i = r("inline-flex items-center justify-center gap-2 rounded-none text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 min-w-9 px-2",
			sm: "h-8 min-w-8 px-1.5",
			lg: "h-10 min-w-10 px-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function a({ className: r, variant: a, size: o, ...s }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "toggle",
		className: e(i({
			variant: a,
			size: o,
			className: r
		})),
		...s
	});
}
//#endregion
export { a as Toggle, i as toggleVariants };
