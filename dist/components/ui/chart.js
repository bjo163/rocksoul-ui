"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
import * as a from "recharts";
//#region src/components/ui/chart.tsx
var o = {
	light: "",
	dark: ":is(.dark, [data-theme=dark])"
}, s = {
	width: 320,
	height: 200
}, c = i.createContext(null);
function l() {
	let e = i.useContext(c);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
function u({ id: t, className: o, children: l, config: u, initialDimension: f = s, ...p }) {
	let m = i.useId(), h = `chart-${t ?? m.replace(/:/g, "")}`;
	return /* @__PURE__ */ n(c.Provider, {
		value: { config: u },
		children: /* @__PURE__ */ r("div", {
			"data-slot": "chart",
			"data-chart": h,
			className: e("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke]]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke]]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke]]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke]]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke]]:stroke-transparent [&_.recharts-surface]:outline-hidden", o),
			...p,
			children: [/* @__PURE__ */ n(d, {
				id: h,
				config: u
			}), /* @__PURE__ */ n(a.ResponsiveContainer, {
				initialDimension: f,
				children: l
			})]
		})
	});
}
var d = ({ id: e, config: t }) => {
	let r = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
	return r.length ? /* @__PURE__ */ n("style", { dangerouslySetInnerHTML: { __html: Object.entries(o).map(([t, n]) => `
${n} [data-chart=${e}] {
${r.map(([e, n]) => {
		let r = n.theme?.[t] ?? n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, f = a.Tooltip;
function p({ active: a, payload: o, className: s, indicator: c = "dot", hideLabel: u = !1, hideIndicator: d = !1, label: f, labelFormatter: p, labelClassName: m, formatter: h, color: _, nameKey: v, labelKey: y }) {
	let { config: b } = l(), x = i.useMemo(() => {
		if (u || !o?.length) return null;
		let [t] = o, r = `${y ?? t?.dataKey ?? t?.name ?? "value"}`, i = g(b, t, r), a = !y && typeof f == "string" ? b[f]?.label ?? f : i?.label;
		return p ? /* @__PURE__ */ n("div", {
			className: e("font-medium", m),
			children: p(a, o)
		}) : a ? /* @__PURE__ */ n("div", {
			className: e("font-medium", m),
			children: a
		}) : null;
	}, [
		f,
		p,
		o,
		u,
		m,
		b,
		y
	]);
	if (!a || !o?.length) return null;
	let S = o.length === 1 && c !== "dot";
	return /* @__PURE__ */ r("div", {
		className: e("grid min-w-[8rem] items-start gap-1.5 rounded-none border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", s),
		children: [S ? null : x, /* @__PURE__ */ n("div", {
			className: "grid gap-1.5",
			children: o.filter((e) => e.type !== "none").map((i, a) => {
				let o = `${v ?? i.name ?? i.dataKey ?? "value"}`, s = g(b, i, o), l = _ ?? i.payload?.fill ?? i.color;
				return /* @__PURE__ */ n("div", {
					className: e("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", c === "dot" && "items-center"),
					children: h && i?.value !== void 0 && i.name ? h(i.value, i.name, i, a, i.payload) : /* @__PURE__ */ r(t, { children: [s?.icon ? /* @__PURE__ */ n(s.icon, {}) : !d && /* @__PURE__ */ n("div", {
						className: e("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": c === "dot",
							"w-1": c === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": c === "dashed",
							"my-0.5": S && c === "dashed"
						}),
						style: {
							"--color-bg": l,
							"--color-border": l
						}
					}), /* @__PURE__ */ r("div", {
						className: e("flex flex-1 justify-between leading-none", S ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ r("div", {
							className: "grid gap-1.5",
							children: [S ? x : null, /* @__PURE__ */ n("span", {
								className: "text-muted-foreground",
								children: s?.label ?? i.name
							})]
						}), i.value != null && /* @__PURE__ */ n("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof i.value == "number" ? i.value.toLocaleString() : String(i.value)
						})]
					})] })
				}, a);
			})
		})]
	});
}
var m = a.Legend;
function h({ className: t, hideIcon: i = !1, payload: a, verticalAlign: o = "bottom", nameKey: s }) {
	let { config: c } = l();
	return a?.length ? /* @__PURE__ */ n("div", {
		className: e("flex items-center justify-center gap-4", o === "top" ? "pb-3" : "pt-3", t),
		children: a.filter((e) => e.type !== "none").map((t, a) => {
			let o = `${s ?? t.dataKey ?? "value"}`, l = g(c, t, o);
			return /* @__PURE__ */ r("div", {
				className: e("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [l?.icon && !i ? /* @__PURE__ */ n(l.icon, {}) : /* @__PURE__ */ n("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: t.color }
				}), l?.label]
			}, a);
		})
	}) : null;
}
function g(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
export { u as ChartContainer, m as ChartLegend, h as ChartLegendContent, d as ChartStyle, f as ChartTooltip, p as ChartTooltipContent };
