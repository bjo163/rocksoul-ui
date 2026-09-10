import { t as e } from "../../cn-DhjIN-s0.js";
import { Attachment as t, AttachmentContent as n, AttachmentDescription as r, AttachmentGroup as i, AttachmentMedia as a, AttachmentTitle as o } from "../ui/attachment.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
//#region src/components/organisms/attachment-list.tsx
function l({ items: l, orientation: u = "horizontal", className: d, ...f }) {
	return /* @__PURE__ */ s(i, {
		"data-slot": "attachment-list",
		className: e(u === "vertical" && "flex-col overflow-visible", d),
		...f,
		children: l.map((e) => /* @__PURE__ */ c(t, {
			state: e.state,
			orientation: u,
			className: u === "vertical" ? "w-full" : void 0,
			children: [
				/* @__PURE__ */ s(a, {
					variant: e.media ? "image" : "icon",
					children: e.media
				}),
				/* @__PURE__ */ c(n, { children: [/* @__PURE__ */ s(o, { children: e.name }), e.description ? /* @__PURE__ */ s(r, { children: e.description }) : null] }),
				e.actions
			]
		}, e.id))
	});
}
//#endregion
export { l as AttachmentList };
