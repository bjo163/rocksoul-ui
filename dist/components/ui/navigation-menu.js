import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronDownIcon as t } from "./icons.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { NavigationMenu as i } from "radix-ui";
import { cva as a } from "class-variance-authority";
//#region src/components/ui/navigation-menu.tsx
function o({ className: t, children: a, viewport: o = !0, ...s }) {
	return /* @__PURE__ */ r(i.Root, {
		"data-slot": "navigation-menu",
		"data-viewport": o,
		className: e("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", t),
		...s,
		children: [a, o && /* @__PURE__ */ n(f, {})]
	});
}
function s({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.List, {
		"data-slot": "navigation-menu-list",
		className: e("group flex flex-1 list-none items-center justify-center gap-1", t),
		...r
	});
}
function c({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Item, {
		"data-slot": "navigation-menu-item",
		className: e("relative", t),
		...r
	});
}
var l = a("group inline-flex h-9 w-max items-center justify-center rounded-none bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
function u({ className: a, children: o, ...s }) {
	return /* @__PURE__ */ r(i.Trigger, {
		"data-slot": "navigation-menu-trigger",
		className: e(l(), "group", a),
		...s,
		children: [
			o,
			" ",
			/* @__PURE__ */ n(t, {
				className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
				"aria-hidden": "true"
			})
		]
	});
}
function d({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Content, {
		"data-slot": "navigation-menu-content",
		className: e("top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-none group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95", t),
		...r
	});
}
function f({ className: t, ...r }) {
	return /* @__PURE__ */ n("div", {
		className: e("absolute top-full left-0 isolate z-50 flex justify-center"),
		children: /* @__PURE__ */ n(i.Viewport, {
			"data-slot": "navigation-menu-viewport",
			className: e("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-none border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", t),
			...r
		})
	});
}
function p({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Link, {
		"data-slot": "navigation-menu-link",
		className: e("flex flex-col gap-1 rounded-none p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", t),
		...r
	});
}
function m({ className: t, ...r }) {
	return /* @__PURE__ */ n(i.Indicator, {
		"data-slot": "navigation-menu-indicator",
		className: e("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in", t),
		...r,
		children: /* @__PURE__ */ n("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
	});
}
//#endregion
export { o as NavigationMenu, d as NavigationMenuContent, m as NavigationMenuIndicator, c as NavigationMenuItem, p as NavigationMenuLink, s as NavigationMenuList, u as NavigationMenuTrigger, f as NavigationMenuViewport, l as navigationMenuTriggerStyle };
