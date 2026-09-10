import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/card.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card",
		className: e("flex flex-col gap-6 rounded-none border bg-card py-6 text-card-foreground shadow-sm", n),
		...r
	});
}
function r({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-header",
		className: e("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", n),
		...r
	});
}
function i({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-title",
		className: e("leading-none font-semibold", n),
		...r
	});
}
function a({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-description",
		className: e("text-sm text-muted-foreground", n),
		...r
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-action",
		className: e("col-start-2 row-span-2 row-start-1 self-start justify-self-end", n),
		...r
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-content",
		className: e("px-6", n),
		...r
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "card-footer",
		className: e("flex items-center px-6 [.border-t]:pt-6", n),
		...r
	});
}
//#endregion
export { n as Card, o as CardAction, s as CardContent, a as CardDescription, c as CardFooter, r as CardHeader, i as CardTitle };
