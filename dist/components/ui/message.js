import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/components/ui/message.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message-group",
		className: e("flex min-w-0 flex-col gap-2", n),
		...r
	});
}
function r({ className: n, align: r = "start", ...i }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message",
		"data-align": r,
		className: e("group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse", n),
		...i
	});
}
function i({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message-avatar",
		className: e("flex w-fit min-w-8 shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted group-has-data-[slot=message-footer]/message:-translate-y-8", n),
		...r
	});
}
function a({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message-content",
		className: e("flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end", n),
		...r
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message-header",
		className: e("flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0", n),
		...r
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "message-footer",
		className: e("flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end", n),
		...r
	});
}
//#endregion
export { r as Message, i as MessageAvatar, a as MessageContent, s as MessageFooter, n as MessageGroup, o as MessageHeader };
