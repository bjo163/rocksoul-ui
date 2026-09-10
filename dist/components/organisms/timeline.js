import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/organisms/timeline.tsx
function r({ items: r, className: i, ...a }) {
	return /* @__PURE__ */ t("ol", {
		"data-slot": "timeline",
		className: e("grid", i),
		...a,
		children: r.map((e, i) => /* @__PURE__ */ n("li", {
			"data-slot": "timeline-item",
			"data-status": e.status ?? "default",
			className: "relative grid grid-cols-[auto_1fr] gap-3 pb-6 last:pb-0",
			children: [
				i < r.length - 1 ? /* @__PURE__ */ t("span", {
					"aria-hidden": "true",
					className: "absolute left-3 top-7 h-[calc(100%-1.25rem)] w-px bg-border"
				}) : null,
				/* @__PURE__ */ t("span", {
					className: "relative z-10 flex size-6 items-center justify-center rounded-full border bg-background text-xs text-muted-foreground data-[status=active]:border-primary data-[status=active]:text-primary",
					"data-status": e.status ?? "default",
					children: e.icon ?? /* @__PURE__ */ t("span", { className: "size-1.5 rounded-full bg-current" })
				}),
				/* @__PURE__ */ n("div", {
					className: "min-w-0 pt-0.5",
					children: [
						/* @__PURE__ */ n("div", {
							className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
							children: [/* @__PURE__ */ t("div", {
								className: "font-medium",
								children: e.title
							}), e.timestamp ? /* @__PURE__ */ t("time", {
								className: "text-xs text-muted-foreground",
								children: e.timestamp
							}) : null]
						}),
						e.description ? /* @__PURE__ */ t("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: e.description
						}) : null,
						e.content ? /* @__PURE__ */ t("div", {
							className: "mt-3",
							children: e.content
						}) : null
					]
				})
			]
		}, e.id))
	});
}
//#endregion
export { r as Timeline };
