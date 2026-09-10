"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { ChevronDownIcon as t, ChevronLeftIcon as n, ChevronRight as r } from "./icons.js";
import { Button as i, buttonVariants as a } from "./button.js";
import { jsx as o } from "react/jsx-runtime";
import * as s from "react";
import { DayPicker as c, getDefaultClassNames as l } from "react-day-picker";
//#region src/components/ui/calendar.tsx
function u({ className: i, classNames: s, showOutsideDays: u = !0, captionLayout: f = "label", buttonVariant: p = "ghost", formatters: m, components: h, ...g }) {
	let _ = l();
	return /* @__PURE__ */ o(c, {
		showOutsideDays: u,
		className: e("group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, i),
		captionLayout: f,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString("default", { month: "short" }),
			...m
		},
		classNames: {
			root: e("w-fit", _.root),
			months: e("relative flex flex-col gap-4 md:flex-row", _.months),
			month: e("flex w-full flex-col gap-4", _.month),
			nav: e("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", _.nav),
			button_previous: e(a({ variant: p }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", _.button_previous),
			button_next: e(a({ variant: p }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", _.button_next),
			month_caption: e("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", _.month_caption),
			dropdowns: e("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", _.dropdowns),
			dropdown_root: e("relative rounded-none border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", _.dropdown_root),
			dropdown: e("absolute inset-0 bg-popover opacity-0", _.dropdown),
			caption_label: e("font-medium select-none", f === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-none pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", _.caption_label),
			month_grid: e("w-full border-collapse", _.month_grid),
			weekdays: e("flex", _.weekdays),
			weekday: e("flex-1 rounded-none text-[0.8rem] font-normal text-muted-foreground select-none", _.weekday),
			week: e("mt-2 flex w-full", _.week),
			week_number_header: e("w-(--cell-size) select-none", _.week_number_header),
			week_number: e("text-[0.8rem] text-muted-foreground select-none", _.week_number),
			day: e("group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md", g.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md", _.day),
			range_start: e("rounded-l-md bg-accent", _.range_start),
			range_middle: e("rounded-none", _.range_middle),
			range_end: e("rounded-r-md bg-accent", _.range_end),
			today: e("rounded-none bg-accent text-accent-foreground data-[selected=true]:rounded-none", _.today),
			outside: e("text-muted-foreground aria-selected:text-muted-foreground", _.outside),
			disabled: e("text-muted-foreground opacity-50", _.disabled),
			hidden: e("invisible", _.hidden),
			...s
		},
		components: {
			Root: ({ className: t, rootRef: n, ...r }) => /* @__PURE__ */ o("div", {
				"data-slot": "calendar",
				ref: n,
				className: e(t),
				...r
			}),
			Chevron: ({ className: i, orientation: a, ...s }) => o(a === "left" ? n : a === "right" ? r : t, {
				className: e("size-4", i),
				...s
			}),
			DayButton: d,
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ o("td", {
				...t,
				children: /* @__PURE__ */ o("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...h
		},
		...g
	});
}
function d({ className: t, day: n, modifiers: r, ...a }) {
	let c = l(), u = s.useRef(null);
	return s.useEffect(() => {
		r.focused && u.current?.focus();
	}, [r.focused]), /* @__PURE__ */ o(i, {
		ref: u,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: e("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-none data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-none data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70", c.day, t),
		...a
	});
}
//#endregion
export { u as Calendar, d as CalendarDayButton };
