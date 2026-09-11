"use client";
import { CircleCheckIcon as e, InfoIcon as t, Loader2Icon as n, OctagonXIcon as r, TriangleAlertIcon as i } from "./icons.js";
import { jsx as a } from "react/jsx-runtime";
import { useEffect as o, useState as s } from "react";
import { Toaster as c } from "sonner";
//#region src/components/ui/sonner.tsx
var l = ({ ...l }) => {
	let [u, d] = s("dark");
	return o(() => {
		let e = document.documentElement, t = () => d(e.dataset.theme === "light" || e.classList.contains("light") ? "light" : "dark");
		t();
		let n = new MutationObserver(t);
		return n.observe(e, {
			attributes: !0,
			attributeFilter: ["data-theme", "class"]
		}), () => n.disconnect();
	}, []), /* @__PURE__ */ a(c, {
		theme: u,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ a(e, { className: "size-4" }),
			info: /* @__PURE__ */ a(t, { className: "size-4" }),
			warning: /* @__PURE__ */ a(i, { className: "size-4" }),
			error: /* @__PURE__ */ a(r, { className: "size-4" }),
			loading: /* @__PURE__ */ a(n, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--mw-surface-overlay)",
			"--normal-text": "var(--mw-text-primary)",
			"--normal-border": "var(--mw-border-default)",
			"--border-radius": "0px"
		},
		...l
	});
};
//#endregion
export { l as Toaster };
