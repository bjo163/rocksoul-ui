"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ArrowDownIcon as t, ChevronDownIcon as n, ChevronLeftIcon as r, ChevronRight as i, ChevronUpIcon as a } from "../ui/icons.js";
import { Button as o } from "../ui/button.js";
import { Checkbox as s } from "../ui/checkbox.js";
import { Input as ee } from "../ui/input.js";
import { Table as te, TableBody as ne, TableCell as c, TableHead as l, TableHeader as re, TableRow as u } from "../ui/table.js";
import { NativeSelect as ie } from "../ui/native-select.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import * as p from "react";
//#region src/components/organisms/data-table.tsx
function m(m) {
	let { data: h, columns: g, getRowId: _ = (e, t) => String(t), selectable: v = !1, selectedRowIds: y, onSelectedRowIdsChange: ae, emptyState: oe = "No results.", noResultsState: se = "No matching results.", loading: ce = !1, loadingState: le = "Loading…", error: b, caption: x, className: ue, toolbar: S, filter: C, onFilterChange: w, filterPlaceholder: de = "Filter results…", bulkActions: T, page: E, defaultPage: fe = 1, pageSize: D, defaultPageSize: pe = 10, pageCount: O, onPageChange: me, onPageSizeChange: k, pageSizeOptions: he = [
		10,
		25,
		50
	], density: A = "comfortable", onDensityChange: j, visibleColumnIds: M, onVisibleColumnIdsChange: N, renderExpanded: P, expandedRowIds: F, onExpandedRowIdsChange: ge } = m, [I, _e] = p.useState(null), [ve, ye] = p.useState([]), [be, xe] = p.useState(""), [Se, L] = p.useState(fe), [Ce, we] = p.useState(pe), [Te, Ee] = p.useState(() => g.filter((e) => e.visible !== !1).map((e) => e.id)), [De, Oe] = p.useState([]), R = y ?? ve, z = C ?? be, B = E ?? Se, V = D ?? Ce, H = M ?? Te, U = F ?? De, W = (e) => {
		y === void 0 && ye(e), ae?.(e);
	}, ke = (e) => {
		C === void 0 && xe(e), w?.(e), E === void 0 && L(1);
	}, G = (e) => {
		E === void 0 && L(e), me?.(e);
	}, Ae = (e) => {
		D === void 0 && we(e), k?.(e), G(1);
	}, je = (e) => {
		F === void 0 && Oe(e), ge?.(e);
	}, K = g.filter((e) => H.includes(e.id)), q = p.useMemo(() => {
		let e = z.trim().toLowerCase();
		return e ? h.filter((t) => K.some((n) => {
			if (n.filterable === !1) return !1;
			let r = n.filterValue ? n.filterValue(t) : n.sortValue?.(t);
			return String(r ?? "").toLowerCase().includes(e);
		})) : h;
	}, [
		K,
		h,
		z
	]), J = p.useMemo(() => {
		if (!I) return q;
		let e = g.find((e) => e.id === I.id);
		return e?.sortValue ? [...q].sort((t, n) => {
			let r = e.sortValue?.(t), i = e.sortValue?.(n);
			if (r === i) return 0;
			if (r == null) return 1;
			if (i == null) return -1;
			let a = r < i ? -1 : 1;
			return I.direction === "asc" ? a : -a;
		}) : q;
	}, [
		g,
		q,
		I
	]), Y = Math.max(1, O ?? Math.ceil(J.length / V)), X = O === void 0 ? J.slice((B - 1) * V, B * V) : J, Z = X.map(_), Q = Z.length > 0 && Z.every((e) => R.includes(e)), Me = (e) => {
		e.sortable && e.sortValue && _e((t) => t?.id === e.id ? t.direction === "asc" ? {
			id: e.id,
			direction: "desc"
		} : null : {
			id: e.id,
			direction: "asc"
		});
	}, Ne = (e) => {
		let t = H.includes(e) ? H.filter((t) => t !== e) : [...H, e];
		t.length && (M === void 0 && Ee(t), N?.(t));
	}, Pe = (e) => je(U.includes(e) ? U.filter((t) => t !== e) : [...U, e]), $ = K.length + +!!v + +!!P, Fe = A === "compact" ? "[&_td]:py-1 [&_th]:h-8" : A === "spacious" ? "[&_td]:py-4 [&_th]:h-12" : "";
	return /* @__PURE__ */ f("div", {
		"data-slot": "data-table",
		className: e("w-full space-y-3", ue),
		children: [
			S || w || T?.length || j || N ? /* @__PURE__ */ f("div", {
				className: "flex flex-wrap items-center gap-2",
				"data-slot": "data-table-toolbar",
				children: [
					w ? /* @__PURE__ */ d(ee, {
						value: z,
						onChange: (e) => ke(e.target.value),
						placeholder: de,
						"aria-label": "Filter table",
						className: "max-w-xs"
					}) : null,
					S,
					T?.map((e, t) => /* @__PURE__ */ d(o, {
						size: "sm",
						variant: e.variant ?? "outline",
						disabled: e.disabled || R.length === 0,
						onClick: () => e.onSelect(R),
						children: e.label
					}, t)),
					j ? /* @__PURE__ */ d("div", {
						className: "ml-auto flex gap-1",
						role: "group",
						"aria-label": "Table density",
						children: [
							"compact",
							"comfortable",
							"spacious"
						].map((e) => /* @__PURE__ */ d(o, {
							size: "sm",
							variant: A === e ? "secondary" : "ghost",
							onClick: () => j(e),
							children: e
						}, e))
					}) : null,
					N ? /* @__PURE__ */ d("div", {
						className: "flex gap-1",
						role: "group",
						"aria-label": "Visible columns",
						children: g.map((e) => /* @__PURE__ */ d(o, {
							size: "sm",
							variant: H.includes(e.id) ? "secondary" : "ghost",
							"aria-pressed": H.includes(e.id),
							onClick: () => Ne(e.id),
							children: e.id
						}, e.id))
					}) : null
				]
			}) : null,
			/* @__PURE__ */ f(te, { children: [
				x ? /* @__PURE__ */ d("caption", {
					className: "sr-only",
					children: x
				}) : null,
				/* @__PURE__ */ d(re, { children: /* @__PURE__ */ f(u, {
					className: Fe,
					children: [
						v ? /* @__PURE__ */ d(l, {
							className: "w-10",
							children: /* @__PURE__ */ d(s, {
								"aria-label": "Select all rows",
								checked: Q ? !0 : Z.some((e) => R.includes(e)) ? "indeterminate" : !1,
								onCheckedChange: () => W(Q ? R.filter((e) => !Z.includes(e)) : [.../* @__PURE__ */ new Set([...R, ...Z])])
							})
						}) : null,
						P ? /* @__PURE__ */ d(l, {
							className: "w-10",
							children: /* @__PURE__ */ d("span", {
								className: "sr-only",
								children: "Expand"
							})
						}) : null,
						K.map((e) => /* @__PURE__ */ d(l, {
							className: e.className,
							"aria-sort": I?.id === e.id ? I.direction === "asc" ? "ascending" : "descending" : void 0,
							children: e.sortable && e.sortValue ? /* @__PURE__ */ f(o, {
								variant: "ghost",
								size: "sm",
								className: "-ml-3",
								onClick: () => Me(e),
								children: [
									e.header,
									I?.id === e.id ? I.direction === "asc" ? /* @__PURE__ */ d(a, { "aria-hidden": "true" }) : /* @__PURE__ */ d(t, { "aria-hidden": "true" }) : /* @__PURE__ */ d(n, { "aria-hidden": "true" }),
									/* @__PURE__ */ f("span", {
										className: "sr-only",
										children: ["Sort by ", String(e.header)]
									})
								]
							}) : e.header
						}, e.id))
					]
				}) }),
				/* @__PURE__ */ d(ne, {
					className: Fe,
					children: ce ? /* @__PURE__ */ d(u, { children: /* @__PURE__ */ d(c, {
						colSpan: $,
						className: "h-24 text-center",
						"aria-live": "polite",
						children: le
					}) }) : b ? /* @__PURE__ */ d(u, { children: /* @__PURE__ */ d(c, {
						colSpan: $,
						className: "h-24 text-center text-destructive",
						role: "alert",
						children: b
					}) }) : X.length === 0 ? /* @__PURE__ */ d(u, { children: /* @__PURE__ */ d(c, {
						colSpan: $,
						className: "h-24 text-center",
						children: z ? se : oe
					}) }) : X.map((e, t) => {
						let r = _(e, t), i = U.includes(r);
						return /* @__PURE__ */ f(p.Fragment, { children: [/* @__PURE__ */ f(u, {
							"data-state": R.includes(r) ? "selected" : void 0,
							"aria-expanded": P ? i : void 0,
							children: [
								v ? /* @__PURE__ */ d(c, { children: /* @__PURE__ */ d(s, {
									"aria-label": `Select row ${r}`,
									checked: R.includes(r),
									onCheckedChange: () => W(R.includes(r) ? R.filter((e) => e !== r) : [...R, r])
								}) }) : null,
								P ? /* @__PURE__ */ d(c, { children: /* @__PURE__ */ d(o, {
									variant: "ghost",
									size: "icon",
									"aria-label": i ? `Collapse row ${r}` : `Expand row ${r}`,
									"aria-expanded": i,
									onClick: () => Pe(r),
									children: d(i ? a : n, {})
								}) }) : null,
								K.map((t) => /* @__PURE__ */ d(c, {
									className: t.className,
									children: t.accessor ? t.accessor(e) : null
								}, t.id))
							]
						}), P && i ? /* @__PURE__ */ d(u, { children: /* @__PURE__ */ d(c, {
							colSpan: $,
							children: P(e)
						}) }) : null] }, r);
					})
				})
			] }),
			Y > 1 || k ? /* @__PURE__ */ f("div", {
				className: "flex flex-wrap items-center justify-between gap-2 text-sm",
				"data-slot": "data-table-pagination",
				"aria-label": "Table pagination",
				children: [/* @__PURE__ */ f("span", { children: [
					"Page ",
					Math.min(B, Y),
					" of ",
					Y
				] }), /* @__PURE__ */ f("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ d(o, {
							variant: "outline",
							size: "icon",
							"aria-label": "Previous page",
							disabled: B <= 1,
							onClick: () => G(Math.max(1, B - 1)),
							children: /* @__PURE__ */ d(r, {})
						}),
						/* @__PURE__ */ d(o, {
							variant: "outline",
							size: "icon",
							"aria-label": "Next page",
							disabled: B >= Y,
							onClick: () => G(Math.min(Y, B + 1)),
							children: /* @__PURE__ */ d(i, {})
						}),
						k ? /* @__PURE__ */ d(ie, {
							"aria-label": "Rows per page",
							value: V,
							onChange: (e) => Ae(Number(e.target.value)),
							children: he.map((e) => /* @__PURE__ */ f("option", {
								value: e,
								children: [e, " / page"]
							}, e))
						}) : null
					]
				})]
			}) : null
		]
	});
}
//#endregion
export { m as DataTable };
