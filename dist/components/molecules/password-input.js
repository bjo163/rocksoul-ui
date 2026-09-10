"use client";
import { Button as e } from "../ui/button.js";
import { Input as t } from "../ui/input.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
//#region src/components/molecules/password-input.tsx
var a = i.forwardRef(({ className: a, showLabel: o = "Show password", hideLabel: s = "Hide password", ...c }, l) => {
	let [u, d] = i.useState(!1);
	return /* @__PURE__ */ r("div", {
		className: "relative w-full",
		"data-slot": "password-input",
		children: [/* @__PURE__ */ n(t, {
			ref: l,
			type: u ? "text" : "password",
			className: a,
			...c
		}), /* @__PURE__ */ n(e, {
			type: "button",
			variant: "ghost",
			size: "icon-sm",
			className: "absolute right-1 top-1/2 -translate-y-1/2",
			"aria-label": u ? s : o,
			"aria-pressed": u,
			onClick: () => d((e) => !e),
			children: /* @__PURE__ */ n("span", {
				"aria-hidden": "true",
				children: u ? "Hide" : "Show"
			})
		})]
	});
});
a.displayName = "PasswordInput";
//#endregion
export { a as PasswordInput };
