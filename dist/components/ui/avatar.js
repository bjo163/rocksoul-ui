"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { Avatar as n } from "radix-ui";
//#region src/components/ui/avatar.tsx
function r({ className: r, size: i = "default", ...a }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "avatar",
		"data-size": i,
		className: e("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", r),
		...a
	});
}
function i({ className: r, ...i }) {
	return /* @__PURE__ */ t(n.Image, {
		"data-slot": "avatar-image",
		className: e("aspect-square size-full", r),
		...i
	});
}
function a({ className: r, ...i }) {
	return /* @__PURE__ */ t(n.Fallback, {
		"data-slot": "avatar-fallback",
		className: e("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", r),
		...i
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("span", {
		"data-slot": "avatar-badge",
		className: e("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", n),
		...r
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "avatar-group",
		className: e("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", n),
		...r
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "avatar-group-count",
		className: e("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", n),
		...r
	});
}
//#endregion
export { r as Avatar, o as AvatarBadge, a as AvatarFallback, s as AvatarGroup, c as AvatarGroupCount, i as AvatarImage };
