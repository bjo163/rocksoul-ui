"use client";
import { ChevronDownIcon as e } from "../ui/icons.js";
import { Button as t } from "../ui/button.js";
import { ButtonGroup as n } from "../ui/button-group.js";
import { DropdownMenu as r, DropdownMenuContent as i, DropdownMenuItem as a, DropdownMenuTrigger as o } from "../ui/dropdown-menu.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
//#region src/components/molecules/split-button.tsx
function l({ children: l, items: u, ...d }) {
	return /* @__PURE__ */ c(n, {
		"data-slot": "split-button",
		children: [/* @__PURE__ */ s(t, {
			...d,
			children: l
		}), /* @__PURE__ */ c(r, { children: [/* @__PURE__ */ s(o, {
			asChild: !0,
			children: /* @__PURE__ */ s(t, {
				...d,
				"aria-label": "More actions",
				size: "icon-sm",
				children: /* @__PURE__ */ s(e, { "aria-hidden": "true" })
			})
		}), /* @__PURE__ */ s(i, {
			align: "end",
			children: u.map((e, t) => /* @__PURE__ */ s(a, {
				disabled: e.disabled,
				onSelect: e.onSelect,
				children: e.label
			}, t))
		})] })]
	});
}
//#endregion
export { l as SplitButton };
