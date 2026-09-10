"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { MinusIcon as t } from "./icons.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
import { OTPInput as a, OTPInputContext as o } from "input-otp";
//#region src/components/ui/input-otp.tsx
function s({ className: t, containerClassName: r, ...i }) {
	return /* @__PURE__ */ n(a, {
		"data-slot": "input-otp",
		containerClassName: e("flex items-center gap-2 has-disabled:opacity-50", r),
		className: e("disabled:cursor-not-allowed", t),
		...i
	});
}
function c({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "input-otp-group",
		className: e("flex items-center", t),
		...r
	});
}
function l({ index: t, className: a, ...s }) {
	let { char: c, hasFakeCaret: l, isActive: u } = i.useContext(o)?.slots[t] ?? {};
	return /* @__PURE__ */ r("div", {
		"data-slot": "input-otp-slot",
		"data-active": u,
		className: e("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40", a),
		...s,
		children: [c, l && /* @__PURE__ */ n("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ n("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
}
function u({ ...e }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "input-otp-separator",
		role: "separator",
		...e,
		children: /* @__PURE__ */ n(t, {})
	});
}
//#endregion
export { s as InputOTP, c as InputOTPGroup, u as InputOTPSeparator, l as InputOTPSlot };
