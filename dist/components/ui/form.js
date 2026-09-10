"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Label as t } from "./label.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
import { Slot as i } from "radix-ui";
import { Controller as a, FormProvider as o, useFormContext as s, useFormState as c } from "react-hook-form";
//#region src/components/ui/form.tsx
var l = o, u = n.createContext({}), d = ({ ...e }) => /* @__PURE__ */ r(u.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ r(a, { ...e })
}), f = () => {
	let e = n.useContext(u), t = n.useContext(p), { getFieldState: r } = s(), i = c({ name: e.name }), a = r(e.name, i);
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
}, p = n.createContext({});
function m({ className: t, ...i }) {
	let a = n.useId();
	return /* @__PURE__ */ r(p.Provider, {
		value: { id: a },
		children: /* @__PURE__ */ r("div", {
			"data-slot": "form-item",
			className: e("grid gap-2", t),
			...i
		})
	});
}
function h({ className: n, ...i }) {
	let { error: a, formItemId: o } = f();
	return /* @__PURE__ */ r(t, {
		"data-slot": "form-label",
		"data-error": !!a,
		className: e("data-[error=true]:text-destructive", n),
		htmlFor: o,
		...i
	});
}
function g({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: a, formMessageId: o } = f();
	return /* @__PURE__ */ r(i.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${a} ${o}` : `${a}`,
		"aria-invalid": !!t,
		...e
	});
}
function _({ className: t, ...n }) {
	let { formDescriptionId: i } = f();
	return /* @__PURE__ */ r("p", {
		"data-slot": "form-description",
		id: i,
		className: e("text-sm text-muted-foreground", t),
		...n
	});
}
function v({ className: t, ...n }) {
	let { error: i, formMessageId: a } = f(), o = i ? String(i?.message ?? "") : n.children;
	return o ? /* @__PURE__ */ r("p", {
		"data-slot": "form-message",
		id: a,
		className: e("text-sm text-destructive", t),
		...n,
		children: o
	}) : null;
}
//#endregion
export { l as Form, g as FormControl, _ as FormDescription, d as FormField, m as FormItem, h as FormLabel, v as FormMessage, f as useFormField };
