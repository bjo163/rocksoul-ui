import { Button as e } from "../ui/button.js";
import { Pagination as t } from "../ui/pagination.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/molecules/pagination.tsx
function i({ page: i = 1, pages: a = 1, onPageChange: o }) {
	return /* @__PURE__ */ r(t, {
		"aria-label": "Pagination",
		className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4",
		children: [
			/* @__PURE__ */ n(e, {
				variant: "ghost",
				disabled: i <= 1,
				onClick: () => void o?.(i - 1),
				children: "Previous"
			}),
			/* @__PURE__ */ r("span", {
				className: "mw-meta text-muted-foreground",
				children: [
					"Page ",
					i,
					" / ",
					a
				]
			}),
			/* @__PURE__ */ n(e, {
				variant: "ghost",
				disabled: i >= a,
				onClick: () => void o?.(i + 1),
				children: "Next"
			})
		]
	});
}
//#endregion
export { i as SimplePagination };
