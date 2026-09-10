"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { CheckIcon as t, ChevronDownIcon as n, XIcon as r } from "./icons.js";
import { Button as i } from "./button.js";
import { InputGroup as a, InputGroupAddon as o, InputGroupButton as s, InputGroupInput as c } from "./input-group.js";
import * as l from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Combobox as f } from "@base-ui/react";
//#region src/components/ui/combobox.tsx
var p = f.Root;
function m({ ...e }) {
	return /* @__PURE__ */ u(f.Value, {
		"data-slot": "combobox-value",
		...e
	});
}
function h({ className: t, children: r, ...i }) {
	return /* @__PURE__ */ d(f.Trigger, {
		"data-slot": "combobox-trigger",
		className: e("[&_svg:not([class*='size-'])]:size-4", t),
		...i,
		children: [r, /* @__PURE__ */ u(n, {
			"data-slot": "combobox-trigger-icon",
			className: "pointer-events-none size-4 text-muted-foreground"
		})]
	});
}
function g({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.Clear, {
		"data-slot": "combobox-clear",
		render: /* @__PURE__ */ u(s, {
			variant: "ghost",
			size: "icon-xs"
		}),
		className: e(t),
		...n,
		children: /* @__PURE__ */ u(r, { className: "pointer-events-none" })
	});
}
function _({ className: t, children: n, disabled: r = !1, showTrigger: i = !0, showClear: l = !1, ...p }) {
	return /* @__PURE__ */ d(a, {
		className: e("w-auto", t),
		children: [
			/* @__PURE__ */ u(f.Input, {
				render: /* @__PURE__ */ u(c, { disabled: r }),
				...p
			}),
			/* @__PURE__ */ d(o, {
				align: "inline-end",
				children: [i && /* @__PURE__ */ u(s, {
					size: "icon-xs",
					variant: "ghost",
					asChild: !0,
					"data-slot": "input-group-button",
					className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
					disabled: r,
					children: /* @__PURE__ */ u(h, {})
				}), l && /* @__PURE__ */ u(g, { disabled: r })]
			}),
			n
		]
	});
}
function v({ className: t, side: n = "bottom", sideOffset: r = 6, align: i = "start", alignOffset: a = 0, anchor: o, ...s }) {
	return /* @__PURE__ */ u(f.Portal, { children: /* @__PURE__ */ u(f.Positioner, {
		side: n,
		sideOffset: r,
		align: i,
		alignOffset: a,
		anchor: o,
		className: "isolate z-50",
		children: /* @__PURE__ */ u(f.Popup, {
			"data-slot": "combobox-content",
			"data-chips": !!o,
			className: e("group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-none bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", t),
			...s
		})
	}) });
}
function y({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.List, {
		"data-slot": "combobox-list",
		className: e("max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0", t),
		...n
	});
}
function b({ className: n, children: r, ...i }) {
	return /* @__PURE__ */ d(f.Item, {
		"data-slot": "combobox-item",
		className: e("relative flex w-full cursor-default items-center gap-2 rounded-none py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
		...i,
		children: [r, /* @__PURE__ */ u(f.ItemIndicator, {
			"data-slot": "combobox-item-indicator",
			render: /* @__PURE__ */ u("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ u(t, { className: "pointer-events-none size-4 pointer-coarse:size-5" })
		})]
	});
}
function x({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.Group, {
		"data-slot": "combobox-group",
		className: e(t),
		...n
	});
}
function S({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.GroupLabel, {
		"data-slot": "combobox-label",
		className: e("px-2 py-1.5 text-xs text-muted-foreground pointer-coarse:px-3 pointer-coarse:py-2 pointer-coarse:text-sm", t),
		...n
	});
}
function C({ ...e }) {
	return /* @__PURE__ */ u(f.Collection, {
		"data-slot": "combobox-collection",
		...e
	});
}
function w({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.Empty, {
		"data-slot": "combobox-empty",
		className: e("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", t),
		...n
	});
}
function T({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.Separator, {
		"data-slot": "combobox-separator",
		className: e("-mx-1 my-1 h-px bg-border", t),
		...n
	});
}
function E({ className: t, ...n }) {
	return /* @__PURE__ */ u(f.Chips, {
		"data-slot": "combobox-chips",
		className: e("flex min-h-9 flex-wrap items-center gap-1.5 rounded-none border border-input bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1.5 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", t),
		...n
	});
}
function D({ className: t, children: n, showRemove: a = !0, ...o }) {
	return /* @__PURE__ */ d(f.Chip, {
		"data-slot": "combobox-chip",
		className: e("flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-none bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", t),
		...o,
		children: [n, a && /* @__PURE__ */ u(f.ChipRemove, {
			render: /* @__PURE__ */ u(i, {
				variant: "ghost",
				size: "icon-xs"
			}),
			className: "-ml-1 opacity-50 hover:opacity-100",
			"data-slot": "combobox-chip-remove",
			children: /* @__PURE__ */ u(r, { className: "pointer-events-none" })
		})]
	});
}
function O({ className: t, children: n, ...r }) {
	return /* @__PURE__ */ u(f.Input, {
		"data-slot": "combobox-chip-input",
		className: e("min-w-16 flex-1 outline-none", t),
		...r
	});
}
function k() {
	return l.useRef(null);
}
//#endregion
export { p as Combobox, D as ComboboxChip, E as ComboboxChips, O as ComboboxChipsInput, C as ComboboxCollection, v as ComboboxContent, w as ComboboxEmpty, x as ComboboxGroup, _ as ComboboxInput, b as ComboboxItem, S as ComboboxLabel, y as ComboboxList, T as ComboboxSeparator, h as ComboboxTrigger, m as ComboboxValue, k as useComboboxAnchor };
