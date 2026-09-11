"use client";
import { Button as e } from "../ui/button.js";
import { Calendar as t } from "../ui/calendar.js";
import { Popover as n, PopoverContent as r, PopoverTrigger as i } from "../ui/popover.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import * as s from "react";
import { format as c } from "date-fns";
//#region src/components/molecules/date-range-picker.tsx
function l({ value: l, defaultValue: u, onChange: d, placeholder: f = "Select date range", disabled: p, className: m, numberOfMonths: h = 2 }) {
	let [g, _] = s.useState(u), v = l === void 0 ? g : l, y = v?.from ? `${c(v.from, "MMM d, yyyy")}${v.to ? ` – ${c(v.to, "MMM d, yyyy")}` : ""}` : f;
	return /* @__PURE__ */ o(n, { children: [/* @__PURE__ */ a(i, {
		asChild: !0,
		children: /* @__PURE__ */ a(e, {
			type: "button",
			variant: "outline",
			disabled: p,
			className: m,
			"aria-label": y,
			children: y
		})
	}), /* @__PURE__ */ a(r, {
		align: "start",
		className: "w-auto p-0",
		children: /* @__PURE__ */ a(t, {
			mode: "range",
			selected: v,
			onSelect: (e) => {
				l === void 0 && _(e), d?.(e);
			},
			numberOfMonths: h
		})
	})] });
}
//#endregion
export { l as DateRangePicker };
