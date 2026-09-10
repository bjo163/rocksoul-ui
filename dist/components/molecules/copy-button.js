"use client";
import { CheckIcon as e } from "../ui/icons.js";
import { Button as t } from "../ui/button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
//#region src/components/molecules/copy-button.tsx
var a = i.forwardRef(({ value: a, copiedLabel: o = "Copied", copyLabel: s = "Copy", onCopied: c, children: l, onClick: u, ...d }, f) => {
	let [p, m] = i.useState(!1), h = i.useRef(void 0);
	i.useEffect(() => () => {
		h.current && clearTimeout(h.current);
	}, []);
	let g = async (e) => {
		u?.(e), !e.defaultPrevented && (await navigator.clipboard?.writeText(a), m(!0), c?.(), h.current = setTimeout(() => m(!1), 2e3));
	};
	return /* @__PURE__ */ r(t, {
		ref: f,
		type: "button",
		"aria-label": p ? o : s,
		...d,
		onClick: g,
		children: [p ? /* @__PURE__ */ n(e, { "aria-hidden": "true" }) : null, l ?? (p ? o : s)]
	});
});
a.displayName = "CopyButton";
//#endregion
export { a as CopyButton };
