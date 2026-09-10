import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { cva as n } from "class-variance-authority";
//#region src/components/ui/alert.tsx
var r = n("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-none border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
});
function i({ className: n, variant: i, ...a }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "alert",
		role: "alert",
		className: e(r({ variant: i }), n),
		...a
	});
}
function a({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "alert-title",
		className: e("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", n),
		...r
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "alert-description",
		className: e("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", n),
		...r
	});
}
//#endregion
export { i as Alert, o as AlertDescription, a as AlertTitle };
