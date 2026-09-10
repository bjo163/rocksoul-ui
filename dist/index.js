import { t as e } from "./cn-DhjIN-s0.js";
import { A as t, C as n, D as r, E as i, O as a, S as o, T as s, _ as c, a as l, b as u, c as d, d as f, f as p, g as m, h, i as g, k as _, l as v, m as y, n as ee, o as te, p as ne, r as re, s as b, u as ie, v as ae, w as x, x as oe, y as S } from "./asset-C2RfgpL0.js";
import { Button as C } from "./components/ui/button.js";
import { Badge as se } from "./components/ui/badge.js";
import { Separator as ce } from "./components/ui/separator.js";
import { Input as le } from "./components/ui/input.js";
import { Textarea as ue } from "./components/ui/textarea.js";
import { Dialog as de, DialogContent as fe, DialogFooter as pe, DialogHeader as me, DialogTitle as he } from "./components/ui/dialog.js";
import { Sheet as ge, SheetContent as _e, SheetFooter as ve, SheetHeader as ye, SheetTitle as be } from "./components/ui/sheet.js";
import { Skeleton as xe } from "./components/ui/skeleton.js";
import { Tabs as Se, TabsContent as Ce, TabsList as we, TabsTrigger as Te } from "./components/ui/tabs.js";
import { NativeSelect as Ee, NativeSelectOption as De } from "./components/ui/native-select.js";
import { t as Oe } from "./components/ui/index.js";
import { SearchInput as ke } from "./components/molecules/search-input.js";
import { DataTable as Ae } from "./components/organisms/data-table.js";
import { FilterBar as je } from "./components/organisms/filter-bar.js";
import { DetailPanel as Me } from "./components/organisms/detail-panel.js";
import { ContentState as Ne, EmptyState as Pe, ErrorState as Fe, LoadingState as Ie } from "./components/organisms/content-states.js";
import { Timeline as Le } from "./components/organisms/timeline.js";
import { AttachmentList as Re } from "./components/organisms/attachment-list.js";
import { FormSection as ze } from "./components/organisms/form-section.js";
import { FormFooter as Be } from "./components/organisms/form-footer.js";
import { SimplePagination as Ve } from "./components/molecules/pagination.js";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
import { createContext as He, useContext as Ue, useEffect as D, useId as O, useMemo as We, useRef as Ge, useState as k } from "react";
import { cva as Ke } from "class-variance-authority";
//#region src/tokens.ts
var qe = {
	color: {
		brand: {
			crimson: "var(--mw-brand-crimson)",
			crimsonDark: "var(--mw-brand-crimson-dark)",
			crimsonSoft: "var(--mw-brand-crimson-soft)"
		},
		status: {
			supported: "var(--mw-status-supported)",
			verified: "var(--mw-status-verified)",
			contested: "var(--mw-status-contested)",
			partial: "var(--mw-status-partial)",
			unresolved: "var(--mw-status-unresolved)",
			restricted: "var(--mw-status-restricted)",
			prohibited: "var(--mw-status-prohibited)",
			info: "var(--mw-status-info)",
			foreground: {
				supported: "var(--mw-status-supported-fg)",
				verified: "var(--mw-status-verified-fg)",
				contested: "var(--mw-status-contested-fg)",
				partial: "var(--mw-status-partial-fg)",
				unresolved: "var(--mw-status-unresolved-fg)",
				restricted: "var(--mw-status-restricted-fg)",
				prohibited: "var(--mw-status-prohibited-fg)",
				info: "var(--mw-status-info-fg)"
			}
		},
		rgbl: {
			red: "var(--mw-rgbl-red)",
			green: "var(--mw-rgbl-green)",
			blue: "var(--mw-rgbl-blue)",
			light: "var(--mw-rgbl-light)",
			foreground: {
				red: "var(--mw-rgbl-red-fg)",
				green: "var(--mw-rgbl-green-fg)",
				blue: "var(--mw-rgbl-blue-fg)",
				light: "var(--mw-rgbl-light-fg)"
			}
		}
	},
	breakpoint: {
		mobile: 390,
		tablet: 768,
		desktop: 1024,
		wide: 1440
	},
	size: {
		touchMin: 44,
		sidebar: 272,
		reading: 720,
		wide: 1200
	},
	motion: {
		fast: 120,
		base: 220,
		slow: 420,
		cinematic: 900
	}
}, Je = {
	mark: "brand/logo-mark.svg",
	horizontal: "brand/logo-horizontal.svg",
	stacked: "brand/logo-stacked.svg",
	wordmark: "brand/wordmark.svg",
	monochrome: "brand/logo-monochrome.svg",
	ecosystemLockup: "brand/rocksoul-lockup.svg",
	favicon: "brand/favicon.svg",
	appleTouch: "brand/apple-touch-icon.svg",
	maskable: "brand/app-icon-maskable.svg",
	appIcon: "brand/app-icon.svg",
	socialAvatar: "brand/social-avatar.svg",
	ogCard: "brand/og-card.svg",
	safariPinned: "brand/safari-pinned-tab.svg",
	webmanifest: "brand/site.webmanifest",
	deliveryManifest: "brand/generated/manifest.json",
	favicon16: "brand/generated/favicon-16.png",
	favicon32: "brand/generated/favicon-32.png",
	favicon48: "brand/generated/favicon-48.png",
	faviconIco: "brand/generated/favicon.ico",
	appleTouch180: "brand/generated/apple-touch-icon-180.png",
	appIcon192: "brand/generated/app-icon-192.png",
	appIcon512: "brand/generated/app-icon-512.png",
	appIconMaskable192: "brand/generated/app-icon-maskable-192.png",
	appIconMaskable512: "brand/generated/app-icon-maskable-512.png",
	socialAvatar512: "brand/generated/social-avatar-512.png",
	ogCard1200x630: "brand/generated/og-card-1200x630.png"
};
function Ye({ className: t, title: n = "MoonWitness", ...r }) {
	return /* @__PURE__ */ T("svg", {
		viewBox: "0 0 128 128",
		role: "img",
		"aria-label": n,
		className: e("shrink-0", t),
		...r,
		children: /* @__PURE__ */ E("g", {
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ T("circle", {
					cx: "64",
					cy: "64",
					r: "51",
					stroke: "var(--mw-text-primary)",
					strokeWidth: "3",
					opacity: ".92"
				}),
				/* @__PURE__ */ T("path", {
					d: "M62 14A50 50 0 1 0 62 114C42 103 30 85 30 64S42 25 62 14Z",
					fill: "var(--mw-text-primary)"
				}),
				/* @__PURE__ */ T("path", {
					d: "M25 64C38 46 52 38 64 38s26 8 39 26C90 82 76 90 64 90S38 82 25 64Z",
					stroke: "var(--mw-surface-page)",
					strokeWidth: "5"
				}),
				/* @__PURE__ */ T("circle", {
					cx: "64",
					cy: "64",
					r: "12",
					fill: "var(--mw-surface-page)"
				}),
				/* @__PURE__ */ T("path", {
					d: "M64 34l7 23 23 7-23 7-7 23-7-23-23-7 23-7Z",
					fill: "var(--mw-brand-crimson)"
				}),
				/* @__PURE__ */ T("path", {
					d: "M64 8v21M64 99v21M8 64h17M103 64h17",
					stroke: "var(--mw-text-primary)",
					strokeWidth: "2"
				})
			]
		})
	});
}
function A({ compact: t = !1, ecosystem: n = !1, subtitle: r = s.tagline, className: i }) {
	return /* @__PURE__ */ E("span", {
		className: e("inline-flex items-center gap-3", i),
		children: [/* @__PURE__ */ T(Ye, { className: t ? "size-8" : "size-10" }), t ? null : /* @__PURE__ */ E("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ E("span", {
				className: "mw-display block text-base font-black tracking-tight",
				children: [
					"MOON",
					/* @__PURE__ */ T("span", {
						className: "text-primary",
						children: "WITNESS"
					}),
					n ? /* @__PURE__ */ T("span", {
						className: "ml-2 text-muted-foreground",
						children: "× ROCKSOUL"
					}) : null
				]
			}), /* @__PURE__ */ T("span", {
				className: "mw-meta block truncate text-muted-foreground",
				children: r
			})]
		})]
	});
}
//#endregion
//#region src/foundation/brand.tsx
function Xe({ className: t, title: n = "RockSoul", ...r }) {
	return /* @__PURE__ */ T(Ye, {
		className: e(t),
		title: n,
		...r
	});
}
function Ze({ compact: e = !1, subtitle: t, className: n }) {
	return /* @__PURE__ */ T(A, {
		compact: e,
		ecosystem: !0,
		subtitle: t,
		className: n
	});
}
var Qe = {
	schemaVersion: 2,
	rule: "Semantic domains are not repository identities. Visual consumers resolve qualified references through this canonical owner contract; identifier-kind rules provide graph semantics without consumer-side prefix hardcoding.",
	domains: [
		{
			domain: "STORY",
			label: "Story",
			repository: "rocksoul-mftl",
			prefix: "mftl:",
			resource: "case",
			nodeKind: "story",
			iconAssetId: "case",
			idKinds: {
				SOURCE: "source",
				CLAIM: "claim",
				EVIDENCE: "evidence",
				CAND: "story",
				MYTH: "story",
				ENTITY: "story"
			},
			defaultKind: "story"
		},
		{
			domain: "EVENT",
			label: "Event",
			repository: "rocksoul-legend",
			prefix: "legend:",
			resource: "event",
			nodeKind: "event",
			iconAssetId: "event",
			idKinds: {
				EVT: "event",
				PLC: "location",
				SRC: "source",
				CLM: "claim",
				EVD: "evidence",
				REL: "event",
				ART: "event"
			},
			defaultKind: "event"
		},
		{
			domain: "PERSON",
			label: "Person",
			repository: "rocksoul-superhero",
			prefix: "superhero:",
			resource: "person",
			nodeKind: "person",
			iconAssetId: "person",
			idKinds: {
				PER: "person",
				SRC: "source",
				CLM: "claim",
				EVD: "evidence",
				REL: "person"
			},
			defaultKind: "person"
		},
		{
			domain: "TEXT",
			label: "Text",
			repository: "rocksoul-rgbl",
			prefix: "rgbl:",
			resource: "rgbl",
			nodeKind: "text",
			iconAssetId: "rgbl",
			idKinds: {},
			defaultKind: "text"
		},
		{
			domain: "LAW",
			label: "Law",
			repository: "rocksoul-aws",
			prefix: "aws:",
			resource: "aws",
			nodeKind: "law",
			iconAssetId: "aws",
			idKinds: {},
			defaultKind: "law"
		},
		{
			domain: "PERSPECTIVE",
			label: "Perspective",
			repository: "rocksoul-jizz",
			prefix: "jizz:",
			resource: "perspective",
			nodeKind: "case",
			iconAssetId: "perspective",
			idKinds: {},
			defaultKind: "case"
		}
	],
	relationshipLayer: {
		domain: "RELATIONSHIP",
		label: "Relationship",
		repository: "rocksoul-correlation",
		prefix: "correlation:",
		resource: "correlation",
		nodeKind: "case",
		iconAssetId: "correlation",
		idKinds: {},
		defaultKind: "case"
	}
}, $e = [...Qe.domains, Qe.relationshipLayer], j = Object.fromEntries($e.map((e) => [e.domain, {
	label: e.label,
	repository: e.repository,
	prefix: e.prefix,
	resource: e.resource,
	nodeKind: e.nodeKind,
	iconAssetId: e.iconAssetId,
	idKinds: e.idKinds,
	defaultKind: e.defaultKind
}])), et = Qe;
function tt(e) {
	return j[e];
}
function nt(e) {
	return Object.prototype.hasOwnProperty.call(j, e) && e !== "RELATIONSHIP";
}
function rt(e) {
	let t = Object.entries(j).find(([, t]) => e.startsWith(t.prefix));
	if (!t) return null;
	let [n, r] = t, i = e.slice(r.prefix.length);
	if (!i) return null;
	let a = i.split("-")[0]?.toUpperCase() ?? "";
	return {
		ref: e,
		domain: n,
		repository: r.repository,
		prefix: r.prefix,
		id: i,
		idPrefix: a,
		kind: r.idKinds[a] ?? r.defaultKind
	};
}
//#endregion
//#region src/contracts/ecosystem-links.ts
var it = "https://github.com", at = "https://raw.githubusercontent.com", ot = {
	assets: "rocksoul-assets",
	ui: "rocksoul-ui",
	web: "rocksoul-web",
	community: "rocksoul-community",
	platform: "rocksoul-platform",
	story: "rocksoul-mftl",
	event: "rocksoul-legend",
	person: "rocksoul-superhero",
	text: "rocksoul-rgbl",
	law: "rocksoul-aws",
	perspective: "rocksoul-jizz",
	relationship: "rocksoul-correlation"
}, st = x.repository.split("/")[0];
function ct(e) {
	return e.replace(/^\/+/, "");
}
function lt(e, t = {}) {
	let n = t.ref ?? "main", r = t.path ? ct(t.path) : void 0;
	if (t.raw) return r ? `${at}/${st}/${e}/${n}/${r}` : `${at}/${st}/${e}/${n}`;
	let i = `${it}/${st}/${e}`;
	return r ? `${i}/blob/${n}/${r}` : i;
}
function ut(e) {
	return lt(ot.assets, {
		ref: x.commit,
		path: e
	});
}
function dt(e) {
	let t = e?.trim();
	if (!t) return null;
	try {
		let e = new URL(t);
		if (e.protocol === "http:" || e.protocol === "https:") return {
			source: t,
			kind: "external",
			href: e.toString()
		};
	} catch {}
	let n = t.match(/^(?:CASE|REVIEW)\/(MW-\d+)$/i);
	return n ? {
		source: t,
		kind: "case",
		href: ut(`penpot/golden-cases/${n[1].toLowerCase()}/SCREEN-CONTRACT.md`)
	} : t.startsWith("COMMUNITY-") ? {
		source: t,
		kind: "community",
		href: lt(ot.community, { path: "README.md" })
	} : {
		source: t,
		kind: "opaque"
	};
}
//#endregion
//#region src/contracts/interactions.tsx
var ft = He({});
function pt({ actions: e, children: t }) {
	return /* @__PURE__ */ T(ft.Provider, {
		value: e ?? {},
		children: t
	});
}
function M() {
	return Ue(ft);
}
//#endregion
//#region src/contracts/platform-admin.ts
var N = {
	schemaVersion: 1,
	surface: "platform",
	owner: "rocksoul-platform",
	visualSource: "rocksoul-assets",
	rule: "Platform owns product administration and IAM. Research workspace actions remain outside this surface.",
	navigation: [
		{
			id: "dashboard",
			label: "Dashboard",
			path: "/",
			group: "System",
			permission: "authenticated",
			screen: "28"
		},
		{
			id: "users",
			label: "Users & Roles",
			path: "/users",
			group: "Resource",
			permission: "iam:read",
			screen: "29"
		},
		{
			id: "authorization",
			label: "Authorization",
			path: "/authorization",
			group: "Resource",
			permission: "authorization:read",
			screen: "30"
		},
		{
			id: "moderation",
			label: "Moderation",
			path: "/moderation",
			group: "Resource",
			permission: "moderation:read",
			screen: "31"
		},
		{
			id: "service-status",
			label: "Service Status",
			path: "/service-status",
			group: "System",
			permission: "service:read",
			screen: "32"
		},
		{
			id: "audit",
			label: "Audit Log",
			path: "/audit",
			group: "System",
			permission: "audit:read",
			screen: "33"
		},
		{
			id: "settings",
			label: "Settings",
			path: "/settings",
			group: "Account",
			permission: "settings:read",
			screen: "34"
		},
		{
			id: "system-states",
			label: "System States",
			path: "/system-states",
			group: "System",
			permission: "service:read",
			screen: "35"
		}
	],
	commands: [
		{
			id: "invite-user",
			label: "Invite a platform user",
			path: "/users",
			shortcut: "U",
			permission: "iam:write"
		},
		{
			id: "review-moderation",
			label: "Review moderation queue",
			path: "/moderation",
			shortcut: "M",
			permission: "moderation:read"
		},
		{
			id: "inspect-service",
			label: "Inspect service status",
			path: "/service-status",
			shortcut: "H",
			permission: "service:read"
		}
	],
	roles: [
		{
			id: "admin",
			label: "Admin",
			description: "Platform-wide administration and configuration."
		},
		{
			id: "moderator",
			label: "Moderator",
			description: "Moderation authority without system configuration."
		},
		{
			id: "researcher",
			label: "Researcher",
			description: "Authenticated consumer of Platform-owned authorization context."
		}
	],
	capabilities: [
		{
			id: "iam.users.read",
			label: "Inspect platform users",
			admin: "allow",
			moderator: "allow",
			researcher: "read"
		},
		{
			id: "iam.users.write",
			label: "Manage user state",
			admin: "allow",
			moderator: "limited",
			researcher: "deny"
		},
		{
			id: "moderation.write",
			label: "Moderate submissions",
			admin: "allow",
			moderator: "allow",
			researcher: "deny"
		},
		{
			id: "settings.write",
			label: "Change system configuration",
			admin: "allow",
			moderator: "deny",
			researcher: "deny"
		},
		{
			id: "research.publish",
			label: "Publish research conclusion",
			admin: "deny",
			moderator: "deny",
			researcher: "deny"
		}
	],
	runtime: {
		source: "/api/platform/bootstrap",
		mutationMode: "server-authoritative",
		failClosed: !0,
		requiredResources: [
			"organization",
			"users",
			"roles",
			"moderation",
			"settings",
			"audit",
			"services"
		],
		unconfiguredState: "read-only"
	},
	serviceRegistry: [
		{
			id: "assets",
			label: "Visual source",
			repository: "rocksoul-assets",
			kind: "design"
		},
		{
			id: "ui",
			label: "UI implementation",
			repository: "rocksoul-ui",
			kind: "ui"
		},
		{
			id: "platform",
			label: "Admin application",
			repository: "rocksoul-platform",
			kind: "application"
		},
		{
			id: "iam-api",
			label: "IAM data plane",
			repository: null,
			kind: "backend"
		}
	],
	systemStates: [
		"loading",
		"empty",
		"error",
		"offline",
		"forbidden",
		"unconfigured"
	]
}, mt = {
	dashboard: "28-platform-dashboard.svg",
	users: "29-platform-users.svg",
	authorization: "30-platform-authorization.svg",
	moderation: "31-platform-moderation.svg",
	"service-status": "32-platform-service-status.svg",
	audit: "33-platform-audit.svg",
	settings: "34-platform-settings.svg",
	"system-states": "35-platform-system-states.svg"
}, ht = {
	repository: "bjo163/rocksoul-assets",
	ref: "main",
	commit: "e978695a3dd92d952faaa0ff356980e9ad6438a2",
	manifest: "moonwitness/cinematic-web-hero/manifest.json",
	profileVersion: "1.0.0",
	sourceRelease: "1.3.1"
}, gt = `https://raw.githubusercontent.com/${ht.repository}/${ht.commit}`;
function P(e) {
	return `${gt}/${e.replace(/^\/+/, "")}`;
}
var _t = {
	desktop: P("moonwitness/cinematic-hero-pack/webp/hero-master-desktop.webp"),
	mobile: P("moonwitness/cinematic-hero-pack/webp/hero-master-mobile.webp"),
	moon: P("moonwitness/cinematic-hero-pack/webp/moon-photographic.webp"),
	grid: P("moonwitness/hero-backgrounds/svg/observatory-grid.svg"),
	grain: P("moonwitness/texture-material-pack/svg/lunar-grain.svg"),
	scanlines: P("moonwitness/texture-material-pack/svg/scanner-lines.svg"),
	archive: [
		P("moonwitness/hero-backgrounds/png/lunar-trace.png"),
		P("moonwitness/hero-backgrounds/png/archive-texture.png"),
		P("moonwitness/hero-backgrounds/png/evidence-constellation.png"),
		P("moonwitness/hero-backgrounds/png/correlation-web.png")
	]
}, vt = {
	composition: "composite-photographic-master",
	desktopAspectRatio: "16:9",
	mobileAspectRatio: "3:4",
	headlineLines: ["WHERE MYTH", "FADES TO LEGEND"],
	semanticUi: "live-html-svg",
	reducedMotion: "static-by-default",
	evidenceGraphTextEquivalent: !0,
	correlationImpliesCausation: !1
}, yt = He({});
function bt({ adapter: e, children: t }) {
	return /* @__PURE__ */ T(yt.Provider, {
		value: e ?? {},
		children: t
	});
}
function xt(e, t, n) {
	return t.startsWith("/") && !t.startsWith("//") && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && (!n || n === "_self");
}
function F({ href: e, onClick: t, target: n, children: r, ...i }) {
	let a = Ue(yt);
	return a.renderLink ? /* @__PURE__ */ T(w, { children: a.renderLink({
		href: e,
		onClick: t,
		target: n,
		children: r,
		...i
	}) }) : /* @__PURE__ */ T("a", {
		href: e,
		target: n,
		...i,
		onClick: (r) => {
			t?.(r), a.navigate && xt(r, e, n) && (r.preventDefault(), a.navigate(e));
		},
		children: r
	});
}
//#endregion
//#region src/components/community-participation.tsx
var St = [
	"source-linked",
	"discussion-thread",
	"proposal-review",
	"identity-bridge",
	"saved-case",
	"notification",
	"moderation-history",
	"attributed-reply"
];
function Ct({ asset: e, alt: t, ...n }) {
	return /* @__PURE__ */ T(te, {
		pack: "community-participation",
		assetId: e,
		alt: t,
		...n
	});
}
function wt({ source: e, className: t }) {
	let n = dt(e);
	return n ? n.href ? /* @__PURE__ */ E("a", {
		className: t,
		href: n.href,
		target: "_blank",
		rel: "noreferrer",
		children: [
			n.source,
			" ",
			/* @__PURE__ */ T("span", {
				"aria-hidden": "true",
				children: "↗"
			})
		]
	}) : /* @__PURE__ */ T("code", {
		className: t,
		children: n.source
	}) : /* @__PURE__ */ T("span", {
		className: t,
		children: "No source attached"
	});
}
//#endregion
//#region src/components/runtime-motion.tsx
var Tt = [
	"pulse-alert",
	"evidence-linked",
	"case-resolved",
	"ai-orbit",
	"loading-trace",
	"notification-in",
	"drawer-open",
	"sync-spin",
	"focus-ring",
	"upload-rise",
	"graph-connect",
	"backend-reconnect"
], Et = "/assets/runtime-motion-pack";
function Dt(e, t, n = Et) {
	let r = n.replace(/\/+$/, "");
	return t === "apng" ? `${r}/png/${e}.png` : t === "lottie" ? `${r}/lottie/${e}.json` : `${r}/${t}/${e}.${t}`;
}
function Ot() {
	let [e, t] = k(!1);
	return D(() => {
		if (typeof window > "u" || !window.matchMedia) return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => t(e.matches);
		return n(), e.addEventListener?.("change", n), () => e.removeEventListener?.("change", n);
	}, []), e;
}
function kt({ id: e, format: t = "webm", alt: n, baseUrl: r = Et, className: i, reducedMotionFallback: a, ...o }) {
	let s = Ot(), [c, l] = k(!1);
	if (s) return /* @__PURE__ */ T("span", {
		className: i,
		role: "img",
		"aria-label": n,
		"data-reduced-motion": "true",
		...o,
		children: a ?? /* @__PURE__ */ T("span", {
			className: "mw-meta text-muted-foreground",
			children: n
		})
	});
	let u = Dt(e, t, r), d = Dt(e, "svg", Et);
	return t === "webm" ? c ? /* @__PURE__ */ T(b, {
		className: i,
		src: d,
		alt: n,
		...o
	}) : /* @__PURE__ */ T("video", {
		className: i,
		src: u,
		"aria-label": n,
		autoPlay: !0,
		loop: !0,
		muted: !0,
		playsInline: !0,
		onError: () => l(!0),
		...o
	}) : /* @__PURE__ */ T(b, {
		className: i,
		src: u,
		fallbackSrc: d,
		alt: n,
		...o
	});
}
//#endregion
//#region src/components/cinematic-web-hero.tsx
var At = [
	{
		id: "STORY",
		marker: "▤"
	},
	{
		id: "EVENT",
		marker: "✦"
	},
	{
		id: "PERSON",
		marker: "♙"
	},
	{
		id: "RGBL",
		marker: "↗"
	}
];
function jt(e) {
	let t = e.indexOf("/moonwitness/");
	return t >= 0 ? `/assets${e.slice(t)}` : void 0;
}
function Mt({ assets: e = _t, eyebrow: t = /* @__PURE__ */ E(w, { children: [
	"REAL STORIES.",
	/* @__PURE__ */ T("br", {}),
	"PERSISTENT TRACES.",
	/* @__PURE__ */ T("br", {}),
	"A WIDER TOMORROW."
] }), title: n = ["WHERE MYTH", "FADES TO LEGEND"], intro: r = /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ E("p", { children: [
	"Some stories sound impossible.",
	/* @__PURE__ */ T("br", {}),
	"Some sound way too familiar.",
	/* @__PURE__ */ T("br", {}),
	"The weird part? Sometimes the traces keep coming back."
] }), /* @__PURE__ */ E("p", { children: [
	"MoonWitness follows what remains.",
	/* @__PURE__ */ T("br", {}),
	"No hype. No forced conclusion.",
	/* @__PURE__ */ T("br", {}),
	"Just records, connections, and whatever survives the cross-check."
] })] }), action: i = /* @__PURE__ */ E("a", {
	className: "mw-cinematic-web-hero__cta",
	href: "#case",
	children: ["ENTER THE CASE ", /* @__PURE__ */ T("span", {
		"aria-hidden": "true",
		children: "→"
	})]
}), caseIndex: a = /* @__PURE__ */ T(w, { children: "MW / ARCHIVE / CASE 0001 — ∞" }), evidence: o = At, archive: s, coordinates: c = ["35.6762° N", "139.6503° E"], witnessCaption: l = /* @__PURE__ */ E(w, { children: [
	"ROCKSOUL —",
	/* @__PURE__ */ T("br", {}),
	"THE WITNESS IN MOTION"
] }), footerCenter: u = /* @__PURE__ */ T(w, { children: "CATALOGING THE UNEXPLAINED SINCE NOW" }), footerRight: d = /* @__PURE__ */ T(w, { children: "A MORE CURIOUS TOMORROW" }), footerMark: f = /* @__PURE__ */ T("b", {
	"aria-hidden": "true",
	children: "◕◕◯"
}), id: p, archiveId: m, className: h = "" }) {
	let g = `${O()}-cinematic-title`, _ = s ?? [
		{
			label: "TRACES DON'T LIE.",
			code: "KODAK 400TX",
			src: e.archive[0]
		},
		{
			label: "STILL HERE.",
			code: "36 / 36A",
			src: e.archive[1]
		},
		{
			label: "PEOPLE. PLACES. PATTERNS.",
			code: "SOURCE / 04",
			src: e.archive[2]
		},
		{
			label: "A CLEARER TOMORROW.",
			code: "CORR / 11",
			src: e.archive[3]
		}
	], v = {
		"--mw-hero-grid": `url("${e.grid}")`,
		"--mw-hero-grain": `url("${e.grain}")`,
		"--mw-hero-scanlines": `url("${e.scanlines}")`
	};
	return /* @__PURE__ */ E("section", {
		id: p,
		className: `mw-cinematic-web-hero ${h}`.trim(),
		style: v,
		"aria-labelledby": g,
		children: [
			/* @__PURE__ */ E("picture", {
				className: "mw-cinematic-web-hero__master",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ T("source", {
					media: "(max-width: 700px)",
					srcSet: e.mobile
				}), /* @__PURE__ */ T(b, {
					src: e.desktop,
					fallbackSrc: jt(e.desktop),
					alt: "",
					width: 2880,
					height: 1620,
					loading: "eager",
					decoding: "async",
					fetchPriority: "high"
				})]
			}),
			/* @__PURE__ */ T("div", {
				className: "mw-cinematic-web-hero__grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ T("div", {
				className: "mw-cinematic-web-hero__texture",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-cinematic-web-hero__content",
				children: [
					/* @__PURE__ */ E("div", {
						className: "mw-cinematic-web-hero__eyebrow",
						children: [/* @__PURE__ */ T("i", { "aria-hidden": "true" }), t]
					}),
					/* @__PURE__ */ E("h1", {
						id: g,
						children: [/* @__PURE__ */ T("span", { children: n[0] }), /* @__PURE__ */ T("span", { children: n[1] })]
					}),
					/* @__PURE__ */ T("div", {
						className: "mw-cinematic-web-hero__intro",
						children: r
					}),
					/* @__PURE__ */ E("div", {
						className: "mw-cinematic-web-hero__actions",
						children: [i, /* @__PURE__ */ T("span", {
							className: "mw-cinematic-web-hero__case-index",
							children: a
						})]
					})
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-cinematic-web-hero__evidence",
				role: "group",
				"aria-label": "Cross-domain evidence map",
				children: [
					/* @__PURE__ */ E("span", {
						className: "mw-cinematic-web-hero__note mw-cinematic-web-hero__note--sky",
						children: [
							"SAME SKY.",
							/* @__PURE__ */ T("br", {}),
							"DIFFERENT QUESTIONS."
						]
					}),
					/* @__PURE__ */ E("svg", {
						viewBox: "0 0 360 360",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ T("path", { d: "M180 44 315 180 180 316 44 180Z" }),
							/* @__PURE__ */ T("path", { d: "M180 44V316M44 180H315" }),
							/* @__PURE__ */ T("circle", {
								cx: "180",
								cy: "180",
								r: "3"
							})
						]
					}),
					o.map((e, t) => /* @__PURE__ */ E("span", {
						className: `mw-cinematic-web-hero__node mw-cinematic-web-hero__node--${t + 1}`,
						children: [/* @__PURE__ */ T("b", {
							"aria-hidden": "true",
							children: e.marker
						}), e.id]
					}, e.id)),
					/* @__PURE__ */ T("span", {
						className: "sr-only",
						children: "Evidence graph connects STORY, EVENT, PERSON, and RGBL for investigation. A visible connection is not a claim of causation."
					}),
					/* @__PURE__ */ E("span", {
						className: "mw-cinematic-web-hero__note mw-cinematic-web-hero__note--trace",
						children: [
							"TRACES CONNECT.",
							/* @__PURE__ */ T("br", {}),
							"PEOPLE. PLACES.",
							/* @__PURE__ */ T("br", {}),
							"PATTERNS REPEAT."
						]
					})
				]
			}),
			/* @__PURE__ */ E("aside", {
				className: "mw-cinematic-web-hero__witness",
				children: [
					/* @__PURE__ */ T("i", { "aria-hidden": "true" }),
					/* @__PURE__ */ T("strong", { children: l }),
					/* @__PURE__ */ T("hr", {}),
					"SOMEWHERE",
					/* @__PURE__ */ T("br", {}),
					"BETWEEN HERE",
					/* @__PURE__ */ T("br", {}),
					"AND ELSEWHERE."
				]
			}),
			/* @__PURE__ */ E("aside", {
				className: "mw-cinematic-web-hero__coordinates",
				children: [
					c[0],
					/* @__PURE__ */ T("br", {}),
					c[1],
					/* @__PURE__ */ T("hr", {}),
					"SAME PLANET.",
					/* @__PURE__ */ T("br", {}),
					"MORE TO SEE."
				]
			}),
			/* @__PURE__ */ T("div", {
				id: m,
				className: "mw-cinematic-web-hero__archive",
				"aria-label": "Archive contact sheet",
				tabIndex: 0,
				children: _.map((e) => /* @__PURE__ */ E("figure", { children: [
					/* @__PURE__ */ T(b, {
						src: e.src,
						fallbackSrc: jt(e.src),
						alt: "",
						"aria-hidden": "true",
						loading: "lazy"
					}),
					/* @__PURE__ */ T("figcaption", { children: e.label }),
					/* @__PURE__ */ T("small", { children: e.code })
				] }, e.code))
			}),
			/* @__PURE__ */ E("footer", {
				className: "mw-cinematic-web-hero__footer",
				children: [
					/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("i", { "aria-hidden": "true" }), "01 / INDEPENDENT OBSERVATORY"] }),
					/* @__PURE__ */ T("span", { children: u }),
					/* @__PURE__ */ E("span", { children: [
						d,
						" ",
						f
					] })
				]
			})
		]
	});
}
//#endregion
//#region src/components/compat/overlays.tsx
function Nt({ label: t, children: n, variant: r = "outline", size: i = "md", loading: a = !1, disabled: o, className: s, type: c = "button", ...l }) {
	return /* @__PURE__ */ E(C, {
		variant: "ghost",
		size: "icon",
		type: c,
		"aria-label": t,
		title: t,
		"aria-busy": a || void 0,
		disabled: o || a,
		className: e("relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border transition-colors disabled:pointer-events-none disabled:opacity-45", i === "lg" ? "p-3" : i === "sm" ? "p-2" : "p-2.5", r === "ghost" && "border-transparent bg-transparent hover:bg-panel", r === "outline" && "border-border bg-card hover:border-border-strong hover:bg-panel", r === "danger" && "border-primary bg-transparent text-primary hover:bg-primary/10", s),
		...l,
		children: [/* @__PURE__ */ T("span", {
			className: e(a && "invisible"),
			children: n
		}), a ? /* @__PURE__ */ T("span", {
			className: "absolute inset-0 flex items-center justify-center",
			"aria-hidden": "true",
			children: "···"
		}) : null]
	});
}
function Pt({ open: t, title: n, children: r, onClose: i, size: a = "md", actions: o }) {
	let s = Ge(null);
	return /* @__PURE__ */ T(de, {
		open: t,
		onOpenChange: (e) => {
			e || i();
		},
		children: /* @__PURE__ */ E(fe, {
			"aria-describedby": void 0,
			onOpenAutoFocus: () => {
				s.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault(), s.current?.focus();
			},
			className: e("bg-card p-0 text-foreground", a === "sm" ? "sm:max-w-[420px]" : a === "lg" ? "sm:max-w-[960px]" : "sm:max-w-[640px]"),
			children: [
				/* @__PURE__ */ T(me, {
					className: "border-b border-border p-4",
					children: /* @__PURE__ */ T(he, { children: n })
				}),
				/* @__PURE__ */ T("div", {
					className: "p-5",
					children: r
				}),
				o && /* @__PURE__ */ T(pe, {
					className: "border-t border-border p-4",
					children: o
				})
			]
		})
	});
}
function Ft({ open: t, title: n, children: r, onClose: i, position: a = "right", footer: o }) {
	let s = Ge(null);
	return /* @__PURE__ */ T(ge, {
		open: t,
		onOpenChange: (e) => {
			e || i();
		},
		children: /* @__PURE__ */ E(_e, {
			side: a === "left" ? "left" : "right",
			"aria-describedby": void 0,
			onOpenAutoFocus: () => {
				s.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault(), s.current?.focus();
			},
			className: e("bg-card text-foreground", a === "bottom-mobile" && "max-sm:inset-x-0 max-sm:top-auto max-sm:bottom-0 max-sm:h-auto max-sm:max-h-[80dvh] max-sm:w-full max-sm:border-t"),
			children: [
				/* @__PURE__ */ T(ye, {
					className: "border-b border-border",
					children: /* @__PURE__ */ T(be, { children: n })
				}),
				/* @__PURE__ */ T("div", {
					className: "overflow-auto p-4",
					children: r
				}),
				o && /* @__PURE__ */ T(ve, {
					className: "border-t border-border",
					children: o
				})
			]
		})
	});
}
function I({ label: t, size: n = "md", src: r, status: i }) {
	let a = {
		xs: "size-6 text-[9px]",
		sm: "size-8 text-[10px]",
		md: "size-10 text-xs",
		lg: "size-12 text-sm"
	}, o = t ? t.split(/\s+/).map((e) => e[0]).join("").slice(0, 2).toUpperCase() : "?";
	return /* @__PURE__ */ E("span", {
		className: "relative inline-flex shrink-0",
		"aria-label": t ?? "Anonymous",
		children: [/* @__PURE__ */ T("span", {
			className: e("inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-panel font-mono font-bold uppercase", a[n]),
			children: r ? /* @__PURE__ */ T("img", {
				src: r,
				alt: "",
				className: "size-full object-cover"
			}) : o
		}), i ? /* @__PURE__ */ T("span", {
			className: e("absolute bottom-0 right-0 size-2.5 rounded-full border border-background", i === "online" ? "bg-success" : i === "away" ? "bg-warning" : "bg-unresolved"),
			"aria-label": i
		}) : null]
	});
}
function It({ variant: t = "default" }) {
	return /* @__PURE__ */ T(ce, {
		decorative: !1,
		className: e("w-full", t === "default" && "h-px bg-border", t === "soft" && "h-px bg-border opacity-50", t === "legal-boundary" && "h-0.5 bg-primary"),
		"aria-label": t === "legal-boundary" ? "AWS legal boundary" : void 0
	});
}
function Lt({ variant: t = "text" }) {
	return /* @__PURE__ */ T(xe, {
		className: e("block bg-panel motion-reduce:animate-none", {
			text: "h-4 w-full",
			card: "h-40 w-full",
			"table-row": "h-10 w-full",
			"graph-node": "size-20 rounded-full"
		}[t]),
		"aria-hidden": "true"
	});
}
//#endregion
//#region src/components/asset-explorer.tsx
var Rt = {
	Core: [
		"product-icons",
		"dashboard",
		"data-viz",
		"hero-backgrounds",
		"state-illustrations",
		"motion",
		"sfx",
		"graph-vector",
		"badge-status",
		"source-file"
	],
	Investigation: [
		"geospatial",
		"evidence-media",
		"correlation-semantics",
		"privacy-redaction",
		"evidence-integrity",
		"export-seal",
		"jurisdiction-locale"
	],
	Workflow: [
		"kanban-workflow",
		"calendar-temporal",
		"chat-collaboration",
		"ai-workspace",
		"authorization-security",
		"data-grid",
		"form-controls",
		"command-keyboard",
		"community-participation"
	],
	Identity: [
		"persona-avatar",
		"rocksoul-character",
		"theme-accessibility",
		"cursor-interaction"
	],
	Media: [
		"social-campaign",
		"platform-delivery",
		"onboarding",
		"document-report",
		"notification",
		"editorial",
		"cinematic-hero",
		"texture-material",
		"device-mockup"
	],
	System: [
		"architecture-diagram",
		"runtime-motion",
		"developer-distribution"
	]
};
function zt(e) {
	return Object.entries(Rt).find(([, t]) => t.includes(e))?.[0] ?? "System";
}
function Bt(e) {
	return e.replaceAll("-", " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function Vt({ baseUrl: e = y, initialCategory: t = "All", limit: n, compact: r = !1 }) {
	let [i, a] = k(t), [o, s] = k(""), [l, u] = k(null), [d, f] = k(""), [p, m] = k(r ? "compact" : "grid"), g = We(() => {
		let e = o.trim().toLowerCase(), t = Object.entries(c.packs).filter(([t, n]) => i !== "All" && zt(t) !== i ? !1 : !e || [
			t,
			zt(t),
			...Object.keys(n.svg ?? {}),
			...Object.keys(n.png ?? {})
		].join(" ").toLowerCase().includes(e));
		return typeof n == "number" ? t.slice(0, n) : t;
	}, [
		i,
		n,
		o
	]), _ = l ? c.packs[l] : null, v = _ ? Object.entries(_.svg ?? {}).filter(([e]) => e.toLowerCase().includes(d.trim().toLowerCase())) : [];
	return /* @__PURE__ */ E("section", {
		"aria-label": "MoonWitness asset explorer",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ E("p", {
					className: "mw-eyebrow text-primary",
					children: ["Asset explorer / v", c.version]
				}), /* @__PURE__ */ E("h2", {
					className: "mt-2 text-2xl font-bold",
					children: [
						h.packCount,
						" packs / ",
						h.canonicalAssetCount,
						" canonical assets"
					]
				})] }), /* @__PURE__ */ E("div", {
					className: "flex gap-2",
					"aria-label": "Asset explorer view",
					children: [/* @__PURE__ */ T(C, {
						variant: p === "grid" ? "default" : "secondary",
						onClick: () => m("grid"),
						children: "Grid"
					}), /* @__PURE__ */ T(C, {
						variant: p === "compact" ? "default" : "secondary",
						onClick: () => m("compact"),
						children: "Compact"
					})]
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto]",
				children: [/* @__PURE__ */ E("label", {
					className: "grid gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ T("span", {
						className: "sr-only",
						children: "Search asset packs"
					}), /* @__PURE__ */ T("input", {
						value: o,
						onChange: (e) => s(e.target.value),
						placeholder: "Search packs or asset names…",
						className: "min-h-11 border border-border bg-card px-3 text-foreground outline-none focus:border-primary"
					})]
				}), /* @__PURE__ */ T("div", {
					className: "flex flex-wrap gap-2",
					"aria-label": "Asset categories",
					children: ["All", ...Object.keys(Rt)].map((e) => /* @__PURE__ */ T("button", {
						type: "button",
						onClick: () => a(e),
						"aria-pressed": i === e,
						className: `min-h-11 border px-3 text-xs font-bold uppercase tracking-wide ${i === e ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
						children: e
					}, e))
				})]
			}),
			/* @__PURE__ */ E("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: [g.length, " pack families shown"]
			}),
			/* @__PURE__ */ T("div", {
				className: `mt-4 grid gap-3 ${p === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`,
				children: g.map(([t, n]) => {
					let r = Object.entries(n.svg ?? {}).slice(0, p === "grid" ? 3 : 1);
					return /* @__PURE__ */ E("button", {
						type: "button",
						onClick: () => {
							u(t), f("");
						},
						className: `border border-border bg-card text-left transition hover:border-border-strong focus-visible:outline-2 focus-visible:outline-primary ${p === "grid" ? "p-4" : "grid min-h-20 grid-cols-[88px_1fr_auto] items-center gap-4 p-3"}`,
						children: [
							/* @__PURE__ */ T("span", {
								className: `flex items-center justify-center overflow-hidden bg-panel ${p === "grid" ? "min-h-36" : "h-14"}`,
								children: r.length ? r.map(([n]) => {
									let r = S(t, n, { baseUrl: e }), i = S(t, n, { baseUrl: "/assets" });
									return r ? /* @__PURE__ */ T(b, {
										src: r,
										fallbackSrc: i,
										alt: "",
										loading: "lazy",
										className: "max-h-24 max-w-[30%] object-contain"
									}, n) : null;
								}) : /* @__PURE__ */ T("span", {
									className: "mw-meta text-muted-foreground",
									children: t === "sfx" ? "∿" : "{ }"
								})
							}),
							/* @__PURE__ */ E("span", {
								className: p === "grid" ? "mt-4 block" : "",
								children: [/* @__PURE__ */ T("span", {
									className: "mw-meta text-primary",
									children: zt(t)
								}), /* @__PURE__ */ T("strong", {
									className: "mt-1 block text-base",
									children: Bt(t)
								})]
							}),
							/* @__PURE__ */ T("span", {
								className: "mw-meta text-muted-foreground",
								children: n.count
							})
						]
					}, t);
				})
			}),
			g.length === 0 ? /* @__PURE__ */ E("div", {
				className: "mt-5 border border-dashed border-border p-8 text-center",
				children: [/* @__PURE__ */ T("strong", { children: "No asset packs found." }), /* @__PURE__ */ T("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Clear the search or choose another category."
				})]
			}) : null,
			/* @__PURE__ */ T(Pt, {
				open: !!l,
				title: l ? Bt(l) : "Asset pack",
				size: "lg",
				onClose: () => u(null),
				children: l && _ ? /* @__PURE__ */ E("div", { children: [
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4",
						children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ E("p", {
							className: "mw-meta text-primary",
							children: [
								zt(l),
								" / ",
								_.count,
								" canonical assets"
							]
						}), /* @__PURE__ */ T("p", {
							className: "mt-1 font-mono text-xs text-muted-foreground",
							children: _.manifest
						})] }), /* @__PURE__ */ T("a", {
							href: `${e.replace(/\/+$/, "")}/${_.manifest}`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center border border-border px-3 text-xs font-bold uppercase hover:border-primary",
							children: "Open manifest ↗"
						})]
					}),
					/* @__PURE__ */ E("label", {
						className: "mt-4 grid gap-2",
						children: [/* @__PURE__ */ T("span", {
							className: "mw-meta text-muted-foreground",
							children: "Filter assets"
						}), /* @__PURE__ */ T("input", {
							value: d,
							onChange: (e) => f(e.target.value),
							placeholder: "Search inside this pack…",
							className: "min-h-11 border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-4 max-h-[55vh] overflow-auto border border-border",
						children: [v.map(([t, n]) => {
							let r = S(l, t, { baseUrl: e }), i = S(l, t, { baseUrl: "/assets" });
							return /* @__PURE__ */ E("div", {
								className: "grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3 last:border-b-0",
								children: [
									/* @__PURE__ */ T("span", {
										className: "flex h-12 items-center justify-center bg-panel",
										children: r ? /* @__PURE__ */ T(b, {
											src: r,
											fallbackSrc: i,
											alt: "",
											loading: "lazy",
											className: "max-h-10 max-w-10"
										}) : null
									}),
									/* @__PURE__ */ E("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ T("strong", {
											className: "block text-sm",
											children: Bt(t)
										}), /* @__PURE__ */ T("span", {
											className: "block truncate font-mono text-[10px] text-muted-foreground",
											children: n
										})]
									}),
									/* @__PURE__ */ E("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ T("button", {
											type: "button",
											className: "min-h-11 border border-border px-3 text-xs font-bold",
											onClick: () => void navigator.clipboard?.writeText(n),
											children: "Copy"
										}), r ? /* @__PURE__ */ T("a", {
											className: "grid min-h-11 place-items-center border border-border px-3 text-xs font-bold",
											href: r,
											target: "_blank",
											rel: "noreferrer",
											children: "Open ↗"
										}) : null]
									})
								]
							}, t);
						}), v.length === 0 ? /* @__PURE__ */ T("p", {
							className: "p-5 text-sm text-muted-foreground",
							children: "No SVG assets match this filter."
						}) : null]
					})
				] }) : null
			})
		]
	});
}
//#endregion
//#region src/components/candidate-asset-provider.tsx
var Ht = y, Ut = S;
function Wt(e) {
	return /* @__PURE__ */ T(te, { ...e });
}
var Gt = {
	channel: "deprecated-stable-alias",
	registryVersion: h.version,
	packCount: h.packCount,
	canonicalAssetCount: h.canonicalAssetCount,
	defaultBaseUrl: y,
	stableByDefault: !0
}, Kt = Ke("inline-flex items-center rounded-full border font-mono font-semibold uppercase tracking-[0.08em]", {
	variants: {
		variant: {
			neutral: "border-border-strong bg-panel text-muted-foreground",
			supported: "border-success bg-panel text-success",
			verified: "border-verified bg-panel text-verified",
			contested: "border-primary bg-panel text-primary",
			partial: "border-warning bg-panel text-warning",
			unresolved: "border-unresolved bg-panel text-unresolved",
			restricted: "border-restricted bg-panel text-restricted",
			prohibited: "border-prohibited bg-panel text-prohibited",
			disputed: "border-primary bg-panel text-primary",
			info: "border-info bg-panel text-info"
		},
		size: {
			sm: "min-h-6 px-2.5 py-1 text-[10px]",
			md: "min-h-7 px-3 py-1 text-[11px]"
		}
	},
	defaultVariants: {
		variant: "neutral",
		size: "sm"
	}
});
function qt({ className: t, variant: n, size: r, ...i }) {
	return /* @__PURE__ */ T(se, {
		variant: "outline",
		className: e(Kt({
			variant: n,
			size: r
		}), t),
		...i
	});
}
var L = qt, Jt = Ke("relative inline-flex min-h-11 items-center justify-center gap-2 rounded-none border font-mono text-[10px] font-bold uppercase tracking-[0.1em] transition-[background-color,border-color,color,opacity,transform] duration-[var(--mw-motion-fast)] ease-[var(--mw-ease-standard)] active:translate-y-px disabled:pointer-events-none disabled:opacity-45", {
	variants: {
		variant: {
			primary: "border-primary bg-primary text-primary-foreground hover:bg-[var(--mw-brand-crimson-dark)]",
			secondary: "border-border bg-card text-foreground hover:border-border-strong hover:bg-panel",
			ghost: "border-transparent bg-transparent text-foreground hover:bg-panel",
			danger: "border-primary bg-transparent text-primary hover:bg-primary/10"
		},
		size: {
			sm: "px-3",
			md: "px-4",
			lg: "min-h-12 px-5"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function R({ className: t, variant: n, size: r, loading: i = !1, disabled: a, leading: o, trailing: s, children: c, type: l = "button", ...u }) {
	return /* @__PURE__ */ E(C, {
		type: l,
		className: e(Jt({
			variant: n,
			size: r
		}), t),
		disabled: a || i,
		"aria-busy": i || void 0,
		...u,
		children: [
			o ? /* @__PURE__ */ T("span", {
				"aria-hidden": "true",
				children: o
			}) : null,
			/* @__PURE__ */ T("span", {
				className: e(i && "invisible"),
				children: c
			}),
			s ? /* @__PURE__ */ T("span", {
				"aria-hidden": "true",
				children: s
			}) : null,
			i ? /* @__PURE__ */ T("span", {
				className: "absolute inset-0 flex items-center justify-center",
				"aria-hidden": "true",
				children: "···"
			}) : null
		]
	});
}
//#endregion
//#region src/components/compat/form-controls.tsx
function Yt({ id: t, label: n, helper: r, error: i, children: a }) {
	let o = i ?? r, s = o ? `${t}-message` : void 0;
	return /* @__PURE__ */ E("div", {
		className: "grid gap-2 text-sm",
		children: [
			/* @__PURE__ */ T("label", {
				htmlFor: t,
				className: "mw-meta text-muted-foreground",
				children: n
			}),
			a,
			o ? /* @__PURE__ */ T("span", {
				id: s,
				className: e("text-xs leading-5", i ? "text-primary" : "text-muted-foreground"),
				children: o
			}) : null
		]
	});
}
function z({ label: t, helper: n, error: r, variant: i = "default", size: a = "md", id: o, className: s, ...c }) {
	let l = O(), u = o ?? l;
	return /* @__PURE__ */ T(Yt, {
		id: u,
		label: t,
		helper: n,
		error: r,
		children: /* @__PURE__ */ E("div", {
			className: "relative",
			children: [i === "search" ? /* @__PURE__ */ T("span", {
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground",
				"aria-hidden": "true",
				children: "/"
			}) : null, /* @__PURE__ */ T(le, {
				id: u,
				type: i === "search" ? "search" : c.type,
				"aria-invalid": !!r || void 0,
				"aria-describedby": r || n ? `${u}-message` : void 0,
				className: e("w-full rounded-none border bg-background text-sm text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel", a === "lg" ? "min-h-12 px-4" : "min-h-11 px-3", i === "search" && "pl-8", r ? "border-primary" : "border-border", s),
				...c
			})]
		})
	});
}
function Xt({ label: t, helper: n, error: r, characterCount: i, id: a, className: o, maxLength: s, value: c, defaultValue: l, onChange: u, ...d }) {
	let f = O(), p = a ?? f, m = typeof c == "string" ? c.length : typeof l == "string" ? l.length : 0, [h, g] = k(m);
	return D(() => {
		typeof c == "string" && g(c.length);
	}, [c]), /* @__PURE__ */ E(Yt, {
		id: p,
		label: t,
		helper: n,
		error: r,
		children: [/* @__PURE__ */ T(ue, {
			id: p,
			maxLength: s,
			value: c,
			defaultValue: l,
			onChange: (e) => {
				g(e.currentTarget.value.length), u?.(e);
			},
			"aria-invalid": !!r || void 0,
			"aria-describedby": r || n ? `${p}-message` : void 0,
			className: e("min-h-28 w-full resize-y rounded-none border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel", r ? "border-primary" : "border-border", o),
			...d
		}), i && s ? /* @__PURE__ */ E("span", {
			className: "mw-meta justify-self-end text-muted-foreground",
			"aria-live": "polite",
			children: [
				h,
				"/",
				s
			]
		}) : null]
	});
}
function Zt({ label: t, helper: n, error: r, options: i, id: a, className: o, ...s }) {
	let c = O(), l = a ?? c;
	return /* @__PURE__ */ T(Yt, {
		id: l,
		label: t,
		helper: n,
		error: r,
		children: /* @__PURE__ */ T(Ee, {
			id: l,
			"aria-invalid": !!r || void 0,
			"aria-describedby": r || n ? `${l}-message` : void 0,
			className: e("min-h-11 w-full rounded-none border bg-background px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45", r ? "border-primary" : "border-border", o),
			...s,
			children: i.map((e) => /* @__PURE__ */ T(De, {
				value: e.value,
				children: e.label
			}, e.value))
		})
	});
}
function Qt({ label: t, description: n, indeterminate: r = !1, disabled: i, ...a }) {
	let o = Ge(null);
	return D(() => {
		o.current && (o.current.indeterminate = r);
	}, [r]), /* @__PURE__ */ E("label", {
		className: e("flex min-h-11 items-start gap-3 py-2", i ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ T("input", {
			ref: o,
			type: "checkbox",
			disabled: i,
			className: "mt-1 size-4 accent-[var(--mw-brand-crimson)]",
			"aria-checked": r ? "mixed" : void 0,
			...a
		}), /* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("span", {
			className: "block text-sm font-semibold",
			children: t
		}), n ? /* @__PURE__ */ T("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: n
		}) : null] })]
	});
}
function $t({ label: t, description: n, disabled: r, ...i }) {
	return /* @__PURE__ */ E("label", {
		className: e("flex min-h-11 items-start gap-3 py-2", r ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ T("input", {
			type: "radio",
			disabled: r,
			className: "mt-1 size-4 accent-[var(--mw-brand-crimson)]",
			...i
		}), /* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("span", {
			className: "block text-sm font-semibold",
			children: t
		}), n ? /* @__PURE__ */ T("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: n
		}) : null] })]
	});
}
function en({ label: t, description: n, disabled: r, id: i, ...a }) {
	let o = O(), s = i ?? o;
	return /* @__PURE__ */ E("label", {
		htmlFor: s,
		className: e("flex min-h-11 items-center justify-between gap-4 py-2", r ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("span", {
			className: "block text-sm font-semibold",
			children: t
		}), n ? /* @__PURE__ */ T("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: n
		}) : null] }), /* @__PURE__ */ E("span", {
			className: "relative inline-flex h-6 w-11 items-center",
			children: [
				/* @__PURE__ */ T("input", {
					id: s,
					type: "checkbox",
					role: "switch",
					disabled: r,
					className: "peer sr-only",
					...a
				}),
				/* @__PURE__ */ T("span", { className: "absolute inset-0 border border-border-strong bg-panel peer-checked:border-primary peer-checked:bg-primary" }),
				/* @__PURE__ */ T("span", { className: "absolute left-1 size-4 bg-foreground transition-transform peer-checked:translate-x-5 peer-checked:bg-white" })
			]
		})]
	});
}
//#endregion
//#region src/components/theme-toggle.tsx
var tn = [
	"system",
	"dark",
	"light"
];
function nn(e) {
	return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function rn(e) {
	let t = nn(e), n = document.documentElement;
	n.dataset.themePreference = e, n.dataset.theme = t, n.dataset.effectiveTheme = t, n.classList.toggle("light", t === "light");
}
function an() {
	try {
		let e = window.localStorage?.getItem("mw-theme");
		return e === "light" || e === "dark" || e === "system" ? e : "system";
	} catch {
		return "system";
	}
}
function B() {
	let [e, t] = k(an), [n, r] = k(() => nn(an()));
	D(() => {
		let t = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
			rn(e), r(nn(e));
		};
		return n(), t.addEventListener("change", n), () => t.removeEventListener("change", n);
	}, [e]);
	let i = tn[(tn.indexOf(e) + 1) % tn.length];
	return /* @__PURE__ */ T("button", {
		type: "button",
		className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[16px] border border-border bg-background px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted",
		"aria-label": `Theme ${e}, currently ${n}. Switch to ${i}.`,
		title: `Theme: ${e} · effective: ${n}`,
		onClick: () => {
			t(i);
			try {
				window.localStorage?.setItem("mw-theme", i);
			} catch {}
		},
		children: e
	});
}
//#endregion
//#region src/components/application-shell.tsx
var on = {
	dashboard: "What changed, what needs attention, and what can wait.",
	cases: "Investigative case review.",
	kanban: "Move work, not evidence.",
	calendar: "Reviews, releases, and research checkpoints.",
	chat: "Case conversations and review context.",
	ai: "Ask across records while keeping citations visible.",
	resources: "AutoMenu resource descriptors and permissions.",
	profile: "Profile identity and preferences.",
	settings: "Appearance, notifications, security, and integrations."
}, sn = {
	dashboard: "D",
	cases: "C",
	kanban: "K",
	calendar: "A",
	chat: "H",
	ai: "I",
	resources: "R",
	profile: "P",
	settings: "S"
}, cn = {
	system: "System",
	resource: "Resource",
	workspace: "Workspace",
	account: "Account"
}, V = i.map((e) => ({
	id: e.id,
	label: e.label,
	href: e.path,
	group: cn[e.kind],
	description: on[e.id],
	shortcut: sn[e.id],
	resource: "resource" in e ? e.resource : void 0,
	requiredPermission: e.permission
})), ln = r, H = [
	"authenticated",
	"case:read",
	"review:read",
	"community:read",
	"ai:use",
	"resource:read"
];
function un(e, t) {
	return t.includes(e.requiredPermission);
}
function dn({ items: e }) {
	return /* @__PURE__ */ T("nav", {
		"aria-label": "Breadcrumb",
		children: /* @__PURE__ */ T("ol", {
			className: "flex min-w-0 flex-wrap items-center gap-2",
			children: e.map((e, t) => /* @__PURE__ */ E("li", {
				className: "flex min-w-0 items-center gap-2",
				children: [t > 0 ? /* @__PURE__ */ T("span", {
					className: "mw-meta text-muted-foreground",
					"aria-hidden": "true",
					children: "/"
				}) : null, e.href ? /* @__PURE__ */ T(F, {
					href: e.href,
					className: "mw-link min-h-0 truncate font-mono text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground",
					children: e.label
				}) : /* @__PURE__ */ T("span", {
					className: "truncate font-mono text-[10px] font-bold uppercase",
					children: e.label
				})]
			}, `${e.label}-${t}`))
		})
	});
}
function fn({ state: e, label: t = "Backend" }) {
	return /* @__PURE__ */ E(L, {
		variant: e === "online" ? "supported" : e === "degraded" ? "partial" : "contested",
		children: [
			t,
			": ",
			e
		]
	});
}
function pn({ resources: t = V, activeId: n, compact: r = !1, permissions: i = H, onNavigate: a }) {
	let o = t.filter((e) => un(e, i));
	return /* @__PURE__ */ T("nav", {
		"aria-label": "Resource navigation",
		"data-mode": "AutoMenu",
		children: /* @__PURE__ */ T("div", {
			className: "grid gap-1 p-2",
			children: o.map((t) => /* @__PURE__ */ E(F, {
				href: t.href,
				title: r ? `${t.label} — ${t.description}` : void 0,
				"aria-current": t.id === n ? "page" : void 0,
				onClick: a,
				className: e("mw-link min-h-9 w-full rounded-[8px] no-underline", r ? "justify-center px-2" : "justify-center px-2 lg:justify-start lg:px-3", t.id === n ? "bg-card font-bold text-foreground" : "text-muted-foreground hover:bg-card hover:text-foreground"),
				children: [/* @__PURE__ */ T("span", {
					className: e("mr-2 size-2 rounded-full", t.id === n ? "bg-primary" : "bg-unresolved"),
					"aria-hidden": "true"
				}), r ? /* @__PURE__ */ T("span", {
					className: "font-mono text-[9px] font-black uppercase",
					children: t.label.slice(0, 2)
				}) : /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("span", {
					className: "font-mono text-[9px] font-black uppercase lg:hidden",
					children: t.label.slice(0, 2)
				}), /* @__PURE__ */ T("span", {
					className: "hidden text-sm lg:inline",
					children: t.label
				})] })]
			}, t.id))
		})
	});
}
function mn({ open: t, onClose: n, notifications: r, onMarkAllRead: i }) {
	let a = M(), o = i ?? a.onMarkAllNotificationsRead;
	return /* @__PURE__ */ E(Ft, {
		open: t,
		title: "Notifications",
		onClose: n,
		position: "right",
		footer: /* @__PURE__ */ T(R, {
			variant: "secondary",
			onClick: n,
			children: "Close"
		}),
		children: [/* @__PURE__ */ E("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ E("p", {
				className: "mw-meta text-muted-foreground",
				children: [r.filter((e) => e.state === "unread").length, " unread"]
			}), /* @__PURE__ */ T("button", {
				type: "button",
				className: "mw-link min-h-0 font-mono text-[10px] font-bold uppercase text-primary",
				onClick: () => void o?.(),
				children: "Mark all read"
			})]
		}), /* @__PURE__ */ E("div", {
			className: "grid",
			"data-state": r.length ? "unread" : "empty",
			children: [r.length ? r.map((t) => /* @__PURE__ */ E("article", {
				className: e("border-b border-border p-4", t.state === "unread" && "bg-panel"),
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ T("strong", {
							className: "text-sm",
							children: t.title
						}), /* @__PURE__ */ T(L, {
							variant: t.state === "unread" ? "info" : "neutral",
							children: t.variant
						})]
					}),
					/* @__PURE__ */ T("p", {
						className: "mt-2 text-xs leading-5 text-muted-foreground",
						children: t.body
					}),
					/* @__PURE__ */ T("p", {
						className: "mw-meta mt-3 text-muted-foreground",
						children: t.state
					})
				]
			}, t.id)) : /* @__PURE__ */ E("div", {
				className: "p-6",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-muted-foreground",
					children: "No notifications"
				}), /* @__PURE__ */ T("p", {
					className: "mt-3 text-sm",
					children: "Nothing needs your attention."
				})]
			}), r.length ? /* @__PURE__ */ E("article", {
				className: "border-b border-border p-4",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-success",
					children: "System"
				}), /* @__PURE__ */ T("p", {
					className: "mt-2 text-xs leading-5",
					children: "All repositories synchronized."
				})]
			}) : null]
		})]
	});
}
function hn({ name: e, role: t }) {
	let n = M();
	return /* @__PURE__ */ E("details", {
		className: "relative",
		children: [/* @__PURE__ */ E("summary", {
			className: "mw-touch flex cursor-pointer list-none items-center gap-2 rounded-full border border-border bg-background px-2",
			children: [/* @__PURE__ */ T(I, {
				label: e,
				size: "sm"
			}), /* @__PURE__ */ E("span", {
				className: "hidden text-left xl:block",
				children: [/* @__PURE__ */ T("span", {
					className: "block text-xs font-bold",
					children: e
				}), /* @__PURE__ */ T("span", {
					className: "mw-meta block text-muted-foreground",
					children: t
				})]
			})]
		}), /* @__PURE__ */ E("div", {
			className: "absolute right-0 top-[calc(100%+8px)] z-40 w-56 border border-border bg-card p-2 shadow-lg",
			children: [
				/* @__PURE__ */ T(F, {
					href: "/profile",
					className: "mw-link w-full px-3 text-sm",
					children: "Profile"
				}),
				/* @__PURE__ */ T(F, {
					href: "/settings",
					className: "mw-link w-full px-3 text-sm",
					children: "Settings"
				}),
				/* @__PURE__ */ T("button", {
					type: "button",
					className: "mw-link w-full px-3 text-left text-sm text-primary",
					onClick: () => void n.onSignOut?.(),
					children: "Sign out"
				})
			]
		})]
	});
}
var gn = [
	{
		label: "Open case by ID",
		shortcut: "C",
		href: "/cases"
	},
	{
		label: "Create review task",
		shortcut: "R",
		href: "/work/kanban"
	},
	{
		label: "Ask AI Workspace",
		shortcut: "A",
		href: "/ai"
	}
];
function _n({ open: e, onClose: t, resources: n = V, permissions: r = H, quickActions: i = gn }) {
	let [a, o] = k(""), s = We(() => {
		let e = a.trim().toLowerCase();
		return n.filter((t) => un(t, r) && (!e || `${t.label} ${t.description}`.toLowerCase().includes(e)));
	}, [
		r,
		a,
		n
	]);
	return /* @__PURE__ */ E(Pt, {
		open: e,
		title: "Command palette / ⌘K",
		onClose: t,
		size: "lg",
		children: [
			/* @__PURE__ */ T(z, {
				label: "Search actions, resources, cases",
				variant: "search",
				size: "lg",
				value: a,
				onChange: (e) => o(e.currentTarget.value),
				placeholder: "Search actions, resources, cases…",
				autoFocus: !0
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-5 text-muted-foreground",
				children: "Quick actions"
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-3 grid border border-border",
				children: i.map((e) => /* @__PURE__ */ E(F, {
					href: e.href,
					className: "grid min-h-13 grid-cols-[1fr_auto] items-center border-b border-border px-4 no-underline hover:bg-panel",
					onClick: t,
					children: [/* @__PURE__ */ T("span", {
						className: "text-sm font-bold",
						children: e.label
					}), /* @__PURE__ */ T("span", {
						className: "mw-meta text-muted-foreground",
						children: e.shortcut
					})]
				}, e.label))
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-5 text-muted-foreground",
				children: "Resources / Auto Menu"
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-3 grid max-h-[40vh] overflow-y-auto border border-border",
				children: [s.map((e) => /* @__PURE__ */ E(F, {
					href: e.href,
					className: "grid min-h-14 grid-cols-[1fr_auto] gap-4 border-b border-border p-3 no-underline hover:bg-panel",
					onClick: t,
					children: [/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("span", {
						className: "block text-sm font-bold",
						children: e.label
					}), /* @__PURE__ */ T("span", {
						className: "mt-1 block text-xs text-muted-foreground",
						children: e.description
					})] }), e.shortcut ? /* @__PURE__ */ T("span", {
						className: "mw-meta self-center text-muted-foreground",
						children: e.shortcut
					}) : null]
				}, e.id)), s.length ? null : /* @__PURE__ */ T("p", {
					className: "p-5 text-sm text-muted-foreground",
					children: "No matching command."
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: "↑↓ Navigate / Enter open / Esc close"
			})
		]
	});
}
function vn({ breadcrumbs: e, backendState: t, user: n, unreadCount: r, onOpenMenu: i, onOpenCommands: a, onOpenNotifications: o }) {
	return /* @__PURE__ */ T("header", {
		className: "sticky top-0 z-30 border-b border-border bg-panel/95 backdrop-blur",
		role: "banner",
		children: /* @__PURE__ */ E("div", {
			className: "flex min-h-[68px] items-center gap-3 px-3 sm:px-5 lg:px-8",
			children: [
				/* @__PURE__ */ T(Nt, {
					label: "Open navigation",
					className: "md:hidden",
					onClick: i,
					children: "≡"
				}),
				/* @__PURE__ */ T("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ T(dn, { items: e })
				}),
				/* @__PURE__ */ T("div", {
					className: "hidden sm:block",
					children: /* @__PURE__ */ T(fn, { state: t })
				}),
				/* @__PURE__ */ T(Nt, {
					label: "Open command palette",
					"aria-keyshortcuts": "Control+K Meta+K",
					onClick: a,
					children: "⌘"
				}),
				/* @__PURE__ */ T("button", {
					type: "button",
					className: "mw-touch relative inline-flex items-center justify-center rounded-full border border-border bg-background px-3 font-mono text-[10px] font-bold uppercase",
					onClick: o,
					"aria-label": `Notifications, ${r} unread`,
					children: r || 0
				}),
				/* @__PURE__ */ T(B, {}),
				/* @__PURE__ */ T(hn, {
					name: n.name,
					role: n.role
				})
			]
		})
	});
}
function yn({ activeResource: t, breadcrumbs: n, children: r, backendState: i = "online", user: a = {
	name: "Rocksoul",
	role: "researcher"
}, permissions: o = H, resources: s = V, notifications: c = [], commandActions: l, surfacePersonality: u = "operator" }) {
	let [d, f] = k(!1), [p, m] = k(!1), [h, g] = k(!1), [_, v] = k(!1), y = c.filter((e) => e.state === "unread").length;
	return D(() => {
		let e = (e) => {
			(e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k" && (e.preventDefault(), m(!0));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, []), /* @__PURE__ */ E("div", {
		className: "mw-platform min-h-screen bg-background text-foreground",
		"data-surface-personality": u,
		children: [
			/* @__PURE__ */ T("a", {
				href: "#mw-main-content",
				className: "fixed left-3 top-3 z-50 -translate-y-20 bg-primary px-4 py-3 text-sm font-bold text-primary-foreground focus:translate-y-0",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ E("div", {
				className: "flex min-h-screen",
				children: [/* @__PURE__ */ E("aside", {
					className: e("relative hidden shrink-0 border-r border-border bg-panel md:block", _ ? "w-[72px]" : "w-[72px] lg:w-[220px]"),
					"data-state": _ ? "compact" : "expanded",
					children: [
						/* @__PURE__ */ E("div", {
							className: "flex min-h-[112px] items-center justify-between border-b border-border px-3",
							children: [
								/* @__PURE__ */ T(A, {
									compact: _,
									subtitle: "APPLICATION",
									className: e(!_ && "hidden lg:inline-flex")
								}),
								_ ? null : /* @__PURE__ */ T(A, {
									compact: !0,
									className: "lg:hidden"
								}),
								/* @__PURE__ */ T(Nt, {
									label: _ ? "Expand sidebar" : "Compact sidebar",
									size: "sm",
									variant: "ghost",
									className: "hidden lg:inline-flex",
									onClick: () => v((e) => !e),
									children: _ ? "›" : "‹"
								})
							]
						}),
						/* @__PURE__ */ T(pn, {
							resources: s,
							activeId: t,
							compact: _,
							permissions: o
						}),
						/* @__PURE__ */ E("div", {
							className: "absolute bottom-6 hidden px-4 lg:block",
							children: [/* @__PURE__ */ T("p", {
								className: "mw-meta text-muted-foreground",
								children: "CMD K / COMMAND"
							}), /* @__PURE__ */ T("p", {
								className: "mw-meta mt-3 text-muted-foreground",
								children: "AUTO MENU / LIVE"
							})]
						})
					]
				}), /* @__PURE__ */ E("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ T(vn, {
						breadcrumbs: n,
						backendState: i,
						user: a,
						unreadCount: y,
						onOpenMenu: () => f(!0),
						onOpenCommands: () => m(!0),
						onOpenNotifications: () => g(!0)
					}), /* @__PURE__ */ T("main", {
						id: "mw-main-content",
						className: "min-w-0",
						tabIndex: -1,
						children: r
					})]
				})]
			}),
			/* @__PURE__ */ E(Ft, {
				open: d,
				title: "Navigation",
				onClose: () => f(!1),
				position: "left",
				children: [
					/* @__PURE__ */ T(A, {
						subtitle: "APPLICATION",
						className: "mb-5"
					}),
					/* @__PURE__ */ T("div", {
						className: "mb-4",
						children: /* @__PURE__ */ T(fn, { state: i })
					}),
					/* @__PURE__ */ T(pn, {
						resources: s,
						activeId: t,
						permissions: o,
						onNavigate: () => f(!1)
					})
				]
			}),
			/* @__PURE__ */ T(_n, {
				open: p,
				onClose: () => m(!1),
				resources: s,
				permissions: o,
				quickActions: l
			}),
			/* @__PURE__ */ T(mn, {
				open: h,
				onClose: () => g(!1),
				notifications: c
			})
		]
	});
}
//#endregion
//#region src/components/archive-components.tsx
function bn({ caseId: t, surface: n = "web", variant: r = "auto", homeHref: i = "#top", brandLabel: a = "INDEPENDENT OBSERVATORY", navItems: o = [
	{
		label: "Observe",
		href: "#method"
	},
	{
		label: "Records",
		href: "#method"
	},
	{
		label: "Cases",
		href: "#case"
	},
	{
		label: "Community",
		href: "#method"
	}
], searchHref: s = "#search", liveLabel: c = "Live" }) {
	let [l, u] = k(!1), [d, f] = k(!1), p = O();
	D(() => {
		if (r !== "auto") return;
		let e = () => f(window.scrollY > 24);
		return e(), window.addEventListener("scroll", e, { passive: !0 }), () => window.removeEventListener("scroll", e);
	}, [r]);
	let m = r === "auto" ? d ? "solid" : "transparent" : r, h = m === "compact-mobile";
	return /* @__PURE__ */ E("header", {
		className: e("sticky top-0 z-30 border-b backdrop-blur transition-colors", m === "solid" ? "border-border bg-background/95" : "border-transparent bg-background/80"),
		"data-state": d ? "scrolled" : "default",
		"data-variant": m,
		children: [/* @__PURE__ */ E("div", {
			className: "mw-shell-wide flex min-h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ E("a", {
					href: i,
					className: "mw-link flex-col items-start justify-center no-underline",
					children: [/* @__PURE__ */ T("span", {
						className: "text-sm font-bold",
						children: "MOONWITNESS"
					}), /* @__PURE__ */ T("span", {
						className: "mw-meta text-muted-foreground",
						children: a
					})]
				}),
				/* @__PURE__ */ E("nav", {
					"aria-label": "Primary",
					className: e("items-center", h ? "hidden" : "hidden md:flex"),
					children: [
						o.map((e) => /* @__PURE__ */ T("a", {
							href: e.href,
							className: "mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground",
							children: e.label
						}, e.label)),
						/* @__PURE__ */ T("a", {
							href: s,
							className: "mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em]",
							children: "Search"
						}),
						/* @__PURE__ */ T("span", {
							className: "mw-meta ml-2 border border-success px-2 py-1 text-success",
							children: c
						}),
						/* @__PURE__ */ T(B, {}),
						/* @__PURE__ */ T(I, {
							label: n === "community" ? "Member" : "Guest",
							size: "sm"
						})
					]
				}),
				/* @__PURE__ */ E("div", {
					className: e("items-center gap-2", h ? "flex" : "flex md:hidden"),
					children: [
						t ? /* @__PURE__ */ T("span", {
							className: "mw-meta hidden text-muted-foreground sm:inline",
							children: t
						}) : null,
						/* @__PURE__ */ T("a", {
							href: s,
							className: "mw-touch inline-flex items-center justify-center border border-border px-2 font-mono text-[9px] font-bold uppercase",
							children: "Search"
						}),
						/* @__PURE__ */ T(I, {
							label: n === "community" ? "Member" : "Guest",
							size: "sm"
						}),
						/* @__PURE__ */ T("button", {
							className: "mw-touch border border-border px-3 font-mono text-[10px] font-bold uppercase",
							type: "button",
							"aria-expanded": l,
							"aria-controls": p,
							onClick: () => u(!0),
							children: "Menu"
						})
					]
				})
			]
		}), /* @__PURE__ */ T(Ft, {
			open: l,
			title: "MoonWitness",
			onClose: () => u(!1),
			position: "right",
			children: /* @__PURE__ */ E("nav", {
				id: p,
				className: "grid",
				children: [[...o, {
					label: "Search",
					href: s
				}].map((e) => /* @__PURE__ */ T("a", {
					href: e.href,
					className: "mw-link border-b border-border font-mono text-xs font-bold uppercase tracking-[0.1em]",
					onClick: () => u(!1),
					children: e.label
				}, e.label)), /* @__PURE__ */ E("div", {
					className: "mt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ T("span", {
						className: "mw-meta text-success",
						children: c
					}), /* @__PURE__ */ T(B, {})]
				})]
			})
		})]
	});
}
var xn = {
	STORY: "text-rgbl-red-fg",
	EVENT: "text-rgbl-green-fg",
	PERSON: "text-warning",
	RGBL: "text-rgbl-blue-fg",
	AWS: "text-primary"
};
function Sn({ domain: t, recordId: n, repo: r, claim: i, provenance: a, verification: o, status: s, canonical: c, selected: l, flagged: u, sourceHref: d }) {
	return /* @__PURE__ */ E("article", {
		className: e("flex min-h-72 flex-col border bg-card p-4", u ? "border-warning" : l ? "border-foreground" : "border-border"),
		"aria-label": `${t} evidence: ${s}`,
		"data-state": u ? "flagged" : l ? "selected" : "default",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ T("span", {
					className: e("mw-eyebrow", xn[t]),
					children: t
				}), /* @__PURE__ */ T(L, {
					variant: s,
					children: s
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: n
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-base font-bold",
				children: i
			}),
			/* @__PURE__ */ E("dl", {
				className: "mw-meta mt-5 grid gap-2 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", {
							className: "text-muted-foreground",
							children: "Repo"
						}), /* @__PURE__ */ T("dd", { children: r })]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", {
							className: "text-muted-foreground",
							children: "Provenance"
						}), /* @__PURE__ */ T("dd", {
							className: "text-right",
							children: a
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", {
							className: "text-muted-foreground",
							children: "Verification"
						}), /* @__PURE__ */ T("dd", { children: o })]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", {
							className: "text-muted-foreground",
							children: "Canonical"
						}), /* @__PURE__ */ T("dd", { children: c ? "YES" : "NO" })]
					})
				]
			}),
			/* @__PURE__ */ T("a", {
				href: d ?? "#evidence",
				className: "mw-link mt-auto pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
				children: "Inspect source →"
			})
		]
	});
}
function U({ repo: t, domain: n, status: r, records: i, schema: a, lastSync: o, variant: s = "public" }) {
	let c = r === "healthy" ? "supported" : r === "degraded" ? "partial" : r === "offline" ? "contested" : "info";
	return /* @__PURE__ */ E("article", {
		className: e("mw-panel", s === "platform" ? "p-3" : "p-4"),
		"data-surface": s,
		children: [/* @__PURE__ */ E("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-muted-foreground",
				children: n
			}), /* @__PURE__ */ T("h3", {
				className: e("mt-2 font-bold", s === "platform" ? "text-sm" : "text-base"),
				children: t
			})] }), /* @__PURE__ */ T(L, {
				variant: c,
				children: r
			})]
		}), /* @__PURE__ */ E("dl", {
			className: "mw-meta mt-6 grid gap-2 text-muted-foreground",
			children: [
				/* @__PURE__ */ E("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ T("dt", { children: "Records" }), /* @__PURE__ */ T("dd", {
						className: "text-foreground",
						children: i
					})]
				}),
				/* @__PURE__ */ E("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ T("dt", { children: "Schema" }), /* @__PURE__ */ T("dd", {
						className: "text-foreground",
						children: a
					})]
				}),
				/* @__PURE__ */ E("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ T("dt", { children: "Last sync" }), /* @__PURE__ */ T("dd", {
						className: "text-foreground",
						children: o
					})]
				})
			]
		})]
	});
}
function W({ id: t, variant: n = "record", sourceId: r, title: i, excerpt: a, citation: o, provenance: s, verification: c }) {
	return /* @__PURE__ */ E("figure", {
		id: t,
		className: e("scroll-mt-24 border bg-card p-5", n === "legal-instrument" ? "border-primary" : "border-border"),
		children: [
			/* @__PURE__ */ E("figcaption", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ T("span", {
					className: "mw-eyebrow text-muted-foreground",
					children: r
				}), /* @__PURE__ */ T(L, {
					variant: n === "legal-instrument" ? "contested" : "info",
					children: c
				})]
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-lg font-bold",
				children: i
			}),
			/* @__PURE__ */ T("blockquote", {
				className: "mt-3 max-w-3xl text-sm leading-6 text-muted-foreground",
				children: a
			}),
			/* @__PURE__ */ E("dl", {
				className: "mw-meta mt-5 grid gap-2 border-t border-border pt-4 text-muted-foreground",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
					className: "inline",
					children: "Citation / "
				}), /* @__PURE__ */ T("dd", {
					className: "inline text-foreground",
					children: o
				})] }), /* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
					className: "inline",
					children: "Provenance / "
				}), /* @__PURE__ */ T("dd", {
					className: "inline text-foreground",
					children: s
				})] })]
			})
		]
	});
}
function Cn({ code: t, source: n, locator: r, variant: i = "inline" }) {
	let [a, o] = k(!1), s = `${t} · ${n} · ${r}`;
	return i === "inline" ? /* @__PURE__ */ T("button", {
		type: "button",
		className: "mw-touch inline-flex items-center border-b border-border font-mono text-[10px] uppercase tracking-[0.08em] hover:border-foreground",
		onClick: () => {
			navigator.clipboard?.writeText(s), o(!0);
		},
		children: a ? "Copied" : t
	}) : /* @__PURE__ */ E("div", {
		className: e("border p-4", i === "legal" ? "border-primary bg-legal-paper text-legal-ink" : "border-border bg-card"),
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-meta",
				children: t
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm font-semibold",
				children: n
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-2 opacity-70",
				children: r
			}),
			/* @__PURE__ */ T(R, {
				className: "mt-4",
				variant: i === "legal" ? "danger" : "secondary",
				onClick: () => {
					navigator.clipboard?.writeText(s), o(!0);
				},
				children: a ? "Copied" : "Copy citation"
			})
		]
	});
}
function wn({ timestamp: t, title: n, description: r, source: i, status: a, flagged: o, variant: s = "event" }) {
	return /* @__PURE__ */ E("article", {
		className: e("grid gap-3 border-l-2 py-4 pl-4 sm:grid-cols-[120px_1fr]", o ? "border-warning" : "border-border"),
		"data-variant": s,
		"data-state": o ? "flagged" : "default",
		children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
			className: "mw-meta text-muted-foreground",
			children: t
		}), /* @__PURE__ */ E("p", {
			className: "mw-meta mt-1",
			children: [
				s,
				" · ",
				a
			]
		})] }), /* @__PURE__ */ E("div", { children: [
			/* @__PURE__ */ T("h3", {
				className: "text-sm font-bold",
				children: n
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-3 text-muted-foreground",
				children: i
			})
		] })]
	});
}
function Tn({ kind: t, author: n, role: r, body: i, timestamp: a, state: o = "default", replies: s = 0, actions: c }) {
	let l = t === "question" ? "info" : t === "moderator-note" ? "verified" : o === "reported" ? "contested" : "neutral";
	return o === "hidden" ? /* @__PURE__ */ E("article", {
		className: "border-b border-border py-5 opacity-70",
		"data-state": "hidden",
		children: [/* @__PURE__ */ T(L, {
			variant: "unresolved",
			children: "hidden"
		}), /* @__PURE__ */ T("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "This item is hidden by moderation."
		})]
	}) : /* @__PURE__ */ E("article", {
		className: e("border-b border-border py-5", o === "reported" && "border-l-2 border-l-primary pl-4"),
		"data-state": o,
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ T(I, {
						label: n,
						size: "sm"
					}),
					/* @__PURE__ */ T("strong", {
						className: "text-sm",
						children: n
					}),
					/* @__PURE__ */ T(L, {
						variant: l,
						children: t
					}),
					o === "default" ? null : /* @__PURE__ */ T(L, {
						variant: o === "reported" ? "contested" : "neutral",
						children: o
					})
				]
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-4 max-w-3xl text-sm leading-6",
				children: i
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-meta mt-4 flex flex-wrap items-center gap-3 text-muted-foreground",
				children: [
					/* @__PURE__ */ E("span", { children: [
						r,
						" · ",
						a
					] }),
					/* @__PURE__ */ E("span", { children: [s, " replies"] }),
					/* @__PURE__ */ E("span", { children: ["moderation: ", o] })
				]
			}),
			c ? /* @__PURE__ */ T("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: c
			}) : null
		]
	});
}
function En({ id: t, state: n, title: r, body: i, canonicalEvidence: a = !1, submitter: o = "community member", source: s = "provenance pending", reviewer: c = "unassigned", reviewActions: l }) {
	let u = n === "verified" ? "verified" : n === "rejected" ? "contested" : n === "needs-context" ? "partial" : n === "in-review" ? "info" : "unresolved";
	return /* @__PURE__ */ E("article", {
		className: e("border bg-card p-4", n === "needs-context" ? "border-warning" : "border-border"),
		"data-state": n,
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: t
				}), /* @__PURE__ */ T(L, {
					variant: u,
					children: n.replace("-", " ")
				})]
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-sm font-bold",
				children: r
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: i
			}),
			/* @__PURE__ */ E("dl", {
				className: "mw-meta mt-4 grid gap-1 border-t border-border pt-4 text-muted-foreground",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Submitter" }), /* @__PURE__ */ T("dd", {
							className: "text-foreground",
							children: o
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Source" }), /* @__PURE__ */ T("dd", {
							className: "text-right text-foreground",
							children: s
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Reviewer" }), /* @__PURE__ */ T("dd", {
							className: "text-foreground",
							children: c
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Canonical" }), /* @__PURE__ */ T("dd", {
							className: "text-foreground",
							children: a ? "YES" : "NO"
						})]
					})
				]
			}),
			l ? /* @__PURE__ */ T("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: l
			}) : null
		]
	});
}
function Dn({ title: t, body: n, unread: r, variant: i = "system" }) {
	return /* @__PURE__ */ E("article", {
		className: e("border-b border-border p-4", r && "bg-panel"),
		"data-variant": i,
		"data-state": r ? "unread" : "read",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ T("p", {
					className: "text-sm font-bold",
					children: t
				}), /* @__PURE__ */ T(L, {
					variant: r ? "info" : "neutral",
					children: i
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-1 text-xs leading-5 text-muted-foreground",
				children: n
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-2 text-muted-foreground",
				children: r ? "Unread" : "Read"
			})
		]
	});
}
function On({ repo: e, status: t, commit: n = "fixture", schema: r = "v1", records: i = "—", queue: a = 0, errors: o = 0, lastSync: s = "now", action: c }) {
	let l = t === "online" ? "supported" : t === "degraded" ? "partial" : t === "offline" ? "contested" : "info";
	return /* @__PURE__ */ E("div", {
		className: "grid min-h-11 grid-cols-[1.5fr_auto] items-center gap-3 border-b border-border bg-card px-3 py-2 md:grid-cols-[1.5fr_.8fr_.7fr_.6fr_.6fr_.6fr_.8fr_auto_auto]",
		children: [
			/* @__PURE__ */ T("span", {
				className: "mw-meta",
				children: e
			}),
			/* @__PURE__ */ T("span", {
				className: "md:hidden",
				children: /* @__PURE__ */ T(L, {
					variant: l,
					children: t
				})
			}),
			/* @__PURE__ */ T("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: n
			}),
			/* @__PURE__ */ T("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: r
			}),
			/* @__PURE__ */ T("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: i
			}),
			/* @__PURE__ */ E("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: ["Q ", a]
			}),
			/* @__PURE__ */ E("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: ["E ", o]
			}),
			/* @__PURE__ */ T("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: s
			}),
			/* @__PURE__ */ T("span", {
				className: "hidden md:block",
				children: /* @__PURE__ */ T(L, {
					variant: l,
					children: t
				})
			}),
			/* @__PURE__ */ T("span", {
				className: "hidden md:block",
				children: c
			})
		]
	});
}
function G({ timestamp: e, actor: t, action: n, resource: r, result: i, traceId: a }) {
	return /* @__PURE__ */ T("div", {
		className: "grid gap-1 border-b border-border px-3 py-3 text-xs md:grid-cols-[130px_1fr_1fr_1fr_1fr_1fr]",
		children: [
			e,
			t,
			n,
			r,
			i,
			a
		].map((e, t) => /* @__PURE__ */ T("span", {
			className: t === 0 ? "mw-meta text-muted-foreground" : "font-mono text-[10px]",
			children: e
		}, t))
	});
}
function K({ label: t, value: n, context: r, delta: i, tone: a = "neutral" }) {
	let o = a === "good" ? "text-success" : a === "warning" ? "text-warning" : a === "critical" ? "text-primary" : "text-foreground";
	return /* @__PURE__ */ E("article", {
		className: "border border-border bg-card p-4",
		"data-variant": a,
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: t
				}), i ? /* @__PURE__ */ T("span", {
					className: e("mw-meta", o),
					children: i
				}) : null]
			}),
			/* @__PURE__ */ T("p", {
				className: e("mt-3 text-4xl font-black", o),
				children: n
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: r
			})
		]
	});
}
function kn({ active: t = "Cases", collapsed: n = !1 }) {
	let r = t.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ E("aside", {
		className: e("hidden min-h-[calc(100vh-64px)] shrink-0 flex-col border-r border-border bg-panel md:flex", n ? "w-[72px]" : "w-[72px] lg:w-[220px]"),
		"data-state": n ? "collapsed" : "expanded",
		"data-navigation": "auto-menu",
		children: [
			/* @__PURE__ */ E("div", {
				className: "border-b border-border p-3",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-primary",
					children: n ? "MW" : "MoonWitness"
				}), n ? null : /* @__PURE__ */ T("p", {
					className: "mw-meta mt-1 hidden text-muted-foreground lg:block",
					children: "Workspace / Research"
				})]
			}),
			/* @__PURE__ */ T("div", {
				className: "flex-1",
				children: /* @__PURE__ */ T(pn, {
					resources: V,
					activeId: r,
					compact: n,
					permissions: ["authz:read", "audit:read"]
				})
			}),
			/* @__PURE__ */ E("div", {
				className: "border-t border-border p-3",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-success",
					children: n ? "●" : "System / online"
				}), n ? null : /* @__PURE__ */ E("div", {
					className: "mt-2 hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ T(I, {
						label: "Researcher",
						size: "xs"
					}), /* @__PURE__ */ T("span", {
						className: "mw-meta text-muted-foreground",
						children: "Researcher / fixture"
					})]
				})]
			})
		]
	});
}
function An({ resultCount: e = 4, chips: t = [
	"All records",
	"Canonical",
	"Source-linked"
] }) {
	return /* @__PURE__ */ E("form", {
		id: "search",
		className: "grid gap-4 border border-border bg-card p-4",
		onSubmit: (e) => e.preventDefault(),
		children: [/* @__PURE__ */ E("div", {
			className: "grid gap-3 md:grid-cols-[1fr_220px_180px_auto]",
			children: [
				/* @__PURE__ */ T(z, {
					label: "Search",
					variant: "search",
					placeholder: "Search records, IDs, sources…"
				}),
				/* @__PURE__ */ T(Zt, {
					label: "Status",
					defaultValue: "all",
					options: [
						{
							label: "All states",
							value: "all"
						},
						{
							label: "Supported",
							value: "supported"
						},
						{
							label: "Partial",
							value: "partial"
						},
						{
							label: "Unresolved",
							value: "unresolved"
						}
					]
				}),
				/* @__PURE__ */ T(Zt, {
					label: "Sort",
					defaultValue: "relevance",
					options: [
						{
							label: "Relevance",
							value: "relevance"
						},
						{
							label: "Newest",
							value: "newest"
						},
						{
							label: "Source",
							value: "source"
						}
					]
				}),
				/* @__PURE__ */ T("div", {
					className: "self-end",
					children: /* @__PURE__ */ T(R, {
						type: "submit",
						children: "Apply"
					})
				})
			]
		}), /* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ T("div", {
				className: "flex flex-wrap gap-2",
				children: t.map((e) => /* @__PURE__ */ T(L, {
					variant: "neutral",
					children: e
				}, e))
			}), /* @__PURE__ */ E("p", {
				className: "mw-meta text-muted-foreground",
				children: [e, " results"]
			})]
		})]
	});
}
function q({ state: e, traceId: t = "TRACE-UNAVAILABLE", lastKnownState: n = "No cached state available.", requiredPermission: r = "resource:read", currentRole: i = "researcher", onRetry: a, onRequestAccess: o, onClearFilters: s }) {
	let c = M(), l = a ?? (() => c.onRetry?.(e)), u = o ?? (() => c.onRequestAccess?.({
		permission: r,
		currentRole: i
	})), d = s ?? c.onClearFilters;
	return e === "loading" ? /* @__PURE__ */ E("div", {
		className: "border border-border bg-card p-6",
		"aria-busy": "true",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-success",
				children: "Loading"
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-6 grid gap-4",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ T("div", { className: "h-5 w-full rounded-full bg-background" }),
					/* @__PURE__ */ T("div", { className: "h-5 w-3/4 rounded-full bg-background" }),
					/* @__PURE__ */ T("div", { className: "h-24 w-full rounded-[8px] bg-background" }),
					/* @__PURE__ */ T("div", { className: "h-24 w-full rounded-[8px] bg-background" })
				]
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: "Preserve layout. No jumping."
			})
		]
	}) : e === "error" ? /* @__PURE__ */ E("div", {
		className: "border border-primary bg-card p-6",
		role: "alert",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "Error"
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-lg font-bold",
				children: "Couldn’t load records."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Backend is reachable, but the query failed. Existing records are unchanged."
			}),
			/* @__PURE__ */ E("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: ["Trace / ", t]
			}),
			/* @__PURE__ */ T(R, {
				className: "mt-5",
				variant: "danger",
				onClick: () => void l?.(),
				children: "Try again"
			})
		]
	}) : e === "offline" ? /* @__PURE__ */ E("div", {
		className: "border border-warning bg-card p-6",
		role: "status",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-warning",
				children: "Backend offline"
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-lg font-bold",
				children: "The service is unreachable."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "This is a connectivity failure, not an empty result."
			}),
			/* @__PURE__ */ E("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: ["Last known state / ", n]
			}),
			/* @__PURE__ */ T(R, {
				className: "mt-5",
				variant: "secondary",
				onClick: () => void l?.(),
				children: "Retry connection"
			})
		]
	}) : e === "forbidden" ? /* @__PURE__ */ E("div", {
		className: "border border-primary bg-card p-6",
		role: "alert",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "Forbidden"
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-lg font-bold",
				children: "This action needs more access."
			}),
			/* @__PURE__ */ E("dl", {
				className: "mw-meta mt-4 grid gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ E("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ T("dt", { children: "Required" }), /* @__PURE__ */ T("dd", {
						className: "text-foreground",
						children: r
					})]
				}), /* @__PURE__ */ E("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ T("dt", { children: "Current role" }), /* @__PURE__ */ T("dd", {
						className: "text-foreground",
						children: i
					})]
				})]
			}),
			/* @__PURE__ */ T(R, {
				className: "mt-5",
				variant: "danger",
				onClick: () => void u?.(),
				children: "Request access"
			})
		]
	}) : /* @__PURE__ */ E("div", {
		className: "border border-info bg-card p-6",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-info",
				children: "Empty"
			}),
			/* @__PURE__ */ T("h3", {
				className: "mt-4 text-lg font-bold",
				children: "Nothing here yet."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Change filters or create a record."
			}),
			/* @__PURE__ */ T(R, {
				className: "mt-5",
				variant: "secondary",
				onClick: () => void d?.(),
				children: "Clear filters"
			})
		]
	});
}
function jn({ mode: t = "context", onSubmit: n }) {
	let r = t === "question", i = M(), [a, o] = k(""), [s, c] = k(""), l = n ?? i.onCommunitySubmit;
	return /* @__PURE__ */ E("form", {
		className: e("border bg-card p-4", r ? "border-info" : "border-primary"),
		onSubmit: (e) => {
			e.preventDefault(), s.trim() && (l?.({
				mode: t,
				source: r ? void 0 : a.trim() || void 0,
				body: s.trim()
			}), c(""), r || o(""));
		},
		children: [
			/* @__PURE__ */ T("p", {
				className: e("mw-eyebrow", r ? "text-info" : "text-primary"),
				children: r ? "Ask a question" : "Submit context"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-lg font-bold",
				children: r ? "Question the score. Keep the evidence intact." : "Source first. Interpretation later."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-4 grid gap-4",
				children: [
					r ? null : /* @__PURE__ */ T(z, {
						label: "Source / provenance",
						value: a,
						onChange: (e) => o(e.currentTarget.value),
						placeholder: "Paste source ID or locator"
					}),
					/* @__PURE__ */ T(Xt, {
						label: r ? "Question" : "Context",
						value: s,
						onChange: (e) => c(e.currentTarget.value),
						maxLength: 600,
						characterCount: !0,
						placeholder: r ? "What needs explanation?" : "What does this add, and what remains uncertain?"
					}),
					/* @__PURE__ */ T(R, {
						type: "submit",
						disabled: !s.trim(),
						children: r ? "Ask question" : "Submit context"
					})
				]
			})
		]
	});
}
function Mn({ caseId: t, title: n, summary: r, status: i, traceCount: a, updatedAt: o, variant: s = "default", selected: c = !1 }) {
	return /* @__PURE__ */ E("article", {
		className: e("border bg-card transition-colors hover:border-border-strong", s === "compact" ? "p-3" : "p-5", c ? "border-foreground" : s === "featured" ? "border-primary" : "border-border"),
		"data-variant": s,
		"data-state": c ? "selected" : "default",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ E("span", {
					className: "mw-meta text-muted-foreground",
					children: ["CASE / ", t]
				}), /* @__PURE__ */ T(L, {
					variant: i,
					children: i
				})]
			}),
			/* @__PURE__ */ T("h3", {
				className: e("mw-display mt-5 font-black uppercase", s === "compact" ? "text-lg" : "text-2xl"),
				children: n
			}),
			s === "compact" ? null : /* @__PURE__ */ T("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-meta mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-muted-foreground",
				children: [/* @__PURE__ */ E("span", { children: [a, " traces"] }), /* @__PURE__ */ E("span", { children: ["updated ", o] })]
			})
		]
	});
}
function Nn({ type: t, label: n, highlighted: r = !1, dimmed: i = !1 }) {
	return /* @__PURE__ */ T("span", {
		className: e("inline-flex min-h-8 items-center border-l-2 pl-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em]", t === "supports" || t === "temporal" ? "border-success" : t === "identity" ? "border-warning" : t === "references" ? "border-info" : "border-primary", r ? "text-foreground" : "text-muted-foreground", i && "opacity-80"),
		"aria-label": `${t} relationship${n ? `: ${n}` : ""}`,
		children: n ?? t
	});
}
function Pn({ children: t, active: n = !0, legalState: r = "unresolved" }) {
	return /* @__PURE__ */ E("section", {
		className: e("border-t-2 pt-5", n ? "border-primary" : "border-border"),
		"aria-label": "AWS legal boundary",
		children: [/* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ T("p", {
				className: e("mw-eyebrow", n ? "text-primary" : "text-muted-foreground"),
				children: "THE BOUNDARY / AWS"
			}), /* @__PURE__ */ T(L, {
				variant: n ? "disputed" : "unresolved",
				children: r
			})]
		}), t ? /* @__PURE__ */ T("div", {
			className: "mt-4",
			children: t
		}) : null]
	});
}
function Fn({ entries: e, filter: t = "all" }) {
	let n = t === "all" ? e : e.filter((e) => (e.variant ?? "event") === t);
	return /* @__PURE__ */ E("section", {
		"aria-label": "Case timeline",
		children: [/* @__PURE__ */ T("div", {
			className: "mb-3 flex flex-wrap gap-2",
			"aria-label": "Timeline filters",
			children: [
				"all",
				"event",
				"source",
				"decision",
				"community"
			].map((e) => /* @__PURE__ */ T(L, {
				variant: e === t ? "info" : "neutral",
				children: e
			}, e))
		}), /* @__PURE__ */ T("div", {
			className: "border-t border-border",
			children: n.map((e) => /* @__PURE__ */ T(wn, { ...e }, `${e.timestamp}-${e.title}`))
		})]
	});
}
//#endregion
//#region src/components/case-header.tsx
function In({ caseId: t, eyebrow: n, title: r, summary: i, status: a, variant: o = "public", metadata: s = [], actions: c }) {
	return /* @__PURE__ */ E("header", {
		className: e("border-b border-border pb-7", o === "platform" && "pb-5"),
		children: [/* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: n
			}), /* @__PURE__ */ E("p", {
				className: "mw-meta text-muted-foreground",
				children: ["Case / ", t]
			})]
		}), /* @__PURE__ */ E("div", {
			className: e("mt-7", o === "platform" ? "max-w-4xl" : "max-w-5xl"),
			children: [
				/* @__PURE__ */ T("h2", {
					className: e("mw-display text-balance font-black uppercase", o === "platform" ? "text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]" : "text-[clamp(3rem,8vw,5.25rem)] leading-[0.92]"),
					children: r
				}),
				/* @__PURE__ */ T("p", {
					className: "mw-reading mt-6 text-pretty text-base leading-7 text-muted-foreground sm:text-lg",
					children: i
				}),
				/* @__PURE__ */ E("div", {
					className: "mt-5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ T(L, {
						variant: a,
						children: a
					}), s.map((e) => /* @__PURE__ */ E("span", {
						className: "mw-meta text-muted-foreground",
						children: [
							e.label,
							": ",
							/* @__PURE__ */ T("span", {
								className: "text-foreground",
								children: e.value
							})
						]
					}, e.label))]
				}),
				c ? /* @__PURE__ */ T("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: c
				}) : null
			]
		})]
	});
}
//#endregion
//#region src/components/correlation-score.tsx
function Ln({ score: e, confidence: t, explanation: n, dimensions: r, methodHref: i = "#method", variant: a = "detailed" }) {
	let o = O();
	return /* @__PURE__ */ E("section", {
		className: "border border-border bg-panel p-5",
		"aria-labelledby": o,
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-meta text-muted-foreground",
				children: a === "summary" ? "Correlation" : "Correlation preview"
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-3 flex flex-wrap items-end gap-x-5 gap-y-2",
				children: [/* @__PURE__ */ T("h3", {
					id: o,
					className: a === "summary" ? "mw-display text-5xl font-black" : "mw-display text-6xl font-black",
					children: e.toFixed(2)
				}), /* @__PURE__ */ E("div", {
					className: "pb-1",
					children: [/* @__PURE__ */ T("p", {
						className: "mw-meta text-success",
						children: t
					}), /* @__PURE__ */ T("p", {
						className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
						children: n
					})]
				})]
			}),
			a === "detailed" ? /* @__PURE__ */ T("div", {
				className: "mt-6 grid gap-3",
				children: r.map((e) => /* @__PURE__ */ E("div", {
					className: "grid grid-cols-[minmax(100px,1fr)_1.6fr_auto] items-center gap-3",
					children: [
						/* @__PURE__ */ T("span", {
							className: "mw-meta text-muted-foreground",
							children: e.label
						}),
						/* @__PURE__ */ T("div", {
							className: "h-2 overflow-hidden rounded-full bg-card",
							"aria-hidden": "true",
							children: /* @__PURE__ */ T("div", {
								className: e.tone === "warning" ? "h-full bg-warning" : "h-full bg-success",
								style: { width: `${Math.round(e.value * 100)}%` }
							})
						}),
						/* @__PURE__ */ T("span", {
							className: e.tone === "warning" ? "mw-meta text-warning" : "mw-meta text-success",
							children: e.value.toFixed(2)
						})
					]
				}, e.label))
			}) : /* @__PURE__ */ E("p", {
				className: "mw-meta mt-4 text-warning",
				children: [
					"Identity ",
					r.find((e) => e.label === "Identity")?.value.toFixed(2) ?? "—",
					" · still blocking closure"
				]
			}),
			/* @__PURE__ */ T("a", {
				href: i,
				className: "mw-link mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
				children: "How this score is weighed →"
			})
		]
	});
}
//#endregion
//#region src/components/domain-record-summary.tsx
function Rn({ records: e, className: t = "" }) {
	return /* @__PURE__ */ T("div", {
		className: t,
		"data-testid": "domain-record-summary",
		children: e.map((e) => {
			let t = tt(e.domain), n = /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T("strong", { children: e.domain }),
				/* @__PURE__ */ T("span", { children: e.title }),
				/* @__PURE__ */ E("code", { children: [t.prefix, e.recordId] }),
				e.status ? /* @__PURE__ */ T("span", { children: e.status }) : null
			] });
			return e.href ? /* @__PURE__ */ T("a", {
				href: e.href,
				"data-domain": e.domain,
				"data-repository": t.repository,
				children: n
			}, `${e.domain}:${e.recordId}`) : /* @__PURE__ */ T("article", {
				"data-domain": e.domain,
				"data-repository": t.repository,
				children: n
			}, `${e.domain}:${e.recordId}`);
		})
	});
}
//#endregion
//#region src/components/evidence-graph.tsx
var zn = {
	STORY: "text-rgbl-red-fg border-rgbl-red",
	EVENT: "text-rgbl-green-fg border-rgbl-green",
	PERSON: "text-warning border-warning",
	RGBL: "text-rgbl-blue-fg border-rgbl-blue",
	TEXT: "text-rgbl-blue-fg border-rgbl-blue",
	AWS: "text-primary border-primary",
	LAW: "text-primary border-primary",
	PERSPECTIVE: "text-warning border-warning",
	RELATIONSHIP: "text-foreground border-primary",
	CASE: "text-foreground border-primary"
}, Bn = {
	STORY: "left-[8%] top-[10%]",
	EVENT: "right-[8%] top-[10%]",
	PERSON: "bottom-[10%] left-[8%]",
	RGBL: "bottom-[10%] right-[8%]"
}, Vn = [
	{
		type: "supports",
		label: "supports",
		className: "border-success"
	},
	{
		type: "temporal",
		label: "temporal",
		className: "border-rgbl-green"
	},
	{
		type: "references",
		label: "references",
		className: "border-rgbl-blue"
	},
	{
		type: "identity",
		label: "identity / unresolved",
		className: "border-warning"
	},
	{
		type: "contradicts",
		label: "contradicts",
		className: "border-primary"
	},
	{
		type: "legal",
		label: "legal / downstream",
		className: "border-primary"
	}
];
function Hn({ records: t, score: n }) {
	let r = O(), [i, a] = k("EVENT"), o = t.find((e) => e.domain === i);
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": r,
		className: "border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: "Relationship graph"
				}), /* @__PURE__ */ T("h3", {
					id: r,
					className: "mw-display mt-2 text-2xl font-bold",
					children: "Separate records. Shared correlation layer."
				})] }), /* @__PURE__ */ T(L, {
					variant: "unresolved",
					children: "not causation"
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "relative mx-auto mt-6 aspect-square w-full max-w-[430px]",
				"aria-label": "Interactive case relationship graph",
				children: [
					/* @__PURE__ */ E("svg", {
						className: "absolute inset-0 size-full",
						viewBox: "0 0 100 100",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ T("line", {
								x1: "50",
								y1: "50",
								x2: "22",
								y2: "22",
								className: "text-rgbl-red",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ T("line", {
								x1: "50",
								y1: "50",
								x2: "78",
								y2: "22",
								className: "text-rgbl-green",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ T("line", {
								x1: "50",
								y1: "50",
								x2: "22",
								y2: "78",
								className: "text-warning",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ T("line", {
								x1: "50",
								y1: "50",
								x2: "78",
								y2: "78",
								className: "text-rgbl-blue",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							})
						]
					}),
					/* @__PURE__ */ T(Un, {
						type: "CASE",
						label: n.toFixed(2),
						status: "correlation",
						relationCount: 4,
						state: i === "CASE" ? "selected" : "default",
						className: "absolute left-1/2 top-1/2 size-[clamp(82px,22vw,104px)] -translate-x-1/2 -translate-y-1/2",
						onSelect: () => a("CASE")
					}),
					t.map((t) => /* @__PURE__ */ T(Un, {
						type: t.domain,
						label: t.domain,
						status: t.status,
						relationCount: 1,
						state: i === t.domain ? "selected" : t.domain === "PERSON" ? "unresolved" : "default",
						className: e("absolute", Bn[t.domain]),
						onSelect: () => a(t.domain)
					}, t.domain))
				]
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-4 flex justify-end",
				children: /* @__PURE__ */ T(Un, {
					type: "AWS",
					label: "AWS",
					status: "after boundary",
					relationCount: 1,
					state: "dimmed",
					onSelect: () => a("AWS")
				})
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-5 flex flex-wrap gap-3",
				"aria-label": "Relationship legend",
				children: Vn.map((t) => /* @__PURE__ */ T("span", {
					className: e("mw-meta border-l-2 pl-2 text-muted-foreground", t.className),
					children: t.label
				}, t.type))
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-5 border-l-2 border-primary bg-background p-4",
				"aria-live": "polite",
				children: o ? /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ E("p", {
					className: e("mw-eyebrow", zn[o.domain].split(" ")[0]),
					children: [o.domain, " selected"]
				}), /* @__PURE__ */ E("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: [
						o.description,
						" Provenance: ",
						o.source,
						". Verification state: ",
						o.verification,
						"."
					]
				})] }) : i === "CASE" ? /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-primary",
					children: "CASE selected"
				}), /* @__PURE__ */ E("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: [
						"Aggregate correlation is ",
						n.toFixed(2),
						". It is not a factual or causal conclusion."
					]
				})] }) : /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-primary",
					children: "AWS selected"
				}), /* @__PURE__ */ T("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: "AWS remains dimmed until the legal boundary. It is downstream of evidence reconstruction."
				})] })
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-6 border-t border-border pt-4",
				children: [/* @__PURE__ */ T("h4", {
					className: "mw-meta text-muted-foreground",
					children: "Text equivalent"
				}), /* @__PURE__ */ E("ul", {
					className: "mt-3 grid gap-2 text-sm leading-6",
					children: [
						t.map((e) => /* @__PURE__ */ E("li", {
							id: `correlation-${e.domain.toLowerCase()}`,
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ T("strong", { children: e.domain }),
								" → CASE correlation / ",
								e.status,
								" / ",
								e.source,
								".",
								" ",
								e.domain === "PERSON" ? "Identity relation remains unresolved." : "Source relation remains independently inspectable."
							]
						}, e.domain)),
						/* @__PURE__ */ E("li", { children: [
							/* @__PURE__ */ T("strong", { children: "CASE" }),
							" → aggregate score ",
							n.toFixed(2),
							"; correlation is not causation."
						] }),
						/* @__PURE__ */ E("li", { children: [/* @__PURE__ */ T("strong", { children: "AWS" }), " → legal relation starts only after the evidence correlation boundary."] })
					]
				})]
			})
		]
	});
}
function Un({ type: t, label: n, status: r, relationCount: i = 0, state: a = "default", className: o, onSelect: s }) {
	return /* @__PURE__ */ E("button", {
		type: "button",
		className: e("flex min-h-11 min-w-11 flex-col items-center justify-center rounded-full border-2 bg-card p-2 text-center transition-[border-color,background-color,opacity] hover:border-foreground hover:bg-panel", zn[t], a === "selected" && "bg-panel ring-2 ring-foreground ring-offset-2 ring-offset-background", a === "dimmed" && "opacity-90", a === "unresolved" && "border-dashed", (o?.includes("absolute"), ""), o),
		"data-type": t.toLowerCase(),
		"data-state": a,
		"aria-pressed": a === "selected",
		"aria-label": `${t}: ${r}. ${i} relationships. Select relationship node.`,
		onClick: s,
		children: [
			/* @__PURE__ */ T("span", {
				className: "font-mono text-[10px] font-bold uppercase",
				children: n
			}),
			/* @__PURE__ */ T("span", {
				className: "mt-1 font-mono text-[10px] uppercase text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ E("span", {
				className: "sr-only",
				children: [i, " relationships"]
			})
		]
	});
}
//#endregion
//#region src/components/four-record-summary.tsx
var Wn = [
	"STORY",
	"EVENT",
	"PERSON",
	"RGBL"
], Gn = {
	STORY: "text-rgbl-red-fg",
	EVENT: "text-rgbl-green-fg",
	PERSON: "text-warning",
	RGBL: "text-rgbl-blue-fg"
};
function Kn({ records: t, compact: n = !1 }) {
	let r = O();
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": r,
		children: [n ? /* @__PURE__ */ T("h3", {
			id: r,
			className: "sr-only",
			children: "Four correlated records"
		}) : /* @__PURE__ */ E("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-muted-foreground",
				children: "Four records / separate first"
			}), /* @__PURE__ */ T("h3", {
				id: r,
				className: "mt-1 text-xl font-semibold",
				children: "What survived the cross-check?"
			})]
		}), /* @__PURE__ */ T("div", {
			className: "rs-record-grid",
			children: Wn.map((r) => {
				let i = t.find((e) => e.domain === r);
				return i ? /* @__PURE__ */ E("article", {
					id: `evidence-${i.domain.toLowerCase()}`,
					className: e("flex scroll-mt-24 flex-col border border-border bg-card", n ? "min-h-[92px] p-4" : "min-h-72 p-4"),
					"data-state": i.status === "partial" ? "partial" : "linked",
					children: [
						/* @__PURE__ */ E("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ T("span", {
								className: e("mw-eyebrow", Gn[i.domain]),
								children: i.domain
							}), /* @__PURE__ */ T(L, {
								variant: i.status,
								children: i.status
							})]
						}),
						n ? null : /* @__PURE__ */ T("p", {
							className: "mw-meta mt-4 text-muted-foreground",
							children: i.recordId
						}),
						/* @__PURE__ */ T("h4", {
							className: e("font-semibold leading-5", n ? "mt-3 text-sm" : "mt-2 text-base"),
							children: i.title
						}),
						n ? null : /* @__PURE__ */ T("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: i.description
						}),
						n ? /* @__PURE__ */ T("p", {
							className: "mw-meta mt-auto pt-2 text-muted-foreground",
							children: i.verification
						}) : /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ E("dl", {
							className: "mw-meta mt-auto grid gap-1 border-t border-border pt-4 text-muted-foreground",
							children: [
								/* @__PURE__ */ E("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ T("dt", { children: "Repo" }), /* @__PURE__ */ T("dd", {
										className: "text-right text-foreground",
										children: i.sourceRepo
									})]
								}),
								/* @__PURE__ */ E("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ T("dt", { children: "Source" }), /* @__PURE__ */ T("dd", {
										className: "text-right text-foreground",
										children: i.source
									})]
								}),
								/* @__PURE__ */ E("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ T("dt", { children: "Verify" }), /* @__PURE__ */ T("dd", {
										className: "text-right text-foreground",
										children: i.verification
									})]
								}),
								/* @__PURE__ */ E("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ T("dt", { children: "Canonical" }), /* @__PURE__ */ T("dd", {
										className: "text-right text-foreground",
										children: i.canonicalStatus
									})]
								})
							]
						}), /* @__PURE__ */ T("a", {
							href: `#source-${i.domain.toLowerCase()}`,
							className: "mw-link mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
							children: "Inspect source trail →"
						})] })
					]
				}, i.domain) : /* @__PURE__ */ E("article", {
					className: e("flex flex-col border border-dashed border-border bg-card p-4 opacity-70", n ? "min-h-[92px]" : "min-h-44"),
					children: [/* @__PURE__ */ E("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ T("span", {
							className: e("mw-eyebrow", Gn[r]),
							children: r
						}), /* @__PURE__ */ T(L, {
							variant: "unresolved",
							children: "missing"
						})]
					}), /* @__PURE__ */ T("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No linked record yet."
					})]
				}, r);
			})
		})]
	});
}
//#endregion
//#region src/components/legal-status.tsx
var qn = {
	permitted: "verified",
	restricted: "restricted",
	prohibited: "prohibited",
	disputed: "disputed",
	unresolved: "unresolved"
};
function Jn({ status: e, jurisdiction: t, review: n, prompt: r, basis: i = "fixture instruments only" }) {
	let a = O();
	return /* @__PURE__ */ E("section", {
		className: "border border-primary bg-card p-5",
		"aria-labelledby": a,
		children: [
			/* @__PURE__ */ T("div", {
				className: "h-0.5 w-full bg-primary",
				"aria-label": "AWS legal boundary",
				role: "separator"
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow mt-4 text-primary",
				children: "The boundary / AWS"
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-2 text-muted-foreground",
				children: "Angel With Shotgun · international law / regulation"
			}),
			/* @__PURE__ */ T("h3", {
				id: a,
				className: "mw-display mt-4 text-2xl font-bold",
				children: "Evidence asks what happened. Law asks what rule would apply."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ E("dl", {
				className: "mt-5 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Legal state"
						}), /* @__PURE__ */ T("dd", { children: /* @__PURE__ */ T(L, {
							variant: qn[e],
							children: e
						}) })]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Jurisdiction"
						}), /* @__PURE__ */ T("dd", { children: /* @__PURE__ */ T(L, {
							variant: "unresolved",
							children: t
						}) })]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Review"
						}), /* @__PURE__ */ T("dd", { children: /* @__PURE__ */ T(L, {
							variant: "info",
							children: n
						}) })]
					}),
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Basis"
						}), /* @__PURE__ */ T("dd", { children: i })]
					})
				]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-5 border-t border-border pt-4 text-muted-foreground",
				children: "Synthetic fixture / reference-only · cited source law and MoonWitness analysis remain separate · not a court judgment"
			})
		]
	});
}
//#endregion
//#region src/components/platform-admin.tsx
var Yn = {
	System: "System",
	Resource: "Resource",
	Account: "Account"
}, Xn = N.navigation.map((e) => ({
	id: e.id,
	label: e.label,
	href: e.path,
	group: Yn[e.group],
	description: e.label + " / Platform administration contract.",
	shortcut: e.label.slice(0, 1).toUpperCase(),
	requiredPermission: e.permission
})), Zn = N.commands.map((e) => ({
	label: e.label,
	href: e.path,
	shortcut: e.shortcut
})), Qn = Array.from(new Set(N.navigation.map((e) => e.permission))), $n = {
	allow: "verified",
	limited: "partial",
	read: "info",
	deny: "prohibited"
};
function er({ currentRole: e }) {
	return /* @__PURE__ */ T("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ E("table", {
			className: "w-full min-w-[720px] border-collapse text-left",
			children: [/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ E("tr", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ T("th", {
					className: "p-3 mw-meta text-muted-foreground",
					children: "Capability"
				}), N.roles.map((t) => /* @__PURE__ */ E("th", {
					className: "p-3 mw-meta text-muted-foreground",
					children: [t.label, e === t.id ? " / CURRENT" : ""]
				}, t.id))]
			}) }), /* @__PURE__ */ T("tbody", { children: N.capabilities.map((e) => /* @__PURE__ */ E("tr", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ T("th", {
					className: "p-4 text-sm",
					children: e.label
				}), N.roles.map((t) => {
					let n = e[t.id];
					return /* @__PURE__ */ T("td", {
						className: "p-4",
						children: /* @__PURE__ */ T(L, {
							variant: $n[n],
							children: n
						})
					}, t.id);
				})]
			}, e.id)) })]
		})
	});
}
var tr = {
	connected: "verified",
	degraded: "partial",
	offline: "prohibited",
	unconfigured: "neutral"
};
function nr({ state: e, detail: t }) {
	return /* @__PURE__ */ T("section", {
		className: "border border-border bg-card p-5",
		"data-platform-runtime": e,
		children: /* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ E("div", { children: [
				/* @__PURE__ */ T("p", {
					className: "mw-meta text-primary",
					children: "IAM DATA PLANE"
				}),
				/* @__PURE__ */ T("h2", {
					className: "mt-2 text-lg font-bold",
					children: e === "connected" ? "Server authoritative." : "Fail closed."
				}),
				/* @__PURE__ */ T("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: t ?? (e === "unconfigured" ? "No Platform backend is configured. Mutations must remain unavailable." : "Runtime state comes from the Platform API, not from baked UI fixtures.")
				})
			] }), /* @__PURE__ */ T(L, {
				variant: tr[e],
				children: e
			})]
		})
	});
}
function rr({ runtime: e = [] }) {
	let t = new Map(e.map((e) => [e.id, e]));
	return /* @__PURE__ */ E("section", {
		className: "border border-border bg-card",
		children: [/* @__PURE__ */ T("div", {
			className: "border-b border-border p-4",
			children: /* @__PURE__ */ T("p", {
				className: "mw-meta text-muted-foreground",
				children: "SERVICE REGISTRY / RUNTIME"
			})
		}), N.serviceRegistry.map((e) => {
			let n = t.get(e.id) ?? {
				id: e.id,
				state: "unconfigured"
			};
			return /* @__PURE__ */ E("div", {
				className: "grid gap-3 border-b border-border p-4 sm:grid-cols-[1fr_180px_auto] sm:items-center",
				children: [
					/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("strong", {
						className: "text-sm",
						children: e.label
					}), /* @__PURE__ */ T("p", {
						className: "mt-1 font-mono text-[10px] text-muted-foreground",
						children: e.repository ?? e.kind
					})] }),
					/* @__PURE__ */ T("span", {
						className: "text-xs text-muted-foreground",
						children: n.detail ?? "Runtime status unavailable."
					}),
					/* @__PURE__ */ T(L, {
						variant: tr[n.state],
						children: n.state
					})
				]
			}, e.id);
		})]
	});
}
function ir({ screen: e, alt: t, ...n }) {
	let r = f().replace(/\/+$/, "") + "/ui/v2/" + mt[e], i = "/assets/ui/v2/" + mt[e];
	return /* @__PURE__ */ T(b, {
		src: r,
		fallbackSrc: i,
		alt: t,
		...n
	});
}
//#endregion
//#region src/components/compat/patterns.tsx
function ar({ page: e = 1, pages: t = 1, onPageChange: n }) {
	let r = M(), i = n ?? r.onPageChange;
	return /* @__PURE__ */ T(Ve, {
		page: e,
		pages: t,
		onPageChange: i
	});
}
function or({ records: e }) {
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": "evidence-grid-heading",
		children: [
			/* @__PURE__ */ E("div", {
				className: "mb-5",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: "Evidence grid"
				}), /* @__PURE__ */ T("h3", {
					id: "evidence-grid-heading",
					className: "mt-2 text-xl font-bold",
					children: "Inspect each record independently."
				})]
			}),
			/* @__PURE__ */ T(An, { resultCount: e.length }),
			/* @__PURE__ */ T("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
				children: e.map((e, t) => /* @__PURE__ */ T(Sn, {
					domain: e.domain,
					recordId: e.recordId,
					repo: e.sourceRepo,
					claim: e.description,
					provenance: e.source,
					verification: e.verification,
					status: e.status,
					canonical: e.canonicalStatus === "canonical",
					selected: t === 1,
					flagged: e.domain === "PERSON",
					sourceHref: `#source-${e.domain.toLowerCase()}`
				}, e.domain))
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-2",
				children: e.map((e) => /* @__PURE__ */ T(W, {
					id: `source-${e.domain.toLowerCase()}`,
					sourceId: e.source,
					title: e.title,
					excerpt: e.description,
					citation: e.recordId,
					provenance: `fixture/${e.domain.toLowerCase()}/0042/a`,
					verification: e.verification
				}, e.source))
			}),
			/* @__PURE__ */ T(ar, {
				page: 1,
				pages: 1
			})
		]
	});
}
function sr({ records: e, correlation: t }) {
	return /* @__PURE__ */ E("section", {
		className: "grid gap-4 lg:grid-cols-[1.15fr_.85fr]",
		"aria-label": "Correlation graph pattern",
		children: [/* @__PURE__ */ T(Hn, {
			records: e,
			score: t.score
		}), /* @__PURE__ */ T(Ln, { ...t })]
	});
}
function cr({ legal: e, sources: t }) {
	return /* @__PURE__ */ E("section", {
		"aria-label": "AWS legal summary",
		children: [/* @__PURE__ */ T(Pn, {
			legalState: e.status,
			children: /* @__PURE__ */ T("p", {
				className: "text-sm font-semibold",
				children: "Cool. Now the law gets involved."
			})
		}), /* @__PURE__ */ E("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[.8fr_1.2fr]",
			children: [/* @__PURE__ */ T(Jn, { ...e }), /* @__PURE__ */ T("div", {
				className: "grid gap-4",
				children: t.map((e) => /* @__PURE__ */ T(W, {
					id: `legal-${e.id.toLowerCase()}`,
					variant: "legal-instrument",
					sourceId: e.id,
					title: e.title,
					excerpt: e.excerpt,
					citation: e.id,
					provenance: e.locator,
					verification: "reference-only"
				}, e.id))
			})]
		})]
	});
}
function lr({ cases: e }) {
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": "related-cases-heading",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-meta text-muted-foreground",
				children: "Related cases"
			}),
			/* @__PURE__ */ T("h3", {
				id: "related-cases-heading",
				className: "mt-2 text-xl font-bold",
				children: "Similar trails, separate conclusions."
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				children: e.map((e) => /* @__PURE__ */ T(Mn, {
					...e,
					variant: "compact"
				}, e.caseId))
			})
		]
	});
}
function ur({ header: e, evidence: t, correlation: n, legal: r, related: i, summary: a }) {
	return /* @__PURE__ */ E("div", {
		className: "grid gap-8",
		children: [
			e,
			a,
			t,
			n,
			r,
			i
		]
	});
}
function dr({ repositories: e, onSyncAll: t, onInspect: n }) {
	let r = M(), i = t ?? r.onRepositorySyncAll, a = n ?? r.onRepositoryInspect;
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": "repository-monitor-heading",
		children: [/* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-muted-foreground",
				children: "Repository monitor"
			}), /* @__PURE__ */ T("h3", {
				id: "repository-monitor-heading",
				className: "mt-2 text-lg font-bold",
				children: "Source-layer health"
			})] }), /* @__PURE__ */ E("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ T(qt, {
					variant: "info",
					children: "job: idle"
				}), /* @__PURE__ */ T(R, {
					variant: "secondary",
					size: "sm",
					onClick: () => void i?.(),
					children: "Sync all"
				})]
			})]
		}), /* @__PURE__ */ T("div", {
			className: "mt-4 border border-border",
			children: e.map((e) => /* @__PURE__ */ T(On, {
				repo: e.repo,
				status: e.status,
				queue: e.queue ?? 0,
				errors: e.errors ?? 0,
				action: /* @__PURE__ */ T(R, {
					variant: "ghost",
					size: "sm",
					onClick: () => void a?.(e.repo),
					children: "Inspect"
				})
			}, e.repo))
		})]
	});
}
function fr({ submission: e, onSelectAll: t, onRequestContext: n, onReject: r, onBulkRequestContext: i, onReturnSelected: a }) {
	let o = M();
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": "moderation-queue-heading",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: "Moderation queue"
				}), /* @__PURE__ */ T("h3", {
					id: "moderation-queue-heading",
					className: "mt-2 text-lg font-bold",
					children: "Community submissions stay non-canonical until reviewed."
				})] }), /* @__PURE__ */ E("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ T(qt, {
						variant: "neutral",
						children: "filter: needs context"
					}), /* @__PURE__ */ T(R, {
						variant: "ghost",
						size: "sm",
						onClick: () => void (t ?? o.onModerationSelectAll)?.(),
						children: "Select all"
					})]
				})]
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-4",
				children: /* @__PURE__ */ T(En, {
					...e,
					canonicalEvidence: !1,
					source: "provenance incomplete",
					reviewer: "unassigned",
					reviewActions: /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(R, {
						variant: "danger",
						size: "sm",
						onClick: () => void (n ?? o.onModerationRequestContext)?.(e.id),
						children: "Request context"
					}), /* @__PURE__ */ T(R, {
						variant: "secondary",
						size: "sm",
						onClick: () => void (r ?? o.onModerationReject)?.(e.id),
						children: "Reject"
					})] })
				})
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ T(R, {
					variant: "secondary",
					size: "sm",
					onClick: () => void (i ?? o.onModerationBulkRequestContext)?.(),
					children: "Bulk request context"
				}), /* @__PURE__ */ T(R, {
					variant: "ghost",
					size: "sm",
					onClick: () => void (a ?? o.onModerationReturnSelected)?.(),
					children: "Return selected"
				})]
			})
		]
	});
}
function pr({ question: e, moderatorNote: t, submission: n }) {
	return /* @__PURE__ */ E("section", {
		"aria-label": "Community case thread",
		className: "border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ T(Tn, {
				kind: "question",
				author: "Member",
				role: "member",
				timestamp: "05:14",
				body: e,
				replies: 1
			}),
			/* @__PURE__ */ T(Tn, {
				kind: "moderator-note",
				author: "Moderator",
				role: "moderator",
				timestamp: "05:20",
				body: t,
				replies: 0
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-5",
				children: /* @__PURE__ */ T(En, {
					...n,
					canonicalEvidence: !1,
					source: "provenance incomplete"
				})
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-5 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ T(jn, { mode: "question" }), /* @__PURE__ */ T(jn, { mode: "context" })]
			})
		]
	});
}
function mr({ entries: e }) {
	return /* @__PURE__ */ T(Fn, {
		entries: e,
		filter: "all"
	});
}
function hr() {
	return /* @__PURE__ */ T(An, {
		resultCount: 4,
		chips: [
			"All records",
			"Canonical",
			"Source-linked"
		]
	});
}
function gr({ children: e }) {
	return /* @__PURE__ */ T("section", {
		"aria-label": "Empty loading error pattern",
		children: e
	});
}
function _r({ onSubmit: e, onProvider: t } = {}) {
	let [n, r] = k("default"), i = M(), a = e ?? i.onAuthSubmit, o = t ?? i.onAuthProvider;
	return /* @__PURE__ */ E("form", {
		"aria-label": "Sign in",
		onSubmit: async (e) => {
			e.preventDefault();
			let t = new FormData(e.currentTarget), n = {
				email: String(t.get("email") ?? ""),
				password: String(t.get("password") ?? ""),
				keepSignedIn: t.get("keepSignedIn") === "on"
			};
			if (!a) {
				r("loading");
				return;
			}
			r("loading");
			try {
				await a(n), r("default");
			} catch {
				r("error");
			}
		},
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "Sign in"
			}),
			/* @__PURE__ */ T("h2", {
				className: "mt-3 text-2xl font-bold",
				children: "Your account, not your conclusion."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: "Identity controls access. It never changes evidence status by itself."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-5",
				children: [
					/* @__PURE__ */ T(z, {
						name: "email",
						label: "Email",
						type: "email",
						autoComplete: "email",
						placeholder: "you@example.com",
						required: !0
					}),
					/* @__PURE__ */ T(z, {
						name: "password",
						label: "Password",
						type: "password",
						autoComplete: "current-password",
						error: n === "error" ? "That credential pair was not accepted." : void 0,
						required: !0
					}),
					/* @__PURE__ */ T(Qt, {
						name: "keepSignedIn",
						label: "Keep me signed in",
						description: "Use only on a device you control."
					}),
					/* @__PURE__ */ T(R, {
						type: "submit",
						loading: n === "loading",
						children: "Continue"
					}),
					/* @__PURE__ */ T(R, {
						type: "button",
						variant: "secondary",
						onClick: () => void o?.(),
						children: "Continue with provider"
					}),
					/* @__PURE__ */ T("button", {
						type: "button",
						className: "mw-link justify-start text-xs underline",
						onClick: () => r("error"),
						children: "Preview error state"
					})
				]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-8 border-t border-border pt-4 text-muted-foreground",
				children: "By continuing you accept the community rules and evidence-integrity contract."
			})
		]
	});
}
//#endregion
//#region src/contracts/semantic-asset-map.ts
var vr = {
	story: "graph-node",
	claim: "graph-node",
	evidence: "evidence-source",
	source: "evidence-source",
	text: "graph-node",
	event: "event-node",
	person: "person-node",
	law: "law-node",
	case: "graph-node",
	location: "jurisdiction-zone"
}, yr = {
	dashboard: {
		required: [
			"dashboard",
			"data-viz",
			"graph-vector"
		],
		allowed: ["primitive", "specimen"]
	},
	cases: {
		required: [
			"evidence-media",
			"correlation-semantics",
			"evidence-integrity"
		],
		allowed: ["primitive", "specimen"]
	},
	platform: {
		required: [
			"architecture-diagram",
			"authorization-security",
			"theme-accessibility"
		],
		allowed: ["primitive", "specimen"]
	},
	auth: {
		required: ["authorization-security", "theme-accessibility"],
		allowed: ["primitive", "illustration"]
	}
};
function br(e, t = x.acceptedMainCommit) {
	return `https://raw.githubusercontent.com/${x.repository}/${t}/moonwitness/semantic-primitives-pack/svg/${e}.svg`;
}
//#endregion
//#region src/components/workflow-strip.tsx
var xr = [
	{
		name: "Observe",
		target: "observe",
		copy: "Record before interpretation."
	},
	{
		name: "Trace",
		target: "trace",
		copy: "Keep provenance attached."
	},
	{
		name: "Reconstruct",
		target: "reconstruct",
		copy: "Relate fragments without forcing identity."
	},
	{
		name: "Weigh",
		target: "weigh",
		copy: "Expose dimensions, uncertainty, and contradiction."
	},
	{
		name: "Verify",
		target: "verify",
		copy: "Keep unresolved when evidence stops."
	}
];
function Sr() {
	return /* @__PURE__ */ T("nav", {
		"aria-label": "MoonWitness method",
		className: "border-y border-border",
		children: /* @__PURE__ */ T("ol", {
			className: "grid sm:grid-cols-5",
			children: xr.map((e, t) => /* @__PURE__ */ T("li", {
				className: "border-b border-border last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
				children: /* @__PURE__ */ E("a", {
					href: `#${e.target}`,
					className: "flex min-h-28 flex-col justify-between gap-4 p-4 transition-colors hover:bg-muted",
					children: [/* @__PURE__ */ E("span", {
						className: "mw-eyebrow text-muted-foreground",
						children: [
							String(t + 1).padStart(2, "0"),
							" / ",
							e.name
						]
					}), /* @__PURE__ */ T("span", {
						className: "text-sm leading-5 text-foreground",
						children: e.copy
					})]
				})
			}, e.name))
		})
	});
}
//#endregion
//#region src/fixtures/mw0042.ts
var J = {
	caseId: "MW-0042",
	eyebrow: "GOLDEN CASE / DESIGN FIXTURE",
	title: "The Silent Flight",
	summary: "Four separate records appear to line up around one unexplained movement. Enough to investigate. Not enough to close.",
	status: "unresolved",
	updatedAt: "2026-09-08T05:30:00+07:00",
	tags: [
		"movement",
		"night",
		"identity",
		"source-text",
		"legal-boundary"
	],
	records: [
		{
			domain: "STORY",
			recordId: "STORY-0042-A",
			title: "A route nobody remembers taking",
			description: "A recurring account describes a silent departure, a missing interval, and a return before sunrise.",
			source: "SRC-STORY-0042-A",
			sourceRepo: "rocksoul-legend",
			canonicalStatus: "canonical",
			verification: "source-linked",
			status: "supported"
		},
		{
			domain: "EVENT",
			recordId: "EVENT-0042-A",
			title: "Movement recorded inside the missing interval",
			description: "A timestamped event record places an unidentified movement inside the same time window.",
			source: "SRC-EVENT-0042-A",
			sourceRepo: "rocksoul-event",
			canonicalStatus: "canonical",
			verification: "verified-fixture",
			status: "supported"
		},
		{
			domain: "PERSON",
			recordId: "PERSON-0042-A",
			title: "Identity match is incomplete",
			description: "Two attributes line up with the person record, but one key identity field remains unverified.",
			source: "SRC-PERSON-0042-A",
			sourceRepo: "rocksoul-superhero",
			canonicalStatus: "reference",
			verification: "partial",
			status: "partial"
		},
		{
			domain: "RGBL",
			recordId: "RGBL-0042-A",
			title: "The text preserves the same motif",
			description: "A source fragment contains a movement / silence / return motif. Semantic relation is present; causal relation is not established.",
			source: "SRC-RGBL-0042-A",
			sourceRepo: "rocksoul-rgbl",
			canonicalStatus: "canonical",
			verification: "source-linked",
			status: "supported"
		}
	],
	recordDetails: {
		STORY: {
			sourceType: "synthetic-archive-note",
			locator: "fixture/story/0042/a",
			independent: !0
		},
		EVENT: {
			temporal: {
				start: "02:14",
				end: "02:37",
				timezone: "LOCAL/FIXTURE"
			},
			sourceType: "synthetic-event-log",
			locator: "fixture/event/0042/a",
			independent: !0
		},
		PERSON: {
			matchDimensions: {
				role: !0,
				movement: !0,
				identity: !1
			},
			sourceType: "synthetic-person-record",
			locator: "fixture/person/0042/a",
			independent: !0
		},
		RGBL: {
			channels: {
				red: "movement",
				green: "return",
				blue: "night",
				light: "unresolved relation"
			},
			sourceType: "synthetic-text-fragment",
			locator: "fixture/rgbl/0042/a",
			independent: !0
		}
	},
	correlation: {
		score: .87,
		confidence: "medium-high",
		explanation: "The trails are starting to line up. That still doesn’t make them the same thing. Identity remains incomplete.",
		dimensions: [
			{
				label: "Temporal",
				value: .94
			},
			{
				label: "Motif",
				value: .89
			},
			{
				label: "Source independence",
				value: .91
			},
			{
				label: "Identity",
				value: .64,
				tone: "warning"
			}
		]
	},
	legal: {
		status: "disputed",
		jurisdiction: "UNRESOLVED / FIXTURE",
		review: "needs-legal-review",
		prompt: "Even if the movement happened as reconstructed, what authority or rule would apply?",
		basis: "LAW-FIX-01 / LAW-FIX-02 · reference-only",
		instruments: [{
			id: "LAW-FIX-01",
			title: "Synthetic Cross-Border Movement Instrument",
			type: "fixture-instrument",
			status: "reference-only",
			locator: "fixture/aws/0042/law-01"
		}, {
			id: "LAW-FIX-02",
			title: "Synthetic Protected-Passage Rule",
			type: "fixture-instrument",
			status: "reference-only",
			locator: "fixture/aws/0042/law-02"
		}],
		conclusion: "The fixture intentionally does not resolve jurisdiction. The legal layer demonstrates how MoonWitness separates evidence reconstruction from legal interpretation."
	},
	community: {
		following: 128,
		saved: 44,
		discussions: 17,
		submission: {
			id: "SUB-0042-01",
			state: "needs-context",
			title: "Possible second event trace",
			body: "Community member submitted an additional timestamp, but provenance is incomplete."
		}
	},
	repositories: [
		{
			repo: "rocksoul-legend",
			status: "online"
		},
		{
			repo: "rocksoul-event",
			status: "online"
		},
		{
			repo: "rocksoul-superhero",
			status: "degraded"
		},
		{
			repo: "rocksoul-rgbl",
			status: "online"
		},
		{
			repo: "rocksoul-aws",
			status: "online"
		}
	]
}, Cr = [
	{
		id: "N-1",
		title: "MW-0042 review changed",
		body: "Person identity remains incomplete.",
		state: "unread",
		variant: "review"
	},
	{
		id: "N-2",
		title: "New trace linked",
		body: "EVENT-0042-A received a source-linked trace.",
		state: "unread",
		variant: "case-update"
	},
	{
		id: "N-3",
		title: "RGBL source indexed",
		body: "A source fragment was indexed.",
		state: "unread",
		variant: "system"
	}
];
function Y({ activeResource: e, section: t, title: n, children: r, backendState: i = "online" }) {
	return /* @__PURE__ */ T(yn, {
		activeResource: e,
		breadcrumbs: [{ label: t }, { label: n }],
		backendState: i,
		notifications: Cr,
		children: /* @__PURE__ */ T("div", {
			className: "px-4 py-8 sm:px-8 lg:px-8",
			children: r
		})
	});
}
function wr() {
	return /* @__PURE__ */ E(Y, {
		activeResource: "dashboard",
		section: "HOME",
		title: "Dashboard",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Good morning, Rocksoul."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "What changed, what needs attention, and what can wait."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ T(K, {
						label: "Open cases",
						value: "42",
						context: "active investigations"
					}),
					/* @__PURE__ */ T(K, {
						label: "Review queue",
						value: "07",
						context: "needs context",
						tone: "warning"
					}),
					/* @__PURE__ */ T(K, {
						label: "Backend",
						value: "HEALTHY",
						context: "global service state",
						tone: "good"
					}),
					/* @__PURE__ */ T(K, {
						label: "Unread",
						value: "3",
						context: "notifications",
						tone: "critical"
					})
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-5 xl:grid-cols-[1.9fr_1fr]",
				children: [/* @__PURE__ */ E("section", {
					className: "border border-border bg-card",
					children: [/* @__PURE__ */ T("div", {
						className: "border-b border-border p-5",
						children: /* @__PURE__ */ T("h2", {
							className: "text-lg font-bold",
							children: "Recent activity"
						})
					}), [
						[
							"CASE MW-0042",
							"Person identity remains incomplete",
							"12m",
							"text-primary"
						],
						[
							"EVENT",
							"New trace linked to EVENT-0042-A",
							"43m",
							"text-success"
						],
						[
							"RGBL",
							"Source fragment indexed",
							"2h",
							"text-info"
						]
					].map(([e, t, n, r]) => /* @__PURE__ */ E("div", {
						className: "grid grid-cols-[130px_1fr_auto] gap-4 border-b border-border p-5 text-sm",
						children: [
							/* @__PURE__ */ T("span", {
								className: `mw-meta ${r}`,
								children: e
							}),
							/* @__PURE__ */ T("span", { children: t }),
							/* @__PURE__ */ T("span", {
								className: "mw-meta text-muted-foreground",
								children: n
							})
						]
					}, e))]
				}), /* @__PURE__ */ E("section", {
					className: "border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ T("h2", {
							className: "text-lg font-bold",
							children: "Attention"
						}),
						/* @__PURE__ */ E("article", {
							className: "mt-5 border border-warning bg-background p-5",
							children: [/* @__PURE__ */ T("p", {
								className: "mw-meta text-warning",
								children: "Review"
							}), /* @__PURE__ */ T("p", {
								className: "mt-3 text-sm font-bold",
								children: "7 submissions need context"
							})]
						}),
						/* @__PURE__ */ E("article", {
							className: "mt-4 border border-primary bg-background p-5",
							children: [/* @__PURE__ */ T("p", {
								className: "mw-meta text-primary",
								children: "Legal"
							}), /* @__PURE__ */ T("p", {
								className: "mt-3 text-sm font-bold",
								children: "2 disputed boundaries"
							})]
						})
					]
				})]
			})
		]
	});
}
var Tr = [
	{
		title: "INBOX",
		count: 5,
		tone: "neutral",
		id: "MW-0042",
		item: "Identity context",
		meta: "Person · blocker"
	},
	{
		title: "IN REVIEW",
		count: 3,
		tone: "info",
		id: "SUB-0042-01",
		item: "Possible second trace",
		meta: "Needs context"
	},
	{
		title: "BLOCKED",
		count: 2,
		tone: "partial",
		id: "AWS-0042",
		item: "Jurisdiction unresolved",
		meta: "Legal review"
	},
	{
		title: "DONE",
		count: 12,
		tone: "verified",
		id: "EVENT-0042-A",
		item: "Timestamp verified",
		meta: "Source linked"
	}
];
function Er({ actions: e } = {}) {
	return /* @__PURE__ */ E(Y, {
		activeResource: "kanban",
		section: "WORK",
		title: "Kanban",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Review workflow"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Move work, not evidence. Status changes are audited."
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-10 grid gap-4 xl:grid-cols-4",
				children: Tr.map((t) => /* @__PURE__ */ E("section", {
					className: "min-h-[540px] border border-border bg-panel p-4",
					children: [/* @__PURE__ */ E("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ E("h2", {
							className: "mw-meta",
							children: [
								t.title,
								" / ",
								t.count
							]
						}), /* @__PURE__ */ T(L, {
							variant: t.tone,
							children: t.count
						})]
					}), /* @__PURE__ */ E("article", {
						className: "mt-5 border border-border bg-background p-4",
						children: [
							/* @__PURE__ */ T("p", {
								className: "mw-meta text-primary",
								children: t.id
							}),
							/* @__PURE__ */ T("p", {
								className: "mt-3 text-sm font-bold",
								children: t.item
							}),
							/* @__PURE__ */ T("p", {
								className: "mw-meta mt-3 text-muted-foreground",
								children: t.meta
							}),
							/* @__PURE__ */ T(R, {
								className: "mt-4",
								size: "sm",
								variant: "ghost",
								onClick: () => void e?.onKanbanMove?.({
									itemId: t.id,
									from: t.title,
									to: t.title === "DONE" ? "DONE" : "IN REVIEW"
								}),
								children: "Move next"
							})
						]
					})]
				}, t.title))
			})
		]
	});
}
function Dr({ actions: e } = {}) {
	return /* @__PURE__ */ E(Y, {
		activeResource: "calendar",
		section: "WORK",
		title: "Calendar",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "September 2026"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Reviews, releases, and research checkpoints."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid grid-cols-7 border border-border bg-card",
				children: [[
					"MON",
					"TUE",
					"WED",
					"THU",
					"FRI",
					"SAT",
					"SUN"
				].map((e) => /* @__PURE__ */ T("div", {
					className: "border-b border-r border-border p-3 text-center mw-meta text-muted-foreground",
					children: e
				}, e)), Array.from({ length: 35 }).map((t, n) => {
					let r = n + 1;
					return /* @__PURE__ */ E("div", {
						className: "min-h-28 border-b border-r border-border p-2",
						children: [/* @__PURE__ */ T("span", {
							className: "mw-meta text-muted-foreground",
							children: r <= 30 ? r : ""
						}), r === 8 ? /* @__PURE__ */ E("div", {
							className: "mt-2 grid gap-1",
							children: [
								/* @__PURE__ */ T("button", {
									type: "button",
									className: "border-l-2 border-primary bg-panel p-2 text-left text-[10px]",
									onClick: () => void e?.onCalendarEventSelect?.({
										id: "mw-0042-review",
										title: "MW-0042 REVIEW",
										date: "2026-09-08"
									}),
									children: "MW-0042 REVIEW"
								}),
								/* @__PURE__ */ T("button", {
									type: "button",
									className: "border-l-2 border-success bg-panel p-2 text-left text-[10px]",
									onClick: () => void e?.onCalendarEventSelect?.({
										id: "source-sync",
										title: "SOURCE SYNC",
										date: "2026-09-08"
									}),
									children: "SOURCE SYNC"
								}),
								/* @__PURE__ */ T("button", {
									type: "button",
									className: "border-l-2 border-info bg-panel p-2 text-left text-[10px]",
									onClick: () => void e?.onCalendarEventSelect?.({
										id: "release-gate",
										title: "RELEASE GATE",
										date: "2026-09-08"
									}),
									children: "RELEASE GATE"
								})
							]
						}) : null]
					}, r);
				})]
			})
		]
	});
}
function Or({ actions: e } = {}) {
	let [t, n] = k("# mw-0042"), [r, i] = k("");
	return /* @__PURE__ */ E(Y, {
		activeResource: "chat",
		section: "WORK",
		title: "Chat",
		children: [/* @__PURE__ */ T("h1", {
			className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
			children: "Case conversations"
		}), /* @__PURE__ */ E("div", {
			className: "mt-8 grid min-h-[640px] gap-5 lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ E("aside", {
				className: "border border-border bg-panel p-4",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-muted-foreground",
					children: "Channels"
				}), [
					"# mw-0042",
					"# research",
					"# legal-review"
				].map((e, r) => /* @__PURE__ */ E("button", {
					type: "button",
					onClick: () => n(e),
					className: `mw-link mt-2 w-full px-3 text-left text-sm ${t === e ? "bg-card font-bold text-primary" : "text-muted-foreground"}`,
					children: [e, r === 0 ? /* @__PURE__ */ T(L, {
						variant: "info",
						children: "3"
					}) : null]
				}, e))]
			}), /* @__PURE__ */ E("section", {
				className: "flex flex-col border border-border bg-card",
				children: [
					/* @__PURE__ */ T("div", {
						className: "border-b border-border p-4",
						children: /* @__PURE__ */ T("strong", { children: t })
					}),
					/* @__PURE__ */ E("div", {
						className: "flex-1 space-y-6 p-5",
						children: [/* @__PURE__ */ E("article", { children: [/* @__PURE__ */ T("strong", {
							className: "text-sm",
							children: "Rocksoul"
						}), /* @__PURE__ */ T("p", {
							className: "mt-2 text-sm",
							children: "Identity match is still the blocker."
						})] }), /* @__PURE__ */ E("article", { children: [/* @__PURE__ */ T("strong", {
							className: "text-sm",
							children: "Mira"
						}), /* @__PURE__ */ T("p", {
							className: "mt-2 text-sm",
							children: "I linked the source fragment. Provenance is complete."
						})] })]
					}),
					/* @__PURE__ */ E("form", {
						className: "border-t border-border p-4",
						onSubmit: (n) => {
							n.preventDefault(), r.trim() && (e?.onChatSend?.({
								channel: t,
								message: r.trim()
							}), i(""));
						},
						children: [/* @__PURE__ */ T(Xt, {
							label: `Message ${t}…`,
							value: r,
							onChange: (e) => i(e.currentTarget.value),
							maxLength: 800,
							characterCount: !0,
							placeholder: `Message ${t}…`
						}), /* @__PURE__ */ T("div", {
							className: "mt-3 flex justify-end",
							children: /* @__PURE__ */ T(R, {
								type: "submit",
								disabled: !r.trim(),
								children: "Send"
							})
						})]
					})
				]
			})]
		})]
	});
}
function kr({ actions: e } = {}) {
	let [t, n] = k("");
	return /* @__PURE__ */ E(Y, {
		activeResource: "ai",
		section: "WORK",
		title: "AI Workspace",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "AI Workspace"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Ask across records. Keep citations visible. Never collapse uncertainty."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-5 xl:grid-cols-[1.35fr_.65fr]",
				children: [/* @__PURE__ */ E("section", {
					className: "flex min-h-[620px] flex-col border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ T("p", {
							className: "mw-meta text-muted-foreground",
							children: "Conversation"
						}),
						/* @__PURE__ */ E("article", {
							className: "mt-6 border-l-2 border-info pl-4",
							children: [/* @__PURE__ */ T("p", {
								className: "mw-meta text-info",
								children: "You"
							}), /* @__PURE__ */ T("p", {
								className: "mt-2 text-sm",
								children: "Why is MW-0042 still unresolved?"
							})]
						}),
						/* @__PURE__ */ E("article", {
							className: "mt-6 border-l-2 border-primary pl-4",
							children: [
								/* @__PURE__ */ T("p", {
									className: "mw-meta text-primary",
									children: "MoonWitness AI"
								}),
								/* @__PURE__ */ T("p", {
									className: "mt-2 text-sm leading-7",
									children: "Temporal and motif signals are strong, but identity remains partial."
								}),
								/* @__PURE__ */ T("p", {
									className: "mt-2 text-sm leading-7",
									children: "The legal layer also has unresolved jurisdiction."
								}),
								/* @__PURE__ */ E("div", {
									className: "mt-5 border-t border-border pt-4",
									children: [/* @__PURE__ */ T("p", {
										className: "mw-meta text-muted-foreground",
										children: "Citations"
									}), /* @__PURE__ */ T("p", {
										className: "mt-2 font-mono text-xs",
										children: "EVENT-0042-A · PERSON-0042-A · AWS-0042-A"
									})]
								}),
								/* @__PURE__ */ T("p", {
									className: "mw-meta mt-5 border-l-2 border-warning pl-3 text-warning",
									children: "Correlation supports investigation, not closure."
								})
							]
						}),
						/* @__PURE__ */ E("form", {
							className: "mt-auto border-t border-border pt-4",
							onSubmit: (r) => {
								r.preventDefault(), t.trim() && (e?.onAIAsk?.({
									caseId: "MW-0042",
									prompt: t.trim()
								}), n(""));
							},
							children: [/* @__PURE__ */ T(Xt, {
								label: "Ask with case context…",
								value: t,
								onChange: (e) => n(e.currentTarget.value),
								maxLength: 1200,
								characterCount: !0,
								placeholder: "Ask with case context…"
							}), /* @__PURE__ */ T(R, {
								className: "mt-3",
								type: "submit",
								disabled: !t.trim(),
								children: "Ask"
							})]
						})
					]
				}), /* @__PURE__ */ E("aside", {
					className: "border border-border bg-panel p-5",
					children: [/* @__PURE__ */ T("p", {
						className: "mw-meta text-muted-foreground",
						children: "Context"
					}), /* @__PURE__ */ E("dl", {
						className: "mt-5 grid gap-5 text-sm",
						children: [
							/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Case"
							}), /* @__PURE__ */ T("dd", {
								className: "mt-2 font-bold",
								children: "MW-0042 / The Silent Flight"
							})] }),
							/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Sources"
							}), /* @__PURE__ */ T("dd", {
								className: "mt-2",
								children: "4 canonical records"
							})] }),
							/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Legal"
							}), /* @__PURE__ */ T("dd", {
								className: "mt-2",
								children: "2 legal instruments"
							})] }),
							/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Community"
							}), /* @__PURE__ */ T("dd", {
								className: "mt-2",
								children: "17 discussions"
							})] })
						]
					})]
				})]
			})
		]
	});
}
var Ar = {
	case: "READ / WRITE",
	event: "READ / WRITE",
	person: "READ / REVIEW",
	rgbl: "READ / WRITE",
	aws: "REVIEWER+",
	perspective: "READ / ANALYZE",
	correlation: "READ / ANALYZE"
};
function jr() {
	return /* @__PURE__ */ E(Y, {
		activeResource: "resources",
		section: "DATA",
		title: "Resources",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Resource navigation"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "AutoMenu-driven. Routes are generated from resource descriptors and permissions."
			}),
			/* @__PURE__ */ E("section", {
				className: "mt-8 border border-border bg-card p-5",
				children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-primary",
					children: "Auto Menu"
				}), /* @__PURE__ */ T("div", {
					className: "mt-5 overflow-x-auto",
					children: /* @__PURE__ */ E("table", {
						className: "w-full min-w-[680px] border-collapse text-left",
						children: [/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ T("tr", {
							className: "border-b border-border",
							children: [
								"Resource",
								"Route",
								"Repository",
								"Access"
							].map((e) => /* @__PURE__ */ T("th", {
								className: "p-3 mw-meta text-muted-foreground",
								children: e
							}, e))
						}) }), /* @__PURE__ */ T("tbody", { children: ln.map((e) => /* @__PURE__ */ E("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ T("th", {
									className: "p-4 text-sm",
									children: e.label
								}),
								/* @__PURE__ */ T("td", {
									className: "p-4 font-mono text-xs",
									children: e.path
								}),
								/* @__PURE__ */ T("td", {
									className: "p-4 font-mono text-xs text-muted-foreground",
									children: e.repo
								}),
								/* @__PURE__ */ T("td", {
									className: "p-4",
									children: /* @__PURE__ */ T(L, {
										variant: e.resource === "aws" ? "partial" : e.resource === "correlation" || e.resource === "perspective" ? "info" : "verified",
										children: Ar[e.resource]
									})
								})
							]
						}, e.resource)) })]
					})
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-6 border-l-2 border-primary pl-4 text-muted-foreground",
				children: "RULE / If a resource is registered and allowed, AutoMenu exposes it. No hand-maintained duplicate nav."
			})
		]
	});
}
function Mr({ actions: e } = {}) {
	let [t, n] = k("Profile"), [r, i] = k("Rocksoul");
	return /* @__PURE__ */ E(Y, {
		activeResource: "settings",
		section: "ACCOUNT",
		title: "Profile / Settings",
		children: [/* @__PURE__ */ T("h1", {
			className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
			children: "Profile & Settings"
		}), /* @__PURE__ */ E("div", {
			className: "mt-8 grid gap-5 lg:grid-cols-[330px_1fr]",
			children: [/* @__PURE__ */ E("aside", {
				className: "border border-border bg-card p-6",
				children: [/* @__PURE__ */ E("div", {
					className: "flex items-center gap-4 border-b border-border pb-6",
					children: [/* @__PURE__ */ T("span", {
						className: "flex size-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground",
						children: "RS"
					}), /* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("strong", { children: "Rocksoul" }), /* @__PURE__ */ T("p", {
						className: "mw-meta mt-1 text-muted-foreground",
						children: "researcher"
					})] })]
				}), /* @__PURE__ */ T("nav", {
					className: "mt-5 grid",
					children: [
						"Profile",
						"Appearance",
						"Notifications",
						"Security",
						"API / Integrations"
					].map((e) => /* @__PURE__ */ T("button", {
						type: "button",
						onClick: () => n(e),
						className: `mw-link w-full px-3 text-left text-sm ${t === e ? "font-bold text-primary" : "text-muted-foreground"}`,
						children: e
					}, e))
				})]
			}), /* @__PURE__ */ E("section", {
				className: "border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ T("h2", {
						className: "text-xl font-bold",
						children: t
					}),
					t === "Profile" ? /* @__PURE__ */ E("div", {
						className: "mt-6 grid max-w-xl gap-5",
						children: [
							/* @__PURE__ */ T(z, {
								label: "Display name",
								value: r,
								onChange: (e) => i(e.currentTarget.value)
							}),
							/* @__PURE__ */ T(z, {
								label: "Role",
								readOnly: !0,
								value: "researcher"
							}),
							/* @__PURE__ */ T(R, {
								onClick: () => void e?.onSaveProfile?.({ displayName: r }),
								children: "Save profile"
							})
						]
					}) : null,
					t === "Appearance" ? /* @__PURE__ */ E("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ T("p", {
							className: "mw-meta text-muted-foreground",
							children: "Theme / Light · Dark · System"
						}), /* @__PURE__ */ T("div", {
							className: "mt-4",
							children: /* @__PURE__ */ T(B, {})
						})]
					}) : null,
					t === "Notifications" ? /* @__PURE__ */ E("div", {
						className: "mt-6 max-w-xl",
						children: [/* @__PURE__ */ T(en, {
							label: "Case updates",
							defaultChecked: !0
						}), /* @__PURE__ */ T(en, {
							label: "Mentions and review assignments",
							defaultChecked: !0
						})]
					}) : null,
					t === "Security" ? /* @__PURE__ */ E("div", {
						className: "mt-6 grid max-w-xl gap-4",
						children: [/* @__PURE__ */ T(z, {
							label: "Current session",
							readOnly: !0,
							value: "Current browser / fixture"
						}), /* @__PURE__ */ T(R, {
							variant: "danger",
							onClick: () => void e?.onSignOutOtherSessions?.(),
							children: "Sign out other sessions"
						})]
					}) : null,
					t === "API / Integrations" ? /* @__PURE__ */ E("div", {
						className: "mt-6 grid max-w-xl gap-4",
						children: [/* @__PURE__ */ T(q, { state: "empty" }), /* @__PURE__ */ T(R, {
							variant: "secondary",
							onClick: () => void e?.onAddIntegration?.(),
							children: "Add integration"
						})]
					}) : null
				]
			})]
		})]
	});
}
function Nr({ actions: e } = {}) {
	return /* @__PURE__ */ E(Y, {
		activeResource: "settings",
		section: "SECURITY",
		title: "Authorization UX",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Authorization UX"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Permissions are explained before actions fail."
			}),
			/* @__PURE__ */ E("section", {
				className: "mt-8 border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ T("h2", {
						className: "text-lg font-bold",
						children: "Role: Researcher"
					}),
					/* @__PURE__ */ T("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Can inspect and review evidence. Cannot publish legal decisions."
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-8 grid gap-8 xl:grid-cols-[1.1fr_.7fr]",
						children: [/* @__PURE__ */ E("div", {
							className: "grid",
							children: [/* @__PURE__ */ E("div", {
								className: "grid grid-cols-[1fr_180px] border-b border-border py-3 mw-meta text-muted-foreground",
								children: [/* @__PURE__ */ T("span", { children: "Capability" }), /* @__PURE__ */ T("span", { children: "Access" })]
							}), [
								[
									"View canonical records",
									"ALLOWED",
									"verified"
								],
								[
									"Request context",
									"ALLOWED",
									"verified"
								],
								[
									"Resolve identity blocker",
									"REQUIRES EVIDENCE",
									"partial"
								],
								[
									"Publish legal conclusion",
									"LEGAL REVIEWER+",
									"prohibited"
								]
							].map(([e, t, n]) => /* @__PURE__ */ E("div", {
								className: "grid grid-cols-[1fr_180px] items-center border-b border-border py-4 text-sm",
								children: [/* @__PURE__ */ T("span", { children: e }), /* @__PURE__ */ T(L, {
									variant: n,
									children: t
								})]
							}, e))]
						}), /* @__PURE__ */ E("div", {
							className: "border border-primary bg-background p-6",
							children: [
								/* @__PURE__ */ T("p", {
									className: "mw-meta text-primary",
									children: "Action blocked"
								}),
								/* @__PURE__ */ T("h3", {
									className: "mt-4 text-lg font-bold",
									children: "You can’t publish this decision."
								}),
								/* @__PURE__ */ T("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "Legal Reviewer or Admin is required."
								}),
								/* @__PURE__ */ T(R, {
									className: "mt-6",
									variant: "danger",
									onClick: () => void e?.onRequestAccess?.({
										permission: "legal:publish",
										currentRole: "researcher"
									}),
									children: "Request access"
								})
							]
						})]
					})
				]
			})
		]
	});
}
function Pr() {
	return /* @__PURE__ */ E(Y, {
		activeResource: "dashboard",
		section: "SYSTEM",
		title: "System States",
		backendState: "offline",
		children: [
			/* @__PURE__ */ T("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Error / Empty / Loading / Offline / Forbidden"
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "One recovery language across every resource."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-5",
				children: [
					/* @__PURE__ */ T(q, {
						state: "error",
						traceId: "TRACE-0042-QUERY"
					}),
					/* @__PURE__ */ T(q, { state: "empty" }),
					/* @__PURE__ */ T(q, { state: "loading" }),
					/* @__PURE__ */ T(q, {
						state: "offline",
						lastKnownState: "42 cases cached at 05:32"
					}),
					/* @__PURE__ */ T(q, {
						state: "forbidden",
						requiredPermission: "legal:publish",
						currentRole: "researcher"
					})
				]
			})
		]
	});
}
function Fr() {
	return /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(wr, {}), /* @__PURE__ */ T(_n, {
		open: !0,
		onClose: () => void 0,
		resources: V,
		permissions: H
	})] });
}
function Ir() {
	return /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(wr, {}), /* @__PURE__ */ T(mn, {
		open: !0,
		onClose: () => void 0,
		notifications: Cr
	})] });
}
var X = {
	schemaVersion: 1,
	domain: "LAW",
	repository: "rocksoul-aws",
	principle: "LEGAL TEXT ≠ APPLICABLE LAW",
	legalResultStates: [
		{
			id: "permitted",
			label: "PERMITTED",
			meaning: "The reviewed rule permits the conduct within the established scope."
		},
		{
			id: "restricted",
			label: "RESTRICTED",
			meaning: "The reviewed rule permits the conduct only subject to conditions or limits."
		},
		{
			id: "prohibited",
			label: "PROHIBITED",
			meaning: "The reviewed rule prohibits the conduct within the established scope."
		},
		{
			id: "disputed",
			label: "DISPUTED",
			meaning: "Competing legal positions remain materially unresolved."
		},
		{
			id: "unresolved",
			label: "UNRESOLVED",
			meaning: "The record is insufficient for a reviewed legal result."
		}
	],
	applicabilityAxes: [
		{
			id: "temporal",
			label: "Temporal",
			question: "Was the instrument or rule in force at the relevant time?"
		},
		{
			id: "territorial",
			label: "Territorial",
			question: "Did the rule extend to the relevant place, conduct, forum, or effects?"
		},
		{
			id: "personal",
			label: "Personal",
			question: "Was the actor, entity, State, organization, vessel, or protected class within scope?"
		},
		{
			id: "subject-matter",
			label: "Subject-matter",
			question: "Did the rule govern the type of conduct, object, offense, right, or obligation at issue?"
		}
	],
	reviewPipeline: [
		{
			id: "source",
			label: "SOURCE",
			description: "Acquire official or attributable legal text with provenance."
		},
		{
			id: "authority",
			label: "AUTHORITY",
			description: "Establish hierarchy, status, jurisdiction, and binding or persuasive weight."
		},
		{
			id: "applicability",
			label: "APPLICABILITY",
			description: "Evaluate temporal, territorial, personal, and subject-matter scope."
		},
		{
			id: "claims",
			label: "COMPETING CLAIMS",
			description: "Preserve exceptions, defenses, conflicts, interpretations, and uncertainty."
		},
		{
			id: "review",
			label: "HUMAN REVIEW",
			description: "Approve an explainable result without bypassing evidence or provenance."
		}
	],
	guardrails: [
		"legal text presence does not establish applicability",
		"authority does not imply universal scope",
		"source discovery does not produce an automatic verdict",
		"observability is operational metadata, not legal evidence",
		"reviewed legal analysis remains distinct from Mizan and evidence reconstruction"
	]
}, Lr = X, Rr = X.legalResultStates, zr = X.applicabilityAxes, Br = X.reviewPipeline, Vr = X.guardrails;
function Hr(e) {
	return X.legalResultStates.find((t) => t.id === e);
}
function Ur(e) {
	return X.applicabilityAxes.find((t) => t.id === e);
}
//#endregion
//#region src/components/legal-applicability-matrix.tsx
var Wr = {
	supported: "verified",
	"not-supported": "restricted",
	disputed: "disputed",
	unresolved: "unresolved"
}, Gr = {
	permitted: "verified",
	restricted: "restricted",
	prohibited: "prohibited",
	disputed: "disputed",
	unresolved: "unresolved"
};
function Kr(e, t) {
	return e.find((e) => e.axisId === t) ?? {
		axisId: t,
		state: "unresolved",
		basis: "Not assessed."
	};
}
function qr({ assessments: t = [], className: n, title: r = "Legal applicability matrix", description: i = "Applicability is assessed across independent temporal, territorial, personal, and subject-matter axes. Axis state is not itself a legal verdict.", showVocabulary: a = !0, showPipeline: o = !0 }) {
	let s = O(), c = O();
	return /* @__PURE__ */ E("section", {
		className: e("border border-primary bg-card p-5", n),
		"aria-labelledby": s,
		"aria-describedby": c,
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4",
				children: [/* @__PURE__ */ E("div", { children: [
					/* @__PURE__ */ T("p", {
						className: "mw-eyebrow text-primary",
						children: "LAW / applicability"
					}),
					/* @__PURE__ */ T("h3", {
						id: s,
						className: "mw-display mt-2 text-2xl font-black uppercase",
						children: r
					}),
					/* @__PURE__ */ T("p", {
						id: c,
						className: "mt-2 max-w-3xl text-sm leading-6 text-muted-foreground",
						children: i
					})
				] }), /* @__PURE__ */ T(L, {
					variant: "unresolved",
					children: Lr.principle
				})]
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-5 grid gap-3 md:grid-cols-2",
				role: "list",
				"aria-label": "Applicability axes",
				children: zr.map((e) => {
					let n = Kr(t, e.id);
					return /* @__PURE__ */ E("article", {
						role: "listitem",
						className: "border border-border bg-background p-4",
						"data-axis": e.id,
						children: [
							/* @__PURE__ */ E("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
									className: "mw-meta text-primary",
									children: e.id
								}), /* @__PURE__ */ T("h4", {
									className: "mt-1 font-bold text-foreground",
									children: e.label
								})] }), /* @__PURE__ */ T(L, {
									variant: Wr[n.state],
									children: n.state
								})]
							}),
							/* @__PURE__ */ T("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: e.question
							}),
							/* @__PURE__ */ E("div", {
								className: "mt-4 border-t border-border pt-3",
								children: [
									/* @__PURE__ */ T("p", {
										className: "mw-meta text-muted-foreground",
										children: "Basis"
									}),
									/* @__PURE__ */ T("p", {
										className: "mt-1 text-sm text-foreground",
										children: n.basis ?? "Not assessed."
									}),
									n.sourceRefs?.length ? /* @__PURE__ */ E("p", {
										className: "mt-2 font-mono text-[11px] text-muted-foreground",
										children: ["Sources: ", n.sourceRefs.join(" · ")]
									}) : null
								]
							})
						]
					}, e.id);
				})
			}),
			a ? /* @__PURE__ */ E("div", {
				className: "mt-5 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ T("p", {
						className: "mw-meta text-muted-foreground",
						children: "Reviewed result vocabulary"
					}),
					/* @__PURE__ */ T("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: Rr.map((e) => /* @__PURE__ */ T(L, {
							variant: Gr[e.id] ?? "neutral",
							children: e.label
						}, e.id))
					}),
					/* @__PURE__ */ T("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: "Result vocabulary is available only after source, authority, applicability, competing claims, and review remain inspectable."
					})
				]
			}) : null,
			o ? /* @__PURE__ */ T("ol", {
				className: "mt-5 grid gap-2 border-t border-border pt-4 lg:grid-cols-5",
				"aria-label": "Legal review pipeline",
				children: Br.map((e, t) => /* @__PURE__ */ E("li", {
					className: "relative border border-border bg-background p-3",
					children: [
						/* @__PURE__ */ T("p", {
							className: "mw-meta text-primary",
							children: String(t + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ T("strong", {
							className: "mt-1 block text-xs text-foreground",
							children: e.label
						}),
						/* @__PURE__ */ T("p", {
							className: "mt-2 text-[11px] leading-5 text-muted-foreground",
							children: e.description
						})
					]
				}, e.id))
			}) : null,
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-5 border-t border-border pt-4 text-muted-foreground",
				children: "Text equivalent: every axis, state, basis, source reference, review stage, and guardrail remains live text."
			})
		]
	});
}
//#endregion
//#region src/screens/aws-legal.tsx
function Jr() {
	return /* @__PURE__ */ E("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ T("div", { className: "h-0.5 flex-1 bg-primary" }),
					/* @__PURE__ */ T("span", {
						className: "mw-eyebrow text-primary",
						children: "12 / The boundary"
					}),
					/* @__PURE__ */ T("div", { className: "h-0.5 flex-1 bg-primary" })
				]
			}),
			/* @__PURE__ */ T("h2", {
				className: "mw-display mt-8 text-5xl font-black uppercase sm:text-7xl",
				children: "Cool. Now the law gets involved."
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-reading mt-5 text-base leading-7 text-muted-foreground",
				children: "Evidence asks what happened. Law asks what rule would apply. Those are different layers and must stay visually separate."
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-8",
				children: /* @__PURE__ */ T(qr, {})
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ T(Jn, { ...J.legal }), /* @__PURE__ */ E("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ T(W, {
						variant: "legal-instrument",
						sourceId: "LAW-FIX-01",
						title: "Synthetic Cross-Border Movement Instrument",
						excerpt: "Reference-only fixture. It exists to prove legal source presentation, not to assert real law.",
						citation: "LAW-FIX-01",
						provenance: "fixture/aws/0042/law-01",
						verification: "reference-only"
					}), /* @__PURE__ */ T(Cn, {
						code: "LAW-FIX-02",
						source: "Synthetic Protected-Passage Rule",
						locator: "fixture/aws/0042/law-02",
						variant: "legal"
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/screens/community.tsx
function Yr() {
	return /* @__PURE__ */ E("div", {
		className: "bg-background text-foreground",
		children: [/* @__PURE__ */ T(bn, {
			caseId: J.caseId,
			surface: "community"
		}), /* @__PURE__ */ E("main", {
			className: "mw-shell-wide py-12",
			children: [/* @__PURE__ */ T(In, {
				caseId: J.caseId,
				eyebrow: "13 / Community / MW-0042",
				title: J.title,
				summary: "Ask, follow, save, and submit context without mutating canonical evidence.",
				status: J.status,
				variant: "community",
				actions: /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(C, {
					variant: "secondary",
					children: "Follow"
				}), /* @__PURE__ */ T(C, {
					variant: "ghost",
					children: "Save"
				})] })
			}), /* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-[1.4fr_.7fr]",
				children: [/* @__PURE__ */ T(pr, {
					question: "If the person match is partial, why is the overall correlation still high?",
					moderatorNote: "Temporal and source-independence dimensions are strong. Identity remains a blocking uncertainty and is shown separately.",
					submission: J.community.submission
				}), /* @__PURE__ */ E("aside", {
					className: "grid content-start gap-4",
					children: [/* @__PURE__ */ E("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ T(K, {
								label: "Following",
								value: String(J.community.following),
								context: "members"
							}),
							/* @__PURE__ */ T(K, {
								label: "Saved",
								value: String(J.community.saved),
								context: "case saves"
							}),
							/* @__PURE__ */ T(K, {
								label: "Discussion",
								value: String(J.community.discussions),
								context: "threads"
							})
						]
					}), /* @__PURE__ */ T("p", {
						className: "mw-meta border border-warning p-4 text-warning",
						children: "Community submission ≠ canonical evidence. Provenance must survive review first."
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/screens/correlation.tsx
function Xr() {
	return /* @__PURE__ */ E("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "11 / MW-0042 / Correlation"
			}),
			/* @__PURE__ */ T("h2", {
				className: "mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
				children: "The trails are starting to line up."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-5 text-lg text-muted-foreground",
				children: "That still doesn’t make them the same thing."
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ T(Hn, {
					records: J.records,
					score: J.correlation.score
				}), /* @__PURE__ */ T(Ln, { ...J.correlation })]
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-5 text-sm font-semibold text-warning",
				children: "Identity remains incomplete. Case stays open."
			})
		]
	});
}
//#endregion
//#region src/components/compat/tabs.tsx
function Zr({ items: t, variant: n = "underline" }) {
	let r = t.find((e) => !e.disabled)?.id ?? "", [i, a] = k(r), o = t.some((e) => e.id === i && !e.disabled) ? i : r;
	return /* @__PURE__ */ E(Se, {
		value: o,
		onValueChange: a,
		children: [/* @__PURE__ */ T(we, {
			"aria-label": "Sections",
			variant: "line",
			className: "h-auto flex-wrap border-b border-border",
			children: t.map((t) => /* @__PURE__ */ T(Te, {
				value: t.id,
				disabled: t.disabled,
				className: e("mw-touch px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em]", n === "archive" ? "data-[state=active]:bg-panel" : "data-[state=active]:border-b-2 data-[state=active]:border-primary"),
				children: t.label
			}, t.id))
		}), t.map((e) => /* @__PURE__ */ T(Ce, {
			value: e.id,
			forceMount: !0,
			hidden: e.id !== o,
			className: "pt-4",
			children: e.content
		}, e.id))]
	});
}
//#endregion
//#region src/screens/design-system.tsx
var Qr = [
	["Crimson", "bg-primary"],
	["Supported", "bg-success"],
	["Partial", "bg-warning"],
	["Unresolved", "bg-unresolved"],
	["Info", "bg-info"],
	["RGBL Red", "bg-rgbl-red"],
	["RGBL Green", "bg-rgbl-green"],
	["RGBL Blue", "bg-rgbl-blue"],
	["RGBL Light", "bg-rgbl-light"]
];
function $r() {
	let [e, t] = k(!1);
	return /* @__PURE__ */ E("section", {
		className: "mw-shell-wide py-12",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "16 / Design system"
			}),
			/* @__PURE__ */ T("h1", {
				className: "mw-display mt-4 text-5xl font-black uppercase sm:text-7xl",
				children: "Rocksoul UI / MoonWitness grammar."
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-reading mt-5 text-base leading-7 text-muted-foreground",
				children: "Tokens, primitives, states, research patterns, and operational surfaces stay traceable to rocksoul-assets."
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ T("h2", {
					className: "text-2xl font-bold",
					children: "Color semantics"
				}), /* @__PURE__ */ T("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
					children: Qr.map(([e, t]) => /* @__PURE__ */ E("div", {
						className: "border border-border bg-card p-3",
						children: [/* @__PURE__ */ T("div", { className: `h-20 ${t}` }), /* @__PURE__ */ T("p", {
							className: "mw-meta mt-3",
							children: e
						})]
					}, e))
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ T("h2", {
					className: "text-2xl font-bold",
					children: "Typography"
				}), /* @__PURE__ */ E("div", {
					className: "mt-6 grid gap-5",
					children: [
						/* @__PURE__ */ T("p", {
							className: "mw-display text-6xl font-black uppercase",
							children: "Inter Tight / Display"
						}),
						/* @__PURE__ */ T("p", {
							className: "text-lg",
							children: "Inter / readable body. Evidence should never lose readability to style."
						}),
						/* @__PURE__ */ T("p", {
							className: "mw-eyebrow",
							children: "IBM Plex Mono / archive metadata / 0.16em"
						})
					]
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ T("h2", {
						className: "text-2xl font-bold",
						children: "Primitive states"
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ T(R, { children: "Primary" }),
							/* @__PURE__ */ T(R, {
								variant: "secondary",
								children: "Secondary"
							}),
							/* @__PURE__ */ T(R, {
								variant: "ghost",
								children: "Ghost"
							}),
							/* @__PURE__ */ T(R, {
								variant: "danger",
								children: "Danger"
							}),
							/* @__PURE__ */ T(R, {
								loading: !0,
								children: "Loading"
							}),
							/* @__PURE__ */ T(R, {
								disabled: !0,
								children: "Disabled"
							})
						]
					}),
					/* @__PURE__ */ T("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							"supported",
							"verified",
							"contested",
							"partial",
							"unresolved",
							"restricted",
							"prohibited",
							"info",
							"neutral"
						].map((e) => /* @__PURE__ */ T(L, {
							variant: e,
							children: e
						}, e))
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-8 grid gap-5 lg:grid-cols-2",
						children: [/* @__PURE__ */ E("div", {
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ T(z, {
									label: "Input",
									placeholder: "Source ID"
								}),
								/* @__PURE__ */ T(z, {
									label: "Error",
									error: "Source locator is required."
								}),
								/* @__PURE__ */ T(Xt, {
									label: "Textarea",
									maxLength: 120,
									characterCount: !0,
									defaultValue: "Not enough yet."
								}),
								/* @__PURE__ */ T(Zt, {
									label: "Select",
									options: [{
										label: "Supported",
										value: "supported"
									}, {
										label: "Unresolved",
										value: "unresolved"
									}]
								})
							]
						}), /* @__PURE__ */ E("div", { children: [
							/* @__PURE__ */ T(Qt, {
								label: "Checkbox",
								description: "Labels activate the control.",
								defaultChecked: !0
							}),
							/* @__PURE__ */ T($t, {
								name: "demo-radio",
								label: "Radio A",
								defaultChecked: !0
							}),
							/* @__PURE__ */ T($t, {
								name: "demo-radio",
								label: "Radio B"
							}),
							/* @__PURE__ */ T(en, {
								label: "Switch",
								description: "Binary states only.",
								defaultChecked: !0
							}),
							/* @__PURE__ */ T(R, {
								className: "mt-5",
								variant: "secondary",
								onClick: () => t(!0),
								children: "Open dialog"
							})
						] })]
					}),
					/* @__PURE__ */ T(Pt, {
						open: e,
						title: "Accessible dialog",
						onClose: () => t(!1),
						children: /* @__PURE__ */ T("p", {
							className: "text-sm leading-6 text-muted-foreground",
							children: "Native modal behavior, Escape close, and focus restoration are part of the contract."
						})
					})
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ T("h2", {
					className: "text-2xl font-bold",
					children: "Research components"
				}), /* @__PURE__ */ E("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ T(Sn, {
							domain: "PERSON",
							recordId: "PERSON-0042-A",
							repo: "rocksoul-superhero",
							claim: "Identity match is incomplete.",
							provenance: "SRC-PERSON-0042-A",
							verification: "partial",
							status: "partial",
							canonical: !1,
							flagged: !0
						}),
						/* @__PURE__ */ T(W, {
							sourceId: "SRC-STORY-0042-A",
							title: "A route nobody remembers taking",
							excerpt: "Synthetic source block used for component review.",
							citation: "STORY-0042-A",
							provenance: "fixture/story/0042/a",
							verification: "source-linked"
						}),
						/* @__PURE__ */ T(Cn, {
							code: "SRC-EVENT-0042-A",
							source: "Synthetic event log",
							locator: "fixture/event/0042/a",
							variant: "block"
						}),
						/* @__PURE__ */ T(En, {
							id: "SUB-0042-01",
							state: "needs-context",
							title: "Possible second event trace",
							body: "Provenance incomplete — not canonical evidence."
						})
					]
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ T("h2", {
						className: "text-2xl font-bold",
						children: "System patterns"
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-6 grid gap-4 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ T(q, { state: "empty" }),
							/* @__PURE__ */ T(q, { state: "loading" }),
							/* @__PURE__ */ T(q, { state: "error" })
						]
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-6 grid gap-3",
						children: [/* @__PURE__ */ T(Lt, { variant: "text" }), /* @__PURE__ */ T(Lt, { variant: "table-row" })]
					})
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ E("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ E("div", { children: [
						/* @__PURE__ */ T("p", {
							className: "mw-eyebrow text-warning",
							children: "Visual language / stable v1.3"
						}),
						/* @__PURE__ */ E("h2", {
							className: "mt-2 text-2xl font-bold",
							children: [
								h.packCount,
								" packs / ",
								h.canonicalAssetCount,
								" canonical assets"
							]
						}),
						/* @__PURE__ */ T("p", {
							className: "mt-2 max-w-3xl text-sm leading-6 text-muted-foreground",
							children: "Released upstream visual language. The registry, runtime motion, and developer distribution are now stable UI contracts."
						})
					] }), /* @__PURE__ */ E(L, {
						variant: "verified",
						children: ["STABLE · ", h.commit.slice(0, 8)]
					})]
				}), /* @__PURE__ */ T("div", {
					className: "mt-6",
					children: /* @__PURE__ */ T(Vt, {
						initialCategory: "Investigation",
						limit: 6,
						compact: !0
					})
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ T("h2", {
						className: "text-2xl font-bold",
						children: "Tabs / compact platform rows"
					}),
					/* @__PURE__ */ T("div", {
						className: "mt-5",
						children: /* @__PURE__ */ T(Zr, { items: [
							{
								id: "evidence",
								label: "Evidence",
								content: /* @__PURE__ */ T("p", {
									className: "text-sm",
									children: "Evidence remains independently inspectable."
								})
							},
							{
								id: "correlation",
								label: "Correlation",
								content: /* @__PURE__ */ T("p", {
									className: "text-sm",
									children: "Score never hides its explanation."
								})
							},
							{
								id: "legal",
								label: "Legal",
								content: /* @__PURE__ */ T("p", {
									className: "text-sm",
									children: "Source law and review stay distinct."
								})
							}
						] })
					}),
					/* @__PURE__ */ T(It, {}),
					/* @__PURE__ */ E("div", {
						className: "mw-platform mt-6 border border-border bg-background p-4 text-foreground",
						children: [
							/* @__PURE__ */ T(On, {
								repo: "rocksoul-superhero",
								status: "degraded",
								queue: 1
							}),
							/* @__PURE__ */ T(G, {
								timestamp: "05:31",
								actor: "reviewer",
								action: "context.requested",
								resource: "SUB-0042-01",
								result: "pending",
								traceId: "TRACE-0042-B"
							}),
							/* @__PURE__ */ T("div", {
								className: "mt-4",
								children: /* @__PURE__ */ T(K, {
									label: "Blockers",
									value: "2",
									context: "stay visible",
									tone: "warning"
								})
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/screens/domain-screens.tsx
var ei = {
	STORY: {
		number: "05",
		kicker: "Narrative record",
		statement: "What was told is a record. It is not automatically what happened."
	},
	EVENT: {
		number: "06",
		kicker: "Temporal record",
		statement: "Time makes a claim inspectable. It does not make identity automatic."
	},
	PERSON: {
		number: "07",
		kicker: "Identity record",
		statement: "Partial identity stays partial. The interface must resist completion by aesthetics."
	},
	RGBL: {
		number: "08",
		kicker: "Source-text record",
		statement: "Text can preserve a motif without proving a causal bridge."
	},
	AWS: {
		number: "09",
		kicker: "Legal boundary",
		statement: "Evidence reconstruction ends here. Legal interpretation starts after the line."
	}
};
function ti({ domain: e }) {
	if (e === "EVENT") {
		let e = J.recordDetails.EVENT.temporal;
		return /* @__PURE__ */ E("section", {
			className: "border border-rgbl-green bg-card p-5",
			"aria-labelledby": "event-window-heading",
			children: [
				/* @__PURE__ */ T("p", {
					className: "mw-meta text-rgbl-green-fg",
					children: "Temporal window / fixture"
				}),
				/* @__PURE__ */ T("h3", {
					id: "event-window-heading",
					className: "mt-3 text-lg font-bold",
					children: "Movement sits inside a bounded interval."
				}),
				/* @__PURE__ */ E("dl", {
					className: "mt-5 grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ E("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Start"
							}), /* @__PURE__ */ T("dd", {
								className: "mw-display mt-2 text-3xl font-black",
								children: e.start
							})]
						}),
						/* @__PURE__ */ E("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "End"
							}), /* @__PURE__ */ T("dd", {
								className: "mw-display mt-2 text-3xl font-black",
								children: e.end
							})]
						}),
						/* @__PURE__ */ E("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Timezone"
							}), /* @__PURE__ */ T("dd", {
								className: "mt-3 font-mono text-[10px] font-bold uppercase",
								children: e.timezone
							})]
						})
					]
				})
			]
		});
	}
	if (e === "PERSON") {
		let e = J.recordDetails.PERSON.matchDimensions, t = [
			["Role", e.role],
			["Movement", e.movement],
			["Identity", e.identity]
		];
		return /* @__PURE__ */ E("section", {
			className: "border border-warning bg-card p-5",
			"aria-labelledby": "identity-match-heading",
			children: [
				/* @__PURE__ */ T("p", {
					className: "mw-meta text-warning",
					children: "Identity dimensions / partial"
				}),
				/* @__PURE__ */ T("h3", {
					id: "identity-match-heading",
					className: "mt-3 text-lg font-bold",
					children: "Two attributes line up. Identity does not."
				}),
				/* @__PURE__ */ T("dl", {
					className: "mt-5 grid gap-2",
					children: t.map(([e, t]) => /* @__PURE__ */ E("div", {
						className: "flex items-center justify-between border-b border-border py-3",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-muted-foreground",
							children: e
						}), /* @__PURE__ */ T("dd", { children: /* @__PURE__ */ T(L, {
							variant: t ? "supported" : "partial",
							children: t ? "MATCH" : "NOT VERIFIED"
						}) })]
					}, e))
				}),
				/* @__PURE__ */ T("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Identity remains a closure blocker even when role and movement align."
				})
			]
		});
	}
	if (e === "RGBL") {
		let e = J.recordDetails.RGBL.channels, t = [
			[
				"RED",
				e.red,
				"border-rgbl-red text-rgbl-red-fg"
			],
			[
				"GREEN",
				e.green,
				"border-rgbl-green text-rgbl-green-fg"
			],
			[
				"BLUE",
				e.blue,
				"border-rgbl-blue text-rgbl-blue-fg"
			],
			[
				"LIGHT",
				e.light,
				"border-rgbl-light text-rgbl-light-fg"
			]
		];
		return /* @__PURE__ */ E("section", {
			className: "border border-border bg-card p-5",
			"aria-labelledby": "rgbl-channel-heading",
			children: [
				/* @__PURE__ */ T("p", {
					className: "mw-meta text-rgbl-blue-fg",
					children: "RGBL channels / semantic source reading"
				}),
				/* @__PURE__ */ T("h3", {
					id: "rgbl-channel-heading",
					className: "mt-3 text-lg font-bold",
					children: "Four channels preserve different parts of the motif."
				}),
				/* @__PURE__ */ T("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: t.map(([e, t, n]) => /* @__PURE__ */ E("div", {
						className: `border-l-2 bg-background p-4 ${n}`,
						children: [/* @__PURE__ */ T("p", {
							className: "mw-meta",
							children: e
						}), /* @__PURE__ */ T("p", {
							className: "mt-2 text-sm font-semibold text-foreground",
							children: t
						})]
					}, e))
				}),
				/* @__PURE__ */ T("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Semantic relation is visible. Causal relation is not asserted."
				})
			]
		});
	}
	return /* @__PURE__ */ E("section", {
		className: "border border-border bg-card p-5",
		children: [/* @__PURE__ */ T("p", {
			className: "mw-meta text-rgbl-red-fg",
			children: "Narrative provenance"
		}), /* @__PURE__ */ E("dl", {
			className: "mt-4 grid gap-2 text-sm",
			children: [
				/* @__PURE__ */ E("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ T("dt", {
						className: "text-muted-foreground",
						children: "Type"
					}), /* @__PURE__ */ T("dd", { children: J.recordDetails.STORY.sourceType })]
				}),
				/* @__PURE__ */ E("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ T("dt", {
						className: "text-muted-foreground",
						children: "Locator"
					}), /* @__PURE__ */ T("dd", { children: J.recordDetails.STORY.locator })]
				}),
				/* @__PURE__ */ E("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ T("dt", {
						className: "text-muted-foreground",
						children: "Independent"
					}), /* @__PURE__ */ T("dd", { children: "YES" })]
				})
			]
		})]
	});
}
function Z({ domain: e }) {
	let t = ei[e];
	if (e === "AWS") return /* @__PURE__ */ E("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ E("p", {
				className: "mw-eyebrow text-primary",
				children: [t.number, " / AWS"]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-3 text-muted-foreground",
				children: t.kicker
			}),
			/* @__PURE__ */ T("h2", {
				className: "mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
				children: "THE BOUNDARY QUESTION."
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-reading mt-6 text-lg leading-8 text-muted-foreground",
				children: t.statement
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-10",
				children: /* @__PURE__ */ T(Pn, {
					legalState: J.legal.status,
					children: /* @__PURE__ */ T("p", {
						className: "text-sm font-semibold",
						children: "Cool. Now the law gets involved."
					})
				})
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[.8fr_1.2fr]",
				children: [/* @__PURE__ */ T(Jn, { ...J.legal }), /* @__PURE__ */ T("div", {
					className: "grid gap-4",
					children: J.legal.instruments.map((e) => /* @__PURE__ */ T(W, {
						id: `source-${e.id.toLowerCase()}`,
						variant: "legal-instrument",
						sourceId: e.id,
						title: e.title,
						excerpt: `${e.type}. This fixture remains ${e.status}.`,
						citation: e.id,
						provenance: e.locator,
						verification: e.status
					}, e.id))
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-6 border-t border-border pt-4 text-muted-foreground",
				children: J.legal.conclusion
			})
		]
	});
	let n = J.records.find((t) => t.domain === e);
	if (!n) return null;
	let r = J.recordDetails[e];
	return /* @__PURE__ */ T("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: /* @__PURE__ */ E("div", {
			className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ E("div", { children: [
				/* @__PURE__ */ E("p", {
					className: "mw-eyebrow text-primary",
					children: [
						t.number,
						" / ",
						e
					]
				}),
				/* @__PURE__ */ T("p", {
					className: "mw-meta mt-3 text-muted-foreground",
					children: t.kicker
				}),
				/* @__PURE__ */ T("h2", {
					className: "mw-display mt-4 text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
					children: n.title
				}),
				/* @__PURE__ */ T("p", {
					className: "mw-reading mt-6 text-lg leading-8 text-muted-foreground",
					children: t.statement
				}),
				/* @__PURE__ */ E("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ T(L, {
						variant: n.status,
						children: n.status
					}), /* @__PURE__ */ T(L, {
						variant: r.independent ? "verified" : "unresolved",
						children: r.independent ? "independent source" : "dependency unknown"
					})]
				}),
				/* @__PURE__ */ E("dl", {
					className: "mw-meta mt-6 grid gap-2 border-t border-border pt-4 text-muted-foreground",
					children: [/* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Source type" }), /* @__PURE__ */ T("dd", {
							className: "text-right text-foreground",
							children: r.sourceType
						})]
					}), /* @__PURE__ */ E("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ T("dt", { children: "Locator" }), /* @__PURE__ */ T("dd", {
							className: "text-right text-foreground",
							children: r.locator
						})]
					})]
				})
			] }), /* @__PURE__ */ E("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ T(Sn, {
						domain: n.domain,
						recordId: n.recordId,
						repo: n.sourceRepo,
						claim: n.description,
						provenance: n.source,
						verification: n.verification,
						status: n.status,
						canonical: n.canonicalStatus === "canonical",
						flagged: n.domain === "PERSON",
						selected: n.domain === "EVENT",
						sourceHref: `#source-${n.domain.toLowerCase()}`
					}),
					/* @__PURE__ */ T(ti, { domain: n.domain }),
					n.domain === "EVENT" ? /* @__PURE__ */ T(wn, {
						variant: "event",
						timestamp: `${J.recordDetails.EVENT.temporal.start}–${J.recordDetails.EVENT.temporal.end}`,
						title: "Movement inside missing interval",
						description: "Fixture event interval remains independently inspectable.",
						source: n.source,
						status: n.verification
					}) : null,
					/* @__PURE__ */ T(W, {
						id: `source-${n.domain.toLowerCase()}`,
						variant: n.domain === "RGBL" ? "quote" : "record",
						sourceId: n.source,
						title: n.title,
						excerpt: n.description,
						citation: n.recordId,
						provenance: r.locator,
						verification: n.verification
					})
				]
			})]
		})
	});
}
var ni = () => /* @__PURE__ */ T(Z, { domain: "STORY" }), ri = () => /* @__PURE__ */ T(Z, { domain: "EVENT" }), ii = () => /* @__PURE__ */ T(Z, { domain: "PERSON" }), ai = () => /* @__PURE__ */ T(Z, { domain: "RGBL" }), oi = () => /* @__PURE__ */ T(Z, { domain: "AWS" });
//#endregion
//#region src/screens/auth.tsx
function si() {
	return /* @__PURE__ */ T("section", {
		className: "flex min-h-[760px] items-center justify-center bg-background px-4 py-12 text-foreground",
		children: /* @__PURE__ */ E("div", {
			className: "grid w-full max-w-5xl overflow-hidden border border-border bg-card lg:grid-cols-[1fr_.85fr]",
			children: [/* @__PURE__ */ E("div", {
				className: "hidden min-h-[620px] border-r border-border p-10 lg:flex lg:flex-col lg:justify-between",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-primary",
					children: "14 / Community identity"
				}), /* @__PURE__ */ T("h1", {
					className: "mw-display mt-5 text-6xl font-black uppercase leading-[0.92]",
					children: "Enter the observatory."
				})] }), /* @__PURE__ */ T("p", {
					className: "max-w-md text-sm leading-6 text-muted-foreground",
					children: "Membership can unlock following, saved cases, discussion, and context submission. Public evidence remains readable without login."
				})]
			}), /* @__PURE__ */ T("div", {
				className: "p-6 sm:p-10",
				children: /* @__PURE__ */ T(_r, {})
			})]
		})
	});
}
//#endregion
//#region src/screens/landing.tsx
var ci = [
	[
		"observe",
		"01",
		"OBSERVE",
		"Something happened. Record it before the story hardens around it."
	],
	[
		"trace",
		"02",
		"TRACE",
		"Keep source, time, identity, and provenance attached to every fragment."
	],
	[
		"reconstruct",
		"03",
		"RECONSTRUCT",
		"Build relationships without forcing identity."
	],
	[
		"weigh",
		"04",
		"WEIGH / MIZAN",
		"Expose dimensions, contradictions, confidence, and what is still missing."
	],
	[
		"verify",
		"05",
		"VERIFY",
		"Let supported stay supported, partial stay partial, and unresolved stay open."
	]
];
function li() {
	return /* @__PURE__ */ T(Mt, {});
}
function ui() {
	return /* @__PURE__ */ T("section", {
		id: "manifesto",
		className: "mw-shell-wide mw-section scroll-mt-20",
		children: /* @__PURE__ */ E("div", {
			className: "grid gap-12 lg:grid-cols-[0.65fr_1.35fr]",
			children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "02 / Manifesto"
			}), /* @__PURE__ */ E("h2", {
				className: "mw-display mt-4 text-5xl font-black uppercase leading-[0.95] sm:text-7xl",
				children: [
					"Mystery can stay.",
					/* @__PURE__ */ T("br", {}),
					"Evidence cannot hide."
				]
			})] }), /* @__PURE__ */ E("div", {
				className: "mw-reading self-end",
				children: [
					/* @__PURE__ */ T("p", {
						className: "text-xl leading-8 sm:text-2xl sm:leading-9",
						children: "MoonWitness is not built to make every trail become a conclusion."
					}),
					/* @__PURE__ */ T("p", {
						className: "mt-6 text-base leading-7 text-muted-foreground",
						children: "A story may align with an event. A person may remain partial. A text may preserve the motif. The interface should show what connects, what contradicts, who supplied it, and where certainty stops."
					}),
					/* @__PURE__ */ T("p", {
						className: "mt-6 text-base font-bold",
						children: "Not enough yet is still an answer."
					})
				]
			})]
		})
	});
}
function di() {
	return /* @__PURE__ */ T("section", {
		id: "rocksoul",
		className: "mw-shell-wide mw-section",
		children: /* @__PURE__ */ E("div", {
			className: "grid min-h-[520px] gap-8 border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ E("div", {
				className: "flex flex-col justify-between",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-primary",
					children: "03 / Rocksoul"
				}), /* @__PURE__ */ E("h2", {
					className: "mw-display mt-4 text-5xl font-black uppercase sm:text-7xl",
					children: [
						"The thread,",
						/* @__PURE__ */ T("br", {}),
						"not the throne."
					]
				})] }), /* @__PURE__ */ T("p", {
					className: "mw-reading text-sm leading-6 text-muted-foreground",
					children: "Rocksoul moves across records and repositories as a connective character. MoonWitness remains the observatory and product identity."
				})]
			}), /* @__PURE__ */ E("div", {
				className: "relative min-h-80 overflow-hidden border border-border bg-background",
				"aria-label": "Abstract Rocksoul character field",
				children: [
					/* @__PURE__ */ T("div", { className: "absolute inset-x-[20%] bottom-0 top-[22%] border-x border-border bg-panel" }),
					/* @__PURE__ */ T("div", { className: "absolute left-1/2 top-[12%] size-28 -translate-x-1/2 rounded-full border border-primary bg-card" }),
					/* @__PURE__ */ T("div", {
						className: "absolute bottom-6 left-6 right-6 border-t border-primary pt-3",
						children: /* @__PURE__ */ T("span", {
							className: "mw-meta text-primary",
							children: "ROCKSOUL / CHARACTER SIGNAL"
						})
					})
				]
			})]
		})
	});
}
function fi() {
	return /* @__PURE__ */ E("section", {
		id: "repositories",
		className: "mw-shell-wide mw-section",
		children: [/* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-end justify-between gap-5",
			children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "04 / Repository universe"
			}), /* @__PURE__ */ T("h2", {
				className: "mw-display mt-3 text-4xl font-black uppercase sm:text-6xl",
				children: "Five sources. One observatory."
			})] }), /* @__PURE__ */ T("p", {
				className: "mw-reading text-sm leading-6 text-muted-foreground",
				children: "STORY, EVENT, PERSON, and RGBL enter evidence reconstruction. AWS enters after correlation as the legal/regulatory boundary."
			})]
		}), /* @__PURE__ */ E("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ T(U, {
					repo: "rocksoul-legend",
					domain: "STORY",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ T(U, {
					repo: "rocksoul-event",
					domain: "EVENT",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ T(U, {
					repo: "rocksoul-superhero",
					domain: "PERSON",
					status: "degraded",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ T(U, {
					repo: "rocksoul-rgbl",
					domain: "RGBL",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ T(U, {
					repo: "rocksoul-aws",
					domain: "AWS / downstream",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				})
			]
		})]
	});
}
function pi() {
	return /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("div", {
		id: "method",
		className: "mw-shell-wide scroll-mt-20",
		children: /* @__PURE__ */ T(Sr, {})
	}), /* @__PURE__ */ T("section", {
		className: "mw-shell-wide mw-section",
		children: /* @__PURE__ */ E("div", {
			className: "grid gap-12 lg:grid-cols-[0.7fr_1.3fr]",
			children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "Method"
			}), /* @__PURE__ */ E("h2", {
				className: "mw-display mt-4 text-4xl font-black uppercase sm:text-6xl",
				children: [
					"From record",
					/* @__PURE__ */ T("br", {}),
					"to restraint."
				]
			})] }), /* @__PURE__ */ T("div", {
				className: "grid border-t border-border",
				children: ci.map(([e, t, n, r]) => /* @__PURE__ */ T("article", {
					id: e,
					className: "scroll-mt-24 border-b border-border py-6",
					children: /* @__PURE__ */ E("div", {
						className: "grid gap-4 sm:grid-cols-[80px_1fr_1.4fr]",
						children: [
							/* @__PURE__ */ T("span", {
								className: "mw-eyebrow text-muted-foreground",
								children: t
							}),
							/* @__PURE__ */ T("h3", {
								className: "text-lg font-bold",
								children: n
							}),
							/* @__PURE__ */ T("p", {
								className: "text-sm leading-6 text-muted-foreground",
								children: r
							})
						]
					})
				}, e))
			})]
		})
	})] });
}
function mi() {
	return /* @__PURE__ */ E("div", {
		id: "top",
		className: "bg-background text-foreground",
		children: [/* @__PURE__ */ T(bn, {}), /* @__PURE__ */ E("main", { children: [
			/* @__PURE__ */ T(li, {}),
			/* @__PURE__ */ T(ui, {}),
			/* @__PURE__ */ T(di, {}),
			/* @__PURE__ */ T(fi, {}),
			/* @__PURE__ */ T(pi, {})
		] })]
	});
}
//#endregion
//#region src/screens/mw0042-overview.tsx
function hi() {
	let e = /* @__PURE__ */ T("div", {
		id: "case-overview",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ T(In, {
			caseId: J.caseId,
			eyebrow: J.eyebrow,
			title: J.title,
			summary: J.summary,
			status: J.status,
			metadata: [{
				label: "updated",
				value: "05:30 WIB / fixture"
			}]
		})
	}), t = /* @__PURE__ */ T(Kn, {
		records: J.records,
		compact: !0
	}), n = /* @__PURE__ */ T("section", {
		id: "evidence",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ T(or, { records: J.records })
	}), r = /* @__PURE__ */ E("section", {
		id: "correlation",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ T("p", {
				className: "mw-eyebrow text-primary",
				children: "MW-0042 / Correlation"
			}),
			/* @__PURE__ */ T("h2", {
				className: "mw-display mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.94] sm:text-6xl",
				children: "The trails are starting to line up."
			}),
			/* @__PURE__ */ T("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: "That still doesn’t make them the same thing."
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-6",
				children: /* @__PURE__ */ T(sr, {
					records: J.records,
					correlation: J.correlation
				})
			})
		]
	}), i = /* @__PURE__ */ T("section", {
		id: "aws",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ T(cr, {
			legal: J.legal,
			sources: [{
				id: "LAW-FIX-01",
				title: "Synthetic Cross-Border Movement Instrument",
				excerpt: "Reference-only fixture used to prove legal-source presentation.",
				locator: "fixture/aws/0042/law-01"
			}, {
				id: "LAW-FIX-02",
				title: "Synthetic Protected-Passage Rule",
				excerpt: "Reference-only fixture. No real jurisdiction is asserted.",
				locator: "fixture/aws/0042/law-02"
			}]
		})
	}), a = /* @__PURE__ */ T(lr, { cases: [{
		caseId: "MW-0038",
		title: "Night Window",
		summary: "A separate synthetic case sharing temporal structure, not identity.",
		status: "partial",
		traceCount: 3,
		updatedAt: "fixture"
	}, {
		caseId: "MW-0048",
		title: "Return Signal",
		summary: "A separate synthetic case sharing motif structure, not causation.",
		status: "unresolved",
		traceCount: 2,
		updatedAt: "fixture"
	}] });
	return /* @__PURE__ */ E("article", {
		id: "case",
		className: "scroll-mt-16 bg-background text-foreground",
		"data-surface-personality": "editorial",
		children: [/* @__PURE__ */ T(bn, { caseId: J.caseId }), /* @__PURE__ */ E("div", {
			className: "mw-shell-wide py-10 sm:py-14",
			children: [
				/* @__PURE__ */ T("nav", {
					"aria-label": "MW-0042 sections",
					className: "mb-7 flex flex-wrap border-b border-border pb-3",
					children: [
						["Overview", "case-overview"],
						["Evidence", "evidence"],
						["Correlation", "correlation"],
						["AWS", "aws"]
					].map(([e, t]) => /* @__PURE__ */ T("a", {
						href: `#${t}`,
						className: "mw-link px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground",
						children: e
					}, t))
				}),
				/* @__PURE__ */ T(ur, {
					header: e,
					summary: t,
					evidence: n,
					correlation: r,
					legal: i,
					related: a
				}),
				/* @__PURE__ */ T("footer", {
					className: "mt-10 border-t border-border pt-4",
					children: /* @__PURE__ */ T("p", {
						className: "mw-meta text-muted-foreground",
						children: "Fixture only · correlation is not causation · unresolved remains a valid final state"
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/screens/platform.tsx
var gi = [{
	id: "PLATFORM-N-1",
	title: "Canonical blocker remains",
	body: "PERSON identity is still incomplete.",
	state: "unread",
	variant: "review"
}, {
	id: "PLATFORM-N-2",
	title: "Context requested",
	body: "SUB-0042-01 is waiting for provenance.",
	state: "unread",
	variant: "case-update"
}];
function _i({ actions: e } = {}) {
	return /* @__PURE__ */ T(yn, {
		activeResource: "cases",
		breadcrumbs: [
			{
				label: "MoonWitness",
				href: "#dashboard"
			},
			{
				label: "Cases",
				href: "#cases"
			},
			{ label: J.caseId }
		],
		backendState: "degraded",
		notifications: gi,
		children: /* @__PURE__ */ E("div", {
			id: "platform",
			className: "px-4 py-8 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ T(In, {
					caseId: J.caseId,
					eyebrow: "15 / Platform / Case review",
					title: "Review the blockers.",
					summary: "Two blockers remain before closure. Dense operational surfaces stay clean and readable.",
					status: "unresolved",
					variant: "platform",
					metadata: [{
						label: "review",
						value: "needs-review"
					}],
					actions: /* @__PURE__ */ T(C, {
						variant: "secondary",
						onClick: () => void e?.onPlatformAction?.({
							action: "keep-unresolved",
							resource: J.caseId
						}),
						children: "Keep case unresolved"
					})
				}),
				/* @__PURE__ */ E("section", {
					className: "mt-6 border border-border bg-card p-4",
					children: [/* @__PURE__ */ T("p", {
						className: "mw-meta text-muted-foreground",
						children: "Canonical blockers"
					}), /* @__PURE__ */ E("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ T("span", {
							className: "border border-warning px-3 py-2 font-mono text-[10px] font-bold uppercase text-warning",
							children: "Person identity incomplete"
						}), /* @__PURE__ */ T("span", {
							className: "border border-primary px-3 py-2 font-mono text-[10px] font-bold uppercase text-primary",
							children: "AWS jurisdiction unresolved"
						})]
					})]
				}),
				/* @__PURE__ */ T("section", {
					className: "mt-6",
					children: /* @__PURE__ */ T(dr, { repositories: J.repositories.map((e) => ({
						...e,
						queue: +(e.status === "degraded"),
						errors: 0
					})) })
				}),
				/* @__PURE__ */ T("section", {
					className: "mt-6",
					children: /* @__PURE__ */ T(fr, { submission: J.community.submission })
				}),
				/* @__PURE__ */ T("section", {
					className: "mt-6",
					children: /* @__PURE__ */ T(cr, {
						legal: J.legal,
						sources: [{
							id: "LAW-FIX-01",
							title: "Synthetic Cross-Border Movement Instrument",
							excerpt: "Fixture-only legal source for review workflow.",
							locator: "fixture/aws/0042/law-01"
						}]
					})
				}),
				/* @__PURE__ */ T("section", {
					className: "mt-6",
					children: /* @__PURE__ */ E("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ T(K, {
								label: "Canonical blockers",
								value: "2",
								context: "must remain visible",
								delta: "0",
								tone: "warning"
							}),
							/* @__PURE__ */ T(K, {
								label: "Repositories",
								value: "5",
								context: "4 online / 1 degraded",
								delta: "1 degraded"
							}),
							/* @__PURE__ */ T(K, {
								label: "Open submissions",
								value: "1",
								context: "needs context",
								delta: "+1",
								tone: "warning"
							}),
							/* @__PURE__ */ T(K, {
								label: "Case state",
								value: "OPEN",
								context: "unresolved retained"
							})
						]
					})
				}),
				/* @__PURE__ */ E("section", {
					id: "audit",
					className: "mt-6 scroll-mt-24 border border-border bg-card",
					children: [
						/* @__PURE__ */ T("div", {
							className: "border-b border-border p-3",
							children: /* @__PURE__ */ T("p", {
								className: "mw-meta text-muted-foreground",
								children: "Audit trail"
							})
						}),
						/* @__PURE__ */ T(G, {
							timestamp: "05:30",
							actor: "fixture",
							action: "review.opened",
							resource: "MW-0042",
							result: "needs-review",
							traceId: "TRACE-0042-A"
						}),
						/* @__PURE__ */ T(G, {
							timestamp: "05:31",
							actor: "reviewer",
							action: "context.requested",
							resource: "SUB-0042-01",
							result: "pending",
							traceId: "TRACE-0042-B"
						}),
						/* @__PURE__ */ T(G, {
							timestamp: "05:32",
							actor: "reviewer",
							action: "review.unresolved",
							resource: "MW-0042",
							result: "open",
							traceId: "TRACE-0042-C"
						})
					]
				}),
				/* @__PURE__ */ E("div", {
					className: "sticky bottom-0 mt-6 flex flex-wrap gap-2 border-t border-border bg-background/95 py-3 backdrop-blur md:static md:bg-transparent",
					children: [
						/* @__PURE__ */ T(C, {
							variant: "destructive",
							onClick: () => void e?.onPlatformAction?.({
								action: "request-context",
								resource: J.caseId
							}),
							children: "Request context"
						}),
						/* @__PURE__ */ T(C, {
							variant: "secondary",
							onClick: () => void e?.onPlatformAction?.({
								action: "flag-record",
								resource: J.caseId
							}),
							children: "Flag record"
						}),
						/* @__PURE__ */ T(C, {
							variant: "secondary",
							onClick: () => void e?.onPlatformAction?.({
								action: "keep-unresolved",
								resource: J.caseId
							}),
							children: "Keep case unresolved"
						}),
						/* @__PURE__ */ T(C, {
							variant: "ghost",
							onClick: () => void e?.onPlatformAction?.({
								action: "return-to-queue",
								resource: J.caseId
							}),
							children: "Return to queue"
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/dossier-header.tsx
function vi({ eyebrow: t, title: n, summary: r, recordId: i, status: a, metadata: o = [], actions: s, variant: c = "cinematic", className: l, assetFile: u = "svg/archive-dossier.svg" }) {
	let d = c === "cinematic";
	return /* @__PURE__ */ E("header", {
		className: e("relative isolate overflow-hidden border border-border bg-background", d ? "min-h-[320px] px-6 py-8 sm:min-h-[380px] sm:px-8 sm:py-10" : "px-5 py-6", l),
		children: [d ? /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(ee, {
			pack: "editorial",
			file: u,
			alt: "",
			"aria-hidden": "true",
			className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
		}), /* @__PURE__ */ T("div", {
			className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,.98),rgba(11,11,11,.84)_52%,rgba(11,11,11,.48)),linear-gradient(0deg,rgba(11,11,11,.92),transparent_62%)]",
			"aria-hidden": "true"
		})] }) : null, /* @__PURE__ */ E("div", {
			className: e("relative grid gap-8", d && "lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,.55fr)] lg:items-end"),
			children: [/* @__PURE__ */ E("div", { children: [
				/* @__PURE__ */ T("p", {
					className: "mw-eyebrow text-primary",
					children: t
				}),
				/* @__PURE__ */ T("h2", {
					className: e("mt-4 text-balance font-serif font-medium tracking-[-0.035em]", d ? "text-[clamp(2.8rem,6vw,5rem)] leading-[.92]" : "text-[clamp(2rem,4vw,3.5rem)] leading-[.96]"),
					children: n
				}),
				r ? /* @__PURE__ */ T("p", {
					className: "mw-reading mt-5 text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
					children: r
				}) : null,
				i ? /* @__PURE__ */ T("p", {
					className: "mw-meta mt-5 text-subtle",
					children: i
				}) : null,
				s ? /* @__PURE__ */ T("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: s
				}) : null
			] }), a || o.length ? /* @__PURE__ */ E("aside", {
				className: "border border-border bg-background/70 p-4 backdrop-blur-md",
				"aria-label": "Dossier metadata",
				children: [a ? /* @__PURE__ */ T(L, {
					variant: a.variant ?? "neutral",
					children: a.label
				}) : null, /* @__PURE__ */ T("dl", {
					className: "mt-4 grid gap-3",
					children: o.map((e) => /* @__PURE__ */ E("div", {
						className: "grid gap-1 border-b border-border pb-3 last:border-b-0 last:pb-0",
						children: [/* @__PURE__ */ T("dt", {
							className: "mw-meta text-subtle",
							children: e.label
						}), /* @__PURE__ */ T("dd", {
							className: "m-0 text-sm text-foreground",
							children: e.value
						})]
					}, e.label))
				})]
			}) : null]
		})]
	});
}
//#endregion
//#region src/components/evidence-matrix.tsx
var yi = [
	{
		key: "support",
		label: "Support"
	},
	{
		key: "counter",
		label: "Counter"
	},
	{
		key: "context",
		label: "Context"
	},
	{
		key: "alternative",
		label: "Alternative"
	}
];
function bi(e, t, n) {
	n && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), n(t));
}
function xi({ rows: t, className: n, caption: r = "Claim by evidence matrix", onActivateRow: i }) {
	return /* @__PURE__ */ E("div", {
		className: e("max-h-[560px] overflow-auto border border-border bg-card", n),
		children: [/* @__PURE__ */ E("table", {
			className: "w-full min-w-[760px] border-separate border-spacing-0 text-left text-xs",
			children: [
				/* @__PURE__ */ T("caption", {
					className: "sr-only",
					children: r
				}),
				/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ E("tr", { children: [
					/* @__PURE__ */ T("th", {
						className: "sticky left-0 top-0 z-30 min-w-[220px] border-b border-r border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Claim"
					}),
					/* @__PURE__ */ T("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Epistemic"
					}),
					yi.map((e) => /* @__PURE__ */ T("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: e.label
					}, e.key)),
					/* @__PURE__ */ T("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Sources"
					})
				] }) }),
				/* @__PURE__ */ T("tbody", { children: t.map((t) => {
					let n = yi.map(({ key: e, label: n }) => `${t.values[e] ?? 0} ${n.toLowerCase()}`).join(", ");
					return /* @__PURE__ */ E("tr", {
						tabIndex: 0,
						"aria-label": `${t.label}. ${n}. ${t.sourceCount ?? 0} sources.`,
						onClick: () => i?.(t),
						onKeyDown: (e) => bi(e, t, i),
						className: e("group outline-none", i && "cursor-pointer", "focus-visible:[&>td]:bg-panel hover:[&>td]:bg-panel"),
						children: [
							/* @__PURE__ */ E("td", {
								className: "sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-3 group-focus-visible:shadow-[inset_2px_0_var(--mw-brand-crimson)] group-hover:shadow-[inset_2px_0_var(--mw-brand-crimson)]",
								children: [/* @__PURE__ */ T("strong", {
									className: "block text-sm text-foreground",
									children: t.label
								}), t.context ? /* @__PURE__ */ T("small", {
									className: "mt-1 block text-[10px] leading-4 text-muted-foreground",
									children: t.context
								}) : null]
							}),
							/* @__PURE__ */ T("td", {
								className: "border-b border-border px-3 py-3 text-muted-foreground",
								children: t.epistemic ?? "—"
							}),
							yi.map(({ key: n }) => {
								let r = t.values[n] ?? 0;
								return /* @__PURE__ */ T("td", {
									className: "border-b border-border px-3 py-3",
									children: /* @__PURE__ */ T("span", {
										className: e("inline-flex h-7 min-w-7 items-center justify-center border border-border px-2 font-mono text-[10px]", r > 0 && "border-primary/50 bg-primary/10 text-foreground", r > 1 && "bg-primary/20", r > 2 && "bg-primary/30"),
										children: r
									})
								}, n);
							}),
							/* @__PURE__ */ T("td", {
								className: "border-b border-border px-3 py-3 font-mono text-[10px] text-muted-foreground",
								children: t.sourceCount ?? 0
							})
						]
					}, t.id);
				}) })
			]
		}), t.length === 0 ? /* @__PURE__ */ T("p", {
			className: "p-6 text-sm text-muted-foreground",
			children: "No evidence rows yet."
		}) : null]
	});
}
//#endregion
//#region src/components/observatory-section-nav.tsx
function Si({ items: t, label: n = "INDEX /", offset: r = 112, className: i }) {
	let [a, o] = k(t[0]?.id ?? "");
	return D(() => {
		let e = t.map((e) => document.getElementById(e.id)).filter(Boolean);
		if (!e.length || typeof IntersectionObserver > "u") return;
		let n = new IntersectionObserver((e) => {
			let t = e.filter((e) => e.isIntersecting).sort((e, t) => t.intersectionRatio - e.intersectionRatio)[0];
			t?.target.id && o(t.target.id);
		}, {
			rootMargin: `-${r}px 0px -68% 0px`,
			threshold: [
				0,
				.15,
				.4,
				.7
			]
		});
		return e.forEach((e) => n.observe(e)), () => n.disconnect();
	}, [t, r]), /* @__PURE__ */ E("nav", {
		"aria-label": "Observatory sections",
		className: e("sticky z-30 flex min-h-10 items-center gap-3 border border-border bg-background/95 px-3 backdrop-blur-md", i),
		style: { top: r - 48 },
		children: [/* @__PURE__ */ T("span", {
			className: "mw-meta shrink-0 text-subtle",
			children: n
		}), /* @__PURE__ */ T("div", {
			className: "flex min-w-0 flex-1 self-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			children: t.map((t) => /* @__PURE__ */ T("a", {
				href: `#${t.id}`,
				"aria-current": a === t.id ? "location" : void 0,
				className: e("relative flex min-h-10 shrink-0 items-center px-3 font-mono text-[10px] text-muted-foreground no-underline transition hover:text-foreground", a === t.id && "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary"),
				children: t.label
			}, t.id))
		})]
	});
}
//#endregion
//#region src/components/provenance-rail.tsx
function Ci({ nodes: t, orientation: n = "horizontal", className: r, description: i, onActivate: a }) {
	let o = n === "horizontal", s = i ?? t.map((e) => `${e.kind}: ${e.label}`).join(" → ");
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card p-4", r),
		"aria-label": "Provenance rail",
		children: [/* @__PURE__ */ T("div", {
			className: e("flex gap-3", o ? "items-stretch overflow-x-auto" : "flex-col"),
			children: t.map((n, r) => /* @__PURE__ */ E("div", {
				className: e("flex", o ? "items-center" : "flex-col"),
				children: [/* @__PURE__ */ E("button", {
					type: "button",
					onClick: () => a?.(n),
					className: e("grid min-h-20 min-w-[150px] grid-cols-[32px_1fr] items-center gap-3 border bg-background p-3 text-left", n.active ? "border-primary" : "border-border", n.unresolved && "border-dashed border-warning", n.external && "shadow-[inset_0_-2px_var(--mw-status-info)]"),
					children: [/* @__PURE__ */ T(b, {
						src: br(vr[n.kind]),
						alt: "",
						"aria-hidden": "true",
						className: "h-8 w-8"
					}), /* @__PURE__ */ E("span", { children: [
						/* @__PURE__ */ T("span", {
							className: "mw-meta block text-primary",
							children: n.kind
						}),
						/* @__PURE__ */ T("strong", {
							className: "mt-1 block text-sm text-foreground",
							children: n.label
						}),
						n.detail ? /* @__PURE__ */ T("small", {
							className: "mt-1 block text-[10px] leading-4 text-muted-foreground",
							children: n.detail
						}) : null
					] })]
				}), r < t.length - 1 ? /* @__PURE__ */ T("span", {
					"aria-hidden": "true",
					className: e("shrink-0 text-primary", o ? "px-2 text-xl" : "self-center py-2"),
					children: "→"
				}) : null]
			}, n.id))
		}), /* @__PURE__ */ E("p", {
			className: "mt-3 border-t border-border pt-3 text-xs leading-5 text-muted-foreground",
			children: [
				/* @__PURE__ */ T("strong", {
					className: "text-foreground",
					children: "Text equivalent:"
				}),
				" ",
				s
			]
		})]
	});
}
//#endregion
//#region src/components/event-intelligence.tsx
var wi = {
	event: 0,
	claim: 1,
	place: 1,
	artifact: 1,
	evidence: 2,
	uncertainty: 2,
	alternative: 2,
	source: 3,
	person: 3,
	story: 3,
	text: 3,
	law: 3,
	perspective: 3,
	relationship: 3
}, Ti = [
	78,
	258,
	438,
	618
];
function Ei({ nodes: t, edges: n, className: r, title: i = "Event intelligence topology", description: a = "Canonical event graph showing claims, evidence, sources, context and qualified external references." }) {
	let o = O(), s = O(), c = We(() => {
		let e = /* @__PURE__ */ new Map();
		t.forEach((t) => {
			let n = wi[t.kind];
			e.set(n, [...e.get(n) ?? [], t]);
		});
		let n = Math.max(1, ...Array.from(e.values()).map((e) => e.length)), r = Math.max(320, 112 + n * 76), i = /* @__PURE__ */ new Map();
		for (let [t, n] of e) {
			let e = (r - 120) / Math.max(1, n.length);
			n.forEach((n, r) => {
				i.set(n.id, {
					x: Ti[t],
					y: 76 + e * (r + .5)
				});
			});
		}
		return {
			height: r,
			positions: i
		};
	}, [t]);
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card p-4", r),
		"aria-label": i,
		children: [/* @__PURE__ */ E("svg", {
			viewBox: `0 0 760 ${c.height}`,
			className: "h-auto min-h-[300px] w-full",
			role: "img",
			"aria-labelledby": `${o} ${s}`,
			children: [
				/* @__PURE__ */ T("title", {
					id: o,
					children: i
				}),
				/* @__PURE__ */ T("desc", {
					id: s,
					children: a
				}),
				/* @__PURE__ */ E("g", {
					"aria-hidden": "true",
					children: [n.map((e) => {
						let t = c.positions.get(e.from), n = c.positions.get(e.to);
						return !t || !n ? null : /* @__PURE__ */ E("g", { children: [/* @__PURE__ */ T("line", {
							x1: t.x + 64,
							y1: t.y,
							x2: n.x - 64,
							y2: n.y,
							stroke: "var(--mw-border-strong)",
							strokeWidth: "1.5",
							strokeDasharray: e.status === "hypothesis" || e.status === "unresolved" ? "5 4" : void 0
						}), /* @__PURE__ */ T("text", {
							x: (t.x + n.x) / 2,
							y: (t.y + n.y) / 2 - 5,
							textAnchor: "middle",
							fill: "var(--mw-text-secondary)",
							fontSize: "8",
							fontFamily: "IBM Plex Mono, monospace",
							children: e.label.replaceAll("_", " ")
						})] }, e.id);
					}), t.map((e) => {
						let t = c.positions.get(e.id);
						if (!t) return null;
						let n = e.kind === "event";
						return /* @__PURE__ */ E("g", {
							transform: `translate(${t.x - 64} ${t.y - 26})`,
							children: [
								/* @__PURE__ */ T("rect", {
									width: "128",
									height: "52",
									rx: "6",
									fill: "var(--mw-surface-page)",
									stroke: n ? "var(--mw-brand-crimson)" : "var(--mw-border-strong)",
									strokeWidth: n ? "2" : "1",
									strokeDasharray: e.external ? "5 4" : void 0
								}),
								/* @__PURE__ */ T("text", {
									x: "10",
									y: "17",
									fill: n ? "var(--mw-brand-crimson)" : "var(--mw-text-secondary)",
									fontSize: "8",
									fontFamily: "IBM Plex Mono, monospace",
									children: e.kind.toUpperCase()
								}),
								/* @__PURE__ */ T("text", {
									x: "10",
									y: "34",
									fill: "var(--mw-text-primary)",
									fontSize: "9",
									fontFamily: "IBM Plex Mono, monospace",
									children: e.label.length > 18 ? e.label.slice(0, 17) + "…" : e.label
								}),
								e.confidence == null ? null : /* @__PURE__ */ E("text", {
									x: "118",
									y: "17",
									textAnchor: "end",
									fill: "var(--mw-text-secondary)",
									fontSize: "8",
									fontFamily: "IBM Plex Mono, monospace",
									children: [Math.round(e.confidence * 100), "%"]
								})
							]
						}, e.id);
					})]
				})
			]
		}), /* @__PURE__ */ E("div", {
			className: "mt-4 border-t border-border pt-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-foreground",
				children: "Text equivalent"
			}), /* @__PURE__ */ T("ul", {
				className: "mt-2 grid gap-1 text-xs leading-5 text-muted-foreground",
				children: n.map((e) => {
					let n = t.find((t) => t.id === e.from), r = t.find((t) => t.id === e.to);
					if (!n || !r) return null;
					let i = e.confidence == null ? "" : ` · ${Math.round(e.confidence * 100)}%`, a = e.status ? ` · ${e.status}` : "";
					return /* @__PURE__ */ E("li", { children: [
						/* @__PURE__ */ T("strong", {
							className: "text-foreground",
							children: n.label
						}),
						" → ",
						e.label.replaceAll("_", " "),
						" → ",
						/* @__PURE__ */ T("strong", {
							className: "text-foreground",
							children: r.label
						}),
						a,
						i
					] }, e.id);
				})
			})]
		})]
	});
}
function Di({ confidence: t, scope: n, uncertainty: r, alternatives: i, status: a, className: o }) {
	let s = Math.round(Math.max(0, Math.min(1, t)) * 100);
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card p-4", o),
		"aria-label": "Historicity and uncertainty",
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("p", {
					className: "mw-meta text-primary",
					children: "Historicity confidence"
				}), /* @__PURE__ */ E("strong", {
					className: "mt-1 block font-serif text-4xl font-medium text-foreground",
					children: [s, "%"]
				})] }), a ? /* @__PURE__ */ T("span", {
					className: "mw-meta border border-border px-2 py-1 text-foreground",
					children: a.replaceAll("_", " ")
				}) : null]
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-4 h-3 overflow-hidden rounded-full border border-border bg-background",
				role: "progressbar",
				"aria-label": "Historicity confidence",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": s,
				children: /* @__PURE__ */ T("div", {
					className: "h-full bg-primary",
					style: { width: `${s}%` }
				})
			}),
			/* @__PURE__ */ E("p", {
				className: "mt-3 text-sm leading-6 text-foreground",
				children: [
					/* @__PURE__ */ T("strong", { children: "Scope:" }),
					" ",
					n
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ E("div", {
					className: "border border-dashed border-border p-3",
					children: [/* @__PURE__ */ E("p", {
						className: "mw-meta text-foreground",
						children: ["Uncertainty · ", r.length]
					}), /* @__PURE__ */ T("ul", {
						className: "mt-2 grid gap-2 text-xs leading-5 text-muted-foreground",
						children: r.map((e) => /* @__PURE__ */ T("li", { children: e }, e))
					})]
				}), /* @__PURE__ */ E("div", {
					className: "border border-border p-3",
					children: [/* @__PURE__ */ E("p", {
						className: "mw-meta text-foreground",
						children: ["Alternatives · ", i.length]
					}), /* @__PURE__ */ T("ul", {
						className: "mt-2 grid gap-2 text-xs leading-5 text-muted-foreground",
						children: i.map((e) => /* @__PURE__ */ T("li", { children: e }, e))
					})]
				})]
			}),
			/* @__PURE__ */ T("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: "Confidence is scoped evidence assessment, not a universal truth score."
			})
		]
	});
}
//#endregion
//#region src/components/textual-intelligence.tsx
function Oi(e) {
	switch (e) {
		case "available": return "verified";
		case "partial": return "partial";
		case "restricted": return "restricted";
		case "candidate": return "info";
		case "unresolved": return "unresolved";
		case "missing": return "unresolved";
		default: return "neutral";
	}
}
function ki({ items: t, title: n = "Canonical textual hierarchy", description: r = "Ordered textual identities. Each node remains a distinct record.", className: i, empty: a }) {
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card", i),
		"aria-label": n,
		children: [/* @__PURE__ */ E("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-primary",
				children: n
			}), /* @__PURE__ */ T("p", {
				className: "mt-2 max-w-3xl text-xs leading-5 text-muted-foreground",
				children: r
			})]
		}), t.length ? /* @__PURE__ */ T("ol", {
			className: "grid list-none gap-0 p-0 md:grid-cols-2 xl:grid-cols-3",
			"aria-label": n + " levels",
			children: t.map((e, n) => /* @__PURE__ */ E("li", {
				className: "relative min-w-0 border-b border-border p-4 md:border-r xl:min-h-44",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ E("span", {
							className: "mw-meta text-muted-foreground",
							children: [
								String(n + 1).padStart(2, "0"),
								" / ",
								e.kind.replaceAll("_", " ")
							]
						}), /* @__PURE__ */ T(L, {
							variant: Oi(e.state),
							children: e.state ?? "record"
						})]
					}),
					/* @__PURE__ */ T("strong", {
						className: "mt-4 block break-words text-base leading-5 text-foreground",
						children: e.label ?? e.id
					}),
					/* @__PURE__ */ T("code", {
						className: "mt-2 block break-all font-mono text-[10px] leading-4 text-primary",
						children: e.id
					}),
					e.detail ? /* @__PURE__ */ T("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: e.detail
					}) : null,
					e.metadata?.length ? /* @__PURE__ */ T("dl", {
						className: "mt-4 grid gap-2 border-t border-border pt-3",
						children: e.metadata.map((e) => /* @__PURE__ */ E("div", {
							className: "grid grid-cols-[88px_1fr] gap-2",
							children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: e.label
							}), /* @__PURE__ */ T("dd", {
								className: "m-0 break-words text-xs text-foreground",
								children: e.value
							})]
						}, e.label + ":" + e.value))
					}) : null,
					n < t.length - 1 ? /* @__PURE__ */ T("span", {
						className: "absolute -right-[6px] top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-border bg-card xl:block",
						"aria-hidden": "true"
					}) : null
				]
			}, e.id))
		}) : /* @__PURE__ */ T("div", {
			className: "p-4 text-sm text-muted-foreground",
			children: a ?? "No textual hierarchy records are available."
		})]
	});
}
function Ai(e) {
	return e.direction ? e.direction : e.script === "Arab" || e.script === "Hebr" ? "rtl" : "ltr";
}
function ji({ lanes: t, title: n = "Parallel exact-text lanes", description: r = "Source and translation content remain separate records.", className: i }) {
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card", i),
		"aria-label": n,
		children: [/* @__PURE__ */ E("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-primary",
				children: n
			}), /* @__PURE__ */ T("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: r
			})]
		}), /* @__PURE__ */ E("div", {
			className: "grid gap-3 p-3",
			children: [t.map((e) => {
				let t = typeof e.text == "string" && e.text.length > 0, n = e.state ?? (t ? "available" : "missing");
				return /* @__PURE__ */ E("article", {
					className: "border border-border bg-background",
					children: [
						/* @__PURE__ */ E("header", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3",
							children: [/* @__PURE__ */ E("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ T(L, {
										variant: Oi(n),
										children: n
									}),
									/* @__PURE__ */ T(L, {
										variant: "neutral",
										children: e.language
									}),
									/* @__PURE__ */ T(L, {
										variant: "info",
										children: e.representation
									})
								]
							}), /* @__PURE__ */ T("span", {
								className: "mw-meta text-muted-foreground",
								children: e.script ?? "script n/a"
							})]
						}),
						t ? /* @__PURE__ */ T("p", {
							className: "m-0 px-5 py-6 text-lg leading-8 text-foreground md:text-xl",
							lang: e.language,
							dir: Ai(e),
							children: e.text
						}) : /* @__PURE__ */ E("div", {
							className: "px-5 py-6",
							role: "status",
							children: [/* @__PURE__ */ T("strong", {
								className: "text-sm text-foreground",
								children: e.label ?? "Exact text unavailable"
							}), /* @__PURE__ */ T("p", {
								className: "mt-2 text-xs leading-5 text-muted-foreground",
								children: "No text value was supplied for this content record."
							})]
						}),
						/* @__PURE__ */ E("footer", {
							className: "grid gap-2 border-t border-border px-4 py-3",
							children: [
								/* @__PURE__ */ T("code", {
									className: "break-all font-mono text-[10px] leading-4 text-primary",
									children: e.id
								}),
								e.artifact ? /* @__PURE__ */ E("span", {
									className: "break-all text-[10px] text-muted-foreground",
									children: ["Artifact · ", e.artifact]
								}) : null,
								e.provenance ? /* @__PURE__ */ E("span", {
									className: "break-all text-[10px] text-muted-foreground",
									children: ["Provenance · ", e.provenance]
								}) : null
							]
						})
					]
				}, e.id);
			}), t.length ? null : /* @__PURE__ */ T("p", {
				className: "m-0 p-2 text-sm text-muted-foreground",
				children: "No content lanes are available."
			})]
		})]
	});
}
function Mi({ records: t, title: n = "Source, integrity & rights", description: r = "Source metadata is displayed only when declared by the record.", className: i }) {
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card", i),
		"aria-label": n,
		children: [/* @__PURE__ */ E("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-primary",
				children: n
			}), /* @__PURE__ */ T("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: r
			})]
		}), /* @__PURE__ */ E("div", {
			className: "grid md:grid-cols-2",
			children: [t.map((e) => /* @__PURE__ */ E("article", {
				className: "min-w-0 border-b border-border p-4 md:border-r",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ T(L, {
							variant: Oi(e.state),
							children: e.state ?? "declared"
						}), /* @__PURE__ */ T("span", {
							className: "mw-meta text-muted-foreground",
							children: e.availability ?? "availability n/a"
						})]
					}),
					/* @__PURE__ */ T("strong", {
						className: "mt-4 block text-sm text-foreground",
						children: e.label ?? e.id
					}),
					/* @__PURE__ */ T("code", {
						className: "mt-2 block break-all font-mono text-[10px] leading-4 text-primary",
						children: e.id
					}),
					/* @__PURE__ */ T("dl", {
						className: "mt-4 grid gap-2",
						children: [
							["Revision", e.revision],
							["SHA-256", e.sha256],
							["Rights", e.rights],
							["License", e.license],
							["Source", e.sourceReference]
						].filter((e) => !!e[1]).map(([e, t]) => /* @__PURE__ */ E("div", {
							className: "grid grid-cols-[84px_1fr] gap-2 border-t border-border pt-2",
							children: [/* @__PURE__ */ T("dt", {
								className: "mw-meta text-muted-foreground",
								children: e
							}), /* @__PURE__ */ T("dd", {
								className: "m-0 break-all text-xs leading-5 text-foreground",
								children: t
							})]
						}, e))
					})
				]
			}, e.id)), t.length ? null : /* @__PURE__ */ T("p", {
				className: "m-0 p-4 text-sm text-muted-foreground",
				children: "No source or rights records are available."
			})]
		})]
	});
}
function Ni({ relations: t, title: n = "Explicit textual relations", description: r = "Relation type, method and provenance remain inspectable. Visual proximity does not imply identity.", className: i }) {
	return /* @__PURE__ */ E("section", {
		className: e("border border-border bg-card", i),
		"aria-label": n,
		children: [/* @__PURE__ */ E("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ T("p", {
				className: "mw-meta text-primary",
				children: n
			}), /* @__PURE__ */ T("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: r
			})]
		}), /* @__PURE__ */ E("div", {
			className: "grid gap-3 p-3",
			children: [t.map((e) => /* @__PURE__ */ E("article", {
				className: "border border-border bg-background p-4",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T(L, {
							variant: Oi(e.state),
							children: e.state ?? "asserted"
						}), /* @__PURE__ */ T(L, {
							variant: "info",
							children: e.relation.replaceAll("_", " ")
						})]
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-4 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]",
						children: [
							/* @__PURE__ */ T("code", {
								className: "break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground",
								children: e.subject
							}),
							/* @__PURE__ */ T("span", {
								className: "mw-meta text-center text-primary",
								"aria-hidden": "true",
								children: "→"
							}),
							/* @__PURE__ */ T("code", {
								className: "break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground",
								children: e.object
							})
						]
					}),
					/* @__PURE__ */ E("p", {
						className: "sr-only",
						children: [
							e.subject,
							" ",
							e.relation.replaceAll("_", " "),
							" ",
							e.object
						]
					}),
					e.method ? /* @__PURE__ */ E("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: ["Method · ", e.method]
					}) : null,
					e.evidence?.length ? /* @__PURE__ */ E("p", {
						className: "mt-2 break-all text-[10px] leading-5 text-muted-foreground",
						children: ["Evidence · ", e.evidence.join(" · ")]
					}) : null,
					e.provenance ? /* @__PURE__ */ E("p", {
						className: "mt-2 break-all text-[10px] leading-5 text-muted-foreground",
						children: ["Provenance · ", e.provenance]
					}) : null
				]
			}, e.id)), t.length ? null : /* @__PURE__ */ T("p", {
				className: "m-0 p-2 text-sm text-muted-foreground",
				children: "No explicit textual relations are available."
			})]
		})]
	});
}
var Pi = {
	schemaVersion: 1,
	rule: "Application data statuses resolve to a semantic visual state. Consumers must show the original text label as well as the visual state; color alone is insufficient.",
	defaultVariant: "neutral",
	variants: {
		attested: "verified",
		canonical: "verified",
		verified: "verified",
		supported: "supported",
		strongly_supported: "supported",
		supported_as_documentary_attestation: "supported",
		supports: "supported",
		reviewed: "supported",
		primary: "verified",
		high: "supported",
		probable: "partial",
		plausible: "partial",
		partial: "partial",
		contextualizes: "partial",
		candidate: "partial",
		medium: "partial",
		disputed: "disputed",
		contradicted: "disputed",
		contradicts: "disputed",
		rejected: "disputed",
		unresolved: "unresolved",
		unresolved_uncertainty: "unresolved",
		alternative_explanation: "unresolved",
		unverified: "unresolved",
		indeterminate: "unresolved",
		anonymous: "unresolved",
		conflated: "contested",
		legendary: "contested",
		discovery_only: "info",
		unknown: "neutral"
	}
}, Fi = Pi.variants, Ii = Pi;
function Li(e) {
	return e ? Fi[e] ?? Pi.defaultVariant : Pi.defaultVariant;
}
//#endregion
//#region src/components/confidence-meter.tsx
function Ri({ value: t, label: n = "Confidence", detail: r, className: i }) {
	let a = Math.round(Math.max(0, Math.min(1, Number.isFinite(t) ? t : 0)) * 100);
	return /* @__PURE__ */ E("div", {
		className: e("grid gap-2", i),
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ T("span", {
					className: "mw-meta text-muted-foreground",
					children: n
				}), /* @__PURE__ */ E("strong", {
					className: "font-mono text-xs text-foreground",
					children: [a, "%"]
				})]
			}),
			/* @__PURE__ */ T("div", {
				role: "meter",
				"aria-label": n,
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": a,
				"aria-valuetext": `${a}%`,
				className: "h-2 overflow-hidden border border-border bg-panel",
				children: /* @__PURE__ */ T("span", {
					className: "block h-full bg-current text-success",
					style: { width: `${a}%` }
				})
			}),
			r ? /* @__PURE__ */ T("p", {
				className: "text-xs leading-5 text-muted-foreground",
				children: r
			}) : null
		]
	});
}
//#endregion
//#region src/components/qualified-reference.tsx
function zi({ value: t, href: n, compact: r = !1, className: i }) {
	let a = rt(t), o = /* @__PURE__ */ E("span", {
		className: e("inline-grid gap-1", r ? "grid-cols-[auto_1fr] items-center gap-x-2" : "", i),
		children: [
			a ? /* @__PURE__ */ T(L, {
				variant: "info",
				children: a.domain
			}) : /* @__PURE__ */ T(L, {
				variant: "neutral",
				children: "REFERENCE"
			}),
			/* @__PURE__ */ T("code", {
				className: "break-all text-[10px] text-foreground",
				children: t
			}),
			!r && a ? /* @__PURE__ */ E("small", {
				className: "font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground",
				children: [
					a.repository,
					" · ",
					a.kind
				]
			}) : null
		]
	});
	return n ? /* @__PURE__ */ T("a", {
		href: n,
		className: "mw-link no-underline",
		children: o
	}) : o;
}
//#endregion
//#region src/components/record-field-grid.tsx
function Bi(e) {
	return e.replaceAll("_", " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function Vi(e) {
	return /^[a-z][a-z0-9-]*:.+$/i.test(e);
}
function Hi(e, t) {
	return e == null || e === "" ? /* @__PURE__ */ T("span", {
		className: "text-muted-foreground",
		children: "—"
	}) : typeof e == "boolean" ? e ? "Yes" : "No" : typeof e == "number" ? Number.isInteger(e) ? String(e) : e.toFixed(2) : typeof e == "string" ? Vi(e) ? /* @__PURE__ */ T(zi, {
		value: e,
		href: t?.(e)
	}) : /* @__PURE__ */ T("span", {
		className: "break-words",
		children: e
	}) : Array.isArray(e) ? e.length ? /* @__PURE__ */ T("div", {
		className: "grid gap-2",
		children: e.map((e, n) => /* @__PURE__ */ T("div", {
			className: "border-l border-border pl-3",
			children: Hi(e, t)
		}, typeof e == "string" ? e : n))
	}) : /* @__PURE__ */ T("span", {
		className: "text-muted-foreground",
		children: "None recorded"
	}) : typeof e == "object" ? /* @__PURE__ */ T("dl", {
		className: "grid gap-2",
		children: Object.entries(e).map(([e, n]) => /* @__PURE__ */ E("div", {
			className: "grid gap-1 border-l border-border pl-3",
			children: [/* @__PURE__ */ T("dt", {
				className: "mw-meta text-muted-foreground",
				children: Bi(e)
			}), /* @__PURE__ */ T("dd", {
				className: "m-0 text-sm leading-6 text-foreground",
				children: Hi(n, t)
			})]
		}, e))
	}) : String(e);
}
function Ui({ record: t, labels: n = {}, exclude: r = [], className: i, referenceHref: a, emptyLabel: o = "No fields recorded." }) {
	let s = new Set(r), c = Object.entries(t).filter(([e]) => !s.has(e));
	return /* @__PURE__ */ E("dl", {
		className: e("grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-3", i),
		children: [c.map(([e, t]) => /* @__PURE__ */ E("div", {
			className: "min-w-0 bg-card p-4",
			children: [/* @__PURE__ */ T("dt", {
				className: "mw-meta text-muted-foreground",
				children: n[e] ?? Bi(e)
			}), /* @__PURE__ */ T("dd", {
				className: "m-0 mt-2 text-sm leading-6 text-foreground",
				children: Hi(t, a)
			})]
		}, e)), c.length ? null : /* @__PURE__ */ T("div", {
			className: "bg-card p-4 text-sm text-muted-foreground",
			children: o
		})]
	});
}
//#endregion
//#region src/components/research-domain-ownership-map.tsx
var Wi = [
	{
		x: 84,
		y: 78
	},
	{
		x: 354,
		y: 54
	},
	{
		x: 624,
		y: 78
	},
	{
		x: 84,
		y: 356
	},
	{
		x: 354,
		y: 380
	},
	{
		x: 624,
		y: 356
	}
], Gi = Object.keys(j).filter((e) => e !== "RELATIONSHIP");
function Ki({ className: t, title: n = "Research domain ownership", description: r = "Six canonical research domains connect through the reviewed relationship layer while retaining their canonical repository ownership." }) {
	let i = O(), a = `${i}-title`, o = `${i}-description`, s = j.RELATIONSHIP;
	return /* @__PURE__ */ E("figure", {
		className: e("border border-border bg-card p-4", t),
		children: [/* @__PURE__ */ E("svg", {
			viewBox: "0 0 960 540",
			className: "h-auto w-full",
			role: "img",
			"aria-labelledby": `${a} ${o}`,
			children: [
				/* @__PURE__ */ T("title", {
					id: a,
					children: n
				}),
				/* @__PURE__ */ T("desc", {
					id: o,
					children: r
				}),
				/* @__PURE__ */ T("defs", { children: /* @__PURE__ */ T("pattern", {
					id: `${i}-grid`,
					width: "32",
					height: "32",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ T("path", {
						d: "M32 0H0V32",
						fill: "none",
						stroke: "var(--mw-border)",
						strokeWidth: "1"
					})
				}) }),
				/* @__PURE__ */ T("rect", {
					width: "960",
					height: "540",
					fill: "var(--mw-surface-page)"
				}),
				/* @__PURE__ */ T("rect", {
					width: "960",
					height: "540",
					fill: `url(#${i}-grid)`,
					opacity: ".45"
				}),
				/* @__PURE__ */ T("g", {
					fill: "none",
					stroke: "var(--mw-border-strong)",
					strokeWidth: "2",
					"aria-hidden": "true",
					children: Wi.map((e, t) => /* @__PURE__ */ T("line", {
						x1: "480",
						y1: "270",
						x2: e.x + 126,
						y2: e.y + 66
					}, Gi[t]))
				}),
				Gi.map((e, t) => {
					let n = j[e], r = Wi[t];
					return /* @__PURE__ */ E("g", {
						transform: `translate(${r.x} ${r.y})`,
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ T("rect", {
								width: "252",
								height: "132",
								rx: "12",
								fill: "var(--mw-surface-raised)",
								stroke: "var(--mw-border-strong)",
								strokeWidth: "2"
							}),
							/* @__PURE__ */ T("text", {
								x: "20",
								y: "40",
								fill: "var(--mw-text-primary)",
								fontFamily: "Inter Tight, Inter, Arial, sans-serif",
								fontSize: "24",
								fontWeight: "800",
								children: e
							}),
							/* @__PURE__ */ T("text", {
								x: "20",
								y: "72",
								fill: "var(--mw-text-secondary)",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "13",
								children: n.repository
							}),
							/* @__PURE__ */ T("text", {
								x: "20",
								y: "100",
								fill: "var(--mw-brand-crimson)",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "12",
								children: n.prefix
							})
						]
					}, e);
				}),
				/* @__PURE__ */ E("g", {
					transform: "translate(372 210)",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ T("rect", {
							width: "216",
							height: "120",
							rx: "14",
							fill: "var(--mw-surface-raised)",
							stroke: "var(--mw-brand-crimson)",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ T("text", {
							x: "108",
							y: "38",
							textAnchor: "middle",
							fill: "var(--mw-brand-crimson)",
							fontFamily: "IBM Plex Mono, monospace",
							fontSize: "11",
							fontWeight: "700",
							letterSpacing: "2",
							children: "RELATIONSHIP LAYER"
						}),
						/* @__PURE__ */ T("text", {
							x: "108",
							y: "72",
							textAnchor: "middle",
							fill: "var(--mw-text-primary)",
							fontFamily: "Inter Tight, Inter, Arial, sans-serif",
							fontSize: "25",
							fontWeight: "800",
							children: "CORRELATION"
						}),
						/* @__PURE__ */ E("text", {
							x: "108",
							y: "98",
							textAnchor: "middle",
							fill: "var(--mw-text-secondary)",
							fontFamily: "IBM Plex Mono, monospace",
							fontSize: "10",
							children: [
								s.repository,
								" · ",
								s.prefix
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ E("figcaption", {
			className: "mt-4 border-t border-border pt-4",
			children: [
				/* @__PURE__ */ T("p", {
					className: "mw-meta text-foreground",
					children: "Text equivalent"
				}),
				/* @__PURE__ */ T("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: r
				}),
				/* @__PURE__ */ E("ul", {
					className: "mt-3 grid gap-2 md:grid-cols-2",
					children: [Gi.map((e) => {
						let t = j[e];
						return /* @__PURE__ */ E("li", {
							className: "border border-border bg-background p-3 text-xs leading-5",
							children: [/* @__PURE__ */ T("strong", {
								className: "text-foreground",
								children: e
							}), /* @__PURE__ */ E("span", {
								className: "block text-muted-foreground",
								children: [
									t.repository,
									" · ",
									t.prefix
								]
							})]
						}, e);
					}), /* @__PURE__ */ E("li", {
						className: "border border-primary bg-background p-3 text-xs leading-5",
						children: [/* @__PURE__ */ T("strong", {
							className: "text-foreground",
							children: "RELATIONSHIP"
						}), /* @__PURE__ */ E("span", {
							className: "block text-muted-foreground",
							children: [
								s.repository,
								" · ",
								s.prefix
							]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/contracts/perspective-intelligence.ts
var qi = [
	"visual separation is not truth distance",
	"geographic coverage is not population weight",
	"divergence is not a truth score",
	"signal movement is not underlying event truth",
	"reaction type is not event status",
	"coverage quality is not evidence strength"
];
function Q(e) {
	return Math.max(0, Math.min(1, Number.isFinite(e) ? e : 0));
}
//#endregion
//#region src/components/perspective-intelligence.tsx
var Ji = {
	SUPPORT: "support",
	OPPOSE: "oppose",
	QUESTIONING: "questioning",
	MIXED: "mixed",
	NEUTRAL: "neutral",
	UNKNOWN: "unknown"
};
function Yi(e) {
	return new Intl.NumberFormat(void 0, {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(e);
}
function $(e) {
	return `${Math.round(Q(e) * 100)}%`;
}
function Xi({ phenomenon: e, perspectives: t, className: n = "" }) {
	let r = Math.max(1, t.length), i = {
		x: 50,
		y: 50
	};
	return /* @__PURE__ */ E("section", {
		className: `mw-perspective-constellation ${n}`.trim(),
		"aria-label": "Perspective constellation",
		children: [/* @__PURE__ */ T("div", {
			className: "mw-perspective-constellation__canvas",
			children: /* @__PURE__ */ E("svg", {
				viewBox: "0 0 100 100",
				role: "img",
				"aria-label": `${t.length} perspectives surrounding ${e}`,
				children: [
					/* @__PURE__ */ E("title", { children: ["Perspective constellation for ", e] }),
					/* @__PURE__ */ T("defs", { children: /* @__PURE__ */ E("radialGradient", {
						id: "mw-perspective-core",
						cx: "50%",
						cy: "50%",
						r: "50%",
						children: [/* @__PURE__ */ T("stop", {
							offset: "0%",
							stopColor: "var(--mw-perspective-violet)",
							stopOpacity: ".42"
						}), /* @__PURE__ */ T("stop", {
							offset: "100%",
							stopColor: "var(--mw-perspective-violet)",
							stopOpacity: ".04"
						})]
					}) }),
					/* @__PURE__ */ T("circle", {
						cx: "50",
						cy: "50",
						r: "15",
						fill: "url(#mw-perspective-core)",
						stroke: "var(--mw-perspective-violet)",
						strokeWidth: ".55"
					}),
					t.map((e, t) => {
						let n = Math.PI * 2 * t / r - Math.PI / 2, a = i.x + Math.cos(n) * 39, o = i.y + Math.sin(n) * 39, s = Q(e.salience ?? .5);
						return /* @__PURE__ */ E("g", { children: [
							/* @__PURE__ */ T("line", {
								x1: "50",
								y1: "50",
								x2: a,
								y2: o,
								stroke: "var(--mw-perspective-edge)",
								strokeWidth: .15 + s * .24,
								opacity: .35 + s * .5
							}),
							/* @__PURE__ */ T("circle", {
								cx: a,
								cy: o,
								r: 2.5 + s * 1.9,
								className: `mw-perspective-dot mw-perspective-dot--${Ji[e.position] ?? "unknown"}`
							}),
							/* @__PURE__ */ T("text", {
								x: a,
								y: o + 6.2,
								textAnchor: "middle",
								className: "mw-perspective-svg-label",
								children: e.actorType
							})
						] }, e.id);
					}),
					/* @__PURE__ */ T("text", {
						x: "50",
						y: "49",
						textAnchor: "middle",
						className: "mw-perspective-svg-core",
						children: "PHENOMENON"
					}),
					/* @__PURE__ */ T("text", {
						x: "50",
						y: "53",
						textAnchor: "middle",
						className: "mw-perspective-svg-sub",
						children: "MANY VIEWS"
					})
				]
			})
		}), /* @__PURE__ */ T("div", {
			className: "mw-perspective-constellation__legend",
			children: t.map((e) => /* @__PURE__ */ E("article", { children: [/* @__PURE__ */ T("i", { className: `mw-perspective-legend-dot mw-perspective-legend-dot--${Ji[e.position] ?? "unknown"}` }), /* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("strong", { children: e.label }), /* @__PURE__ */ E("span", { children: [
				e.actorType,
				" · ",
				e.position,
				e.framing ? ` · ${e.framing}` : ""
			] })] })] }, e.id))
		})]
	});
}
var Zi = {
	GLOBAL: [50, 46],
	"US-NY": [25, 34],
	"US-TX": [22, 42],
	US: [24, 37],
	ID: [77, 58],
	EU: [51, 31],
	GB: [48, 28],
	IN: [69, 45],
	CN: [76, 38],
	JP: [84, 38],
	BR: [36, 62],
	ZA: [57, 70],
	AU: [84, 70]
};
function Qi({ points: e, className: t = "" }) {
	let n = Math.max(1, ...e.map((e) => e.count));
	return /* @__PURE__ */ E("section", {
		className: `mw-perspective-geo ${t}`.trim(),
		"aria-label": "Perspective geography coverage",
		children: [/* @__PURE__ */ E("svg", {
			viewBox: "0 0 100 58",
			role: "img",
			children: [
				/* @__PURE__ */ T("title", { children: "Geographic coverage of perspective observations" }),
				/* @__PURE__ */ T("path", {
					className: "mw-perspective-world",
					d: "M7 22 15 16 25 18 29 24 23 28 17 26 12 30 7 27ZM27 31 31 29 35 35 32 43 29 48 26 39ZM40 16 49 13 58 16 62 21 57 24 51 23 46 25 40 22ZM49 26 55 26 58 32 56 42 52 48 49 40 47 32ZM59 15 68 13 79 16 87 20 94 25 90 30 81 29 75 33 68 29 62 23ZM84 40 89 38 95 42 92 48 87 49 83 45Z"
				}),
				e.map((e, t) => {
					let r = Zi[e.label] ?? [12 + t * 13 % 76, 18 + t * 11 % 34], i = e.x ?? r[0], a = e.y ?? r[1], o = 1.3 + e.count / n * 2.5;
					return /* @__PURE__ */ E("g", { children: [
						/* @__PURE__ */ T("circle", {
							cx: i,
							cy: a,
							r: o + 1.8,
							className: "mw-perspective-geo-halo"
						}),
						/* @__PURE__ */ T("circle", {
							cx: i,
							cy: a,
							r: o,
							className: "mw-perspective-geo-point"
						}),
						/* @__PURE__ */ T("text", {
							x: i + 2.2,
							y: a - 2.2,
							className: "mw-perspective-svg-label",
							children: e.label
						})
					] }, e.id);
				})
			]
		}), /* @__PURE__ */ T("div", {
			className: "mw-perspective-geo__list",
			children: e.map((e) => /* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("b", { children: e.label }), Yi(e.count)] }, e.id))
		})]
	});
}
function $i({ divergence: e, uncertainty: t, convergence: n = 1 - e, coverage: r, className: i = "" }) {
	let a = 14 + Q(e) * 72, o = 14 + Q(t) * 72;
	return /* @__PURE__ */ E("section", {
		className: `mw-divergence-compass ${i}`.trim(),
		"aria-label": "Divergence and uncertainty compass",
		children: [/* @__PURE__ */ E("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ E("title", { children: [
					"Divergence ",
					$(e),
					", uncertainty ",
					$(t)
				] }),
				[
					18,
					30,
					42
				].map((e) => /* @__PURE__ */ T("circle", {
					cx: "50",
					cy: "50",
					r: e,
					className: "mw-divergence-ring"
				}, e)),
				/* @__PURE__ */ T("line", {
					x1: "8",
					y1: "50",
					x2: "92",
					y2: "50",
					className: "mw-divergence-axis"
				}),
				/* @__PURE__ */ T("line", {
					x1: "50",
					y1: "8",
					x2: "50",
					y2: "92",
					className: "mw-divergence-axis"
				}),
				/* @__PURE__ */ T("circle", {
					cx: a,
					cy: o,
					r: "4.2",
					className: "mw-divergence-point"
				}),
				/* @__PURE__ */ T("text", {
					x: "9",
					y: "47",
					className: "mw-perspective-svg-label",
					children: "CONVERGE"
				}),
				/* @__PURE__ */ T("text", {
					x: "72",
					y: "47",
					className: "mw-perspective-svg-label",
					children: "DIVERGE"
				}),
				/* @__PURE__ */ T("text", {
					x: "52",
					y: "12",
					className: "mw-perspective-svg-label",
					children: "LOW U"
				}),
				/* @__PURE__ */ T("text", {
					x: "52",
					y: "91",
					className: "mw-perspective-svg-label",
					children: "HIGH U"
				})
			]
		}), /* @__PURE__ */ E("div", {
			className: "mw-divergence-compass__metrics",
			children: [
				/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("small", { children: "DIVERGENCE" }), /* @__PURE__ */ T("strong", { children: $(e) })] }),
				/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("small", { children: "CONVERGENCE" }), /* @__PURE__ */ T("strong", { children: $(n) })] }),
				/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("small", { children: "UNCERTAINTY" }), /* @__PURE__ */ T("strong", { children: $(t) })] }),
				r === void 0 ? null : /* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("small", { children: "COVERAGE" }), /* @__PURE__ */ T("strong", { children: $(r) })] })
			]
		})]
	});
}
function ea({ cells: e, className: t = "" }) {
	let n = [...new Set(e.map((e) => e.actor))], r = [...new Set(e.map((e) => e.framing))], i = new Map(e.map((e) => [`${e.actor}::${e.framing}`, Q(e.value)]));
	return /* @__PURE__ */ E("section", {
		className: `mw-actor-framing-matrix ${t}`.trim(),
		"aria-label": "Actor by framing matrix",
		children: [/* @__PURE__ */ T("div", {
			className: "mw-actor-framing-matrix__scroll",
			children: /* @__PURE__ */ E("div", {
				className: "mw-actor-framing-matrix__grid",
				style: { gridTemplateColumns: `minmax(110px, 1.2fr) repeat(${r.length}, minmax(70px, 1fr))` },
				children: [
					/* @__PURE__ */ T("span", {}),
					r.map((e) => /* @__PURE__ */ T("b", { children: e }, e)),
					n.flatMap((e) => [/* @__PURE__ */ T("strong", { children: e }, `${e}-label`), ...r.map((t) => {
						let n = i.get(`${e}::${t}`) ?? 0;
						return /* @__PURE__ */ T("i", {
							style: { opacity: .12 + n * .88 },
							title: `${e} × ${t}: ${$(n)}`,
							children: /* @__PURE__ */ T("span", { children: n > 0 ? Math.round(n * 100) : "" })
						}, `${e}-${t}`);
					})])
				]
			})
		}), /* @__PURE__ */ T("p", { children: "Cell intensity represents observed presence or salience. It does not represent support." })]
	});
}
function ta({ signals: e, className: t = "" }) {
	let n = e.map((t, n) => {
		let r = e.length <= 1 ? 50 : 7 + n / (e.length - 1) * 86, i = 84 - Q(t.confidence) * 62;
		return {
			...t,
			x: r,
			y: i
		};
	});
	return /* @__PURE__ */ E("section", {
		className: `mw-zigzag-timeline ${t}`.trim(),
		"aria-label": "Zigzag signal timeline",
		children: [/* @__PURE__ */ E("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ T("title", { children: "Signal timeline across the perspective field" }),
				/* @__PURE__ */ T("line", {
					x1: "6",
					y1: "86",
					x2: "94",
					y2: "86",
					className: "mw-zigzag-axis"
				}),
				n.length > 1 ? /* @__PURE__ */ T("polyline", {
					points: n.map((e) => `${e.x},${e.y}`).join(" "),
					className: "mw-zigzag-line"
				}) : null,
				n.map((e) => /* @__PURE__ */ E("g", { children: [/* @__PURE__ */ T("circle", {
					cx: e.x,
					cy: e.y,
					r: "2.5",
					className: "mw-zigzag-point"
				}), /* @__PURE__ */ T("text", {
					x: e.x,
					y: e.y - 5,
					textAnchor: "middle",
					className: "mw-perspective-svg-label",
					children: e.type
				})] }, e.id))
			]
		}), /* @__PURE__ */ T("ol", {
			className: "mw-zigzag-timeline__list",
			children: e.map((e) => /* @__PURE__ */ E("li", { children: [
				/* @__PURE__ */ T("b", { children: e.type }),
				/* @__PURE__ */ T("strong", { children: $(e.confidence) }),
				/* @__PURE__ */ T("span", { children: e.label }),
				e.detail ? /* @__PURE__ */ T("small", { children: e.detail }) : null
			] }, e.id))
		})]
	});
}
function na({ snapshots: e, changes: t = [], className: n = "" }) {
	let r = [...e].sort((e, t) => Date.parse(e.timestamp) - Date.parse(t.timestamp)), i = (e) => r.map((t, n) => `${r.length <= 1 ? 50 : 8 + n / (r.length - 1) * 84},${86 - Q(t[e]) * 68}`).join(" ");
	return /* @__PURE__ */ E("section", {
		className: `mw-perspective-history ${n}`.trim(),
		"aria-label": "Perspective temporal history",
		children: [/* @__PURE__ */ E("div", {
			className: "mw-perspective-history__chart",
			children: [/* @__PURE__ */ E("svg", {
				viewBox: "0 0 100 100",
				role: "img",
				children: [
					/* @__PURE__ */ T("title", { children: r.length > 1 ? "Comparable perspective snapshots over time" : "Perspective baseline snapshot; trend not yet established" }),
					/* @__PURE__ */ T("line", {
						x1: "7",
						y1: "86",
						x2: "93",
						y2: "86",
						className: "mw-zigzag-axis"
					}),
					/* @__PURE__ */ T("line", {
						x1: "7",
						y1: "18",
						x2: "7",
						y2: "86",
						className: "mw-zigzag-axis"
					}),
					r.length > 1 ? /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("polyline", {
						points: i("divergence"),
						className: "mw-perspective-history__divergence"
					}), /* @__PURE__ */ T("polyline", {
						points: i("uncertainty"),
						className: "mw-perspective-history__uncertainty"
					})] }) : null,
					r.map((e, t) => {
						let n = r.length <= 1 ? 50 : 8 + t / (r.length - 1) * 84, i = 86 - Q(e.divergence) * 68, a = 86 - Q(e.uncertainty) * 68;
						return /* @__PURE__ */ E("g", { children: [
							/* @__PURE__ */ T("circle", {
								cx: n,
								cy: i,
								r: "2.2",
								className: "mw-perspective-history__dot-d"
							}),
							/* @__PURE__ */ T("circle", {
								cx: n,
								cy: a,
								r: "1.9",
								className: "mw-perspective-history__dot-u"
							}),
							/* @__PURE__ */ T("text", {
								x: n,
								y: "94",
								textAnchor: "middle",
								className: "mw-perspective-svg-label",
								children: new Date(e.timestamp).toISOString().slice(0, 10)
							})
						] }, e.id);
					})
				]
			}), /* @__PURE__ */ E("div", {
				className: "mw-perspective-history__legend",
				children: [/* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("i", { className: "mw-perspective-history__legend-d" }), "DIVERGENCE"] }), /* @__PURE__ */ E("span", { children: [/* @__PURE__ */ T("i", { className: "mw-perspective-history__legend-u" }), "UNCERTAINTY"] })]
			})]
		}), /* @__PURE__ */ E("div", {
			className: "mw-perspective-history__ledger",
			children: [
				/* @__PURE__ */ T("strong", { children: r.length > 1 ? "CHANGE LEDGER" : "BASELINE ESTABLISHED" }),
				r.length <= 1 ? /* @__PURE__ */ T("p", { children: "One comparable snapshot exists. JIZZ must not call this a trend until a later snapshot is measured with compatible methodology." }) : null,
				t.length ? /* @__PURE__ */ T("ol", { children: t.map((e) => /* @__PURE__ */ E("li", { children: [
					/* @__PURE__ */ T("b", { children: e.type }),
					e.dimension ? /* @__PURE__ */ T("span", { children: e.dimension }) : null,
					e.confidence === void 0 ? null : /* @__PURE__ */ T("em", { children: $(e.confidence) }),
					/* @__PURE__ */ T("small", { children: e.rationale ?? "Derived temporal change." })
				] }, e.id)) }) : /* @__PURE__ */ T("p", { children: "No CHANGE record has passed the temporal comparison gate yet." })
			]
		})]
	});
}
function ra({ reactions: e, className: t = "" }) {
	let n = Math.max(1, ...e.map((e) => e.count));
	return /* @__PURE__ */ T("section", {
		className: `mw-reaction-spectrum ${t}`.trim(),
		"aria-label": "Reaction spectrum",
		children: e.map((e) => /* @__PURE__ */ E("article", { children: [
			/* @__PURE__ */ T("i", { style: {
				width: `${28 + e.count / n * 54}px`,
				height: `${28 + e.count / n * 54}px`
			} }),
			/* @__PURE__ */ T("strong", { children: e.type }),
			/* @__PURE__ */ T("span", { children: e.count })
		] }, e.type))
	});
}
function ia({ coverage: e, className: t = "" }) {
	let n = [
		e.source,
		e.actor,
		e.geography,
		e.language,
		e.framing,
		e.position
	].map(Q), r = [
		"SOURCE",
		"ACTOR",
		"GEO",
		"LANG",
		"FRAME",
		"POSITION"
	], i = (e, t, n = 39) => {
		let r = Math.PI * 2 * t / 6 - Math.PI / 2;
		return [50 + Math.cos(r) * n * e, 50 + Math.sin(r) * n * e];
	}, a = n.map((e, t) => i(e, t)).map(([e, t]) => `${e},${t}`).join(" ");
	return /* @__PURE__ */ E("section", {
		className: `mw-coverage-radar ${t}`.trim(),
		"aria-label": "Perspective coverage radar",
		children: [/* @__PURE__ */ E("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ T("title", { children: "Coverage across source, actor, geography, language, framing and position dimensions" }),
				[
					.25,
					.5,
					.75,
					1
				].map((e) => /* @__PURE__ */ T("polygon", {
					points: r.map((t, n) => i(1, n, 39 * e)).map(([e, t]) => `${e},${t}`).join(" "),
					className: "mw-coverage-radar__ring"
				}, e)),
				r.map((e, t) => {
					let [n, r] = i(1.13, t);
					return /* @__PURE__ */ T("text", {
						x: n,
						y: r,
						textAnchor: "middle",
						className: "mw-perspective-svg-label",
						children: e
					}, e);
				}),
				/* @__PURE__ */ T("polygon", {
					points: a,
					className: "mw-coverage-radar__value"
				})
			]
		}), /* @__PURE__ */ T("p", { children: "Coverage quality is not evidence strength." })]
	});
}
function aa({ stages: e, className: t = "" }) {
	return /* @__PURE__ */ E("section", {
		className: `mw-perspective-provenance ${t}`.trim(),
		"aria-label": "Perspective provenance flow",
		children: [/* @__PURE__ */ T("ol", { children: e.map((t, n) => /* @__PURE__ */ E("li", {
			"data-state": t.state ?? "pending",
			children: [
				t.href ? /* @__PURE__ */ T("a", {
					href: t.href,
					target: "_blank",
					rel: "noreferrer",
					children: t.label
				}) : /* @__PURE__ */ T("strong", { children: t.label }),
				t.count === void 0 ? null : /* @__PURE__ */ T("span", { children: t.count }),
				n < e.length - 1 ? /* @__PURE__ */ T("i", {
					"aria-hidden": "true",
					children: "→"
				}) : null
			]
		}, t.id)) }), /* @__PURE__ */ T("p", { children: "Issue first · source second · canon last." })]
	});
}
function oa({ phenomenon: e, perspectives: t, geography: n, divergence: r, convergence: i, uncertainty: a, coverage: o, framingCells: s, signals: c, reactions: l, snapshots: u = [], changes: d = [], provenance: f, className: p = "" }) {
	return /* @__PURE__ */ E("section", {
		className: `mw-perspective-board ${p}`.trim(),
		"aria-label": "Perspective intelligence visual board",
		children: [
			/* @__PURE__ */ T("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ T(Xi, {
					phenomenon: e,
					perspectives: t
				})
			}),
			/* @__PURE__ */ T(Qi, { points: n }),
			/* @__PURE__ */ T($i, {
				divergence: r,
				convergence: i,
				uncertainty: a,
				coverage: (o.source + o.actor + o.geography + o.language + o.framing + o.position) / 6
			}),
			/* @__PURE__ */ T("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ T(ea, { cells: s })
			}),
			/* @__PURE__ */ T("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ T(ta, { signals: c })
			}),
			/* @__PURE__ */ T("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ T(na, {
					snapshots: u,
					changes: d
				})
			}),
			/* @__PURE__ */ T(ra, { reactions: l }),
			/* @__PURE__ */ T(ia, { coverage: o }),
			/* @__PURE__ */ T("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ T(aa, { stages: f })
			})
		]
	});
}
//#endregion
//#region src/components/web-stats.tsx
var sa = "https://api-worker.bjo163.workers.dev";
function ca({ domain: t = "moonwitness.biz.id", apiHost: n = sa, autoTrack: r = !0, className: i, variant: a = "detailed" }) {
	let [o, s] = k(null), [c, l] = k(!0), [u, d] = k(null);
	D(() => {
		if (!(!r || typeof window > "u")) try {
			let e = {
				path: window.location.pathname || "/",
				referrer: document.referrer || "direct",
				screen_resolution: `${window.screen.width}x${window.screen.height}`
			};
			navigator.sendBeacon ? navigator.sendBeacon(`${n}/public/web/track/${t}`, JSON.stringify(e)) : fetch(`${n}/public/web/track/${t}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(e)
			}).catch(() => {});
		} catch {}
	}, [
		t,
		n,
		r
	]), D(() => {
		let e = !0;
		async function r() {
			try {
				l(!0);
				let r = await fetch(`${n}/public/web/stats/${t}`);
				if (!r.ok) throw Error(`HTTP ${r.status}`);
				let i = await r.json();
				e && (s(i), d(null));
			} catch (t) {
				e && d(t.message || "Failed to load telemetry");
			} finally {
				e && l(!1);
			}
		}
		r();
		let i = setInterval(r, 3e4);
		return () => {
			e = !1, clearInterval(i);
		};
	}, [t, n]);
	let f = We(() => Math.max(...o?.charts?.hourly_24h?.map((e) => e.pageviews) || [1], 1), [o]);
	return u ? /* @__PURE__ */ E("div", {
		className: e("p-4 border border-border bg-panel text-xs text-muted-foreground font-mono", i),
		children: [
			"Telemetry offline for ",
			/* @__PURE__ */ T("code", { children: t }),
			": ",
			u
		]
	}) : c && !o ? /* @__PURE__ */ T("div", {
		className: e("p-6 border border-border bg-panel text-center text-xs text-muted-foreground font-mono animate-pulse", i),
		children: "Synchronizing observatory web stats..."
	}) : o ? a === "compact" ? /* @__PURE__ */ E("div", {
		className: e("flex flex-wrap items-center gap-4 border border-border bg-panel px-4 py-2 text-xs font-mono", i),
		children: [
			/* @__PURE__ */ E("span", {
				className: "inline-flex items-center gap-2 text-success",
				children: [/* @__PURE__ */ T("span", { className: "h-2 w-2 rounded-full bg-success animate-ping" }), "OPERATIONAL"]
			}),
			/* @__PURE__ */ E("span", {
				className: "text-muted-foreground",
				children: ["VISITORS 24H: ", /* @__PURE__ */ T("b", { children: o.traffic_overview.unique_visitors_24h })]
			}),
			/* @__PURE__ */ E("span", {
				className: "text-muted-foreground",
				children: ["PAGEVIEWS: ", /* @__PURE__ */ T("b", { children: o.traffic_overview.pageviews_24h })]
			}),
			/* @__PURE__ */ E("span", {
				className: "text-muted-foreground",
				children: ["ACTIVE NOW: ", /* @__PURE__ */ T("b", {
					className: "text-success",
					children: o.traffic_overview.realtime_active_visitors_5m
				})]
			}),
			/* @__PURE__ */ E("span", {
				className: "ml-auto text-[10px] text-muted-foreground",
				children: [
					"EDGE: ",
					o.live_probe.edge_datacenter,
					" · ",
					o.live_probe.response_time_ms,
					"ms"
				]
			})
		]
	}) : /* @__PURE__ */ E("div", {
		className: e("border border-border bg-panel p-6 font-mono text-foreground", i),
		children: [
			/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("span", {
					className: "text-[10px] tracking-widest text-muted-foreground uppercase",
					children: "04 / WEB OBSERVATORY TELEMETRY"
				}), /* @__PURE__ */ E("h3", {
					className: "text-lg font-bold tracking-tight text-foreground mt-1",
					children: ["Live Web Analytics · ", t]
				})] }), /* @__PURE__ */ E("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ E("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground",
						children: [
							/* @__PURE__ */ T("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
							"EDGE: ",
							o.live_probe.edge_datacenter,
							" · ",
							o.live_probe.response_time_ms,
							"ms"
						]
					}), /* @__PURE__ */ T("span", {
						className: "text-[10px] text-muted-foreground uppercase",
						children: "LAST 24H"
					})]
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ E("div", {
						className: "border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ T("span", {
								className: "text-[10px] text-muted-foreground uppercase",
								children: "UNIQUE VISITORS"
							}),
							/* @__PURE__ */ T("div", {
								className: "mt-1 text-2xl font-bold",
								children: o.traffic_overview.unique_visitors_24h
							}),
							/* @__PURE__ */ E("span", {
								className: "text-[10px] text-muted-foreground",
								children: [
									o.traffic_overview.visitor_types?.new_visitors || 0,
									" new · ",
									o.traffic_overview.visitor_types?.returning_visitors || 0,
									" ret"
								]
							})
						]
					}),
					/* @__PURE__ */ E("div", {
						className: "border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ T("span", {
								className: "text-[10px] text-muted-foreground uppercase",
								children: "TOTAL PAGEVIEWS"
							}),
							/* @__PURE__ */ T("div", {
								className: "mt-1 text-2xl font-bold",
								children: o.traffic_overview.pageviews_24h
							}),
							/* @__PURE__ */ E("span", {
								className: "text-[10px] text-muted-foreground",
								children: [o.traffic_overview.avg_pages_per_session, " pages / visit"]
							})
						]
					}),
					/* @__PURE__ */ E("div", {
						className: "border border-success/40 bg-success/5 p-4",
						children: [
							/* @__PURE__ */ T("span", {
								className: "text-[10px] text-success uppercase",
								children: "ACTIVE NOW (5M)"
							}),
							/* @__PURE__ */ T("div", {
								className: "mt-1 text-2xl font-bold text-success",
								children: o.traffic_overview.realtime_active_visitors_5m
							}),
							/* @__PURE__ */ T("span", {
								className: "text-[10px] text-muted-foreground",
								children: "Live presence"
							})
						]
					}),
					/* @__PURE__ */ E("div", {
						className: "border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ T("span", {
								className: "text-[10px] text-muted-foreground uppercase",
								children: "PROTOCOL & SSL"
							}),
							/* @__PURE__ */ T("div", {
								className: "mt-1 text-sm font-semibold truncate",
								children: o.live_probe.protocol || "HTTP/2 - HTTPS"
							}),
							/* @__PURE__ */ E("span", {
								className: "text-[10px] text-muted-foreground",
								children: [
									"HTTP ",
									o.live_probe.http_status,
									" OK"
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-6 border border-border bg-card p-4",
				children: [/* @__PURE__ */ E("div", {
					className: "flex items-center justify-between text-[10px] text-muted-foreground mb-4",
					children: [/* @__PURE__ */ T("span", { children: "24-HOUR TRAFFIC TIME-SERIES" }), /* @__PURE__ */ T("span", { children: "● Pageviews / hour" })]
				}), /* @__PURE__ */ T("div", {
					className: "flex h-24 items-end gap-1.5 border-b border-border/60 pb-2",
					children: o.charts?.hourly_24h?.map((t, n) => {
						let r = Math.max(Math.round(t.pageviews / f * 100), t.pageviews > 0 ? 16 : 4);
						return /* @__PURE__ */ E("div", {
							className: "group relative flex-1 h-full flex flex-col justify-end items-center",
							children: [/* @__PURE__ */ T("div", {
								className: e("w-full rounded-t transition-all", t.pageviews > 0 ? "bg-primary shadow-[0_0_8px_rgba(56,139,253,0.5)]" : "bg-border/60"),
								style: { height: `${r}%` }
							}), n % 4 == 0 && /* @__PURE__ */ T("span", {
								className: "absolute -bottom-5 text-[9px] text-muted-foreground whitespace-nowrap",
								children: t.hour
							})]
						}, n);
					})
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ E("div", {
					className: "border border-border bg-card p-4",
					children: [/* @__PURE__ */ T("h4", {
						className: "text-[10px] font-bold text-muted-foreground uppercase mb-3",
						children: "TOP ACCESSED PATHS"
					}), /* @__PURE__ */ T("div", {
						className: "space-y-2 text-xs",
						children: o.top_pages && o.top_pages.length > 0 ? o.top_pages.slice(0, 5).map((e) => /* @__PURE__ */ E("div", {
							className: "flex justify-between items-center",
							children: [/* @__PURE__ */ T("code", {
								className: "rounded bg-panel px-1.5 py-0.5 text-primary text-[11px]",
								children: e.path
							}), /* @__PURE__ */ E("span", {
								className: "text-muted-foreground",
								children: [
									e.views,
									" views (",
									e.percentage,
									"%)"
								]
							})]
						}, e.path)) : /* @__PURE__ */ T("span", {
							className: "text-muted-foreground text-[11px]",
							children: "No path logs yet"
						})
					})]
				}), /* @__PURE__ */ E("div", {
					className: "border border-border bg-card p-4",
					children: [/* @__PURE__ */ T("h4", {
						className: "text-[10px] font-bold text-muted-foreground uppercase mb-3",
						children: "CLIENT ENVIRONMENT"
					}), /* @__PURE__ */ E("div", {
						className: "flex flex-wrap gap-2",
						children: [o.client_environment?.devices?.map((e) => /* @__PURE__ */ E("span", {
							className: "rounded border border-border bg-panel px-2 py-0.5 text-[11px] text-muted-foreground",
							children: [
								e.device,
								": ",
								e.percentage,
								"%"
							]
						}, e.device)), o.client_environment?.operating_systems?.map((e) => /* @__PURE__ */ E("span", {
							className: "rounded border border-border bg-panel px-2 py-0.5 text-[11px] text-muted-foreground",
							children: [
								e.os,
								": ",
								e.percentage,
								"%"
							]
						}, e.os))]
					})]
				})]
			})
		]
	}) : null;
}
//#endregion
//#region src/components/observatory-footer.tsx
function la({ domain: t = "moonwitness.biz.id", apiHost: n, showStats: r = !0, statsVariant: i = "detailed", statsProps: a, customStats: o, tagline: s = "MoonWitness watches. Rocksoul follows. The record connects. The law draws the line. The trail stays inspectable.", legalNote: c = "TRUTH LEAVES A TRACE.", className: l }) {
	return /* @__PURE__ */ E("footer", {
		id: "about",
		className: e("border-t border-border bg-background pt-10 font-mono text-foreground", l),
		children: [r ? /* @__PURE__ */ T("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12",
			children: o || /* @__PURE__ */ T(ca, {
				domain: t,
				apiHost: n,
				variant: i,
				...a
			})
		}) : null, /* @__PURE__ */ T("div", {
			className: "border-t border-border/60 bg-panel/40 py-10",
			children: /* @__PURE__ */ E("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ E("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ E("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ T(Ye, { className: "h-8 w-8 text-foreground" }), /* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("strong", {
							className: "block text-sm font-black tracking-wider text-foreground",
							children: "MOONWITNESS"
						}), /* @__PURE__ */ T("span", {
							className: "text-[10px] tracking-widest text-muted-foreground uppercase",
							children: "INDEPENDENT OBSERVATORY"
						})] })]
					}), /* @__PURE__ */ T("p", {
						className: "max-w-xl text-xs leading-relaxed text-muted-foreground",
						children: s
					})]
				}), /* @__PURE__ */ E("div", {
					className: "mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 text-[10px] text-muted-foreground md:flex-row md:justify-between",
					children: [/* @__PURE__ */ E("span", { children: ["ROCKSOUL / PUBLIC WEB · ", t] }), /* @__PURE__ */ T("span", { children: c })]
				})]
			})
		})]
	});
}
//#endregion
export { kr as AIWorkspaceScreen, Pn as AWSBoundary, Jr as AWSLegalScreen, cr as AWSLegalSummaryPattern, oi as AWSScreen, ea as ActorFramingMatrix, vn as AppTopbar, pt as ApplicationActionsProvider, yn as ApplicationShell, Pr as ApplicationStatesScreen, Vt as AssetExplorer, Re as AttachmentList, G as AuditEventRow, _r as AuthFormPattern, si as AuthScreen, Nr as AuthorizationScreen, pn as AutoMenu, fn as BackendStatus, L as Badge, Xe as BrandIcon, dn as Breadcrumbs, Dr as CalendarScreen, Mn as CaseCard, In as CaseHeader, Fn as CaseTimeline, mr as CaseTimelinePattern, Or as ChatScreen, Mt as CinematicWebHero, Cn as Citation, _n as CommandPalette, Fr as CommandPaletteReferenceScreen, pr as CommunityCaseThreadPattern, jn as CommunityComposer, Yr as CommunityScreen, wt as CommunitySourceLocatorLink, Ri as ConfidenceMeter, Ne as ContentState, sr as CorrelationGraphPattern, Ln as CorrelationScore, Xr as CorrelationScreen, ia as CoverageRadar, wr as DashboardScreen, Ae as DataTable, $r as DesignSystemScreen, Me as DetailPanel, Tn as DiscussionItem, $i as DivergenceCompass, Rn as DomainRecordSummary, Z as DomainScreen, vi as DossierHeader, gr as EmptyLoadingErrorPattern, Pe as EmptyState, Fe as ErrorState, ri as EventScreen, Ei as EventTopologyGraph, Sn as EvidenceCard, Hn as EvidenceGraph, or as EvidenceGridPattern, xi as EvidenceMatrix, je as FilterBar, Be as FormFooter, ze as FormSection, Kn as FourRecordSummary, Nn as GraphEdge, Un as GraphNode, Di as HistoricityBand, Er as KanbanScreen, li as LandingHeroScreen, mi as LandingScreen, qr as LegalApplicabilityMatrix, Jn as LegalStatus, Ie as LoadingState, ne as MOONWITNESS_ACCEPTED_REPOSITORY_BASE, Ht as MOONWITNESS_CANDIDATE_ASSET_BASE, gt as MOONWITNESS_CINEMATIC_WEB_HERO_BASE, y as MOONWITNESS_STABLE_REPOSITORY_BASE, hi as MW0042Overview, bn as MWHeader, ui as ManifestoScreen, pi as MethodScreen, K as MetricTile, fr as ModerationQueue, ee as MoonWitnessAssetImage, re as MoonWitnessAssetProvider, A as MoonWitnessBrand, Wt as MoonWitnessCandidateAssetImage, Ct as MoonWitnessCommunityParticipationAsset, Ye as MoonWitnessMark, g as MoonWitnessPersonMark, l as MoonWitnessPersonaAvatar, te as MoonWitnessRegistryAssetImage, b as MoonWitnessResilientImage, kt as MoonWitnessRuntimeMotion, d as MoonWitnessStatusAsset, F as NavigationLink, bt as NavigationProvider, Dn as NotificationItem, mn as NotificationsPanel, Ir as NotificationsReferenceScreen, la as ObservatoryFooter, Si as ObservatorySectionNav, qi as PERSPECTIVE_VISUAL_GUARDRAILS, ar as Pagination, ji as ParallelTextLanes, ii as PersonScreen, Xi as PerspectiveConstellation, Qi as PerspectiveGeographyField, oa as PerspectiveIntelligenceBoard, ir as PlatformAdminVisual, nr as PlatformBackendBoundary, er as PlatformRoleMatrix, _i as PlatformScreen, rr as PlatformServiceRegistry, kn as PlatformSidebar, Mr as ProfileSettingsScreen, aa as ProvenanceFlow, Ci as ProvenanceRail, ur as PublicCasePattern, zi as QualifiedReferenceView, ai as RGBLScreen, h as ROCKSOUL_ASSETS_CANDIDATE, h as ROCKSOUL_ASSETS_REGISTRY, x as ROCKSOUL_ASSETS_SYNC, ht as ROCKSOUL_CINEMATIC_WEB_HERO_SYNC, st as ROCKSOUL_ECOSYSTEM_OWNER, at as ROCKSOUL_GITHUB_RAW_ORIGIN, it as ROCKSOUL_GITHUB_WEB_ORIGIN, ra as ReactionSpectrum, Ui as RecordFieldGrid, lr as RelatedCases, fi as RepositoriesOverviewScreen, U as RepositoryCard, On as RepositoryHealthRow, dr as RepositoryMonitor, Ki as ResearchDomainOwnershipMap, jr as ResourcesScreen, Ze as RockSoulLogo, di as RocksoulCharacterScreen, An as SearchFilters, hr as SearchFiltersPattern, ke as SearchInput, W as SourceBlock, Mi as SourceRightsSummary, q as StatePanel, qt as StatusBadge, ni as StoryScreen, En as SubmissionCard, na as TemporalPerspectiveHistory, ki as TextualHierarchyTrace, Ni as TextualRelationTrace, B as ThemeToggle, Le as Timeline, wn as TimelineEntry, Oe as UI, hn as UserMenu, ca as WebStats, Sr as WorkflowStrip, ta as ZigzagTimeline, Cr as applicationNotifications, V as applicationResources, rn as applyTheme, j as canonicalDomainOwners, tt as canonicalOwnerFor, _t as cinematicWebHeroAssets, vt as cinematicWebHeroContract, Q as clampPerspectiveMetric, St as communityParticipationAssetIds, H as defaultApplicationPermissions, m as hasMoonWitnessCandidateAsset, m as hasMoonWitnessRegistryAsset, nt as isResearchDomain, zr as legalApplicabilityAxes, Ur as legalApplicabilityAxis, Lr as legalIntelligenceContract, Hr as legalResultDefinition, Rr as legalResultVocabulary, Br as legalReviewPipeline, Vr as legalVisualGuardrails, v as moonWitnessAssetConsumption, u as moonWitnessAssetPackIndexPath, oe as moonWitnessAssetPackVersion, o as moonWitnessAssetPacks, n as moonWitnessAssetRelativePath, c as moonWitnessAssets, c as moonWitnessCandidateAssets, Je as moonWitnessBrandAssets, s as moonWitnessBrandContract, ae as moonWitnessCandidateAssetPath, ae as moonWitnessRegistryAssetPath, Gt as moonWitnessCandidateConsumption, Tt as moonWitnessRuntimeMotionIds, qe as moonWitnessTokens, J as mw0042, rt as parseQualifiedReference, Zn as platformAdminCommandActions, N as platformAdminContract, Qn as platformAdminPermissions, Xn as platformAdminResources, mt as platformAdminVisuals, yr as productionScreenAssetMap, et as researchDomainVisualContract, dt as resolveCommunitySourceLocator, ie as resolveMoonWitnessAssetUrl, Ut as resolveMoonWitnessCandidateAssetUrl, S as resolveMoonWitnessRegistryAssetUrl, Dt as resolveMoonWitnessRuntimeMotion, ut as resolvePinnedRocksoulAssetSourceUrl, lt as resolveRocksoulRepositoryUrl, nn as resolveTheme, ln as resourceDescriptors, ot as rocksoulEcosystemRepositories, vr as semanticPrimitiveByNodeKind, br as semanticPrimitiveUrl, Li as semanticStatusVariant, Fi as semanticStatusVariants, Kt as statusBadgeVariants, Ii as statusVisualContract, M as useApplicationActions, f as useMoonWitnessAssetBaseUrl, p as useMoonWitnessSfx, Ot as usePrefersReducedMotion, i as v2NavigationItems, r as v2ResourceDescriptors, a as v2ScreenContract, _ as v2ShellContract, t as v2SystemStateContract };
