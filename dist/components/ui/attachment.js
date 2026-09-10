import { t as e } from "../../cn-DhjIN-s0.js";
import { Button as t } from "./button.js";
import { jsx as n } from "react/jsx-runtime";
import "react";
import { Slot as r } from "radix-ui";
import { cva as i } from "class-variance-authority";
//#region src/components/ui/attachment.tsx
var a = i("group/attachment relative flex w-fit max-w-full min-w-0 shrink-0 flex-wrap rounded-none border bg-card text-card-foreground transition-colors focus-within:ring-1 focus-within:ring-ring/50 has-[>a,>button]:hover:bg-muted/50 data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed", { variants: {
	size: {
		default: "gap-2 text-sm has-data-[slot=attachment-content]:px-2.5 has-data-[slot=attachment-content]:py-2 has-data-[slot=attachment-media]:p-2",
		sm: "gap-2.5 text-xs has-data-[slot=attachment-content]:px-2 has-data-[slot=attachment-content]:py-1.5 has-data-[slot=attachment-media]:p-1.5",
		xs: "gap-1.5 rounded-none text-xs has-data-[slot=attachment-content]:px-1.5 has-data-[slot=attachment-content]:py-1 has-data-[slot=attachment-media]:p-1"
	},
	orientation: {
		horizontal: "min-w-40 items-center",
		vertical: "w-24 flex-col has-data-[slot=attachment-content]:w-30"
	}
} });
function o({ className: t, state: r = "done", size: i = "default", orientation: o = "horizontal", ...s }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "attachment",
		"data-state": r,
		"data-size": i,
		"data-orientation": o,
		className: e(a({
			size: i,
			orientation: o
		}), t),
		...s
	});
}
var s = i("relative flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-none bg-muted text-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-none group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5", {
	variants: { variant: {
		icon: "",
		image: "opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover"
	} },
	defaultVariants: { variant: "icon" }
});
function c({ className: t, variant: r = "icon", ...i }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "attachment-media",
		"data-variant": r,
		className: e(s({ variant: r }), t),
		...i
	});
}
function l({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "attachment-content",
		className: e("max-w-full min-w-0 flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-1", t),
		...r
	});
}
function u({ className: t, ...r }) {
	return /* @__PURE__ */ n("span", {
		"data-slot": "attachment-title",
		className: e("block max-w-full min-w-0 truncate font-medium group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer", t),
		...r
	});
}
function d({ className: t, ...r }) {
	return /* @__PURE__ */ n("span", {
		"data-slot": "attachment-description",
		className: e("mt-0.5 block min-w-0 truncate text-xs text-muted-foreground group-data-[state=error]/attachment:text-destructive/80", "max-w-full", t),
		...r
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "attachment-actions",
		className: e("relative z-20 flex shrink-0 items-center group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 group-data-[orientation=vertical]/attachment:gap-1", t),
		...r
	});
}
function p({ className: r, variant: i, size: a = "icon-xs", ...o }) {
	return /* @__PURE__ */ n(t, {
		"data-slot": "attachment-action",
		variant: i ?? "ghost",
		size: a,
		className: e(r),
		...o
	});
}
function m({ className: t, asChild: i = !1, type: a, ...o }) {
	let s = i ? r.Root : "button";
	return /* @__PURE__ */ n(s, {
		"data-slot": "attachment-trigger",
		type: i ? void 0 : a ?? "button",
		className: e("absolute inset-0 z-10 outline-none", t),
		...o
	});
}
function h({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		"data-slot": "attachment-group",
		className: e("flex min-w-0 scroll-fade-x snap-x snap-mandatory scroll-px-1 scrollbar-none gap-3 overflow-x-auto overscroll-x-contain py-1 *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start", t),
		...r
	});
}
//#endregion
export { o as Attachment, p as AttachmentAction, f as AttachmentActions, l as AttachmentContent, d as AttachmentDescription, h as AttachmentGroup, c as AttachmentMedia, u as AttachmentTitle, m as AttachmentTrigger };
