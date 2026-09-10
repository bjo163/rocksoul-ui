"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ArrowDownIcon as t, ChevronDownIcon as n, ChevronUpIcon as r } from "../ui/icons.js";
import { Button as i } from "../ui/button.js";
import { Checkbox as a } from "../ui/checkbox.js";
import { Table as o, TableBody as s, TableCell as c, TableHead as l, TableHeader as u, TableRow as d } from "../ui/table.js";
import * as f from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/organisms/data-table.tsx
function h({ data: h, columns: g, getRowId: _ = (e, t) => String(t), selectable: v = !1, selectedRowIds: y, onSelectedRowIdsChange: b, emptyState: x = "No results.", caption: S, className: C }) {
	let [w, T] = f.useState(null), [E, D] = f.useState([]), O = y ?? E, k = (e) => {
		y === void 0 && D(e), b?.(e);
	}, A = f.useMemo(() => {
		if (!w) return h;
		let e = g.find((e) => e.id === w.id);
		return e?.sortValue ? [...h].sort((t, n) => {
			let r = e.sortValue?.(t), i = e.sortValue?.(n);
			if (r === i) return 0;
			if (r == null) return 1;
			if (i == null) return -1;
			let a = r < i ? -1 : 1;
			return w.direction === "asc" ? a : -a;
		}) : h;
	}, [
		g,
		h,
		w
	]), j = A.map(_), M = j.length > 0 && j.every((e) => O.includes(e)), N = (e) => {
		e.sortable && e.sortValue && T((t) => t?.id === e.id ? t.direction === "asc" ? {
			id: e.id,
			direction: "desc"
		} : null : {
			id: e.id,
			direction: "asc"
		});
	};
	return /* @__PURE__ */ p("div", {
		"data-slot": "data-table",
		className: e("w-full", C),
		children: /* @__PURE__ */ m(o, { children: [
			S ? /* @__PURE__ */ p("caption", {
				className: "sr-only",
				children: S
			}) : null,
			/* @__PURE__ */ p(u, { children: /* @__PURE__ */ m(d, { children: [v ? /* @__PURE__ */ p(l, {
				className: "w-10",
				children: /* @__PURE__ */ p(a, {
					"aria-label": "Select all rows",
					checked: M,
					onCheckedChange: () => k(M ? O.filter((e) => !j.includes(e)) : [.../* @__PURE__ */ new Set([...O, ...j])])
				})
			}) : null, g.map((e) => /* @__PURE__ */ p(l, {
				className: e.className,
				children: e.sortable && e.sortValue ? /* @__PURE__ */ m(i, {
					variant: "ghost",
					size: "sm",
					className: "-ml-3",
					onClick: () => N(e),
					children: [
						e.header,
						w?.id === e.id ? w.direction === "asc" ? /* @__PURE__ */ p(r, { "aria-hidden": "true" }) : /* @__PURE__ */ p(t, { "aria-hidden": "true" }) : /* @__PURE__ */ p(n, { "aria-hidden": "true" }),
						/* @__PURE__ */ m("span", {
							className: "sr-only",
							children: ["Sort by ", String(e.header)]
						})
					]
				}) : e.header
			}, e.id))] }) }),
			/* @__PURE__ */ p(s, { children: A.length === 0 ? /* @__PURE__ */ p(d, { children: /* @__PURE__ */ p(c, {
				colSpan: g.length + +!!v,
				className: "h-24 text-center",
				children: x
			}) }) : A.map((e, t) => {
				let n = _(e, t);
				return /* @__PURE__ */ m(d, {
					"data-state": O.includes(n) ? "selected" : void 0,
					children: [v ? /* @__PURE__ */ p(c, { children: /* @__PURE__ */ p(a, {
						"aria-label": `Select row ${n}`,
						checked: O.includes(n),
						onCheckedChange: () => k(O.includes(n) ? O.filter((e) => e !== n) : [...O, n])
					}) }) : null, g.map((t) => /* @__PURE__ */ p(c, {
						className: t.className,
						children: t.accessor ? t.accessor(e) : null
					}, t.id))]
				}, n);
			}) })
		] })
	});
}
//#endregion
export { h as DataTable };
