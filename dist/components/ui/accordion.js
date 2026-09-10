"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronDownIcon as t } from "./icons.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Accordion as i } from "radix-ui";
//#region src/components/ui/accordion.tsx
function a({ ...e }) {
	return /* @__PURE__ */ n(i.Root, {
		"data-slot": "accordion",
		...e
	});
}
function o({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Item, {
		"data-slot": "accordion-item",
		className: e("border-b last:border-b-0", t),
		...r
	});
}
function s({ className: a, children: o, ...s }) {
	return /* @__PURE__ */ n(i.Header, {
		className: "flex",
		children: /* @__PURE__ */ r(i.Trigger, {
			"data-slot": "accordion-trigger",
			className: e("flex flex-1 items-start justify-between gap-4 rounded-none py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", a),
			...s,
			children: [o, /* @__PURE__ */ n(t, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function c({ className: t, children: r, ...a }) {
	return /* @__PURE__ */ n(i.Content, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...a,
		children: /* @__PURE__ */ n("div", {
			className: e("pt-0 pb-4", t),
			children: r
		})
	});
}
//#endregion
export { a as Accordion, c as AccordionContent, o as AccordionItem, s as AccordionTrigger };
