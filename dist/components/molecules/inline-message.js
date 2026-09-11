import { Alert as e, AlertDescription as t, AlertTitle as n } from "../ui/alert.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/inline-message.tsx
function a({ title: a, children: o, ...s }) {
	return /* @__PURE__ */ i(e, {
		"data-slot": "inline-message",
		...s,
		children: [a ? /* @__PURE__ */ r(n, { children: a }) : null, o ? /* @__PURE__ */ r(t, { children: o }) : null]
	});
}
//#endregion
export { a as InlineMessage };
