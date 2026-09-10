"use client";
import { Button as e } from "../ui/button.js";
import { Input as t } from "../ui/input.js";
import * as n from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/molecules/password-input.tsx
var a = n.forwardRef(({ className: a, showLabel: o = "Show password", hideLabel: s = "Hide password", ...c }, l) => {
	let [u, d] = n.useState(!1);
	return /* @__PURE__ */ i("div", {
		className: "relative w-full",
		"data-slot": "password-input",
		children: [/* @__PURE__ */ r(t, {
			ref: l,
			type: u ? "text" : "password",
			className: a,
			...c
		}), /* @__PURE__ */ r(e, {
			type: "button",
			variant: "ghost",
			size: "icon-sm",
			className: "absolute right-1 top-1/2 -translate-y-1/2",
			"aria-label": u ? s : o,
			"aria-pressed": u,
			onClick: () => d((e) => !e),
			children: /* @__PURE__ */ r("span", {
				"aria-hidden": "true",
				children: u ? "Hide" : "Show"
			})
		})]
	});
});
a.displayName = "PasswordInput";
//#endregion
export { a as PasswordInput };
