import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/textarea.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("textarea", {
		"data-slot": "textarea",
		className: e("flex field-sizing-content min-h-16 w-full rounded-none border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", n),
		...r
	});
}
//#endregion
export { n as Textarea };
