import { t as e } from "./cn-DhjIN-s0.js";
import { PanelLeftIcon as t } from "./components/ui/icons.js";
import { Button as n } from "./components/ui/button.js";
import { Separator as r } from "./components/ui/separator.js";
import { Input as i } from "./components/ui/input.js";
import { Sheet as a, SheetContent as o, SheetDescription as s, SheetHeader as c, SheetTitle as l } from "./components/ui/sheet.js";
import { Skeleton as u } from "./components/ui/skeleton.js";
import { Tooltip as d, TooltipContent as f, TooltipProvider as p, TooltipTrigger as m } from "./components/ui/tooltip.js";
import * as h from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import { Slot as v } from "radix-ui";
import { cva as y } from "class-variance-authority";
//#region src/hooks/use-mobile.ts
var b = 768;
function x() {
	let [e, t] = h.useState(void 0);
	return h.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), n = () => {
			t(window.innerWidth < b);
		};
		return e.addEventListener("change", n), t(window.innerWidth < b), () => e.removeEventListener("change", n);
	}, []), !!e;
}
//#endregion
//#region src/components/ui/sidebar.tsx
var S = "sidebar_state", C = 604800, w = "16rem", T = "18rem", E = "3rem", D = "b", O = h.createContext(null);
function k() {
	let e = h.useContext(O);
	if (!e) throw Error("useSidebar must be used within a SidebarProvider.");
	return e;
}
function A({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: a, children: o, ...s }) {
	let c = x(), [l, u] = h.useState(!1), [d, f] = h.useState(t), m = n ?? d, _ = h.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : f(t), document.cookie = `${S}=${t}; path=/; max-age=${C}`;
	}, [r, m]), v = h.useCallback(() => c ? u((e) => !e) : _((e) => !e), [
		c,
		_,
		u
	]);
	h.useEffect(() => {
		let e = (e) => {
			e.key === D && (e.metaKey || e.ctrlKey) && (e.preventDefault(), v());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [v]);
	let y = m ? "expanded" : "collapsed", b = h.useMemo(() => ({
		state: y,
		open: m,
		setOpen: _,
		isMobile: c,
		openMobile: l,
		setOpenMobile: u,
		toggleSidebar: v
	}), [
		y,
		m,
		_,
		c,
		l,
		u,
		v
	]);
	return /* @__PURE__ */ g(O.Provider, {
		value: b,
		children: /* @__PURE__ */ g(p, {
			delayDuration: 0,
			children: /* @__PURE__ */ g("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": w,
					"--sidebar-width-icon": E,
					...a
				},
				className: e("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
				...s,
				children: o
			})
		})
	});
}
function j({ side: t = "left", variant: n = "sidebar", collapsible: r = "offcanvas", className: i, children: u, ...d }) {
	let { isMobile: f, state: p, openMobile: m, setOpenMobile: h } = k();
	return r === "none" ? /* @__PURE__ */ g("div", {
		"data-slot": "sidebar",
		className: e("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", i),
		...d,
		children: u
	}) : f ? /* @__PURE__ */ g(a, {
		open: m,
		onOpenChange: h,
		...d,
		children: /* @__PURE__ */ _(o, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": T },
			side: t,
			children: [/* @__PURE__ */ _(c, {
				className: "sr-only",
				children: [/* @__PURE__ */ g(l, { children: "Sidebar" }), /* @__PURE__ */ g(s, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ g("div", {
				className: "flex h-full w-full flex-col",
				children: u
			})]
		})
	}) : /* @__PURE__ */ _("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": p,
		"data-collapsible": p === "collapsed" ? r : "",
		"data-variant": n,
		"data-side": t,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ g("div", {
			"data-slot": "sidebar-gap",
			className: e("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", n === "floating" || n === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ g("div", {
			"data-slot": "sidebar-container",
			className: e("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", n === "floating" || n === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", i),
			...d,
			children: /* @__PURE__ */ g("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-none group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
				children: u
			})
		})]
	});
}
function M({ className: r, onClick: i, ...a }) {
	let { toggleSidebar: o } = k();
	return /* @__PURE__ */ _(n, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: e("size-7", r),
		onClick: (e) => {
			i?.(e), o();
		},
		...a,
		children: [/* @__PURE__ */ g(t, {}), /* @__PURE__ */ g("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function N({ className: t, ...n }) {
	let { toggleSidebar: r } = k();
	return /* @__PURE__ */ g("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: r,
		title: "Toggle Sidebar",
		className: e("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t),
		...n
	});
}
function P({ className: t, ...n }) {
	return /* @__PURE__ */ g("main", {
		"data-slot": "sidebar-inset",
		className: e("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", t),
		...n
	});
}
function F({ className: t, ...n }) {
	return /* @__PURE__ */ g(i, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: e("h-8 w-full bg-background shadow-none", t),
		...n
	});
}
function I({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: e("flex flex-col gap-2 p-2", t),
		...n
	});
}
function L({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: e("flex flex-col gap-2 p-2", t),
		...n
	});
}
function R({ className: t, ...n }) {
	return /* @__PURE__ */ g(r, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: e("mx-2 w-auto bg-sidebar-border", t),
		...n
	});
}
function z({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: e("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t),
		...n
	});
}
function B({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: e("relative flex w-full min-w-0 flex-col p-2", t),
		...n
	});
}
function V({ className: t, asChild: n = !1, ...r }) {
	let i = n ? v.Root : "div";
	return /* @__PURE__ */ g(i, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: e("flex h-8 shrink-0 items-center rounded-none px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t),
		...r
	});
}
function H({ className: t, asChild: n = !1, ...r }) {
	let i = n ? v.Root : "button";
	return /* @__PURE__ */ g(i, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: e("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-none p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", t),
		...r
	});
}
function U({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: e("w-full text-sm", t),
		...n
	});
}
function W({ className: t, ...n }) {
	return /* @__PURE__ */ g("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: e("flex w-full min-w-0 flex-col gap-1", t),
		...n
	});
}
function G({ className: t, ...n }) {
	return /* @__PURE__ */ g("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: e("group/menu-item relative", t),
		...n
	});
}
var K = y("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-none p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function q({ asChild: t = !1, isActive: n = !1, variant: r = "default", size: i = "default", tooltip: a, className: o, ...s }) {
	let c = t ? v.Root : "button", { isMobile: l, state: u } = k(), p = /* @__PURE__ */ g(c, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": i,
		"data-active": n,
		className: e(K({
			variant: r,
			size: i
		}), o),
		...s
	});
	return a ? (typeof a == "string" && (a = { children: a }), /* @__PURE__ */ _(d, { children: [/* @__PURE__ */ g(m, {
		asChild: !0,
		children: p
	}), /* @__PURE__ */ g(f, {
		side: "right",
		align: "center",
		hidden: u !== "collapsed" || l,
		...a
	})] })) : p;
}
function J({ className: t, asChild: n = !1, showOnHover: r = !1, ...i }) {
	let a = n ? v.Root : "button";
	return /* @__PURE__ */ g(a, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: e("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-none p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", t),
		...i
	});
}
function Y({ className: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: e("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-none px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", t),
		...n
	});
}
function X({ className: t, showIcon: n = !1, ...r }) {
	return /* @__PURE__ */ _("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: e("flex h-8 items-center gap-2 rounded-none px-2", t),
		...r,
		children: [n && /* @__PURE__ */ g(u, {
			className: "size-4 rounded-none",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ g(u, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": "70%" }
		})]
	});
}
function Z({ className: t, ...n }) {
	return /* @__PURE__ */ g("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: e("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", t),
		...n
	});
}
function Q({ className: t, ...n }) {
	return /* @__PURE__ */ g("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: e("group/menu-sub-item relative", t),
		...n
	});
}
function $({ asChild: t = !1, size: n = "md", isActive: r = !1, className: i, ...a }) {
	let o = t ? v.Root : "a";
	return /* @__PURE__ */ g(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": n,
		"data-active": r,
		className: e("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-none px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", n === "sm" && "text-xs", n === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", i),
		...a
	});
}
//#endregion
export { M as C, R as S, Z as _, H as a, A as b, I as c, W as d, J as f, X as g, G as h, B as i, F as l, q as m, z as n, U as o, Y as p, L as r, V as s, j as t, P as u, $ as v, k as w, N as x, Q as y };
