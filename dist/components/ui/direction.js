"use client";
import "react";
import { jsx as e } from "react/jsx-runtime";
import { Direction as t } from "radix-ui";
//#region src/components/ui/direction.tsx
function n({ dir: n, direction: r, children: i }) {
	return /* @__PURE__ */ e(t.DirectionProvider, {
		dir: r ?? n,
		children: i
	});
}
var r = t.useDirection;
//#endregion
export { n as DirectionProvider, r as useDirection };
