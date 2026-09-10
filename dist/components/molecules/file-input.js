import { Input as e } from "../ui/input.js";
import { jsx as t } from "react/jsx-runtime";
import * as n from "react";
//#region src/components/molecules/file-input.tsx
var r = n.forwardRef(({ className: n, accept: r, multiple: i, ...a }, o) => /* @__PURE__ */ t(e, {
	ref: o,
	type: "file",
	accept: r,
	multiple: i,
	className: n,
	...a
}));
r.displayName = "FileInput";
//#endregion
export { r as FileInput };
