import { Input as e } from "../ui/input.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/molecules/date-input.tsx
var r = t.forwardRef(({ className: t, min: r, max: i, ...a }, o) => /* @__PURE__ */ n(e, {
	ref: o,
	type: "date",
	min: r,
	max: i,
	className: t,
	...a
}));
r.displayName = "DateInput";
//#endregion
export { r as DateInput };
