"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { toggleVariants as t } from "./toggle.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
import { ToggleGroup as i } from "radix-ui";
//#region src/components/ui/toggle-group.tsx
var a = n.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function o({ className: t, variant: n, size: o, spacing: s = 0, children: c, ...l }) {
	return /* @__PURE__ */ r(i.Root, {
		"data-slot": "toggle-group",
		"data-variant": n,
		"data-size": o,
		"data-spacing": s,
		style: { "--gap": s },
		className: e("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-none data-[spacing=default]:data-[variant=outline]:shadow-xs", t),
		...l,
		children: /* @__PURE__ */ r(a.Provider, {
			value: {
				variant: n,
				size: o,
				spacing: s
			},
			children: c
		})
	});
}
function s({ className: o, children: s, variant: c, size: l, ...u }) {
	let d = n.useContext(a);
	return /* @__PURE__ */ r(i.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": d.variant || c,
		"data-size": d.size || l,
		"data-spacing": d.spacing,
		className: e(t({
			variant: d.variant || c,
			size: d.size || l
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", o),
		...u,
		children: s
	});
}
//#endregion
export { o as ToggleGroup, s as ToggleGroupItem };
