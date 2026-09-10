import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "../ui/button.js";
import { Empty as n, EmptyContent as r, EmptyDescription as i, EmptyHeader as a, EmptyMedia as o, EmptyTitle as s } from "../ui/empty.js";
import { Spinner as c } from "../ui/spinner.js";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import "react";
//#region src/components/organisms/content-states.tsx
function f({ title: t, description: c, icon: l, action: f, className: p, ...m }) {
	return /* @__PURE__ */ d(n, {
		className: e("min-h-48", p),
		...m,
		children: [
			l ? /* @__PURE__ */ u(o, {
				variant: "icon",
				children: l
			}) : null,
			/* @__PURE__ */ d(a, { children: [/* @__PURE__ */ u(s, { children: t }), c ? /* @__PURE__ */ u(i, { children: c }) : null] }),
			f ? /* @__PURE__ */ u(r, { children: f }) : null
		]
	});
}
function p(e) {
	return /* @__PURE__ */ u(f, {
		"data-slot": "empty-state",
		...e
	});
}
function m({ onRetry: e, retryLabel: n = "Try again", action: r, ...i }) {
	return /* @__PURE__ */ u(f, {
		"data-slot": "error-state",
		action: /* @__PURE__ */ d(l, { children: [e ? /* @__PURE__ */ u(t, {
			type: "button",
			onClick: e,
			children: n
		}) : null, r] }),
		...i
	});
}
function h({ label: e = "Loading", ...t }) {
	return /* @__PURE__ */ u(f, {
		"data-slot": "loading-state",
		icon: /* @__PURE__ */ u(c, { "aria-label": e }),
		...t
	});
}
//#endregion
export { f as ContentState, p as EmptyState, m as ErrorState, h as LoadingState };
