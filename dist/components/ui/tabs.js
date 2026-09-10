"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { Tabs as n } from "radix-ui";
import { cva as r } from "class-variance-authority";
//#region src/components/ui/tabs.tsx
function i({ className: r, orientation: i = "horizontal", ...a }) {
	return /* @__PURE__ */ t(n.Root, {
		"data-slot": "tabs",
		"data-orientation": i,
		orientation: i,
		className: e("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", r),
		...a
	});
}
var a = r("group/tabs-list inline-flex w-fit items-center justify-center rounded-none p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function o({ className: r, variant: i = "default", ...o }) {
	return /* @__PURE__ */ t(n.List, {
		"data-slot": "tabs-list",
		"data-variant": i,
		className: e(a({ variant: i }), r),
		...o
	});
}
function s({ className: r, ...i }) {
	return /* @__PURE__ */ t(n.Trigger, {
		"data-slot": "tabs-trigger",
		className: e("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-none border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", r),
		...i
	});
}
function c({ className: r, ...i }) {
	return /* @__PURE__ */ t(n.Content, {
		"data-slot": "tabs-content",
		className: e("flex-1 outline-none", r),
		...i
	});
}
//#endregion
export { i as Tabs, c as TabsContent, o as TabsList, s as TabsTrigger, a as tabsListVariants };
