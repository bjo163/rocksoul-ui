import { Input as e } from "../ui/input.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/molecules/file-input.tsx
var r = t.forwardRef(({ className: t, accept: r, multiple: i, ...a }, o) => /* @__PURE__ */ n(e, {
	ref: o,
	type: "file",
	accept: r,
	multiple: i,
	className: t,
	...a
}));
r.displayName = "FileInput";
//#endregion
export { r as FileInput };
