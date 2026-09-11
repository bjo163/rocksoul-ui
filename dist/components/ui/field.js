"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Separator as t } from "./separator.js";
import { Label as n } from "./label.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { cva as o } from "class-variance-authority";
//#region src/components/ui/field.tsx
function s({ className: t, ...n }) {
	return /* @__PURE__ */ r("fieldset", {
		"data-slot": "field-set",
		className: e("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", t),
		...n
	});
}
function c({ className: t, variant: n = "legend", ...i }) {
	return /* @__PURE__ */ r("legend", {
		"data-slot": "field-legend",
		"data-variant": n,
		className: e("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", t),
		...i
	});
}
function l({ className: t, ...n }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "field-group",
		className: e("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", t),
		...n
	});
}
var u = o("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
		horizontal: [
			"flex-row items-center",
			"[&>[data-slot=field-label]]:flex-auto",
			"has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
		],
		responsive: [
			"flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
			"@md/field-group:[&>[data-slot=field-label]]:flex-auto",
			"@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
		]
	} },
	defaultVariants: { orientation: "vertical" }
});
function d({ className: t, orientation: n = "vertical", ...i }) {
	return /* @__PURE__ */ r("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": n,
		className: e(u({ orientation: n }), t),
		...i
	});
}
function f({ className: t, ...n }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "field-content",
		className: e("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", t),
		...n
	});
}
function p({ className: t, ...i }) {
	return /* @__PURE__ */ r(n, {
		"data-slot": "field-label",
		className: e("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-none has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10", t),
		...i
	});
}
function m({ className: t, ...n }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "field-label",
		className: e("flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50", t),
		...n
	});
}
function h({ className: t, ...n }) {
	return /* @__PURE__ */ r("p", {
		"data-slot": "field-description",
		className: e("text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance", "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", t),
		...n
	});
}
function g({ children: n, className: a, ...o }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "field-separator",
		"data-content": !!n,
		className: e("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", a),
		...o,
		children: [/* @__PURE__ */ r(t, { className: "absolute inset-0 top-1/2" }), n && /* @__PURE__ */ r("span", {
			className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
			"data-slot": "field-separator-content",
			children: n
		})]
	});
}
function _({ className: t, children: n, errors: i, ...o }) {
	let s = a(() => {
		if (n) return n;
		if (!i?.length) return null;
		let e = [...new Map(i.map((e) => [e?.message, e])).values()];
		return e?.length == 1 ? e[0]?.message : /* @__PURE__ */ r("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: e.map((e, t) => e?.message && /* @__PURE__ */ r("li", { children: e.message }, t))
		});
	}, [n, i]);
	return s ? /* @__PURE__ */ r("div", {
		role: "alert",
		"data-slot": "field-error",
		className: e("text-sm font-normal text-destructive", t),
		...o,
		children: s
	}) : null;
}
//#endregion
export { d as Field, f as FieldContent, h as FieldDescription, _ as FieldError, l as FieldGroup, p as FieldLabel, c as FieldLegend, g as FieldSeparator, s as FieldSet, m as FieldTitle };
