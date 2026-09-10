"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { GripVerticalIcon as t } from "./icons.js";
import { jsx as n } from "react/jsx-runtime";
import * as r from "react-resizable-panels";
//#region src/components/ui/resizable.tsx
function i({ className: t, ...i }) {
	return /* @__PURE__ */ n(r.Group, {
		"data-slot": "resizable-panel-group",
		className: e("flex h-full w-full aria-[orientation=vertical]:flex-col", t),
		...i
	});
}
function a({ ...e }) {
	return /* @__PURE__ */ n(r.Panel, {
		"data-slot": "resizable-panel",
		...e
	});
}
function o({ withHandle: i, className: a, ...o }) {
	return /* @__PURE__ */ n(r.Separator, {
		"data-slot": "resizable-handle",
		className: e("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90", a),
		...o,
		children: i && /* @__PURE__ */ n("div", {
			className: "z-10 flex h-4 w-3 items-center justify-center rounded-none border bg-border",
			children: /* @__PURE__ */ n(t, { className: "size-2.5" })
		})
	});
}
//#endregion
export { o as ResizableHandle, a as ResizablePanel, i as ResizablePanelGroup };
