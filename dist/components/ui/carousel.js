"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ArrowLeft as t, ArrowRight as n } from "./icons.js";
import { Button as r } from "./button.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import * as o from "react";
import s from "embla-carousel-react";
//#region src/components/ui/carousel.tsx
var c = o.createContext(null);
function l() {
	let e = o.useContext(c);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
function u({ orientation: t = "horizontal", opts: n, setApi: r, plugins: a, className: l, children: u, ...d }) {
	let [f, p] = s({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, a), [m, h] = o.useState(!1), [g, _] = o.useState(!1), v = o.useCallback((e) => {
		e && (h(e.canScrollPrev()), _(e.canScrollNext()));
	}, []), y = o.useCallback(() => {
		p?.scrollPrev();
	}, [p]), b = o.useCallback(() => {
		p?.scrollNext();
	}, [p]), x = o.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), y()) : e.key === "ArrowRight" && (e.preventDefault(), b());
	}, [y, b]);
	return o.useEffect(() => {
		p && r && r(p);
	}, [p, r]), o.useEffect(() => {
		if (p) return v(p), p.on("reInit", v), p.on("select", v), () => {
			p?.off("select", v);
		};
	}, [p, v]), /* @__PURE__ */ i(c.Provider, {
		value: {
			carouselRef: f,
			api: p,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: y,
			scrollNext: b,
			canScrollPrev: m,
			canScrollNext: g
		},
		children: /* @__PURE__ */ i("div", {
			onKeyDownCapture: x,
			className: e("relative", l),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...d,
			children: u
		})
	});
}
function d({ className: t, ...n }) {
	let { carouselRef: r, orientation: a } = l();
	return /* @__PURE__ */ i("div", {
		ref: r,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ i("div", {
			className: e("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
			...n
		})
	});
}
function f({ className: t, ...n }) {
	let { orientation: r } = l();
	return /* @__PURE__ */ i("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: e("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", t),
		...n
	});
}
function p({ className: n, variant: o = "outline", size: s = "icon", ...c }) {
	let { orientation: u, scrollPrev: d, canScrollPrev: f } = l();
	return /* @__PURE__ */ a(r, {
		"data-slot": "carousel-previous",
		variant: o,
		size: s,
		className: e("absolute size-8 rounded-full", u === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", n),
		disabled: !f,
		onClick: d,
		...c,
		children: [/* @__PURE__ */ i(t, {}), /* @__PURE__ */ i("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function m({ className: t, variant: o = "outline", size: s = "icon", ...c }) {
	let { orientation: u, scrollNext: d, canScrollNext: f } = l();
	return /* @__PURE__ */ a(r, {
		"data-slot": "carousel-next",
		variant: o,
		size: s,
		className: e("absolute size-8 rounded-full", u === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", t),
		disabled: !f,
		onClick: d,
		...c,
		children: [/* @__PURE__ */ i(n, {}), /* @__PURE__ */ i("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
//#endregion
export { u as Carousel, d as CarouselContent, f as CarouselItem, m as CarouselNext, p as CarouselPrevious };
