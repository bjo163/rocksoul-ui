import { t as e } from "../../cn-DhjIN-s0.js";
import { SearchIcon as t, XIcon as n } from "../ui/icons.js";
import { Button as r } from "../ui/button.js";
import { Input as i } from "../ui/input.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import * as s from "react";
//#region src/components/molecules/search-input.tsx
var c = s.forwardRef(({ className: s, value: c, defaultValue: l, onClear: u, clearLabel: d = "Clear search", ...f }, p) => {
	let m = c === void 0 ? l !== void 0 && String(l).length > 0 : String(c).length > 0;
	return /* @__PURE__ */ o("div", {
		className: "relative w-full",
		"data-slot": "search-input",
		children: [
			/* @__PURE__ */ a(t, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
			/* @__PURE__ */ a(i, {
				ref: p,
				type: "search",
				value: c,
				defaultValue: l,
				className: e("pl-9", m && u && "pr-9", s),
				...f
			}),
			m && u ? /* @__PURE__ */ a(r, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "absolute right-1 top-1/2 size-7 -translate-y-1/2",
				onClick: u,
				"aria-label": d,
				children: /* @__PURE__ */ a(n, { className: "size-4" })
			}) : null
		]
	});
});
c.displayName = "SearchInput";
//#endregion
export { c as SearchInput };
