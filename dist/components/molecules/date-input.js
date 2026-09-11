import { Input as e } from "../ui/input.js";
import { jsx as t } from "react/jsx-runtime";
import * as n from "react";
//#region src/components/molecules/date-input.tsx
var r = n.forwardRef(({ className: n, min: r, max: i, ...a }, o) => /* @__PURE__ */ t(e, {
	ref: o,
	type: "date",
	min: r,
	max: i,
	className: n,
	...a
}));
r.displayName = "DateInput";
//#endregion
export { r as DateInput };
