"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import * as r from "react";
import { Slider as i } from "radix-ui";
//#region src/components/ui/slider.tsx
function a({ className: a, defaultValue: o, value: s, min: c = 0, max: l = 100, ...u }) {
	let d = r.useMemo(() => Array.isArray(s) ? s : Array.isArray(o) ? o : [c, l], [
		s,
		o,
		c,
		l
	]);
	return /* @__PURE__ */ n(i.Root, {
		"data-slot": "slider",
		defaultValue: o,
		value: s,
		min: c,
		max: l,
		className: e("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", a),
		...u,
		children: [/* @__PURE__ */ t(i.Track, {
			"data-slot": "slider-track",
			className: e("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ t(i.Range, {
				"data-slot": "slider-range",
				className: e("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: d.length }, (e, n) => /* @__PURE__ */ t(i.Thumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, n))]
	});
}
//#endregion
export { a as Slider };
