"use client";
import { t as e } from "../../cn-DhjIN-s0.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/components/ui/table.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ t("table", {
			"data-slot": "table",
			className: e("w-full caption-bottom text-sm", n),
			...r
		})
	});
}
function r({ className: n, ...r }) {
	return /* @__PURE__ */ t("thead", {
		"data-slot": "table-header",
		className: e("[&_tr]:border-b", n),
		...r
	});
}
function i({ className: n, ...r }) {
	return /* @__PURE__ */ t("tbody", {
		"data-slot": "table-body",
		className: e("[&_tr:last-child]:border-0", n),
		...r
	});
}
function a({ className: n, ...r }) {
	return /* @__PURE__ */ t("tfoot", {
		"data-slot": "table-footer",
		className: e("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", n),
		...r
	});
}
function o({ className: n, ...r }) {
	return /* @__PURE__ */ t("tr", {
		"data-slot": "table-row",
		className: e("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", n),
		...r
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("th", {
		"data-slot": "table-head",
		className: e("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
		...r
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("td", {
		"data-slot": "table-cell",
		className: e("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
		...r
	});
}
function l({ className: n, ...r }) {
	return /* @__PURE__ */ t("caption", {
		"data-slot": "table-caption",
		className: e("mt-4 text-sm text-muted-foreground", n),
		...r
	});
}
//#endregion
export { n as Table, i as TableBody, l as TableCaption, c as TableCell, a as TableFooter, s as TableHead, r as TableHeader, o as TableRow };
