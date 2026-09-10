"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Label as t } from "./label.js";
import { jsx as n } from "react/jsx-runtime";
import * as r from "react";
import { Slot as i } from "radix-ui";
import { Controller as a, FormProvider as o, useFormContext as s, useFormState as c } from "react-hook-form";
//#region src/components/ui/form.tsx
var l = o, u = r.createContext({}), d = ({ ...e }) => /* @__PURE__ */ n(u.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ n(a, { ...e })
}), f = () => {
	let e = r.useContext(u), t = r.useContext(p), { getFieldState: n } = s(), i = c({ name: e.name }), a = n(e.name, i);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { id: o } = t;
	return {
		id: o,
		name: e.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, p = r.createContext({});
function m({ className: t, ...i }) {
	let a = r.useId();
	return /* @__PURE__ */ n(p.Provider, {
		value: { id: a },
		children: /* @__PURE__ */ n("div", {
			"data-slot": "form-item",
			className: e("grid gap-2", t),
			...i
		})
	});
}
function h({ className: r, ...i }) {
	let { error: a, formItemId: o } = f();
	return /* @__PURE__ */ n(t, {
		"data-slot": "form-label",
		"data-error": !!a,
		className: e("data-[error=true]:text-destructive", r),
		htmlFor: o,
		...i
	});
}
function g({ ...e }) {
	let { error: t, formItemId: r, formDescriptionId: a, formMessageId: o } = f();
	return /* @__PURE__ */ n(i.Root, {
		"data-slot": "form-control",
		id: r,
		"aria-describedby": t ? `${a} ${o}` : `${a}`,
		"aria-invalid": !!t,
		...e
	});
}
function _({ className: t, ...r }) {
	let { formDescriptionId: i } = f();
	return /* @__PURE__ */ n("p", {
		"data-slot": "form-description",
		id: i,
		className: e("text-sm text-muted-foreground", t),
		...r
	});
}
function v({ className: t, ...r }) {
	let { error: i, formMessageId: a } = f(), o = i ? String(i?.message ?? "") : r.children;
	return o ? /* @__PURE__ */ n("p", {
		"data-slot": "form-message",
		id: a,
		className: e("text-sm text-destructive", t),
		...r,
		children: o
	}) : null;
}
//#endregion
export { l as Form, g as FormControl, _ as FormDescription, d as FormField, m as FormItem, h as FormLabel, v as FormMessage, f as useFormField };
