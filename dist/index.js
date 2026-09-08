import { createContext as e, useCallback as t, useContext as n, useEffect as r, useId as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/tokens.ts
var d = {
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
}, f = {
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
}, p = [...f.domains, f.relationshipLayer], m = Object.fromEntries(p.map((e) => [e.domain, {
	label: e.label,
	repository: e.repository,
	prefix: e.prefix,
	resource: e.resource,
	nodeKind: e.nodeKind,
	iconAssetId: e.iconAssetId,
	idKinds: e.idKinds,
	defaultKind: e.defaultKind
}])), h = f;
function g(e) {
	return m[e];
}
function _(e) {
	return Object.prototype.hasOwnProperty.call(m, e) && e !== "RELATIONSHIP";
}
function v(e) {
	let t = Object.entries(m).find(([, t]) => e.startsWith(t.prefix));
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
//#region src/contracts/assets-v2.ts
var y = {
	repository: "bjo163/rocksoul-assets",
	ref: "main",
	commit: "5b035d0d83612f847ccd8b35f2c1b04022500110",
	acceptedMainCommit: "d72db569b287faa4bea9a6ab89e49433dd6d9ddb",
	manifestSchemaVersion: 3,
	applicationVersion: "v2",
	syncedAt: "2026-09-08",
	assetRelease: "1.3.1",
	assetReleaseStatus: "released",
	repositoryAcceptance: "passed",
	livePenpotVerification: "manual-follow-up",
	assetPackIndex: "moonwitness/asset-packs.json",
	developerDistribution: [
		"dist/assets.json",
		"dist/assets.ts",
		"dist/assets.css",
		"dist/sprite.svg"
	]
}, b = {
	brand: "MoonWitness",
	ecosystem: "MoonWitness × Rocksoul",
	tagline: "Truth leaves a trace.",
	sourceType: "editable-vector"
}, ee = [
	{
		id: "dashboard",
		label: "Dashboard",
		path: "/",
		kind: "system",
		permission: "authenticated"
	},
	{
		id: "cases",
		label: "Cases",
		path: "/cases",
		kind: "resource",
		resource: "case",
		permission: "case:read"
	},
	{
		id: "kanban",
		label: "Kanban",
		path: "/work/kanban",
		kind: "workspace",
		permission: "review:read"
	},
	{
		id: "calendar",
		label: "Calendar",
		path: "/work/calendar",
		kind: "workspace",
		permission: "review:read"
	},
	{
		id: "chat",
		label: "Chat",
		path: "/chat",
		kind: "workspace",
		permission: "community:read"
	},
	{
		id: "ai",
		label: "AI Workspace",
		path: "/ai",
		kind: "workspace",
		permission: "ai:use"
	},
	{
		id: "resources",
		label: "Resources",
		path: "/resources",
		kind: "system",
		permission: "resource:read"
	},
	{
		id: "profile",
		label: "Profile",
		path: "/profile",
		kind: "account",
		permission: "authenticated"
	},
	{
		id: "settings",
		label: "Settings",
		path: "/settings",
		kind: "account",
		permission: "authenticated"
	}
], te = [
	{
		resource: "case",
		label: "STORY / Cases",
		path: "/cases",
		repo: "rocksoul-mftl"
	},
	{
		resource: "event",
		label: "EVENT / Events",
		path: "/events",
		repo: "rocksoul-legend"
	},
	{
		resource: "person",
		label: "PERSON / People",
		path: "/people",
		repo: "rocksoul-superhero"
	},
	{
		resource: "rgbl",
		label: "TEXT / RGBL",
		path: "/sources",
		repo: "rocksoul-rgbl"
	},
	{
		resource: "aws",
		label: "LAW / AWS",
		path: "/aws",
		repo: "rocksoul-aws"
	},
	{
		resource: "perspective",
		label: "PERSPECTIVE / Perspectives",
		path: "/perspectives",
		repo: "rocksoul-jizz"
	},
	{
		resource: "correlation",
		label: "RELATIONSHIP / Correlation",
		path: "/correlation",
		repo: "rocksoul-correlation"
	}
], ne = [
	{
		id: "17",
		slug: "dashboard",
		activeNav: "Dashboard"
	},
	{
		id: "18",
		slug: "command-palette",
		activeNav: "Dashboard",
		overlay: !0
	},
	{
		id: "19",
		slug: "notifications",
		activeNav: "Dashboard",
		overlay: !0
	},
	{
		id: "20",
		slug: "kanban",
		activeNav: "Kanban"
	},
	{
		id: "21",
		slug: "calendar",
		activeNav: "Calendar"
	},
	{
		id: "22",
		slug: "chat",
		activeNav: "Chat"
	},
	{
		id: "23",
		slug: "ai-workspace",
		activeNav: "AI Workspace"
	},
	{
		id: "24",
		slug: "resources",
		activeNav: "Resources"
	},
	{
		id: "25",
		slug: "profile-settings",
		activeNav: "Settings"
	},
	{
		id: "26",
		slug: "authorization",
		activeNav: "Settings"
	},
	{
		id: "27",
		slug: "system-states",
		activeNav: "Dashboard"
	}
], x = {
	desktop: {
		width: 1440,
		sidebar: 220,
		behavior: "persistent"
	},
	tablet: {
		width: 768,
		sidebar: 72,
		behavior: "icon-rail"
	},
	mobile: {
		width: 390,
		sidebar: 0,
		behavior: "drawer"
	},
	backendStates: [
		"online",
		"degraded",
		"offline"
	],
	themeStates: [
		"light",
		"dark",
		"system"
	],
	sidebarStates: [
		"expanded",
		"compact",
		"drawer-open",
		"drawer-closed"
	],
	notificationStates: [
		"empty",
		"unread",
		"open"
	],
	userMenuStates: ["closed", "open"],
	accessibility: {
		skipLink: !0,
		landmarks: [
			"navigation",
			"banner",
			"main"
		],
		keyboardCommandPalette: !0,
		focusVisible: !0,
		drawerFocusTrap: !0
	}
}, S = {
	loading: [
		"skeleton-or-progress",
		"accessible-busy-state",
		"reduced-motion-safe"
	],
	empty: [
		"headline",
		"supporting-copy",
		"recovery-or-create-action"
	],
	error: [
		"error-summary",
		"system-context",
		"retry-or-back-action",
		"trace-id-when-available"
	],
	offline: [
		"backend-status",
		"last-known-state",
		"retry"
	],
	forbidden: [
		"required-permission",
		"current-role",
		"request-access-when-available"
	]
}, re = "https://github.com", ie = "https://raw.githubusercontent.com", ae = {
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
}, oe = y.repository.split("/")[0];
function se(e) {
	return e.replace(/^\/+/, "");
}
function C(e, t = {}) {
	let n = t.ref ?? "main", r = t.path ? se(t.path) : void 0;
	if (t.raw) return r ? `${ie}/${oe}/${e}/${n}/${r}` : `${ie}/${oe}/${e}/${n}`;
	let i = `${re}/${oe}/${e}`;
	return r ? `${i}/blob/${n}/${r}` : i;
}
function w(e) {
	return C(ae.assets, {
		ref: y.commit,
		path: e
	});
}
function T(e) {
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
		href: w(`penpot/golden-cases/${n[1].toLowerCase()}/SCREEN-CONTRACT.md`)
	} : t.startsWith("COMMUNITY-") ? {
		source: t,
		kind: "community",
		href: C(ae.community, { path: "README.md" })
	} : {
		source: t,
		kind: "opaque"
	};
}
//#endregion
//#region src/generated/assets-v1.3.ts
var E = {
	schemaVersion: 2,
	version: "1.3.1",
	canonicalFormat: "svg",
	packs: {
		"product-icons": {
			manifest: "moonwitness/icons/icons.json",
			count: 44,
			canonicalFormat: "svg",
			svg: {
				add: "moonwitness/icons/svg/actions/add.svg",
				bookmark: "moonwitness/icons/svg/actions/bookmark.svg",
				chat: "moonwitness/icons/svg/actions/chat.svg",
				command: "moonwitness/icons/svg/actions/command.svg",
				copy: "moonwitness/icons/svg/actions/copy.svg",
				delete: "moonwitness/icons/svg/actions/delete.svg",
				download: "moonwitness/icons/svg/actions/download.svg",
				edit: "moonwitness/icons/svg/actions/edit.svg",
				"external-link": "moonwitness/icons/svg/actions/external-link.svg",
				save: "moonwitness/icons/svg/actions/save.svg",
				share: "moonwitness/icons/svg/actions/share.svg",
				upload: "moonwitness/icons/svg/actions/upload.svg",
				ai: "moonwitness/icons/svg/domain/ai.svg",
				correlation: "moonwitness/icons/svg/domain/correlation.svg",
				evidence: "moonwitness/icons/svg/domain/evidence.svg",
				"graph-node": "moonwitness/icons/svg/domain/graph-node.svg",
				legal: "moonwitness/icons/svg/domain/legal.svg",
				source: "moonwitness/icons/svg/domain/source.svg",
				timeline: "moonwitness/icons/svg/domain/timeline.svg",
				trace: "moonwitness/icons/svg/domain/trace.svg",
				case: "moonwitness/icons/svg/navigation/case.svg",
				dashboard: "moonwitness/icons/svg/navigation/dashboard.svg",
				event: "moonwitness/icons/svg/navigation/event.svg",
				explore: "moonwitness/icons/svg/navigation/explore.svg",
				filter: "moonwitness/icons/svg/navigation/filter.svg",
				globe: "moonwitness/icons/svg/navigation/globe.svg",
				kanban: "moonwitness/icons/svg/navigation/kanban.svg",
				"map-pin": "moonwitness/icons/svg/navigation/map-pin.svg",
				person: "moonwitness/icons/svg/navigation/person.svg",
				search: "moonwitness/icons/svg/navigation/search.svg",
				story: "moonwitness/icons/svg/navigation/story.svg",
				users: "moonwitness/icons/svg/navigation/users.svg",
				check: "moonwitness/icons/svg/status/check.svg",
				error: "moonwitness/icons/svg/status/error.svg",
				"eye-off": "moonwitness/icons/svg/status/eye-off.svg",
				eye: "moonwitness/icons/svg/status/eye.svg",
				info: "moonwitness/icons/svg/status/info.svg",
				loading: "moonwitness/icons/svg/status/loading.svg",
				lock: "moonwitness/icons/svg/status/lock.svg",
				offline: "moonwitness/icons/svg/status/offline.svg",
				online: "moonwitness/icons/svg/status/online.svg",
				sync: "moonwitness/icons/svg/status/sync.svg",
				unlock: "moonwitness/icons/svg/status/unlock.svg",
				warning: "moonwitness/icons/svg/status/warning.svg"
			},
			png: {
				add: {
					24: "moonwitness/icons/png/24/actions/add.png",
					48: "moonwitness/icons/png/48/actions/add.png",
					96: "moonwitness/icons/png/96/actions/add.png"
				},
				bookmark: {
					24: "moonwitness/icons/png/24/actions/bookmark.png",
					48: "moonwitness/icons/png/48/actions/bookmark.png",
					96: "moonwitness/icons/png/96/actions/bookmark.png"
				},
				chat: {
					24: "moonwitness/icons/png/24/actions/chat.png",
					48: "moonwitness/icons/png/48/actions/chat.png",
					96: "moonwitness/icons/png/96/actions/chat.png"
				},
				command: {
					24: "moonwitness/icons/png/24/actions/command.png",
					48: "moonwitness/icons/png/48/actions/command.png",
					96: "moonwitness/icons/png/96/actions/command.png"
				},
				copy: {
					24: "moonwitness/icons/png/24/actions/copy.png",
					48: "moonwitness/icons/png/48/actions/copy.png",
					96: "moonwitness/icons/png/96/actions/copy.png"
				},
				delete: {
					24: "moonwitness/icons/png/24/actions/delete.png",
					48: "moonwitness/icons/png/48/actions/delete.png",
					96: "moonwitness/icons/png/96/actions/delete.png"
				},
				download: {
					24: "moonwitness/icons/png/24/actions/download.png",
					48: "moonwitness/icons/png/48/actions/download.png",
					96: "moonwitness/icons/png/96/actions/download.png"
				},
				edit: {
					24: "moonwitness/icons/png/24/actions/edit.png",
					48: "moonwitness/icons/png/48/actions/edit.png",
					96: "moonwitness/icons/png/96/actions/edit.png"
				},
				"external-link": {
					24: "moonwitness/icons/png/24/actions/external-link.png",
					48: "moonwitness/icons/png/48/actions/external-link.png",
					96: "moonwitness/icons/png/96/actions/external-link.png"
				},
				save: {
					24: "moonwitness/icons/png/24/actions/save.png",
					48: "moonwitness/icons/png/48/actions/save.png",
					96: "moonwitness/icons/png/96/actions/save.png"
				},
				share: {
					24: "moonwitness/icons/png/24/actions/share.png",
					48: "moonwitness/icons/png/48/actions/share.png",
					96: "moonwitness/icons/png/96/actions/share.png"
				},
				upload: {
					24: "moonwitness/icons/png/24/actions/upload.png",
					48: "moonwitness/icons/png/48/actions/upload.png",
					96: "moonwitness/icons/png/96/actions/upload.png"
				},
				ai: {
					24: "moonwitness/icons/png/24/domain/ai.png",
					48: "moonwitness/icons/png/48/domain/ai.png",
					96: "moonwitness/icons/png/96/domain/ai.png"
				},
				correlation: {
					24: "moonwitness/icons/png/24/domain/correlation.png",
					48: "moonwitness/icons/png/48/domain/correlation.png",
					96: "moonwitness/icons/png/96/domain/correlation.png"
				},
				evidence: {
					24: "moonwitness/icons/png/24/domain/evidence.png",
					48: "moonwitness/icons/png/48/domain/evidence.png",
					96: "moonwitness/icons/png/96/domain/evidence.png"
				},
				"graph-node": {
					24: "moonwitness/icons/png/24/domain/graph-node.png",
					48: "moonwitness/icons/png/48/domain/graph-node.png",
					96: "moonwitness/icons/png/96/domain/graph-node.png"
				},
				legal: {
					24: "moonwitness/icons/png/24/domain/legal.png",
					48: "moonwitness/icons/png/48/domain/legal.png",
					96: "moonwitness/icons/png/96/domain/legal.png"
				},
				source: {
					24: "moonwitness/icons/png/24/domain/source.png",
					48: "moonwitness/icons/png/48/domain/source.png",
					96: "moonwitness/icons/png/96/domain/source.png"
				},
				timeline: {
					24: "moonwitness/icons/png/24/domain/timeline.png",
					48: "moonwitness/icons/png/48/domain/timeline.png",
					96: "moonwitness/icons/png/96/domain/timeline.png"
				},
				trace: {
					24: "moonwitness/icons/png/24/domain/trace.png",
					48: "moonwitness/icons/png/48/domain/trace.png",
					96: "moonwitness/icons/png/96/domain/trace.png"
				},
				case: {
					24: "moonwitness/icons/png/24/navigation/case.png",
					48: "moonwitness/icons/png/48/navigation/case.png",
					96: "moonwitness/icons/png/96/navigation/case.png"
				},
				dashboard: {
					24: "moonwitness/icons/png/24/navigation/dashboard.png",
					48: "moonwitness/icons/png/48/navigation/dashboard.png",
					96: "moonwitness/icons/png/96/navigation/dashboard.png"
				},
				event: {
					24: "moonwitness/icons/png/24/navigation/event.png",
					48: "moonwitness/icons/png/48/navigation/event.png",
					96: "moonwitness/icons/png/96/navigation/event.png"
				},
				explore: {
					24: "moonwitness/icons/png/24/navigation/explore.png",
					48: "moonwitness/icons/png/48/navigation/explore.png",
					96: "moonwitness/icons/png/96/navigation/explore.png"
				},
				filter: {
					24: "moonwitness/icons/png/24/navigation/filter.png",
					48: "moonwitness/icons/png/48/navigation/filter.png",
					96: "moonwitness/icons/png/96/navigation/filter.png"
				},
				globe: {
					24: "moonwitness/icons/png/24/navigation/globe.png",
					48: "moonwitness/icons/png/48/navigation/globe.png",
					96: "moonwitness/icons/png/96/navigation/globe.png"
				},
				kanban: {
					24: "moonwitness/icons/png/24/navigation/kanban.png",
					48: "moonwitness/icons/png/48/navigation/kanban.png",
					96: "moonwitness/icons/png/96/navigation/kanban.png"
				},
				"map-pin": {
					24: "moonwitness/icons/png/24/navigation/map-pin.png",
					48: "moonwitness/icons/png/48/navigation/map-pin.png",
					96: "moonwitness/icons/png/96/navigation/map-pin.png"
				},
				person: {
					24: "moonwitness/icons/png/24/navigation/person.png",
					48: "moonwitness/icons/png/48/navigation/person.png",
					96: "moonwitness/icons/png/96/navigation/person.png"
				},
				search: {
					24: "moonwitness/icons/png/24/navigation/search.png",
					48: "moonwitness/icons/png/48/navigation/search.png",
					96: "moonwitness/icons/png/96/navigation/search.png"
				},
				story: {
					24: "moonwitness/icons/png/24/navigation/story.png",
					48: "moonwitness/icons/png/48/navigation/story.png",
					96: "moonwitness/icons/png/96/navigation/story.png"
				},
				users: {
					24: "moonwitness/icons/png/24/navigation/users.png",
					48: "moonwitness/icons/png/48/navigation/users.png",
					96: "moonwitness/icons/png/96/navigation/users.png"
				},
				check: {
					24: "moonwitness/icons/png/24/status/check.png",
					48: "moonwitness/icons/png/48/status/check.png",
					96: "moonwitness/icons/png/96/status/check.png"
				},
				error: {
					24: "moonwitness/icons/png/24/status/error.png",
					48: "moonwitness/icons/png/48/status/error.png",
					96: "moonwitness/icons/png/96/status/error.png"
				},
				"eye-off": {
					24: "moonwitness/icons/png/24/status/eye-off.png",
					48: "moonwitness/icons/png/48/status/eye-off.png",
					96: "moonwitness/icons/png/96/status/eye-off.png"
				},
				eye: {
					24: "moonwitness/icons/png/24/status/eye.png",
					48: "moonwitness/icons/png/48/status/eye.png",
					96: "moonwitness/icons/png/96/status/eye.png"
				},
				info: {
					24: "moonwitness/icons/png/24/status/info.png",
					48: "moonwitness/icons/png/48/status/info.png",
					96: "moonwitness/icons/png/96/status/info.png"
				},
				loading: {
					24: "moonwitness/icons/png/24/status/loading.png",
					48: "moonwitness/icons/png/48/status/loading.png",
					96: "moonwitness/icons/png/96/status/loading.png"
				},
				lock: {
					24: "moonwitness/icons/png/24/status/lock.png",
					48: "moonwitness/icons/png/48/status/lock.png",
					96: "moonwitness/icons/png/96/status/lock.png"
				},
				offline: {
					24: "moonwitness/icons/png/24/status/offline.png",
					48: "moonwitness/icons/png/48/status/offline.png",
					96: "moonwitness/icons/png/96/status/offline.png"
				},
				online: {
					24: "moonwitness/icons/png/24/status/online.png",
					48: "moonwitness/icons/png/48/status/online.png",
					96: "moonwitness/icons/png/96/status/online.png"
				},
				sync: {
					24: "moonwitness/icons/png/24/status/sync.png",
					48: "moonwitness/icons/png/48/status/sync.png",
					96: "moonwitness/icons/png/96/status/sync.png"
				},
				unlock: {
					24: "moonwitness/icons/png/24/status/unlock.png",
					48: "moonwitness/icons/png/48/status/unlock.png",
					96: "moonwitness/icons/png/96/status/unlock.png"
				},
				warning: {
					24: "moonwitness/icons/png/24/status/warning.png",
					48: "moonwitness/icons/png/48/status/warning.png",
					96: "moonwitness/icons/png/96/status/warning.png"
				}
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/icons/png/24/actions/add.png,moonwitness/icons/png/24/actions/bookmark.png,moonwitness/icons/png/24/actions/chat.png,moonwitness/icons/png/24/actions/command.png,moonwitness/icons/png/24/actions/copy.png,moonwitness/icons/png/24/actions/delete.png,moonwitness/icons/png/24/actions/download.png,moonwitness/icons/png/24/actions/edit.png,moonwitness/icons/png/24/actions/external-link.png,moonwitness/icons/png/24/actions/save.png,moonwitness/icons/png/24/actions/share.png,moonwitness/icons/png/24/actions/upload.png,moonwitness/icons/png/24/domain/ai.png,moonwitness/icons/png/24/domain/correlation.png,moonwitness/icons/png/24/domain/evidence.png,moonwitness/icons/png/24/domain/graph-node.png,moonwitness/icons/png/24/domain/legal.png,moonwitness/icons/png/24/domain/source.png,moonwitness/icons/png/24/domain/timeline.png,moonwitness/icons/png/24/domain/trace.png,moonwitness/icons/png/24/navigation/case.png,moonwitness/icons/png/24/navigation/dashboard.png,moonwitness/icons/png/24/navigation/event.png,moonwitness/icons/png/24/navigation/explore.png,moonwitness/icons/png/24/navigation/filter.png,moonwitness/icons/png/24/navigation/globe.png,moonwitness/icons/png/24/navigation/kanban.png,moonwitness/icons/png/24/navigation/map-pin.png,moonwitness/icons/png/24/navigation/person.png,moonwitness/icons/png/24/navigation/search.png,moonwitness/icons/png/24/navigation/story.png,moonwitness/icons/png/24/navigation/users.png,moonwitness/icons/png/24/status/check.png,moonwitness/icons/png/24/status/error.png,moonwitness/icons/png/24/status/eye-off.png,moonwitness/icons/png/24/status/eye.png,moonwitness/icons/png/24/status/info.png,moonwitness/icons/png/24/status/loading.png,moonwitness/icons/png/24/status/lock.png,moonwitness/icons/png/24/status/offline.png,moonwitness/icons/png/24/status/online.png,moonwitness/icons/png/24/status/sync.png,moonwitness/icons/png/24/status/unlock.png,moonwitness/icons/png/24/status/warning.png,moonwitness/icons/png/48/actions/add.png,moonwitness/icons/png/48/actions/bookmark.png,moonwitness/icons/png/48/actions/chat.png,moonwitness/icons/png/48/actions/command.png,moonwitness/icons/png/48/actions/copy.png,moonwitness/icons/png/48/actions/delete.png,moonwitness/icons/png/48/actions/download.png,moonwitness/icons/png/48/actions/edit.png,moonwitness/icons/png/48/actions/external-link.png,moonwitness/icons/png/48/actions/save.png,moonwitness/icons/png/48/actions/share.png,moonwitness/icons/png/48/actions/upload.png,moonwitness/icons/png/48/domain/ai.png,moonwitness/icons/png/48/domain/correlation.png,moonwitness/icons/png/48/domain/evidence.png,moonwitness/icons/png/48/domain/graph-node.png,moonwitness/icons/png/48/domain/legal.png,moonwitness/icons/png/48/domain/source.png,moonwitness/icons/png/48/domain/timeline.png,moonwitness/icons/png/48/domain/trace.png,moonwitness/icons/png/48/navigation/case.png,moonwitness/icons/png/48/navigation/dashboard.png,moonwitness/icons/png/48/navigation/event.png,moonwitness/icons/png/48/navigation/explore.png,moonwitness/icons/png/48/navigation/filter.png,moonwitness/icons/png/48/navigation/globe.png,moonwitness/icons/png/48/navigation/kanban.png,moonwitness/icons/png/48/navigation/map-pin.png,moonwitness/icons/png/48/navigation/person.png,moonwitness/icons/png/48/navigation/search.png,moonwitness/icons/png/48/navigation/story.png,moonwitness/icons/png/48/navigation/users.png,moonwitness/icons/png/48/status/check.png,moonwitness/icons/png/48/status/error.png,moonwitness/icons/png/48/status/eye-off.png,moonwitness/icons/png/48/status/eye.png,moonwitness/icons/png/48/status/info.png,moonwitness/icons/png/48/status/loading.png,moonwitness/icons/png/48/status/lock.png,moonwitness/icons/png/48/status/offline.png,moonwitness/icons/png/48/status/online.png,moonwitness/icons/png/48/status/sync.png,moonwitness/icons/png/48/status/unlock.png,moonwitness/icons/png/48/status/warning.png,moonwitness/icons/png/96/actions/add.png,moonwitness/icons/png/96/actions/bookmark.png,moonwitness/icons/png/96/actions/chat.png,moonwitness/icons/png/96/actions/command.png,moonwitness/icons/png/96/actions/copy.png,moonwitness/icons/png/96/actions/delete.png,moonwitness/icons/png/96/actions/download.png,moonwitness/icons/png/96/actions/edit.png,moonwitness/icons/png/96/actions/external-link.png,moonwitness/icons/png/96/actions/save.png,moonwitness/icons/png/96/actions/share.png,moonwitness/icons/png/96/actions/upload.png,moonwitness/icons/png/96/domain/ai.png,moonwitness/icons/png/96/domain/correlation.png,moonwitness/icons/png/96/domain/evidence.png,moonwitness/icons/png/96/domain/graph-node.png,moonwitness/icons/png/96/domain/legal.png,moonwitness/icons/png/96/domain/source.png,moonwitness/icons/png/96/domain/timeline.png,moonwitness/icons/png/96/domain/trace.png,moonwitness/icons/png/96/navigation/case.png,moonwitness/icons/png/96/navigation/dashboard.png,moonwitness/icons/png/96/navigation/event.png,moonwitness/icons/png/96/navigation/explore.png,moonwitness/icons/png/96/navigation/filter.png,moonwitness/icons/png/96/navigation/globe.png,moonwitness/icons/png/96/navigation/kanban.png,moonwitness/icons/png/96/navigation/map-pin.png,moonwitness/icons/png/96/navigation/person.png,moonwitness/icons/png/96/navigation/search.png,moonwitness/icons/png/96/navigation/story.png,moonwitness/icons/png/96/navigation/users.png,moonwitness/icons/png/96/status/check.png,moonwitness/icons/png/96/status/error.png,moonwitness/icons/png/96/status/eye-off.png,moonwitness/icons/png/96/status/eye.png,moonwitness/icons/png/96/status/info.png,moonwitness/icons/png/96/status/loading.png,moonwitness/icons/png/96/status/lock.png,moonwitness/icons/png/96/status/offline.png,moonwitness/icons/png/96/status/online.png,moonwitness/icons/png/96/status/sync.png,moonwitness/icons/png/96/status/unlock.png,moonwitness/icons/png/96/status/warning.png,moonwitness/icons/svg/actions/add.svg,moonwitness/icons/svg/actions/bookmark.svg,moonwitness/icons/svg/actions/chat.svg,moonwitness/icons/svg/actions/command.svg,moonwitness/icons/svg/actions/copy.svg,moonwitness/icons/svg/actions/delete.svg,moonwitness/icons/svg/actions/download.svg,moonwitness/icons/svg/actions/edit.svg,moonwitness/icons/svg/actions/external-link.svg,moonwitness/icons/svg/actions/save.svg,moonwitness/icons/svg/actions/share.svg,moonwitness/icons/svg/actions/upload.svg,moonwitness/icons/svg/domain/ai.svg,moonwitness/icons/svg/domain/correlation.svg,moonwitness/icons/svg/domain/evidence.svg,moonwitness/icons/svg/domain/graph-node.svg,moonwitness/icons/svg/domain/legal.svg,moonwitness/icons/svg/domain/source.svg,moonwitness/icons/svg/domain/timeline.svg,moonwitness/icons/svg/domain/trace.svg,moonwitness/icons/svg/navigation/case.svg,moonwitness/icons/svg/navigation/dashboard.svg,moonwitness/icons/svg/navigation/event.svg,moonwitness/icons/svg/navigation/explore.svg,moonwitness/icons/svg/navigation/filter.svg,moonwitness/icons/svg/navigation/globe.svg,moonwitness/icons/svg/navigation/kanban.svg,moonwitness/icons/svg/navigation/map-pin.svg,moonwitness/icons/svg/navigation/person.svg,moonwitness/icons/svg/navigation/search.svg,moonwitness/icons/svg/navigation/story.svg,moonwitness/icons/svg/navigation/users.svg,moonwitness/icons/svg/status/check.svg,moonwitness/icons/svg/status/error.svg,moonwitness/icons/svg/status/eye-off.svg,moonwitness/icons/svg/status/eye.svg,moonwitness/icons/svg/status/info.svg,moonwitness/icons/svg/status/loading.svg,moonwitness/icons/svg/status/lock.svg,moonwitness/icons/svg/status/offline.svg,moonwitness/icons/svg/status/online.svg,moonwitness/icons/svg/status/sync.svg,moonwitness/icons/svg/status/unlock.svg,moonwitness/icons/svg/status/warning.svg".split(",")
		},
		dashboard: {
			manifest: "moonwitness/dashboard-pack/dashboard-pack.json",
			count: 20,
			canonicalFormat: "svg",
			svg: {
				"ai-summary": "moonwitness/dashboard-pack/widgets/ai-summary.svg",
				"audit-log": "moonwitness/dashboard-pack/widgets/audit-log.svg",
				"backend-status": "moonwitness/dashboard-pack/widgets/backend-status.svg",
				"bar-chart": "moonwitness/dashboard-pack/widgets/bar-chart.svg",
				"case-progress": "moonwitness/dashboard-pack/widgets/case-progress.svg",
				"correlation-insight": "moonwitness/dashboard-pack/widgets/correlation-insight.svg",
				"donut-chart": "moonwitness/dashboard-pack/widgets/donut-chart.svg",
				"empty-widget": "moonwitness/dashboard-pack/widgets/empty-widget.svg",
				"evidence-timeline": "moonwitness/dashboard-pack/widgets/evidence-timeline.svg",
				"kpi-stat": "moonwitness/dashboard-pack/widgets/kpi-stat.svg",
				"line-trend": "moonwitness/dashboard-pack/widgets/line-trend.svg",
				"mini-calendar": "moonwitness/dashboard-pack/widgets/mini-calendar.svg",
				"mini-kanban": "moonwitness/dashboard-pack/widgets/mini-kanban.svg",
				notifications: "moonwitness/dashboard-pack/widgets/notifications.svg",
				"profile-summary": "moonwitness/dashboard-pack/widgets/profile-summary.svg",
				"provenance-chain": "moonwitness/dashboard-pack/widgets/provenance-chain.svg",
				"quick-actions": "moonwitness/dashboard-pack/widgets/quick-actions.svg",
				"recent-cases": "moonwitness/dashboard-pack/widgets/recent-cases.svg",
				"search-results": "moonwitness/dashboard-pack/widgets/search-results.svg",
				"world-map": "moonwitness/dashboard-pack/widgets/world-map.svg"
			},
			png: {
				"ai-summary": "moonwitness/dashboard-pack/png/ai-summary.png",
				"audit-log": "moonwitness/dashboard-pack/png/audit-log.png",
				"backend-status": "moonwitness/dashboard-pack/png/backend-status.png",
				"bar-chart": "moonwitness/dashboard-pack/png/bar-chart.png",
				"case-progress": "moonwitness/dashboard-pack/png/case-progress.png",
				"correlation-insight": "moonwitness/dashboard-pack/png/correlation-insight.png",
				"donut-chart": "moonwitness/dashboard-pack/png/donut-chart.png",
				"empty-widget": "moonwitness/dashboard-pack/png/empty-widget.png",
				"evidence-timeline": "moonwitness/dashboard-pack/png/evidence-timeline.png",
				"kpi-stat": "moonwitness/dashboard-pack/png/kpi-stat.png",
				"line-trend": "moonwitness/dashboard-pack/png/line-trend.png",
				"mini-calendar": "moonwitness/dashboard-pack/png/mini-calendar.png",
				"mini-kanban": "moonwitness/dashboard-pack/png/mini-kanban.png",
				notifications: "moonwitness/dashboard-pack/png/notifications.png",
				"profile-summary": "moonwitness/dashboard-pack/png/profile-summary.png",
				"provenance-chain": "moonwitness/dashboard-pack/png/provenance-chain.png",
				"quick-actions": "moonwitness/dashboard-pack/png/quick-actions.png",
				"recent-cases": "moonwitness/dashboard-pack/png/recent-cases.png",
				"search-results": "moonwitness/dashboard-pack/png/search-results.png",
				"world-map": "moonwitness/dashboard-pack/png/world-map.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/dashboard-pack/png/ai-summary.png,moonwitness/dashboard-pack/png/audit-log.png,moonwitness/dashboard-pack/png/backend-status.png,moonwitness/dashboard-pack/png/bar-chart.png,moonwitness/dashboard-pack/png/case-progress.png,moonwitness/dashboard-pack/png/correlation-insight.png,moonwitness/dashboard-pack/png/donut-chart.png,moonwitness/dashboard-pack/png/empty-widget.png,moonwitness/dashboard-pack/png/evidence-timeline.png,moonwitness/dashboard-pack/png/kpi-stat.png,moonwitness/dashboard-pack/png/line-trend.png,moonwitness/dashboard-pack/png/mini-calendar.png,moonwitness/dashboard-pack/png/mini-kanban.png,moonwitness/dashboard-pack/png/notifications.png,moonwitness/dashboard-pack/png/profile-summary.png,moonwitness/dashboard-pack/png/provenance-chain.png,moonwitness/dashboard-pack/png/quick-actions.png,moonwitness/dashboard-pack/png/recent-cases.png,moonwitness/dashboard-pack/png/search-results.png,moonwitness/dashboard-pack/png/world-map.png,moonwitness/dashboard-pack/widgets/ai-summary.svg,moonwitness/dashboard-pack/widgets/audit-log.svg,moonwitness/dashboard-pack/widgets/backend-status.svg,moonwitness/dashboard-pack/widgets/bar-chart.svg,moonwitness/dashboard-pack/widgets/case-progress.svg,moonwitness/dashboard-pack/widgets/correlation-insight.svg,moonwitness/dashboard-pack/widgets/donut-chart.svg,moonwitness/dashboard-pack/widgets/empty-widget.svg,moonwitness/dashboard-pack/widgets/evidence-timeline.svg,moonwitness/dashboard-pack/widgets/kpi-stat.svg,moonwitness/dashboard-pack/widgets/line-trend.svg,moonwitness/dashboard-pack/widgets/mini-calendar.svg,moonwitness/dashboard-pack/widgets/mini-kanban.svg,moonwitness/dashboard-pack/widgets/notifications.svg,moonwitness/dashboard-pack/widgets/profile-summary.svg,moonwitness/dashboard-pack/widgets/provenance-chain.svg,moonwitness/dashboard-pack/widgets/quick-actions.svg,moonwitness/dashboard-pack/widgets/recent-cases.svg,moonwitness/dashboard-pack/widgets/search-results.svg,moonwitness/dashboard-pack/widgets/world-map.svg".split(",")
		},
		"data-viz": {
			manifest: "moonwitness/data-viz/data-viz.json",
			count: 20,
			canonicalFormat: "svg",
			svg: {
				"activity-sparkline": "moonwitness/data-viz/charts/activity-sparkline.svg",
				"annotation-tools": "moonwitness/data-viz/charts/annotation-tools.svg",
				"confidence-trend": "moonwitness/data-viz/charts/confidence-trend.svg",
				"cross-domain-relations": "moonwitness/data-viz/charts/cross-domain-relations.svg",
				"edge-styles": "moonwitness/data-viz/charts/edge-styles.svg",
				"event-frequency": "moonwitness/data-viz/charts/event-frequency.svg",
				"event-topology": "moonwitness/data-viz/charts/event-topology.svg",
				"event-type-distribution": "moonwitness/data-viz/charts/event-type-distribution.svg",
				"evidence-matrix": "moonwitness/data-viz/charts/evidence-matrix.svg",
				"evidence-timeline": "moonwitness/data-viz/charts/evidence-timeline.svg",
				"geographic-heatmap": "moonwitness/data-viz/charts/geographic-heatmap.svg",
				"graph-nodes": "moonwitness/data-viz/charts/graph-nodes.svg",
				"historicity-band": "moonwitness/data-viz/charts/historicity-band.svg",
				"legend-styles": "moonwitness/data-viz/charts/legend-styles.svg",
				"metric-counters": "moonwitness/data-viz/charts/metric-counters.svg",
				"node-link-correlation": "moonwitness/data-viz/charts/node-link-correlation.svg",
				"place-material-context": "moonwitness/data-viz/charts/place-material-context.svg",
				"provenance-chain": "moonwitness/data-viz/charts/provenance-chain.svg",
				"repository-health": "moonwitness/data-viz/charts/repository-health.svg",
				"status-ring": "moonwitness/data-viz/charts/status-ring.svg"
			},
			png: {
				"activity-sparkline": "moonwitness/data-viz/png/activity-sparkline.png",
				"annotation-tools": "moonwitness/data-viz/png/annotation-tools.png",
				"confidence-trend": "moonwitness/data-viz/png/confidence-trend.png",
				"cross-domain-relations": "moonwitness/data-viz/png/cross-domain-relations.png",
				"edge-styles": "moonwitness/data-viz/png/edge-styles.png",
				"event-frequency": "moonwitness/data-viz/png/event-frequency.png",
				"event-topology": "moonwitness/data-viz/png/event-topology.png",
				"event-type-distribution": "moonwitness/data-viz/png/event-type-distribution.png",
				"evidence-matrix": "moonwitness/data-viz/png/evidence-matrix.png",
				"evidence-timeline": "moonwitness/data-viz/png/evidence-timeline.png",
				"geographic-heatmap": "moonwitness/data-viz/png/geographic-heatmap.png",
				"graph-nodes": "moonwitness/data-viz/png/graph-nodes.png",
				"historicity-band": "moonwitness/data-viz/png/historicity-band.png",
				"legend-styles": "moonwitness/data-viz/png/legend-styles.png",
				"metric-counters": "moonwitness/data-viz/png/metric-counters.png",
				"node-link-correlation": "moonwitness/data-viz/png/node-link-correlation.png",
				"place-material-context": "moonwitness/data-viz/png/place-material-context.png",
				"provenance-chain": "moonwitness/data-viz/png/provenance-chain.png",
				"repository-health": "moonwitness/data-viz/png/repository-health.png",
				"status-ring": "moonwitness/data-viz/png/status-ring.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/data-viz/charts/activity-sparkline.svg,moonwitness/data-viz/charts/annotation-tools.svg,moonwitness/data-viz/charts/confidence-trend.svg,moonwitness/data-viz/charts/cross-domain-relations.svg,moonwitness/data-viz/charts/edge-styles.svg,moonwitness/data-viz/charts/event-frequency.svg,moonwitness/data-viz/charts/event-topology.svg,moonwitness/data-viz/charts/event-type-distribution.svg,moonwitness/data-viz/charts/evidence-matrix.svg,moonwitness/data-viz/charts/evidence-timeline.svg,moonwitness/data-viz/charts/geographic-heatmap.svg,moonwitness/data-viz/charts/graph-nodes.svg,moonwitness/data-viz/charts/historicity-band.svg,moonwitness/data-viz/charts/legend-styles.svg,moonwitness/data-viz/charts/metric-counters.svg,moonwitness/data-viz/charts/node-link-correlation.svg,moonwitness/data-viz/charts/place-material-context.svg,moonwitness/data-viz/charts/provenance-chain.svg,moonwitness/data-viz/charts/repository-health.svg,moonwitness/data-viz/charts/status-ring.svg,moonwitness/data-viz/png/activity-sparkline.png,moonwitness/data-viz/png/annotation-tools.png,moonwitness/data-viz/png/confidence-trend.png,moonwitness/data-viz/png/cross-domain-relations.png,moonwitness/data-viz/png/edge-styles.png,moonwitness/data-viz/png/event-frequency.png,moonwitness/data-viz/png/event-topology.png,moonwitness/data-viz/png/event-type-distribution.png,moonwitness/data-viz/png/evidence-matrix.png,moonwitness/data-viz/png/evidence-timeline.png,moonwitness/data-viz/png/geographic-heatmap.png,moonwitness/data-viz/png/graph-nodes.png,moonwitness/data-viz/png/historicity-band.png,moonwitness/data-viz/png/legend-styles.png,moonwitness/data-viz/png/metric-counters.png,moonwitness/data-viz/png/node-link-correlation.png,moonwitness/data-viz/png/place-material-context.png,moonwitness/data-viz/png/provenance-chain.png,moonwitness/data-viz/png/repository-health.png,moonwitness/data-viz/png/status-ring.png".split(",")
		},
		"hero-backgrounds": {
			manifest: "moonwitness/hero-backgrounds/backgrounds.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"archive-texture": "moonwitness/hero-backgrounds/svg/archive-texture.svg",
				"correlation-web": "moonwitness/hero-backgrounds/svg/correlation-web.svg",
				"evidence-constellation": "moonwitness/hero-backgrounds/svg/evidence-constellation.svg",
				"legal-boundary-field": "moonwitness/hero-backgrounds/svg/legal-boundary-field.svg",
				"lunar-trace": "moonwitness/hero-backgrounds/svg/lunar-trace.svg",
				"observatory-grid": "moonwitness/hero-backgrounds/svg/observatory-grid.svg",
				"rgbl-spectrum-field": "moonwitness/hero-backgrounds/svg/rgbl-spectrum-field.svg",
				"signal-field": "moonwitness/hero-backgrounds/svg/signal-field.svg"
			},
			png: {
				"archive-texture": "moonwitness/hero-backgrounds/png/archive-texture.png",
				"correlation-web": "moonwitness/hero-backgrounds/png/correlation-web.png",
				"evidence-constellation": "moonwitness/hero-backgrounds/png/evidence-constellation.png",
				"legal-boundary-field": "moonwitness/hero-backgrounds/png/legal-boundary-field.png",
				"lunar-trace": "moonwitness/hero-backgrounds/png/lunar-trace.png",
				"observatory-grid": "moonwitness/hero-backgrounds/png/observatory-grid.png",
				"rgbl-spectrum-field": "moonwitness/hero-backgrounds/png/rgbl-spectrum-field.png",
				"signal-field": "moonwitness/hero-backgrounds/png/signal-field.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/hero-backgrounds/png/archive-texture.png",
				"moonwitness/hero-backgrounds/png/correlation-web.png",
				"moonwitness/hero-backgrounds/png/evidence-constellation.png",
				"moonwitness/hero-backgrounds/png/legal-boundary-field.png",
				"moonwitness/hero-backgrounds/png/lunar-trace.png",
				"moonwitness/hero-backgrounds/png/observatory-grid.png",
				"moonwitness/hero-backgrounds/png/rgbl-spectrum-field.png",
				"moonwitness/hero-backgrounds/png/signal-field.png",
				"moonwitness/hero-backgrounds/svg/archive-texture.svg",
				"moonwitness/hero-backgrounds/svg/correlation-web.svg",
				"moonwitness/hero-backgrounds/svg/evidence-constellation.svg",
				"moonwitness/hero-backgrounds/svg/legal-boundary-field.svg",
				"moonwitness/hero-backgrounds/svg/lunar-trace.svg",
				"moonwitness/hero-backgrounds/svg/observatory-grid.svg",
				"moonwitness/hero-backgrounds/svg/rgbl-spectrum-field.svg",
				"moonwitness/hero-backgrounds/svg/signal-field.svg"
			]
		},
		"state-illustrations": {
			manifest: "moonwitness/state-illustrations/states.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"ai-unavailable": "moonwitness/state-illustrations/svg/ai-unavailable.svg",
				"empty-search": "moonwitness/state-illustrations/svg/empty-search.svg",
				"error-state": "moonwitness/state-illustrations/svg/error-state.svg",
				"forbidden-access": "moonwitness/state-illustrations/svg/forbidden-access.svg",
				"keep-investigating": "moonwitness/state-illustrations/svg/keep-investigating.svg",
				loading: "moonwitness/state-illustrations/svg/loading.svg",
				"no-cases": "moonwitness/state-illustrations/svg/no-cases.svg",
				"notification-empty": "moonwitness/state-illustrations/svg/notification-empty.svg",
				"offline-backend": "moonwitness/state-illustrations/svg/offline-backend.svg",
				"review-complete": "moonwitness/state-illustrations/svg/review-complete.svg",
				"source-missing": "moonwitness/state-illustrations/svg/source-missing.svg",
				"upload-success": "moonwitness/state-illustrations/svg/upload-success.svg"
			},
			png: {
				"ai-unavailable": "moonwitness/state-illustrations/png/ai-unavailable.png",
				"empty-search": "moonwitness/state-illustrations/png/empty-search.png",
				"error-state": "moonwitness/state-illustrations/png/error-state.png",
				"forbidden-access": "moonwitness/state-illustrations/png/forbidden-access.png",
				"keep-investigating": "moonwitness/state-illustrations/png/keep-investigating.png",
				loading: "moonwitness/state-illustrations/png/loading.png",
				"no-cases": "moonwitness/state-illustrations/png/no-cases.png",
				"notification-empty": "moonwitness/state-illustrations/png/notification-empty.png",
				"offline-backend": "moonwitness/state-illustrations/png/offline-backend.png",
				"review-complete": "moonwitness/state-illustrations/png/review-complete.png",
				"source-missing": "moonwitness/state-illustrations/png/source-missing.png",
				"upload-success": "moonwitness/state-illustrations/png/upload-success.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/state-illustrations/png/ai-unavailable.png",
				"moonwitness/state-illustrations/png/empty-search.png",
				"moonwitness/state-illustrations/png/error-state.png",
				"moonwitness/state-illustrations/png/forbidden-access.png",
				"moonwitness/state-illustrations/png/keep-investigating.png",
				"moonwitness/state-illustrations/png/loading.png",
				"moonwitness/state-illustrations/png/no-cases.png",
				"moonwitness/state-illustrations/png/notification-empty.png",
				"moonwitness/state-illustrations/png/offline-backend.png",
				"moonwitness/state-illustrations/png/review-complete.png",
				"moonwitness/state-illustrations/png/source-missing.png",
				"moonwitness/state-illustrations/png/upload-success.png",
				"moonwitness/state-illustrations/svg/ai-unavailable.svg",
				"moonwitness/state-illustrations/svg/empty-search.svg",
				"moonwitness/state-illustrations/svg/error-state.svg",
				"moonwitness/state-illustrations/svg/forbidden-access.svg",
				"moonwitness/state-illustrations/svg/keep-investigating.svg",
				"moonwitness/state-illustrations/svg/loading.svg",
				"moonwitness/state-illustrations/svg/no-cases.svg",
				"moonwitness/state-illustrations/svg/notification-empty.svg",
				"moonwitness/state-illustrations/svg/offline-backend.svg",
				"moonwitness/state-illustrations/svg/review-complete.svg",
				"moonwitness/state-illustrations/svg/source-missing.svg",
				"moonwitness/state-illustrations/svg/upload-success.svg"
			]
		},
		motion: {
			manifest: "moonwitness/motion/motion.json",
			count: 12,
			canonicalFormat: "animated-svg",
			svg: {
				"ai-thinking": "moonwitness/motion/svg/ai-thinking.svg",
				"backend-reconnect": "moonwitness/motion/svg/backend-reconnect.svg",
				"case-resolved": "moonwitness/motion/svg/case-resolved.svg",
				"correlation-edge-draw": "moonwitness/motion/svg/correlation-edge-draw.svg",
				"drawer-open": "moonwitness/motion/svg/drawer-open.svg",
				"loading-trace": "moonwitness/motion/svg/loading-trace.svg",
				"logo-reveal": "moonwitness/motion/svg/logo-reveal.svg",
				"notification-pulse": "moonwitness/motion/svg/notification-pulse.svg",
				"observatory-ring": "moonwitness/motion/svg/observatory-ring.svg",
				"success-check": "moonwitness/motion/svg/success-check.svg",
				"trace-node-pulse": "moonwitness/motion/svg/trace-node-pulse.svg",
				"upload-complete": "moonwitness/motion/svg/upload-complete.svg"
			},
			png: {
				"ai-thinking": "moonwitness/motion/png/ai-thinking.png",
				"backend-reconnect": "moonwitness/motion/png/backend-reconnect.png",
				"case-resolved": "moonwitness/motion/png/case-resolved.png",
				"correlation-edge-draw": "moonwitness/motion/png/correlation-edge-draw.png",
				"drawer-open": "moonwitness/motion/png/drawer-open.png",
				"loading-trace": "moonwitness/motion/png/loading-trace.png",
				"logo-reveal": "moonwitness/motion/png/logo-reveal.png",
				"notification-pulse": "moonwitness/motion/png/notification-pulse.png",
				"observatory-ring": "moonwitness/motion/png/observatory-ring.png",
				"success-check": "moonwitness/motion/png/success-check.png",
				"trace-node-pulse": "moonwitness/motion/png/trace-node-pulse.png",
				"upload-complete": "moonwitness/motion/png/upload-complete.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/motion/png/ai-thinking.png",
				"moonwitness/motion/png/backend-reconnect.png",
				"moonwitness/motion/png/case-resolved.png",
				"moonwitness/motion/png/correlation-edge-draw.png",
				"moonwitness/motion/png/drawer-open.png",
				"moonwitness/motion/png/loading-trace.png",
				"moonwitness/motion/png/logo-reveal.png",
				"moonwitness/motion/png/notification-pulse.png",
				"moonwitness/motion/png/observatory-ring.png",
				"moonwitness/motion/png/success-check.png",
				"moonwitness/motion/png/trace-node-pulse.png",
				"moonwitness/motion/png/upload-complete.png",
				"moonwitness/motion/svg/ai-thinking.svg",
				"moonwitness/motion/svg/backend-reconnect.svg",
				"moonwitness/motion/svg/case-resolved.svg",
				"moonwitness/motion/svg/correlation-edge-draw.svg",
				"moonwitness/motion/svg/drawer-open.svg",
				"moonwitness/motion/svg/loading-trace.svg",
				"moonwitness/motion/svg/logo-reveal.svg",
				"moonwitness/motion/svg/notification-pulse.svg",
				"moonwitness/motion/svg/observatory-ring.svg",
				"moonwitness/motion/svg/success-check.svg",
				"moonwitness/motion/svg/trace-node-pulse.svg",
				"moonwitness/motion/svg/upload-complete.svg"
			]
		},
		"application-screens": {
			manifest: "moonwitness/ui/v2/manifest.json",
			count: 20,
			canonicalFormat: "svg",
			svg: {
				"17-dashboard": "moonwitness/ui/v2/17-dashboard.svg",
				"18-command-palette": "moonwitness/ui/v2/18-command-palette.svg",
				"19-notifications": "moonwitness/ui/v2/19-notifications.svg",
				"20-kanban": "moonwitness/ui/v2/20-kanban.svg",
				"21-calendar": "moonwitness/ui/v2/21-calendar.svg",
				"22-chat": "moonwitness/ui/v2/22-chat.svg",
				"23-ai-workspace": "moonwitness/ui/v2/23-ai-workspace.svg",
				"24-resources": "moonwitness/ui/v2/24-resources.svg",
				"25-profile-settings": "moonwitness/ui/v2/25-profile-settings.svg",
				"26-authorization": "moonwitness/ui/v2/26-authorization.svg",
				"27-system-states": "moonwitness/ui/v2/27-system-states.svg",
				"28-platform-dashboard": "moonwitness/ui/v2/28-platform-dashboard.svg",
				"29-platform-users": "moonwitness/ui/v2/29-platform-users.svg",
				"30-platform-authorization": "moonwitness/ui/v2/30-platform-authorization.svg",
				"31-platform-moderation": "moonwitness/ui/v2/31-platform-moderation.svg",
				"32-platform-service-status": "moonwitness/ui/v2/32-platform-service-status.svg",
				"33-platform-audit": "moonwitness/ui/v2/33-platform-audit.svg",
				"34-platform-settings": "moonwitness/ui/v2/34-platform-settings.svg",
				"35-platform-system-states": "moonwitness/ui/v2/35-platform-system-states.svg",
				"application-shell": "moonwitness/ui/v2/application-shell.svg"
			},
			png: {
				"17-dashboard": "moonwitness/ui/v2/png/17-dashboard.png",
				"18-command-palette": "moonwitness/ui/v2/png/18-command-palette.png",
				"19-notifications": "moonwitness/ui/v2/png/19-notifications.png",
				"20-kanban": "moonwitness/ui/v2/png/20-kanban.png",
				"21-calendar": "moonwitness/ui/v2/png/21-calendar.png",
				"22-chat": "moonwitness/ui/v2/png/22-chat.png",
				"23-ai-workspace": "moonwitness/ui/v2/png/23-ai-workspace.png",
				"24-resources": "moonwitness/ui/v2/png/24-resources.png",
				"25-profile-settings": "moonwitness/ui/v2/png/25-profile-settings.png",
				"26-authorization": "moonwitness/ui/v2/png/26-authorization.png",
				"27-system-states": "moonwitness/ui/v2/png/27-system-states.png",
				"28-platform-dashboard": "moonwitness/ui/v2/png/28-platform-dashboard.png",
				"29-platform-users": "moonwitness/ui/v2/png/29-platform-users.png",
				"30-platform-authorization": "moonwitness/ui/v2/png/30-platform-authorization.png",
				"31-platform-moderation": "moonwitness/ui/v2/png/31-platform-moderation.png",
				"32-platform-service-status": "moonwitness/ui/v2/png/32-platform-service-status.png",
				"33-platform-audit": "moonwitness/ui/v2/png/33-platform-audit.png",
				"34-platform-settings": "moonwitness/ui/v2/png/34-platform-settings.png",
				"35-platform-system-states": "moonwitness/ui/v2/png/35-platform-system-states.png",
				"application-shell": "moonwitness/ui/v2/png/application-shell.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/ui/v2/17-dashboard.svg,moonwitness/ui/v2/18-command-palette.svg,moonwitness/ui/v2/19-notifications.svg,moonwitness/ui/v2/20-kanban.svg,moonwitness/ui/v2/21-calendar.svg,moonwitness/ui/v2/22-chat.svg,moonwitness/ui/v2/23-ai-workspace.svg,moonwitness/ui/v2/24-resources.svg,moonwitness/ui/v2/25-profile-settings.svg,moonwitness/ui/v2/26-authorization.svg,moonwitness/ui/v2/27-system-states.svg,moonwitness/ui/v2/28-platform-dashboard.svg,moonwitness/ui/v2/29-platform-users.svg,moonwitness/ui/v2/30-platform-authorization.svg,moonwitness/ui/v2/31-platform-moderation.svg,moonwitness/ui/v2/32-platform-service-status.svg,moonwitness/ui/v2/33-platform-audit.svg,moonwitness/ui/v2/34-platform-settings.svg,moonwitness/ui/v2/35-platform-system-states.svg,moonwitness/ui/v2/application-shell.svg,moonwitness/ui/v2/png/17-dashboard.png,moonwitness/ui/v2/png/18-command-palette.png,moonwitness/ui/v2/png/19-notifications.png,moonwitness/ui/v2/png/20-kanban.png,moonwitness/ui/v2/png/21-calendar.png,moonwitness/ui/v2/png/22-chat.png,moonwitness/ui/v2/png/23-ai-workspace.png,moonwitness/ui/v2/png/24-resources.png,moonwitness/ui/v2/png/25-profile-settings.png,moonwitness/ui/v2/png/26-authorization.png,moonwitness/ui/v2/png/27-system-states.png,moonwitness/ui/v2/png/28-platform-dashboard.png,moonwitness/ui/v2/png/29-platform-users.png,moonwitness/ui/v2/png/30-platform-authorization.png,moonwitness/ui/v2/png/31-platform-moderation.png,moonwitness/ui/v2/png/32-platform-service-status.png,moonwitness/ui/v2/png/33-platform-audit.png,moonwitness/ui/v2/png/34-platform-settings.png,moonwitness/ui/v2/png/35-platform-system-states.png,moonwitness/ui/v2/png/application-shell.png".split(",")
		},
		sfx: {
			manifest: "moonwitness/sfx/sounds.json",
			count: 14,
			canonicalFormat: "svg",
			svg: {},
			png: {},
			webm: {},
			lottie: {},
			wav: {
				"ai-complete": "moonwitness/sfx/generated/ai-complete.wav",
				"ai-start": "moonwitness/sfx/generated/ai-start.wav",
				"case-open": "moonwitness/sfx/generated/case-open.wav",
				"case-resolved": "moonwitness/sfx/generated/case-resolved.wav",
				"command-open": "moonwitness/sfx/generated/command-open.wav",
				error: "moonwitness/sfx/generated/error.wav",
				"evidence-linked": "moonwitness/sfx/generated/evidence-linked.wav",
				"notification-critical": "moonwitness/sfx/generated/notification-critical.wav",
				notification: "moonwitness/sfx/generated/notification.wav",
				success: "moonwitness/sfx/generated/success.wav",
				"trace-found": "moonwitness/sfx/generated/trace-found.wav",
				"ui-click-soft": "moonwitness/sfx/generated/ui-click-soft.wav",
				"upload-complete": "moonwitness/sfx/generated/upload-complete.wav",
				warning: "moonwitness/sfx/generated/warning.wav"
			},
			ogg: {
				"ai-complete": "moonwitness/sfx/generated/ai-complete.ogg",
				"ai-start": "moonwitness/sfx/generated/ai-start.ogg",
				"case-open": "moonwitness/sfx/generated/case-open.ogg",
				"case-resolved": "moonwitness/sfx/generated/case-resolved.ogg",
				"command-open": "moonwitness/sfx/generated/command-open.ogg",
				error: "moonwitness/sfx/generated/error.ogg",
				"evidence-linked": "moonwitness/sfx/generated/evidence-linked.ogg",
				"notification-critical": "moonwitness/sfx/generated/notification-critical.ogg",
				notification: "moonwitness/sfx/generated/notification.ogg",
				success: "moonwitness/sfx/generated/success.ogg",
				"trace-found": "moonwitness/sfx/generated/trace-found.ogg",
				"ui-click-soft": "moonwitness/sfx/generated/ui-click-soft.ogg",
				"upload-complete": "moonwitness/sfx/generated/upload-complete.ogg",
				warning: "moonwitness/sfx/generated/warning.ogg"
			},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/sfx/generated/ai-complete.ogg,moonwitness/sfx/generated/ai-complete.wav,moonwitness/sfx/generated/ai-start.ogg,moonwitness/sfx/generated/ai-start.wav,moonwitness/sfx/generated/case-open.ogg,moonwitness/sfx/generated/case-open.wav,moonwitness/sfx/generated/case-resolved.ogg,moonwitness/sfx/generated/case-resolved.wav,moonwitness/sfx/generated/command-open.ogg,moonwitness/sfx/generated/command-open.wav,moonwitness/sfx/generated/error.ogg,moonwitness/sfx/generated/error.wav,moonwitness/sfx/generated/evidence-linked.ogg,moonwitness/sfx/generated/evidence-linked.wav,moonwitness/sfx/generated/notification-critical.ogg,moonwitness/sfx/generated/notification-critical.wav,moonwitness/sfx/generated/notification.ogg,moonwitness/sfx/generated/notification.wav,moonwitness/sfx/generated/success.ogg,moonwitness/sfx/generated/success.wav,moonwitness/sfx/generated/trace-found.ogg,moonwitness/sfx/generated/trace-found.wav,moonwitness/sfx/generated/ui-click-soft.ogg,moonwitness/sfx/generated/ui-click-soft.wav,moonwitness/sfx/generated/upload-complete.ogg,moonwitness/sfx/generated/upload-complete.wav,moonwitness/sfx/generated/warning.ogg,moonwitness/sfx/generated/warning.wav".split(",")
		},
		"graph-vector": {
			manifest: "moonwitness/graph-pack/manifest.json",
			count: 10,
			canonicalFormat: "svg",
			svg: {
				"area-chart": "moonwitness/graph-pack/svg/area-chart.svg",
				"bar-chart": "moonwitness/graph-pack/svg/bar-chart.svg",
				"correlation-network": "moonwitness/graph-pack/svg/correlation-network.svg",
				"donut-chart": "moonwitness/graph-pack/svg/donut-chart.svg",
				"evidence-timeline": "moonwitness/graph-pack/svg/evidence-timeline.svg",
				"heat-strip": "moonwitness/graph-pack/svg/heat-strip.svg",
				"kpi-cards": "moonwitness/graph-pack/svg/kpi-cards.svg",
				"line-chart": "moonwitness/graph-pack/svg/line-chart.svg",
				"radar-chart": "moonwitness/graph-pack/svg/radar-chart.svg",
				"stacked-bar-chart": "moonwitness/graph-pack/svg/stacked-bar-chart.svg"
			},
			png: {
				"area-chart": "moonwitness/graph-pack/png/area-chart.png",
				"bar-chart": "moonwitness/graph-pack/png/bar-chart.png",
				"correlation-network": "moonwitness/graph-pack/png/correlation-network.png",
				"donut-chart": "moonwitness/graph-pack/png/donut-chart.png",
				"evidence-timeline": "moonwitness/graph-pack/png/evidence-timeline.png",
				"heat-strip": "moonwitness/graph-pack/png/heat-strip.png",
				"kpi-cards": "moonwitness/graph-pack/png/kpi-cards.png",
				"line-chart": "moonwitness/graph-pack/png/line-chart.png",
				"radar-chart": "moonwitness/graph-pack/png/radar-chart.png",
				"stacked-bar-chart": "moonwitness/graph-pack/png/stacked-bar-chart.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/graph-pack/png/area-chart.png",
				"moonwitness/graph-pack/png/bar-chart.png",
				"moonwitness/graph-pack/png/correlation-network.png",
				"moonwitness/graph-pack/png/donut-chart.png",
				"moonwitness/graph-pack/png/evidence-timeline.png",
				"moonwitness/graph-pack/png/heat-strip.png",
				"moonwitness/graph-pack/png/kpi-cards.png",
				"moonwitness/graph-pack/png/line-chart.png",
				"moonwitness/graph-pack/png/radar-chart.png",
				"moonwitness/graph-pack/png/stacked-bar-chart.png",
				"moonwitness/graph-pack/svg/area-chart.svg",
				"moonwitness/graph-pack/svg/bar-chart.svg",
				"moonwitness/graph-pack/svg/correlation-network.svg",
				"moonwitness/graph-pack/svg/donut-chart.svg",
				"moonwitness/graph-pack/svg/evidence-timeline.svg",
				"moonwitness/graph-pack/svg/heat-strip.svg",
				"moonwitness/graph-pack/svg/kpi-cards.svg",
				"moonwitness/graph-pack/svg/line-chart.svg",
				"moonwitness/graph-pack/svg/radar-chart.svg",
				"moonwitness/graph-pack/svg/stacked-bar-chart.svg"
			]
		},
		"badge-status": {
			manifest: "moonwitness/badge-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				archived: "moonwitness/badge-pack/svg/archived.svg",
				blocked: "moonwitness/badge-pack/svg/blocked.svg",
				degraded: "moonwitness/badge-pack/svg/degraded.svg",
				disputed: "moonwitness/badge-pack/svg/disputed.svg",
				"legal-review": "moonwitness/badge-pack/svg/legal-review.svg",
				"needs-context": "moonwitness/badge-pack/svg/needs-context.svg",
				offline: "moonwitness/badge-pack/svg/offline.svg",
				partial: "moonwitness/badge-pack/svg/partial.svg",
				"source-linked": "moonwitness/badge-pack/svg/source-linked.svg",
				supported: "moonwitness/badge-pack/svg/supported.svg",
				unresolved: "moonwitness/badge-pack/svg/unresolved.svg",
				verified: "moonwitness/badge-pack/svg/verified.svg"
			},
			png: {
				archived: "moonwitness/badge-pack/png/archived.png",
				blocked: "moonwitness/badge-pack/png/blocked.png",
				degraded: "moonwitness/badge-pack/png/degraded.png",
				disputed: "moonwitness/badge-pack/png/disputed.png",
				"legal-review": "moonwitness/badge-pack/png/legal-review.png",
				"needs-context": "moonwitness/badge-pack/png/needs-context.png",
				offline: "moonwitness/badge-pack/png/offline.png",
				partial: "moonwitness/badge-pack/png/partial.png",
				"source-linked": "moonwitness/badge-pack/png/source-linked.png",
				supported: "moonwitness/badge-pack/png/supported.png",
				unresolved: "moonwitness/badge-pack/png/unresolved.png",
				verified: "moonwitness/badge-pack/png/verified.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/badge-pack/png/archived.png",
				"moonwitness/badge-pack/png/blocked.png",
				"moonwitness/badge-pack/png/degraded.png",
				"moonwitness/badge-pack/png/disputed.png",
				"moonwitness/badge-pack/png/legal-review.png",
				"moonwitness/badge-pack/png/needs-context.png",
				"moonwitness/badge-pack/png/offline.png",
				"moonwitness/badge-pack/png/partial.png",
				"moonwitness/badge-pack/png/source-linked.png",
				"moonwitness/badge-pack/png/supported.png",
				"moonwitness/badge-pack/png/unresolved.png",
				"moonwitness/badge-pack/png/verified.png",
				"moonwitness/badge-pack/svg/archived.svg",
				"moonwitness/badge-pack/svg/blocked.svg",
				"moonwitness/badge-pack/svg/degraded.svg",
				"moonwitness/badge-pack/svg/disputed.svg",
				"moonwitness/badge-pack/svg/legal-review.svg",
				"moonwitness/badge-pack/svg/needs-context.svg",
				"moonwitness/badge-pack/svg/offline.svg",
				"moonwitness/badge-pack/svg/partial.svg",
				"moonwitness/badge-pack/svg/source-linked.svg",
				"moonwitness/badge-pack/svg/supported.svg",
				"moonwitness/badge-pack/svg/unresolved.svg",
				"moonwitness/badge-pack/svg/verified.svg"
			]
		},
		"source-file": {
			manifest: "moonwitness/source-file-pack/manifest.json",
			count: 15,
			canonicalFormat: "svg",
			svg: {
				archive: "moonwitness/source-file-pack/svg/archive.svg",
				audio: "moonwitness/source-file-pack/svg/audio.svg",
				bundle: "moonwitness/source-file-pack/svg/bundle.svg",
				dataset: "moonwitness/source-file-pack/svg/dataset.svg",
				email: "moonwitness/source-file-pack/svg/email.svg",
				image: "moonwitness/source-file-pack/svg/image.svg",
				"legal-doc": "moonwitness/source-file-pack/svg/legal-doc.svg",
				location: "moonwitness/source-file-pack/svg/location.svg",
				note: "moonwitness/source-file-pack/svg/note.svg",
				pdf: "moonwitness/source-file-pack/svg/pdf.svg",
				repository: "moonwitness/source-file-pack/svg/repository.svg",
				testimony: "moonwitness/source-file-pack/svg/testimony.svg",
				transcript: "moonwitness/source-file-pack/svg/transcript.svg",
				video: "moonwitness/source-file-pack/svg/video.svg",
				webpage: "moonwitness/source-file-pack/svg/webpage.svg"
			},
			png: {
				archive: "moonwitness/source-file-pack/png/archive.png",
				audio: "moonwitness/source-file-pack/png/audio.png",
				bundle: "moonwitness/source-file-pack/png/bundle.png",
				dataset: "moonwitness/source-file-pack/png/dataset.png",
				email: "moonwitness/source-file-pack/png/email.png",
				image: "moonwitness/source-file-pack/png/image.png",
				"legal-doc": "moonwitness/source-file-pack/png/legal-doc.png",
				location: "moonwitness/source-file-pack/png/location.png",
				note: "moonwitness/source-file-pack/png/note.png",
				pdf: "moonwitness/source-file-pack/png/pdf.png",
				repository: "moonwitness/source-file-pack/png/repository.png",
				testimony: "moonwitness/source-file-pack/png/testimony.png",
				transcript: "moonwitness/source-file-pack/png/transcript.png",
				video: "moonwitness/source-file-pack/png/video.png",
				webpage: "moonwitness/source-file-pack/png/webpage.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/source-file-pack/png/archive.png,moonwitness/source-file-pack/png/audio.png,moonwitness/source-file-pack/png/bundle.png,moonwitness/source-file-pack/png/dataset.png,moonwitness/source-file-pack/png/email.png,moonwitness/source-file-pack/png/image.png,moonwitness/source-file-pack/png/legal-doc.png,moonwitness/source-file-pack/png/location.png,moonwitness/source-file-pack/png/note.png,moonwitness/source-file-pack/png/pdf.png,moonwitness/source-file-pack/png/repository.png,moonwitness/source-file-pack/png/testimony.png,moonwitness/source-file-pack/png/transcript.png,moonwitness/source-file-pack/png/video.png,moonwitness/source-file-pack/png/webpage.png,moonwitness/source-file-pack/svg/archive.svg,moonwitness/source-file-pack/svg/audio.svg,moonwitness/source-file-pack/svg/bundle.svg,moonwitness/source-file-pack/svg/dataset.svg,moonwitness/source-file-pack/svg/email.svg,moonwitness/source-file-pack/svg/image.svg,moonwitness/source-file-pack/svg/legal-doc.svg,moonwitness/source-file-pack/svg/location.svg,moonwitness/source-file-pack/svg/note.svg,moonwitness/source-file-pack/svg/pdf.svg,moonwitness/source-file-pack/svg/repository.svg,moonwitness/source-file-pack/svg/testimony.svg,moonwitness/source-file-pack/svg/transcript.svg,moonwitness/source-file-pack/svg/video.svg,moonwitness/source-file-pack/svg/webpage.svg".split(",")
		},
		geospatial: {
			manifest: "moonwitness/geospatial-pack/manifest.json",
			count: 15,
			canonicalFormat: "svg",
			svg: {
				"boundary-zone": "moonwitness/geospatial-pack/svg/boundary-zone.svg",
				checkpoint: "moonwitness/geospatial-pack/svg/checkpoint.svg",
				"cluster-large": "moonwitness/geospatial-pack/svg/cluster-large.svg",
				"cluster-small": "moonwitness/geospatial-pack/svg/cluster-small.svg",
				crosshair: "moonwitness/geospatial-pack/svg/crosshair.svg",
				"heat-cell": "moonwitness/geospatial-pack/svg/heat-cell.svg",
				"jurisdiction-disputed": "moonwitness/geospatial-pack/svg/jurisdiction-disputed.svg",
				"map-grid": "moonwitness/geospatial-pack/svg/map-grid.svg",
				"pin-alert": "moonwitness/geospatial-pack/svg/pin-alert.svg",
				"pin-primary": "moonwitness/geospatial-pack/svg/pin-primary.svg",
				"pin-verified": "moonwitness/geospatial-pack/svg/pin-verified.svg",
				"route-dashed": "moonwitness/geospatial-pack/svg/route-dashed.svg",
				"route-solid": "moonwitness/geospatial-pack/svg/route-solid.svg",
				"uncertainty-high": "moonwitness/geospatial-pack/svg/uncertainty-high.svg",
				"uncertainty-low": "moonwitness/geospatial-pack/svg/uncertainty-low.svg"
			},
			png: {
				"boundary-zone": "moonwitness/geospatial-pack/png/boundary-zone.png",
				checkpoint: "moonwitness/geospatial-pack/png/checkpoint.png",
				"cluster-large": "moonwitness/geospatial-pack/png/cluster-large.png",
				"cluster-small": "moonwitness/geospatial-pack/png/cluster-small.png",
				crosshair: "moonwitness/geospatial-pack/png/crosshair.png",
				"heat-cell": "moonwitness/geospatial-pack/png/heat-cell.png",
				"jurisdiction-disputed": "moonwitness/geospatial-pack/png/jurisdiction-disputed.png",
				"map-grid": "moonwitness/geospatial-pack/png/map-grid.png",
				"pin-alert": "moonwitness/geospatial-pack/png/pin-alert.png",
				"pin-primary": "moonwitness/geospatial-pack/png/pin-primary.png",
				"pin-verified": "moonwitness/geospatial-pack/png/pin-verified.png",
				"route-dashed": "moonwitness/geospatial-pack/png/route-dashed.png",
				"route-solid": "moonwitness/geospatial-pack/png/route-solid.png",
				"uncertainty-high": "moonwitness/geospatial-pack/png/uncertainty-high.png",
				"uncertainty-low": "moonwitness/geospatial-pack/png/uncertainty-low.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/geospatial-pack/png/boundary-zone.png,moonwitness/geospatial-pack/png/checkpoint.png,moonwitness/geospatial-pack/png/cluster-large.png,moonwitness/geospatial-pack/png/cluster-small.png,moonwitness/geospatial-pack/png/crosshair.png,moonwitness/geospatial-pack/png/heat-cell.png,moonwitness/geospatial-pack/png/jurisdiction-disputed.png,moonwitness/geospatial-pack/png/map-grid.png,moonwitness/geospatial-pack/png/pin-alert.png,moonwitness/geospatial-pack/png/pin-primary.png,moonwitness/geospatial-pack/png/pin-verified.png,moonwitness/geospatial-pack/png/route-dashed.png,moonwitness/geospatial-pack/png/route-solid.png,moonwitness/geospatial-pack/png/uncertainty-high.png,moonwitness/geospatial-pack/png/uncertainty-low.png,moonwitness/geospatial-pack/svg/boundary-zone.svg,moonwitness/geospatial-pack/svg/checkpoint.svg,moonwitness/geospatial-pack/svg/cluster-large.svg,moonwitness/geospatial-pack/svg/cluster-small.svg,moonwitness/geospatial-pack/svg/crosshair.svg,moonwitness/geospatial-pack/svg/heat-cell.svg,moonwitness/geospatial-pack/svg/jurisdiction-disputed.svg,moonwitness/geospatial-pack/svg/map-grid.svg,moonwitness/geospatial-pack/svg/pin-alert.svg,moonwitness/geospatial-pack/svg/pin-primary.svg,moonwitness/geospatial-pack/svg/pin-verified.svg,moonwitness/geospatial-pack/svg/route-dashed.svg,moonwitness/geospatial-pack/svg/route-solid.svg,moonwitness/geospatial-pack/svg/uncertainty-high.svg,moonwitness/geospatial-pack/svg/uncertainty-low.svg".split(",")
		},
		"cursor-interaction": {
			manifest: "moonwitness/cursor-pack/manifest.json",
			count: 17,
			canonicalFormat: "svg",
			svg: {
				annotate: "moonwitness/cursor-pack/svg/annotate.svg",
				connect: "moonwitness/cursor-pack/svg/connect.svg",
				crosshair: "moonwitness/cursor-pack/svg/crosshair.svg",
				default: "moonwitness/cursor-pack/svg/default.svg",
				"evidence-link": "moonwitness/cursor-pack/svg/evidence-link.svg",
				grab: "moonwitness/cursor-pack/svg/grab.svg",
				grabbing: "moonwitness/cursor-pack/svg/grabbing.svg",
				inspect: "moonwitness/cursor-pack/svg/inspect.svg",
				pan: "moonwitness/cursor-pack/svg/pan.svg",
				pointer: "moonwitness/cursor-pack/svg/pointer.svg",
				"region-select": "moonwitness/cursor-pack/svg/region-select.svg",
				"resize-all": "moonwitness/cursor-pack/svg/resize-all.svg",
				"resize-horizontal": "moonwitness/cursor-pack/svg/resize-horizontal.svg",
				"resize-vertical": "moonwitness/cursor-pack/svg/resize-vertical.svg",
				"timeline-scrub": "moonwitness/cursor-pack/svg/timeline-scrub.svg",
				"zoom-in": "moonwitness/cursor-pack/svg/zoom-in.svg",
				"zoom-out": "moonwitness/cursor-pack/svg/zoom-out.svg"
			},
			png: {
				annotate: "moonwitness/cursor-pack/png/annotate.png",
				connect: "moonwitness/cursor-pack/png/connect.png",
				crosshair: "moonwitness/cursor-pack/png/crosshair.png",
				default: "moonwitness/cursor-pack/png/default.png",
				"evidence-link": "moonwitness/cursor-pack/png/evidence-link.png",
				grab: "moonwitness/cursor-pack/png/grab.png",
				grabbing: "moonwitness/cursor-pack/png/grabbing.png",
				inspect: "moonwitness/cursor-pack/png/inspect.png",
				pan: "moonwitness/cursor-pack/png/pan.png",
				pointer: "moonwitness/cursor-pack/png/pointer.png",
				"region-select": "moonwitness/cursor-pack/png/region-select.png",
				"resize-all": "moonwitness/cursor-pack/png/resize-all.png",
				"resize-horizontal": "moonwitness/cursor-pack/png/resize-horizontal.png",
				"resize-vertical": "moonwitness/cursor-pack/png/resize-vertical.png",
				"timeline-scrub": "moonwitness/cursor-pack/png/timeline-scrub.png",
				"zoom-in": "moonwitness/cursor-pack/png/zoom-in.png",
				"zoom-out": "moonwitness/cursor-pack/png/zoom-out.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/cursor-pack/png/annotate.png,moonwitness/cursor-pack/png/connect.png,moonwitness/cursor-pack/png/crosshair.png,moonwitness/cursor-pack/png/default.png,moonwitness/cursor-pack/png/evidence-link.png,moonwitness/cursor-pack/png/grab.png,moonwitness/cursor-pack/png/grabbing.png,moonwitness/cursor-pack/png/inspect.png,moonwitness/cursor-pack/png/pan.png,moonwitness/cursor-pack/png/pointer.png,moonwitness/cursor-pack/png/region-select.png,moonwitness/cursor-pack/png/resize-all.png,moonwitness/cursor-pack/png/resize-horizontal.png,moonwitness/cursor-pack/png/resize-vertical.png,moonwitness/cursor-pack/png/timeline-scrub.png,moonwitness/cursor-pack/png/zoom-in.png,moonwitness/cursor-pack/png/zoom-out.png,moonwitness/cursor-pack/svg/annotate.svg,moonwitness/cursor-pack/svg/connect.svg,moonwitness/cursor-pack/svg/crosshair.svg,moonwitness/cursor-pack/svg/default.svg,moonwitness/cursor-pack/svg/evidence-link.svg,moonwitness/cursor-pack/svg/grab.svg,moonwitness/cursor-pack/svg/grabbing.svg,moonwitness/cursor-pack/svg/inspect.svg,moonwitness/cursor-pack/svg/pan.svg,moonwitness/cursor-pack/svg/pointer.svg,moonwitness/cursor-pack/svg/region-select.svg,moonwitness/cursor-pack/svg/resize-all.svg,moonwitness/cursor-pack/svg/resize-horizontal.svg,moonwitness/cursor-pack/svg/resize-vertical.svg,moonwitness/cursor-pack/svg/timeline-scrub.svg,moonwitness/cursor-pack/svg/zoom-in.svg,moonwitness/cursor-pack/svg/zoom-out.svg".split(",")
		},
		"persona-avatar": {
			manifest: "moonwitness/persona-pack/manifest.json",
			count: 9,
			canonicalFormat: "svg",
			svg: {
				admin: "moonwitness/persona-pack/svg/admin.svg",
				"ai-system": "moonwitness/persona-pack/svg/ai-system.svg",
				analyst: "moonwitness/persona-pack/svg/analyst.svg",
				"anonymous-source": "moonwitness/persona-pack/svg/anonymous-source.svg",
				"community-member": "moonwitness/persona-pack/svg/community-member.svg",
				moderator: "moonwitness/persona-pack/svg/moderator.svg",
				"protected-witness": "moonwitness/persona-pack/svg/protected-witness.svg",
				researcher: "moonwitness/persona-pack/svg/researcher.svg",
				rocksoul: "moonwitness/persona-pack/svg/rocksoul.svg"
			},
			png: {
				admin: {
					32: "moonwitness/persona-pack/png/32/admin.png",
					64: "moonwitness/persona-pack/png/64/admin.png",
					128: "moonwitness/persona-pack/png/128/admin.png",
					256: "moonwitness/persona-pack/png/256/admin.png"
				},
				"ai-system": {
					32: "moonwitness/persona-pack/png/32/ai-system.png",
					64: "moonwitness/persona-pack/png/64/ai-system.png",
					128: "moonwitness/persona-pack/png/128/ai-system.png",
					256: "moonwitness/persona-pack/png/256/ai-system.png"
				},
				analyst: {
					32: "moonwitness/persona-pack/png/32/analyst.png",
					64: "moonwitness/persona-pack/png/64/analyst.png",
					128: "moonwitness/persona-pack/png/128/analyst.png",
					256: "moonwitness/persona-pack/png/256/analyst.png"
				},
				"anonymous-source": {
					32: "moonwitness/persona-pack/png/32/anonymous-source.png",
					64: "moonwitness/persona-pack/png/64/anonymous-source.png",
					128: "moonwitness/persona-pack/png/128/anonymous-source.png",
					256: "moonwitness/persona-pack/png/256/anonymous-source.png"
				},
				"community-member": {
					32: "moonwitness/persona-pack/png/32/community-member.png",
					64: "moonwitness/persona-pack/png/64/community-member.png",
					128: "moonwitness/persona-pack/png/128/community-member.png",
					256: "moonwitness/persona-pack/png/256/community-member.png"
				},
				moderator: {
					32: "moonwitness/persona-pack/png/32/moderator.png",
					64: "moonwitness/persona-pack/png/64/moderator.png",
					128: "moonwitness/persona-pack/png/128/moderator.png",
					256: "moonwitness/persona-pack/png/256/moderator.png"
				},
				"protected-witness": {
					32: "moonwitness/persona-pack/png/32/protected-witness.png",
					64: "moonwitness/persona-pack/png/64/protected-witness.png",
					128: "moonwitness/persona-pack/png/128/protected-witness.png",
					256: "moonwitness/persona-pack/png/256/protected-witness.png"
				},
				researcher: {
					32: "moonwitness/persona-pack/png/32/researcher.png",
					64: "moonwitness/persona-pack/png/64/researcher.png",
					128: "moonwitness/persona-pack/png/128/researcher.png",
					256: "moonwitness/persona-pack/png/256/researcher.png"
				},
				rocksoul: {
					32: "moonwitness/persona-pack/png/32/rocksoul.png",
					64: "moonwitness/persona-pack/png/64/rocksoul.png",
					128: "moonwitness/persona-pack/png/128/rocksoul.png",
					256: "moonwitness/persona-pack/png/256/rocksoul.png"
				}
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/persona-pack/png/128/admin.png,moonwitness/persona-pack/png/128/ai-system.png,moonwitness/persona-pack/png/128/analyst.png,moonwitness/persona-pack/png/128/anonymous-source.png,moonwitness/persona-pack/png/128/community-member.png,moonwitness/persona-pack/png/128/moderator.png,moonwitness/persona-pack/png/128/protected-witness.png,moonwitness/persona-pack/png/128/researcher.png,moonwitness/persona-pack/png/128/rocksoul.png,moonwitness/persona-pack/png/256/admin.png,moonwitness/persona-pack/png/256/ai-system.png,moonwitness/persona-pack/png/256/analyst.png,moonwitness/persona-pack/png/256/anonymous-source.png,moonwitness/persona-pack/png/256/community-member.png,moonwitness/persona-pack/png/256/moderator.png,moonwitness/persona-pack/png/256/protected-witness.png,moonwitness/persona-pack/png/256/researcher.png,moonwitness/persona-pack/png/256/rocksoul.png,moonwitness/persona-pack/png/32/admin.png,moonwitness/persona-pack/png/32/ai-system.png,moonwitness/persona-pack/png/32/analyst.png,moonwitness/persona-pack/png/32/anonymous-source.png,moonwitness/persona-pack/png/32/community-member.png,moonwitness/persona-pack/png/32/moderator.png,moonwitness/persona-pack/png/32/protected-witness.png,moonwitness/persona-pack/png/32/researcher.png,moonwitness/persona-pack/png/32/rocksoul.png,moonwitness/persona-pack/png/64/admin.png,moonwitness/persona-pack/png/64/ai-system.png,moonwitness/persona-pack/png/64/analyst.png,moonwitness/persona-pack/png/64/anonymous-source.png,moonwitness/persona-pack/png/64/community-member.png,moonwitness/persona-pack/png/64/moderator.png,moonwitness/persona-pack/png/64/protected-witness.png,moonwitness/persona-pack/png/64/researcher.png,moonwitness/persona-pack/png/64/rocksoul.png,moonwitness/persona-pack/svg/admin.svg,moonwitness/persona-pack/svg/ai-system.svg,moonwitness/persona-pack/svg/analyst.svg,moonwitness/persona-pack/svg/anonymous-source.svg,moonwitness/persona-pack/svg/community-member.svg,moonwitness/persona-pack/svg/moderator.svg,moonwitness/persona-pack/svg/protected-witness.svg,moonwitness/persona-pack/svg/researcher.svg,moonwitness/persona-pack/svg/rocksoul.svg".split(",")
		},
		"social-campaign": {
			manifest: "moonwitness/social-campaign-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"community-announcement": "moonwitness/social-campaign-pack/svg/community-announcement.svg",
				"discord-banner": "moonwitness/social-campaign-pack/svg/discord-banner.svg",
				"github-banner": "moonwitness/social-campaign-pack/svg/github-banner.svg",
				"instagram-square": "moonwitness/social-campaign-pack/svg/instagram-square.svg",
				"instagram-story": "moonwitness/social-campaign-pack/svg/instagram-story.svg",
				"linkedin-post": "moonwitness/social-campaign-pack/svg/linkedin-post.svg",
				"x-post": "moonwitness/social-campaign-pack/svg/x-post.svg",
				"youtube-thumbnail": "moonwitness/social-campaign-pack/svg/youtube-thumbnail.svg"
			},
			png: {
				"community-announcement": "moonwitness/social-campaign-pack/png/community-announcement.png",
				"discord-banner": "moonwitness/social-campaign-pack/png/discord-banner.png",
				"github-banner": "moonwitness/social-campaign-pack/png/github-banner.png",
				"instagram-square": "moonwitness/social-campaign-pack/png/instagram-square.png",
				"instagram-story": "moonwitness/social-campaign-pack/png/instagram-story.png",
				"linkedin-post": "moonwitness/social-campaign-pack/png/linkedin-post.png",
				"x-post": "moonwitness/social-campaign-pack/png/x-post.png",
				"youtube-thumbnail": "moonwitness/social-campaign-pack/png/youtube-thumbnail.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/social-campaign-pack/png/community-announcement.png",
				"moonwitness/social-campaign-pack/png/discord-banner.png",
				"moonwitness/social-campaign-pack/png/github-banner.png",
				"moonwitness/social-campaign-pack/png/instagram-square.png",
				"moonwitness/social-campaign-pack/png/instagram-story.png",
				"moonwitness/social-campaign-pack/png/linkedin-post.png",
				"moonwitness/social-campaign-pack/png/x-post.png",
				"moonwitness/social-campaign-pack/png/youtube-thumbnail.png",
				"moonwitness/social-campaign-pack/svg/community-announcement.svg",
				"moonwitness/social-campaign-pack/svg/discord-banner.svg",
				"moonwitness/social-campaign-pack/svg/github-banner.svg",
				"moonwitness/social-campaign-pack/svg/instagram-square.svg",
				"moonwitness/social-campaign-pack/svg/instagram-story.svg",
				"moonwitness/social-campaign-pack/svg/linkedin-post.svg",
				"moonwitness/social-campaign-pack/svg/x-post.svg",
				"moonwitness/social-campaign-pack/svg/youtube-thumbnail.svg"
			]
		},
		"platform-delivery": {
			manifest: "moonwitness/platform-delivery-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"adaptive-background": "moonwitness/platform-delivery-pack/svg/adaptive-background.svg",
				"adaptive-foreground": "moonwitness/platform-delivery-pack/svg/adaptive-foreground.svg",
				"app-store-banner": "moonwitness/platform-delivery-pack/svg/app-store-banner.svg",
				"launcher-tile": "moonwitness/platform-delivery-pack/svg/launcher-tile.svg",
				"loading-splash": "moonwitness/platform-delivery-pack/svg/loading-splash.svg",
				"pwa-install-card": "moonwitness/platform-delivery-pack/svg/pwa-install-card.svg",
				"splash-screen": "moonwitness/platform-delivery-pack/svg/splash-screen.svg",
				"windows-tile": "moonwitness/platform-delivery-pack/svg/windows-tile.svg"
			},
			png: {
				"adaptive-background": "moonwitness/platform-delivery-pack/png/adaptive-background.png",
				"adaptive-foreground": "moonwitness/platform-delivery-pack/png/adaptive-foreground.png",
				"app-store-banner": "moonwitness/platform-delivery-pack/png/app-store-banner.png",
				"launcher-tile": "moonwitness/platform-delivery-pack/png/launcher-tile.png",
				"loading-splash": "moonwitness/platform-delivery-pack/png/loading-splash.png",
				"pwa-install-card": "moonwitness/platform-delivery-pack/png/pwa-install-card.png",
				"splash-screen": "moonwitness/platform-delivery-pack/png/splash-screen.png",
				"windows-tile": "moonwitness/platform-delivery-pack/png/windows-tile.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/platform-delivery-pack/png/adaptive-background.png",
				"moonwitness/platform-delivery-pack/png/adaptive-foreground.png",
				"moonwitness/platform-delivery-pack/png/app-store-banner.png",
				"moonwitness/platform-delivery-pack/png/launcher-tile.png",
				"moonwitness/platform-delivery-pack/png/loading-splash.png",
				"moonwitness/platform-delivery-pack/png/pwa-install-card.png",
				"moonwitness/platform-delivery-pack/png/splash-screen.png",
				"moonwitness/platform-delivery-pack/png/windows-tile.png",
				"moonwitness/platform-delivery-pack/svg/adaptive-background.svg",
				"moonwitness/platform-delivery-pack/svg/adaptive-foreground.svg",
				"moonwitness/platform-delivery-pack/svg/app-store-banner.svg",
				"moonwitness/platform-delivery-pack/svg/launcher-tile.svg",
				"moonwitness/platform-delivery-pack/svg/loading-splash.svg",
				"moonwitness/platform-delivery-pack/svg/pwa-install-card.svg",
				"moonwitness/platform-delivery-pack/svg/splash-screen.svg",
				"moonwitness/platform-delivery-pack/svg/windows-tile.svg"
			]
		},
		onboarding: {
			manifest: "moonwitness/onboarding-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"ai-workspace": "moonwitness/onboarding-pack/svg/ai-workspace.svg",
				"connect-sources": "moonwitness/onboarding-pack/svg/connect-sources.svg",
				"correlate-evidence": "moonwitness/onboarding-pack/svg/correlate-evidence.svg",
				"create-case": "moonwitness/onboarding-pack/svg/create-case.svg",
				"join-community": "moonwitness/onboarding-pack/svg/join-community.svg",
				"responsible-investigation": "moonwitness/onboarding-pack/svg/responsible-investigation.svg",
				"review-findings": "moonwitness/onboarding-pack/svg/review-findings.svg",
				welcome: "moonwitness/onboarding-pack/svg/welcome.svg"
			},
			png: {
				"ai-workspace": "moonwitness/onboarding-pack/png/ai-workspace.png",
				"connect-sources": "moonwitness/onboarding-pack/png/connect-sources.png",
				"correlate-evidence": "moonwitness/onboarding-pack/png/correlate-evidence.png",
				"create-case": "moonwitness/onboarding-pack/png/create-case.png",
				"join-community": "moonwitness/onboarding-pack/png/join-community.png",
				"responsible-investigation": "moonwitness/onboarding-pack/png/responsible-investigation.png",
				"review-findings": "moonwitness/onboarding-pack/png/review-findings.png",
				welcome: "moonwitness/onboarding-pack/png/welcome.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/onboarding-pack/png/ai-workspace.png",
				"moonwitness/onboarding-pack/png/connect-sources.png",
				"moonwitness/onboarding-pack/png/correlate-evidence.png",
				"moonwitness/onboarding-pack/png/create-case.png",
				"moonwitness/onboarding-pack/png/join-community.png",
				"moonwitness/onboarding-pack/png/responsible-investigation.png",
				"moonwitness/onboarding-pack/png/review-findings.png",
				"moonwitness/onboarding-pack/png/welcome.png",
				"moonwitness/onboarding-pack/svg/ai-workspace.svg",
				"moonwitness/onboarding-pack/svg/connect-sources.svg",
				"moonwitness/onboarding-pack/svg/correlate-evidence.svg",
				"moonwitness/onboarding-pack/svg/create-case.svg",
				"moonwitness/onboarding-pack/svg/join-community.svg",
				"moonwitness/onboarding-pack/svg/responsible-investigation.svg",
				"moonwitness/onboarding-pack/svg/review-findings.svg",
				"moonwitness/onboarding-pack/svg/welcome.svg"
			]
		},
		"document-report": {
			manifest: "moonwitness/document-report-pack/manifest.json",
			count: 9,
			canonicalFormat: "svg",
			svg: {
				"appendix-separator": "moonwitness/document-report-pack/svg/appendix-separator.svg",
				"case-report": "moonwitness/document-report-pack/svg/case-report.svg",
				"citation-card": "moonwitness/document-report-pack/svg/citation-card.svg",
				"community-recap": "moonwitness/document-report-pack/svg/community-recap.svg",
				"evidence-dossier": "moonwitness/document-report-pack/svg/evidence-dossier.svg",
				"header-footer": "moonwitness/document-report-pack/svg/header-footer.svg",
				"investigation-export": "moonwitness/document-report-pack/svg/investigation-export.svg",
				"legal-review": "moonwitness/document-report-pack/svg/legal-review.svg",
				"table-of-contents": "moonwitness/document-report-pack/svg/table-of-contents.svg"
			},
			png: {
				"appendix-separator": "moonwitness/document-report-pack/png/appendix-separator.png",
				"case-report": "moonwitness/document-report-pack/png/case-report.png",
				"citation-card": "moonwitness/document-report-pack/png/citation-card.png",
				"community-recap": "moonwitness/document-report-pack/png/community-recap.png",
				"evidence-dossier": "moonwitness/document-report-pack/png/evidence-dossier.png",
				"header-footer": "moonwitness/document-report-pack/png/header-footer.png",
				"investigation-export": "moonwitness/document-report-pack/png/investigation-export.png",
				"legal-review": "moonwitness/document-report-pack/png/legal-review.png",
				"table-of-contents": "moonwitness/document-report-pack/png/table-of-contents.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/document-report-pack/png/appendix-separator.png",
				"moonwitness/document-report-pack/png/case-report.png",
				"moonwitness/document-report-pack/png/citation-card.png",
				"moonwitness/document-report-pack/png/community-recap.png",
				"moonwitness/document-report-pack/png/evidence-dossier.png",
				"moonwitness/document-report-pack/png/header-footer.png",
				"moonwitness/document-report-pack/png/investigation-export.png",
				"moonwitness/document-report-pack/png/legal-review.png",
				"moonwitness/document-report-pack/png/table-of-contents.png",
				"moonwitness/document-report-pack/svg/appendix-separator.svg",
				"moonwitness/document-report-pack/svg/case-report.svg",
				"moonwitness/document-report-pack/svg/citation-card.svg",
				"moonwitness/document-report-pack/svg/community-recap.svg",
				"moonwitness/document-report-pack/svg/evidence-dossier.svg",
				"moonwitness/document-report-pack/svg/header-footer.svg",
				"moonwitness/document-report-pack/svg/investigation-export.svg",
				"moonwitness/document-report-pack/svg/legal-review.svg",
				"moonwitness/document-report-pack/svg/table-of-contents.svg"
			]
		},
		notification: {
			manifest: "moonwitness/notification-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"case-update-banner": "moonwitness/notification-pack/svg/case-update-banner.svg",
				"critical-alert-email": "moonwitness/notification-pack/svg/critical-alert-email.svg",
				"digest-email": "moonwitness/notification-pack/svg/digest-email.svg",
				"evidence-linked-email": "moonwitness/notification-pack/svg/evidence-linked-email.svg",
				"inbox-card": "moonwitness/notification-pack/svg/inbox-card.svg",
				"push-notification": "moonwitness/notification-pack/svg/push-notification.svg",
				"review-request-email": "moonwitness/notification-pack/svg/review-request-email.svg",
				"system-notice-strip": "moonwitness/notification-pack/svg/system-notice-strip.svg"
			},
			png: {
				"case-update-banner": "moonwitness/notification-pack/png/case-update-banner.png",
				"critical-alert-email": "moonwitness/notification-pack/png/critical-alert-email.png",
				"digest-email": "moonwitness/notification-pack/png/digest-email.png",
				"evidence-linked-email": "moonwitness/notification-pack/png/evidence-linked-email.png",
				"inbox-card": "moonwitness/notification-pack/png/inbox-card.png",
				"push-notification": "moonwitness/notification-pack/png/push-notification.png",
				"review-request-email": "moonwitness/notification-pack/png/review-request-email.png",
				"system-notice-strip": "moonwitness/notification-pack/png/system-notice-strip.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/notification-pack/png/case-update-banner.png",
				"moonwitness/notification-pack/png/critical-alert-email.png",
				"moonwitness/notification-pack/png/digest-email.png",
				"moonwitness/notification-pack/png/evidence-linked-email.png",
				"moonwitness/notification-pack/png/inbox-card.png",
				"moonwitness/notification-pack/png/push-notification.png",
				"moonwitness/notification-pack/png/review-request-email.png",
				"moonwitness/notification-pack/png/system-notice-strip.png",
				"moonwitness/notification-pack/svg/case-update-banner.svg",
				"moonwitness/notification-pack/svg/critical-alert-email.svg",
				"moonwitness/notification-pack/svg/digest-email.svg",
				"moonwitness/notification-pack/svg/evidence-linked-email.svg",
				"moonwitness/notification-pack/svg/inbox-card.svg",
				"moonwitness/notification-pack/svg/push-notification.svg",
				"moonwitness/notification-pack/svg/review-request-email.svg",
				"moonwitness/notification-pack/svg/system-notice-strip.svg"
			]
		},
		editorial: {
			manifest: "moonwitness/editorial-pack/manifest.json",
			count: 6,
			canonicalFormat: "svg",
			svg: {
				"archive-dossier": "moonwitness/editorial-pack/svg/archive-dossier.svg",
				"case-map": "moonwitness/editorial-pack/svg/case-map.svg",
				"field-witness": "moonwitness/editorial-pack/svg/field-witness.svg",
				"legal-boundary": "moonwitness/editorial-pack/svg/legal-boundary.svg",
				"lunar-observatory": "moonwitness/editorial-pack/svg/lunar-observatory.svg",
				"source-signal": "moonwitness/editorial-pack/svg/source-signal.svg"
			},
			png: {
				"archive-dossier": "moonwitness/editorial-pack/png/archive-dossier.png",
				"case-map": "moonwitness/editorial-pack/png/case-map.png",
				"field-witness": "moonwitness/editorial-pack/png/field-witness.png",
				"legal-boundary": "moonwitness/editorial-pack/png/legal-boundary.png",
				"lunar-observatory": "moonwitness/editorial-pack/png/lunar-observatory.png",
				"source-signal": "moonwitness/editorial-pack/png/source-signal.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/editorial-pack/png/archive-dossier.png",
				"moonwitness/editorial-pack/png/case-map.png",
				"moonwitness/editorial-pack/png/field-witness.png",
				"moonwitness/editorial-pack/png/legal-boundary.png",
				"moonwitness/editorial-pack/png/lunar-observatory.png",
				"moonwitness/editorial-pack/png/source-signal.png",
				"moonwitness/editorial-pack/svg/archive-dossier.svg",
				"moonwitness/editorial-pack/svg/case-map.svg",
				"moonwitness/editorial-pack/svg/field-witness.svg",
				"moonwitness/editorial-pack/svg/legal-boundary.svg",
				"moonwitness/editorial-pack/svg/lunar-observatory.svg",
				"moonwitness/editorial-pack/svg/source-signal.svg"
			]
		},
		"evidence-media": {
			manifest: "moonwitness/evidence-media-pack/manifest.json",
			count: 24,
			canonicalFormat: "svg",
			svg: {
				"annotation-arrow": "moonwitness/evidence-media-pack/svg/annotation-arrow.svg",
				"bounding-box": "moonwitness/evidence-media-pack/svg/bounding-box.svg",
				"comment-marker": "moonwitness/evidence-media-pack/svg/comment-marker.svg",
				"compare-ab": "moonwitness/evidence-media-pack/svg/compare-ab.svg",
				"confidence-marker": "moonwitness/evidence-media-pack/svg/confidence-marker.svg",
				"crop-region": "moonwitness/evidence-media-pack/svg/crop-region.svg",
				"disputed-region": "moonwitness/evidence-media-pack/svg/disputed-region.svg",
				"evidence-focus": "moonwitness/evidence-media-pack/svg/evidence-focus.svg",
				"exif-panel": "moonwitness/evidence-media-pack/svg/exif-panel.svg",
				"frame-marker": "moonwitness/evidence-media-pack/svg/frame-marker.svg",
				"hash-chip": "moonwitness/evidence-media-pack/svg/hash-chip.svg",
				"location-overlay": "moonwitness/evidence-media-pack/svg/location-overlay.svg",
				measurement: "moonwitness/evidence-media-pack/svg/measurement.svg",
				"metadata-chip": "moonwitness/evidence-media-pack/svg/metadata-chip.svg",
				"object-region": "moonwitness/evidence-media-pack/svg/object-region.svg",
				"ocr-region": "moonwitness/evidence-media-pack/svg/ocr-region.svg",
				"redacted-region": "moonwitness/evidence-media-pack/svg/redacted-region.svg",
				"source-origin": "moonwitness/evidence-media-pack/svg/source-origin.svg",
				"timestamp-marker": "moonwitness/evidence-media-pack/svg/timestamp-marker.svg",
				"transcript-cue": "moonwitness/evidence-media-pack/svg/transcript-cue.svg",
				"verified-region": "moonwitness/evidence-media-pack/svg/verified-region.svg",
				"video-scrub-marker": "moonwitness/evidence-media-pack/svg/video-scrub-marker.svg",
				"waveform-cue": "moonwitness/evidence-media-pack/svg/waveform-cue.svg",
				"zoom-region": "moonwitness/evidence-media-pack/svg/zoom-region.svg"
			},
			png: {
				"annotation-arrow": "moonwitness/evidence-media-pack/png/annotation-arrow.png",
				"bounding-box": "moonwitness/evidence-media-pack/png/bounding-box.png",
				"comment-marker": "moonwitness/evidence-media-pack/png/comment-marker.png",
				"compare-ab": "moonwitness/evidence-media-pack/png/compare-ab.png",
				"confidence-marker": "moonwitness/evidence-media-pack/png/confidence-marker.png",
				"crop-region": "moonwitness/evidence-media-pack/png/crop-region.png",
				"disputed-region": "moonwitness/evidence-media-pack/png/disputed-region.png",
				"evidence-focus": "moonwitness/evidence-media-pack/png/evidence-focus.png",
				"exif-panel": "moonwitness/evidence-media-pack/png/exif-panel.png",
				"frame-marker": "moonwitness/evidence-media-pack/png/frame-marker.png",
				"hash-chip": "moonwitness/evidence-media-pack/png/hash-chip.png",
				"location-overlay": "moonwitness/evidence-media-pack/png/location-overlay.png",
				measurement: "moonwitness/evidence-media-pack/png/measurement.png",
				"metadata-chip": "moonwitness/evidence-media-pack/png/metadata-chip.png",
				"object-region": "moonwitness/evidence-media-pack/png/object-region.png",
				"ocr-region": "moonwitness/evidence-media-pack/png/ocr-region.png",
				"redacted-region": "moonwitness/evidence-media-pack/png/redacted-region.png",
				"source-origin": "moonwitness/evidence-media-pack/png/source-origin.png",
				"timestamp-marker": "moonwitness/evidence-media-pack/png/timestamp-marker.png",
				"transcript-cue": "moonwitness/evidence-media-pack/png/transcript-cue.png",
				"verified-region": "moonwitness/evidence-media-pack/png/verified-region.png",
				"video-scrub-marker": "moonwitness/evidence-media-pack/png/video-scrub-marker.png",
				"waveform-cue": "moonwitness/evidence-media-pack/png/waveform-cue.png",
				"zoom-region": "moonwitness/evidence-media-pack/png/zoom-region.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/evidence-media-pack/png/annotation-arrow.png,moonwitness/evidence-media-pack/png/bounding-box.png,moonwitness/evidence-media-pack/png/comment-marker.png,moonwitness/evidence-media-pack/png/compare-ab.png,moonwitness/evidence-media-pack/png/confidence-marker.png,moonwitness/evidence-media-pack/png/crop-region.png,moonwitness/evidence-media-pack/png/disputed-region.png,moonwitness/evidence-media-pack/png/evidence-focus.png,moonwitness/evidence-media-pack/png/exif-panel.png,moonwitness/evidence-media-pack/png/frame-marker.png,moonwitness/evidence-media-pack/png/hash-chip.png,moonwitness/evidence-media-pack/png/location-overlay.png,moonwitness/evidence-media-pack/png/measurement.png,moonwitness/evidence-media-pack/png/metadata-chip.png,moonwitness/evidence-media-pack/png/object-region.png,moonwitness/evidence-media-pack/png/ocr-region.png,moonwitness/evidence-media-pack/png/redacted-region.png,moonwitness/evidence-media-pack/png/source-origin.png,moonwitness/evidence-media-pack/png/timestamp-marker.png,moonwitness/evidence-media-pack/png/transcript-cue.png,moonwitness/evidence-media-pack/png/verified-region.png,moonwitness/evidence-media-pack/png/video-scrub-marker.png,moonwitness/evidence-media-pack/png/waveform-cue.png,moonwitness/evidence-media-pack/png/zoom-region.png,moonwitness/evidence-media-pack/svg/annotation-arrow.svg,moonwitness/evidence-media-pack/svg/bounding-box.svg,moonwitness/evidence-media-pack/svg/comment-marker.svg,moonwitness/evidence-media-pack/svg/compare-ab.svg,moonwitness/evidence-media-pack/svg/confidence-marker.svg,moonwitness/evidence-media-pack/svg/crop-region.svg,moonwitness/evidence-media-pack/svg/disputed-region.svg,moonwitness/evidence-media-pack/svg/evidence-focus.svg,moonwitness/evidence-media-pack/svg/exif-panel.svg,moonwitness/evidence-media-pack/svg/frame-marker.svg,moonwitness/evidence-media-pack/svg/hash-chip.svg,moonwitness/evidence-media-pack/svg/location-overlay.svg,moonwitness/evidence-media-pack/svg/measurement.svg,moonwitness/evidence-media-pack/svg/metadata-chip.svg,moonwitness/evidence-media-pack/svg/object-region.svg,moonwitness/evidence-media-pack/svg/ocr-region.svg,moonwitness/evidence-media-pack/svg/redacted-region.svg,moonwitness/evidence-media-pack/svg/source-origin.svg,moonwitness/evidence-media-pack/svg/timestamp-marker.svg,moonwitness/evidence-media-pack/svg/transcript-cue.svg,moonwitness/evidence-media-pack/svg/verified-region.svg,moonwitness/evidence-media-pack/svg/video-scrub-marker.svg,moonwitness/evidence-media-pack/svg/waveform-cue.svg,moonwitness/evidence-media-pack/svg/zoom-region.svg".split(",")
		},
		"correlation-semantics": {
			manifest: "moonwitness/correlation-semantics-pack/manifest.json",
			count: 24,
			canonicalFormat: "svg",
			svg: {
				"edge-contradicts": "moonwitness/correlation-semantics-pack/svg/edge-contradicts.svg",
				"edge-derived-from": "moonwitness/correlation-semantics-pack/svg/edge-derived-from.svg",
				"edge-inferred": "moonwitness/correlation-semantics-pack/svg/edge-inferred.svg",
				"edge-legal-basis": "moonwitness/correlation-semantics-pack/svg/edge-legal-basis.svg",
				"edge-located-at": "moonwitness/correlation-semantics-pack/svg/edge-located-at.svg",
				"edge-references": "moonwitness/correlation-semantics-pack/svg/edge-references.svg",
				"edge-reviewed-by": "moonwitness/correlation-semantics-pack/svg/edge-reviewed-by.svg",
				"edge-same-identity": "moonwitness/correlation-semantics-pack/svg/edge-same-identity.svg",
				"edge-submitted-by": "moonwitness/correlation-semantics-pack/svg/edge-submitted-by.svg",
				"edge-supports": "moonwitness/correlation-semantics-pack/svg/edge-supports.svg",
				"edge-temporal-after": "moonwitness/correlation-semantics-pack/svg/edge-temporal-after.svg",
				"edge-temporal-before": "moonwitness/correlation-semantics-pack/svg/edge-temporal-before.svg",
				"edge-uncertain": "moonwitness/correlation-semantics-pack/svg/edge-uncertain.svg",
				"edge-unresolved": "moonwitness/correlation-semantics-pack/svg/edge-unresolved.svg",
				"node-case": "moonwitness/correlation-semantics-pack/svg/node-case.svg",
				"node-claim": "moonwitness/correlation-semantics-pack/svg/node-claim.svg",
				"node-event": "moonwitness/correlation-semantics-pack/svg/node-event.svg",
				"node-evidence": "moonwitness/correlation-semantics-pack/svg/node-evidence.svg",
				"node-law": "moonwitness/correlation-semantics-pack/svg/node-law.svg",
				"node-location": "moonwitness/correlation-semantics-pack/svg/node-location.svg",
				"node-person": "moonwitness/correlation-semantics-pack/svg/node-person.svg",
				"node-source": "moonwitness/correlation-semantics-pack/svg/node-source.svg",
				"node-story": "moonwitness/correlation-semantics-pack/svg/node-story.svg",
				"node-text": "moonwitness/correlation-semantics-pack/svg/node-text.svg"
			},
			png: {
				"edge-contradicts": "moonwitness/correlation-semantics-pack/png/edge-contradicts.png",
				"edge-derived-from": "moonwitness/correlation-semantics-pack/png/edge-derived-from.png",
				"edge-inferred": "moonwitness/correlation-semantics-pack/png/edge-inferred.png",
				"edge-legal-basis": "moonwitness/correlation-semantics-pack/png/edge-legal-basis.png",
				"edge-located-at": "moonwitness/correlation-semantics-pack/png/edge-located-at.png",
				"edge-references": "moonwitness/correlation-semantics-pack/png/edge-references.png",
				"edge-reviewed-by": "moonwitness/correlation-semantics-pack/png/edge-reviewed-by.png",
				"edge-same-identity": "moonwitness/correlation-semantics-pack/png/edge-same-identity.png",
				"edge-submitted-by": "moonwitness/correlation-semantics-pack/png/edge-submitted-by.png",
				"edge-supports": "moonwitness/correlation-semantics-pack/png/edge-supports.png",
				"edge-temporal-after": "moonwitness/correlation-semantics-pack/png/edge-temporal-after.png",
				"edge-temporal-before": "moonwitness/correlation-semantics-pack/png/edge-temporal-before.png",
				"edge-uncertain": "moonwitness/correlation-semantics-pack/png/edge-uncertain.png",
				"edge-unresolved": "moonwitness/correlation-semantics-pack/png/edge-unresolved.png",
				"node-case": "moonwitness/correlation-semantics-pack/png/node-case.png",
				"node-claim": "moonwitness/correlation-semantics-pack/png/node-claim.png",
				"node-event": "moonwitness/correlation-semantics-pack/png/node-event.png",
				"node-evidence": "moonwitness/correlation-semantics-pack/png/node-evidence.png",
				"node-law": "moonwitness/correlation-semantics-pack/png/node-law.png",
				"node-location": "moonwitness/correlation-semantics-pack/png/node-location.png",
				"node-person": "moonwitness/correlation-semantics-pack/png/node-person.png",
				"node-source": "moonwitness/correlation-semantics-pack/png/node-source.png",
				"node-story": "moonwitness/correlation-semantics-pack/png/node-story.png",
				"node-text": "moonwitness/correlation-semantics-pack/png/node-text.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/correlation-semantics-pack/png/edge-contradicts.png,moonwitness/correlation-semantics-pack/png/edge-derived-from.png,moonwitness/correlation-semantics-pack/png/edge-inferred.png,moonwitness/correlation-semantics-pack/png/edge-legal-basis.png,moonwitness/correlation-semantics-pack/png/edge-located-at.png,moonwitness/correlation-semantics-pack/png/edge-references.png,moonwitness/correlation-semantics-pack/png/edge-reviewed-by.png,moonwitness/correlation-semantics-pack/png/edge-same-identity.png,moonwitness/correlation-semantics-pack/png/edge-submitted-by.png,moonwitness/correlation-semantics-pack/png/edge-supports.png,moonwitness/correlation-semantics-pack/png/edge-temporal-after.png,moonwitness/correlation-semantics-pack/png/edge-temporal-before.png,moonwitness/correlation-semantics-pack/png/edge-uncertain.png,moonwitness/correlation-semantics-pack/png/edge-unresolved.png,moonwitness/correlation-semantics-pack/png/node-case.png,moonwitness/correlation-semantics-pack/png/node-claim.png,moonwitness/correlation-semantics-pack/png/node-event.png,moonwitness/correlation-semantics-pack/png/node-evidence.png,moonwitness/correlation-semantics-pack/png/node-law.png,moonwitness/correlation-semantics-pack/png/node-location.png,moonwitness/correlation-semantics-pack/png/node-person.png,moonwitness/correlation-semantics-pack/png/node-source.png,moonwitness/correlation-semantics-pack/png/node-story.png,moonwitness/correlation-semantics-pack/png/node-text.png,moonwitness/correlation-semantics-pack/svg/edge-contradicts.svg,moonwitness/correlation-semantics-pack/svg/edge-derived-from.svg,moonwitness/correlation-semantics-pack/svg/edge-inferred.svg,moonwitness/correlation-semantics-pack/svg/edge-legal-basis.svg,moonwitness/correlation-semantics-pack/svg/edge-located-at.svg,moonwitness/correlation-semantics-pack/svg/edge-references.svg,moonwitness/correlation-semantics-pack/svg/edge-reviewed-by.svg,moonwitness/correlation-semantics-pack/svg/edge-same-identity.svg,moonwitness/correlation-semantics-pack/svg/edge-submitted-by.svg,moonwitness/correlation-semantics-pack/svg/edge-supports.svg,moonwitness/correlation-semantics-pack/svg/edge-temporal-after.svg,moonwitness/correlation-semantics-pack/svg/edge-temporal-before.svg,moonwitness/correlation-semantics-pack/svg/edge-uncertain.svg,moonwitness/correlation-semantics-pack/svg/edge-unresolved.svg,moonwitness/correlation-semantics-pack/svg/node-case.svg,moonwitness/correlation-semantics-pack/svg/node-claim.svg,moonwitness/correlation-semantics-pack/svg/node-event.svg,moonwitness/correlation-semantics-pack/svg/node-evidence.svg,moonwitness/correlation-semantics-pack/svg/node-law.svg,moonwitness/correlation-semantics-pack/svg/node-location.svg,moonwitness/correlation-semantics-pack/svg/node-person.svg,moonwitness/correlation-semantics-pack/svg/node-source.svg,moonwitness/correlation-semantics-pack/svg/node-story.svg,moonwitness/correlation-semantics-pack/svg/node-text.svg".split(",")
		},
		"kanban-workflow": {
			manifest: "moonwitness/kanban-pack/manifest.json",
			count: 18,
			canonicalFormat: "svg",
			svg: {
				"assignee-chip": "moonwitness/kanban-pack/svg/assignee-chip.svg",
				"blocker-chip": "moonwitness/kanban-pack/svg/blocker-chip.svg",
				"card-blocked": "moonwitness/kanban-pack/svg/card-blocked.svg",
				"card-complete": "moonwitness/kanban-pack/svg/card-complete.svg",
				"card-default": "moonwitness/kanban-pack/svg/card-default.svg",
				"card-priority": "moonwitness/kanban-pack/svg/card-priority.svg",
				"card-review": "moonwitness/kanban-pack/svg/card-review.svg",
				"column-done": "moonwitness/kanban-pack/svg/column-done.svg",
				"column-progress": "moonwitness/kanban-pack/svg/column-progress.svg",
				"column-review": "moonwitness/kanban-pack/svg/column-review.svg",
				"column-todo": "moonwitness/kanban-pack/svg/column-todo.svg",
				"drag-placeholder": "moonwitness/kanban-pack/svg/drag-placeholder.svg",
				"drop-target": "moonwitness/kanban-pack/svg/drop-target.svg",
				"due-date-chip": "moonwitness/kanban-pack/svg/due-date-chip.svg",
				"priority-chip": "moonwitness/kanban-pack/svg/priority-chip.svg",
				"progress-meter": "moonwitness/kanban-pack/svg/progress-meter.svg",
				"sla-chip": "moonwitness/kanban-pack/svg/sla-chip.svg",
				"wip-limit": "moonwitness/kanban-pack/svg/wip-limit.svg"
			},
			png: {
				"assignee-chip": "moonwitness/kanban-pack/png/assignee-chip.png",
				"blocker-chip": "moonwitness/kanban-pack/png/blocker-chip.png",
				"card-blocked": "moonwitness/kanban-pack/png/card-blocked.png",
				"card-complete": "moonwitness/kanban-pack/png/card-complete.png",
				"card-default": "moonwitness/kanban-pack/png/card-default.png",
				"card-priority": "moonwitness/kanban-pack/png/card-priority.png",
				"card-review": "moonwitness/kanban-pack/png/card-review.png",
				"column-done": "moonwitness/kanban-pack/png/column-done.png",
				"column-progress": "moonwitness/kanban-pack/png/column-progress.png",
				"column-review": "moonwitness/kanban-pack/png/column-review.png",
				"column-todo": "moonwitness/kanban-pack/png/column-todo.png",
				"drag-placeholder": "moonwitness/kanban-pack/png/drag-placeholder.png",
				"drop-target": "moonwitness/kanban-pack/png/drop-target.png",
				"due-date-chip": "moonwitness/kanban-pack/png/due-date-chip.png",
				"priority-chip": "moonwitness/kanban-pack/png/priority-chip.png",
				"progress-meter": "moonwitness/kanban-pack/png/progress-meter.png",
				"sla-chip": "moonwitness/kanban-pack/png/sla-chip.png",
				"wip-limit": "moonwitness/kanban-pack/png/wip-limit.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/kanban-pack/png/assignee-chip.png,moonwitness/kanban-pack/png/blocker-chip.png,moonwitness/kanban-pack/png/card-blocked.png,moonwitness/kanban-pack/png/card-complete.png,moonwitness/kanban-pack/png/card-default.png,moonwitness/kanban-pack/png/card-priority.png,moonwitness/kanban-pack/png/card-review.png,moonwitness/kanban-pack/png/column-done.png,moonwitness/kanban-pack/png/column-progress.png,moonwitness/kanban-pack/png/column-review.png,moonwitness/kanban-pack/png/column-todo.png,moonwitness/kanban-pack/png/drag-placeholder.png,moonwitness/kanban-pack/png/drop-target.png,moonwitness/kanban-pack/png/due-date-chip.png,moonwitness/kanban-pack/png/priority-chip.png,moonwitness/kanban-pack/png/progress-meter.png,moonwitness/kanban-pack/png/sla-chip.png,moonwitness/kanban-pack/png/wip-limit.png,moonwitness/kanban-pack/svg/assignee-chip.svg,moonwitness/kanban-pack/svg/blocker-chip.svg,moonwitness/kanban-pack/svg/card-blocked.svg,moonwitness/kanban-pack/svg/card-complete.svg,moonwitness/kanban-pack/svg/card-default.svg,moonwitness/kanban-pack/svg/card-priority.svg,moonwitness/kanban-pack/svg/card-review.svg,moonwitness/kanban-pack/svg/column-done.svg,moonwitness/kanban-pack/svg/column-progress.svg,moonwitness/kanban-pack/svg/column-review.svg,moonwitness/kanban-pack/svg/column-todo.svg,moonwitness/kanban-pack/svg/drag-placeholder.svg,moonwitness/kanban-pack/svg/drop-target.svg,moonwitness/kanban-pack/svg/due-date-chip.svg,moonwitness/kanban-pack/svg/priority-chip.svg,moonwitness/kanban-pack/svg/progress-meter.svg,moonwitness/kanban-pack/svg/sla-chip.svg,moonwitness/kanban-pack/svg/wip-limit.svg".split(",")
		},
		"calendar-temporal": {
			manifest: "moonwitness/calendar-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"agenda-row": "moonwitness/calendar-pack/svg/agenda-row.svg",
				"all-day": "moonwitness/calendar-pack/svg/all-day.svg",
				availability: "moonwitness/calendar-pack/svg/availability.svg",
				conflict: "moonwitness/calendar-pack/svg/conflict.svg",
				"date-range": "moonwitness/calendar-pack/svg/date-range.svg",
				deadline: "moonwitness/calendar-pack/svg/deadline.svg",
				duration: "moonwitness/calendar-pack/svg/duration.svg",
				"event-community": "moonwitness/calendar-pack/svg/event-community.svg",
				"event-default": "moonwitness/calendar-pack/svg/event-default.svg",
				"event-investigation": "moonwitness/calendar-pack/svg/event-investigation.svg",
				"event-legal": "moonwitness/calendar-pack/svg/event-legal.svg",
				"event-review": "moonwitness/calendar-pack/svg/event-review.svg",
				"month-cell": "moonwitness/calendar-pack/svg/month-cell.svg",
				recurrence: "moonwitness/calendar-pack/svg/recurrence.svg",
				timezone: "moonwitness/calendar-pack/svg/timezone.svg",
				"today-marker": "moonwitness/calendar-pack/svg/today-marker.svg"
			},
			png: {
				"agenda-row": "moonwitness/calendar-pack/png/agenda-row.png",
				"all-day": "moonwitness/calendar-pack/png/all-day.png",
				availability: "moonwitness/calendar-pack/png/availability.png",
				conflict: "moonwitness/calendar-pack/png/conflict.png",
				"date-range": "moonwitness/calendar-pack/png/date-range.png",
				deadline: "moonwitness/calendar-pack/png/deadline.png",
				duration: "moonwitness/calendar-pack/png/duration.png",
				"event-community": "moonwitness/calendar-pack/png/event-community.png",
				"event-default": "moonwitness/calendar-pack/png/event-default.png",
				"event-investigation": "moonwitness/calendar-pack/png/event-investigation.png",
				"event-legal": "moonwitness/calendar-pack/png/event-legal.png",
				"event-review": "moonwitness/calendar-pack/png/event-review.png",
				"month-cell": "moonwitness/calendar-pack/png/month-cell.png",
				recurrence: "moonwitness/calendar-pack/png/recurrence.png",
				timezone: "moonwitness/calendar-pack/png/timezone.png",
				"today-marker": "moonwitness/calendar-pack/png/today-marker.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/calendar-pack/png/agenda-row.png,moonwitness/calendar-pack/png/all-day.png,moonwitness/calendar-pack/png/availability.png,moonwitness/calendar-pack/png/conflict.png,moonwitness/calendar-pack/png/date-range.png,moonwitness/calendar-pack/png/deadline.png,moonwitness/calendar-pack/png/duration.png,moonwitness/calendar-pack/png/event-community.png,moonwitness/calendar-pack/png/event-default.png,moonwitness/calendar-pack/png/event-investigation.png,moonwitness/calendar-pack/png/event-legal.png,moonwitness/calendar-pack/png/event-review.png,moonwitness/calendar-pack/png/month-cell.png,moonwitness/calendar-pack/png/recurrence.png,moonwitness/calendar-pack/png/timezone.png,moonwitness/calendar-pack/png/today-marker.png,moonwitness/calendar-pack/svg/agenda-row.svg,moonwitness/calendar-pack/svg/all-day.svg,moonwitness/calendar-pack/svg/availability.svg,moonwitness/calendar-pack/svg/conflict.svg,moonwitness/calendar-pack/svg/date-range.svg,moonwitness/calendar-pack/svg/deadline.svg,moonwitness/calendar-pack/svg/duration.svg,moonwitness/calendar-pack/svg/event-community.svg,moonwitness/calendar-pack/svg/event-default.svg,moonwitness/calendar-pack/svg/event-investigation.svg,moonwitness/calendar-pack/svg/event-legal.svg,moonwitness/calendar-pack/svg/event-review.svg,moonwitness/calendar-pack/svg/month-cell.svg,moonwitness/calendar-pack/svg/recurrence.svg,moonwitness/calendar-pack/svg/timezone.svg,moonwitness/calendar-pack/svg/today-marker.svg".split(",")
		},
		"chat-collaboration": {
			manifest: "moonwitness/chat-pack/manifest.json",
			count: 24,
			canonicalFormat: "svg",
			svg: {
				"attachment-audio": "moonwitness/chat-pack/svg/attachment-audio.svg",
				"attachment-file": "moonwitness/chat-pack/svg/attachment-file.svg",
				"attachment-image": "moonwitness/chat-pack/svg/attachment-image.svg",
				"attachment-link": "moonwitness/chat-pack/svg/attachment-link.svg",
				"channel-header": "moonwitness/chat-pack/svg/channel-header.svg",
				"composer-default": "moonwitness/chat-pack/svg/composer-default.svg",
				"composer-disabled": "moonwitness/chat-pack/svg/composer-disabled.svg",
				"delivery-delivered": "moonwitness/chat-pack/svg/delivery-delivered.svg",
				"delivery-read": "moonwitness/chat-pack/svg/delivery-read.svg",
				"delivery-sent": "moonwitness/chat-pack/svg/delivery-sent.svg",
				"encrypted-message": "moonwitness/chat-pack/svg/encrypted-message.svg",
				mention: "moonwitness/chat-pack/svg/mention.svg",
				"message-other": "moonwitness/chat-pack/svg/message-other.svg",
				"message-self": "moonwitness/chat-pack/svg/message-self.svg",
				"message-system": "moonwitness/chat-pack/svg/message-system.svg",
				"moderator-note": "moonwitness/chat-pack/svg/moderator-note.svg",
				"presence-away": "moonwitness/chat-pack/svg/presence-away.svg",
				"presence-offline": "moonwitness/chat-pack/svg/presence-offline.svg",
				"presence-online": "moonwitness/chat-pack/svg/presence-online.svg",
				"quote-reply": "moonwitness/chat-pack/svg/quote-reply.svg",
				reaction: "moonwitness/chat-pack/svg/reaction.svg",
				"thread-reply": "moonwitness/chat-pack/svg/thread-reply.svg",
				"typing-indicator": "moonwitness/chat-pack/svg/typing-indicator.svg",
				"unread-divider": "moonwitness/chat-pack/svg/unread-divider.svg"
			},
			png: {
				"attachment-audio": "moonwitness/chat-pack/png/attachment-audio.png",
				"attachment-file": "moonwitness/chat-pack/png/attachment-file.png",
				"attachment-image": "moonwitness/chat-pack/png/attachment-image.png",
				"attachment-link": "moonwitness/chat-pack/png/attachment-link.png",
				"channel-header": "moonwitness/chat-pack/png/channel-header.png",
				"composer-default": "moonwitness/chat-pack/png/composer-default.png",
				"composer-disabled": "moonwitness/chat-pack/png/composer-disabled.png",
				"delivery-delivered": "moonwitness/chat-pack/png/delivery-delivered.png",
				"delivery-read": "moonwitness/chat-pack/png/delivery-read.png",
				"delivery-sent": "moonwitness/chat-pack/png/delivery-sent.png",
				"encrypted-message": "moonwitness/chat-pack/png/encrypted-message.png",
				mention: "moonwitness/chat-pack/png/mention.png",
				"message-other": "moonwitness/chat-pack/png/message-other.png",
				"message-self": "moonwitness/chat-pack/png/message-self.png",
				"message-system": "moonwitness/chat-pack/png/message-system.png",
				"moderator-note": "moonwitness/chat-pack/png/moderator-note.png",
				"presence-away": "moonwitness/chat-pack/png/presence-away.png",
				"presence-offline": "moonwitness/chat-pack/png/presence-offline.png",
				"presence-online": "moonwitness/chat-pack/png/presence-online.png",
				"quote-reply": "moonwitness/chat-pack/png/quote-reply.png",
				reaction: "moonwitness/chat-pack/png/reaction.png",
				"thread-reply": "moonwitness/chat-pack/png/thread-reply.png",
				"typing-indicator": "moonwitness/chat-pack/png/typing-indicator.png",
				"unread-divider": "moonwitness/chat-pack/png/unread-divider.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/chat-pack/png/attachment-audio.png,moonwitness/chat-pack/png/attachment-file.png,moonwitness/chat-pack/png/attachment-image.png,moonwitness/chat-pack/png/attachment-link.png,moonwitness/chat-pack/png/channel-header.png,moonwitness/chat-pack/png/composer-default.png,moonwitness/chat-pack/png/composer-disabled.png,moonwitness/chat-pack/png/delivery-delivered.png,moonwitness/chat-pack/png/delivery-read.png,moonwitness/chat-pack/png/delivery-sent.png,moonwitness/chat-pack/png/encrypted-message.png,moonwitness/chat-pack/png/mention.png,moonwitness/chat-pack/png/message-other.png,moonwitness/chat-pack/png/message-self.png,moonwitness/chat-pack/png/message-system.png,moonwitness/chat-pack/png/moderator-note.png,moonwitness/chat-pack/png/presence-away.png,moonwitness/chat-pack/png/presence-offline.png,moonwitness/chat-pack/png/presence-online.png,moonwitness/chat-pack/png/quote-reply.png,moonwitness/chat-pack/png/reaction.png,moonwitness/chat-pack/png/thread-reply.png,moonwitness/chat-pack/png/typing-indicator.png,moonwitness/chat-pack/png/unread-divider.png,moonwitness/chat-pack/svg/attachment-audio.svg,moonwitness/chat-pack/svg/attachment-file.svg,moonwitness/chat-pack/svg/attachment-image.svg,moonwitness/chat-pack/svg/attachment-link.svg,moonwitness/chat-pack/svg/channel-header.svg,moonwitness/chat-pack/svg/composer-default.svg,moonwitness/chat-pack/svg/composer-disabled.svg,moonwitness/chat-pack/svg/delivery-delivered.svg,moonwitness/chat-pack/svg/delivery-read.svg,moonwitness/chat-pack/svg/delivery-sent.svg,moonwitness/chat-pack/svg/encrypted-message.svg,moonwitness/chat-pack/svg/mention.svg,moonwitness/chat-pack/svg/message-other.svg,moonwitness/chat-pack/svg/message-self.svg,moonwitness/chat-pack/svg/message-system.svg,moonwitness/chat-pack/svg/moderator-note.svg,moonwitness/chat-pack/svg/presence-away.svg,moonwitness/chat-pack/svg/presence-offline.svg,moonwitness/chat-pack/svg/presence-online.svg,moonwitness/chat-pack/svg/quote-reply.svg,moonwitness/chat-pack/svg/reaction.svg,moonwitness/chat-pack/svg/thread-reply.svg,moonwitness/chat-pack/svg/typing-indicator.svg,moonwitness/chat-pack/svg/unread-divider.svg".split(",")
		},
		"ai-workspace": {
			manifest: "moonwitness/ai-workspace-pack/manifest.json",
			count: 18,
			canonicalFormat: "svg",
			svg: {
				"agent-chip": "moonwitness/ai-workspace-pack/svg/agent-chip.svg",
				"ai-complete": "moonwitness/ai-workspace-pack/svg/ai-complete.svg",
				"ai-error": "moonwitness/ai-workspace-pack/svg/ai-error.svg",
				"ai-idle": "moonwitness/ai-workspace-pack/svg/ai-idle.svg",
				"ai-streaming": "moonwitness/ai-workspace-pack/svg/ai-streaming.svg",
				"ai-thinking": "moonwitness/ai-workspace-pack/svg/ai-thinking.svg",
				"confidence-chip": "moonwitness/ai-workspace-pack/svg/confidence-chip.svg",
				"context-chip": "moonwitness/ai-workspace-pack/svg/context-chip.svg",
				guardrail: "moonwitness/ai-workspace-pack/svg/guardrail.svg",
				"human-review": "moonwitness/ai-workspace-pack/svg/human-review.svg",
				"model-selector": "moonwitness/ai-workspace-pack/svg/model-selector.svg",
				"prompt-template": "moonwitness/ai-workspace-pack/svg/prompt-template.svg",
				"retrieval-result": "moonwitness/ai-workspace-pack/svg/retrieval-result.svg",
				"source-citation": "moonwitness/ai-workspace-pack/svg/source-citation.svg",
				"token-meter": "moonwitness/ai-workspace-pack/svg/token-meter.svg",
				"tool-call": "moonwitness/ai-workspace-pack/svg/tool-call.svg",
				"tool-failure": "moonwitness/ai-workspace-pack/svg/tool-failure.svg",
				"tool-success": "moonwitness/ai-workspace-pack/svg/tool-success.svg"
			},
			png: {
				"agent-chip": "moonwitness/ai-workspace-pack/png/agent-chip.png",
				"ai-complete": "moonwitness/ai-workspace-pack/png/ai-complete.png",
				"ai-error": "moonwitness/ai-workspace-pack/png/ai-error.png",
				"ai-idle": "moonwitness/ai-workspace-pack/png/ai-idle.png",
				"ai-streaming": "moonwitness/ai-workspace-pack/png/ai-streaming.png",
				"ai-thinking": "moonwitness/ai-workspace-pack/png/ai-thinking.png",
				"confidence-chip": "moonwitness/ai-workspace-pack/png/confidence-chip.png",
				"context-chip": "moonwitness/ai-workspace-pack/png/context-chip.png",
				guardrail: "moonwitness/ai-workspace-pack/png/guardrail.png",
				"human-review": "moonwitness/ai-workspace-pack/png/human-review.png",
				"model-selector": "moonwitness/ai-workspace-pack/png/model-selector.png",
				"prompt-template": "moonwitness/ai-workspace-pack/png/prompt-template.png",
				"retrieval-result": "moonwitness/ai-workspace-pack/png/retrieval-result.png",
				"source-citation": "moonwitness/ai-workspace-pack/png/source-citation.png",
				"token-meter": "moonwitness/ai-workspace-pack/png/token-meter.png",
				"tool-call": "moonwitness/ai-workspace-pack/png/tool-call.png",
				"tool-failure": "moonwitness/ai-workspace-pack/png/tool-failure.png",
				"tool-success": "moonwitness/ai-workspace-pack/png/tool-success.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/ai-workspace-pack/png/agent-chip.png,moonwitness/ai-workspace-pack/png/ai-complete.png,moonwitness/ai-workspace-pack/png/ai-error.png,moonwitness/ai-workspace-pack/png/ai-idle.png,moonwitness/ai-workspace-pack/png/ai-streaming.png,moonwitness/ai-workspace-pack/png/ai-thinking.png,moonwitness/ai-workspace-pack/png/confidence-chip.png,moonwitness/ai-workspace-pack/png/context-chip.png,moonwitness/ai-workspace-pack/png/guardrail.png,moonwitness/ai-workspace-pack/png/human-review.png,moonwitness/ai-workspace-pack/png/model-selector.png,moonwitness/ai-workspace-pack/png/prompt-template.png,moonwitness/ai-workspace-pack/png/retrieval-result.png,moonwitness/ai-workspace-pack/png/source-citation.png,moonwitness/ai-workspace-pack/png/token-meter.png,moonwitness/ai-workspace-pack/png/tool-call.png,moonwitness/ai-workspace-pack/png/tool-failure.png,moonwitness/ai-workspace-pack/png/tool-success.png,moonwitness/ai-workspace-pack/svg/agent-chip.svg,moonwitness/ai-workspace-pack/svg/ai-complete.svg,moonwitness/ai-workspace-pack/svg/ai-error.svg,moonwitness/ai-workspace-pack/svg/ai-idle.svg,moonwitness/ai-workspace-pack/svg/ai-streaming.svg,moonwitness/ai-workspace-pack/svg/ai-thinking.svg,moonwitness/ai-workspace-pack/svg/confidence-chip.svg,moonwitness/ai-workspace-pack/svg/context-chip.svg,moonwitness/ai-workspace-pack/svg/guardrail.svg,moonwitness/ai-workspace-pack/svg/human-review.svg,moonwitness/ai-workspace-pack/svg/model-selector.svg,moonwitness/ai-workspace-pack/svg/prompt-template.svg,moonwitness/ai-workspace-pack/svg/retrieval-result.svg,moonwitness/ai-workspace-pack/svg/source-citation.svg,moonwitness/ai-workspace-pack/svg/token-meter.svg,moonwitness/ai-workspace-pack/svg/tool-call.svg,moonwitness/ai-workspace-pack/svg/tool-failure.svg,moonwitness/ai-workspace-pack/svg/tool-success.svg".split(",")
		},
		"authorization-security": {
			manifest: "moonwitness/security-pack/manifest.json",
			count: 18,
			canonicalFormat: "svg",
			svg: {
				"access-approved": "moonwitness/security-pack/svg/access-approved.svg",
				"access-rejected": "moonwitness/security-pack/svg/access-rejected.svg",
				"access-request": "moonwitness/security-pack/svg/access-request.svg",
				"api-key": "moonwitness/security-pack/svg/api-key.svg",
				"audit-lock": "moonwitness/security-pack/svg/audit-lock.svg",
				"device-trusted": "moonwitness/security-pack/svg/device-trusted.svg",
				"device-untrusted": "moonwitness/security-pack/svg/device-untrusted.svg",
				mfa: "moonwitness/security-pack/svg/mfa.svg",
				passkey: "moonwitness/security-pack/svg/passkey.svg",
				"permission-denied": "moonwitness/security-pack/svg/permission-denied.svg",
				"permission-granted": "moonwitness/security-pack/svg/permission-granted.svg",
				"recovery-code": "moonwitness/security-pack/svg/recovery-code.svg",
				"role-admin": "moonwitness/security-pack/svg/role-admin.svg",
				"role-researcher": "moonwitness/security-pack/svg/role-researcher.svg",
				"role-reviewer": "moonwitness/security-pack/svg/role-reviewer.svg",
				"security-alert": "moonwitness/security-pack/svg/security-alert.svg",
				"session-active": "moonwitness/security-pack/svg/session-active.svg",
				"session-expired": "moonwitness/security-pack/svg/session-expired.svg"
			},
			png: {
				"access-approved": "moonwitness/security-pack/png/access-approved.png",
				"access-rejected": "moonwitness/security-pack/png/access-rejected.png",
				"access-request": "moonwitness/security-pack/png/access-request.png",
				"api-key": "moonwitness/security-pack/png/api-key.png",
				"audit-lock": "moonwitness/security-pack/png/audit-lock.png",
				"device-trusted": "moonwitness/security-pack/png/device-trusted.png",
				"device-untrusted": "moonwitness/security-pack/png/device-untrusted.png",
				mfa: "moonwitness/security-pack/png/mfa.png",
				passkey: "moonwitness/security-pack/png/passkey.png",
				"permission-denied": "moonwitness/security-pack/png/permission-denied.png",
				"permission-granted": "moonwitness/security-pack/png/permission-granted.png",
				"recovery-code": "moonwitness/security-pack/png/recovery-code.png",
				"role-admin": "moonwitness/security-pack/png/role-admin.png",
				"role-researcher": "moonwitness/security-pack/png/role-researcher.png",
				"role-reviewer": "moonwitness/security-pack/png/role-reviewer.png",
				"security-alert": "moonwitness/security-pack/png/security-alert.png",
				"session-active": "moonwitness/security-pack/png/session-active.png",
				"session-expired": "moonwitness/security-pack/png/session-expired.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/security-pack/png/access-approved.png,moonwitness/security-pack/png/access-rejected.png,moonwitness/security-pack/png/access-request.png,moonwitness/security-pack/png/api-key.png,moonwitness/security-pack/png/audit-lock.png,moonwitness/security-pack/png/device-trusted.png,moonwitness/security-pack/png/device-untrusted.png,moonwitness/security-pack/png/mfa.png,moonwitness/security-pack/png/passkey.png,moonwitness/security-pack/png/permission-denied.png,moonwitness/security-pack/png/permission-granted.png,moonwitness/security-pack/png/recovery-code.png,moonwitness/security-pack/png/role-admin.png,moonwitness/security-pack/png/role-researcher.png,moonwitness/security-pack/png/role-reviewer.png,moonwitness/security-pack/png/security-alert.png,moonwitness/security-pack/png/session-active.png,moonwitness/security-pack/png/session-expired.png,moonwitness/security-pack/svg/access-approved.svg,moonwitness/security-pack/svg/access-rejected.svg,moonwitness/security-pack/svg/access-request.svg,moonwitness/security-pack/svg/api-key.svg,moonwitness/security-pack/svg/audit-lock.svg,moonwitness/security-pack/svg/device-trusted.svg,moonwitness/security-pack/svg/device-untrusted.svg,moonwitness/security-pack/svg/mfa.svg,moonwitness/security-pack/svg/passkey.svg,moonwitness/security-pack/svg/permission-denied.svg,moonwitness/security-pack/svg/permission-granted.svg,moonwitness/security-pack/svg/recovery-code.svg,moonwitness/security-pack/svg/role-admin.svg,moonwitness/security-pack/svg/role-researcher.svg,moonwitness/security-pack/svg/role-reviewer.svg,moonwitness/security-pack/svg/security-alert.svg,moonwitness/security-pack/svg/session-active.svg,moonwitness/security-pack/svg/session-expired.svg".split(",")
		},
		"data-grid": {
			manifest: "moonwitness/data-grid-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"bulk-select": "moonwitness/data-grid-pack/svg/bulk-select.svg",
				"column-hidden": "moonwitness/data-grid-pack/svg/column-hidden.svg",
				"column-pin": "moonwitness/data-grid-pack/svg/column-pin.svg",
				"column-resize": "moonwitness/data-grid-pack/svg/column-resize.svg",
				density: "moonwitness/data-grid-pack/svg/density.svg",
				"filter-active": "moonwitness/data-grid-pack/svg/filter-active.svg",
				"inline-edit": "moonwitness/data-grid-pack/svg/inline-edit.svg",
				pagination: "moonwitness/data-grid-pack/svg/pagination.svg",
				"row-disabled": "moonwitness/data-grid-pack/svg/row-disabled.svg",
				"row-hover": "moonwitness/data-grid-pack/svg/row-hover.svg",
				"row-selected": "moonwitness/data-grid-pack/svg/row-selected.svg",
				"sort-asc": "moonwitness/data-grid-pack/svg/sort-asc.svg",
				"sort-desc": "moonwitness/data-grid-pack/svg/sort-desc.svg",
				"table-compact": "moonwitness/data-grid-pack/svg/table-compact.svg",
				"table-default": "moonwitness/data-grid-pack/svg/table-default.svg",
				"table-empty": "moonwitness/data-grid-pack/svg/table-empty.svg"
			},
			png: {
				"bulk-select": "moonwitness/data-grid-pack/png/bulk-select.png",
				"column-hidden": "moonwitness/data-grid-pack/png/column-hidden.png",
				"column-pin": "moonwitness/data-grid-pack/png/column-pin.png",
				"column-resize": "moonwitness/data-grid-pack/png/column-resize.png",
				density: "moonwitness/data-grid-pack/png/density.png",
				"filter-active": "moonwitness/data-grid-pack/png/filter-active.png",
				"inline-edit": "moonwitness/data-grid-pack/png/inline-edit.png",
				pagination: "moonwitness/data-grid-pack/png/pagination.png",
				"row-disabled": "moonwitness/data-grid-pack/png/row-disabled.png",
				"row-hover": "moonwitness/data-grid-pack/png/row-hover.png",
				"row-selected": "moonwitness/data-grid-pack/png/row-selected.png",
				"sort-asc": "moonwitness/data-grid-pack/png/sort-asc.png",
				"sort-desc": "moonwitness/data-grid-pack/png/sort-desc.png",
				"table-compact": "moonwitness/data-grid-pack/png/table-compact.png",
				"table-default": "moonwitness/data-grid-pack/png/table-default.png",
				"table-empty": "moonwitness/data-grid-pack/png/table-empty.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/data-grid-pack/png/bulk-select.png,moonwitness/data-grid-pack/png/column-hidden.png,moonwitness/data-grid-pack/png/column-pin.png,moonwitness/data-grid-pack/png/column-resize.png,moonwitness/data-grid-pack/png/density.png,moonwitness/data-grid-pack/png/filter-active.png,moonwitness/data-grid-pack/png/inline-edit.png,moonwitness/data-grid-pack/png/pagination.png,moonwitness/data-grid-pack/png/row-disabled.png,moonwitness/data-grid-pack/png/row-hover.png,moonwitness/data-grid-pack/png/row-selected.png,moonwitness/data-grid-pack/png/sort-asc.png,moonwitness/data-grid-pack/png/sort-desc.png,moonwitness/data-grid-pack/png/table-compact.png,moonwitness/data-grid-pack/png/table-default.png,moonwitness/data-grid-pack/png/table-empty.png,moonwitness/data-grid-pack/svg/bulk-select.svg,moonwitness/data-grid-pack/svg/column-hidden.svg,moonwitness/data-grid-pack/svg/column-pin.svg,moonwitness/data-grid-pack/svg/column-resize.svg,moonwitness/data-grid-pack/svg/density.svg,moonwitness/data-grid-pack/svg/filter-active.svg,moonwitness/data-grid-pack/svg/inline-edit.svg,moonwitness/data-grid-pack/svg/pagination.svg,moonwitness/data-grid-pack/svg/row-disabled.svg,moonwitness/data-grid-pack/svg/row-hover.svg,moonwitness/data-grid-pack/svg/row-selected.svg,moonwitness/data-grid-pack/svg/sort-asc.svg,moonwitness/data-grid-pack/svg/sort-desc.svg,moonwitness/data-grid-pack/svg/table-compact.svg,moonwitness/data-grid-pack/svg/table-default.svg,moonwitness/data-grid-pack/svg/table-empty.svg".split(",")
		},
		"form-controls": {
			manifest: "moonwitness/form-controls-pack/manifest.json",
			count: 20,
			canonicalFormat: "svg",
			svg: {
				"checkbox-off": "moonwitness/form-controls-pack/svg/checkbox-off.svg",
				"checkbox-on": "moonwitness/form-controls-pack/svg/checkbox-on.svg",
				combobox: "moonwitness/form-controls-pack/svg/combobox.svg",
				"date-input": "moonwitness/form-controls-pack/svg/date-input.svg",
				"file-input": "moonwitness/form-controls-pack/svg/file-input.svg",
				"input-default": "moonwitness/form-controls-pack/svg/input-default.svg",
				"input-disabled": "moonwitness/form-controls-pack/svg/input-disabled.svg",
				"input-error": "moonwitness/form-controls-pack/svg/input-error.svg",
				"input-focus": "moonwitness/form-controls-pack/svg/input-focus.svg",
				"input-success": "moonwitness/form-controls-pack/svg/input-success.svg",
				"radio-off": "moonwitness/form-controls-pack/svg/radio-off.svg",
				"radio-on": "moonwitness/form-controls-pack/svg/radio-on.svg",
				readonly: "moonwitness/form-controls-pack/svg/readonly.svg",
				"search-input": "moonwitness/form-controls-pack/svg/search-input.svg",
				select: "moonwitness/form-controls-pack/svg/select.svg",
				slider: "moonwitness/form-controls-pack/svg/slider.svg",
				textarea: "moonwitness/form-controls-pack/svg/textarea.svg",
				"toggle-off": "moonwitness/form-controls-pack/svg/toggle-off.svg",
				"toggle-on": "moonwitness/form-controls-pack/svg/toggle-on.svg",
				"validation-inline": "moonwitness/form-controls-pack/svg/validation-inline.svg"
			},
			png: {
				"checkbox-off": "moonwitness/form-controls-pack/png/checkbox-off.png",
				"checkbox-on": "moonwitness/form-controls-pack/png/checkbox-on.png",
				combobox: "moonwitness/form-controls-pack/png/combobox.png",
				"date-input": "moonwitness/form-controls-pack/png/date-input.png",
				"file-input": "moonwitness/form-controls-pack/png/file-input.png",
				"input-default": "moonwitness/form-controls-pack/png/input-default.png",
				"input-disabled": "moonwitness/form-controls-pack/png/input-disabled.png",
				"input-error": "moonwitness/form-controls-pack/png/input-error.png",
				"input-focus": "moonwitness/form-controls-pack/png/input-focus.png",
				"input-success": "moonwitness/form-controls-pack/png/input-success.png",
				"radio-off": "moonwitness/form-controls-pack/png/radio-off.png",
				"radio-on": "moonwitness/form-controls-pack/png/radio-on.png",
				readonly: "moonwitness/form-controls-pack/png/readonly.png",
				"search-input": "moonwitness/form-controls-pack/png/search-input.png",
				select: "moonwitness/form-controls-pack/png/select.png",
				slider: "moonwitness/form-controls-pack/png/slider.png",
				textarea: "moonwitness/form-controls-pack/png/textarea.png",
				"toggle-off": "moonwitness/form-controls-pack/png/toggle-off.png",
				"toggle-on": "moonwitness/form-controls-pack/png/toggle-on.png",
				"validation-inline": "moonwitness/form-controls-pack/png/validation-inline.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/form-controls-pack/png/checkbox-off.png,moonwitness/form-controls-pack/png/checkbox-on.png,moonwitness/form-controls-pack/png/combobox.png,moonwitness/form-controls-pack/png/date-input.png,moonwitness/form-controls-pack/png/file-input.png,moonwitness/form-controls-pack/png/input-default.png,moonwitness/form-controls-pack/png/input-disabled.png,moonwitness/form-controls-pack/png/input-error.png,moonwitness/form-controls-pack/png/input-focus.png,moonwitness/form-controls-pack/png/input-success.png,moonwitness/form-controls-pack/png/radio-off.png,moonwitness/form-controls-pack/png/radio-on.png,moonwitness/form-controls-pack/png/readonly.png,moonwitness/form-controls-pack/png/search-input.png,moonwitness/form-controls-pack/png/select.png,moonwitness/form-controls-pack/png/slider.png,moonwitness/form-controls-pack/png/textarea.png,moonwitness/form-controls-pack/png/toggle-off.png,moonwitness/form-controls-pack/png/toggle-on.png,moonwitness/form-controls-pack/png/validation-inline.png,moonwitness/form-controls-pack/svg/checkbox-off.svg,moonwitness/form-controls-pack/svg/checkbox-on.svg,moonwitness/form-controls-pack/svg/combobox.svg,moonwitness/form-controls-pack/svg/date-input.svg,moonwitness/form-controls-pack/svg/file-input.svg,moonwitness/form-controls-pack/svg/input-default.svg,moonwitness/form-controls-pack/svg/input-disabled.svg,moonwitness/form-controls-pack/svg/input-error.svg,moonwitness/form-controls-pack/svg/input-focus.svg,moonwitness/form-controls-pack/svg/input-success.svg,moonwitness/form-controls-pack/svg/radio-off.svg,moonwitness/form-controls-pack/svg/radio-on.svg,moonwitness/form-controls-pack/svg/readonly.svg,moonwitness/form-controls-pack/svg/search-input.svg,moonwitness/form-controls-pack/svg/select.svg,moonwitness/form-controls-pack/svg/slider.svg,moonwitness/form-controls-pack/svg/textarea.svg,moonwitness/form-controls-pack/svg/toggle-off.svg,moonwitness/form-controls-pack/svg/toggle-on.svg,moonwitness/form-controls-pack/svg/validation-inline.svg".split(",")
		},
		"theme-accessibility": {
			manifest: "moonwitness/theme-accessibility-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"color-safe-error": "moonwitness/theme-accessibility-pack/svg/color-safe-error.svg",
				"color-safe-success": "moonwitness/theme-accessibility-pack/svg/color-safe-success.svg",
				"color-safe-warning": "moonwitness/theme-accessibility-pack/svg/color-safe-warning.svg",
				"contrast-check": "moonwitness/theme-accessibility-pack/svg/contrast-check.svg",
				"focus-ring": "moonwitness/theme-accessibility-pack/svg/focus-ring.svg",
				"keyboard-mode": "moonwitness/theme-accessibility-pack/svg/keyboard-mode.svg",
				"large-text": "moonwitness/theme-accessibility-pack/svg/large-text.svg",
				"reduced-motion": "moonwitness/theme-accessibility-pack/svg/reduced-motion.svg",
				"screen-reader": "moonwitness/theme-accessibility-pack/svg/screen-reader.svg",
				"theme-dark": "moonwitness/theme-accessibility-pack/svg/theme-dark.svg",
				"theme-high-contrast": "moonwitness/theme-accessibility-pack/svg/theme-high-contrast.svg",
				"theme-light": "moonwitness/theme-accessibility-pack/svg/theme-light.svg"
			},
			png: {
				"color-safe-error": "moonwitness/theme-accessibility-pack/png/color-safe-error.png",
				"color-safe-success": "moonwitness/theme-accessibility-pack/png/color-safe-success.png",
				"color-safe-warning": "moonwitness/theme-accessibility-pack/png/color-safe-warning.png",
				"contrast-check": "moonwitness/theme-accessibility-pack/png/contrast-check.png",
				"focus-ring": "moonwitness/theme-accessibility-pack/png/focus-ring.png",
				"keyboard-mode": "moonwitness/theme-accessibility-pack/png/keyboard-mode.png",
				"large-text": "moonwitness/theme-accessibility-pack/png/large-text.png",
				"reduced-motion": "moonwitness/theme-accessibility-pack/png/reduced-motion.png",
				"screen-reader": "moonwitness/theme-accessibility-pack/png/screen-reader.png",
				"theme-dark": "moonwitness/theme-accessibility-pack/png/theme-dark.png",
				"theme-high-contrast": "moonwitness/theme-accessibility-pack/png/theme-high-contrast.png",
				"theme-light": "moonwitness/theme-accessibility-pack/png/theme-light.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/theme-accessibility-pack/png/color-safe-error.png",
				"moonwitness/theme-accessibility-pack/png/color-safe-success.png",
				"moonwitness/theme-accessibility-pack/png/color-safe-warning.png",
				"moonwitness/theme-accessibility-pack/png/contrast-check.png",
				"moonwitness/theme-accessibility-pack/png/focus-ring.png",
				"moonwitness/theme-accessibility-pack/png/keyboard-mode.png",
				"moonwitness/theme-accessibility-pack/png/large-text.png",
				"moonwitness/theme-accessibility-pack/png/reduced-motion.png",
				"moonwitness/theme-accessibility-pack/png/screen-reader.png",
				"moonwitness/theme-accessibility-pack/png/theme-dark.png",
				"moonwitness/theme-accessibility-pack/png/theme-high-contrast.png",
				"moonwitness/theme-accessibility-pack/png/theme-light.png",
				"moonwitness/theme-accessibility-pack/svg/color-safe-error.svg",
				"moonwitness/theme-accessibility-pack/svg/color-safe-success.svg",
				"moonwitness/theme-accessibility-pack/svg/color-safe-warning.svg",
				"moonwitness/theme-accessibility-pack/svg/contrast-check.svg",
				"moonwitness/theme-accessibility-pack/svg/focus-ring.svg",
				"moonwitness/theme-accessibility-pack/svg/keyboard-mode.svg",
				"moonwitness/theme-accessibility-pack/svg/large-text.svg",
				"moonwitness/theme-accessibility-pack/svg/reduced-motion.svg",
				"moonwitness/theme-accessibility-pack/svg/screen-reader.svg",
				"moonwitness/theme-accessibility-pack/svg/theme-dark.svg",
				"moonwitness/theme-accessibility-pack/svg/theme-high-contrast.svg",
				"moonwitness/theme-accessibility-pack/svg/theme-light.svg"
			]
		},
		"privacy-redaction": {
			manifest: "moonwitness/privacy-redaction-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"blur-face": "moonwitness/privacy-redaction-pack/svg/blur-face.svg",
				confidential: "moonwitness/privacy-redaction-pack/svg/confidential.svg",
				"mask-identity": "moonwitness/privacy-redaction-pack/svg/mask-identity.svg",
				"pii-address": "moonwitness/privacy-redaction-pack/svg/pii-address.svg",
				"pii-email": "moonwitness/privacy-redaction-pack/svg/pii-email.svg",
				"pii-phone": "moonwitness/privacy-redaction-pack/svg/pii-phone.svg",
				"privacy-scope": "moonwitness/privacy-redaction-pack/svg/privacy-scope.svg",
				"privacy-warning": "moonwitness/privacy-redaction-pack/svg/privacy-warning.svg",
				"protected-witness": "moonwitness/privacy-redaction-pack/svg/protected-witness.svg",
				"public-safe": "moonwitness/privacy-redaction-pack/svg/public-safe.svg",
				"redact-image": "moonwitness/privacy-redaction-pack/svg/redact-image.svg",
				"redact-text": "moonwitness/privacy-redaction-pack/svg/redact-text.svg",
				"redaction-review": "moonwitness/privacy-redaction-pack/svg/redaction-review.svg",
				restricted: "moonwitness/privacy-redaction-pack/svg/restricted.svg",
				"reveal-authorized": "moonwitness/privacy-redaction-pack/svg/reveal-authorized.svg",
				"sealed-evidence": "moonwitness/privacy-redaction-pack/svg/sealed-evidence.svg"
			},
			png: {
				"blur-face": "moonwitness/privacy-redaction-pack/png/blur-face.png",
				confidential: "moonwitness/privacy-redaction-pack/png/confidential.png",
				"mask-identity": "moonwitness/privacy-redaction-pack/png/mask-identity.png",
				"pii-address": "moonwitness/privacy-redaction-pack/png/pii-address.png",
				"pii-email": "moonwitness/privacy-redaction-pack/png/pii-email.png",
				"pii-phone": "moonwitness/privacy-redaction-pack/png/pii-phone.png",
				"privacy-scope": "moonwitness/privacy-redaction-pack/png/privacy-scope.png",
				"privacy-warning": "moonwitness/privacy-redaction-pack/png/privacy-warning.png",
				"protected-witness": "moonwitness/privacy-redaction-pack/png/protected-witness.png",
				"public-safe": "moonwitness/privacy-redaction-pack/png/public-safe.png",
				"redact-image": "moonwitness/privacy-redaction-pack/png/redact-image.png",
				"redact-text": "moonwitness/privacy-redaction-pack/png/redact-text.png",
				"redaction-review": "moonwitness/privacy-redaction-pack/png/redaction-review.png",
				restricted: "moonwitness/privacy-redaction-pack/png/restricted.png",
				"reveal-authorized": "moonwitness/privacy-redaction-pack/png/reveal-authorized.png",
				"sealed-evidence": "moonwitness/privacy-redaction-pack/png/sealed-evidence.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/privacy-redaction-pack/png/blur-face.png,moonwitness/privacy-redaction-pack/png/confidential.png,moonwitness/privacy-redaction-pack/png/mask-identity.png,moonwitness/privacy-redaction-pack/png/pii-address.png,moonwitness/privacy-redaction-pack/png/pii-email.png,moonwitness/privacy-redaction-pack/png/pii-phone.png,moonwitness/privacy-redaction-pack/png/privacy-scope.png,moonwitness/privacy-redaction-pack/png/privacy-warning.png,moonwitness/privacy-redaction-pack/png/protected-witness.png,moonwitness/privacy-redaction-pack/png/public-safe.png,moonwitness/privacy-redaction-pack/png/redact-image.png,moonwitness/privacy-redaction-pack/png/redact-text.png,moonwitness/privacy-redaction-pack/png/redaction-review.png,moonwitness/privacy-redaction-pack/png/restricted.png,moonwitness/privacy-redaction-pack/png/reveal-authorized.png,moonwitness/privacy-redaction-pack/png/sealed-evidence.png,moonwitness/privacy-redaction-pack/svg/blur-face.svg,moonwitness/privacy-redaction-pack/svg/confidential.svg,moonwitness/privacy-redaction-pack/svg/mask-identity.svg,moonwitness/privacy-redaction-pack/svg/pii-address.svg,moonwitness/privacy-redaction-pack/svg/pii-email.svg,moonwitness/privacy-redaction-pack/svg/pii-phone.svg,moonwitness/privacy-redaction-pack/svg/privacy-scope.svg,moonwitness/privacy-redaction-pack/svg/privacy-warning.svg,moonwitness/privacy-redaction-pack/svg/protected-witness.svg,moonwitness/privacy-redaction-pack/svg/public-safe.svg,moonwitness/privacy-redaction-pack/svg/redact-image.svg,moonwitness/privacy-redaction-pack/svg/redact-text.svg,moonwitness/privacy-redaction-pack/svg/redaction-review.svg,moonwitness/privacy-redaction-pack/svg/restricted.svg,moonwitness/privacy-redaction-pack/svg/reveal-authorized.svg,moonwitness/privacy-redaction-pack/svg/sealed-evidence.svg".split(",")
		},
		"evidence-integrity": {
			manifest: "moonwitness/integrity-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"checksum-fail": "moonwitness/integrity-pack/svg/checksum-fail.svg",
				"checksum-ok": "moonwitness/integrity-pack/svg/checksum-ok.svg",
				"custody-entry": "moonwitness/integrity-pack/svg/custody-entry.svg",
				"custody-transfer": "moonwitness/integrity-pack/svg/custody-transfer.svg",
				"digital-signature": "moonwitness/integrity-pack/svg/digital-signature.svg",
				"evidence-seal": "moonwitness/integrity-pack/svg/evidence-seal.svg",
				"immutable-record": "moonwitness/integrity-pack/svg/immutable-record.svg",
				"integrity-score": "moonwitness/integrity-pack/svg/integrity-score.svg",
				"provenance-broken": "moonwitness/integrity-pack/svg/provenance-broken.svg",
				"provenance-verified": "moonwitness/integrity-pack/svg/provenance-verified.svg",
				sha256: "moonwitness/integrity-pack/svg/sha256.svg",
				"source-authentic": "moonwitness/integrity-pack/svg/source-authentic.svg",
				"source-unverified": "moonwitness/integrity-pack/svg/source-unverified.svg",
				"tamper-alert": "moonwitness/integrity-pack/svg/tamper-alert.svg",
				"timestamp-seal": "moonwitness/integrity-pack/svg/timestamp-seal.svg",
				"version-history": "moonwitness/integrity-pack/svg/version-history.svg"
			},
			png: {
				"checksum-fail": "moonwitness/integrity-pack/png/checksum-fail.png",
				"checksum-ok": "moonwitness/integrity-pack/png/checksum-ok.png",
				"custody-entry": "moonwitness/integrity-pack/png/custody-entry.png",
				"custody-transfer": "moonwitness/integrity-pack/png/custody-transfer.png",
				"digital-signature": "moonwitness/integrity-pack/png/digital-signature.png",
				"evidence-seal": "moonwitness/integrity-pack/png/evidence-seal.png",
				"immutable-record": "moonwitness/integrity-pack/png/immutable-record.png",
				"integrity-score": "moonwitness/integrity-pack/png/integrity-score.png",
				"provenance-broken": "moonwitness/integrity-pack/png/provenance-broken.png",
				"provenance-verified": "moonwitness/integrity-pack/png/provenance-verified.png",
				sha256: "moonwitness/integrity-pack/png/sha256.png",
				"source-authentic": "moonwitness/integrity-pack/png/source-authentic.png",
				"source-unverified": "moonwitness/integrity-pack/png/source-unverified.png",
				"tamper-alert": "moonwitness/integrity-pack/png/tamper-alert.png",
				"timestamp-seal": "moonwitness/integrity-pack/png/timestamp-seal.png",
				"version-history": "moonwitness/integrity-pack/png/version-history.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/integrity-pack/png/checksum-fail.png,moonwitness/integrity-pack/png/checksum-ok.png,moonwitness/integrity-pack/png/custody-entry.png,moonwitness/integrity-pack/png/custody-transfer.png,moonwitness/integrity-pack/png/digital-signature.png,moonwitness/integrity-pack/png/evidence-seal.png,moonwitness/integrity-pack/png/immutable-record.png,moonwitness/integrity-pack/png/integrity-score.png,moonwitness/integrity-pack/png/provenance-broken.png,moonwitness/integrity-pack/png/provenance-verified.png,moonwitness/integrity-pack/png/sha256.png,moonwitness/integrity-pack/png/source-authentic.png,moonwitness/integrity-pack/png/source-unverified.png,moonwitness/integrity-pack/png/tamper-alert.png,moonwitness/integrity-pack/png/timestamp-seal.png,moonwitness/integrity-pack/png/version-history.png,moonwitness/integrity-pack/svg/checksum-fail.svg,moonwitness/integrity-pack/svg/checksum-ok.svg,moonwitness/integrity-pack/svg/custody-entry.svg,moonwitness/integrity-pack/svg/custody-transfer.svg,moonwitness/integrity-pack/svg/digital-signature.svg,moonwitness/integrity-pack/svg/evidence-seal.svg,moonwitness/integrity-pack/svg/immutable-record.svg,moonwitness/integrity-pack/svg/integrity-score.svg,moonwitness/integrity-pack/svg/provenance-broken.svg,moonwitness/integrity-pack/svg/provenance-verified.svg,moonwitness/integrity-pack/svg/sha256.svg,moonwitness/integrity-pack/svg/source-authentic.svg,moonwitness/integrity-pack/svg/source-unverified.svg,moonwitness/integrity-pack/svg/tamper-alert.svg,moonwitness/integrity-pack/svg/timestamp-seal.svg,moonwitness/integrity-pack/svg/version-history.svg".split(",")
		},
		"export-seal": {
			manifest: "moonwitness/export-seal-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"bundle-export": "moonwitness/export-seal-pack/svg/bundle-export.svg",
				"json-export": "moonwitness/export-seal-pack/svg/json-export.svg",
				"legal-stamp": "moonwitness/export-seal-pack/svg/legal-stamp.svg",
				"pdf-export": "moonwitness/export-seal-pack/svg/pdf-export.svg",
				"print-crop-marks": "moonwitness/export-seal-pack/svg/print-crop-marks.svg",
				"qr-citation": "moonwitness/export-seal-pack/svg/qr-citation.svg",
				"reviewed-stamp": "moonwitness/export-seal-pack/svg/reviewed-stamp.svg",
				"share-card": "moonwitness/export-seal-pack/svg/share-card.svg",
				"signed-export": "moonwitness/export-seal-pack/svg/signed-export.svg",
				"verified-stamp": "moonwitness/export-seal-pack/svg/verified-stamp.svg",
				"watermark-confidential": "moonwitness/export-seal-pack/svg/watermark-confidential.svg",
				"watermark-public": "moonwitness/export-seal-pack/svg/watermark-public.svg"
			},
			png: {
				"bundle-export": "moonwitness/export-seal-pack/png/bundle-export.png",
				"json-export": "moonwitness/export-seal-pack/png/json-export.png",
				"legal-stamp": "moonwitness/export-seal-pack/png/legal-stamp.png",
				"pdf-export": "moonwitness/export-seal-pack/png/pdf-export.png",
				"print-crop-marks": "moonwitness/export-seal-pack/png/print-crop-marks.png",
				"qr-citation": "moonwitness/export-seal-pack/png/qr-citation.png",
				"reviewed-stamp": "moonwitness/export-seal-pack/png/reviewed-stamp.png",
				"share-card": "moonwitness/export-seal-pack/png/share-card.png",
				"signed-export": "moonwitness/export-seal-pack/png/signed-export.png",
				"verified-stamp": "moonwitness/export-seal-pack/png/verified-stamp.png",
				"watermark-confidential": "moonwitness/export-seal-pack/png/watermark-confidential.png",
				"watermark-public": "moonwitness/export-seal-pack/png/watermark-public.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/export-seal-pack/png/bundle-export.png",
				"moonwitness/export-seal-pack/png/json-export.png",
				"moonwitness/export-seal-pack/png/legal-stamp.png",
				"moonwitness/export-seal-pack/png/pdf-export.png",
				"moonwitness/export-seal-pack/png/print-crop-marks.png",
				"moonwitness/export-seal-pack/png/qr-citation.png",
				"moonwitness/export-seal-pack/png/reviewed-stamp.png",
				"moonwitness/export-seal-pack/png/share-card.png",
				"moonwitness/export-seal-pack/png/signed-export.png",
				"moonwitness/export-seal-pack/png/verified-stamp.png",
				"moonwitness/export-seal-pack/png/watermark-confidential.png",
				"moonwitness/export-seal-pack/png/watermark-public.png",
				"moonwitness/export-seal-pack/svg/bundle-export.svg",
				"moonwitness/export-seal-pack/svg/json-export.svg",
				"moonwitness/export-seal-pack/svg/legal-stamp.svg",
				"moonwitness/export-seal-pack/svg/pdf-export.svg",
				"moonwitness/export-seal-pack/svg/print-crop-marks.svg",
				"moonwitness/export-seal-pack/svg/qr-citation.svg",
				"moonwitness/export-seal-pack/svg/reviewed-stamp.svg",
				"moonwitness/export-seal-pack/svg/share-card.svg",
				"moonwitness/export-seal-pack/svg/signed-export.svg",
				"moonwitness/export-seal-pack/svg/verified-stamp.svg",
				"moonwitness/export-seal-pack/svg/watermark-confidential.svg",
				"moonwitness/export-seal-pack/svg/watermark-public.svg"
			]
		},
		"rocksoul-character": {
			manifest: "moonwitness/rocksoul-character-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"ai-companion": "moonwitness/rocksoul-character-pack/svg/ai-companion.svg",
				community: "moonwitness/rocksoul-character-pack/svg/community.svg",
				connecting: "moonwitness/rocksoul-character-pack/svg/connecting.svg",
				empty: "moonwitness/rocksoul-character-pack/svg/empty.svg",
				investigating: "moonwitness/rocksoul-character-pack/svg/investigating.svg",
				"legal-boundary": "moonwitness/rocksoul-character-pack/svg/legal-boundary.svg",
				observing: "moonwitness/rocksoul-character-pack/svg/observing.svg",
				offline: "moonwitness/rocksoul-character-pack/svg/offline.svg",
				reading: "moonwitness/rocksoul-character-pack/svg/reading.svg",
				success: "moonwitness/rocksoul-character-pack/svg/success.svg",
				thinking: "moonwitness/rocksoul-character-pack/svg/thinking.svg",
				warning: "moonwitness/rocksoul-character-pack/svg/warning.svg"
			},
			png: {
				"ai-companion": {
					128: "moonwitness/rocksoul-character-pack/png/128/ai-companion.png",
					256: "moonwitness/rocksoul-character-pack/png/256/ai-companion.png",
					512: "moonwitness/rocksoul-character-pack/png/512/ai-companion.png"
				},
				community: {
					128: "moonwitness/rocksoul-character-pack/png/128/community.png",
					256: "moonwitness/rocksoul-character-pack/png/256/community.png",
					512: "moonwitness/rocksoul-character-pack/png/512/community.png"
				},
				connecting: {
					128: "moonwitness/rocksoul-character-pack/png/128/connecting.png",
					256: "moonwitness/rocksoul-character-pack/png/256/connecting.png",
					512: "moonwitness/rocksoul-character-pack/png/512/connecting.png"
				},
				empty: {
					128: "moonwitness/rocksoul-character-pack/png/128/empty.png",
					256: "moonwitness/rocksoul-character-pack/png/256/empty.png",
					512: "moonwitness/rocksoul-character-pack/png/512/empty.png"
				},
				investigating: {
					128: "moonwitness/rocksoul-character-pack/png/128/investigating.png",
					256: "moonwitness/rocksoul-character-pack/png/256/investigating.png",
					512: "moonwitness/rocksoul-character-pack/png/512/investigating.png"
				},
				"legal-boundary": {
					128: "moonwitness/rocksoul-character-pack/png/128/legal-boundary.png",
					256: "moonwitness/rocksoul-character-pack/png/256/legal-boundary.png",
					512: "moonwitness/rocksoul-character-pack/png/512/legal-boundary.png"
				},
				observing: {
					128: "moonwitness/rocksoul-character-pack/png/128/observing.png",
					256: "moonwitness/rocksoul-character-pack/png/256/observing.png",
					512: "moonwitness/rocksoul-character-pack/png/512/observing.png"
				},
				offline: {
					128: "moonwitness/rocksoul-character-pack/png/128/offline.png",
					256: "moonwitness/rocksoul-character-pack/png/256/offline.png",
					512: "moonwitness/rocksoul-character-pack/png/512/offline.png"
				},
				reading: {
					128: "moonwitness/rocksoul-character-pack/png/128/reading.png",
					256: "moonwitness/rocksoul-character-pack/png/256/reading.png",
					512: "moonwitness/rocksoul-character-pack/png/512/reading.png"
				},
				success: {
					128: "moonwitness/rocksoul-character-pack/png/128/success.png",
					256: "moonwitness/rocksoul-character-pack/png/256/success.png",
					512: "moonwitness/rocksoul-character-pack/png/512/success.png"
				},
				thinking: {
					128: "moonwitness/rocksoul-character-pack/png/128/thinking.png",
					256: "moonwitness/rocksoul-character-pack/png/256/thinking.png",
					512: "moonwitness/rocksoul-character-pack/png/512/thinking.png"
				},
				warning: {
					128: "moonwitness/rocksoul-character-pack/png/128/warning.png",
					256: "moonwitness/rocksoul-character-pack/png/256/warning.png",
					512: "moonwitness/rocksoul-character-pack/png/512/warning.png"
				}
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/rocksoul-character-pack/png/128/ai-companion.png,moonwitness/rocksoul-character-pack/png/128/community.png,moonwitness/rocksoul-character-pack/png/128/connecting.png,moonwitness/rocksoul-character-pack/png/128/empty.png,moonwitness/rocksoul-character-pack/png/128/investigating.png,moonwitness/rocksoul-character-pack/png/128/legal-boundary.png,moonwitness/rocksoul-character-pack/png/128/observing.png,moonwitness/rocksoul-character-pack/png/128/offline.png,moonwitness/rocksoul-character-pack/png/128/reading.png,moonwitness/rocksoul-character-pack/png/128/success.png,moonwitness/rocksoul-character-pack/png/128/thinking.png,moonwitness/rocksoul-character-pack/png/128/warning.png,moonwitness/rocksoul-character-pack/png/256/ai-companion.png,moonwitness/rocksoul-character-pack/png/256/community.png,moonwitness/rocksoul-character-pack/png/256/connecting.png,moonwitness/rocksoul-character-pack/png/256/empty.png,moonwitness/rocksoul-character-pack/png/256/investigating.png,moonwitness/rocksoul-character-pack/png/256/legal-boundary.png,moonwitness/rocksoul-character-pack/png/256/observing.png,moonwitness/rocksoul-character-pack/png/256/offline.png,moonwitness/rocksoul-character-pack/png/256/reading.png,moonwitness/rocksoul-character-pack/png/256/success.png,moonwitness/rocksoul-character-pack/png/256/thinking.png,moonwitness/rocksoul-character-pack/png/256/warning.png,moonwitness/rocksoul-character-pack/png/512/ai-companion.png,moonwitness/rocksoul-character-pack/png/512/community.png,moonwitness/rocksoul-character-pack/png/512/connecting.png,moonwitness/rocksoul-character-pack/png/512/empty.png,moonwitness/rocksoul-character-pack/png/512/investigating.png,moonwitness/rocksoul-character-pack/png/512/legal-boundary.png,moonwitness/rocksoul-character-pack/png/512/observing.png,moonwitness/rocksoul-character-pack/png/512/offline.png,moonwitness/rocksoul-character-pack/png/512/reading.png,moonwitness/rocksoul-character-pack/png/512/success.png,moonwitness/rocksoul-character-pack/png/512/thinking.png,moonwitness/rocksoul-character-pack/png/512/warning.png,moonwitness/rocksoul-character-pack/svg/ai-companion.svg,moonwitness/rocksoul-character-pack/svg/community.svg,moonwitness/rocksoul-character-pack/svg/connecting.svg,moonwitness/rocksoul-character-pack/svg/empty.svg,moonwitness/rocksoul-character-pack/svg/investigating.svg,moonwitness/rocksoul-character-pack/svg/legal-boundary.svg,moonwitness/rocksoul-character-pack/svg/observing.svg,moonwitness/rocksoul-character-pack/svg/offline.svg,moonwitness/rocksoul-character-pack/svg/reading.svg,moonwitness/rocksoul-character-pack/svg/success.svg,moonwitness/rocksoul-character-pack/svg/thinking.svg,moonwitness/rocksoul-character-pack/svg/warning.svg".split(",")
		},
		"command-keyboard": {
			manifest: "moonwitness/command-keyboard-pack/manifest.json",
			count: 14,
			canonicalFormat: "svg",
			svg: {
				"key-command": "moonwitness/command-keyboard-pack/svg/key-command.svg",
				"key-enter": "moonwitness/command-keyboard-pack/svg/key-enter.svg",
				"key-escape": "moonwitness/command-keyboard-pack/svg/key-escape.svg",
				"key-option": "moonwitness/command-keyboard-pack/svg/key-option.svg",
				"key-shift": "moonwitness/command-keyboard-pack/svg/key-shift.svg",
				"key-tab": "moonwitness/command-keyboard-pack/svg/key-tab.svg",
				"keyboard-navigation": "moonwitness/command-keyboard-pack/svg/keyboard-navigation.svg",
				"sequence-node-link": "moonwitness/command-keyboard-pack/svg/sequence-node-link.svg",
				"shortcut-command": "moonwitness/command-keyboard-pack/svg/shortcut-command.svg",
				"shortcut-focus": "moonwitness/command-keyboard-pack/svg/shortcut-focus.svg",
				"shortcut-help": "moonwitness/command-keyboard-pack/svg/shortcut-help.svg",
				"shortcut-new-case": "moonwitness/command-keyboard-pack/svg/shortcut-new-case.svg",
				"shortcut-save": "moonwitness/command-keyboard-pack/svg/shortcut-save.svg",
				"shortcut-search": "moonwitness/command-keyboard-pack/svg/shortcut-search.svg"
			},
			png: {
				"key-command": "moonwitness/command-keyboard-pack/png/key-command.png",
				"key-enter": "moonwitness/command-keyboard-pack/png/key-enter.png",
				"key-escape": "moonwitness/command-keyboard-pack/png/key-escape.png",
				"key-option": "moonwitness/command-keyboard-pack/png/key-option.png",
				"key-shift": "moonwitness/command-keyboard-pack/png/key-shift.png",
				"key-tab": "moonwitness/command-keyboard-pack/png/key-tab.png",
				"keyboard-navigation": "moonwitness/command-keyboard-pack/png/keyboard-navigation.png",
				"sequence-node-link": "moonwitness/command-keyboard-pack/png/sequence-node-link.png",
				"shortcut-command": "moonwitness/command-keyboard-pack/png/shortcut-command.png",
				"shortcut-focus": "moonwitness/command-keyboard-pack/png/shortcut-focus.png",
				"shortcut-help": "moonwitness/command-keyboard-pack/png/shortcut-help.png",
				"shortcut-new-case": "moonwitness/command-keyboard-pack/png/shortcut-new-case.png",
				"shortcut-save": "moonwitness/command-keyboard-pack/png/shortcut-save.png",
				"shortcut-search": "moonwitness/command-keyboard-pack/png/shortcut-search.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/command-keyboard-pack/png/key-command.png,moonwitness/command-keyboard-pack/png/key-enter.png,moonwitness/command-keyboard-pack/png/key-escape.png,moonwitness/command-keyboard-pack/png/key-option.png,moonwitness/command-keyboard-pack/png/key-shift.png,moonwitness/command-keyboard-pack/png/key-tab.png,moonwitness/command-keyboard-pack/png/keyboard-navigation.png,moonwitness/command-keyboard-pack/png/sequence-node-link.png,moonwitness/command-keyboard-pack/png/shortcut-command.png,moonwitness/command-keyboard-pack/png/shortcut-focus.png,moonwitness/command-keyboard-pack/png/shortcut-help.png,moonwitness/command-keyboard-pack/png/shortcut-new-case.png,moonwitness/command-keyboard-pack/png/shortcut-save.png,moonwitness/command-keyboard-pack/png/shortcut-search.png,moonwitness/command-keyboard-pack/svg/key-command.svg,moonwitness/command-keyboard-pack/svg/key-enter.svg,moonwitness/command-keyboard-pack/svg/key-escape.svg,moonwitness/command-keyboard-pack/svg/key-option.svg,moonwitness/command-keyboard-pack/svg/key-shift.svg,moonwitness/command-keyboard-pack/svg/key-tab.svg,moonwitness/command-keyboard-pack/svg/keyboard-navigation.svg,moonwitness/command-keyboard-pack/svg/sequence-node-link.svg,moonwitness/command-keyboard-pack/svg/shortcut-command.svg,moonwitness/command-keyboard-pack/svg/shortcut-focus.svg,moonwitness/command-keyboard-pack/svg/shortcut-help.svg,moonwitness/command-keyboard-pack/svg/shortcut-new-case.svg,moonwitness/command-keyboard-pack/svg/shortcut-save.svg,moonwitness/command-keyboard-pack/svg/shortcut-search.svg".split(",")
		},
		"texture-material": {
			manifest: "moonwitness/texture-material-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"archive-paper": "moonwitness/texture-material-pack/svg/archive-paper.svg",
				"carbon-grid": "moonwitness/texture-material-pack/svg/carbon-grid.svg",
				"data-matrix": "moonwitness/texture-material-pack/svg/data-matrix.svg",
				"glass-panel": "moonwitness/texture-material-pack/svg/glass-panel.svg",
				"legal-paper": "moonwitness/texture-material-pack/svg/legal-paper.svg",
				"lunar-grain": "moonwitness/texture-material-pack/svg/lunar-grain.svg",
				"map-grid": "moonwitness/texture-material-pack/svg/map-grid.svg",
				microfilm: "moonwitness/texture-material-pack/svg/microfilm.svg",
				"red-thread": "moonwitness/texture-material-pack/svg/red-thread.svg",
				"scanner-lines": "moonwitness/texture-material-pack/svg/scanner-lines.svg",
				"signal-noise": "moonwitness/texture-material-pack/svg/signal-noise.svg",
				"star-field": "moonwitness/texture-material-pack/svg/star-field.svg"
			},
			png: {
				"archive-paper": "moonwitness/texture-material-pack/png/archive-paper.png",
				"carbon-grid": "moonwitness/texture-material-pack/png/carbon-grid.png",
				"data-matrix": "moonwitness/texture-material-pack/png/data-matrix.png",
				"glass-panel": "moonwitness/texture-material-pack/png/glass-panel.png",
				"legal-paper": "moonwitness/texture-material-pack/png/legal-paper.png",
				"lunar-grain": "moonwitness/texture-material-pack/png/lunar-grain.png",
				"map-grid": "moonwitness/texture-material-pack/png/map-grid.png",
				microfilm: "moonwitness/texture-material-pack/png/microfilm.png",
				"red-thread": "moonwitness/texture-material-pack/png/red-thread.png",
				"scanner-lines": "moonwitness/texture-material-pack/png/scanner-lines.png",
				"signal-noise": "moonwitness/texture-material-pack/png/signal-noise.png",
				"star-field": "moonwitness/texture-material-pack/png/star-field.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/texture-material-pack/png/archive-paper.png",
				"moonwitness/texture-material-pack/png/carbon-grid.png",
				"moonwitness/texture-material-pack/png/data-matrix.png",
				"moonwitness/texture-material-pack/png/glass-panel.png",
				"moonwitness/texture-material-pack/png/legal-paper.png",
				"moonwitness/texture-material-pack/png/lunar-grain.png",
				"moonwitness/texture-material-pack/png/map-grid.png",
				"moonwitness/texture-material-pack/png/microfilm.png",
				"moonwitness/texture-material-pack/png/red-thread.png",
				"moonwitness/texture-material-pack/png/scanner-lines.png",
				"moonwitness/texture-material-pack/png/signal-noise.png",
				"moonwitness/texture-material-pack/png/star-field.png",
				"moonwitness/texture-material-pack/svg/archive-paper.svg",
				"moonwitness/texture-material-pack/svg/carbon-grid.svg",
				"moonwitness/texture-material-pack/svg/data-matrix.svg",
				"moonwitness/texture-material-pack/svg/glass-panel.svg",
				"moonwitness/texture-material-pack/svg/legal-paper.svg",
				"moonwitness/texture-material-pack/svg/lunar-grain.svg",
				"moonwitness/texture-material-pack/svg/map-grid.svg",
				"moonwitness/texture-material-pack/svg/microfilm.svg",
				"moonwitness/texture-material-pack/svg/red-thread.svg",
				"moonwitness/texture-material-pack/svg/scanner-lines.svg",
				"moonwitness/texture-material-pack/svg/signal-noise.svg",
				"moonwitness/texture-material-pack/svg/star-field.svg"
			]
		},
		"architecture-diagram": {
			manifest: "moonwitness/architecture-diagram-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"api-node": "moonwitness/architecture-diagram-pack/svg/api-node.svg",
				"arrow-dashed": "moonwitness/architecture-diagram-pack/svg/arrow-dashed.svg",
				"arrow-error": "moonwitness/architecture-diagram-pack/svg/arrow-error.svg",
				"arrow-event": "moonwitness/architecture-diagram-pack/svg/arrow-event.svg",
				"arrow-solid": "moonwitness/architecture-diagram-pack/svg/arrow-solid.svg",
				"boundary-box": "moonwitness/architecture-diagram-pack/svg/boundary-box.svg",
				"database-node": "moonwitness/architecture-diagram-pack/svg/database-node.svg",
				"decision-node": "moonwitness/architecture-diagram-pack/svg/decision-node.svg",
				"external-node": "moonwitness/architecture-diagram-pack/svg/external-node.svg",
				"queue-node": "moonwitness/architecture-diagram-pack/svg/queue-node.svg",
				"repository-node": "moonwitness/architecture-diagram-pack/svg/repository-node.svg",
				"sequence-lifeline": "moonwitness/architecture-diagram-pack/svg/sequence-lifeline.svg",
				"service-node": "moonwitness/architecture-diagram-pack/svg/service-node.svg",
				"system-cluster": "moonwitness/architecture-diagram-pack/svg/system-cluster.svg",
				"trust-zone": "moonwitness/architecture-diagram-pack/svg/trust-zone.svg",
				"user-node": "moonwitness/architecture-diagram-pack/svg/user-node.svg"
			},
			png: {
				"api-node": "moonwitness/architecture-diagram-pack/png/api-node.png",
				"arrow-dashed": "moonwitness/architecture-diagram-pack/png/arrow-dashed.png",
				"arrow-error": "moonwitness/architecture-diagram-pack/png/arrow-error.png",
				"arrow-event": "moonwitness/architecture-diagram-pack/png/arrow-event.png",
				"arrow-solid": "moonwitness/architecture-diagram-pack/png/arrow-solid.png",
				"boundary-box": "moonwitness/architecture-diagram-pack/png/boundary-box.png",
				"database-node": "moonwitness/architecture-diagram-pack/png/database-node.png",
				"decision-node": "moonwitness/architecture-diagram-pack/png/decision-node.png",
				"external-node": "moonwitness/architecture-diagram-pack/png/external-node.png",
				"queue-node": "moonwitness/architecture-diagram-pack/png/queue-node.png",
				"repository-node": "moonwitness/architecture-diagram-pack/png/repository-node.png",
				"sequence-lifeline": "moonwitness/architecture-diagram-pack/png/sequence-lifeline.png",
				"service-node": "moonwitness/architecture-diagram-pack/png/service-node.png",
				"system-cluster": "moonwitness/architecture-diagram-pack/png/system-cluster.png",
				"trust-zone": "moonwitness/architecture-diagram-pack/png/trust-zone.png",
				"user-node": "moonwitness/architecture-diagram-pack/png/user-node.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/architecture-diagram-pack/png/api-node.png,moonwitness/architecture-diagram-pack/png/arrow-dashed.png,moonwitness/architecture-diagram-pack/png/arrow-error.png,moonwitness/architecture-diagram-pack/png/arrow-event.png,moonwitness/architecture-diagram-pack/png/arrow-solid.png,moonwitness/architecture-diagram-pack/png/boundary-box.png,moonwitness/architecture-diagram-pack/png/database-node.png,moonwitness/architecture-diagram-pack/png/decision-node.png,moonwitness/architecture-diagram-pack/png/external-node.png,moonwitness/architecture-diagram-pack/png/queue-node.png,moonwitness/architecture-diagram-pack/png/repository-node.png,moonwitness/architecture-diagram-pack/png/sequence-lifeline.png,moonwitness/architecture-diagram-pack/png/service-node.png,moonwitness/architecture-diagram-pack/png/system-cluster.png,moonwitness/architecture-diagram-pack/png/trust-zone.png,moonwitness/architecture-diagram-pack/png/user-node.png,moonwitness/architecture-diagram-pack/svg/api-node.svg,moonwitness/architecture-diagram-pack/svg/arrow-dashed.svg,moonwitness/architecture-diagram-pack/svg/arrow-error.svg,moonwitness/architecture-diagram-pack/svg/arrow-event.svg,moonwitness/architecture-diagram-pack/svg/arrow-solid.svg,moonwitness/architecture-diagram-pack/svg/boundary-box.svg,moonwitness/architecture-diagram-pack/svg/database-node.svg,moonwitness/architecture-diagram-pack/svg/decision-node.svg,moonwitness/architecture-diagram-pack/svg/external-node.svg,moonwitness/architecture-diagram-pack/svg/queue-node.svg,moonwitness/architecture-diagram-pack/svg/repository-node.svg,moonwitness/architecture-diagram-pack/svg/sequence-lifeline.svg,moonwitness/architecture-diagram-pack/svg/service-node.svg,moonwitness/architecture-diagram-pack/svg/system-cluster.svg,moonwitness/architecture-diagram-pack/svg/trust-zone.svg,moonwitness/architecture-diagram-pack/svg/user-node.svg".split(",")
		},
		"device-mockup": {
			manifest: "moonwitness/device-mockup-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"browser-dark": "moonwitness/device-mockup-pack/svg/browser-dark.svg",
				"browser-desktop": "moonwitness/device-mockup-pack/svg/browser-desktop.svg",
				"desktop-monitor": "moonwitness/device-mockup-pack/svg/desktop-monitor.svg",
				laptop: "moonwitness/device-mockup-pack/svg/laptop.svg",
				"multi-device": "moonwitness/device-mockup-pack/svg/multi-device.svg",
				"phone-landscape": "moonwitness/device-mockup-pack/svg/phone-landscape.svg",
				"phone-portrait": "moonwitness/device-mockup-pack/svg/phone-portrait.svg",
				tablet: "moonwitness/device-mockup-pack/svg/tablet.svg"
			},
			png: {
				"browser-dark": "moonwitness/device-mockup-pack/png/browser-dark.png",
				"browser-desktop": "moonwitness/device-mockup-pack/png/browser-desktop.png",
				"desktop-monitor": "moonwitness/device-mockup-pack/png/desktop-monitor.png",
				laptop: "moonwitness/device-mockup-pack/png/laptop.png",
				"multi-device": "moonwitness/device-mockup-pack/png/multi-device.png",
				"phone-landscape": "moonwitness/device-mockup-pack/png/phone-landscape.png",
				"phone-portrait": "moonwitness/device-mockup-pack/png/phone-portrait.png",
				tablet: "moonwitness/device-mockup-pack/png/tablet.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/device-mockup-pack/png/browser-dark.png",
				"moonwitness/device-mockup-pack/png/browser-desktop.png",
				"moonwitness/device-mockup-pack/png/desktop-monitor.png",
				"moonwitness/device-mockup-pack/png/laptop.png",
				"moonwitness/device-mockup-pack/png/multi-device.png",
				"moonwitness/device-mockup-pack/png/phone-landscape.png",
				"moonwitness/device-mockup-pack/png/phone-portrait.png",
				"moonwitness/device-mockup-pack/png/tablet.png",
				"moonwitness/device-mockup-pack/svg/browser-dark.svg",
				"moonwitness/device-mockup-pack/svg/browser-desktop.svg",
				"moonwitness/device-mockup-pack/svg/desktop-monitor.svg",
				"moonwitness/device-mockup-pack/svg/laptop.svg",
				"moonwitness/device-mockup-pack/svg/multi-device.svg",
				"moonwitness/device-mockup-pack/svg/phone-landscape.svg",
				"moonwitness/device-mockup-pack/svg/phone-portrait.svg",
				"moonwitness/device-mockup-pack/svg/tablet.svg"
			]
		},
		"jurisdiction-locale": {
			manifest: "moonwitness/jurisdiction-locale-pack/manifest.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"consent-region": "moonwitness/jurisdiction-locale-pack/svg/consent-region.svg",
				"cross-border-transfer": "moonwitness/jurisdiction-locale-pack/svg/cross-border-transfer.svg",
				"data-residency": "moonwitness/jurisdiction-locale-pack/svg/data-residency.svg",
				"governance-zone": "moonwitness/jurisdiction-locale-pack/svg/governance-zone.svg",
				"jurisdiction-cross-border": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-cross-border.svg",
				"jurisdiction-disputed": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-disputed.svg",
				"jurisdiction-global": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-global.svg",
				"jurisdiction-local": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-local.svg",
				"jurisdiction-national": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-national.svg",
				"jurisdiction-state": "moonwitness/jurisdiction-locale-pack/svg/jurisdiction-state.svg",
				"legal-basis": "moonwitness/jurisdiction-locale-pack/svg/legal-basis.svg",
				"locale-language": "moonwitness/jurisdiction-locale-pack/svg/locale-language.svg",
				"locale-region": "moonwitness/jurisdiction-locale-pack/svg/locale-region.svg",
				"retention-policy": "moonwitness/jurisdiction-locale-pack/svg/retention-policy.svg",
				"timezone-local": "moonwitness/jurisdiction-locale-pack/svg/timezone-local.svg",
				"timezone-utc": "moonwitness/jurisdiction-locale-pack/svg/timezone-utc.svg"
			},
			png: {
				"consent-region": "moonwitness/jurisdiction-locale-pack/png/consent-region.png",
				"cross-border-transfer": "moonwitness/jurisdiction-locale-pack/png/cross-border-transfer.png",
				"data-residency": "moonwitness/jurisdiction-locale-pack/png/data-residency.png",
				"governance-zone": "moonwitness/jurisdiction-locale-pack/png/governance-zone.png",
				"jurisdiction-cross-border": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-cross-border.png",
				"jurisdiction-disputed": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-disputed.png",
				"jurisdiction-global": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-global.png",
				"jurisdiction-local": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-local.png",
				"jurisdiction-national": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-national.png",
				"jurisdiction-state": "moonwitness/jurisdiction-locale-pack/png/jurisdiction-state.png",
				"legal-basis": "moonwitness/jurisdiction-locale-pack/png/legal-basis.png",
				"locale-language": "moonwitness/jurisdiction-locale-pack/png/locale-language.png",
				"locale-region": "moonwitness/jurisdiction-locale-pack/png/locale-region.png",
				"retention-policy": "moonwitness/jurisdiction-locale-pack/png/retention-policy.png",
				"timezone-local": "moonwitness/jurisdiction-locale-pack/png/timezone-local.png",
				"timezone-utc": "moonwitness/jurisdiction-locale-pack/png/timezone-utc.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/jurisdiction-locale-pack/png/consent-region.png,moonwitness/jurisdiction-locale-pack/png/cross-border-transfer.png,moonwitness/jurisdiction-locale-pack/png/data-residency.png,moonwitness/jurisdiction-locale-pack/png/governance-zone.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-cross-border.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-disputed.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-global.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-local.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-national.png,moonwitness/jurisdiction-locale-pack/png/jurisdiction-state.png,moonwitness/jurisdiction-locale-pack/png/legal-basis.png,moonwitness/jurisdiction-locale-pack/png/locale-language.png,moonwitness/jurisdiction-locale-pack/png/locale-region.png,moonwitness/jurisdiction-locale-pack/png/retention-policy.png,moonwitness/jurisdiction-locale-pack/png/timezone-local.png,moonwitness/jurisdiction-locale-pack/png/timezone-utc.png,moonwitness/jurisdiction-locale-pack/svg/consent-region.svg,moonwitness/jurisdiction-locale-pack/svg/cross-border-transfer.svg,moonwitness/jurisdiction-locale-pack/svg/data-residency.svg,moonwitness/jurisdiction-locale-pack/svg/governance-zone.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-cross-border.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-disputed.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-global.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-local.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-national.svg,moonwitness/jurisdiction-locale-pack/svg/jurisdiction-state.svg,moonwitness/jurisdiction-locale-pack/svg/legal-basis.svg,moonwitness/jurisdiction-locale-pack/svg/locale-language.svg,moonwitness/jurisdiction-locale-pack/svg/locale-region.svg,moonwitness/jurisdiction-locale-pack/svg/retention-policy.svg,moonwitness/jurisdiction-locale-pack/svg/timezone-local.svg,moonwitness/jurisdiction-locale-pack/svg/timezone-utc.svg".split(",")
		},
		"cinematic-hero": {
			manifest: "moonwitness/cinematic-hero-pack/manifest.json",
			count: 12,
			canonicalFormat: "svg",
			svg: {
				"archive-room": "moonwitness/cinematic-hero-pack/svg/archive-room.svg",
				"community-lab": "moonwitness/cinematic-hero-pack/svg/community-lab.svg",
				"correlation-sky": "moonwitness/cinematic-hero-pack/svg/correlation-sky.svg",
				"data-observatory": "moonwitness/cinematic-hero-pack/svg/data-observatory.svg",
				"evidence-desk": "moonwitness/cinematic-hero-pack/svg/evidence-desk.svg",
				"field-investigation": "moonwitness/cinematic-hero-pack/svg/field-investigation.svg",
				"legal-archive": "moonwitness/cinematic-hero-pack/svg/legal-archive.svg",
				"lunar-horizon": "moonwitness/cinematic-hero-pack/svg/lunar-horizon.svg",
				"map-room": "moonwitness/cinematic-hero-pack/svg/map-room.svg",
				"observatory-night": "moonwitness/cinematic-hero-pack/svg/observatory-night.svg",
				"satellite-orbit": "moonwitness/cinematic-hero-pack/svg/satellite-orbit.svg",
				"source-trace": "moonwitness/cinematic-hero-pack/svg/source-trace.svg"
			},
			png: {
				"archive-room": "moonwitness/cinematic-hero-pack/png/archive-room.png",
				"community-lab": "moonwitness/cinematic-hero-pack/png/community-lab.png",
				"correlation-sky": "moonwitness/cinematic-hero-pack/png/correlation-sky.png",
				"data-observatory": "moonwitness/cinematic-hero-pack/png/data-observatory.png",
				"evidence-desk": "moonwitness/cinematic-hero-pack/png/evidence-desk.png",
				"field-investigation": "moonwitness/cinematic-hero-pack/png/field-investigation.png",
				"legal-archive": "moonwitness/cinematic-hero-pack/png/legal-archive.png",
				"lunar-horizon": "moonwitness/cinematic-hero-pack/png/lunar-horizon.png",
				"map-room": "moonwitness/cinematic-hero-pack/png/map-room.png",
				"observatory-night": "moonwitness/cinematic-hero-pack/png/observatory-night.png",
				"satellite-orbit": "moonwitness/cinematic-hero-pack/png/satellite-orbit.png",
				"source-trace": "moonwitness/cinematic-hero-pack/png/source-trace.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/cinematic-hero-pack/png/archive-room.png",
				"moonwitness/cinematic-hero-pack/png/community-lab.png",
				"moonwitness/cinematic-hero-pack/png/correlation-sky.png",
				"moonwitness/cinematic-hero-pack/png/data-observatory.png",
				"moonwitness/cinematic-hero-pack/png/evidence-desk.png",
				"moonwitness/cinematic-hero-pack/png/field-investigation.png",
				"moonwitness/cinematic-hero-pack/png/legal-archive.png",
				"moonwitness/cinematic-hero-pack/png/lunar-horizon.png",
				"moonwitness/cinematic-hero-pack/png/map-room.png",
				"moonwitness/cinematic-hero-pack/png/observatory-night.png",
				"moonwitness/cinematic-hero-pack/png/satellite-orbit.png",
				"moonwitness/cinematic-hero-pack/png/source-trace.png",
				"moonwitness/cinematic-hero-pack/svg/archive-room.svg",
				"moonwitness/cinematic-hero-pack/svg/community-lab.svg",
				"moonwitness/cinematic-hero-pack/svg/correlation-sky.svg",
				"moonwitness/cinematic-hero-pack/svg/data-observatory.svg",
				"moonwitness/cinematic-hero-pack/svg/evidence-desk.svg",
				"moonwitness/cinematic-hero-pack/svg/field-investigation.svg",
				"moonwitness/cinematic-hero-pack/svg/legal-archive.svg",
				"moonwitness/cinematic-hero-pack/svg/lunar-horizon.svg",
				"moonwitness/cinematic-hero-pack/svg/map-room.svg",
				"moonwitness/cinematic-hero-pack/svg/observatory-night.svg",
				"moonwitness/cinematic-hero-pack/svg/satellite-orbit.svg",
				"moonwitness/cinematic-hero-pack/svg/source-trace.svg"
			]
		},
		"runtime-motion": {
			manifest: "moonwitness/runtime-motion-pack/manifest.json",
			count: 12,
			canonicalFormat: "animated-svg",
			svg: {
				"ai-orbit": "moonwitness/runtime-motion-pack/svg/ai-orbit.svg",
				"backend-reconnect": "moonwitness/runtime-motion-pack/svg/backend-reconnect.svg",
				"case-resolved": "moonwitness/runtime-motion-pack/svg/case-resolved.svg",
				"drawer-open": "moonwitness/runtime-motion-pack/svg/drawer-open.svg",
				"evidence-linked": "moonwitness/runtime-motion-pack/svg/evidence-linked.svg",
				"focus-ring": "moonwitness/runtime-motion-pack/svg/focus-ring.svg",
				"graph-connect": "moonwitness/runtime-motion-pack/svg/graph-connect.svg",
				"loading-trace": "moonwitness/runtime-motion-pack/svg/loading-trace.svg",
				"notification-in": "moonwitness/runtime-motion-pack/svg/notification-in.svg",
				"pulse-alert": "moonwitness/runtime-motion-pack/svg/pulse-alert.svg",
				"sync-spin": "moonwitness/runtime-motion-pack/svg/sync-spin.svg",
				"upload-rise": "moonwitness/runtime-motion-pack/svg/upload-rise.svg"
			},
			png: {
				"ai-orbit": "moonwitness/runtime-motion-pack/png/ai-orbit.png",
				"backend-reconnect": "moonwitness/runtime-motion-pack/png/backend-reconnect.png",
				"case-resolved": "moonwitness/runtime-motion-pack/png/case-resolved.png",
				"drawer-open": "moonwitness/runtime-motion-pack/png/drawer-open.png",
				"evidence-linked": "moonwitness/runtime-motion-pack/png/evidence-linked.png",
				"focus-ring": "moonwitness/runtime-motion-pack/png/focus-ring.png",
				"graph-connect": "moonwitness/runtime-motion-pack/png/graph-connect.png",
				"loading-trace": "moonwitness/runtime-motion-pack/png/loading-trace.png",
				"notification-in": "moonwitness/runtime-motion-pack/png/notification-in.png",
				"pulse-alert": "moonwitness/runtime-motion-pack/png/pulse-alert.png",
				"sync-spin": "moonwitness/runtime-motion-pack/png/sync-spin.png",
				"upload-rise": "moonwitness/runtime-motion-pack/png/upload-rise.png"
			},
			webm: {
				"ai-orbit": "moonwitness/runtime-motion-pack/webm/ai-orbit.webm",
				"backend-reconnect": "moonwitness/runtime-motion-pack/webm/backend-reconnect.webm",
				"case-resolved": "moonwitness/runtime-motion-pack/webm/case-resolved.webm",
				"drawer-open": "moonwitness/runtime-motion-pack/webm/drawer-open.webm",
				"evidence-linked": "moonwitness/runtime-motion-pack/webm/evidence-linked.webm",
				"focus-ring": "moonwitness/runtime-motion-pack/webm/focus-ring.webm",
				"graph-connect": "moonwitness/runtime-motion-pack/webm/graph-connect.webm",
				"loading-trace": "moonwitness/runtime-motion-pack/webm/loading-trace.webm",
				"notification-in": "moonwitness/runtime-motion-pack/webm/notification-in.webm",
				"pulse-alert": "moonwitness/runtime-motion-pack/webm/pulse-alert.webm",
				"sync-spin": "moonwitness/runtime-motion-pack/webm/sync-spin.webm",
				"upload-rise": "moonwitness/runtime-motion-pack/webm/upload-rise.webm"
			},
			lottie: {
				"ai-orbit": "moonwitness/runtime-motion-pack/lottie/ai-orbit.json",
				"backend-reconnect": "moonwitness/runtime-motion-pack/lottie/backend-reconnect.json",
				"case-resolved": "moonwitness/runtime-motion-pack/lottie/case-resolved.json",
				"drawer-open": "moonwitness/runtime-motion-pack/lottie/drawer-open.json",
				"evidence-linked": "moonwitness/runtime-motion-pack/lottie/evidence-linked.json",
				"focus-ring": "moonwitness/runtime-motion-pack/lottie/focus-ring.json",
				"graph-connect": "moonwitness/runtime-motion-pack/lottie/graph-connect.json",
				"loading-trace": "moonwitness/runtime-motion-pack/lottie/loading-trace.json",
				"notification-in": "moonwitness/runtime-motion-pack/lottie/notification-in.json",
				"pulse-alert": "moonwitness/runtime-motion-pack/lottie/pulse-alert.json",
				"sync-spin": "moonwitness/runtime-motion-pack/lottie/sync-spin.json",
				"upload-rise": "moonwitness/runtime-motion-pack/lottie/upload-rise.json"
			},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/runtime-motion-pack/lottie/ai-orbit.json,moonwitness/runtime-motion-pack/lottie/backend-reconnect.json,moonwitness/runtime-motion-pack/lottie/case-resolved.json,moonwitness/runtime-motion-pack/lottie/drawer-open.json,moonwitness/runtime-motion-pack/lottie/evidence-linked.json,moonwitness/runtime-motion-pack/lottie/focus-ring.json,moonwitness/runtime-motion-pack/lottie/graph-connect.json,moonwitness/runtime-motion-pack/lottie/loading-trace.json,moonwitness/runtime-motion-pack/lottie/notification-in.json,moonwitness/runtime-motion-pack/lottie/pulse-alert.json,moonwitness/runtime-motion-pack/lottie/sync-spin.json,moonwitness/runtime-motion-pack/lottie/upload-rise.json,moonwitness/runtime-motion-pack/png/ai-orbit.png,moonwitness/runtime-motion-pack/png/backend-reconnect.png,moonwitness/runtime-motion-pack/png/case-resolved.png,moonwitness/runtime-motion-pack/png/drawer-open.png,moonwitness/runtime-motion-pack/png/evidence-linked.png,moonwitness/runtime-motion-pack/png/focus-ring.png,moonwitness/runtime-motion-pack/png/graph-connect.png,moonwitness/runtime-motion-pack/png/loading-trace.png,moonwitness/runtime-motion-pack/png/notification-in.png,moonwitness/runtime-motion-pack/png/pulse-alert.png,moonwitness/runtime-motion-pack/png/sync-spin.png,moonwitness/runtime-motion-pack/png/upload-rise.png,moonwitness/runtime-motion-pack/svg/ai-orbit.svg,moonwitness/runtime-motion-pack/svg/backend-reconnect.svg,moonwitness/runtime-motion-pack/svg/case-resolved.svg,moonwitness/runtime-motion-pack/svg/drawer-open.svg,moonwitness/runtime-motion-pack/svg/evidence-linked.svg,moonwitness/runtime-motion-pack/svg/focus-ring.svg,moonwitness/runtime-motion-pack/svg/graph-connect.svg,moonwitness/runtime-motion-pack/svg/loading-trace.svg,moonwitness/runtime-motion-pack/svg/notification-in.svg,moonwitness/runtime-motion-pack/svg/pulse-alert.svg,moonwitness/runtime-motion-pack/svg/sync-spin.svg,moonwitness/runtime-motion-pack/svg/upload-rise.svg,moonwitness/runtime-motion-pack/webm/ai-orbit.webm,moonwitness/runtime-motion-pack/webm/backend-reconnect.webm,moonwitness/runtime-motion-pack/webm/case-resolved.webm,moonwitness/runtime-motion-pack/webm/drawer-open.webm,moonwitness/runtime-motion-pack/webm/evidence-linked.webm,moonwitness/runtime-motion-pack/webm/focus-ring.webm,moonwitness/runtime-motion-pack/webm/graph-connect.webm,moonwitness/runtime-motion-pack/webm/loading-trace.webm,moonwitness/runtime-motion-pack/webm/notification-in.webm,moonwitness/runtime-motion-pack/webm/pulse-alert.webm,moonwitness/runtime-motion-pack/webm/sync-spin.webm,moonwitness/runtime-motion-pack/webm/upload-rise.webm".split(",")
		},
		"developer-distribution": {
			manifest: "moonwitness/developer-pack/manifest.json",
			count: 4,
			canonicalFormat: "generated-registry",
			svg: {},
			png: {},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {
				"assets.json": "dist/assets.json",
				"assets.ts": "dist/assets.ts",
				"assets.css": "dist/assets.css",
				"sprite.svg": "dist/sprite.svg"
			},
			files: []
		},
		"community-participation": {
			manifest: "moonwitness/community-participation-pack/manifest.json",
			count: 8,
			canonicalFormat: "svg",
			svg: {
				"attributed-reply": "moonwitness/community-participation-pack/svg/attributed-reply.svg",
				"discussion-thread": "moonwitness/community-participation-pack/svg/discussion-thread.svg",
				"identity-bridge": "moonwitness/community-participation-pack/svg/identity-bridge.svg",
				"moderation-history": "moonwitness/community-participation-pack/svg/moderation-history.svg",
				notification: "moonwitness/community-participation-pack/svg/notification.svg",
				"proposal-review": "moonwitness/community-participation-pack/svg/proposal-review.svg",
				"saved-case": "moonwitness/community-participation-pack/svg/saved-case.svg",
				"source-linked": "moonwitness/community-participation-pack/svg/source-linked.svg"
			},
			png: {
				"attributed-reply": "moonwitness/community-participation-pack/png/attributed-reply.png",
				"discussion-thread": "moonwitness/community-participation-pack/png/discussion-thread.png",
				"identity-bridge": "moonwitness/community-participation-pack/png/identity-bridge.png",
				"moderation-history": "moonwitness/community-participation-pack/png/moderation-history.png",
				notification: "moonwitness/community-participation-pack/png/notification.png",
				"proposal-review": "moonwitness/community-participation-pack/png/proposal-review.png",
				"saved-case": "moonwitness/community-participation-pack/png/saved-case.png",
				"source-linked": "moonwitness/community-participation-pack/png/source-linked.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: [
				"moonwitness/community-participation-pack/png/attributed-reply.png",
				"moonwitness/community-participation-pack/png/discussion-thread.png",
				"moonwitness/community-participation-pack/png/identity-bridge.png",
				"moonwitness/community-participation-pack/png/moderation-history.png",
				"moonwitness/community-participation-pack/png/notification.png",
				"moonwitness/community-participation-pack/png/proposal-review.png",
				"moonwitness/community-participation-pack/png/saved-case.png",
				"moonwitness/community-participation-pack/png/source-linked.png",
				"moonwitness/community-participation-pack/svg/attributed-reply.svg",
				"moonwitness/community-participation-pack/svg/discussion-thread.svg",
				"moonwitness/community-participation-pack/svg/identity-bridge.svg",
				"moonwitness/community-participation-pack/svg/moderation-history.svg",
				"moonwitness/community-participation-pack/svg/notification.svg",
				"moonwitness/community-participation-pack/svg/proposal-review.svg",
				"moonwitness/community-participation-pack/svg/saved-case.svg",
				"moonwitness/community-participation-pack/svg/source-linked.svg"
			]
		}
	},
	collections: {
		"brand-system": {
			manifest: "moonwitness/brand/brand-assets.json",
			count: 13,
			canonicalFormat: "svg",
			svg: {
				"app-icon-maskable": "moonwitness/brand/app-icon-maskable.svg",
				"app-icon": "moonwitness/brand/app-icon.svg",
				"apple-touch-icon": "moonwitness/brand/apple-touch-icon.svg",
				favicon: "moonwitness/brand/favicon.svg",
				"logo-horizontal": "moonwitness/brand/logo-horizontal.svg",
				"logo-mark": "moonwitness/brand/logo-mark.svg",
				"logo-monochrome": "moonwitness/brand/logo-monochrome.svg",
				"logo-stacked": "moonwitness/brand/logo-stacked.svg",
				"og-card": "moonwitness/brand/og-card.svg",
				"rocksoul-lockup": "moonwitness/brand/rocksoul-lockup.svg",
				"safari-pinned-tab": "moonwitness/brand/safari-pinned-tab.svg",
				"social-avatar": "moonwitness/brand/social-avatar.svg",
				wordmark: "moonwitness/brand/wordmark.svg"
			},
			png: {
				"app-icon-192": "moonwitness/brand/generated/app-icon-192.png",
				"app-icon-512": "moonwitness/brand/generated/app-icon-512.png",
				"app-icon-maskable-192": "moonwitness/brand/generated/app-icon-maskable-192.png",
				"app-icon-maskable-512": "moonwitness/brand/generated/app-icon-maskable-512.png",
				"apple-touch-icon-180": "moonwitness/brand/generated/apple-touch-icon-180.png",
				"favicon-16": "moonwitness/brand/generated/favicon-16.png",
				"favicon-32": "moonwitness/brand/generated/favicon-32.png",
				"favicon-48": "moonwitness/brand/generated/favicon-48.png",
				"logo-horizontal-1520x320": "moonwitness/brand/generated/logo-horizontal-1520x320.png",
				"logo-mark-512": "moonwitness/brand/generated/logo-mark-512.png",
				"logo-monochrome-1520x320": "moonwitness/brand/generated/logo-monochrome-1520x320.png",
				"logo-stacked-1120x1040": "moonwitness/brand/generated/logo-stacked-1120x1040.png",
				"og-card-1200x630": "moonwitness/brand/generated/og-card-1200x630.png",
				"rocksoul-lockup-1800x360": "moonwitness/brand/generated/rocksoul-lockup-1800x360.png",
				"safari-pinned-tab-512": "moonwitness/brand/generated/safari-pinned-tab-512.png",
				"social-avatar-512": "moonwitness/brand/generated/social-avatar-512.png",
				"wordmark-1360x240": "moonwitness/brand/generated/wordmark-1360x240.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: { favicon: "moonwitness/brand/generated/favicon.ico" },
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/brand/app-icon-maskable.svg,moonwitness/brand/app-icon.svg,moonwitness/brand/apple-touch-icon.svg,moonwitness/brand/favicon.svg,moonwitness/brand/generated/app-icon-192.png,moonwitness/brand/generated/app-icon-512.png,moonwitness/brand/generated/app-icon-maskable-192.png,moonwitness/brand/generated/app-icon-maskable-512.png,moonwitness/brand/generated/apple-touch-icon-180.png,moonwitness/brand/generated/favicon-16.png,moonwitness/brand/generated/favicon-32.png,moonwitness/brand/generated/favicon-48.png,moonwitness/brand/generated/favicon.ico,moonwitness/brand/generated/logo-horizontal-1520x320.png,moonwitness/brand/generated/logo-mark-512.png,moonwitness/brand/generated/logo-monochrome-1520x320.png,moonwitness/brand/generated/logo-stacked-1120x1040.png,moonwitness/brand/generated/og-card-1200x630.png,moonwitness/brand/generated/rocksoul-lockup-1800x360.png,moonwitness/brand/generated/safari-pinned-tab-512.png,moonwitness/brand/generated/social-avatar-512.png,moonwitness/brand/generated/wordmark-1360x240.png,moonwitness/brand/logo-horizontal.svg,moonwitness/brand/logo-mark.svg,moonwitness/brand/logo-monochrome.svg,moonwitness/brand/logo-stacked.svg,moonwitness/brand/og-card.svg,moonwitness/brand/rocksoul-lockup.svg,moonwitness/brand/safari-pinned-tab.svg,moonwitness/brand/social-avatar.svg,moonwitness/brand/wordmark.svg".split(",")
		},
		"baseline-v1": {
			manifest: "moonwitness/ui/v1/screens/screens.json",
			count: 16,
			canonicalFormat: "svg",
			svg: {
				"01-landing-hero": "moonwitness/ui/v1/screens/01-landing-hero.svg",
				"02-manifesto": "moonwitness/ui/v1/screens/02-manifesto.svg",
				"03-rocksoul-character": "moonwitness/ui/v1/screens/03-rocksoul-character.svg",
				"04-repositories-overview": "moonwitness/ui/v1/screens/04-repositories-overview.svg",
				"05-story": "moonwitness/ui/v1/screens/05-story.svg",
				"06-event": "moonwitness/ui/v1/screens/06-event.svg",
				"07-person": "moonwitness/ui/v1/screens/07-person.svg",
				"08-rgbl": "moonwitness/ui/v1/screens/08-rgbl.svg",
				"09-aws": "moonwitness/ui/v1/screens/09-aws.svg",
				"10-case-public": "moonwitness/ui/v1/screens/10-case-public.svg",
				"11-correlation": "moonwitness/ui/v1/screens/11-correlation.svg",
				"12-aws-legal": "moonwitness/ui/v1/screens/12-aws-legal.svg",
				"13-community": "moonwitness/ui/v1/screens/13-community.svg",
				"14-auth": "moonwitness/ui/v1/screens/14-auth.svg",
				"15-platform-admin": "moonwitness/ui/v1/screens/15-platform-admin.svg",
				"16-design-system": "moonwitness/ui/v1/screens/16-design-system.svg"
			},
			png: {
				"01-landing-hero": "moonwitness/ui/v1/screens/01-landing-hero.png",
				"02-manifesto": "moonwitness/ui/v1/screens/02-manifesto.png",
				"03-rocksoul-character": "moonwitness/ui/v1/screens/03-rocksoul-character.png",
				"04-repositories-overview": "moonwitness/ui/v1/screens/04-repositories-overview.png",
				"05-story": "moonwitness/ui/v1/screens/05-story.png",
				"06-event": "moonwitness/ui/v1/screens/06-event.png",
				"07-person": "moonwitness/ui/v1/screens/07-person.png",
				"08-rgbl": "moonwitness/ui/v1/screens/08-rgbl.png",
				"09-aws": "moonwitness/ui/v1/screens/09-aws.png",
				"10-case-public": "moonwitness/ui/v1/screens/10-case-public.png",
				"11-correlation": "moonwitness/ui/v1/screens/11-correlation.png",
				"12-aws-legal": "moonwitness/ui/v1/screens/12-aws-legal.png",
				"13-community": "moonwitness/ui/v1/screens/13-community.png",
				"14-auth": "moonwitness/ui/v1/screens/14-auth.png",
				"15-platform-admin": "moonwitness/ui/v1/screens/15-platform-admin.png",
				"16-design-system": "moonwitness/ui/v1/screens/16-design-system.png"
			},
			webm: {},
			lottie: {},
			wav: {},
			ogg: {},
			ico: {},
			artifacts: {},
			files: /* @__PURE__ */ "moonwitness/ui/v1/screens/01-landing-hero.png,moonwitness/ui/v1/screens/01-landing-hero.svg,moonwitness/ui/v1/screens/02-manifesto.png,moonwitness/ui/v1/screens/02-manifesto.svg,moonwitness/ui/v1/screens/03-rocksoul-character.png,moonwitness/ui/v1/screens/03-rocksoul-character.svg,moonwitness/ui/v1/screens/04-repositories-overview.png,moonwitness/ui/v1/screens/04-repositories-overview.svg,moonwitness/ui/v1/screens/05-story.png,moonwitness/ui/v1/screens/05-story.svg,moonwitness/ui/v1/screens/06-event.png,moonwitness/ui/v1/screens/06-event.svg,moonwitness/ui/v1/screens/07-person.png,moonwitness/ui/v1/screens/07-person.svg,moonwitness/ui/v1/screens/08-rgbl.png,moonwitness/ui/v1/screens/08-rgbl.svg,moonwitness/ui/v1/screens/09-aws.png,moonwitness/ui/v1/screens/09-aws.svg,moonwitness/ui/v1/screens/10-case-public.png,moonwitness/ui/v1/screens/10-case-public.svg,moonwitness/ui/v1/screens/11-correlation.png,moonwitness/ui/v1/screens/11-correlation.svg,moonwitness/ui/v1/screens/12-aws-legal.png,moonwitness/ui/v1/screens/12-aws-legal.svg,moonwitness/ui/v1/screens/13-community.png,moonwitness/ui/v1/screens/13-community.svg,moonwitness/ui/v1/screens/14-auth.png,moonwitness/ui/v1/screens/14-auth.svg,moonwitness/ui/v1/screens/15-platform-admin.png,moonwitness/ui/v1/screens/15-platform-admin.svg,moonwitness/ui/v1/screens/16-design-system.png,moonwitness/ui/v1/screens/16-design-system.svg".split(",")
		}
	},
	coverage: {
		packFamilies: 43,
		foundationCollections: 2,
		showcaseCollections: 45,
		deliveryFiles: 1464,
		indexedDeliveryFiles: 1464,
		missingDeliveryFiles: 0,
		coveragePercent: 100,
		extensions: {
			svg: 634,
			png: 777,
			ico: 1,
			webm: 12,
			wav: 14,
			ogg: 14,
			lottie: 12
		}
	}
}, ce = E, D = {
	repository: y.repository,
	ref: y.ref,
	commit: y.commit,
	version: E.version,
	packCount: Object.keys(E.packs).length,
	canonicalAssetCount: E.coverage.extensions.svg,
	deliveryFileCount: E.coverage.deliveryFiles,
	coveragePercent: E.coverage.coveragePercent,
	canonicalFormat: E.canonicalFormat,
	developerDistribution: y.developerDistribution
}, O = `https://raw.githubusercontent.com/${y.repository}/${y.commit}`, le = `https://raw.githubusercontent.com/${y.repository}/${y.acceptedMainCommit}`;
function ue(e) {
	return e.replace(/\/+$/, "");
}
function de(e, t) {
	if (typeof e == "string") return e;
	if (e) return t && e[t] ? e[t] : Object.values(e)[0];
}
function k(e, t, n = {}) {
	let r = E.packs[e];
	return de(r[n.format ?? "svg"]?.[t], n.size);
}
function A(e, t, n = {}) {
	return !!k(e, t, n);
}
function j(e, t, n = {}) {
	let r = k(e, t, n);
	if (!r) return;
	let i = (n.rootMode ?? "repository") === "moonwitness" ? r.replace(/^moonwitness\//, "") : r;
	return `${ue(n.baseUrl ?? O)}/${i}`;
}
//#endregion
//#region src/contracts/asset-packs.ts
var fe = {
	"product-icons": {
		id: "product-icons",
		count: 44,
		root: "icons",
		manifest: "icons/icons.json"
	},
	dashboard: {
		id: "dashboard",
		count: 20,
		root: "dashboard-pack",
		manifest: "dashboard-pack/dashboard-pack.json"
	},
	"data-viz": {
		id: "data-viz",
		count: 20,
		root: "data-viz",
		manifest: "data-viz/data-viz.json"
	},
	"hero-backgrounds": {
		id: "hero-backgrounds",
		count: 8,
		root: "hero-backgrounds",
		manifest: "hero-backgrounds/backgrounds.json"
	},
	"state-illustrations": {
		id: "state-illustrations",
		count: 12,
		root: "state-illustrations",
		manifest: "state-illustrations/states.json"
	},
	motion: {
		id: "motion",
		count: 12,
		root: "motion",
		manifest: "motion/motion.json"
	},
	"application-screens": {
		id: "application-screens",
		count: 20,
		root: "ui/v2",
		manifest: "ui/v2/manifest.json"
	},
	sfx: {
		id: "sfx",
		count: 14,
		root: "sfx",
		manifest: "sfx/sounds.json"
	},
	"graph-vector": {
		id: "graph-vector",
		count: 10,
		root: "graph-pack",
		manifest: "graph-pack/manifest.json"
	},
	"badge-status": {
		id: "badge-status",
		count: 12,
		root: "badge-pack",
		manifest: "badge-pack/manifest.json"
	},
	"source-file": {
		id: "source-file",
		count: 15,
		root: "source-file-pack",
		manifest: "source-file-pack/manifest.json"
	},
	geospatial: {
		id: "geospatial",
		count: 15,
		root: "geospatial-pack",
		manifest: "geospatial-pack/manifest.json"
	},
	"cursor-interaction": {
		id: "cursor-interaction",
		count: 17,
		root: "cursor-pack",
		manifest: "cursor-pack/manifest.json"
	},
	"persona-avatar": {
		id: "persona-avatar",
		count: 9,
		root: "persona-pack",
		manifest: "persona-pack/manifest.json"
	},
	"social-campaign": {
		id: "social-campaign",
		count: 8,
		root: "social-campaign-pack",
		manifest: "social-campaign-pack/manifest.json"
	},
	"platform-delivery": {
		id: "platform-delivery",
		count: 8,
		root: "platform-delivery-pack",
		manifest: "platform-delivery-pack/manifest.json"
	},
	onboarding: {
		id: "onboarding",
		count: 8,
		root: "onboarding-pack",
		manifest: "onboarding-pack/manifest.json"
	},
	"document-report": {
		id: "document-report",
		count: 9,
		root: "document-report-pack",
		manifest: "document-report-pack/manifest.json"
	},
	notification: {
		id: "notification",
		count: 8,
		root: "notification-pack",
		manifest: "notification-pack/manifest.json"
	},
	editorial: {
		id: "editorial",
		count: 6,
		root: "editorial-pack",
		manifest: "editorial-pack/manifest.json"
	},
	"evidence-media": {
		id: "evidence-media",
		count: 24,
		root: "evidence-media-pack",
		manifest: "evidence-media-pack/manifest.json"
	},
	"correlation-semantics": {
		id: "correlation-semantics",
		count: 24,
		root: "correlation-semantics-pack",
		manifest: "correlation-semantics-pack/manifest.json"
	},
	"kanban-workflow": {
		id: "kanban-workflow",
		count: 18,
		root: "kanban-pack",
		manifest: "kanban-pack/manifest.json"
	},
	"calendar-temporal": {
		id: "calendar-temporal",
		count: 16,
		root: "calendar-pack",
		manifest: "calendar-pack/manifest.json"
	},
	"chat-collaboration": {
		id: "chat-collaboration",
		count: 24,
		root: "chat-pack",
		manifest: "chat-pack/manifest.json"
	},
	"ai-workspace": {
		id: "ai-workspace",
		count: 18,
		root: "ai-workspace-pack",
		manifest: "ai-workspace-pack/manifest.json"
	},
	"authorization-security": {
		id: "authorization-security",
		count: 18,
		root: "security-pack",
		manifest: "security-pack/manifest.json"
	},
	"data-grid": {
		id: "data-grid",
		count: 16,
		root: "data-grid-pack",
		manifest: "data-grid-pack/manifest.json"
	},
	"form-controls": {
		id: "form-controls",
		count: 20,
		root: "form-controls-pack",
		manifest: "form-controls-pack/manifest.json"
	},
	"theme-accessibility": {
		id: "theme-accessibility",
		count: 12,
		root: "theme-accessibility-pack",
		manifest: "theme-accessibility-pack/manifest.json"
	},
	"privacy-redaction": {
		id: "privacy-redaction",
		count: 16,
		root: "privacy-redaction-pack",
		manifest: "privacy-redaction-pack/manifest.json"
	},
	"evidence-integrity": {
		id: "evidence-integrity",
		count: 16,
		root: "integrity-pack",
		manifest: "integrity-pack/manifest.json"
	},
	"export-seal": {
		id: "export-seal",
		count: 12,
		root: "export-seal-pack",
		manifest: "export-seal-pack/manifest.json"
	},
	"rocksoul-character": {
		id: "rocksoul-character",
		count: 12,
		root: "rocksoul-character-pack",
		manifest: "rocksoul-character-pack/manifest.json"
	},
	"command-keyboard": {
		id: "command-keyboard",
		count: 14,
		root: "command-keyboard-pack",
		manifest: "command-keyboard-pack/manifest.json"
	},
	"texture-material": {
		id: "texture-material",
		count: 12,
		root: "texture-material-pack",
		manifest: "texture-material-pack/manifest.json"
	},
	"architecture-diagram": {
		id: "architecture-diagram",
		count: 16,
		root: "architecture-diagram-pack",
		manifest: "architecture-diagram-pack/manifest.json"
	},
	"device-mockup": {
		id: "device-mockup",
		count: 8,
		root: "device-mockup-pack",
		manifest: "device-mockup-pack/manifest.json"
	},
	"jurisdiction-locale": {
		id: "jurisdiction-locale",
		count: 16,
		root: "jurisdiction-locale-pack",
		manifest: "jurisdiction-locale-pack/manifest.json"
	},
	"cinematic-hero": {
		id: "cinematic-hero",
		count: 12,
		root: "cinematic-hero-pack",
		manifest: "cinematic-hero-pack/manifest.json"
	},
	"runtime-motion": {
		id: "runtime-motion",
		count: 12,
		root: "runtime-motion-pack",
		manifest: "runtime-motion-pack/manifest.json"
	},
	"developer-distribution": {
		id: "developer-distribution",
		count: 4,
		root: "developer-pack",
		manifest: "developer-pack/manifest.json"
	},
	"community-participation": {
		id: "community-participation",
		count: 8,
		root: "community-participation-pack",
		manifest: "community-participation-pack/manifest.json"
	}
}, M = "1.3.1", pe = "asset-packs.json";
function me(e, t) {
	return `${fe[e].root}/${t.replace(/^\/+/, "")}`;
}
//#endregion
//#region src/contracts/interactions.tsx
var he = e({});
function ge({ actions: e, children: t }) {
	return /* @__PURE__ */ l(he.Provider, {
		value: e ?? {},
		children: t
	});
}
function N() {
	return n(he);
}
//#endregion
//#region src/contracts/platform-admin.ts
var P = {
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
}, _e = {
	dashboard: "28-platform-dashboard.svg",
	users: "29-platform-users.svg",
	authorization: "30-platform-authorization.svg",
	moderation: "31-platform-moderation.svg",
	"service-status": "32-platform-service-status.svg",
	audit: "33-platform-audit.svg",
	settings: "34-platform-settings.svg",
	"system-states": "35-platform-system-states.svg"
}, ve = {
	repository: "bjo163/rocksoul-assets",
	ref: "main",
	commit: "e978695a3dd92d952faaa0ff356980e9ad6438a2",
	manifest: "moonwitness/cinematic-web-hero/manifest.json",
	profileVersion: "1.0.0",
	sourceRelease: "1.3.1"
}, ye = `https://raw.githubusercontent.com/${ve.repository}/${ve.commit}`;
function F(e) {
	return `${ye}/${e.replace(/^\/+/, "")}`;
}
var be = {
	desktop: F("moonwitness/cinematic-hero-pack/webp/hero-master-desktop.webp"),
	mobile: F("moonwitness/cinematic-hero-pack/webp/hero-master-mobile.webp"),
	moon: F("moonwitness/cinematic-hero-pack/webp/moon-photographic.webp"),
	grid: F("moonwitness/hero-backgrounds/svg/observatory-grid.svg"),
	grain: F("moonwitness/texture-material-pack/svg/lunar-grain.svg"),
	scanlines: F("moonwitness/texture-material-pack/svg/scanner-lines.svg"),
	archive: [
		F("moonwitness/hero-backgrounds/png/lunar-trace.png"),
		F("moonwitness/hero-backgrounds/png/archive-texture.png"),
		F("moonwitness/hero-backgrounds/png/evidence-constellation.png"),
		F("moonwitness/hero-backgrounds/png/correlation-web.png")
	]
}, xe = {
	composition: "composite-photographic-master",
	desktopAspectRatio: "16:9",
	mobileAspectRatio: "3:4",
	headlineLines: ["WHERE MYTH", "FADES TO LEGEND"],
	semanticUi: "live-html-svg",
	reducedMotion: "static-by-default",
	evidenceGraphTextEquivalent: !0,
	correlationImpliesCausation: !1
}, Se = e({});
function Ce({ adapter: e, children: t }) {
	return /* @__PURE__ */ l(Se.Provider, {
		value: e ?? {},
		children: t
	});
}
function we(e, t, n) {
	return t.startsWith("/") && !t.startsWith("//") && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && (!n || n === "_self");
}
function Te({ href: e, onClick: t, target: r, children: i, ...a }) {
	let o = n(Se);
	return o.renderLink ? /* @__PURE__ */ l(c, { children: o.renderLink({
		href: e,
		onClick: t,
		target: r,
		children: i,
		...a
	}) }) : /* @__PURE__ */ l("a", {
		href: e,
		target: r,
		...a,
		onClick: (n) => {
			t?.(n), o.navigate && we(n, e, r) && (n.preventDefault(), o.navigate(e));
		},
		children: i
	});
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function Ee(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Ee(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function De() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ee(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Oe = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ke = (e, t) => ({
	classGroupId: e,
	validator: t
}), Ae = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), je = "-", Me = [], Ne = "arbitrary..", Pe = (e) => {
	let t = Le(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Ie(e);
			let n = e.split(je);
			return Fe(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Oe(i, t) : t : i || Me;
			}
			return n[e] || Me;
		}
	};
}, Fe = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Fe(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(je) : e.slice(t).join(je), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Ie = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ne + r : void 0;
})(), Le = (e) => {
	let { theme: t, classGroups: n } = e;
	return Re(n, t);
}, Re = (e, t) => {
	let n = Ae();
	for (let r in e) {
		let i = e[r];
		ze(i, n, r, t);
	}
	return n;
}, ze = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Be(i, t, n, r);
	}
}, Be = (e, t, n, r) => {
	if (typeof e == "string") {
		Ve(e, t, n);
		return;
	}
	if (typeof e == "function") {
		He(e, t, n, r);
		return;
	}
	Ue(e, t, n, r);
}, Ve = (e, t, n) => {
	let r = e === "" ? t : We(t, e);
	r.classGroupId = n;
}, He = (e, t, n, r) => {
	if (Ge(e)) {
		ze(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(ke(n, e));
}, Ue = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		ze(o, We(t, a), n, r);
	}
}, We = (e, t) => {
	let n = e, r = t.split(je), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Ae(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ge = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ke = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, qe = "!", Je = ":", Ye = [], Xe = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Ze = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Je) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(qe) ? (c = s.slice(0, -1), l = !0) : s.startsWith(qe) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Xe(t, l, c, u);
	};
	if (t) {
		let e = t + Je, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Xe(Ye, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Qe = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, $e = (e) => ({
	cache: Ke(e.cacheSize),
	parseClassName: Ze(e),
	sortModifiers: Qe(e),
	postfixLookupClassGroupIds: et(e),
	...Pe(e)
}), et = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, tt = /\s+/, nt = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(tt), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + qe : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, rt = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = it(n)) && (i && (i += " "), i += r);
	return i;
}, it = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = it(e[r])) && (n && (n += " "), n += t);
	return n;
}, at = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = $e(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = nt(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(rt(...e));
}, ot = [], I = (e) => {
	let t = (t) => t[e] || ot;
	return t.isThemeGetter = !0, t;
}, st = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ct = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ft = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, pt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e) => lt.test(e), R = (e) => !!e && !Number.isNaN(Number(e)), z = (e) => !!e && Number.isInteger(Number(e)), ht = (e) => e.endsWith("%") && R(e.slice(0, -1)), B = (e) => ut.test(e), gt = () => !0, _t = (e) => dt.test(e) && !ft.test(e), vt = () => !1, yt = (e) => pt.test(e), bt = (e) => mt.test(e), xt = (e) => !V(e) && !H(e), St = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Ct = (e) => U(e, Vt, vt), V = (e) => st.test(e), wt = (e) => U(e, Ht, _t), Tt = (e) => U(e, Ut, R), Et = (e) => U(e, Gt, gt), Dt = (e) => U(e, Wt, vt), Ot = (e) => U(e, zt, vt), kt = (e) => U(e, Bt, bt), At = (e) => U(e, Kt, yt), H = (e) => ct.test(e), jt = (e) => Rt(e, Ht), Mt = (e) => Rt(e, Wt), Nt = (e) => Rt(e, zt), Pt = (e) => Rt(e, Vt), Ft = (e) => Rt(e, Bt), It = (e) => Rt(e, Kt, !0), Lt = (e) => Rt(e, Gt, !0), U = (e, t, n) => {
	let r = st.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Rt = (e, t, n = !1) => {
	let r = ct.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, zt = (e) => e === "position" || e === "percentage", Bt = (e) => e === "image" || e === "url", Vt = (e) => e === "length" || e === "size" || e === "bg-size", Ht = (e) => e === "length", Ut = (e) => e === "number", Wt = (e) => e === "family-name", Gt = (e) => e === "number" || e === "weight", Kt = (e) => e === "shadow", qt = /*#__PURE__*/ at(() => {
	let e = I("color"), t = I("font"), n = I("text"), r = I("font-weight"), i = I("tracking"), a = I("leading"), o = I("breakpoint"), s = I("container"), c = I("spacing"), l = I("radius"), u = I("shadow"), d = I("inset-shadow"), f = I("text-shadow"), p = I("drop-shadow"), m = I("blur"), h = I("perspective"), g = I("aspect"), _ = I("ease"), v = I("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], ee = () => [
		...b(),
		H,
		V
	], te = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ne = () => [
		"auto",
		"contain",
		"none"
	], x = () => [
		H,
		V,
		c
	], S = () => [
		L,
		"full",
		"auto",
		...x()
	], re = () => [
		z,
		"none",
		"subgrid",
		H,
		V
	], ie = () => [
		"auto",
		{ span: [
			"full",
			z,
			H,
			V
		] },
		z,
		H,
		V
	], ae = () => [
		z,
		"auto",
		H,
		V
	], oe = () => [
		"auto",
		"min",
		"max",
		"fr",
		H,
		V
	], se = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], C = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], w = () => ["auto", ...x()], T = () => [
		L,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...x()
	], E = () => [
		L,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...x()
	], ce = () => [
		L,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...x()
	], D = () => [
		e,
		H,
		V
	], O = () => [
		...b(),
		Nt,
		Ot,
		{ position: [H, V] }
	], le = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ue = () => [
		"auto",
		"cover",
		"contain",
		Pt,
		Ct,
		{ size: [H, V] }
	], de = () => [
		ht,
		jt,
		wt
	], k = () => [
		"",
		"none",
		"full",
		l,
		H,
		V
	], A = () => [
		"",
		R,
		jt,
		wt
	], j = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], fe = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], M = () => [
		R,
		ht,
		Nt,
		Ot
	], pe = () => [
		"",
		"none",
		m,
		H,
		V
	], me = () => [
		"none",
		R,
		H,
		V
	], he = () => [
		"none",
		R,
		H,
		V
	], ge = () => [
		R,
		H,
		V
	], N = () => [
		L,
		"full",
		...x()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [B],
			breakpoint: [B],
			color: [gt],
			container: [B],
			"drop-shadow": [B],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [xt],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [B],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [B],
			shadow: [B],
			spacing: ["px", R],
			text: [B],
			"text-shadow": [B],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				L,
				V,
				H,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				H,
				V
			] }],
			"container-named": [St],
			columns: [{ columns: [
				R,
				V,
				H,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: ee() }],
			overflow: [{ overflow: te() }],
			"overflow-x": [{ "overflow-x": te() }],
			"overflow-y": [{ "overflow-y": te() }],
			overscroll: [{ overscroll: ne() }],
			"overscroll-x": [{ "overscroll-x": ne() }],
			"overscroll-y": [{ "overscroll-y": ne() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: S() }],
			"inset-x": [{ "inset-x": S() }],
			"inset-y": [{ "inset-y": S() }],
			start: [{
				"inset-s": S(),
				start: S()
			}],
			end: [{
				"inset-e": S(),
				end: S()
			}],
			"inset-bs": [{ "inset-bs": S() }],
			"inset-be": [{ "inset-be": S() }],
			top: [{ top: S() }],
			right: [{ right: S() }],
			bottom: [{ bottom: S() }],
			left: [{ left: S() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				z,
				"auto",
				H,
				V
			] }],
			basis: [{ basis: [
				L,
				"full",
				"auto",
				s,
				...x()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				R,
				L,
				"auto",
				"initial",
				"none",
				V
			] }],
			grow: [{ grow: [
				"",
				R,
				H,
				V
			] }],
			shrink: [{ shrink: [
				"",
				R,
				H,
				V
			] }],
			order: [{ order: [
				z,
				"first",
				"last",
				"none",
				H,
				V
			] }],
			"grid-cols": [{ "grid-cols": re() }],
			"col-start-end": [{ col: ie() }],
			"col-start": [{ "col-start": ae() }],
			"col-end": [{ "col-end": ae() }],
			"grid-rows": [{ "grid-rows": re() }],
			"row-start-end": [{ row: ie() }],
			"row-start": [{ "row-start": ae() }],
			"row-end": [{ "row-end": ae() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": oe() }],
			"auto-rows": [{ "auto-rows": oe() }],
			gap: [{ gap: x() }],
			"gap-x": [{ "gap-x": x() }],
			"gap-y": [{ "gap-y": x() }],
			"justify-content": [{ justify: [...se(), "normal"] }],
			"justify-items": [{ "justify-items": [...C(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...C()] }],
			"align-content": [{ content: ["normal", ...se()] }],
			"align-items": [{ items: [...C(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...C(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": se() }],
			"place-items": [{ "place-items": [...C(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...C()] }],
			p: [{ p: x() }],
			px: [{ px: x() }],
			py: [{ py: x() }],
			ps: [{ ps: x() }],
			pe: [{ pe: x() }],
			pbs: [{ pbs: x() }],
			pbe: [{ pbe: x() }],
			pt: [{ pt: x() }],
			pr: [{ pr: x() }],
			pb: [{ pb: x() }],
			pl: [{ pl: x() }],
			m: [{ m: w() }],
			mx: [{ mx: w() }],
			my: [{ my: w() }],
			ms: [{ ms: w() }],
			me: [{ me: w() }],
			mbs: [{ mbs: w() }],
			mbe: [{ mbe: w() }],
			mt: [{ mt: w() }],
			mr: [{ mr: w() }],
			mb: [{ mb: w() }],
			ml: [{ ml: w() }],
			"space-x": [{ "space-x": x() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": x() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: T() }],
			"inline-size": [{ inline: ["auto", ...E()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...E()] }],
			"max-inline-size": [{ "max-inline": ["none", ...E()] }],
			"block-size": [{ block: ["auto", ...ce()] }],
			"min-block-size": [{ "min-block": ["auto", ...ce()] }],
			"max-block-size": [{ "max-block": ["none", ...ce()] }],
			w: [{ w: [
				s,
				"screen",
				...T()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...T()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...T()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...T()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...T()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...T()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				jt,
				wt
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Lt,
				Et
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				ht,
				V
			] }],
			"font-family": [{ font: [
				Mt,
				Dt,
				t
			] }],
			"font-features": [{ "font-features": [V] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				H,
				V
			] }],
			"line-clamp": [{ "line-clamp": [
				R,
				"none",
				H,
				Tt
			] }],
			leading: [{ leading: [a, ...x()] }],
			"list-image": [{ "list-image": [
				"none",
				H,
				V
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				H,
				V
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: D() }],
			"text-color": [{ text: D() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...j(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				R,
				"from-font",
				"auto",
				H,
				wt
			] }],
			"text-decoration-color": [{ decoration: D() }],
			"underline-offset": [{ "underline-offset": [
				R,
				"auto",
				H,
				V
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: x() }],
			"tab-size": [{ tab: [
				z,
				H,
				V
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				H,
				V
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				H,
				V
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: O() }],
			"bg-repeat": [{ bg: le() }],
			"bg-size": [{ bg: ue() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						z,
						H,
						V
					],
					radial: [
						"",
						H,
						V
					],
					conic: [
						z,
						H,
						V
					]
				},
				Ft,
				kt
			] }],
			"bg-color": [{ bg: D() }],
			"gradient-from-pos": [{ from: de() }],
			"gradient-via-pos": [{ via: de() }],
			"gradient-to-pos": [{ to: de() }],
			"gradient-from": [{ from: D() }],
			"gradient-via": [{ via: D() }],
			"gradient-to": [{ to: D() }],
			rounded: [{ rounded: k() }],
			"rounded-s": [{ "rounded-s": k() }],
			"rounded-e": [{ "rounded-e": k() }],
			"rounded-t": [{ "rounded-t": k() }],
			"rounded-r": [{ "rounded-r": k() }],
			"rounded-b": [{ "rounded-b": k() }],
			"rounded-l": [{ "rounded-l": k() }],
			"rounded-ss": [{ "rounded-ss": k() }],
			"rounded-se": [{ "rounded-se": k() }],
			"rounded-ee": [{ "rounded-ee": k() }],
			"rounded-es": [{ "rounded-es": k() }],
			"rounded-tl": [{ "rounded-tl": k() }],
			"rounded-tr": [{ "rounded-tr": k() }],
			"rounded-br": [{ "rounded-br": k() }],
			"rounded-bl": [{ "rounded-bl": k() }],
			"border-w": [{ border: A() }],
			"border-w-x": [{ "border-x": A() }],
			"border-w-y": [{ "border-y": A() }],
			"border-w-s": [{ "border-s": A() }],
			"border-w-e": [{ "border-e": A() }],
			"border-w-bs": [{ "border-bs": A() }],
			"border-w-be": [{ "border-be": A() }],
			"border-w-t": [{ "border-t": A() }],
			"border-w-r": [{ "border-r": A() }],
			"border-w-b": [{ "border-b": A() }],
			"border-w-l": [{ "border-l": A() }],
			"divide-x": [{ "divide-x": A() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": A() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...j(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...j(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: D() }],
			"border-color-x": [{ "border-x": D() }],
			"border-color-y": [{ "border-y": D() }],
			"border-color-s": [{ "border-s": D() }],
			"border-color-e": [{ "border-e": D() }],
			"border-color-bs": [{ "border-bs": D() }],
			"border-color-be": [{ "border-be": D() }],
			"border-color-t": [{ "border-t": D() }],
			"border-color-r": [{ "border-r": D() }],
			"border-color-b": [{ "border-b": D() }],
			"border-color-l": [{ "border-l": D() }],
			"divide-color": [{ divide: D() }],
			"outline-style": [{ outline: [
				...j(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				R,
				H,
				V
			] }],
			"outline-w": [{ outline: [
				"",
				R,
				jt,
				wt
			] }],
			"outline-color": [{ outline: D() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				It,
				At
			] }],
			"shadow-color": [{ shadow: D() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				It,
				At
			] }],
			"inset-shadow-color": [{ "inset-shadow": D() }],
			"ring-w": [{ ring: A() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: D() }],
			"ring-offset-w": [{ "ring-offset": [R, wt] }],
			"ring-offset-color": [{ "ring-offset": D() }],
			"inset-ring-w": [{ "inset-ring": A() }],
			"inset-ring-color": [{ "inset-ring": D() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				It,
				At
			] }],
			"text-shadow-color": [{ "text-shadow": D() }],
			opacity: [{ opacity: [
				R,
				H,
				V
			] }],
			"mix-blend": [{ "mix-blend": [
				...fe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": fe() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [R] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": M() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": D() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": D() }],
			"mask-image-t-from-pos": [{ "mask-t-from": M() }],
			"mask-image-t-to-pos": [{ "mask-t-to": M() }],
			"mask-image-t-from-color": [{ "mask-t-from": D() }],
			"mask-image-t-to-color": [{ "mask-t-to": D() }],
			"mask-image-r-from-pos": [{ "mask-r-from": M() }],
			"mask-image-r-to-pos": [{ "mask-r-to": M() }],
			"mask-image-r-from-color": [{ "mask-r-from": D() }],
			"mask-image-r-to-color": [{ "mask-r-to": D() }],
			"mask-image-b-from-pos": [{ "mask-b-from": M() }],
			"mask-image-b-to-pos": [{ "mask-b-to": M() }],
			"mask-image-b-from-color": [{ "mask-b-from": D() }],
			"mask-image-b-to-color": [{ "mask-b-to": D() }],
			"mask-image-l-from-pos": [{ "mask-l-from": M() }],
			"mask-image-l-to-pos": [{ "mask-l-to": M() }],
			"mask-image-l-from-color": [{ "mask-l-from": D() }],
			"mask-image-l-to-color": [{ "mask-l-to": D() }],
			"mask-image-x-from-pos": [{ "mask-x-from": M() }],
			"mask-image-x-to-pos": [{ "mask-x-to": M() }],
			"mask-image-x-from-color": [{ "mask-x-from": D() }],
			"mask-image-x-to-color": [{ "mask-x-to": D() }],
			"mask-image-y-from-pos": [{ "mask-y-from": M() }],
			"mask-image-y-to-pos": [{ "mask-y-to": M() }],
			"mask-image-y-from-color": [{ "mask-y-from": D() }],
			"mask-image-y-to-color": [{ "mask-y-to": D() }],
			"mask-image-radial": [{ "mask-radial": [H, V] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": M() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": D() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": D() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [R] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": M() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": D() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": D() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: O() }],
			"mask-repeat": [{ mask: le() }],
			"mask-size": [{ mask: ue() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				H,
				V
			] }],
			filter: [{ filter: [
				"",
				"none",
				H,
				V
			] }],
			blur: [{ blur: pe() }],
			brightness: [{ brightness: [
				R,
				H,
				V
			] }],
			contrast: [{ contrast: [
				R,
				H,
				V
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				It,
				At
			] }],
			"drop-shadow-color": [{ "drop-shadow": D() }],
			grayscale: [{ grayscale: [
				"",
				R,
				H,
				V
			] }],
			"hue-rotate": [{ "hue-rotate": [
				R,
				H,
				V
			] }],
			invert: [{ invert: [
				"",
				R,
				H,
				V
			] }],
			saturate: [{ saturate: [
				R,
				H,
				V
			] }],
			sepia: [{ sepia: [
				"",
				R,
				H,
				V
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				H,
				V
			] }],
			"backdrop-blur": [{ "backdrop-blur": pe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				R,
				H,
				V
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				R,
				H,
				V
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				R,
				H,
				V
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				R,
				H,
				V
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				R,
				H,
				V
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				R,
				H,
				V
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				R,
				H,
				V
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				R,
				H,
				V
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": x() }],
			"border-spacing-x": [{ "border-spacing-x": x() }],
			"border-spacing-y": [{ "border-spacing-y": x() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				H,
				V
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				R,
				"initial",
				H,
				V
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				H,
				V
			] }],
			delay: [{ delay: [
				R,
				H,
				V
			] }],
			animate: [{ animate: [
				"none",
				v,
				H,
				V
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				H,
				V
			] }],
			"perspective-origin": [{ "perspective-origin": ee() }],
			rotate: [{ rotate: me() }],
			"rotate-x": [{ "rotate-x": me() }],
			"rotate-y": [{ "rotate-y": me() }],
			"rotate-z": [{ "rotate-z": me() }],
			scale: [{ scale: he() }],
			"scale-x": [{ "scale-x": he() }],
			"scale-y": [{ "scale-y": he() }],
			"scale-z": [{ "scale-z": he() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ge() }],
			"skew-x": [{ "skew-x": ge() }],
			"skew-y": [{ "skew-y": ge() }],
			transform: [{ transform: [
				H,
				V,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: ee() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: N() }],
			"translate-x": [{ "translate-x": N() }],
			"translate-y": [{ "translate-y": N() }],
			"translate-z": [{ "translate-z": N() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				z,
				H,
				V
			] }],
			accent: [{ accent: D() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: D() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				H,
				V
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": D() }],
			"scrollbar-track-color": [{ "scrollbar-track": D() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": x() }],
			"scroll-mx": [{ "scroll-mx": x() }],
			"scroll-my": [{ "scroll-my": x() }],
			"scroll-ms": [{ "scroll-ms": x() }],
			"scroll-me": [{ "scroll-me": x() }],
			"scroll-mbs": [{ "scroll-mbs": x() }],
			"scroll-mbe": [{ "scroll-mbe": x() }],
			"scroll-mt": [{ "scroll-mt": x() }],
			"scroll-mr": [{ "scroll-mr": x() }],
			"scroll-mb": [{ "scroll-mb": x() }],
			"scroll-ml": [{ "scroll-ml": x() }],
			"scroll-p": [{ "scroll-p": x() }],
			"scroll-px": [{ "scroll-px": x() }],
			"scroll-py": [{ "scroll-py": x() }],
			"scroll-ps": [{ "scroll-ps": x() }],
			"scroll-pe": [{ "scroll-pe": x() }],
			"scroll-pbs": [{ "scroll-pbs": x() }],
			"scroll-pbe": [{ "scroll-pbe": x() }],
			"scroll-pt": [{ "scroll-pt": x() }],
			"scroll-pr": [{ "scroll-pr": x() }],
			"scroll-pb": [{ "scroll-pb": x() }],
			"scroll-pl": [{ "scroll-pl": x() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				H,
				V
			] }],
			fill: [{ fill: ["none", ...D()] }],
			"stroke-w": [{ stroke: [
				R,
				jt,
				wt,
				Tt
			] }],
			stroke: [{ stroke: ["none", ...D()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/cn.ts
function W(...e) {
	return qt(De(e));
}
//#endregion
//#region src/components/brand.tsx
var Jt = {
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
function Yt({ className: e, title: t = "MoonWitness", ...n }) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 128 128",
		role: "img",
		"aria-label": t,
		className: W("shrink-0", e),
		...n,
		children: /* @__PURE__ */ u("g", {
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ l("circle", {
					cx: "64",
					cy: "64",
					r: "51",
					stroke: "var(--mw-text-primary)",
					strokeWidth: "3",
					opacity: ".92"
				}),
				/* @__PURE__ */ l("path", {
					d: "M62 14A50 50 0 1 0 62 114C42 103 30 85 30 64S42 25 62 14Z",
					fill: "var(--mw-text-primary)"
				}),
				/* @__PURE__ */ l("path", {
					d: "M25 64C38 46 52 38 64 38s26 8 39 26C90 82 76 90 64 90S38 82 25 64Z",
					stroke: "var(--mw-surface-page)",
					strokeWidth: "5"
				}),
				/* @__PURE__ */ l("circle", {
					cx: "64",
					cy: "64",
					r: "12",
					fill: "var(--mw-surface-page)"
				}),
				/* @__PURE__ */ l("path", {
					d: "M64 34l7 23 23 7-23 7-7 23-7-23-23-7 23-7Z",
					fill: "var(--mw-brand-crimson)"
				}),
				/* @__PURE__ */ l("path", {
					d: "M64 8v21M64 99v21M8 64h17M103 64h17",
					stroke: "var(--mw-text-primary)",
					strokeWidth: "2"
				})
			]
		})
	});
}
function Xt({ compact: e = !1, ecosystem: t = !1, subtitle: n = b.tagline, className: r }) {
	return /* @__PURE__ */ u("span", {
		className: W("inline-flex items-center gap-3", r),
		children: [/* @__PURE__ */ l(Yt, { className: e ? "size-8" : "size-10" }), e ? null : /* @__PURE__ */ u("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ u("span", {
				className: "mw-display block text-base font-black tracking-tight",
				children: [
					"MOON",
					/* @__PURE__ */ l("span", {
						className: "text-primary",
						children: "WITNESS"
					}),
					t ? /* @__PURE__ */ l("span", {
						className: "ml-2 text-muted-foreground",
						children: "× ROCKSOUL"
					}) : null
				]
			}), /* @__PURE__ */ l("span", {
				className: "mw-meta block truncate text-muted-foreground",
				children: n
			})]
		})]
	});
}
//#endregion
//#region src/components/asset-provider.tsx
var Zt = "/assets", Qt = e(Zt);
function $t(e) {
	return e.replace(/\/+$/, "");
}
function en({ baseUrl: e = Zt, children: t }) {
	return /* @__PURE__ */ l(Qt.Provider, {
		value: $t(e),
		children: t
	});
}
function tn() {
	return n(Qt);
}
function nn(e, t, n) {
	return `${$t(e)}/${me(t, n)}`;
}
function rn({ pack: e, file: t, alt: n, ...r }) {
	let i = tn();
	return /* @__PURE__ */ l("img", {
		src: nn(i, e, t),
		alt: n,
		...r
	});
}
function an({ pack: e, assetId: t, format: n = "svg", size: r, baseUrl: i = O, rootMode: a = "repository", alt: o, ...s }) {
	let c = j(e, t, {
		format: n,
		size: r,
		baseUrl: i,
		rootMode: a
	});
	return c ? /* @__PURE__ */ l("img", {
		src: c,
		alt: o,
		...s
	}) : null;
}
function on({ status: e, label: t = e, className: n }) {
	return /* @__PURE__ */ u("span", {
		className: n,
		children: [/* @__PURE__ */ l(rn, {
			pack: "badge-status",
			file: `svg/${e}.svg`,
			alt: "",
			"aria-hidden": "true"
		}), /* @__PURE__ */ l("span", {
			className: "sr-only",
			children: t
		})]
	});
}
function sn({ alt: e = "Person", className: t }) {
	return /* @__PURE__ */ l(an, {
		pack: "product-icons",
		assetId: "person",
		alt: e,
		className: t
	});
}
function cn({ persona: e, alt: t, className: n }) {
	return /* @__PURE__ */ l(rn, {
		pack: "persona-avatar",
		file: `svg/${e}.svg`,
		alt: t,
		className: n
	});
}
function ln({ enabled: e = !1, volume: n = .35, format: r = "ogg" } = {}) {
	let i = tn();
	return t((t) => {
		if (!e || typeof Audio > "u") return;
		let a = `${$t(i)}/sfx/generated/${t}.${r}`, o = new Audio(a);
		o.volume = Math.max(0, Math.min(1, n)), o.play().catch(() => void 0);
	}, [
		i,
		e,
		r,
		n
	]);
}
var un = {
	localMirrorBase: Zt,
	registryRepositoryBase: O,
	packCount: Object.keys(fe).length,
	preferSvgInProductUi: !0,
	rasterIsDerivative: !0,
	runtimeMotionFormats: [
		"svg",
		"apng",
		"webm",
		"lottie"
	],
	sfxOptInOnly: !0
}, dn = [
	"source-linked",
	"discussion-thread",
	"proposal-review",
	"identity-bridge",
	"saved-case",
	"notification",
	"moderation-history",
	"attributed-reply"
];
function fn({ asset: e, alt: t, ...n }) {
	return /* @__PURE__ */ l(an, {
		pack: "community-participation",
		assetId: e,
		alt: t,
		...n
	});
}
function pn({ source: e, className: t }) {
	let n = T(e);
	return n ? n.href ? /* @__PURE__ */ u("a", {
		className: t,
		href: n.href,
		target: "_blank",
		rel: "noreferrer",
		children: [
			n.source,
			" ",
			/* @__PURE__ */ l("span", {
				"aria-hidden": "true",
				children: "↗"
			})
		]
	}) : /* @__PURE__ */ l("code", {
		className: t,
		children: n.source
	}) : /* @__PURE__ */ l("span", {
		className: t,
		children: "No source attached"
	});
}
//#endregion
//#region src/components/runtime-motion.tsx
var mn = [
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
], hn = "/assets/runtime-motion-pack";
function gn(e, t, n = hn) {
	let r = n.replace(/\/+$/, "");
	return t === "apng" ? `${r}/png/${e}.png` : t === "lottie" ? `${r}/lottie/${e}.json` : `${r}/${t}/${e}.${t}`;
}
function _n() {
	let [e, t] = s(!1);
	return r(() => {
		if (typeof window > "u" || !window.matchMedia) return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => t(e.matches);
		return n(), e.addEventListener?.("change", n), () => e.removeEventListener?.("change", n);
	}, []), e;
}
function vn({ id: e, format: t = "webm", alt: n, baseUrl: r = hn, className: i, reducedMotionFallback: a, ...o }) {
	if (_n()) return /* @__PURE__ */ l("span", {
		className: i,
		role: "img",
		"aria-label": n,
		"data-reduced-motion": "true",
		...o,
		children: a ?? /* @__PURE__ */ l("span", {
			className: "mw-meta text-muted-foreground",
			children: n
		})
	});
	let s = gn(e, t, r);
	return t === "webm" ? /* @__PURE__ */ l("video", {
		className: i,
		src: s,
		"aria-label": n,
		autoPlay: !0,
		loop: !0,
		muted: !0,
		playsInline: !0,
		...o
	}) : /* @__PURE__ */ l("img", {
		className: i,
		src: s,
		alt: n,
		...o
	});
}
//#endregion
//#region src/components/cinematic-web-hero.tsx
var yn = [
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
function bn({ assets: e = be, eyebrow: t = /* @__PURE__ */ u(c, { children: [
	"REAL STORIES.",
	/* @__PURE__ */ l("br", {}),
	"PERSISTENT TRACES.",
	/* @__PURE__ */ l("br", {}),
	"A WIDER TOMORROW."
] }), title: n = ["WHERE MYTH", "FADES TO LEGEND"], intro: r = /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("p", { children: [
	"Some stories sound impossible.",
	/* @__PURE__ */ l("br", {}),
	"Some sound way too familiar.",
	/* @__PURE__ */ l("br", {}),
	"The weird part? Sometimes the traces keep coming back."
] }), /* @__PURE__ */ u("p", { children: [
	"MoonWitness follows what remains.",
	/* @__PURE__ */ l("br", {}),
	"No hype. No forced conclusion.",
	/* @__PURE__ */ l("br", {}),
	"Just records, connections, and whatever survives the cross-check."
] })] }), action: a = /* @__PURE__ */ u("a", {
	className: "mw-cinematic-web-hero__cta",
	href: "#case",
	children: ["ENTER THE CASE ", /* @__PURE__ */ l("span", {
		"aria-hidden": "true",
		children: "→"
	})]
}), caseIndex: o = /* @__PURE__ */ l(c, { children: "MW / ARCHIVE / CASE 0001 — ∞" }), evidence: s = yn, archive: d, coordinates: f = ["35.6762° N", "139.6503° E"], witnessCaption: p = /* @__PURE__ */ u(c, { children: [
	"ROCKSOUL —",
	/* @__PURE__ */ l("br", {}),
	"THE WITNESS IN MOTION"
] }), footerCenter: m = /* @__PURE__ */ l(c, { children: "CATALOGING THE UNEXPLAINED SINCE NOW" }), footerRight: h = /* @__PURE__ */ l(c, { children: "A MORE CURIOUS TOMORROW" }), footerMark: g = /* @__PURE__ */ l("b", {
	"aria-hidden": "true",
	children: "◕◕◯"
}), id: _, archiveId: v, className: y = "" }) {
	let b = `${i()}-cinematic-title`, ee = d ?? [
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
	], te = {
		"--mw-hero-grid": `url("${e.grid}")`,
		"--mw-hero-grain": `url("${e.grain}")`,
		"--mw-hero-scanlines": `url("${e.scanlines}")`
	};
	return /* @__PURE__ */ u("section", {
		id: _,
		className: `mw-cinematic-web-hero ${y}`.trim(),
		style: te,
		"aria-labelledby": b,
		children: [
			/* @__PURE__ */ u("picture", {
				className: "mw-cinematic-web-hero__master",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ l("source", {
					media: "(max-width: 700px)",
					srcSet: e.mobile
				}), /* @__PURE__ */ l("img", {
					src: e.desktop,
					alt: "",
					width: 2880,
					height: 1620,
					loading: "eager",
					decoding: "async",
					fetchPriority: "high"
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "mw-cinematic-web-hero__grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ l("div", {
				className: "mw-cinematic-web-hero__texture",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-cinematic-web-hero__content",
				children: [
					/* @__PURE__ */ u("div", {
						className: "mw-cinematic-web-hero__eyebrow",
						children: [/* @__PURE__ */ l("i", { "aria-hidden": "true" }), t]
					}),
					/* @__PURE__ */ u("h1", {
						id: b,
						children: [/* @__PURE__ */ l("span", { children: n[0] }), /* @__PURE__ */ l("span", { children: n[1] })]
					}),
					/* @__PURE__ */ l("div", {
						className: "mw-cinematic-web-hero__intro",
						children: r
					}),
					/* @__PURE__ */ u("div", {
						className: "mw-cinematic-web-hero__actions",
						children: [a, /* @__PURE__ */ l("span", {
							className: "mw-cinematic-web-hero__case-index",
							children: o
						})]
					})
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-cinematic-web-hero__evidence",
				role: "group",
				"aria-label": "Cross-domain evidence map",
				children: [
					/* @__PURE__ */ u("span", {
						className: "mw-cinematic-web-hero__note mw-cinematic-web-hero__note--sky",
						children: [
							"SAME SKY.",
							/* @__PURE__ */ l("br", {}),
							"DIFFERENT QUESTIONS."
						]
					}),
					/* @__PURE__ */ u("svg", {
						viewBox: "0 0 360 360",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ l("path", { d: "M180 44 315 180 180 316 44 180Z" }),
							/* @__PURE__ */ l("path", { d: "M180 44V316M44 180H315" }),
							/* @__PURE__ */ l("circle", {
								cx: "180",
								cy: "180",
								r: "3"
							})
						]
					}),
					s.map((e, t) => /* @__PURE__ */ u("span", {
						className: `mw-cinematic-web-hero__node mw-cinematic-web-hero__node--${t + 1}`,
						children: [/* @__PURE__ */ l("b", {
							"aria-hidden": "true",
							children: e.marker
						}), e.id]
					}, e.id)),
					/* @__PURE__ */ l("span", {
						className: "sr-only",
						children: "Evidence graph connects STORY, EVENT, PERSON, and RGBL for investigation. A visible connection is not a claim of causation."
					}),
					/* @__PURE__ */ u("span", {
						className: "mw-cinematic-web-hero__note mw-cinematic-web-hero__note--trace",
						children: [
							"TRACES CONNECT.",
							/* @__PURE__ */ l("br", {}),
							"PEOPLE. PLACES.",
							/* @__PURE__ */ l("br", {}),
							"PATTERNS REPEAT."
						]
					})
				]
			}),
			/* @__PURE__ */ u("aside", {
				className: "mw-cinematic-web-hero__witness",
				children: [
					/* @__PURE__ */ l("i", { "aria-hidden": "true" }),
					/* @__PURE__ */ l("strong", { children: p }),
					/* @__PURE__ */ l("hr", {}),
					"SOMEWHERE",
					/* @__PURE__ */ l("br", {}),
					"BETWEEN HERE",
					/* @__PURE__ */ l("br", {}),
					"AND ELSEWHERE."
				]
			}),
			/* @__PURE__ */ u("aside", {
				className: "mw-cinematic-web-hero__coordinates",
				children: [
					f[0],
					/* @__PURE__ */ l("br", {}),
					f[1],
					/* @__PURE__ */ l("hr", {}),
					"SAME PLANET.",
					/* @__PURE__ */ l("br", {}),
					"MORE TO SEE."
				]
			}),
			/* @__PURE__ */ l("div", {
				id: v,
				className: "mw-cinematic-web-hero__archive",
				"aria-label": "Archive contact sheet",
				tabIndex: 0,
				children: ee.map((e) => /* @__PURE__ */ u("figure", { children: [
					/* @__PURE__ */ l("img", {
						src: e.src,
						alt: "",
						"aria-hidden": "true",
						loading: "lazy"
					}),
					/* @__PURE__ */ l("figcaption", { children: e.label }),
					/* @__PURE__ */ l("small", { children: e.code })
				] }, e.code))
			}),
			/* @__PURE__ */ u("footer", {
				className: "mw-cinematic-web-hero__footer",
				children: [
					/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("i", { "aria-hidden": "true" }), "01 / INDEPENDENT OBSERVATORY"] }),
					/* @__PURE__ */ l("span", { children: m }),
					/* @__PURE__ */ u("span", { children: [
						h,
						" ",
						g
					] })
				]
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var xn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Sn = De, Cn = (e, t) => (n) => {
	if (t?.variants == null) return Sn(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = xn(t) || xn(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Sn(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, wn = Cn("relative inline-flex min-h-11 items-center justify-center gap-2 rounded-none border font-mono text-[10px] font-bold uppercase tracking-[0.1em] transition-[background-color,border-color,color,opacity,transform] duration-[var(--mw-motion-fast)] ease-[var(--mw-ease-standard)] active:translate-y-px disabled:pointer-events-none disabled:opacity-45", {
	variants: {
		variant: {
			primary: "border-primary bg-primary text-white hover:bg-[var(--mw-brand-crimson-dark)]",
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
function G({ className: e, variant: t, size: n, loading: r = !1, disabled: i, leading: a, trailing: o, children: s, type: c = "button", ...d }) {
	return /* @__PURE__ */ u("button", {
		type: c,
		className: W(wn({
			variant: t,
			size: n
		}), e),
		disabled: i || r,
		"aria-busy": r || void 0,
		...d,
		children: [
			a ? /* @__PURE__ */ l("span", {
				"aria-hidden": "true",
				children: a
			}) : null,
			/* @__PURE__ */ l("span", {
				className: W(r && "invisible"),
				children: s
			}),
			o ? /* @__PURE__ */ l("span", {
				"aria-hidden": "true",
				children: o
			}) : null,
			r ? /* @__PURE__ */ l("span", {
				className: "absolute inset-0 flex items-center justify-center",
				"aria-hidden": "true",
				children: "···"
			}) : null
		]
	});
}
//#endregion
//#region src/components/overlays.tsx
function Tn({ label: e, children: t, variant: n = "outline", size: r = "md", loading: i = !1, disabled: a, className: o, type: s = "button", ...c }) {
	return /* @__PURE__ */ u("button", {
		type: s,
		"aria-label": e,
		title: e,
		"aria-busy": i || void 0,
		disabled: a || i,
		className: W("relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border transition-colors disabled:pointer-events-none disabled:opacity-45", r === "lg" ? "p-3" : r === "sm" ? "p-2" : "p-2.5", n === "ghost" && "border-transparent bg-transparent hover:bg-panel", n === "outline" && "border-border bg-card hover:border-border-strong hover:bg-panel", n === "danger" && "border-primary bg-transparent text-primary hover:bg-primary/10", o),
		...c,
		children: [/* @__PURE__ */ l("span", {
			className: W(i && "invisible"),
			children: t
		}), i ? /* @__PURE__ */ l("span", {
			className: "absolute inset-0 flex items-center justify-center",
			"aria-hidden": "true",
			children: "···"
		}) : null]
	});
}
function En({ label: e, children: t, shortcut: n }) {
	let r = i();
	return /* @__PURE__ */ u("span", {
		className: "group relative inline-flex",
		children: [/* @__PURE__ */ l("span", {
			"aria-describedby": r,
			children: t
		}), /* @__PURE__ */ u("span", {
			id: r,
			role: "tooltip",
			className: "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 hidden -translate-x-1/2 whitespace-nowrap border border-border bg-overlay px-2 py-1 text-xs text-foreground group-focus-within:block group-hover:block",
			children: [e, n ? /* @__PURE__ */ l("span", {
				className: "ml-2 font-mono text-[10px] text-muted-foreground",
				children: n
			}) : null]
		})]
	});
}
function Dn({ open: e, title: t, children: n, onClose: a, size: s = "md", actions: c }) {
	let d = o(null), f = o(null), p = i();
	return r(() => {
		let t = d.current;
		t && (e && !t.open ? (f.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, t.showModal()) : !e && t.open && t.close());
	}, [e]), /* @__PURE__ */ u("dialog", {
		ref: d,
		"aria-labelledby": p,
		className: W("rounded-none border border-border bg-card p-0 text-foreground backdrop:bg-black/70", s === "sm" && "w-[min(92vw,420px)]", s === "md" && "w-[min(92vw,640px)]", s === "lg" && "w-[min(94vw,960px)]"),
		onCancel: (e) => {
			e.preventDefault(), a();
		},
		onClose: () => f.current?.focus(),
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center justify-between border-b border-border p-4",
				children: [/* @__PURE__ */ l("h2", {
					id: p,
					className: "text-lg font-bold",
					children: t
				}), /* @__PURE__ */ l(Tn, {
					label: "Close dialog",
					variant: "ghost",
					onClick: a,
					children: "×"
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "p-5",
				children: n
			}),
			c ? /* @__PURE__ */ l("div", {
				className: "flex flex-wrap justify-end gap-2 border-t border-border p-4",
				children: c
			}) : null
		]
	});
}
function On({ open: e, title: t, children: n, onClose: a, position: s = "right", footer: c }) {
	let d = o(null), f = o(null), p = i();
	return r(() => {
		let t = d.current;
		t && (e && !t.open && (f.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, t.showModal()), !e && t.open && t.close());
	}, [e]), /* @__PURE__ */ u("dialog", {
		ref: d,
		"aria-labelledby": p,
		className: W("fixed m-0 max-w-none rounded-none border-border bg-card p-0 text-foreground backdrop:bg-black/70", s === "right" && "inset-y-0 right-0 h-dvh w-[min(90vw,420px)] border-l", s === "left" && "inset-y-0 left-0 h-dvh w-[min(90vw,420px)] border-r", s === "bottom-mobile" && "inset-x-0 bottom-0 h-auto max-h-[80dvh] w-full border-t sm:inset-y-0 sm:left-auto sm:right-0 sm:h-dvh sm:w-[min(90vw,420px)] sm:border-l sm:border-t-0"),
		onCancel: (e) => {
			e.preventDefault(), a();
		},
		onClose: () => f.current?.focus(),
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex min-h-16 items-center justify-between border-b border-border px-4",
				children: [/* @__PURE__ */ l("h2", {
					id: p,
					className: "text-base font-bold",
					children: t
				}), /* @__PURE__ */ l(Tn, {
					label: "Close drawer",
					variant: "ghost",
					onClick: a,
					children: "×"
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "p-4",
				children: n
			}),
			c ? /* @__PURE__ */ l("div", {
				className: "border-t border-border p-4",
				children: c
			}) : null
		]
	});
}
function kn({ label: e, size: t = "md", src: n, status: r }) {
	let i = {
		xs: "size-6 text-[9px]",
		sm: "size-8 text-[10px]",
		md: "size-10 text-xs",
		lg: "size-12 text-sm"
	}, a = e ? e.split(/\s+/).map((e) => e[0]).join("").slice(0, 2).toUpperCase() : "?";
	return /* @__PURE__ */ u("span", {
		className: "relative inline-flex shrink-0",
		"aria-label": e ?? "Anonymous",
		children: [/* @__PURE__ */ l("span", {
			className: W("inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-panel font-mono font-bold uppercase", i[t]),
			children: n ? /* @__PURE__ */ l("img", {
				src: n,
				alt: "",
				className: "size-full object-cover"
			}) : a
		}), r ? /* @__PURE__ */ l("span", {
			className: W("absolute bottom-0 right-0 size-2.5 rounded-full border border-background", r === "online" ? "bg-success" : r === "away" ? "bg-warning" : "bg-unresolved"),
			"aria-label": r
		}) : null]
	});
}
function An({ variant: e = "default" }) {
	return /* @__PURE__ */ l("div", {
		role: "separator",
		className: W("w-full", e === "default" && "h-px bg-border", e === "soft" && "h-px bg-border opacity-50", e === "legal-boundary" && "h-0.5 bg-primary"),
		"aria-label": e === "legal-boundary" ? "AWS legal boundary" : void 0
	});
}
function jn({ variant: e = "text" }) {
	return /* @__PURE__ */ l("span", {
		className: W("block animate-pulse bg-panel motion-reduce:animate-none", {
			text: "h-4 w-full",
			card: "h-40 w-full",
			"table-row": "h-10 w-full",
			"graph-node": "size-20 rounded-full"
		}[e]),
		"aria-hidden": "true"
	});
}
//#endregion
//#region src/components/asset-explorer.tsx
var Mn = {
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
function Nn(e) {
	return Object.entries(Mn).find(([, t]) => t.includes(e))?.[0] ?? "System";
}
function Pn(e) {
	return e.replaceAll("-", " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function Fn({ baseUrl: e = O, initialCategory: t = "All", limit: n, compact: r = !1 }) {
	let [i, o] = s(t), [c, d] = s(""), [f, p] = s(null), [m, h] = s(""), [g, _] = s(r ? "compact" : "grid"), v = a(() => {
		let e = c.trim().toLowerCase(), t = Object.entries(ce.packs).filter(([t, n]) => i !== "All" && Nn(t) !== i ? !1 : !e || [
			t,
			Nn(t),
			...Object.keys(n.svg ?? {}),
			...Object.keys(n.png ?? {})
		].join(" ").toLowerCase().includes(e));
		return typeof n == "number" ? t.slice(0, n) : t;
	}, [
		i,
		n,
		c
	]), y = f ? ce.packs[f] : null, b = y ? Object.entries(y.svg ?? {}).filter(([e]) => e.toLowerCase().includes(m.trim().toLowerCase())) : [];
	return /* @__PURE__ */ u("section", {
		"aria-label": "MoonWitness asset explorer",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("p", {
					className: "mw-eyebrow text-primary",
					children: ["Asset explorer / v", ce.version]
				}), /* @__PURE__ */ u("h2", {
					className: "mt-2 text-2xl font-bold",
					children: [
						D.packCount,
						" packs / ",
						D.canonicalAssetCount,
						" canonical assets"
					]
				})] }), /* @__PURE__ */ u("div", {
					className: "flex gap-2",
					"aria-label": "Asset explorer view",
					children: [/* @__PURE__ */ l(G, {
						variant: g === "grid" ? "primary" : "secondary",
						onClick: () => _("grid"),
						children: "Grid"
					}), /* @__PURE__ */ l(G, {
						variant: g === "compact" ? "primary" : "secondary",
						onClick: () => _("compact"),
						children: "Compact"
					})]
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto]",
				children: [/* @__PURE__ */ u("label", {
					className: "grid gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ l("span", {
						className: "sr-only",
						children: "Search asset packs"
					}), /* @__PURE__ */ l("input", {
						value: c,
						onChange: (e) => d(e.target.value),
						placeholder: "Search packs or asset names…",
						className: "min-h-11 border border-border bg-card px-3 text-foreground outline-none focus:border-primary"
					})]
				}), /* @__PURE__ */ l("div", {
					className: "flex flex-wrap gap-2",
					"aria-label": "Asset categories",
					children: ["All", ...Object.keys(Mn)].map((e) => /* @__PURE__ */ l("button", {
						type: "button",
						onClick: () => o(e),
						"aria-pressed": i === e,
						className: `min-h-11 border px-3 text-xs font-bold uppercase tracking-wide ${i === e ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
						children: e
					}, e))
				})]
			}),
			/* @__PURE__ */ u("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: [v.length, " pack families shown"]
			}),
			/* @__PURE__ */ l("div", {
				className: `mt-4 grid gap-3 ${g === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`,
				children: v.map(([t, n]) => {
					let r = Object.entries(n.svg ?? {}).slice(0, g === "grid" ? 3 : 1);
					return /* @__PURE__ */ u("button", {
						type: "button",
						onClick: () => {
							p(t), h("");
						},
						className: `border border-border bg-card text-left transition hover:border-border-strong focus-visible:outline-2 focus-visible:outline-primary ${g === "grid" ? "p-4" : "grid min-h-20 grid-cols-[88px_1fr_auto] items-center gap-4 p-3"}`,
						children: [
							/* @__PURE__ */ l("span", {
								className: `flex items-center justify-center overflow-hidden bg-panel ${g === "grid" ? "min-h-36" : "h-14"}`,
								children: r.length ? r.map(([n]) => {
									let r = j(t, n, { baseUrl: e });
									return r ? /* @__PURE__ */ l("img", {
										src: r,
										alt: "",
										loading: "lazy",
										className: "max-h-24 max-w-[30%] object-contain"
									}, n) : null;
								}) : /* @__PURE__ */ l("span", {
									className: "mw-meta text-muted-foreground",
									children: t === "sfx" ? "∿" : "{ }"
								})
							}),
							/* @__PURE__ */ u("span", {
								className: g === "grid" ? "mt-4 block" : "",
								children: [/* @__PURE__ */ l("span", {
									className: "mw-meta text-primary",
									children: Nn(t)
								}), /* @__PURE__ */ l("strong", {
									className: "mt-1 block text-base",
									children: Pn(t)
								})]
							}),
							/* @__PURE__ */ l("span", {
								className: "mw-meta text-muted-foreground",
								children: n.count
							})
						]
					}, t);
				})
			}),
			v.length === 0 ? /* @__PURE__ */ u("div", {
				className: "mt-5 border border-dashed border-border p-8 text-center",
				children: [/* @__PURE__ */ l("strong", { children: "No asset packs found." }), /* @__PURE__ */ l("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Clear the search or choose another category."
				})]
			}) : null,
			/* @__PURE__ */ l(Dn, {
				open: !!f,
				title: f ? Pn(f) : "Asset pack",
				size: "lg",
				onClose: () => p(null),
				children: f && y ? /* @__PURE__ */ u("div", { children: [
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4",
						children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("p", {
							className: "mw-meta text-primary",
							children: [
								Nn(f),
								" / ",
								y.count,
								" canonical assets"
							]
						}), /* @__PURE__ */ l("p", {
							className: "mt-1 font-mono text-xs text-muted-foreground",
							children: y.manifest
						})] }), /* @__PURE__ */ l("a", {
							href: `${e.replace(/\/+$/, "")}/${y.manifest}`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center border border-border px-3 text-xs font-bold uppercase hover:border-primary",
							children: "Open manifest ↗"
						})]
					}),
					/* @__PURE__ */ u("label", {
						className: "mt-4 grid gap-2",
						children: [/* @__PURE__ */ l("span", {
							className: "mw-meta text-muted-foreground",
							children: "Filter assets"
						}), /* @__PURE__ */ l("input", {
							value: m,
							onChange: (e) => h(e.target.value),
							placeholder: "Search inside this pack…",
							className: "min-h-11 border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-4 max-h-[55vh] overflow-auto border border-border",
						children: [b.map(([t, n]) => {
							let r = j(f, t, { baseUrl: e });
							return /* @__PURE__ */ u("div", {
								className: "grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3 last:border-b-0",
								children: [
									/* @__PURE__ */ l("span", {
										className: "flex h-12 items-center justify-center bg-panel",
										children: r ? /* @__PURE__ */ l("img", {
											src: r,
											alt: "",
											loading: "lazy",
											className: "max-h-10 max-w-10"
										}) : null
									}),
									/* @__PURE__ */ u("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ l("strong", {
											className: "block text-sm",
											children: Pn(t)
										}), /* @__PURE__ */ l("span", {
											className: "block truncate font-mono text-[10px] text-muted-foreground",
											children: n
										})]
									}),
									/* @__PURE__ */ u("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ l("button", {
											type: "button",
											className: "min-h-11 border border-border px-3 text-xs font-bold",
											onClick: () => void navigator.clipboard?.writeText(n),
											children: "Copy"
										}), r ? /* @__PURE__ */ l("a", {
											className: "grid min-h-11 place-items-center border border-border px-3 text-xs font-bold",
											href: r,
											target: "_blank",
											rel: "noreferrer",
											children: "Open ↗"
										}) : null]
									})
								]
							}, t);
						}), b.length === 0 ? /* @__PURE__ */ l("p", {
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
var In = O, Ln = j;
function Rn(e) {
	return /* @__PURE__ */ l(an, { ...e });
}
var zn = {
	channel: "deprecated-stable-alias",
	registryVersion: D.version,
	packCount: D.packCount,
	canonicalAssetCount: D.canonicalAssetCount,
	defaultBaseUrl: O,
	stableByDefault: !0
}, Bn = Cn("inline-flex items-center rounded-full border font-mono font-semibold uppercase tracking-[0.08em]", {
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
function K({ className: e, variant: t, size: n, ...r }) {
	return /* @__PURE__ */ l("span", {
		className: W(Bn({
			variant: t,
			size: n
		}), e),
		...r
	});
}
//#endregion
//#region src/components/form-controls.tsx
function Vn({ id: e, label: t, helper: n, error: r, children: i }) {
	let a = r ?? n, o = a ? `${e}-message` : void 0;
	return /* @__PURE__ */ u("label", {
		htmlFor: e,
		className: "grid gap-2 text-sm",
		children: [
			/* @__PURE__ */ l("span", {
				className: "mw-meta text-muted-foreground",
				children: t
			}),
			i,
			a ? /* @__PURE__ */ l("span", {
				id: o,
				className: W("text-xs leading-5", r ? "text-primary" : "text-muted-foreground"),
				children: a
			}) : null
		]
	});
}
function q({ label: e, helper: t, error: n, variant: r = "default", size: a = "md", id: o, className: s, ...c }) {
	let d = i(), f = o ?? d;
	return /* @__PURE__ */ l(Vn, {
		id: f,
		label: e,
		helper: t,
		error: n,
		children: /* @__PURE__ */ u("div", {
			className: "relative",
			children: [r === "search" ? /* @__PURE__ */ l("span", {
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground",
				"aria-hidden": "true",
				children: "/"
			}) : null, /* @__PURE__ */ l("input", {
				id: f,
				type: r === "search" ? "search" : c.type,
				"aria-invalid": !!n || void 0,
				"aria-describedby": n || t ? `${f}-message` : void 0,
				className: W("w-full rounded-none border bg-background text-sm text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel", a === "lg" ? "min-h-12 px-4" : "min-h-11 px-3", r === "search" && "pl-8", n ? "border-primary" : "border-border", s),
				...c
			})]
		})
	});
}
function Hn({ label: e, helper: t, error: n, characterCount: a, id: o, className: c, maxLength: d, value: f, defaultValue: p, onChange: m, ...h }) {
	let g = i(), _ = o ?? g, v = typeof f == "string" ? f.length : typeof p == "string" ? p.length : 0, [y, b] = s(v);
	return r(() => {
		typeof f == "string" && b(f.length);
	}, [f]), /* @__PURE__ */ u(Vn, {
		id: _,
		label: e,
		helper: t,
		error: n,
		children: [/* @__PURE__ */ l("textarea", {
			id: _,
			maxLength: d,
			value: f,
			defaultValue: p,
			onChange: (e) => {
				b(e.currentTarget.value.length), m?.(e);
			},
			"aria-invalid": !!n || void 0,
			"aria-describedby": n || t ? `${_}-message` : void 0,
			className: W("min-h-28 w-full resize-y rounded-none border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45 read-only:bg-panel", n ? "border-primary" : "border-border", c),
			...h
		}), a && d ? /* @__PURE__ */ u("span", {
			className: "mw-meta justify-self-end text-muted-foreground",
			"aria-live": "polite",
			children: [
				y,
				"/",
				d
			]
		}) : null]
	});
}
function Un({ label: e, helper: t, error: n, options: r, id: a, className: o, ...s }) {
	let c = i(), u = a ?? c;
	return /* @__PURE__ */ l(Vn, {
		id: u,
		label: e,
		helper: t,
		error: n,
		children: /* @__PURE__ */ l("select", {
			id: u,
			"aria-invalid": !!n || void 0,
			"aria-describedby": n || t ? `${u}-message` : void 0,
			className: W("min-h-11 w-full rounded-none border bg-background px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-foreground disabled:cursor-not-allowed disabled:opacity-45", n ? "border-primary" : "border-border", o),
			...s,
			children: r.map((e) => /* @__PURE__ */ l("option", {
				value: e.value,
				children: e.label
			}, e.value))
		})
	});
}
function Wn({ label: e, description: t, indeterminate: n = !1, disabled: i, ...a }) {
	let s = o(null);
	return r(() => {
		s.current && (s.current.indeterminate = n);
	}, [n]), /* @__PURE__ */ u("label", {
		className: W("flex min-h-11 items-start gap-3 py-2", i ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ l("input", {
			ref: s,
			type: "checkbox",
			disabled: i,
			className: "mt-1 size-4 accent-[var(--mw-brand-crimson)]",
			"aria-checked": n ? "mixed" : void 0,
			...a
		}), /* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("span", {
			className: "block text-sm font-semibold",
			children: e
		}), t ? /* @__PURE__ */ l("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: t
		}) : null] })]
	});
}
function Gn({ label: e, description: t, disabled: n, ...r }) {
	return /* @__PURE__ */ u("label", {
		className: W("flex min-h-11 items-start gap-3 py-2", n ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ l("input", {
			type: "radio",
			disabled: n,
			className: "mt-1 size-4 accent-[var(--mw-brand-crimson)]",
			...r
		}), /* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("span", {
			className: "block text-sm font-semibold",
			children: e
		}), t ? /* @__PURE__ */ l("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: t
		}) : null] })]
	});
}
function Kn({ label: e, description: t, disabled: n, id: r, ...a }) {
	let o = i(), s = r ?? o;
	return /* @__PURE__ */ u("label", {
		htmlFor: s,
		className: W("flex min-h-11 items-center justify-between gap-4 py-2", n ? "cursor-not-allowed opacity-45" : "cursor-pointer"),
		children: [/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("span", {
			className: "block text-sm font-semibold",
			children: e
		}), t ? /* @__PURE__ */ l("span", {
			className: "mt-1 block text-xs leading-5 text-muted-foreground",
			children: t
		}) : null] }), /* @__PURE__ */ u("span", {
			className: "relative inline-flex h-6 w-11 items-center",
			children: [
				/* @__PURE__ */ l("input", {
					id: s,
					type: "checkbox",
					role: "switch",
					disabled: n,
					className: "peer sr-only",
					...a
				}),
				/* @__PURE__ */ l("span", { className: "absolute inset-0 border border-border-strong bg-panel peer-checked:border-primary peer-checked:bg-primary" }),
				/* @__PURE__ */ l("span", { className: "absolute left-1 size-4 bg-foreground transition-transform peer-checked:translate-x-5 peer-checked:bg-white" })
			]
		})]
	});
}
//#endregion
//#region src/components/theme-toggle.tsx
var qn = [
	"system",
	"dark",
	"light"
];
function Jn(e) {
	return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function Yn(e) {
	let t = Jn(e), n = document.documentElement;
	n.dataset.themePreference = e, n.dataset.theme = t, n.classList.toggle("light", t === "light");
}
function Xn() {
	let [e, t] = s("system"), [n, i] = s("dark");
	r(() => {
		let e = (() => {
			try {
				return window.localStorage?.getItem("mw-theme");
			} catch {
				return null;
			}
		})();
		t(e === "light" || e === "dark" || e === "system" ? e : "system");
	}, []), r(() => {
		let t = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
			Yn(e), i(Jn(e));
		};
		return n(), t.addEventListener("change", n), () => t.removeEventListener("change", n);
	}, [e]);
	let a = qn[(qn.indexOf(e) + 1) % qn.length];
	return /* @__PURE__ */ l("button", {
		type: "button",
		className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[16px] border border-border bg-background px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted",
		"aria-label": `Theme ${e}, currently ${n}. Switch to ${a}.`,
		title: `Theme: ${e} · effective: ${n}`,
		onClick: () => {
			t(a);
			try {
				window.localStorage?.setItem("mw-theme", a);
			} catch {}
		},
		children: e
	});
}
//#endregion
//#region src/components/application-shell.tsx
var Zn = {
	dashboard: "What changed, what needs attention, and what can wait.",
	cases: "Investigative case review.",
	kanban: "Move work, not evidence.",
	calendar: "Reviews, releases, and research checkpoints.",
	chat: "Case conversations and review context.",
	ai: "Ask across records while keeping citations visible.",
	resources: "AutoMenu resource descriptors and permissions.",
	profile: "Profile identity and preferences.",
	settings: "Appearance, notifications, security, and integrations."
}, Qn = {
	dashboard: "D",
	cases: "C",
	kanban: "K",
	calendar: "A",
	chat: "H",
	ai: "I",
	resources: "R",
	profile: "P",
	settings: "S"
}, $n = {
	system: "System",
	resource: "Resource",
	workspace: "Workspace",
	account: "Account"
}, er = ee.map((e) => ({
	id: e.id,
	label: e.label,
	href: e.path,
	group: $n[e.kind],
	description: Zn[e.id],
	shortcut: Qn[e.id],
	resource: "resource" in e ? e.resource : void 0,
	requiredPermission: e.permission
})), tr = te, nr = [
	"authenticated",
	"case:read",
	"review:read",
	"community:read",
	"ai:use",
	"resource:read"
];
function rr(e, t) {
	return t.includes(e.requiredPermission);
}
function ir({ items: e }) {
	return /* @__PURE__ */ l("nav", {
		"aria-label": "Breadcrumb",
		children: /* @__PURE__ */ l("ol", {
			className: "flex min-w-0 flex-wrap items-center gap-2",
			children: e.map((e, t) => /* @__PURE__ */ u("li", {
				className: "flex min-w-0 items-center gap-2",
				children: [t > 0 ? /* @__PURE__ */ l("span", {
					className: "mw-meta text-muted-foreground",
					"aria-hidden": "true",
					children: "/"
				}) : null, e.href ? /* @__PURE__ */ l(Te, {
					href: e.href,
					className: "mw-link min-h-0 truncate font-mono text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground",
					children: e.label
				}) : /* @__PURE__ */ l("span", {
					className: "truncate font-mono text-[10px] font-bold uppercase",
					children: e.label
				})]
			}, `${e.label}-${t}`))
		})
	});
}
function ar({ state: e, label: t = "Backend" }) {
	return /* @__PURE__ */ u(K, {
		variant: e === "online" ? "supported" : e === "degraded" ? "partial" : "contested",
		children: [
			t,
			": ",
			e
		]
	});
}
function or({ resources: e = er, activeId: t, compact: n = !1, permissions: r = nr, onNavigate: i }) {
	let a = e.filter((e) => rr(e, r));
	return /* @__PURE__ */ l("nav", {
		"aria-label": "Resource navigation",
		"data-mode": "AutoMenu",
		children: /* @__PURE__ */ l("div", {
			className: "grid gap-1 p-2",
			children: a.map((e) => /* @__PURE__ */ u(Te, {
				href: e.href,
				title: n ? `${e.label} — ${e.description}` : void 0,
				"aria-current": e.id === t ? "page" : void 0,
				onClick: i,
				className: W("mw-link min-h-9 w-full rounded-[8px] no-underline", n ? "justify-center px-2" : "justify-center px-2 lg:justify-start lg:px-3", e.id === t ? "bg-card font-bold text-foreground" : "text-muted-foreground hover:bg-card hover:text-foreground"),
				children: [/* @__PURE__ */ l("span", {
					className: W("mr-2 size-2 rounded-full", e.id === t ? "bg-primary" : "bg-unresolved"),
					"aria-hidden": "true"
				}), n ? /* @__PURE__ */ l("span", {
					className: "font-mono text-[9px] font-black uppercase",
					children: e.label.slice(0, 2)
				}) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("span", {
					className: "font-mono text-[9px] font-black uppercase lg:hidden",
					children: e.label.slice(0, 2)
				}), /* @__PURE__ */ l("span", {
					className: "hidden text-sm lg:inline",
					children: e.label
				})] })]
			}, e.id))
		})
	});
}
function sr({ open: e, onClose: t, notifications: n, onMarkAllRead: r }) {
	let i = N(), a = r ?? i.onMarkAllNotificationsRead;
	return /* @__PURE__ */ u(On, {
		open: e,
		title: "Notifications",
		onClose: t,
		position: "right",
		footer: /* @__PURE__ */ l(G, {
			variant: "secondary",
			onClick: t,
			children: "Close"
		}),
		children: [/* @__PURE__ */ u("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ u("p", {
				className: "mw-meta text-muted-foreground",
				children: [n.filter((e) => e.state === "unread").length, " unread"]
			}), /* @__PURE__ */ l("button", {
				type: "button",
				className: "mw-link min-h-0 font-mono text-[10px] font-bold uppercase text-primary",
				onClick: () => void a?.(),
				children: "Mark all read"
			})]
		}), /* @__PURE__ */ u("div", {
			className: "grid",
			"data-state": n.length ? "unread" : "empty",
			children: [n.length ? n.map((e) => /* @__PURE__ */ u("article", {
				className: W("border-b border-border p-4", e.state === "unread" && "bg-panel"),
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ l("strong", {
							className: "text-sm",
							children: e.title
						}), /* @__PURE__ */ l(K, {
							variant: e.state === "unread" ? "info" : "neutral",
							children: e.variant
						})]
					}),
					/* @__PURE__ */ l("p", {
						className: "mt-2 text-xs leading-5 text-muted-foreground",
						children: e.body
					}),
					/* @__PURE__ */ l("p", {
						className: "mw-meta mt-3 text-muted-foreground",
						children: e.state
					})
				]
			}, e.id)) : /* @__PURE__ */ u("div", {
				className: "p-6",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-muted-foreground",
					children: "No notifications"
				}), /* @__PURE__ */ l("p", {
					className: "mt-3 text-sm",
					children: "Nothing needs your attention."
				})]
			}), n.length ? /* @__PURE__ */ u("article", {
				className: "border-b border-border p-4",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-success",
					children: "System"
				}), /* @__PURE__ */ l("p", {
					className: "mt-2 text-xs leading-5",
					children: "All repositories synchronized."
				})]
			}) : null]
		})]
	});
}
function cr({ name: e, role: t }) {
	let n = N();
	return /* @__PURE__ */ u("details", {
		className: "relative",
		children: [/* @__PURE__ */ u("summary", {
			className: "mw-touch flex cursor-pointer list-none items-center gap-2 rounded-full border border-border bg-background px-2",
			children: [/* @__PURE__ */ l(kn, {
				label: e,
				size: "sm"
			}), /* @__PURE__ */ u("span", {
				className: "hidden text-left xl:block",
				children: [/* @__PURE__ */ l("span", {
					className: "block text-xs font-bold",
					children: e
				}), /* @__PURE__ */ l("span", {
					className: "mw-meta block text-muted-foreground",
					children: t
				})]
			})]
		}), /* @__PURE__ */ u("div", {
			className: "absolute right-0 top-[calc(100%+8px)] z-40 w-56 border border-border bg-card p-2 shadow-lg",
			children: [
				/* @__PURE__ */ l(Te, {
					href: "/profile",
					className: "mw-link w-full px-3 text-sm",
					children: "Profile"
				}),
				/* @__PURE__ */ l(Te, {
					href: "/settings",
					className: "mw-link w-full px-3 text-sm",
					children: "Settings"
				}),
				/* @__PURE__ */ l("button", {
					type: "button",
					className: "mw-link w-full px-3 text-left text-sm text-primary",
					onClick: () => void n.onSignOut?.(),
					children: "Sign out"
				})
			]
		})]
	});
}
var lr = [
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
function ur({ open: e, onClose: t, resources: n = er, permissions: r = nr, quickActions: i = lr }) {
	let [o, c] = s(""), d = a(() => {
		let e = o.trim().toLowerCase();
		return n.filter((t) => rr(t, r) && (!e || `${t.label} ${t.description}`.toLowerCase().includes(e)));
	}, [
		r,
		o,
		n
	]);
	return /* @__PURE__ */ u(Dn, {
		open: e,
		title: "Command palette / ⌘K",
		onClose: t,
		size: "lg",
		children: [
			/* @__PURE__ */ l(q, {
				label: "Search actions, resources, cases",
				variant: "search",
				size: "lg",
				value: o,
				onChange: (e) => c(e.currentTarget.value),
				placeholder: "Search actions, resources, cases…",
				autoFocus: !0
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-5 text-muted-foreground",
				children: "Quick actions"
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-3 grid border border-border",
				children: i.map((e) => /* @__PURE__ */ u(Te, {
					href: e.href,
					className: "grid min-h-13 grid-cols-[1fr_auto] items-center border-b border-border px-4 no-underline hover:bg-panel",
					onClick: t,
					children: [/* @__PURE__ */ l("span", {
						className: "text-sm font-bold",
						children: e.label
					}), /* @__PURE__ */ l("span", {
						className: "mw-meta text-muted-foreground",
						children: e.shortcut
					})]
				}, e.label))
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-5 text-muted-foreground",
				children: "Resources / Auto Menu"
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-3 grid max-h-[40vh] overflow-y-auto border border-border",
				children: [d.map((e) => /* @__PURE__ */ u(Te, {
					href: e.href,
					className: "grid min-h-14 grid-cols-[1fr_auto] gap-4 border-b border-border p-3 no-underline hover:bg-panel",
					onClick: t,
					children: [/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("span", {
						className: "block text-sm font-bold",
						children: e.label
					}), /* @__PURE__ */ l("span", {
						className: "mt-1 block text-xs text-muted-foreground",
						children: e.description
					})] }), e.shortcut ? /* @__PURE__ */ l("span", {
						className: "mw-meta self-center text-muted-foreground",
						children: e.shortcut
					}) : null]
				}, e.id)), d.length ? null : /* @__PURE__ */ l("p", {
					className: "p-5 text-sm text-muted-foreground",
					children: "No matching command."
				})]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: "↑↓ Navigate / Enter open / Esc close"
			})
		]
	});
}
function dr({ breadcrumbs: e, backendState: t, user: n, unreadCount: r, onOpenMenu: i, onOpenCommands: a, onOpenNotifications: o }) {
	return /* @__PURE__ */ l("header", {
		className: "sticky top-0 z-30 border-b border-border bg-panel/95 backdrop-blur",
		role: "banner",
		children: /* @__PURE__ */ u("div", {
			className: "flex min-h-[68px] items-center gap-3 px-3 sm:px-5 lg:px-8",
			children: [
				/* @__PURE__ */ l(Tn, {
					label: "Open navigation",
					className: "md:hidden",
					onClick: i,
					children: "≡"
				}),
				/* @__PURE__ */ l("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ l(ir, { items: e })
				}),
				/* @__PURE__ */ l("div", {
					className: "hidden sm:block",
					children: /* @__PURE__ */ l(ar, { state: t })
				}),
				/* @__PURE__ */ l(Tn, {
					label: "Open command palette",
					"aria-keyshortcuts": "Control+K Meta+K",
					onClick: a,
					children: "⌘"
				}),
				/* @__PURE__ */ l("button", {
					type: "button",
					className: "mw-touch relative inline-flex items-center justify-center rounded-full border border-border bg-background px-3 font-mono text-[10px] font-bold uppercase",
					onClick: o,
					"aria-label": `Notifications, ${r} unread`,
					children: r || 0
				}),
				/* @__PURE__ */ l(Xn, {}),
				/* @__PURE__ */ l(cr, {
					name: n.name,
					role: n.role
				})
			]
		})
	});
}
function fr({ activeResource: e, breadcrumbs: t, children: n, backendState: i = "online", user: a = {
	name: "Rocksoul",
	role: "researcher"
}, permissions: o = nr, resources: c = er, notifications: d = [], commandActions: f }) {
	let [p, m] = s(!1), [h, g] = s(!1), [_, v] = s(!1), [y, b] = s(!1), ee = d.filter((e) => e.state === "unread").length;
	return r(() => {
		let e = (e) => {
			(e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k" && (e.preventDefault(), g(!0));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, []), /* @__PURE__ */ u("div", {
		className: "mw-platform min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ l("a", {
				href: "#mw-main-content",
				className: "fixed left-3 top-3 z-50 -translate-y-20 bg-primary px-4 py-3 text-sm font-bold text-white focus:translate-y-0",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ u("div", {
				className: "flex min-h-screen",
				children: [/* @__PURE__ */ u("aside", {
					className: W("relative hidden shrink-0 border-r border-border bg-panel md:block", y ? "w-[72px]" : "w-[72px] lg:w-[220px]"),
					"data-state": y ? "compact" : "expanded",
					children: [
						/* @__PURE__ */ u("div", {
							className: "flex min-h-[112px] items-center justify-between border-b border-border px-3",
							children: [
								/* @__PURE__ */ l(Xt, {
									compact: y,
									subtitle: "APPLICATION",
									className: W(!y && "hidden lg:inline-flex")
								}),
								y ? null : /* @__PURE__ */ l(Xt, {
									compact: !0,
									className: "lg:hidden"
								}),
								/* @__PURE__ */ l(Tn, {
									label: y ? "Expand sidebar" : "Compact sidebar",
									size: "sm",
									variant: "ghost",
									className: "hidden lg:inline-flex",
									onClick: () => b((e) => !e),
									children: y ? "›" : "‹"
								})
							]
						}),
						/* @__PURE__ */ l(or, {
							resources: c,
							activeId: e,
							compact: y,
							permissions: o
						}),
						/* @__PURE__ */ u("div", {
							className: "absolute bottom-6 hidden px-4 lg:block",
							children: [/* @__PURE__ */ l("p", {
								className: "mw-meta text-muted-foreground",
								children: "CMD K / COMMAND"
							}), /* @__PURE__ */ l("p", {
								className: "mw-meta mt-3 text-muted-foreground",
								children: "AUTO MENU / LIVE"
							})]
						})
					]
				}), /* @__PURE__ */ u("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ l(dr, {
						breadcrumbs: t,
						backendState: i,
						user: a,
						unreadCount: ee,
						onOpenMenu: () => m(!0),
						onOpenCommands: () => g(!0),
						onOpenNotifications: () => v(!0)
					}), /* @__PURE__ */ l("main", {
						id: "mw-main-content",
						className: "min-w-0",
						tabIndex: -1,
						children: n
					})]
				})]
			}),
			/* @__PURE__ */ u(On, {
				open: p,
				title: "Navigation",
				onClose: () => m(!1),
				position: "left",
				children: [
					/* @__PURE__ */ l(Xt, {
						subtitle: "APPLICATION",
						className: "mb-5"
					}),
					/* @__PURE__ */ l("div", {
						className: "mb-4",
						children: /* @__PURE__ */ l(ar, { state: i })
					}),
					/* @__PURE__ */ l(or, {
						resources: c,
						activeId: e,
						permissions: o,
						onNavigate: () => m(!1)
					})
				]
			}),
			/* @__PURE__ */ l(ur, {
				open: h,
				onClose: () => g(!1),
				resources: c,
				permissions: o,
				quickActions: f
			}),
			/* @__PURE__ */ l(sr, {
				open: _,
				onClose: () => v(!1),
				notifications: d
			})
		]
	});
}
//#endregion
//#region src/components/archive-components.tsx
function pr({ caseId: e, surface: t = "web", variant: n = "auto", homeHref: a = "#top", brandLabel: o = "INDEPENDENT OBSERVATORY", navItems: c = [
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
], searchHref: d = "#search", liveLabel: f = "Live" }) {
	let [p, m] = s(!1), [h, g] = s(!1), _ = i();
	r(() => {
		if (n !== "auto") return;
		let e = () => g(window.scrollY > 24);
		return e(), window.addEventListener("scroll", e, { passive: !0 }), () => window.removeEventListener("scroll", e);
	}, [n]);
	let v = n === "auto" ? h ? "solid" : "transparent" : n, y = v === "compact-mobile";
	return /* @__PURE__ */ u("header", {
		className: W("sticky top-0 z-30 border-b backdrop-blur transition-colors", v === "solid" ? "border-border bg-background/95" : "border-transparent bg-background/80"),
		"data-state": h ? "scrolled" : "default",
		"data-variant": v,
		children: [/* @__PURE__ */ u("div", {
			className: "mw-shell-wide flex min-h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ u("a", {
					href: a,
					className: "mw-link flex-col items-start justify-center no-underline",
					children: [/* @__PURE__ */ l("span", {
						className: "text-sm font-bold",
						children: "MOONWITNESS"
					}), /* @__PURE__ */ l("span", {
						className: "mw-meta text-muted-foreground",
						children: o
					})]
				}),
				/* @__PURE__ */ u("nav", {
					"aria-label": "Primary",
					className: W("items-center", y ? "hidden" : "hidden md:flex"),
					children: [
						c.map((e) => /* @__PURE__ */ l("a", {
							href: e.href,
							className: "mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground",
							children: e.label
						}, e.label)),
						/* @__PURE__ */ l("a", {
							href: d,
							className: "mw-link px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em]",
							children: "Search"
						}),
						/* @__PURE__ */ l("span", {
							className: "mw-meta ml-2 border border-success px-2 py-1 text-success",
							children: f
						}),
						/* @__PURE__ */ l(Xn, {}),
						/* @__PURE__ */ l(kn, {
							label: t === "community" ? "Member" : "Guest",
							size: "sm"
						})
					]
				}),
				/* @__PURE__ */ u("div", {
					className: W("items-center gap-2", y ? "flex" : "flex md:hidden"),
					children: [
						e ? /* @__PURE__ */ l("span", {
							className: "mw-meta hidden text-muted-foreground sm:inline",
							children: e
						}) : null,
						/* @__PURE__ */ l("a", {
							href: d,
							className: "mw-touch inline-flex items-center justify-center border border-border px-2 font-mono text-[9px] font-bold uppercase",
							children: "Search"
						}),
						/* @__PURE__ */ l(kn, {
							label: t === "community" ? "Member" : "Guest",
							size: "sm"
						}),
						/* @__PURE__ */ l("button", {
							className: "mw-touch border border-border px-3 font-mono text-[10px] font-bold uppercase",
							type: "button",
							"aria-expanded": p,
							"aria-controls": _,
							onClick: () => m(!0),
							children: "Menu"
						})
					]
				})
			]
		}), /* @__PURE__ */ l(On, {
			open: p,
			title: "MoonWitness",
			onClose: () => m(!1),
			position: "right",
			children: /* @__PURE__ */ u("nav", {
				id: _,
				className: "grid",
				children: [[...c, {
					label: "Search",
					href: d
				}].map((e) => /* @__PURE__ */ l("a", {
					href: e.href,
					className: "mw-link border-b border-border font-mono text-xs font-bold uppercase tracking-[0.1em]",
					onClick: () => m(!1),
					children: e.label
				}, e.label)), /* @__PURE__ */ u("div", {
					className: "mt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ l("span", {
						className: "mw-meta text-success",
						children: f
					}), /* @__PURE__ */ l(Xn, {})]
				})]
			})
		})]
	});
}
var mr = {
	STORY: "text-rgbl-red-fg",
	EVENT: "text-rgbl-green-fg",
	PERSON: "text-warning",
	RGBL: "text-rgbl-blue-fg",
	AWS: "text-primary"
};
function hr({ domain: e, recordId: t, repo: n, claim: r, provenance: i, verification: a, status: o, canonical: s, selected: c, flagged: d, sourceHref: f }) {
	return /* @__PURE__ */ u("article", {
		className: W("flex min-h-72 flex-col border bg-card p-4", d ? "border-warning" : c ? "border-foreground" : "border-border"),
		"aria-label": `${e} evidence: ${o}`,
		"data-state": d ? "flagged" : c ? "selected" : "default",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ l("span", {
					className: W("mw-eyebrow", mr[e]),
					children: e
				}), /* @__PURE__ */ l(K, {
					variant: o,
					children: o
				})]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: t
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-base font-bold",
				children: r
			}),
			/* @__PURE__ */ u("dl", {
				className: "mw-meta mt-5 grid gap-2 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", {
							className: "text-muted-foreground",
							children: "Repo"
						}), /* @__PURE__ */ l("dd", { children: n })]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", {
							className: "text-muted-foreground",
							children: "Provenance"
						}), /* @__PURE__ */ l("dd", {
							className: "text-right",
							children: i
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", {
							className: "text-muted-foreground",
							children: "Verification"
						}), /* @__PURE__ */ l("dd", { children: a })]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", {
							className: "text-muted-foreground",
							children: "Canonical"
						}), /* @__PURE__ */ l("dd", { children: s ? "YES" : "NO" })]
					})
				]
			}),
			/* @__PURE__ */ l("a", {
				href: f ?? "#evidence",
				className: "mw-link mt-auto pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
				children: "Inspect source →"
			})
		]
	});
}
function gr({ repo: e, domain: t, status: n, records: r, schema: i, lastSync: a, variant: o = "public" }) {
	let s = n === "healthy" ? "supported" : n === "degraded" ? "partial" : n === "offline" ? "contested" : "info";
	return /* @__PURE__ */ u("article", {
		className: W("mw-panel", o === "platform" ? "p-3" : "p-4"),
		"data-surface": o,
		children: [/* @__PURE__ */ u("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-muted-foreground",
				children: t
			}), /* @__PURE__ */ l("h3", {
				className: W("mt-2 font-bold", o === "platform" ? "text-sm" : "text-base"),
				children: e
			})] }), /* @__PURE__ */ l(K, {
				variant: s,
				children: n
			})]
		}), /* @__PURE__ */ u("dl", {
			className: "mw-meta mt-6 grid gap-2 text-muted-foreground",
			children: [
				/* @__PURE__ */ u("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ l("dt", { children: "Records" }), /* @__PURE__ */ l("dd", {
						className: "text-foreground",
						children: r
					})]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ l("dt", { children: "Schema" }), /* @__PURE__ */ l("dd", {
						className: "text-foreground",
						children: i
					})]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ l("dt", { children: "Last sync" }), /* @__PURE__ */ l("dd", {
						className: "text-foreground",
						children: a
					})]
				})
			]
		})]
	});
}
function _r({ id: e, variant: t = "record", sourceId: n, title: r, excerpt: i, citation: a, provenance: o, verification: s }) {
	return /* @__PURE__ */ u("figure", {
		id: e,
		className: W("scroll-mt-24 border bg-card p-5", t === "legal-instrument" ? "border-primary" : "border-border"),
		children: [
			/* @__PURE__ */ u("figcaption", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ l("span", {
					className: "mw-eyebrow text-muted-foreground",
					children: n
				}), /* @__PURE__ */ l(K, {
					variant: t === "legal-instrument" ? "contested" : "info",
					children: s
				})]
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-lg font-bold",
				children: r
			}),
			/* @__PURE__ */ l("blockquote", {
				className: "mt-3 max-w-3xl text-sm leading-6 text-muted-foreground",
				children: i
			}),
			/* @__PURE__ */ u("dl", {
				className: "mw-meta mt-5 grid gap-2 border-t border-border pt-4 text-muted-foreground",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
					className: "inline",
					children: "Citation / "
				}), /* @__PURE__ */ l("dd", {
					className: "inline text-foreground",
					children: a
				})] }), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
					className: "inline",
					children: "Provenance / "
				}), /* @__PURE__ */ l("dd", {
					className: "inline text-foreground",
					children: o
				})] })]
			})
		]
	});
}
function vr({ code: e, source: t, locator: n, variant: r = "inline" }) {
	let [i, a] = s(!1), o = `${e} · ${t} · ${n}`;
	return r === "inline" ? /* @__PURE__ */ l("button", {
		type: "button",
		className: "mw-touch inline-flex items-center border-b border-border font-mono text-[10px] uppercase tracking-[0.08em] hover:border-foreground",
		onClick: () => {
			navigator.clipboard?.writeText(o), a(!0);
		},
		children: i ? "Copied" : e
	}) : /* @__PURE__ */ u("div", {
		className: W("border p-4", r === "legal" ? "border-primary bg-legal-paper text-legal-ink" : "border-border bg-card"),
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-meta",
				children: e
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm font-semibold",
				children: t
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-2 opacity-70",
				children: n
			}),
			/* @__PURE__ */ l(G, {
				className: "mt-4",
				variant: r === "legal" ? "danger" : "secondary",
				onClick: () => {
					navigator.clipboard?.writeText(o), a(!0);
				},
				children: i ? "Copied" : "Copy citation"
			})
		]
	});
}
function yr({ timestamp: e, title: t, description: n, source: r, status: i, flagged: a, variant: o = "event" }) {
	return /* @__PURE__ */ u("article", {
		className: W("grid gap-3 border-l-2 py-4 pl-4 sm:grid-cols-[120px_1fr]", a ? "border-warning" : "border-border"),
		"data-variant": o,
		"data-state": a ? "flagged" : "default",
		children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
			className: "mw-meta text-muted-foreground",
			children: e
		}), /* @__PURE__ */ u("p", {
			className: "mw-meta mt-1",
			children: [
				o,
				" · ",
				i
			]
		})] }), /* @__PURE__ */ u("div", { children: [
			/* @__PURE__ */ l("h3", {
				className: "text-sm font-bold",
				children: t
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: n
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-3 text-muted-foreground",
				children: r
			})
		] })]
	});
}
function br({ kind: e, author: t, role: n, body: r, timestamp: i, state: a = "default", replies: o = 0, actions: s }) {
	let c = e === "question" ? "info" : e === "moderator-note" ? "verified" : a === "reported" ? "contested" : "neutral";
	return a === "hidden" ? /* @__PURE__ */ u("article", {
		className: "border-b border-border py-5 opacity-70",
		"data-state": "hidden",
		children: [/* @__PURE__ */ l(K, {
			variant: "unresolved",
			children: "hidden"
		}), /* @__PURE__ */ l("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "This item is hidden by moderation."
		})]
	}) : /* @__PURE__ */ u("article", {
		className: W("border-b border-border py-5", a === "reported" && "border-l-2 border-l-primary pl-4"),
		"data-state": a,
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ l(kn, {
						label: t,
						size: "sm"
					}),
					/* @__PURE__ */ l("strong", {
						className: "text-sm",
						children: t
					}),
					/* @__PURE__ */ l(K, {
						variant: c,
						children: e
					}),
					a === "default" ? null : /* @__PURE__ */ l(K, {
						variant: a === "reported" ? "contested" : "neutral",
						children: a
					})
				]
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-4 max-w-3xl text-sm leading-6",
				children: r
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-meta mt-4 flex flex-wrap items-center gap-3 text-muted-foreground",
				children: [
					/* @__PURE__ */ u("span", { children: [
						n,
						" · ",
						i
					] }),
					/* @__PURE__ */ u("span", { children: [o, " replies"] }),
					/* @__PURE__ */ u("span", { children: ["moderation: ", a] })
				]
			}),
			s ? /* @__PURE__ */ l("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: s
			}) : null
		]
	});
}
function xr({ id: e, state: t, title: n, body: r, canonicalEvidence: i = !1, submitter: a = "community member", source: o = "provenance pending", reviewer: s = "unassigned", reviewActions: c }) {
	let d = t === "verified" ? "verified" : t === "rejected" ? "contested" : t === "needs-context" ? "partial" : t === "in-review" ? "info" : "unresolved";
	return /* @__PURE__ */ u("article", {
		className: W("border bg-card p-4", t === "needs-context" ? "border-warning" : "border-border"),
		"data-state": t,
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: e
				}), /* @__PURE__ */ l(K, {
					variant: d,
					children: t.replace("-", " ")
				})]
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-sm font-bold",
				children: n
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ u("dl", {
				className: "mw-meta mt-4 grid gap-1 border-t border-border pt-4 text-muted-foreground",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Submitter" }), /* @__PURE__ */ l("dd", {
							className: "text-foreground",
							children: a
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Source" }), /* @__PURE__ */ l("dd", {
							className: "text-right text-foreground",
							children: o
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Reviewer" }), /* @__PURE__ */ l("dd", {
							className: "text-foreground",
							children: s
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Canonical" }), /* @__PURE__ */ l("dd", {
							className: "text-foreground",
							children: i ? "YES" : "NO"
						})]
					})
				]
			}),
			c ? /* @__PURE__ */ l("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: c
			}) : null
		]
	});
}
function Sr({ title: e, body: t, unread: n, variant: r = "system" }) {
	return /* @__PURE__ */ u("article", {
		className: W("border-b border-border p-4", n && "bg-panel"),
		"data-variant": r,
		"data-state": n ? "unread" : "read",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ l("p", {
					className: "text-sm font-bold",
					children: e
				}), /* @__PURE__ */ l(K, {
					variant: n ? "info" : "neutral",
					children: r
				})]
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-1 text-xs leading-5 text-muted-foreground",
				children: t
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-2 text-muted-foreground",
				children: n ? "Unread" : "Read"
			})
		]
	});
}
function Cr({ repo: e, status: t, commit: n = "fixture", schema: r = "v1", records: i = "—", queue: a = 0, errors: o = 0, lastSync: s = "now", action: c }) {
	let d = t === "online" ? "supported" : t === "degraded" ? "partial" : t === "offline" ? "contested" : "info";
	return /* @__PURE__ */ u("div", {
		className: "grid min-h-11 grid-cols-[1.5fr_auto] items-center gap-3 border-b border-border bg-card px-3 py-2 md:grid-cols-[1.5fr_.8fr_.7fr_.6fr_.6fr_.6fr_.8fr_auto_auto]",
		children: [
			/* @__PURE__ */ l("span", {
				className: "mw-meta",
				children: e
			}),
			/* @__PURE__ */ l("span", {
				className: "md:hidden",
				children: /* @__PURE__ */ l(K, {
					variant: d,
					children: t
				})
			}),
			/* @__PURE__ */ l("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: n
			}),
			/* @__PURE__ */ l("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: r
			}),
			/* @__PURE__ */ l("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: i
			}),
			/* @__PURE__ */ u("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: ["Q ", a]
			}),
			/* @__PURE__ */ u("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: ["E ", o]
			}),
			/* @__PURE__ */ l("span", {
				className: "mw-meta hidden text-muted-foreground md:block",
				children: s
			}),
			/* @__PURE__ */ l("span", {
				className: "hidden md:block",
				children: /* @__PURE__ */ l(K, {
					variant: d,
					children: t
				})
			}),
			/* @__PURE__ */ l("span", {
				className: "hidden md:block",
				children: c
			})
		]
	});
}
function wr({ timestamp: e, actor: t, action: n, resource: r, result: i, traceId: a }) {
	return /* @__PURE__ */ l("div", {
		className: "grid gap-1 border-b border-border px-3 py-3 text-xs md:grid-cols-[130px_1fr_1fr_1fr_1fr_1fr]",
		children: [
			e,
			t,
			n,
			r,
			i,
			a
		].map((e, t) => /* @__PURE__ */ l("span", {
			className: t === 0 ? "mw-meta text-muted-foreground" : "font-mono text-[10px]",
			children: e
		}, t))
	});
}
function J({ label: e, value: t, context: n, delta: r, tone: i = "neutral" }) {
	let a = i === "good" ? "text-success" : i === "warning" ? "text-warning" : i === "critical" ? "text-primary" : "text-foreground";
	return /* @__PURE__ */ u("article", {
		className: "border border-border bg-card p-4",
		"data-variant": i,
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: e
				}), r ? /* @__PURE__ */ l("span", {
					className: W("mw-meta", a),
					children: r
				}) : null]
			}),
			/* @__PURE__ */ l("p", {
				className: W("mt-3 text-4xl font-black", a),
				children: t
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: n
			})
		]
	});
}
function Tr({ active: e = "Cases", collapsed: t = !1 }) {
	let n = e.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ u("aside", {
		className: W("hidden min-h-[calc(100vh-64px)] shrink-0 flex-col border-r border-border bg-panel md:flex", t ? "w-[72px]" : "w-[72px] lg:w-[220px]"),
		"data-state": t ? "collapsed" : "expanded",
		"data-navigation": "auto-menu",
		children: [
			/* @__PURE__ */ u("div", {
				className: "border-b border-border p-3",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-primary",
					children: t ? "MW" : "MoonWitness"
				}), t ? null : /* @__PURE__ */ l("p", {
					className: "mw-meta mt-1 hidden text-muted-foreground lg:block",
					children: "Workspace / Research"
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "flex-1",
				children: /* @__PURE__ */ l(or, {
					resources: er,
					activeId: n,
					compact: t,
					permissions: ["authz:read", "audit:read"]
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "border-t border-border p-3",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-success",
					children: t ? "●" : "System / online"
				}), t ? null : /* @__PURE__ */ u("div", {
					className: "mt-2 hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ l(kn, {
						label: "Researcher",
						size: "xs"
					}), /* @__PURE__ */ l("span", {
						className: "mw-meta text-muted-foreground",
						children: "Researcher / fixture"
					})]
				})]
			})
		]
	});
}
function Er({ resultCount: e = 4, chips: t = [
	"All records",
	"Canonical",
	"Source-linked"
] }) {
	return /* @__PURE__ */ u("form", {
		id: "search",
		className: "grid gap-4 border border-border bg-card p-4",
		onSubmit: (e) => e.preventDefault(),
		children: [/* @__PURE__ */ u("div", {
			className: "grid gap-3 md:grid-cols-[1fr_220px_180px_auto]",
			children: [
				/* @__PURE__ */ l(q, {
					label: "Search",
					variant: "search",
					placeholder: "Search records, IDs, sources…"
				}),
				/* @__PURE__ */ l(Un, {
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
				/* @__PURE__ */ l(Un, {
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
				/* @__PURE__ */ l("div", {
					className: "self-end",
					children: /* @__PURE__ */ l(G, {
						type: "submit",
						children: "Apply"
					})
				})
			]
		}), /* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ l("div", {
				className: "flex flex-wrap gap-2",
				children: t.map((e) => /* @__PURE__ */ l(K, {
					variant: "neutral",
					children: e
				}, e))
			}), /* @__PURE__ */ u("p", {
				className: "mw-meta text-muted-foreground",
				children: [e, " results"]
			})]
		})]
	});
}
function Y({ state: e, traceId: t = "TRACE-UNAVAILABLE", lastKnownState: n = "No cached state available.", requiredPermission: r = "resource:read", currentRole: i = "researcher", onRetry: a, onRequestAccess: o, onClearFilters: s }) {
	let c = N(), d = a ?? (() => c.onRetry?.(e)), f = o ?? (() => c.onRequestAccess?.({
		permission: r,
		currentRole: i
	})), p = s ?? c.onClearFilters;
	return e === "loading" ? /* @__PURE__ */ u("div", {
		className: "border border-border bg-card p-6",
		"aria-busy": "true",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-success",
				children: "Loading"
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-6 grid gap-4",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ l("div", { className: "h-5 w-full rounded-full bg-background" }),
					/* @__PURE__ */ l("div", { className: "h-5 w-3/4 rounded-full bg-background" }),
					/* @__PURE__ */ l("div", { className: "h-24 w-full rounded-[8px] bg-background" }),
					/* @__PURE__ */ l("div", { className: "h-24 w-full rounded-[8px] bg-background" })
				]
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: "Preserve layout. No jumping."
			})
		]
	}) : e === "error" ? /* @__PURE__ */ u("div", {
		className: "border border-primary bg-card p-6",
		role: "alert",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "Error"
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-lg font-bold",
				children: "Couldn’t load records."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Backend is reachable, but the query failed. Existing records are unchanged."
			}),
			/* @__PURE__ */ u("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: ["Trace / ", t]
			}),
			/* @__PURE__ */ l(G, {
				className: "mt-5",
				variant: "danger",
				onClick: () => void d?.(),
				children: "Try again"
			})
		]
	}) : e === "offline" ? /* @__PURE__ */ u("div", {
		className: "border border-warning bg-card p-6",
		role: "status",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-warning",
				children: "Backend offline"
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-lg font-bold",
				children: "The service is unreachable."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "This is a connectivity failure, not an empty result."
			}),
			/* @__PURE__ */ u("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: ["Last known state / ", n]
			}),
			/* @__PURE__ */ l(G, {
				className: "mt-5",
				variant: "secondary",
				onClick: () => void d?.(),
				children: "Retry connection"
			})
		]
	}) : e === "forbidden" ? /* @__PURE__ */ u("div", {
		className: "border border-primary bg-card p-6",
		role: "alert",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "Forbidden"
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-lg font-bold",
				children: "This action needs more access."
			}),
			/* @__PURE__ */ u("dl", {
				className: "mw-meta mt-4 grid gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ u("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ l("dt", { children: "Required" }), /* @__PURE__ */ l("dd", {
						className: "text-foreground",
						children: r
					})]
				}), /* @__PURE__ */ u("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ l("dt", { children: "Current role" }), /* @__PURE__ */ l("dd", {
						className: "text-foreground",
						children: i
					})]
				})]
			}),
			/* @__PURE__ */ l(G, {
				className: "mt-5",
				variant: "danger",
				onClick: () => void f?.(),
				children: "Request access"
			})
		]
	}) : /* @__PURE__ */ u("div", {
		className: "border border-info bg-card p-6",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-info",
				children: "Empty"
			}),
			/* @__PURE__ */ l("h3", {
				className: "mt-4 text-lg font-bold",
				children: "Nothing here yet."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Change filters or create a record."
			}),
			/* @__PURE__ */ l(G, {
				className: "mt-5",
				variant: "secondary",
				onClick: () => void p?.(),
				children: "Clear filters"
			})
		]
	});
}
function Dr({ mode: e = "context", onSubmit: t }) {
	let n = e === "question", r = N(), [i, a] = s(""), [o, c] = s(""), d = t ?? r.onCommunitySubmit;
	return /* @__PURE__ */ u("form", {
		className: W("border bg-card p-4", n ? "border-info" : "border-primary"),
		onSubmit: (t) => {
			t.preventDefault(), o.trim() && (d?.({
				mode: e,
				source: n ? void 0 : i.trim() || void 0,
				body: o.trim()
			}), c(""), n || a(""));
		},
		children: [
			/* @__PURE__ */ l("p", {
				className: W("mw-eyebrow", n ? "text-info" : "text-primary"),
				children: n ? "Ask a question" : "Submit context"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-lg font-bold",
				children: n ? "Question the score. Keep the evidence intact." : "Source first. Interpretation later."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-4 grid gap-4",
				children: [
					n ? null : /* @__PURE__ */ l(q, {
						label: "Source / provenance",
						value: i,
						onChange: (e) => a(e.currentTarget.value),
						placeholder: "Paste source ID or locator"
					}),
					/* @__PURE__ */ l(Hn, {
						label: n ? "Question" : "Context",
						value: o,
						onChange: (e) => c(e.currentTarget.value),
						maxLength: 600,
						characterCount: !0,
						placeholder: n ? "What needs explanation?" : "What does this add, and what remains uncertain?"
					}),
					/* @__PURE__ */ l(G, {
						type: "submit",
						disabled: !o.trim(),
						children: n ? "Ask question" : "Submit context"
					})
				]
			})
		]
	});
}
function Or({ caseId: e, title: t, summary: n, status: r, traceCount: i, updatedAt: a, variant: o = "default", selected: s = !1 }) {
	return /* @__PURE__ */ u("article", {
		className: W("border bg-card transition-colors hover:border-border-strong", o === "compact" ? "p-3" : "p-5", s ? "border-foreground" : o === "featured" ? "border-primary" : "border-border"),
		"data-variant": o,
		"data-state": s ? "selected" : "default",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ u("span", {
					className: "mw-meta text-muted-foreground",
					children: ["CASE / ", e]
				}), /* @__PURE__ */ l(K, {
					variant: r,
					children: r
				})]
			}),
			/* @__PURE__ */ l("h3", {
				className: W("mw-display mt-5 font-black uppercase", o === "compact" ? "text-lg" : "text-2xl"),
				children: t
			}),
			o === "compact" ? null : /* @__PURE__ */ l("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: n
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-meta mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-muted-foreground",
				children: [/* @__PURE__ */ u("span", { children: [i, " traces"] }), /* @__PURE__ */ u("span", { children: ["updated ", a] })]
			})
		]
	});
}
function kr({ type: e, label: t, highlighted: n = !1, dimmed: r = !1 }) {
	return /* @__PURE__ */ l("span", {
		className: W("inline-flex min-h-8 items-center border-l-2 pl-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em]", e === "supports" || e === "temporal" ? "border-success" : e === "identity" ? "border-warning" : e === "references" ? "border-info" : "border-primary", n ? "text-foreground" : "text-muted-foreground", r && "opacity-80"),
		"aria-label": `${e} relationship${t ? `: ${t}` : ""}`,
		children: t ?? e
	});
}
function Ar({ children: e, active: t = !0, legalState: n = "unresolved" }) {
	return /* @__PURE__ */ u("section", {
		className: W("border-t-2 pt-5", t ? "border-primary" : "border-border"),
		"aria-label": "AWS legal boundary",
		children: [/* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ l("p", {
				className: W("mw-eyebrow", t ? "text-primary" : "text-muted-foreground"),
				children: "THE BOUNDARY / AWS"
			}), /* @__PURE__ */ l(K, {
				variant: t ? "disputed" : "unresolved",
				children: n
			})]
		}), e ? /* @__PURE__ */ l("div", {
			className: "mt-4",
			children: e
		}) : null]
	});
}
function jr({ entries: e, filter: t = "all" }) {
	let n = t === "all" ? e : e.filter((e) => (e.variant ?? "event") === t);
	return /* @__PURE__ */ u("section", {
		"aria-label": "Case timeline",
		children: [/* @__PURE__ */ l("div", {
			className: "mb-3 flex flex-wrap gap-2",
			"aria-label": "Timeline filters",
			children: [
				"all",
				"event",
				"source",
				"decision",
				"community"
			].map((e) => /* @__PURE__ */ l(K, {
				variant: e === t ? "info" : "neutral",
				children: e
			}, e))
		}), /* @__PURE__ */ l("div", {
			className: "border-t border-border",
			children: n.map((e) => /* @__PURE__ */ l(yr, { ...e }, `${e.timestamp}-${e.title}`))
		})]
	});
}
//#endregion
//#region src/components/case-header.tsx
function Mr({ caseId: e, eyebrow: t, title: n, summary: r, status: i, variant: a = "public", metadata: o = [], actions: s }) {
	return /* @__PURE__ */ u("header", {
		className: W("border-b border-border pb-7", a === "platform" && "pb-5"),
		children: [/* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: t
			}), /* @__PURE__ */ u("p", {
				className: "mw-meta text-muted-foreground",
				children: ["Case / ", e]
			})]
		}), /* @__PURE__ */ u("div", {
			className: W("mt-7", a === "platform" ? "max-w-4xl" : "max-w-5xl"),
			children: [
				/* @__PURE__ */ l("h2", {
					className: W("mw-display text-balance font-black uppercase", a === "platform" ? "text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]" : "text-[clamp(3rem,8vw,5.25rem)] leading-[0.92]"),
					children: n
				}),
				/* @__PURE__ */ l("p", {
					className: "mw-reading mt-6 text-pretty text-base leading-7 text-muted-foreground sm:text-lg",
					children: r
				}),
				/* @__PURE__ */ u("div", {
					className: "mt-5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ l(K, {
						variant: i,
						children: i
					}), o.map((e) => /* @__PURE__ */ u("span", {
						className: "mw-meta text-muted-foreground",
						children: [
							e.label,
							": ",
							/* @__PURE__ */ l("span", {
								className: "text-foreground",
								children: e.value
							})
						]
					}, e.label))]
				}),
				s ? /* @__PURE__ */ l("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: s
				}) : null
			]
		})]
	});
}
//#endregion
//#region src/components/correlation-score.tsx
function Nr({ score: e, confidence: t, explanation: n, dimensions: r, methodHref: a = "#method", variant: o = "detailed" }) {
	let s = i();
	return /* @__PURE__ */ u("section", {
		className: "border border-border bg-panel p-5",
		"aria-labelledby": s,
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-meta text-muted-foreground",
				children: o === "summary" ? "Correlation" : "Correlation preview"
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-3 flex flex-wrap items-end gap-x-5 gap-y-2",
				children: [/* @__PURE__ */ l("h3", {
					id: s,
					className: o === "summary" ? "mw-display text-5xl font-black" : "mw-display text-6xl font-black",
					children: e.toFixed(2)
				}), /* @__PURE__ */ u("div", {
					className: "pb-1",
					children: [/* @__PURE__ */ l("p", {
						className: "mw-meta text-success",
						children: t
					}), /* @__PURE__ */ l("p", {
						className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
						children: n
					})]
				})]
			}),
			o === "detailed" ? /* @__PURE__ */ l("div", {
				className: "mt-6 grid gap-3",
				children: r.map((e) => /* @__PURE__ */ u("div", {
					className: "grid grid-cols-[minmax(100px,1fr)_1.6fr_auto] items-center gap-3",
					children: [
						/* @__PURE__ */ l("span", {
							className: "mw-meta text-muted-foreground",
							children: e.label
						}),
						/* @__PURE__ */ l("div", {
							className: "h-2 overflow-hidden rounded-full bg-card",
							"aria-hidden": "true",
							children: /* @__PURE__ */ l("div", {
								className: e.tone === "warning" ? "h-full bg-warning" : "h-full bg-success",
								style: { width: `${Math.round(e.value * 100)}%` }
							})
						}),
						/* @__PURE__ */ l("span", {
							className: e.tone === "warning" ? "mw-meta text-warning" : "mw-meta text-success",
							children: e.value.toFixed(2)
						})
					]
				}, e.label))
			}) : /* @__PURE__ */ u("p", {
				className: "mw-meta mt-4 text-warning",
				children: [
					"Identity ",
					r.find((e) => e.label === "Identity")?.value.toFixed(2) ?? "—",
					" · still blocking closure"
				]
			}),
			/* @__PURE__ */ l("a", {
				href: a,
				className: "mw-link mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
				children: "How this score is weighed →"
			})
		]
	});
}
//#endregion
//#region src/components/domain-record-summary.tsx
function Pr({ records: e, className: t = "" }) {
	return /* @__PURE__ */ l("div", {
		className: t,
		"data-testid": "domain-record-summary",
		children: e.map((e) => {
			let t = g(e.domain), n = /* @__PURE__ */ u(c, { children: [
				/* @__PURE__ */ l("strong", { children: e.domain }),
				/* @__PURE__ */ l("span", { children: e.title }),
				/* @__PURE__ */ u("code", { children: [t.prefix, e.recordId] }),
				e.status ? /* @__PURE__ */ l("span", { children: e.status }) : null
			] });
			return e.href ? /* @__PURE__ */ l("a", {
				href: e.href,
				"data-domain": e.domain,
				"data-repository": t.repository,
				children: n
			}, `${e.domain}:${e.recordId}`) : /* @__PURE__ */ l("article", {
				"data-domain": e.domain,
				"data-repository": t.repository,
				children: n
			}, `${e.domain}:${e.recordId}`);
		})
	});
}
//#endregion
//#region src/components/evidence-graph.tsx
var Fr = {
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
}, Ir = {
	STORY: "left-[8%] top-[10%]",
	EVENT: "right-[8%] top-[10%]",
	PERSON: "bottom-[10%] left-[8%]",
	RGBL: "bottom-[10%] right-[8%]"
}, Lr = [
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
function Rr({ records: e, score: t }) {
	let n = i(), [r, a] = s("EVENT"), o = e.find((e) => e.domain === r);
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": n,
		className: "border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: "Relationship graph"
				}), /* @__PURE__ */ l("h3", {
					id: n,
					className: "mw-display mt-2 text-2xl font-bold",
					children: "Separate records. Shared correlation layer."
				})] }), /* @__PURE__ */ l(K, {
					variant: "unresolved",
					children: "not causation"
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "relative mx-auto mt-6 aspect-square w-full max-w-[430px]",
				"aria-label": "Interactive case relationship graph",
				children: [
					/* @__PURE__ */ u("svg", {
						className: "absolute inset-0 size-full",
						viewBox: "0 0 100 100",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ l("line", {
								x1: "50",
								y1: "50",
								x2: "22",
								y2: "22",
								className: "text-rgbl-red",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ l("line", {
								x1: "50",
								y1: "50",
								x2: "78",
								y2: "22",
								className: "text-rgbl-green",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ l("line", {
								x1: "50",
								y1: "50",
								x2: "22",
								y2: "78",
								className: "text-warning",
								stroke: "currentColor",
								strokeWidth: "0.5",
								strokeDasharray: "2 2"
							}),
							/* @__PURE__ */ l("line", {
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
					/* @__PURE__ */ l(zr, {
						type: "CASE",
						label: t.toFixed(2),
						status: "correlation",
						relationCount: 4,
						state: r === "CASE" ? "selected" : "default",
						className: "absolute left-1/2 top-1/2 size-[clamp(82px,22vw,104px)] -translate-x-1/2 -translate-y-1/2",
						onSelect: () => a("CASE")
					}),
					e.map((e) => /* @__PURE__ */ l(zr, {
						type: e.domain,
						label: e.domain,
						status: e.status,
						relationCount: 1,
						state: r === e.domain ? "selected" : e.domain === "PERSON" ? "unresolved" : "default",
						className: W("absolute", Ir[e.domain]),
						onSelect: () => a(e.domain)
					}, e.domain))
				]
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-4 flex justify-end",
				children: /* @__PURE__ */ l(zr, {
					type: "AWS",
					label: "AWS",
					status: "after boundary",
					relationCount: 1,
					state: "dimmed",
					onSelect: () => a("AWS")
				})
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-5 flex flex-wrap gap-3",
				"aria-label": "Relationship legend",
				children: Lr.map((e) => /* @__PURE__ */ l("span", {
					className: W("mw-meta border-l-2 pl-2 text-muted-foreground", e.className),
					children: e.label
				}, e.type))
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-5 border-l-2 border-primary bg-background p-4",
				"aria-live": "polite",
				children: o ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("p", {
					className: W("mw-eyebrow", Fr[o.domain].split(" ")[0]),
					children: [o.domain, " selected"]
				}), /* @__PURE__ */ u("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: [
						o.description,
						" Provenance: ",
						o.source,
						". Verification state: ",
						o.verification,
						"."
					]
				})] }) : r === "CASE" ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-primary",
					children: "CASE selected"
				}), /* @__PURE__ */ u("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: [
						"Aggregate correlation is ",
						t.toFixed(2),
						". It is not a factual or causal conclusion."
					]
				})] }) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-primary",
					children: "AWS selected"
				}), /* @__PURE__ */ l("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: "AWS remains dimmed until the legal boundary. It is downstream of evidence reconstruction."
				})] })
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-6 border-t border-border pt-4",
				children: [/* @__PURE__ */ l("h4", {
					className: "mw-meta text-muted-foreground",
					children: "Text equivalent"
				}), /* @__PURE__ */ u("ul", {
					className: "mt-3 grid gap-2 text-sm leading-6",
					children: [
						e.map((e) => /* @__PURE__ */ u("li", {
							id: `correlation-${e.domain.toLowerCase()}`,
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ l("strong", { children: e.domain }),
								" → CASE correlation / ",
								e.status,
								" / ",
								e.source,
								".",
								" ",
								e.domain === "PERSON" ? "Identity relation remains unresolved." : "Source relation remains independently inspectable."
							]
						}, e.domain)),
						/* @__PURE__ */ u("li", { children: [
							/* @__PURE__ */ l("strong", { children: "CASE" }),
							" → aggregate score ",
							t.toFixed(2),
							"; correlation is not causation."
						] }),
						/* @__PURE__ */ u("li", { children: [/* @__PURE__ */ l("strong", { children: "AWS" }), " → legal relation starts only after the evidence correlation boundary."] })
					]
				})]
			})
		]
	});
}
function zr({ type: e, label: t, status: n, relationCount: r = 0, state: i = "default", className: a, onSelect: o }) {
	return /* @__PURE__ */ u("button", {
		type: "button",
		className: W("flex min-h-11 min-w-11 flex-col items-center justify-center rounded-full border-2 bg-card p-2 text-center transition-[border-color,background-color,opacity] hover:border-foreground hover:bg-panel", Fr[e], i === "selected" && "bg-panel ring-2 ring-foreground ring-offset-2 ring-offset-background", i === "dimmed" && "opacity-90", i === "unresolved" && "border-dashed", (a?.includes("absolute"), ""), a),
		"data-type": e.toLowerCase(),
		"data-state": i,
		"aria-pressed": i === "selected",
		"aria-label": `${e}: ${n}. ${r} relationships. Select relationship node.`,
		onClick: o,
		children: [
			/* @__PURE__ */ l("span", {
				className: "font-mono text-[10px] font-bold uppercase",
				children: t
			}),
			/* @__PURE__ */ l("span", {
				className: "mt-1 font-mono text-[10px] uppercase text-muted-foreground",
				children: n
			}),
			/* @__PURE__ */ u("span", {
				className: "sr-only",
				children: [r, " relationships"]
			})
		]
	});
}
//#endregion
//#region src/components/four-record-summary.tsx
var Br = [
	"STORY",
	"EVENT",
	"PERSON",
	"RGBL"
], Vr = {
	STORY: "text-rgbl-red-fg",
	EVENT: "text-rgbl-green-fg",
	PERSON: "text-warning",
	RGBL: "text-rgbl-blue-fg"
};
function Hr({ records: e, compact: t = !1 }) {
	let n = i();
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": n,
		children: [t ? /* @__PURE__ */ l("h3", {
			id: n,
			className: "sr-only",
			children: "Four correlated records"
		}) : /* @__PURE__ */ u("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-muted-foreground",
				children: "Four records / separate first"
			}), /* @__PURE__ */ l("h3", {
				id: n,
				className: "mt-1 text-xl font-semibold",
				children: "What survived the cross-check?"
			})]
		}), /* @__PURE__ */ l("div", {
			className: "rs-record-grid",
			children: Br.map((n) => {
				let r = e.find((e) => e.domain === n);
				return r ? /* @__PURE__ */ u("article", {
					id: `evidence-${r.domain.toLowerCase()}`,
					className: W("flex scroll-mt-24 flex-col border border-border bg-card", t ? "min-h-[92px] p-4" : "min-h-72 p-4"),
					"data-state": r.status === "partial" ? "partial" : "linked",
					children: [
						/* @__PURE__ */ u("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ l("span", {
								className: W("mw-eyebrow", Vr[r.domain]),
								children: r.domain
							}), /* @__PURE__ */ l(K, {
								variant: r.status,
								children: r.status
							})]
						}),
						t ? null : /* @__PURE__ */ l("p", {
							className: "mw-meta mt-4 text-muted-foreground",
							children: r.recordId
						}),
						/* @__PURE__ */ l("h4", {
							className: W("font-semibold leading-5", t ? "mt-3 text-sm" : "mt-2 text-base"),
							children: r.title
						}),
						t ? null : /* @__PURE__ */ l("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: r.description
						}),
						t ? /* @__PURE__ */ l("p", {
							className: "mw-meta mt-auto pt-2 text-muted-foreground",
							children: r.verification
						}) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("dl", {
							className: "mw-meta mt-auto grid gap-1 border-t border-border pt-4 text-muted-foreground",
							children: [
								/* @__PURE__ */ u("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ l("dt", { children: "Repo" }), /* @__PURE__ */ l("dd", {
										className: "text-right text-foreground",
										children: r.sourceRepo
									})]
								}),
								/* @__PURE__ */ u("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ l("dt", { children: "Source" }), /* @__PURE__ */ l("dd", {
										className: "text-right text-foreground",
										children: r.source
									})]
								}),
								/* @__PURE__ */ u("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ l("dt", { children: "Verify" }), /* @__PURE__ */ l("dd", {
										className: "text-right text-foreground",
										children: r.verification
									})]
								}),
								/* @__PURE__ */ u("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ l("dt", { children: "Canonical" }), /* @__PURE__ */ l("dd", {
										className: "text-right text-foreground",
										children: r.canonicalStatus
									})]
								})
							]
						}), /* @__PURE__ */ l("a", {
							href: `#source-${r.domain.toLowerCase()}`,
							className: "mw-link mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline",
							children: "Inspect source trail →"
						})] })
					]
				}, r.domain) : /* @__PURE__ */ u("article", {
					className: W("flex flex-col border border-dashed border-border bg-card p-4 opacity-70", t ? "min-h-[92px]" : "min-h-44"),
					children: [/* @__PURE__ */ u("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ l("span", {
							className: W("mw-eyebrow", Vr[n]),
							children: n
						}), /* @__PURE__ */ l(K, {
							variant: "unresolved",
							children: "missing"
						})]
					}), /* @__PURE__ */ l("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No linked record yet."
					})]
				}, n);
			})
		})]
	});
}
//#endregion
//#region src/components/legal-status.tsx
var Ur = {
	permitted: "verified",
	restricted: "restricted",
	prohibited: "prohibited",
	disputed: "disputed",
	unresolved: "unresolved"
};
function Wr({ status: e, jurisdiction: t, review: n, prompt: r, basis: a = "fixture instruments only" }) {
	let o = i();
	return /* @__PURE__ */ u("section", {
		className: "border border-primary bg-card p-5",
		"aria-labelledby": o,
		children: [
			/* @__PURE__ */ l("div", {
				className: "h-0.5 w-full bg-primary",
				"aria-label": "AWS legal boundary",
				role: "separator"
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow mt-4 text-primary",
				children: "The boundary / AWS"
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-2 text-muted-foreground",
				children: "Angel With Shotgun · international law / regulation"
			}),
			/* @__PURE__ */ l("h3", {
				id: o,
				className: "mw-display mt-4 text-2xl font-bold",
				children: "Evidence asks what happened. Law asks what rule would apply."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: r
			}),
			/* @__PURE__ */ u("dl", {
				className: "mt-5 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Legal state"
						}), /* @__PURE__ */ l("dd", { children: /* @__PURE__ */ l(K, {
							variant: Ur[e],
							children: e
						}) })]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Jurisdiction"
						}), /* @__PURE__ */ l("dd", { children: /* @__PURE__ */ l(K, {
							variant: "unresolved",
							children: t
						}) })]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Review"
						}), /* @__PURE__ */ l("dd", { children: /* @__PURE__ */ l(K, {
							variant: "info",
							children: n
						}) })]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-muted-foreground",
							children: "Basis"
						}), /* @__PURE__ */ l("dd", { children: a })]
					})
				]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-5 border-t border-border pt-4 text-muted-foreground",
				children: "Synthetic fixture / reference-only · cited source law and MoonWitness analysis remain separate · not a court judgment"
			})
		]
	});
}
//#endregion
//#region src/components/patterns.tsx
function Gr({ page: e = 1, pages: t = 1, onPageChange: n }) {
	let r = N(), i = n ?? r.onPageChange;
	return /* @__PURE__ */ u("nav", {
		"aria-label": "Pagination",
		className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4",
		children: [
			/* @__PURE__ */ l(G, {
				variant: "ghost",
				disabled: e <= 1,
				onClick: () => void i?.(e - 1),
				children: "Previous"
			}),
			/* @__PURE__ */ u("span", {
				className: "mw-meta text-muted-foreground",
				children: [
					"Page ",
					e,
					" / ",
					t
				]
			}),
			/* @__PURE__ */ l(G, {
				variant: "ghost",
				disabled: e >= t,
				onClick: () => void i?.(e + 1),
				children: "Next"
			})
		]
	});
}
function Kr({ records: e }) {
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": "evidence-grid-heading",
		children: [
			/* @__PURE__ */ u("div", {
				className: "mb-5",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: "Evidence grid"
				}), /* @__PURE__ */ l("h3", {
					id: "evidence-grid-heading",
					className: "mt-2 text-xl font-bold",
					children: "Inspect each record independently."
				})]
			}),
			/* @__PURE__ */ l(Er, { resultCount: e.length }),
			/* @__PURE__ */ l("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
				children: e.map((e, t) => /* @__PURE__ */ l(hr, {
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
			/* @__PURE__ */ l("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-2",
				children: e.map((e) => /* @__PURE__ */ l(_r, {
					id: `source-${e.domain.toLowerCase()}`,
					sourceId: e.source,
					title: e.title,
					excerpt: e.description,
					citation: e.recordId,
					provenance: `fixture/${e.domain.toLowerCase()}/0042/a`,
					verification: e.verification
				}, e.source))
			}),
			/* @__PURE__ */ l(Gr, {
				page: 1,
				pages: 1
			})
		]
	});
}
function qr({ records: e, correlation: t }) {
	return /* @__PURE__ */ u("section", {
		className: "grid gap-4 lg:grid-cols-[1.15fr_.85fr]",
		"aria-label": "Correlation graph pattern",
		children: [/* @__PURE__ */ l(Rr, {
			records: e,
			score: t.score
		}), /* @__PURE__ */ l(Nr, { ...t })]
	});
}
function Jr({ legal: e, sources: t }) {
	return /* @__PURE__ */ u("section", {
		"aria-label": "AWS legal summary",
		children: [/* @__PURE__ */ l(Ar, {
			legalState: e.status,
			children: /* @__PURE__ */ l("p", {
				className: "text-sm font-semibold",
				children: "Cool. Now the law gets involved."
			})
		}), /* @__PURE__ */ u("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[.8fr_1.2fr]",
			children: [/* @__PURE__ */ l(Wr, { ...e }), /* @__PURE__ */ l("div", {
				className: "grid gap-4",
				children: t.map((e) => /* @__PURE__ */ l(_r, {
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
function Yr({ cases: e }) {
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": "related-cases-heading",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-meta text-muted-foreground",
				children: "Related cases"
			}),
			/* @__PURE__ */ l("h3", {
				id: "related-cases-heading",
				className: "mt-2 text-xl font-bold",
				children: "Similar trails, separate conclusions."
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				children: e.map((e) => /* @__PURE__ */ l(Or, {
					...e,
					variant: "compact"
				}, e.caseId))
			})
		]
	});
}
function Xr({ header: e, evidence: t, correlation: n, legal: r, related: i, summary: a }) {
	return /* @__PURE__ */ u("div", {
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
function Zr({ repositories: e, onSyncAll: t, onInspect: n }) {
	let r = N(), i = t ?? r.onRepositorySyncAll, a = n ?? r.onRepositoryInspect;
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": "repository-monitor-heading",
		children: [/* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-muted-foreground",
				children: "Repository monitor"
			}), /* @__PURE__ */ l("h3", {
				id: "repository-monitor-heading",
				className: "mt-2 text-lg font-bold",
				children: "Source-layer health"
			})] }), /* @__PURE__ */ u("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ l(K, {
					variant: "info",
					children: "job: idle"
				}), /* @__PURE__ */ l(G, {
					variant: "secondary",
					size: "sm",
					onClick: () => void i?.(),
					children: "Sync all"
				})]
			})]
		}), /* @__PURE__ */ l("div", {
			className: "mt-4 border border-border",
			children: e.map((e) => /* @__PURE__ */ l(Cr, {
				repo: e.repo,
				status: e.status,
				queue: e.queue ?? 0,
				errors: e.errors ?? 0,
				action: /* @__PURE__ */ l(G, {
					variant: "ghost",
					size: "sm",
					onClick: () => void a?.(e.repo),
					children: "Inspect"
				})
			}, e.repo))
		})]
	});
}
function Qr({ submission: e, onSelectAll: t, onRequestContext: n, onReject: r, onBulkRequestContext: i, onReturnSelected: a }) {
	let o = N();
	return /* @__PURE__ */ u("section", {
		"aria-labelledby": "moderation-queue-heading",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: "Moderation queue"
				}), /* @__PURE__ */ l("h3", {
					id: "moderation-queue-heading",
					className: "mt-2 text-lg font-bold",
					children: "Community submissions stay non-canonical until reviewed."
				})] }), /* @__PURE__ */ u("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ l(K, {
						variant: "neutral",
						children: "filter: needs context"
					}), /* @__PURE__ */ l(G, {
						variant: "ghost",
						size: "sm",
						onClick: () => void (t ?? o.onModerationSelectAll)?.(),
						children: "Select all"
					})]
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-4",
				children: /* @__PURE__ */ l(xr, {
					...e,
					canonicalEvidence: !1,
					source: "provenance incomplete",
					reviewer: "unassigned",
					reviewActions: /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(G, {
						variant: "danger",
						size: "sm",
						onClick: () => void (n ?? o.onModerationRequestContext)?.(e.id),
						children: "Request context"
					}), /* @__PURE__ */ l(G, {
						variant: "secondary",
						size: "sm",
						onClick: () => void (r ?? o.onModerationReject)?.(e.id),
						children: "Reject"
					})] })
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ l(G, {
					variant: "secondary",
					size: "sm",
					onClick: () => void (i ?? o.onModerationBulkRequestContext)?.(),
					children: "Bulk request context"
				}), /* @__PURE__ */ l(G, {
					variant: "ghost",
					size: "sm",
					onClick: () => void (a ?? o.onModerationReturnSelected)?.(),
					children: "Return selected"
				})]
			})
		]
	});
}
function $r({ question: e, moderatorNote: t, submission: n }) {
	return /* @__PURE__ */ u("section", {
		"aria-label": "Community case thread",
		className: "border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ l(br, {
				kind: "question",
				author: "Member",
				role: "member",
				timestamp: "05:14",
				body: e,
				replies: 1
			}),
			/* @__PURE__ */ l(br, {
				kind: "moderator-note",
				author: "Moderator",
				role: "moderator",
				timestamp: "05:20",
				body: t,
				replies: 0
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-5",
				children: /* @__PURE__ */ l(xr, {
					...n,
					canonicalEvidence: !1,
					source: "provenance incomplete"
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-5 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ l(Dr, { mode: "question" }), /* @__PURE__ */ l(Dr, { mode: "context" })]
			})
		]
	});
}
function ei({ entries: e }) {
	return /* @__PURE__ */ l(jr, {
		entries: e,
		filter: "all"
	});
}
function ti() {
	return /* @__PURE__ */ l(Er, {
		resultCount: 4,
		chips: [
			"All records",
			"Canonical",
			"Source-linked"
		]
	});
}
function ni({ children: e }) {
	return /* @__PURE__ */ l("section", {
		"aria-label": "Empty loading error pattern",
		children: e
	});
}
function ri({ onSubmit: e, onProvider: t } = {}) {
	let [n, r] = s("default"), i = N(), a = e ?? i.onAuthSubmit, o = t ?? i.onAuthProvider;
	return /* @__PURE__ */ u("form", {
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
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "Sign in"
			}),
			/* @__PURE__ */ l("h2", {
				className: "mt-3 text-2xl font-bold",
				children: "Your account, not your conclusion."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: "Identity controls access. It never changes evidence status by itself."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-5",
				children: [
					/* @__PURE__ */ l(q, {
						name: "email",
						label: "Email",
						type: "email",
						autoComplete: "email",
						placeholder: "you@example.com",
						required: !0
					}),
					/* @__PURE__ */ l(q, {
						name: "password",
						label: "Password",
						type: "password",
						autoComplete: "current-password",
						error: n === "error" ? "That credential pair was not accepted." : void 0,
						required: !0
					}),
					/* @__PURE__ */ l(Wn, {
						name: "keepSignedIn",
						label: "Keep me signed in",
						description: "Use only on a device you control."
					}),
					/* @__PURE__ */ l(G, {
						type: "submit",
						loading: n === "loading",
						children: "Continue"
					}),
					/* @__PURE__ */ l(G, {
						type: "button",
						variant: "secondary",
						onClick: () => void o?.(),
						children: "Continue with provider"
					}),
					/* @__PURE__ */ l("button", {
						type: "button",
						className: "mw-link justify-start text-xs underline",
						onClick: () => r("error"),
						children: "Preview error state"
					})
				]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-8 border-t border-border pt-4 text-muted-foreground",
				children: "By continuing you accept the community rules and evidence-integrity contract."
			})
		]
	});
}
//#endregion
//#region src/components/platform-admin.tsx
var ii = {
	System: "System",
	Resource: "Resource",
	Account: "Account"
}, ai = P.navigation.map((e) => ({
	id: e.id,
	label: e.label,
	href: e.path,
	group: ii[e.group],
	description: e.label + " / Platform administration contract.",
	shortcut: e.label.slice(0, 1).toUpperCase(),
	requiredPermission: e.permission
})), oi = P.commands.map((e) => ({
	label: e.label,
	href: e.path,
	shortcut: e.shortcut
})), si = Array.from(new Set(P.navigation.map((e) => e.permission))), ci = {
	allow: "verified",
	limited: "partial",
	read: "info",
	deny: "prohibited"
};
function li({ currentRole: e }) {
	return /* @__PURE__ */ l("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ u("table", {
			className: "w-full min-w-[720px] border-collapse text-left",
			children: [/* @__PURE__ */ l("thead", { children: /* @__PURE__ */ u("tr", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ l("th", {
					className: "p-3 mw-meta text-muted-foreground",
					children: "Capability"
				}), P.roles.map((t) => /* @__PURE__ */ u("th", {
					className: "p-3 mw-meta text-muted-foreground",
					children: [t.label, e === t.id ? " / CURRENT" : ""]
				}, t.id))]
			}) }), /* @__PURE__ */ l("tbody", { children: P.capabilities.map((e) => /* @__PURE__ */ u("tr", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ l("th", {
					className: "p-4 text-sm",
					children: e.label
				}), P.roles.map((t) => {
					let n = e[t.id];
					return /* @__PURE__ */ l("td", {
						className: "p-4",
						children: /* @__PURE__ */ l(K, {
							variant: ci[n],
							children: n
						})
					}, t.id);
				})]
			}, e.id)) })]
		})
	});
}
var ui = {
	connected: "verified",
	degraded: "partial",
	offline: "prohibited",
	unconfigured: "neutral"
};
function di({ state: e, detail: t }) {
	return /* @__PURE__ */ l("section", {
		className: "border border-border bg-card p-5",
		"data-platform-runtime": e,
		children: /* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ u("div", { children: [
				/* @__PURE__ */ l("p", {
					className: "mw-meta text-primary",
					children: "IAM DATA PLANE"
				}),
				/* @__PURE__ */ l("h2", {
					className: "mt-2 text-lg font-bold",
					children: e === "connected" ? "Server authoritative." : "Fail closed."
				}),
				/* @__PURE__ */ l("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: t ?? (e === "unconfigured" ? "No Platform backend is configured. Mutations must remain unavailable." : "Runtime state comes from the Platform API, not from baked UI fixtures.")
				})
			] }), /* @__PURE__ */ l(K, {
				variant: ui[e],
				children: e
			})]
		})
	});
}
function fi({ runtime: e = [] }) {
	let t = new Map(e.map((e) => [e.id, e]));
	return /* @__PURE__ */ u("section", {
		className: "border border-border bg-card",
		children: [/* @__PURE__ */ l("div", {
			className: "border-b border-border p-4",
			children: /* @__PURE__ */ l("p", {
				className: "mw-meta text-muted-foreground",
				children: "SERVICE REGISTRY / RUNTIME"
			})
		}), P.serviceRegistry.map((e) => {
			let n = t.get(e.id) ?? {
				id: e.id,
				state: "unconfigured"
			};
			return /* @__PURE__ */ u("div", {
				className: "grid gap-3 border-b border-border p-4 sm:grid-cols-[1fr_180px_auto] sm:items-center",
				children: [
					/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("strong", {
						className: "text-sm",
						children: e.label
					}), /* @__PURE__ */ l("p", {
						className: "mt-1 font-mono text-[10px] text-muted-foreground",
						children: e.repository ?? e.kind
					})] }),
					/* @__PURE__ */ l("span", {
						className: "text-xs text-muted-foreground",
						children: n.detail ?? "Runtime status unavailable."
					}),
					/* @__PURE__ */ l(K, {
						variant: ui[n.state],
						children: n.state
					})
				]
			}, e.id);
		})]
	});
}
function pi({ screen: e, alt: t, ...n }) {
	let r = tn().replace(/\/+$/, "") + "/ui/v2/" + _e[e];
	return /* @__PURE__ */ l("img", {
		src: r,
		alt: t,
		...n
	});
}
//#endregion
//#region src/components/tabs.tsx
function mi({ items: e, variant: t = "underline" }) {
	let n = i(), r = e.find((e) => !e.disabled)?.id ?? e[0]?.id ?? "", [a, o] = s(r), c = (t) => {
		let r = e.filter((e) => !e.disabled), i = r.findIndex((e) => e.id === a);
		if (i < 0 || !r.length) return;
		let s = r[(i + t + r.length) % r.length];
		o(s.id), requestAnimationFrame(() => document.getElementById(`${n}-tab-${s.id}`)?.focus());
	}, d = (e) => {
		e.key === "ArrowRight" && (e.preventDefault(), c(1)), e.key === "ArrowLeft" && (e.preventDefault(), c(-1));
	};
	return /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("div", {
		role: "tablist",
		"aria-label": "Sections",
		className: "flex flex-wrap border-b border-border",
		children: e.map((e) => {
			let r = e.id === a;
			return /* @__PURE__ */ l("button", {
				id: `${n}-tab-${e.id}`,
				role: "tab",
				"aria-selected": r,
				"aria-controls": `${n}-panel-${e.id}`,
				tabIndex: r ? 0 : -1,
				disabled: e.disabled,
				onKeyDown: d,
				onClick: () => o(e.id),
				className: W("mw-touch px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] disabled:opacity-40", r ? t === "archive" ? "bg-panel text-foreground" : "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"),
				children: e.label
			}, e.id);
		})
	}), e.map((e) => /* @__PURE__ */ l("div", {
		id: `${n}-panel-${e.id}`,
		role: "tabpanel",
		"aria-labelledby": `${n}-tab-${e.id}`,
		hidden: e.id !== a,
		className: "pt-4",
		children: e.content
	}, e.id))] });
}
//#endregion
//#region src/components/workflow-strip.tsx
var hi = [
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
function gi() {
	return /* @__PURE__ */ l("nav", {
		"aria-label": "MoonWitness method",
		className: "border-y border-border",
		children: /* @__PURE__ */ l("ol", {
			className: "grid sm:grid-cols-5",
			children: hi.map((e, t) => /* @__PURE__ */ l("li", {
				className: "border-b border-border last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
				children: /* @__PURE__ */ u("a", {
					href: `#${e.target}`,
					className: "flex min-h-28 flex-col justify-between gap-4 p-4 transition-colors hover:bg-muted",
					children: [/* @__PURE__ */ u("span", {
						className: "mw-eyebrow text-muted-foreground",
						children: [
							String(t + 1).padStart(2, "0"),
							" / ",
							e.name
						]
					}), /* @__PURE__ */ l("span", {
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
var X = {
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
}, _i = [
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
function Z({ activeResource: e, section: t, title: n, children: r, backendState: i = "online" }) {
	return /* @__PURE__ */ l(fr, {
		activeResource: e,
		breadcrumbs: [{ label: t }, { label: n }],
		backendState: i,
		notifications: _i,
		children: /* @__PURE__ */ l("div", {
			className: "px-4 py-8 sm:px-8 lg:px-8",
			children: r
		})
	});
}
function vi() {
	return /* @__PURE__ */ u(Z, {
		activeResource: "dashboard",
		section: "HOME",
		title: "Dashboard",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Good morning, Rocksoul."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "What changed, what needs attention, and what can wait."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ l(J, {
						label: "Open cases",
						value: "42",
						context: "active investigations"
					}),
					/* @__PURE__ */ l(J, {
						label: "Review queue",
						value: "07",
						context: "needs context",
						tone: "warning"
					}),
					/* @__PURE__ */ l(J, {
						label: "Backend",
						value: "HEALTHY",
						context: "global service state",
						tone: "good"
					}),
					/* @__PURE__ */ l(J, {
						label: "Unread",
						value: "3",
						context: "notifications",
						tone: "critical"
					})
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-5 xl:grid-cols-[1.9fr_1fr]",
				children: [/* @__PURE__ */ u("section", {
					className: "border border-border bg-card",
					children: [/* @__PURE__ */ l("div", {
						className: "border-b border-border p-5",
						children: /* @__PURE__ */ l("h2", {
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
					].map(([e, t, n, r]) => /* @__PURE__ */ u("div", {
						className: "grid grid-cols-[130px_1fr_auto] gap-4 border-b border-border p-5 text-sm",
						children: [
							/* @__PURE__ */ l("span", {
								className: `mw-meta ${r}`,
								children: e
							}),
							/* @__PURE__ */ l("span", { children: t }),
							/* @__PURE__ */ l("span", {
								className: "mw-meta text-muted-foreground",
								children: n
							})
						]
					}, e))]
				}), /* @__PURE__ */ u("section", {
					className: "border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ l("h2", {
							className: "text-lg font-bold",
							children: "Attention"
						}),
						/* @__PURE__ */ u("article", {
							className: "mt-5 border border-warning bg-background p-5",
							children: [/* @__PURE__ */ l("p", {
								className: "mw-meta text-warning",
								children: "Review"
							}), /* @__PURE__ */ l("p", {
								className: "mt-3 text-sm font-bold",
								children: "7 submissions need context"
							})]
						}),
						/* @__PURE__ */ u("article", {
							className: "mt-4 border border-primary bg-background p-5",
							children: [/* @__PURE__ */ l("p", {
								className: "mw-meta text-primary",
								children: "Legal"
							}), /* @__PURE__ */ l("p", {
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
var yi = [
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
function bi({ actions: e } = {}) {
	return /* @__PURE__ */ u(Z, {
		activeResource: "kanban",
		section: "WORK",
		title: "Kanban",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Review workflow"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Move work, not evidence. Status changes are audited."
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-10 grid gap-4 xl:grid-cols-4",
				children: yi.map((t) => /* @__PURE__ */ u("section", {
					className: "min-h-[540px] border border-border bg-panel p-4",
					children: [/* @__PURE__ */ u("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ u("h2", {
							className: "mw-meta",
							children: [
								t.title,
								" / ",
								t.count
							]
						}), /* @__PURE__ */ l(K, {
							variant: t.tone,
							children: t.count
						})]
					}), /* @__PURE__ */ u("article", {
						className: "mt-5 border border-border bg-background p-4",
						children: [
							/* @__PURE__ */ l("p", {
								className: "mw-meta text-primary",
								children: t.id
							}),
							/* @__PURE__ */ l("p", {
								className: "mt-3 text-sm font-bold",
								children: t.item
							}),
							/* @__PURE__ */ l("p", {
								className: "mw-meta mt-3 text-muted-foreground",
								children: t.meta
							}),
							/* @__PURE__ */ l(G, {
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
function xi({ actions: e } = {}) {
	return /* @__PURE__ */ u(Z, {
		activeResource: "calendar",
		section: "WORK",
		title: "Calendar",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "September 2026"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Reviews, releases, and research checkpoints."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid grid-cols-7 border border-border bg-card",
				children: [[
					"MON",
					"TUE",
					"WED",
					"THU",
					"FRI",
					"SAT",
					"SUN"
				].map((e) => /* @__PURE__ */ l("div", {
					className: "border-b border-r border-border p-3 text-center mw-meta text-muted-foreground",
					children: e
				}, e)), Array.from({ length: 35 }).map((t, n) => {
					let r = n + 1;
					return /* @__PURE__ */ u("div", {
						className: "min-h-28 border-b border-r border-border p-2",
						children: [/* @__PURE__ */ l("span", {
							className: "mw-meta text-muted-foreground",
							children: r <= 30 ? r : ""
						}), r === 8 ? /* @__PURE__ */ u("div", {
							className: "mt-2 grid gap-1",
							children: [
								/* @__PURE__ */ l("button", {
									type: "button",
									className: "border-l-2 border-primary bg-panel p-2 text-left text-[10px]",
									onClick: () => void e?.onCalendarEventSelect?.({
										id: "mw-0042-review",
										title: "MW-0042 REVIEW",
										date: "2026-09-08"
									}),
									children: "MW-0042 REVIEW"
								}),
								/* @__PURE__ */ l("button", {
									type: "button",
									className: "border-l-2 border-success bg-panel p-2 text-left text-[10px]",
									onClick: () => void e?.onCalendarEventSelect?.({
										id: "source-sync",
										title: "SOURCE SYNC",
										date: "2026-09-08"
									}),
									children: "SOURCE SYNC"
								}),
								/* @__PURE__ */ l("button", {
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
function Si({ actions: e } = {}) {
	let [t, n] = s("# mw-0042"), [r, i] = s("");
	return /* @__PURE__ */ u(Z, {
		activeResource: "chat",
		section: "WORK",
		title: "Chat",
		children: [/* @__PURE__ */ l("h1", {
			className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
			children: "Case conversations"
		}), /* @__PURE__ */ u("div", {
			className: "mt-8 grid min-h-[640px] gap-5 lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ u("aside", {
				className: "border border-border bg-panel p-4",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-muted-foreground",
					children: "Channels"
				}), [
					"# mw-0042",
					"# research",
					"# legal-review"
				].map((e, r) => /* @__PURE__ */ u("button", {
					type: "button",
					onClick: () => n(e),
					className: `mw-link mt-2 w-full px-3 text-left text-sm ${t === e ? "bg-card font-bold text-primary" : "text-muted-foreground"}`,
					children: [e, r === 0 ? /* @__PURE__ */ l(K, {
						variant: "info",
						children: "3"
					}) : null]
				}, e))]
			}), /* @__PURE__ */ u("section", {
				className: "flex flex-col border border-border bg-card",
				children: [
					/* @__PURE__ */ l("div", {
						className: "border-b border-border p-4",
						children: /* @__PURE__ */ l("strong", { children: t })
					}),
					/* @__PURE__ */ u("div", {
						className: "flex-1 space-y-6 p-5",
						children: [/* @__PURE__ */ u("article", { children: [/* @__PURE__ */ l("strong", {
							className: "text-sm",
							children: "Rocksoul"
						}), /* @__PURE__ */ l("p", {
							className: "mt-2 text-sm",
							children: "Identity match is still the blocker."
						})] }), /* @__PURE__ */ u("article", { children: [/* @__PURE__ */ l("strong", {
							className: "text-sm",
							children: "Mira"
						}), /* @__PURE__ */ l("p", {
							className: "mt-2 text-sm",
							children: "I linked the source fragment. Provenance is complete."
						})] })]
					}),
					/* @__PURE__ */ u("form", {
						className: "border-t border-border p-4",
						onSubmit: (n) => {
							n.preventDefault(), r.trim() && (e?.onChatSend?.({
								channel: t,
								message: r.trim()
							}), i(""));
						},
						children: [/* @__PURE__ */ l(Hn, {
							label: `Message ${t}…`,
							value: r,
							onChange: (e) => i(e.currentTarget.value),
							maxLength: 800,
							characterCount: !0,
							placeholder: `Message ${t}…`
						}), /* @__PURE__ */ l("div", {
							className: "mt-3 flex justify-end",
							children: /* @__PURE__ */ l(G, {
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
function Ci({ actions: e } = {}) {
	let [t, n] = s("");
	return /* @__PURE__ */ u(Z, {
		activeResource: "ai",
		section: "WORK",
		title: "AI Workspace",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "AI Workspace"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Ask across records. Keep citations visible. Never collapse uncertainty."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-5 xl:grid-cols-[1.35fr_.65fr]",
				children: [/* @__PURE__ */ u("section", {
					className: "flex min-h-[620px] flex-col border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ l("p", {
							className: "mw-meta text-muted-foreground",
							children: "Conversation"
						}),
						/* @__PURE__ */ u("article", {
							className: "mt-6 border-l-2 border-info pl-4",
							children: [/* @__PURE__ */ l("p", {
								className: "mw-meta text-info",
								children: "You"
							}), /* @__PURE__ */ l("p", {
								className: "mt-2 text-sm",
								children: "Why is MW-0042 still unresolved?"
							})]
						}),
						/* @__PURE__ */ u("article", {
							className: "mt-6 border-l-2 border-primary pl-4",
							children: [
								/* @__PURE__ */ l("p", {
									className: "mw-meta text-primary",
									children: "MoonWitness AI"
								}),
								/* @__PURE__ */ l("p", {
									className: "mt-2 text-sm leading-7",
									children: "Temporal and motif signals are strong, but identity remains partial."
								}),
								/* @__PURE__ */ l("p", {
									className: "mt-2 text-sm leading-7",
									children: "The legal layer also has unresolved jurisdiction."
								}),
								/* @__PURE__ */ u("div", {
									className: "mt-5 border-t border-border pt-4",
									children: [/* @__PURE__ */ l("p", {
										className: "mw-meta text-muted-foreground",
										children: "Citations"
									}), /* @__PURE__ */ l("p", {
										className: "mt-2 font-mono text-xs",
										children: "EVENT-0042-A · PERSON-0042-A · AWS-0042-A"
									})]
								}),
								/* @__PURE__ */ l("p", {
									className: "mw-meta mt-5 border-l-2 border-warning pl-3 text-warning",
									children: "Correlation supports investigation, not closure."
								})
							]
						}),
						/* @__PURE__ */ u("form", {
							className: "mt-auto border-t border-border pt-4",
							onSubmit: (r) => {
								r.preventDefault(), t.trim() && (e?.onAIAsk?.({
									caseId: "MW-0042",
									prompt: t.trim()
								}), n(""));
							},
							children: [/* @__PURE__ */ l(Hn, {
								label: "Ask with case context…",
								value: t,
								onChange: (e) => n(e.currentTarget.value),
								maxLength: 1200,
								characterCount: !0,
								placeholder: "Ask with case context…"
							}), /* @__PURE__ */ l(G, {
								className: "mt-3",
								type: "submit",
								disabled: !t.trim(),
								children: "Ask"
							})]
						})
					]
				}), /* @__PURE__ */ u("aside", {
					className: "border border-border bg-panel p-5",
					children: [/* @__PURE__ */ l("p", {
						className: "mw-meta text-muted-foreground",
						children: "Context"
					}), /* @__PURE__ */ u("dl", {
						className: "mt-5 grid gap-5 text-sm",
						children: [
							/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Case"
							}), /* @__PURE__ */ l("dd", {
								className: "mt-2 font-bold",
								children: "MW-0042 / The Silent Flight"
							})] }),
							/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Sources"
							}), /* @__PURE__ */ l("dd", {
								className: "mt-2",
								children: "4 canonical records"
							})] }),
							/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Legal"
							}), /* @__PURE__ */ l("dd", {
								className: "mt-2",
								children: "2 legal instruments"
							})] }),
							/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Community"
							}), /* @__PURE__ */ l("dd", {
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
var wi = {
	case: "READ / WRITE",
	event: "READ / WRITE",
	person: "READ / REVIEW",
	rgbl: "READ / WRITE",
	aws: "REVIEWER+",
	perspective: "READ / ANALYZE",
	correlation: "READ / ANALYZE"
};
function Ti() {
	return /* @__PURE__ */ u(Z, {
		activeResource: "resources",
		section: "DATA",
		title: "Resources",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Resource navigation"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "AutoMenu-driven. Routes are generated from resource descriptors and permissions."
			}),
			/* @__PURE__ */ u("section", {
				className: "mt-8 border border-border bg-card p-5",
				children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-primary",
					children: "Auto Menu"
				}), /* @__PURE__ */ l("div", {
					className: "mt-5 overflow-x-auto",
					children: /* @__PURE__ */ u("table", {
						className: "w-full min-w-[680px] border-collapse text-left",
						children: [/* @__PURE__ */ l("thead", { children: /* @__PURE__ */ l("tr", {
							className: "border-b border-border",
							children: [
								"Resource",
								"Route",
								"Repository",
								"Access"
							].map((e) => /* @__PURE__ */ l("th", {
								className: "p-3 mw-meta text-muted-foreground",
								children: e
							}, e))
						}) }), /* @__PURE__ */ l("tbody", { children: tr.map((e) => /* @__PURE__ */ u("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ l("th", {
									className: "p-4 text-sm",
									children: e.label
								}),
								/* @__PURE__ */ l("td", {
									className: "p-4 font-mono text-xs",
									children: e.path
								}),
								/* @__PURE__ */ l("td", {
									className: "p-4 font-mono text-xs text-muted-foreground",
									children: e.repo
								}),
								/* @__PURE__ */ l("td", {
									className: "p-4",
									children: /* @__PURE__ */ l(K, {
										variant: e.resource === "aws" ? "partial" : e.resource === "correlation" || e.resource === "perspective" ? "info" : "verified",
										children: wi[e.resource]
									})
								})
							]
						}, e.resource)) })]
					})
				})]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-6 border-l-2 border-primary pl-4 text-muted-foreground",
				children: "RULE / If a resource is registered and allowed, AutoMenu exposes it. No hand-maintained duplicate nav."
			})
		]
	});
}
function Ei({ actions: e } = {}) {
	let [t, n] = s("Profile"), [r, i] = s("Rocksoul");
	return /* @__PURE__ */ u(Z, {
		activeResource: "settings",
		section: "ACCOUNT",
		title: "Profile / Settings",
		children: [/* @__PURE__ */ l("h1", {
			className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
			children: "Profile & Settings"
		}), /* @__PURE__ */ u("div", {
			className: "mt-8 grid gap-5 lg:grid-cols-[330px_1fr]",
			children: [/* @__PURE__ */ u("aside", {
				className: "border border-border bg-card p-6",
				children: [/* @__PURE__ */ u("div", {
					className: "flex items-center gap-4 border-b border-border pb-6",
					children: [/* @__PURE__ */ l("span", {
						className: "flex size-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-white",
						children: "RS"
					}), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("strong", { children: "Rocksoul" }), /* @__PURE__ */ l("p", {
						className: "mw-meta mt-1 text-muted-foreground",
						children: "researcher"
					})] })]
				}), /* @__PURE__ */ l("nav", {
					className: "mt-5 grid",
					children: [
						"Profile",
						"Appearance",
						"Notifications",
						"Security",
						"API / Integrations"
					].map((e) => /* @__PURE__ */ l("button", {
						type: "button",
						onClick: () => n(e),
						className: `mw-link w-full px-3 text-left text-sm ${t === e ? "font-bold text-primary" : "text-muted-foreground"}`,
						children: e
					}, e))
				})]
			}), /* @__PURE__ */ u("section", {
				className: "border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ l("h2", {
						className: "text-xl font-bold",
						children: t
					}),
					t === "Profile" ? /* @__PURE__ */ u("div", {
						className: "mt-6 grid max-w-xl gap-5",
						children: [
							/* @__PURE__ */ l(q, {
								label: "Display name",
								value: r,
								onChange: (e) => i(e.currentTarget.value)
							}),
							/* @__PURE__ */ l(q, {
								label: "Role",
								readOnly: !0,
								value: "researcher"
							}),
							/* @__PURE__ */ l(G, {
								onClick: () => void e?.onSaveProfile?.({ displayName: r }),
								children: "Save profile"
							})
						]
					}) : null,
					t === "Appearance" ? /* @__PURE__ */ u("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ l("p", {
							className: "mw-meta text-muted-foreground",
							children: "Theme / Light · Dark · System"
						}), /* @__PURE__ */ l("div", {
							className: "mt-4",
							children: /* @__PURE__ */ l(Xn, {})
						})]
					}) : null,
					t === "Notifications" ? /* @__PURE__ */ u("div", {
						className: "mt-6 max-w-xl",
						children: [/* @__PURE__ */ l(Kn, {
							label: "Case updates",
							defaultChecked: !0
						}), /* @__PURE__ */ l(Kn, {
							label: "Mentions and review assignments",
							defaultChecked: !0
						})]
					}) : null,
					t === "Security" ? /* @__PURE__ */ u("div", {
						className: "mt-6 grid max-w-xl gap-4",
						children: [/* @__PURE__ */ l(q, {
							label: "Current session",
							readOnly: !0,
							value: "Current browser / fixture"
						}), /* @__PURE__ */ l(G, {
							variant: "danger",
							onClick: () => void e?.onSignOutOtherSessions?.(),
							children: "Sign out other sessions"
						})]
					}) : null,
					t === "API / Integrations" ? /* @__PURE__ */ u("div", {
						className: "mt-6 grid max-w-xl gap-4",
						children: [/* @__PURE__ */ l(Y, { state: "empty" }), /* @__PURE__ */ l(G, {
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
function Di({ actions: e } = {}) {
	return /* @__PURE__ */ u(Z, {
		activeResource: "settings",
		section: "SECURITY",
		title: "Authorization UX",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Authorization UX"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Permissions are explained before actions fail."
			}),
			/* @__PURE__ */ u("section", {
				className: "mt-8 border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ l("h2", {
						className: "text-lg font-bold",
						children: "Role: Researcher"
					}),
					/* @__PURE__ */ l("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Can inspect and review evidence. Cannot publish legal decisions."
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-8 grid gap-8 xl:grid-cols-[1.1fr_.7fr]",
						children: [/* @__PURE__ */ u("div", {
							className: "grid",
							children: [/* @__PURE__ */ u("div", {
								className: "grid grid-cols-[1fr_180px] border-b border-border py-3 mw-meta text-muted-foreground",
								children: [/* @__PURE__ */ l("span", { children: "Capability" }), /* @__PURE__ */ l("span", { children: "Access" })]
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
							].map(([e, t, n]) => /* @__PURE__ */ u("div", {
								className: "grid grid-cols-[1fr_180px] items-center border-b border-border py-4 text-sm",
								children: [/* @__PURE__ */ l("span", { children: e }), /* @__PURE__ */ l(K, {
									variant: n,
									children: t
								})]
							}, e))]
						}), /* @__PURE__ */ u("div", {
							className: "border border-primary bg-background p-6",
							children: [
								/* @__PURE__ */ l("p", {
									className: "mw-meta text-primary",
									children: "Action blocked"
								}),
								/* @__PURE__ */ l("h3", {
									className: "mt-4 text-lg font-bold",
									children: "You can’t publish this decision."
								}),
								/* @__PURE__ */ l("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "Legal Reviewer or Admin is required."
								}),
								/* @__PURE__ */ l(G, {
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
function Oi() {
	return /* @__PURE__ */ u(Z, {
		activeResource: "dashboard",
		section: "SYSTEM",
		title: "System States",
		backendState: "offline",
		children: [
			/* @__PURE__ */ l("h1", {
				className: "mw-display text-4xl font-black uppercase sm:text-[38px]",
				children: "Error / Empty / Loading / Offline / Forbidden"
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "One recovery language across every resource."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-5",
				children: [
					/* @__PURE__ */ l(Y, {
						state: "error",
						traceId: "TRACE-0042-QUERY"
					}),
					/* @__PURE__ */ l(Y, { state: "empty" }),
					/* @__PURE__ */ l(Y, { state: "loading" }),
					/* @__PURE__ */ l(Y, {
						state: "offline",
						lastKnownState: "42 cases cached at 05:32"
					}),
					/* @__PURE__ */ l(Y, {
						state: "forbidden",
						requiredPermission: "legal:publish",
						currentRole: "researcher"
					})
				]
			})
		]
	});
}
function ki() {
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(vi, {}), /* @__PURE__ */ l(ur, {
		open: !0,
		onClose: () => void 0,
		resources: er,
		permissions: nr
	})] });
}
function Ai() {
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(vi, {}), /* @__PURE__ */ l(sr, {
		open: !0,
		onClose: () => void 0,
		notifications: _i
	})] });
}
var ji = {
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
}, Mi = ji, Ni = ji.legalResultStates, Pi = ji.applicabilityAxes, Fi = ji.reviewPipeline, Ii = ji.guardrails;
function Li(e) {
	return ji.legalResultStates.find((t) => t.id === e);
}
function Ri(e) {
	return ji.applicabilityAxes.find((t) => t.id === e);
}
//#endregion
//#region src/components/legal-applicability-matrix.tsx
var zi = {
	supported: "verified",
	"not-supported": "restricted",
	disputed: "disputed",
	unresolved: "unresolved"
}, Bi = {
	permitted: "verified",
	restricted: "restricted",
	prohibited: "prohibited",
	disputed: "disputed",
	unresolved: "unresolved"
};
function Vi(e, t) {
	return e.find((e) => e.axisId === t) ?? {
		axisId: t,
		state: "unresolved",
		basis: "Not assessed."
	};
}
function Hi({ assessments: e = [], className: t, title: n = "Legal applicability matrix", description: r = "Applicability is assessed across independent temporal, territorial, personal, and subject-matter axes. Axis state is not itself a legal verdict.", showVocabulary: a = !0, showPipeline: o = !0 }) {
	let s = i(), c = i();
	return /* @__PURE__ */ u("section", {
		className: W("border border-primary bg-card p-5", t),
		"aria-labelledby": s,
		"aria-describedby": c,
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4",
				children: [/* @__PURE__ */ u("div", { children: [
					/* @__PURE__ */ l("p", {
						className: "mw-eyebrow text-primary",
						children: "LAW / applicability"
					}),
					/* @__PURE__ */ l("h3", {
						id: s,
						className: "mw-display mt-2 text-2xl font-black uppercase",
						children: n
					}),
					/* @__PURE__ */ l("p", {
						id: c,
						className: "mt-2 max-w-3xl text-sm leading-6 text-muted-foreground",
						children: r
					})
				] }), /* @__PURE__ */ l(K, {
					variant: "unresolved",
					children: Mi.principle
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-5 grid gap-3 md:grid-cols-2",
				role: "list",
				"aria-label": "Applicability axes",
				children: Pi.map((t) => {
					let n = Vi(e, t.id);
					return /* @__PURE__ */ u("article", {
						role: "listitem",
						className: "border border-border bg-background p-4",
						"data-axis": t.id,
						children: [
							/* @__PURE__ */ u("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
									className: "mw-meta text-primary",
									children: t.id
								}), /* @__PURE__ */ l("h4", {
									className: "mt-1 font-bold text-foreground",
									children: t.label
								})] }), /* @__PURE__ */ l(K, {
									variant: zi[n.state],
									children: n.state
								})]
							}),
							/* @__PURE__ */ l("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: t.question
							}),
							/* @__PURE__ */ u("div", {
								className: "mt-4 border-t border-border pt-3",
								children: [
									/* @__PURE__ */ l("p", {
										className: "mw-meta text-muted-foreground",
										children: "Basis"
									}),
									/* @__PURE__ */ l("p", {
										className: "mt-1 text-sm text-foreground",
										children: n.basis ?? "Not assessed."
									}),
									n.sourceRefs?.length ? /* @__PURE__ */ u("p", {
										className: "mt-2 font-mono text-[11px] text-muted-foreground",
										children: ["Sources: ", n.sourceRefs.join(" · ")]
									}) : null
								]
							})
						]
					}, t.id);
				})
			}),
			a ? /* @__PURE__ */ u("div", {
				className: "mt-5 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ l("p", {
						className: "mw-meta text-muted-foreground",
						children: "Reviewed result vocabulary"
					}),
					/* @__PURE__ */ l("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: Ni.map((e) => /* @__PURE__ */ l(K, {
							variant: Bi[e.id] ?? "neutral",
							children: e.label
						}, e.id))
					}),
					/* @__PURE__ */ l("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: "Result vocabulary is available only after source, authority, applicability, competing claims, and review remain inspectable."
					})
				]
			}) : null,
			o ? /* @__PURE__ */ l("ol", {
				className: "mt-5 grid gap-2 border-t border-border pt-4 lg:grid-cols-5",
				"aria-label": "Legal review pipeline",
				children: Fi.map((e, t) => /* @__PURE__ */ u("li", {
					className: "relative border border-border bg-background p-3",
					children: [
						/* @__PURE__ */ l("p", {
							className: "mw-meta text-primary",
							children: String(t + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ l("strong", {
							className: "mt-1 block text-xs text-foreground",
							children: e.label
						}),
						/* @__PURE__ */ l("p", {
							className: "mt-2 text-[11px] leading-5 text-muted-foreground",
							children: e.description
						})
					]
				}, e.id))
			}) : null,
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-5 border-t border-border pt-4 text-muted-foreground",
				children: "Text equivalent: every axis, state, basis, source reference, review stage, and guardrail remains live text."
			})
		]
	});
}
//#endregion
//#region src/screens/aws-legal.tsx
function Ui() {
	return /* @__PURE__ */ u("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ l("div", { className: "h-0.5 flex-1 bg-primary" }),
					/* @__PURE__ */ l("span", {
						className: "mw-eyebrow text-primary",
						children: "12 / The boundary"
					}),
					/* @__PURE__ */ l("div", { className: "h-0.5 flex-1 bg-primary" })
				]
			}),
			/* @__PURE__ */ l("h2", {
				className: "mw-display mt-8 text-5xl font-black uppercase sm:text-7xl",
				children: "Cool. Now the law gets involved."
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-reading mt-5 text-base leading-7 text-muted-foreground",
				children: "Evidence asks what happened. Law asks what rule would apply. Those are different layers and must stay visually separate."
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-8",
				children: /* @__PURE__ */ l(Hi, {})
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ l(Wr, { ...X.legal }), /* @__PURE__ */ u("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ l(_r, {
						variant: "legal-instrument",
						sourceId: "LAW-FIX-01",
						title: "Synthetic Cross-Border Movement Instrument",
						excerpt: "Reference-only fixture. It exists to prove legal source presentation, not to assert real law.",
						citation: "LAW-FIX-01",
						provenance: "fixture/aws/0042/law-01",
						verification: "reference-only"
					}), /* @__PURE__ */ l(vr, {
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
function Wi() {
	return /* @__PURE__ */ u("div", {
		className: "bg-background text-foreground",
		children: [/* @__PURE__ */ l(pr, {
			caseId: X.caseId,
			surface: "community"
		}), /* @__PURE__ */ u("main", {
			className: "mw-shell-wide py-12",
			children: [/* @__PURE__ */ l(Mr, {
				caseId: X.caseId,
				eyebrow: "13 / Community / MW-0042",
				title: X.title,
				summary: "Ask, follow, save, and submit context without mutating canonical evidence.",
				status: X.status,
				variant: "community",
				actions: /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(G, {
					variant: "secondary",
					children: "Follow"
				}), /* @__PURE__ */ l(G, {
					variant: "ghost",
					children: "Save"
				})] })
			}), /* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-[1.4fr_.7fr]",
				children: [/* @__PURE__ */ l($r, {
					question: "If the person match is partial, why is the overall correlation still high?",
					moderatorNote: "Temporal and source-independence dimensions are strong. Identity remains a blocking uncertainty and is shown separately.",
					submission: X.community.submission
				}), /* @__PURE__ */ u("aside", {
					className: "grid content-start gap-4",
					children: [/* @__PURE__ */ u("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ l(J, {
								label: "Following",
								value: String(X.community.following),
								context: "members"
							}),
							/* @__PURE__ */ l(J, {
								label: "Saved",
								value: String(X.community.saved),
								context: "case saves"
							}),
							/* @__PURE__ */ l(J, {
								label: "Discussion",
								value: String(X.community.discussions),
								context: "threads"
							})
						]
					}), /* @__PURE__ */ l("p", {
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
function Gi() {
	return /* @__PURE__ */ u("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "11 / MW-0042 / Correlation"
			}),
			/* @__PURE__ */ l("h2", {
				className: "mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
				children: "The trails are starting to line up."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-5 text-lg text-muted-foreground",
				children: "That still doesn’t make them the same thing."
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ l(Rr, {
					records: X.records,
					score: X.correlation.score
				}), /* @__PURE__ */ l(Nr, { ...X.correlation })]
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-5 text-sm font-semibold text-warning",
				children: "Identity remains incomplete. Case stays open."
			})
		]
	});
}
//#endregion
//#region src/screens/design-system.tsx
var Ki = [
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
function qi() {
	let [e, t] = s(!1);
	return /* @__PURE__ */ u("section", {
		className: "mw-shell-wide py-12",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "16 / Design system"
			}),
			/* @__PURE__ */ l("h1", {
				className: "mw-display mt-4 text-5xl font-black uppercase sm:text-7xl",
				children: "Rocksoul UI / MoonWitness grammar."
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-reading mt-5 text-base leading-7 text-muted-foreground",
				children: "Tokens, primitives, states, research patterns, and operational surfaces stay traceable to rocksoul-assets."
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ l("h2", {
					className: "text-2xl font-bold",
					children: "Color semantics"
				}), /* @__PURE__ */ l("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
					children: Ki.map(([e, t]) => /* @__PURE__ */ u("div", {
						className: "border border-border bg-card p-3",
						children: [/* @__PURE__ */ l("div", { className: `h-20 ${t}` }), /* @__PURE__ */ l("p", {
							className: "mw-meta mt-3",
							children: e
						})]
					}, e))
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ l("h2", {
					className: "text-2xl font-bold",
					children: "Typography"
				}), /* @__PURE__ */ u("div", {
					className: "mt-6 grid gap-5",
					children: [
						/* @__PURE__ */ l("p", {
							className: "mw-display text-6xl font-black uppercase",
							children: "Inter Tight / Display"
						}),
						/* @__PURE__ */ l("p", {
							className: "text-lg",
							children: "Inter / readable body. Evidence should never lose readability to style."
						}),
						/* @__PURE__ */ l("p", {
							className: "mw-eyebrow",
							children: "IBM Plex Mono / archive metadata / 0.16em"
						})
					]
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ l("h2", {
						className: "text-2xl font-bold",
						children: "Primitive states"
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ l(G, { children: "Primary" }),
							/* @__PURE__ */ l(G, {
								variant: "secondary",
								children: "Secondary"
							}),
							/* @__PURE__ */ l(G, {
								variant: "ghost",
								children: "Ghost"
							}),
							/* @__PURE__ */ l(G, {
								variant: "danger",
								children: "Danger"
							}),
							/* @__PURE__ */ l(G, {
								loading: !0,
								children: "Loading"
							}),
							/* @__PURE__ */ l(G, {
								disabled: !0,
								children: "Disabled"
							})
						]
					}),
					/* @__PURE__ */ l("div", {
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
						].map((e) => /* @__PURE__ */ l(K, {
							variant: e,
							children: e
						}, e))
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-8 grid gap-5 lg:grid-cols-2",
						children: [/* @__PURE__ */ u("div", {
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ l(q, {
									label: "Input",
									placeholder: "Source ID"
								}),
								/* @__PURE__ */ l(q, {
									label: "Error",
									error: "Source locator is required."
								}),
								/* @__PURE__ */ l(Hn, {
									label: "Textarea",
									maxLength: 120,
									characterCount: !0,
									defaultValue: "Not enough yet."
								}),
								/* @__PURE__ */ l(Un, {
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
						}), /* @__PURE__ */ u("div", { children: [
							/* @__PURE__ */ l(Wn, {
								label: "Checkbox",
								description: "Labels activate the control.",
								defaultChecked: !0
							}),
							/* @__PURE__ */ l(Gn, {
								name: "demo-radio",
								label: "Radio A",
								defaultChecked: !0
							}),
							/* @__PURE__ */ l(Gn, {
								name: "demo-radio",
								label: "Radio B"
							}),
							/* @__PURE__ */ l(Kn, {
								label: "Switch",
								description: "Binary states only.",
								defaultChecked: !0
							}),
							/* @__PURE__ */ l(G, {
								className: "mt-5",
								variant: "secondary",
								onClick: () => t(!0),
								children: "Open dialog"
							})
						] })]
					}),
					/* @__PURE__ */ l(Dn, {
						open: e,
						title: "Accessible dialog",
						onClose: () => t(!1),
						children: /* @__PURE__ */ l("p", {
							className: "text-sm leading-6 text-muted-foreground",
							children: "Native modal behavior, Escape close, and focus restoration are part of the contract."
						})
					})
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ l("h2", {
					className: "text-2xl font-bold",
					children: "Research components"
				}), /* @__PURE__ */ u("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ l(hr, {
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
						/* @__PURE__ */ l(_r, {
							sourceId: "SRC-STORY-0042-A",
							title: "A route nobody remembers taking",
							excerpt: "Synthetic source block used for component review.",
							citation: "STORY-0042-A",
							provenance: "fixture/story/0042/a",
							verification: "source-linked"
						}),
						/* @__PURE__ */ l(vr, {
							code: "SRC-EVENT-0042-A",
							source: "Synthetic event log",
							locator: "fixture/event/0042/a",
							variant: "block"
						}),
						/* @__PURE__ */ l(xr, {
							id: "SUB-0042-01",
							state: "needs-context",
							title: "Possible second event trace",
							body: "Provenance incomplete — not canonical evidence."
						})
					]
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ l("h2", {
						className: "text-2xl font-bold",
						children: "System patterns"
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-6 grid gap-4 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ l(Y, { state: "empty" }),
							/* @__PURE__ */ l(Y, { state: "loading" }),
							/* @__PURE__ */ l(Y, { state: "error" })
						]
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-6 grid gap-3",
						children: [/* @__PURE__ */ l(jn, { variant: "text" }), /* @__PURE__ */ l(jn, { variant: "table-row" })]
					})
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [/* @__PURE__ */ u("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ u("div", { children: [
						/* @__PURE__ */ l("p", {
							className: "mw-eyebrow text-warning",
							children: "Visual language / stable v1.3"
						}),
						/* @__PURE__ */ u("h2", {
							className: "mt-2 text-2xl font-bold",
							children: [
								D.packCount,
								" packs / ",
								D.canonicalAssetCount,
								" canonical assets"
							]
						}),
						/* @__PURE__ */ l("p", {
							className: "mt-2 max-w-3xl text-sm leading-6 text-muted-foreground",
							children: "Released upstream visual language. The registry, runtime motion, and developer distribution are now stable UI contracts."
						})
					] }), /* @__PURE__ */ u(K, {
						variant: "verified",
						children: ["STABLE · ", D.commit.slice(0, 8)]
					})]
				}), /* @__PURE__ */ l("div", {
					className: "mt-6",
					children: /* @__PURE__ */ l(Fn, {
						initialCategory: "Investigation",
						limit: 6,
						compact: !0
					})
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "mw-section",
				children: [
					/* @__PURE__ */ l("h2", {
						className: "text-2xl font-bold",
						children: "Tabs / compact platform rows"
					}),
					/* @__PURE__ */ l("div", {
						className: "mt-5",
						children: /* @__PURE__ */ l(mi, { items: [
							{
								id: "evidence",
								label: "Evidence",
								content: /* @__PURE__ */ l("p", {
									className: "text-sm",
									children: "Evidence remains independently inspectable."
								})
							},
							{
								id: "correlation",
								label: "Correlation",
								content: /* @__PURE__ */ l("p", {
									className: "text-sm",
									children: "Score never hides its explanation."
								})
							},
							{
								id: "legal",
								label: "Legal",
								content: /* @__PURE__ */ l("p", {
									className: "text-sm",
									children: "Source law and review stay distinct."
								})
							}
						] })
					}),
					/* @__PURE__ */ l(An, {}),
					/* @__PURE__ */ u("div", {
						className: "mw-platform mt-6 border border-border bg-background p-4 text-foreground",
						children: [
							/* @__PURE__ */ l(Cr, {
								repo: "rocksoul-superhero",
								status: "degraded",
								queue: 1
							}),
							/* @__PURE__ */ l(wr, {
								timestamp: "05:31",
								actor: "reviewer",
								action: "context.requested",
								resource: "SUB-0042-01",
								result: "pending",
								traceId: "TRACE-0042-B"
							}),
							/* @__PURE__ */ l("div", {
								className: "mt-4",
								children: /* @__PURE__ */ l(J, {
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
var Ji = {
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
function Yi({ domain: e }) {
	if (e === "EVENT") {
		let e = X.recordDetails.EVENT.temporal;
		return /* @__PURE__ */ u("section", {
			className: "border border-rgbl-green bg-card p-5",
			"aria-labelledby": "event-window-heading",
			children: [
				/* @__PURE__ */ l("p", {
					className: "mw-meta text-rgbl-green-fg",
					children: "Temporal window / fixture"
				}),
				/* @__PURE__ */ l("h3", {
					id: "event-window-heading",
					className: "mt-3 text-lg font-bold",
					children: "Movement sits inside a bounded interval."
				}),
				/* @__PURE__ */ u("dl", {
					className: "mt-5 grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ u("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Start"
							}), /* @__PURE__ */ l("dd", {
								className: "mw-display mt-2 text-3xl font-black",
								children: e.start
							})]
						}),
						/* @__PURE__ */ u("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "End"
							}), /* @__PURE__ */ l("dd", {
								className: "mw-display mt-2 text-3xl font-black",
								children: e.end
							})]
						}),
						/* @__PURE__ */ u("div", {
							className: "border border-border p-3",
							children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: "Timezone"
							}), /* @__PURE__ */ l("dd", {
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
		let e = X.recordDetails.PERSON.matchDimensions, t = [
			["Role", e.role],
			["Movement", e.movement],
			["Identity", e.identity]
		];
		return /* @__PURE__ */ u("section", {
			className: "border border-warning bg-card p-5",
			"aria-labelledby": "identity-match-heading",
			children: [
				/* @__PURE__ */ l("p", {
					className: "mw-meta text-warning",
					children: "Identity dimensions / partial"
				}),
				/* @__PURE__ */ l("h3", {
					id: "identity-match-heading",
					className: "mt-3 text-lg font-bold",
					children: "Two attributes line up. Identity does not."
				}),
				/* @__PURE__ */ l("dl", {
					className: "mt-5 grid gap-2",
					children: t.map(([e, t]) => /* @__PURE__ */ u("div", {
						className: "flex items-center justify-between border-b border-border py-3",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-muted-foreground",
							children: e
						}), /* @__PURE__ */ l("dd", { children: /* @__PURE__ */ l(K, {
							variant: t ? "supported" : "partial",
							children: t ? "MATCH" : "NOT VERIFIED"
						}) })]
					}, e))
				}),
				/* @__PURE__ */ l("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Identity remains a closure blocker even when role and movement align."
				})
			]
		});
	}
	if (e === "RGBL") {
		let e = X.recordDetails.RGBL.channels, t = [
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
		return /* @__PURE__ */ u("section", {
			className: "border border-border bg-card p-5",
			"aria-labelledby": "rgbl-channel-heading",
			children: [
				/* @__PURE__ */ l("p", {
					className: "mw-meta text-rgbl-blue-fg",
					children: "RGBL channels / semantic source reading"
				}),
				/* @__PURE__ */ l("h3", {
					id: "rgbl-channel-heading",
					className: "mt-3 text-lg font-bold",
					children: "Four channels preserve different parts of the motif."
				}),
				/* @__PURE__ */ l("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: t.map(([e, t, n]) => /* @__PURE__ */ u("div", {
						className: `border-l-2 bg-background p-4 ${n}`,
						children: [/* @__PURE__ */ l("p", {
							className: "mw-meta",
							children: e
						}), /* @__PURE__ */ l("p", {
							className: "mt-2 text-sm font-semibold text-foreground",
							children: t
						})]
					}, e))
				}),
				/* @__PURE__ */ l("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Semantic relation is visible. Causal relation is not asserted."
				})
			]
		});
	}
	return /* @__PURE__ */ u("section", {
		className: "border border-border bg-card p-5",
		children: [/* @__PURE__ */ l("p", {
			className: "mw-meta text-rgbl-red-fg",
			children: "Narrative provenance"
		}), /* @__PURE__ */ u("dl", {
			className: "mt-4 grid gap-2 text-sm",
			children: [
				/* @__PURE__ */ u("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ l("dt", {
						className: "text-muted-foreground",
						children: "Type"
					}), /* @__PURE__ */ l("dd", { children: X.recordDetails.STORY.sourceType })]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ l("dt", {
						className: "text-muted-foreground",
						children: "Locator"
					}), /* @__PURE__ */ l("dd", { children: X.recordDetails.STORY.locator })]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ l("dt", {
						className: "text-muted-foreground",
						children: "Independent"
					}), /* @__PURE__ */ l("dd", { children: "YES" })]
				})
			]
		})]
	});
}
function Xi({ domain: e }) {
	let t = Ji[e];
	if (e === "AWS") return /* @__PURE__ */ u("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: [
			/* @__PURE__ */ u("p", {
				className: "mw-eyebrow text-primary",
				children: [t.number, " / AWS"]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-3 text-muted-foreground",
				children: t.kicker
			}),
			/* @__PURE__ */ l("h2", {
				className: "mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
				children: "THE BOUNDARY QUESTION."
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-reading mt-6 text-lg leading-8 text-muted-foreground",
				children: t.statement
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-10",
				children: /* @__PURE__ */ l(Ar, {
					legalState: X.legal.status,
					children: /* @__PURE__ */ l("p", {
						className: "text-sm font-semibold",
						children: "Cool. Now the law gets involved."
					})
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[.8fr_1.2fr]",
				children: [/* @__PURE__ */ l(Wr, { ...X.legal }), /* @__PURE__ */ l("div", {
					className: "grid gap-4",
					children: X.legal.instruments.map((e) => /* @__PURE__ */ l(_r, {
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
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-6 border-t border-border pt-4 text-muted-foreground",
				children: X.legal.conclusion
			})
		]
	});
	let n = X.records.find((t) => t.domain === e);
	if (!n) return null;
	let r = X.recordDetails[e];
	return /* @__PURE__ */ l("section", {
		className: "mw-shell-wide min-h-[760px] py-14",
		children: /* @__PURE__ */ u("div", {
			className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ u("div", { children: [
				/* @__PURE__ */ u("p", {
					className: "mw-eyebrow text-primary",
					children: [
						t.number,
						" / ",
						e
					]
				}),
				/* @__PURE__ */ l("p", {
					className: "mw-meta mt-3 text-muted-foreground",
					children: t.kicker
				}),
				/* @__PURE__ */ l("h2", {
					className: "mw-display mt-4 text-5xl font-black uppercase leading-[0.94] sm:text-7xl",
					children: n.title
				}),
				/* @__PURE__ */ l("p", {
					className: "mw-reading mt-6 text-lg leading-8 text-muted-foreground",
					children: t.statement
				}),
				/* @__PURE__ */ u("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ l(K, {
						variant: n.status,
						children: n.status
					}), /* @__PURE__ */ l(K, {
						variant: r.independent ? "verified" : "unresolved",
						children: r.independent ? "independent source" : "dependency unknown"
					})]
				}),
				/* @__PURE__ */ u("dl", {
					className: "mw-meta mt-6 grid gap-2 border-t border-border pt-4 text-muted-foreground",
					children: [/* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Source type" }), /* @__PURE__ */ l("dd", {
							className: "text-right text-foreground",
							children: r.sourceType
						})]
					}), /* @__PURE__ */ u("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ l("dt", { children: "Locator" }), /* @__PURE__ */ l("dd", {
							className: "text-right text-foreground",
							children: r.locator
						})]
					})]
				})
			] }), /* @__PURE__ */ u("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ l(hr, {
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
					/* @__PURE__ */ l(Yi, { domain: n.domain }),
					n.domain === "EVENT" ? /* @__PURE__ */ l(yr, {
						variant: "event",
						timestamp: `${X.recordDetails.EVENT.temporal.start}–${X.recordDetails.EVENT.temporal.end}`,
						title: "Movement inside missing interval",
						description: "Fixture event interval remains independently inspectable.",
						source: n.source,
						status: n.verification
					}) : null,
					/* @__PURE__ */ l(_r, {
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
var Zi = () => /* @__PURE__ */ l(Xi, { domain: "STORY" }), Qi = () => /* @__PURE__ */ l(Xi, { domain: "EVENT" }), $i = () => /* @__PURE__ */ l(Xi, { domain: "PERSON" }), ea = () => /* @__PURE__ */ l(Xi, { domain: "RGBL" }), ta = () => /* @__PURE__ */ l(Xi, { domain: "AWS" });
//#endregion
//#region src/screens/auth.tsx
function na() {
	return /* @__PURE__ */ l("section", {
		className: "flex min-h-[760px] items-center justify-center bg-background px-4 py-12 text-foreground",
		children: /* @__PURE__ */ u("div", {
			className: "grid w-full max-w-5xl overflow-hidden border border-border bg-card lg:grid-cols-[1fr_.85fr]",
			children: [/* @__PURE__ */ u("div", {
				className: "hidden min-h-[620px] border-r border-border p-10 lg:flex lg:flex-col lg:justify-between",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-primary",
					children: "14 / Community identity"
				}), /* @__PURE__ */ l("h1", {
					className: "mw-display mt-5 text-6xl font-black uppercase leading-[0.92]",
					children: "Enter the observatory."
				})] }), /* @__PURE__ */ l("p", {
					className: "max-w-md text-sm leading-6 text-muted-foreground",
					children: "Membership can unlock following, saved cases, discussion, and context submission. Public evidence remains readable without login."
				})]
			}), /* @__PURE__ */ l("div", {
				className: "p-6 sm:p-10",
				children: /* @__PURE__ */ l(ri, {})
			})]
		})
	});
}
//#endregion
//#region src/screens/landing.tsx
var ra = [
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
function ia() {
	return /* @__PURE__ */ l(bn, {});
}
function aa() {
	return /* @__PURE__ */ l("section", {
		id: "manifesto",
		className: "mw-shell-wide mw-section scroll-mt-20",
		children: /* @__PURE__ */ u("div", {
			className: "grid gap-12 lg:grid-cols-[0.65fr_1.35fr]",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "02 / Manifesto"
			}), /* @__PURE__ */ u("h2", {
				className: "mw-display mt-4 text-5xl font-black uppercase leading-[0.95] sm:text-7xl",
				children: [
					"Mystery can stay.",
					/* @__PURE__ */ l("br", {}),
					"Evidence cannot hide."
				]
			})] }), /* @__PURE__ */ u("div", {
				className: "mw-reading self-end",
				children: [
					/* @__PURE__ */ l("p", {
						className: "text-xl leading-8 sm:text-2xl sm:leading-9",
						children: "MoonWitness is not built to make every trail become a conclusion."
					}),
					/* @__PURE__ */ l("p", {
						className: "mt-6 text-base leading-7 text-muted-foreground",
						children: "A story may align with an event. A person may remain partial. A text may preserve the motif. The interface should show what connects, what contradicts, who supplied it, and where certainty stops."
					}),
					/* @__PURE__ */ l("p", {
						className: "mt-6 text-base font-bold",
						children: "Not enough yet is still an answer."
					})
				]
			})]
		})
	});
}
function oa() {
	return /* @__PURE__ */ l("section", {
		id: "rocksoul",
		className: "mw-shell-wide mw-section",
		children: /* @__PURE__ */ u("div", {
			className: "grid min-h-[520px] gap-8 border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ u("div", {
				className: "flex flex-col justify-between",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-primary",
					children: "03 / Rocksoul"
				}), /* @__PURE__ */ u("h2", {
					className: "mw-display mt-4 text-5xl font-black uppercase sm:text-7xl",
					children: [
						"The thread,",
						/* @__PURE__ */ l("br", {}),
						"not the throne."
					]
				})] }), /* @__PURE__ */ l("p", {
					className: "mw-reading text-sm leading-6 text-muted-foreground",
					children: "Rocksoul moves across records and repositories as a connective character. MoonWitness remains the observatory and product identity."
				})]
			}), /* @__PURE__ */ u("div", {
				className: "relative min-h-80 overflow-hidden border border-border bg-background",
				"aria-label": "Abstract Rocksoul character field",
				children: [
					/* @__PURE__ */ l("div", { className: "absolute inset-x-[20%] bottom-0 top-[22%] border-x border-border bg-panel" }),
					/* @__PURE__ */ l("div", { className: "absolute left-1/2 top-[12%] size-28 -translate-x-1/2 rounded-full border border-primary bg-card" }),
					/* @__PURE__ */ l("div", {
						className: "absolute bottom-6 left-6 right-6 border-t border-primary pt-3",
						children: /* @__PURE__ */ l("span", {
							className: "mw-meta text-primary",
							children: "ROCKSOUL / CHARACTER SIGNAL"
						})
					})
				]
			})]
		})
	});
}
function sa() {
	return /* @__PURE__ */ u("section", {
		id: "repositories",
		className: "mw-shell-wide mw-section",
		children: [/* @__PURE__ */ u("div", {
			className: "flex flex-wrap items-end justify-between gap-5",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "04 / Repository universe"
			}), /* @__PURE__ */ l("h2", {
				className: "mw-display mt-3 text-4xl font-black uppercase sm:text-6xl",
				children: "Five sources. One observatory."
			})] }), /* @__PURE__ */ l("p", {
				className: "mw-reading text-sm leading-6 text-muted-foreground",
				children: "STORY, EVENT, PERSON, and RGBL enter evidence reconstruction. AWS enters after correlation as the legal/regulatory boundary."
			})]
		}), /* @__PURE__ */ u("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ l(gr, {
					repo: "rocksoul-legend",
					domain: "STORY",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ l(gr, {
					repo: "rocksoul-event",
					domain: "EVENT",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ l(gr, {
					repo: "rocksoul-superhero",
					domain: "PERSON",
					status: "degraded",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ l(gr, {
					repo: "rocksoul-rgbl",
					domain: "RGBL",
					status: "healthy",
					records: 1,
					schema: "v1",
					lastSync: "fixture"
				}),
				/* @__PURE__ */ l(gr, {
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
function ca() {
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("div", {
		id: "method",
		className: "mw-shell-wide scroll-mt-20",
		children: /* @__PURE__ */ l(gi, {})
	}), /* @__PURE__ */ l("section", {
		className: "mw-shell-wide mw-section",
		children: /* @__PURE__ */ u("div", {
			className: "grid gap-12 lg:grid-cols-[0.7fr_1.3fr]",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "Method"
			}), /* @__PURE__ */ u("h2", {
				className: "mw-display mt-4 text-4xl font-black uppercase sm:text-6xl",
				children: [
					"From record",
					/* @__PURE__ */ l("br", {}),
					"to restraint."
				]
			})] }), /* @__PURE__ */ l("div", {
				className: "grid border-t border-border",
				children: ra.map(([e, t, n, r]) => /* @__PURE__ */ l("article", {
					id: e,
					className: "scroll-mt-24 border-b border-border py-6",
					children: /* @__PURE__ */ u("div", {
						className: "grid gap-4 sm:grid-cols-[80px_1fr_1.4fr]",
						children: [
							/* @__PURE__ */ l("span", {
								className: "mw-eyebrow text-muted-foreground",
								children: t
							}),
							/* @__PURE__ */ l("h3", {
								className: "text-lg font-bold",
								children: n
							}),
							/* @__PURE__ */ l("p", {
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
function la() {
	return /* @__PURE__ */ u("div", {
		id: "top",
		className: "bg-background text-foreground",
		children: [/* @__PURE__ */ l(pr, {}), /* @__PURE__ */ u("main", { children: [
			/* @__PURE__ */ l(ia, {}),
			/* @__PURE__ */ l(aa, {}),
			/* @__PURE__ */ l(oa, {}),
			/* @__PURE__ */ l(sa, {}),
			/* @__PURE__ */ l(ca, {})
		] })]
	});
}
//#endregion
//#region src/screens/mw0042-overview.tsx
function ua() {
	let e = /* @__PURE__ */ l("div", {
		id: "case-overview",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ l(Mr, {
			caseId: X.caseId,
			eyebrow: X.eyebrow,
			title: X.title,
			summary: X.summary,
			status: X.status,
			metadata: [{
				label: "updated",
				value: "05:30 WIB / fixture"
			}]
		})
	}), t = /* @__PURE__ */ l(Hr, {
		records: X.records,
		compact: !0
	}), n = /* @__PURE__ */ l("section", {
		id: "evidence",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ l(Kr, { records: X.records })
	}), r = /* @__PURE__ */ u("section", {
		id: "correlation",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ l("p", {
				className: "mw-eyebrow text-primary",
				children: "MW-0042 / Correlation"
			}),
			/* @__PURE__ */ l("h2", {
				className: "mw-display mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.94] sm:text-6xl",
				children: "The trails are starting to line up."
			}),
			/* @__PURE__ */ l("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: "That still doesn’t make them the same thing."
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-6",
				children: /* @__PURE__ */ l(qr, {
					records: X.records,
					correlation: X.correlation
				})
			})
		]
	}), i = /* @__PURE__ */ l("section", {
		id: "aws",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ l(Jr, {
			legal: X.legal,
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
	}), a = /* @__PURE__ */ l(Yr, { cases: [{
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
	return /* @__PURE__ */ u("article", {
		id: "case",
		className: "scroll-mt-16 bg-background text-foreground",
		children: [/* @__PURE__ */ l(pr, { caseId: X.caseId }), /* @__PURE__ */ u("div", {
			className: "mw-shell-wide py-10 sm:py-14",
			children: [
				/* @__PURE__ */ l("nav", {
					"aria-label": "MW-0042 sections",
					className: "mb-7 flex flex-wrap border-b border-border pb-3",
					children: [
						["Overview", "case-overview"],
						["Evidence", "evidence"],
						["Correlation", "correlation"],
						["AWS", "aws"]
					].map(([e, t]) => /* @__PURE__ */ l("a", {
						href: `#${t}`,
						className: "mw-link px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground",
						children: e
					}, t))
				}),
				/* @__PURE__ */ l(Xr, {
					header: e,
					summary: t,
					evidence: n,
					correlation: r,
					legal: i,
					related: a
				}),
				/* @__PURE__ */ l("footer", {
					className: "mt-10 border-t border-border pt-4",
					children: /* @__PURE__ */ l("p", {
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
var da = [{
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
function fa({ actions: e } = {}) {
	return /* @__PURE__ */ l(fr, {
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
			{ label: X.caseId }
		],
		backendState: "degraded",
		notifications: da,
		children: /* @__PURE__ */ u("div", {
			id: "platform",
			className: "px-4 py-8 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ l(Mr, {
					caseId: X.caseId,
					eyebrow: "15 / Platform / Case review",
					title: "Review the blockers.",
					summary: "Two blockers remain before closure. Dense operational surfaces stay clean and readable.",
					status: "unresolved",
					variant: "platform",
					metadata: [{
						label: "review",
						value: "needs-review"
					}],
					actions: /* @__PURE__ */ l(G, {
						variant: "secondary",
						onClick: () => void e?.onPlatformAction?.({
							action: "keep-unresolved",
							resource: X.caseId
						}),
						children: "Keep case unresolved"
					})
				}),
				/* @__PURE__ */ u("section", {
					className: "mt-6 border border-border bg-card p-4",
					children: [/* @__PURE__ */ l("p", {
						className: "mw-meta text-muted-foreground",
						children: "Canonical blockers"
					}), /* @__PURE__ */ u("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ l("span", {
							className: "border border-warning px-3 py-2 font-mono text-[10px] font-bold uppercase text-warning",
							children: "Person identity incomplete"
						}), /* @__PURE__ */ l("span", {
							className: "border border-primary px-3 py-2 font-mono text-[10px] font-bold uppercase text-primary",
							children: "AWS jurisdiction unresolved"
						})]
					})]
				}),
				/* @__PURE__ */ l("section", {
					className: "mt-6",
					children: /* @__PURE__ */ l(Zr, { repositories: X.repositories.map((e) => ({
						...e,
						queue: +(e.status === "degraded"),
						errors: 0
					})) })
				}),
				/* @__PURE__ */ l("section", {
					className: "mt-6",
					children: /* @__PURE__ */ l(Qr, { submission: X.community.submission })
				}),
				/* @__PURE__ */ l("section", {
					className: "mt-6",
					children: /* @__PURE__ */ l(Jr, {
						legal: X.legal,
						sources: [{
							id: "LAW-FIX-01",
							title: "Synthetic Cross-Border Movement Instrument",
							excerpt: "Fixture-only legal source for review workflow.",
							locator: "fixture/aws/0042/law-01"
						}]
					})
				}),
				/* @__PURE__ */ l("section", {
					className: "mt-6",
					children: /* @__PURE__ */ u("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ l(J, {
								label: "Canonical blockers",
								value: "2",
								context: "must remain visible",
								delta: "0",
								tone: "warning"
							}),
							/* @__PURE__ */ l(J, {
								label: "Repositories",
								value: "5",
								context: "4 online / 1 degraded",
								delta: "1 degraded"
							}),
							/* @__PURE__ */ l(J, {
								label: "Open submissions",
								value: "1",
								context: "needs context",
								delta: "+1",
								tone: "warning"
							}),
							/* @__PURE__ */ l(J, {
								label: "Case state",
								value: "OPEN",
								context: "unresolved retained"
							})
						]
					})
				}),
				/* @__PURE__ */ u("section", {
					id: "audit",
					className: "mt-6 scroll-mt-24 border border-border bg-card",
					children: [
						/* @__PURE__ */ l("div", {
							className: "border-b border-border p-3",
							children: /* @__PURE__ */ l("p", {
								className: "mw-meta text-muted-foreground",
								children: "Audit trail"
							})
						}),
						/* @__PURE__ */ l(wr, {
							timestamp: "05:30",
							actor: "fixture",
							action: "review.opened",
							resource: "MW-0042",
							result: "needs-review",
							traceId: "TRACE-0042-A"
						}),
						/* @__PURE__ */ l(wr, {
							timestamp: "05:31",
							actor: "reviewer",
							action: "context.requested",
							resource: "SUB-0042-01",
							result: "pending",
							traceId: "TRACE-0042-B"
						}),
						/* @__PURE__ */ l(wr, {
							timestamp: "05:32",
							actor: "reviewer",
							action: "review.unresolved",
							resource: "MW-0042",
							result: "open",
							traceId: "TRACE-0042-C"
						})
					]
				}),
				/* @__PURE__ */ u("div", {
					className: "sticky bottom-0 mt-6 flex flex-wrap gap-2 border-t border-border bg-background/95 py-3 backdrop-blur md:static md:bg-transparent",
					children: [
						/* @__PURE__ */ l(G, {
							variant: "danger",
							onClick: () => void e?.onPlatformAction?.({
								action: "request-context",
								resource: X.caseId
							}),
							children: "Request context"
						}),
						/* @__PURE__ */ l(G, {
							variant: "secondary",
							onClick: () => void e?.onPlatformAction?.({
								action: "flag-record",
								resource: X.caseId
							}),
							children: "Flag record"
						}),
						/* @__PURE__ */ l(G, {
							variant: "secondary",
							onClick: () => void e?.onPlatformAction?.({
								action: "keep-unresolved",
								resource: X.caseId
							}),
							children: "Keep case unresolved"
						}),
						/* @__PURE__ */ l(G, {
							variant: "ghost",
							onClick: () => void e?.onPlatformAction?.({
								action: "return-to-queue",
								resource: X.caseId
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
function pa({ eyebrow: e, title: t, summary: n, recordId: r, status: i, metadata: a = [], actions: o, variant: s = "cinematic", className: d, assetFile: f = "svg/archive-dossier.svg" }) {
	let p = s === "cinematic";
	return /* @__PURE__ */ u("header", {
		className: W("relative isolate overflow-hidden border border-border bg-background", p ? "min-h-[320px] px-6 py-8 sm:min-h-[380px] sm:px-8 sm:py-10" : "px-5 py-6", d),
		children: [p ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(rn, {
			pack: "editorial",
			file: f,
			alt: "",
			"aria-hidden": "true",
			className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
		}), /* @__PURE__ */ l("div", {
			className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,.98),rgba(11,11,11,.84)_52%,rgba(11,11,11,.48)),linear-gradient(0deg,rgba(11,11,11,.92),transparent_62%)]",
			"aria-hidden": "true"
		})] }) : null, /* @__PURE__ */ u("div", {
			className: W("relative grid gap-8", p && "lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,.55fr)] lg:items-end"),
			children: [/* @__PURE__ */ u("div", { children: [
				/* @__PURE__ */ l("p", {
					className: "mw-eyebrow text-primary",
					children: e
				}),
				/* @__PURE__ */ l("h2", {
					className: W("mt-4 text-balance font-serif font-medium tracking-[-0.035em]", p ? "text-[clamp(2.8rem,6vw,5rem)] leading-[.92]" : "text-[clamp(2rem,4vw,3.5rem)] leading-[.96]"),
					children: t
				}),
				n ? /* @__PURE__ */ l("p", {
					className: "mw-reading mt-5 text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
					children: n
				}) : null,
				r ? /* @__PURE__ */ l("p", {
					className: "mw-meta mt-5 text-subtle",
					children: r
				}) : null,
				o ? /* @__PURE__ */ l("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: o
				}) : null
			] }), i || a.length ? /* @__PURE__ */ u("aside", {
				className: "border border-border bg-background/70 p-4 backdrop-blur-md",
				"aria-label": "Dossier metadata",
				children: [i ? /* @__PURE__ */ l(K, {
					variant: i.variant ?? "neutral",
					children: i.label
				}) : null, /* @__PURE__ */ l("dl", {
					className: "mt-4 grid gap-3",
					children: a.map((e) => /* @__PURE__ */ u("div", {
						className: "grid gap-1 border-b border-border pb-3 last:border-b-0 last:pb-0",
						children: [/* @__PURE__ */ l("dt", {
							className: "mw-meta text-subtle",
							children: e.label
						}), /* @__PURE__ */ l("dd", {
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
var ma = [
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
function ha(e, t, n) {
	n && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), n(t));
}
function ga({ rows: e, className: t, caption: n = "Claim by evidence matrix", onActivateRow: r }) {
	return /* @__PURE__ */ u("div", {
		className: W("max-h-[560px] overflow-auto border border-border bg-card", t),
		children: [/* @__PURE__ */ u("table", {
			className: "w-full min-w-[760px] border-separate border-spacing-0 text-left text-xs",
			children: [
				/* @__PURE__ */ l("caption", {
					className: "sr-only",
					children: n
				}),
				/* @__PURE__ */ l("thead", { children: /* @__PURE__ */ u("tr", { children: [
					/* @__PURE__ */ l("th", {
						className: "sticky left-0 top-0 z-30 min-w-[220px] border-b border-r border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Claim"
					}),
					/* @__PURE__ */ l("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Epistemic"
					}),
					ma.map((e) => /* @__PURE__ */ l("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: e.label
					}, e.key)),
					/* @__PURE__ */ l("th", {
						className: "sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground",
						children: "Sources"
					})
				] }) }),
				/* @__PURE__ */ l("tbody", { children: e.map((e) => {
					let t = ma.map(({ key: t, label: n }) => `${e.values[t] ?? 0} ${n.toLowerCase()}`).join(", ");
					return /* @__PURE__ */ u("tr", {
						tabIndex: 0,
						"aria-label": `${e.label}. ${t}. ${e.sourceCount ?? 0} sources.`,
						onClick: () => r?.(e),
						onKeyDown: (t) => ha(t, e, r),
						className: W("group outline-none", r && "cursor-pointer", "focus-visible:[&>td]:bg-panel hover:[&>td]:bg-panel"),
						children: [
							/* @__PURE__ */ u("td", {
								className: "sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-3 group-focus-visible:shadow-[inset_2px_0_var(--mw-brand-crimson)] group-hover:shadow-[inset_2px_0_var(--mw-brand-crimson)]",
								children: [/* @__PURE__ */ l("strong", {
									className: "block text-sm text-foreground",
									children: e.label
								}), e.context ? /* @__PURE__ */ l("small", {
									className: "mt-1 block text-[10px] leading-4 text-muted-foreground",
									children: e.context
								}) : null]
							}),
							/* @__PURE__ */ l("td", {
								className: "border-b border-border px-3 py-3 text-muted-foreground",
								children: e.epistemic ?? "—"
							}),
							ma.map(({ key: t }) => {
								let n = e.values[t] ?? 0;
								return /* @__PURE__ */ l("td", {
									className: "border-b border-border px-3 py-3",
									children: /* @__PURE__ */ l("span", {
										className: W("inline-flex h-7 min-w-7 items-center justify-center border border-border px-2 font-mono text-[10px]", n > 0 && "border-primary/50 bg-primary/10 text-foreground", n > 1 && "bg-primary/20", n > 2 && "bg-primary/30"),
										children: n
									})
								}, t);
							}),
							/* @__PURE__ */ l("td", {
								className: "border-b border-border px-3 py-3 font-mono text-[10px] text-muted-foreground",
								children: e.sourceCount ?? 0
							})
						]
					}, e.id);
				}) })
			]
		}), e.length === 0 ? /* @__PURE__ */ l("p", {
			className: "p-6 text-sm text-muted-foreground",
			children: "No evidence rows yet."
		}) : null]
	});
}
//#endregion
//#region src/components/observatory-section-nav.tsx
function _a({ items: e, label: t = "INDEX /", offset: n = 112, className: i }) {
	let [a, o] = s(e[0]?.id ?? "");
	return r(() => {
		let t = e.map((e) => document.getElementById(e.id)).filter(Boolean);
		if (!t.length || typeof IntersectionObserver > "u") return;
		let r = new IntersectionObserver((e) => {
			let t = e.filter((e) => e.isIntersecting).sort((e, t) => t.intersectionRatio - e.intersectionRatio)[0];
			t?.target.id && o(t.target.id);
		}, {
			rootMargin: `-${n}px 0px -68% 0px`,
			threshold: [
				0,
				.15,
				.4,
				.7
			]
		});
		return t.forEach((e) => r.observe(e)), () => r.disconnect();
	}, [e, n]), /* @__PURE__ */ u("nav", {
		"aria-label": "Observatory sections",
		className: W("sticky z-30 flex min-h-10 items-center gap-3 border border-border bg-background/95 px-3 backdrop-blur-md", i),
		style: { top: n - 48 },
		children: [/* @__PURE__ */ l("span", {
			className: "mw-meta shrink-0 text-subtle",
			children: t
		}), /* @__PURE__ */ l("div", {
			className: "flex min-w-0 flex-1 self-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			children: e.map((e) => /* @__PURE__ */ l("a", {
				href: `#${e.id}`,
				"aria-current": a === e.id ? "location" : void 0,
				className: W("relative flex min-h-10 shrink-0 items-center px-3 font-mono text-[10px] text-muted-foreground no-underline transition hover:text-foreground", a === e.id && "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary"),
				children: e.label
			}, e.id))
		})]
	});
}
//#endregion
//#region src/components/provenance-rail.tsx
function va({ nodes: e, orientation: t = "horizontal", className: n, description: r, onActivate: i }) {
	let a = t === "horizontal", o = r ?? e.map((e) => `${e.kind}: ${e.label}`).join(" → ");
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card p-4", n),
		"aria-label": "Provenance rail",
		children: [/* @__PURE__ */ l("div", {
			className: W("flex gap-3", a ? "items-stretch overflow-x-auto" : "flex-col"),
			children: e.map((t, n) => /* @__PURE__ */ u("div", {
				className: W("flex", a ? "items-center" : "flex-col"),
				children: [/* @__PURE__ */ u("button", {
					type: "button",
					onClick: () => i?.(t),
					className: W("grid min-h-20 min-w-[150px] grid-cols-[32px_1fr] items-center gap-3 border bg-background p-3 text-left", t.active ? "border-primary" : "border-border", t.unresolved && "border-dashed border-warning", t.external && "shadow-[inset_0_-2px_var(--mw-status-info)]"),
					children: [/* @__PURE__ */ l(rn, {
						pack: "correlation-semantics",
						file: `svg/node-${t.kind}.svg`,
						alt: "",
						"aria-hidden": "true",
						className: "h-8 w-8"
					}), /* @__PURE__ */ u("span", { children: [
						/* @__PURE__ */ l("span", {
							className: "mw-meta block text-primary",
							children: t.kind
						}),
						/* @__PURE__ */ l("strong", {
							className: "mt-1 block text-sm text-foreground",
							children: t.label
						}),
						t.detail ? /* @__PURE__ */ l("small", {
							className: "mt-1 block text-[10px] leading-4 text-muted-foreground",
							children: t.detail
						}) : null
					] })]
				}), n < e.length - 1 ? /* @__PURE__ */ l("span", {
					"aria-hidden": "true",
					className: W("shrink-0 text-primary", a ? "px-2 text-xl" : "self-center py-2"),
					children: "→"
				}) : null]
			}, t.id))
		}), /* @__PURE__ */ u("p", {
			className: "mt-3 border-t border-border pt-3 text-xs leading-5 text-muted-foreground",
			children: [
				/* @__PURE__ */ l("strong", {
					className: "text-foreground",
					children: "Text equivalent:"
				}),
				" ",
				o
			]
		})]
	});
}
//#endregion
//#region src/components/event-intelligence.tsx
var ya = {
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
}, ba = [
	78,
	258,
	438,
	618
];
function xa({ nodes: e, edges: t, className: n, title: r = "Event intelligence topology", description: o = "Canonical event graph showing claims, evidence, sources, context and qualified external references." }) {
	let s = i(), c = i(), d = a(() => {
		let t = /* @__PURE__ */ new Map();
		e.forEach((e) => {
			let n = ya[e.kind];
			t.set(n, [...t.get(n) ?? [], e]);
		});
		let n = Math.max(1, ...Array.from(t.values()).map((e) => e.length)), r = Math.max(320, 112 + n * 76), i = /* @__PURE__ */ new Map();
		for (let [e, n] of t) {
			let t = (r - 120) / Math.max(1, n.length);
			n.forEach((n, r) => {
				i.set(n.id, {
					x: ba[e],
					y: 76 + t * (r + .5)
				});
			});
		}
		return {
			height: r,
			positions: i
		};
	}, [e]);
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card p-4", n),
		"aria-label": r,
		children: [/* @__PURE__ */ u("svg", {
			viewBox: `0 0 760 ${d.height}`,
			className: "h-auto min-h-[300px] w-full",
			role: "img",
			"aria-labelledby": `${s} ${c}`,
			children: [
				/* @__PURE__ */ l("title", {
					id: s,
					children: r
				}),
				/* @__PURE__ */ l("desc", {
					id: c,
					children: o
				}),
				/* @__PURE__ */ u("g", {
					"aria-hidden": "true",
					children: [t.map((e) => {
						let t = d.positions.get(e.from), n = d.positions.get(e.to);
						return !t || !n ? null : /* @__PURE__ */ u("g", { children: [/* @__PURE__ */ l("line", {
							x1: t.x + 64,
							y1: t.y,
							x2: n.x - 64,
							y2: n.y,
							stroke: "var(--mw-border-strong)",
							strokeWidth: "1.5",
							strokeDasharray: e.status === "hypothesis" || e.status === "unresolved" ? "5 4" : void 0
						}), /* @__PURE__ */ l("text", {
							x: (t.x + n.x) / 2,
							y: (t.y + n.y) / 2 - 5,
							textAnchor: "middle",
							fill: "var(--mw-text-secondary)",
							fontSize: "8",
							fontFamily: "IBM Plex Mono, monospace",
							children: e.label.replaceAll("_", " ")
						})] }, e.id);
					}), e.map((e) => {
						let t = d.positions.get(e.id);
						if (!t) return null;
						let n = e.kind === "event";
						return /* @__PURE__ */ u("g", {
							transform: `translate(${t.x - 64} ${t.y - 26})`,
							children: [
								/* @__PURE__ */ l("rect", {
									width: "128",
									height: "52",
									rx: "6",
									fill: "var(--mw-surface-page)",
									stroke: n ? "var(--mw-brand-crimson)" : "var(--mw-border-strong)",
									strokeWidth: n ? "2" : "1",
									strokeDasharray: e.external ? "5 4" : void 0
								}),
								/* @__PURE__ */ l("text", {
									x: "10",
									y: "17",
									fill: n ? "var(--mw-brand-crimson)" : "var(--mw-text-secondary)",
									fontSize: "8",
									fontFamily: "IBM Plex Mono, monospace",
									children: e.kind.toUpperCase()
								}),
								/* @__PURE__ */ l("text", {
									x: "10",
									y: "34",
									fill: "var(--mw-text-primary)",
									fontSize: "9",
									fontFamily: "IBM Plex Mono, monospace",
									children: e.label.length > 18 ? e.label.slice(0, 17) + "…" : e.label
								}),
								e.confidence == null ? null : /* @__PURE__ */ u("text", {
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
		}), /* @__PURE__ */ u("div", {
			className: "mt-4 border-t border-border pt-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-foreground",
				children: "Text equivalent"
			}), /* @__PURE__ */ l("ul", {
				className: "mt-2 grid gap-1 text-xs leading-5 text-muted-foreground",
				children: t.map((t) => {
					let n = e.find((e) => e.id === t.from), r = e.find((e) => e.id === t.to);
					if (!n || !r) return null;
					let i = t.confidence == null ? "" : ` · ${Math.round(t.confidence * 100)}%`, a = t.status ? ` · ${t.status}` : "";
					return /* @__PURE__ */ u("li", { children: [
						/* @__PURE__ */ l("strong", {
							className: "text-foreground",
							children: n.label
						}),
						" → ",
						t.label.replaceAll("_", " "),
						" → ",
						/* @__PURE__ */ l("strong", {
							className: "text-foreground",
							children: r.label
						}),
						a,
						i
					] }, t.id);
				})
			})]
		})]
	});
}
function Sa({ confidence: e, scope: t, uncertainty: n, alternatives: r, status: i, className: a }) {
	let o = Math.round(Math.max(0, Math.min(1, e)) * 100);
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card p-4", a),
		"aria-label": "Historicity and uncertainty",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("p", {
					className: "mw-meta text-primary",
					children: "Historicity confidence"
				}), /* @__PURE__ */ u("strong", {
					className: "mt-1 block font-serif text-4xl font-medium text-foreground",
					children: [o, "%"]
				})] }), i ? /* @__PURE__ */ l("span", {
					className: "mw-meta border border-border px-2 py-1 text-foreground",
					children: i.replaceAll("_", " ")
				}) : null]
			}),
			/* @__PURE__ */ l("div", {
				className: "mt-4 h-3 overflow-hidden rounded-full border border-border bg-background",
				role: "progressbar",
				"aria-label": "Historicity confidence",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": o,
				children: /* @__PURE__ */ l("div", {
					className: "h-full bg-primary",
					style: { width: `${o}%` }
				})
			}),
			/* @__PURE__ */ u("p", {
				className: "mt-3 text-sm leading-6 text-foreground",
				children: [
					/* @__PURE__ */ l("strong", { children: "Scope:" }),
					" ",
					t
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ u("div", {
					className: "border border-dashed border-border p-3",
					children: [/* @__PURE__ */ u("p", {
						className: "mw-meta text-foreground",
						children: ["Uncertainty · ", n.length]
					}), /* @__PURE__ */ l("ul", {
						className: "mt-2 grid gap-2 text-xs leading-5 text-muted-foreground",
						children: n.map((e) => /* @__PURE__ */ l("li", { children: e }, e))
					})]
				}), /* @__PURE__ */ u("div", {
					className: "border border-border p-3",
					children: [/* @__PURE__ */ u("p", {
						className: "mw-meta text-foreground",
						children: ["Alternatives · ", r.length]
					}), /* @__PURE__ */ l("ul", {
						className: "mt-2 grid gap-2 text-xs leading-5 text-muted-foreground",
						children: r.map((e) => /* @__PURE__ */ l("li", { children: e }, e))
					})]
				})]
			}),
			/* @__PURE__ */ l("p", {
				className: "mw-meta mt-4 text-muted-foreground",
				children: "Confidence is scoped evidence assessment, not a universal truth score."
			})
		]
	});
}
//#endregion
//#region src/components/textual-intelligence.tsx
function Ca(e) {
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
function wa({ items: e, title: t = "Canonical textual hierarchy", description: n = "Ordered textual identities. Each node remains a distinct record.", className: r, empty: i }) {
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card", r),
		"aria-label": t,
		children: [/* @__PURE__ */ u("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-primary",
				children: t
			}), /* @__PURE__ */ l("p", {
				className: "mt-2 max-w-3xl text-xs leading-5 text-muted-foreground",
				children: n
			})]
		}), e.length ? /* @__PURE__ */ l("ol", {
			className: "grid list-none gap-0 p-0 md:grid-cols-2 xl:grid-cols-3",
			"aria-label": t + " levels",
			children: e.map((t, n) => /* @__PURE__ */ u("li", {
				className: "relative min-w-0 border-b border-border p-4 md:border-r xl:min-h-44",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ u("span", {
							className: "mw-meta text-muted-foreground",
							children: [
								String(n + 1).padStart(2, "0"),
								" / ",
								t.kind.replaceAll("_", " ")
							]
						}), /* @__PURE__ */ l(K, {
							variant: Ca(t.state),
							children: t.state ?? "record"
						})]
					}),
					/* @__PURE__ */ l("strong", {
						className: "mt-4 block break-words text-base leading-5 text-foreground",
						children: t.label ?? t.id
					}),
					/* @__PURE__ */ l("code", {
						className: "mt-2 block break-all font-mono text-[10px] leading-4 text-primary",
						children: t.id
					}),
					t.detail ? /* @__PURE__ */ l("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: t.detail
					}) : null,
					t.metadata?.length ? /* @__PURE__ */ l("dl", {
						className: "mt-4 grid gap-2 border-t border-border pt-3",
						children: t.metadata.map((e) => /* @__PURE__ */ u("div", {
							className: "grid grid-cols-[88px_1fr] gap-2",
							children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: e.label
							}), /* @__PURE__ */ l("dd", {
								className: "m-0 break-words text-xs text-foreground",
								children: e.value
							})]
						}, e.label + ":" + e.value))
					}) : null,
					n < e.length - 1 ? /* @__PURE__ */ l("span", {
						className: "absolute -right-[6px] top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-border bg-card xl:block",
						"aria-hidden": "true"
					}) : null
				]
			}, t.id))
		}) : /* @__PURE__ */ l("div", {
			className: "p-4 text-sm text-muted-foreground",
			children: i ?? "No textual hierarchy records are available."
		})]
	});
}
function Ta(e) {
	return e.direction ? e.direction : e.script === "Arab" || e.script === "Hebr" ? "rtl" : "ltr";
}
function Ea({ lanes: e, title: t = "Parallel exact-text lanes", description: n = "Source and translation content remain separate records.", className: r }) {
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card", r),
		"aria-label": t,
		children: [/* @__PURE__ */ u("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-primary",
				children: t
			}), /* @__PURE__ */ l("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: n
			})]
		}), /* @__PURE__ */ u("div", {
			className: "grid gap-3 p-3",
			children: [e.map((e) => {
				let t = typeof e.text == "string" && e.text.length > 0, n = e.state ?? (t ? "available" : "missing");
				return /* @__PURE__ */ u("article", {
					className: "border border-border bg-background",
					children: [
						/* @__PURE__ */ u("header", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3",
							children: [/* @__PURE__ */ u("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ l(K, {
										variant: Ca(n),
										children: n
									}),
									/* @__PURE__ */ l(K, {
										variant: "neutral",
										children: e.language
									}),
									/* @__PURE__ */ l(K, {
										variant: "info",
										children: e.representation
									})
								]
							}), /* @__PURE__ */ l("span", {
								className: "mw-meta text-muted-foreground",
								children: e.script ?? "script n/a"
							})]
						}),
						t ? /* @__PURE__ */ l("p", {
							className: "m-0 px-5 py-6 text-lg leading-8 text-foreground md:text-xl",
							lang: e.language,
							dir: Ta(e),
							children: e.text
						}) : /* @__PURE__ */ u("div", {
							className: "px-5 py-6",
							role: "status",
							children: [/* @__PURE__ */ l("strong", {
								className: "text-sm text-foreground",
								children: e.label ?? "Exact text unavailable"
							}), /* @__PURE__ */ l("p", {
								className: "mt-2 text-xs leading-5 text-muted-foreground",
								children: "No text value was supplied for this content record."
							})]
						}),
						/* @__PURE__ */ u("footer", {
							className: "grid gap-2 border-t border-border px-4 py-3",
							children: [
								/* @__PURE__ */ l("code", {
									className: "break-all font-mono text-[10px] leading-4 text-primary",
									children: e.id
								}),
								e.artifact ? /* @__PURE__ */ u("span", {
									className: "break-all text-[10px] text-muted-foreground",
									children: ["Artifact · ", e.artifact]
								}) : null,
								e.provenance ? /* @__PURE__ */ u("span", {
									className: "break-all text-[10px] text-muted-foreground",
									children: ["Provenance · ", e.provenance]
								}) : null
							]
						})
					]
				}, e.id);
			}), e.length ? null : /* @__PURE__ */ l("p", {
				className: "m-0 p-2 text-sm text-muted-foreground",
				children: "No content lanes are available."
			})]
		})]
	});
}
function Da({ records: e, title: t = "Source, integrity & rights", description: n = "Source metadata is displayed only when declared by the record.", className: r }) {
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card", r),
		"aria-label": t,
		children: [/* @__PURE__ */ u("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-primary",
				children: t
			}), /* @__PURE__ */ l("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: n
			})]
		}), /* @__PURE__ */ u("div", {
			className: "grid md:grid-cols-2",
			children: [e.map((e) => /* @__PURE__ */ u("article", {
				className: "min-w-0 border-b border-border p-4 md:border-r",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ l(K, {
							variant: Ca(e.state),
							children: e.state ?? "declared"
						}), /* @__PURE__ */ l("span", {
							className: "mw-meta text-muted-foreground",
							children: e.availability ?? "availability n/a"
						})]
					}),
					/* @__PURE__ */ l("strong", {
						className: "mt-4 block text-sm text-foreground",
						children: e.label ?? e.id
					}),
					/* @__PURE__ */ l("code", {
						className: "mt-2 block break-all font-mono text-[10px] leading-4 text-primary",
						children: e.id
					}),
					/* @__PURE__ */ l("dl", {
						className: "mt-4 grid gap-2",
						children: [
							["Revision", e.revision],
							["SHA-256", e.sha256],
							["Rights", e.rights],
							["License", e.license],
							["Source", e.sourceReference]
						].filter((e) => !!e[1]).map(([e, t]) => /* @__PURE__ */ u("div", {
							className: "grid grid-cols-[84px_1fr] gap-2 border-t border-border pt-2",
							children: [/* @__PURE__ */ l("dt", {
								className: "mw-meta text-muted-foreground",
								children: e
							}), /* @__PURE__ */ l("dd", {
								className: "m-0 break-all text-xs leading-5 text-foreground",
								children: t
							})]
						}, e))
					})
				]
			}, e.id)), e.length ? null : /* @__PURE__ */ l("p", {
				className: "m-0 p-4 text-sm text-muted-foreground",
				children: "No source or rights records are available."
			})]
		})]
	});
}
function Oa({ relations: e, title: t = "Explicit textual relations", description: n = "Relation type, method and provenance remain inspectable. Visual proximity does not imply identity.", className: r }) {
	return /* @__PURE__ */ u("section", {
		className: W("border border-border bg-card", r),
		"aria-label": t,
		children: [/* @__PURE__ */ u("div", {
			className: "border-b border-border p-4",
			children: [/* @__PURE__ */ l("p", {
				className: "mw-meta text-primary",
				children: t
			}), /* @__PURE__ */ l("p", {
				className: "mt-2 text-xs leading-5 text-muted-foreground",
				children: n
			})]
		}), /* @__PURE__ */ u("div", {
			className: "grid gap-3 p-3",
			children: [e.map((e) => /* @__PURE__ */ u("article", {
				className: "border border-border bg-background p-4",
				children: [
					/* @__PURE__ */ u("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ l(K, {
							variant: Ca(e.state),
							children: e.state ?? "asserted"
						}), /* @__PURE__ */ l(K, {
							variant: "info",
							children: e.relation.replaceAll("_", " ")
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "mt-4 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]",
						children: [
							/* @__PURE__ */ l("code", {
								className: "break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground",
								children: e.subject
							}),
							/* @__PURE__ */ l("span", {
								className: "mw-meta text-center text-primary",
								"aria-hidden": "true",
								children: "→"
							}),
							/* @__PURE__ */ l("code", {
								className: "break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground",
								children: e.object
							})
						]
					}),
					/* @__PURE__ */ u("p", {
						className: "sr-only",
						children: [
							e.subject,
							" ",
							e.relation.replaceAll("_", " "),
							" ",
							e.object
						]
					}),
					e.method ? /* @__PURE__ */ u("p", {
						className: "mt-3 text-xs leading-5 text-muted-foreground",
						children: ["Method · ", e.method]
					}) : null,
					e.evidence?.length ? /* @__PURE__ */ u("p", {
						className: "mt-2 break-all text-[10px] leading-5 text-muted-foreground",
						children: ["Evidence · ", e.evidence.join(" · ")]
					}) : null,
					e.provenance ? /* @__PURE__ */ u("p", {
						className: "mt-2 break-all text-[10px] leading-5 text-muted-foreground",
						children: ["Provenance · ", e.provenance]
					}) : null
				]
			}, e.id)), e.length ? null : /* @__PURE__ */ l("p", {
				className: "m-0 p-2 text-sm text-muted-foreground",
				children: "No explicit textual relations are available."
			})]
		})]
	});
}
var ka = {
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
}, Aa = ka.variants, ja = ka;
function Ma(e) {
	return e ? Aa[e] ?? ka.defaultVariant : ka.defaultVariant;
}
//#endregion
//#region src/components/confidence-meter.tsx
function Na({ value: e, label: t = "Confidence", detail: n, className: r }) {
	let i = Math.round(Math.max(0, Math.min(1, Number.isFinite(e) ? e : 0)) * 100);
	return /* @__PURE__ */ u("div", {
		className: W("grid gap-2", r),
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ l("span", {
					className: "mw-meta text-muted-foreground",
					children: t
				}), /* @__PURE__ */ u("strong", {
					className: "font-mono text-xs text-foreground",
					children: [i, "%"]
				})]
			}),
			/* @__PURE__ */ l("div", {
				role: "meter",
				"aria-label": t,
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": i,
				"aria-valuetext": `${i}%`,
				className: "h-2 overflow-hidden border border-border bg-panel",
				children: /* @__PURE__ */ l("span", {
					className: "block h-full bg-current text-success",
					style: { width: `${i}%` }
				})
			}),
			n ? /* @__PURE__ */ l("p", {
				className: "text-xs leading-5 text-muted-foreground",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/components/qualified-reference.tsx
function Pa({ value: e, href: t, compact: n = !1, className: r }) {
	let i = v(e), a = /* @__PURE__ */ u("span", {
		className: W("inline-grid gap-1", n ? "grid-cols-[auto_1fr] items-center gap-x-2" : "", r),
		children: [
			i ? /* @__PURE__ */ l(K, {
				variant: "info",
				children: i.domain
			}) : /* @__PURE__ */ l(K, {
				variant: "neutral",
				children: "REFERENCE"
			}),
			/* @__PURE__ */ l("code", {
				className: "break-all text-[10px] text-foreground",
				children: e
			}),
			!n && i ? /* @__PURE__ */ u("small", {
				className: "font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground",
				children: [
					i.repository,
					" · ",
					i.kind
				]
			}) : null
		]
	});
	return t ? /* @__PURE__ */ l("a", {
		href: t,
		className: "mw-link no-underline",
		children: a
	}) : a;
}
//#endregion
//#region src/components/record-field-grid.tsx
function Fa(e) {
	return e.replaceAll("_", " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function Ia(e) {
	return /^[a-z][a-z0-9-]*:.+$/i.test(e);
}
function La(e, t) {
	return e == null || e === "" ? /* @__PURE__ */ l("span", {
		className: "text-muted-foreground",
		children: "—"
	}) : typeof e == "boolean" ? e ? "Yes" : "No" : typeof e == "number" ? Number.isInteger(e) ? String(e) : e.toFixed(2) : typeof e == "string" ? Ia(e) ? /* @__PURE__ */ l(Pa, {
		value: e,
		href: t?.(e)
	}) : /* @__PURE__ */ l("span", {
		className: "break-words",
		children: e
	}) : Array.isArray(e) ? e.length ? /* @__PURE__ */ l("div", {
		className: "grid gap-2",
		children: e.map((e, n) => /* @__PURE__ */ l("div", {
			className: "border-l border-border pl-3",
			children: La(e, t)
		}, typeof e == "string" ? e : n))
	}) : /* @__PURE__ */ l("span", {
		className: "text-muted-foreground",
		children: "None recorded"
	}) : typeof e == "object" ? /* @__PURE__ */ l("dl", {
		className: "grid gap-2",
		children: Object.entries(e).map(([e, n]) => /* @__PURE__ */ u("div", {
			className: "grid gap-1 border-l border-border pl-3",
			children: [/* @__PURE__ */ l("dt", {
				className: "mw-meta text-muted-foreground",
				children: Fa(e)
			}), /* @__PURE__ */ l("dd", {
				className: "m-0 text-sm leading-6 text-foreground",
				children: La(n, t)
			})]
		}, e))
	}) : String(e);
}
function Ra({ record: e, labels: t = {}, exclude: n = [], className: r, referenceHref: i, emptyLabel: a = "No fields recorded." }) {
	let o = new Set(n), s = Object.entries(e).filter(([e]) => !o.has(e));
	return /* @__PURE__ */ u("dl", {
		className: W("grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-3", r),
		children: [s.map(([e, n]) => /* @__PURE__ */ u("div", {
			className: "min-w-0 bg-card p-4",
			children: [/* @__PURE__ */ l("dt", {
				className: "mw-meta text-muted-foreground",
				children: t[e] ?? Fa(e)
			}), /* @__PURE__ */ l("dd", {
				className: "m-0 mt-2 text-sm leading-6 text-foreground",
				children: La(n, i)
			})]
		}, e)), s.length ? null : /* @__PURE__ */ l("div", {
			className: "bg-card p-4 text-sm text-muted-foreground",
			children: a
		})]
	});
}
//#endregion
//#region src/components/research-domain-ownership-map.tsx
var za = [
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
], Ba = Object.keys(m).filter((e) => e !== "RELATIONSHIP");
function Va({ className: e, title: t = "Research domain ownership", description: n = "Six canonical research domains connect through the reviewed relationship layer while retaining their canonical repository ownership." }) {
	let r = i(), a = `${r}-title`, o = `${r}-description`, s = m.RELATIONSHIP;
	return /* @__PURE__ */ u("figure", {
		className: W("border border-border bg-card p-4", e),
		children: [/* @__PURE__ */ u("svg", {
			viewBox: "0 0 960 540",
			className: "h-auto w-full",
			role: "img",
			"aria-labelledby": `${a} ${o}`,
			children: [
				/* @__PURE__ */ l("title", {
					id: a,
					children: t
				}),
				/* @__PURE__ */ l("desc", {
					id: o,
					children: n
				}),
				/* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("pattern", {
					id: `${r}-grid`,
					width: "32",
					height: "32",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ l("path", {
						d: "M32 0H0V32",
						fill: "none",
						stroke: "var(--mw-border)",
						strokeWidth: "1"
					})
				}) }),
				/* @__PURE__ */ l("rect", {
					width: "960",
					height: "540",
					fill: "var(--mw-surface-page)"
				}),
				/* @__PURE__ */ l("rect", {
					width: "960",
					height: "540",
					fill: `url(#${r}-grid)`,
					opacity: ".45"
				}),
				/* @__PURE__ */ l("g", {
					fill: "none",
					stroke: "var(--mw-border-strong)",
					strokeWidth: "2",
					"aria-hidden": "true",
					children: za.map((e, t) => /* @__PURE__ */ l("line", {
						x1: "480",
						y1: "270",
						x2: e.x + 126,
						y2: e.y + 66
					}, Ba[t]))
				}),
				Ba.map((e, t) => {
					let n = m[e], r = za[t];
					return /* @__PURE__ */ u("g", {
						transform: `translate(${r.x} ${r.y})`,
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ l("rect", {
								width: "252",
								height: "132",
								rx: "12",
								fill: "var(--mw-surface-raised)",
								stroke: "var(--mw-border-strong)",
								strokeWidth: "2"
							}),
							/* @__PURE__ */ l("text", {
								x: "20",
								y: "40",
								fill: "var(--mw-text-primary)",
								fontFamily: "Inter Tight, Inter, Arial, sans-serif",
								fontSize: "24",
								fontWeight: "800",
								children: e
							}),
							/* @__PURE__ */ l("text", {
								x: "20",
								y: "72",
								fill: "var(--mw-text-secondary)",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "13",
								children: n.repository
							}),
							/* @__PURE__ */ l("text", {
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
				/* @__PURE__ */ u("g", {
					transform: "translate(372 210)",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ l("rect", {
							width: "216",
							height: "120",
							rx: "14",
							fill: "var(--mw-surface-raised)",
							stroke: "var(--mw-brand-crimson)",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ l("text", {
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
						/* @__PURE__ */ l("text", {
							x: "108",
							y: "72",
							textAnchor: "middle",
							fill: "var(--mw-text-primary)",
							fontFamily: "Inter Tight, Inter, Arial, sans-serif",
							fontSize: "25",
							fontWeight: "800",
							children: "CORRELATION"
						}),
						/* @__PURE__ */ u("text", {
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
		}), /* @__PURE__ */ u("figcaption", {
			className: "mt-4 border-t border-border pt-4",
			children: [
				/* @__PURE__ */ l("p", {
					className: "mw-meta text-foreground",
					children: "Text equivalent"
				}),
				/* @__PURE__ */ l("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: n
				}),
				/* @__PURE__ */ u("ul", {
					className: "mt-3 grid gap-2 md:grid-cols-2",
					children: [Ba.map((e) => {
						let t = m[e];
						return /* @__PURE__ */ u("li", {
							className: "border border-border bg-background p-3 text-xs leading-5",
							children: [/* @__PURE__ */ l("strong", {
								className: "text-foreground",
								children: e
							}), /* @__PURE__ */ u("span", {
								className: "block text-muted-foreground",
								children: [
									t.repository,
									" · ",
									t.prefix
								]
							})]
						}, e);
					}), /* @__PURE__ */ u("li", {
						className: "border border-primary bg-background p-3 text-xs leading-5",
						children: [/* @__PURE__ */ l("strong", {
							className: "text-foreground",
							children: "RELATIONSHIP"
						}), /* @__PURE__ */ u("span", {
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
var Ha = [
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
var Ua = {
	SUPPORT: "support",
	OPPOSE: "oppose",
	QUESTIONING: "questioning",
	MIXED: "mixed",
	NEUTRAL: "neutral",
	UNKNOWN: "unknown"
};
function Wa(e) {
	return new Intl.NumberFormat(void 0, {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(e);
}
function $(e) {
	return `${Math.round(Q(e) * 100)}%`;
}
function Ga({ phenomenon: e, perspectives: t, className: n = "" }) {
	let r = Math.max(1, t.length), i = {
		x: 50,
		y: 50
	};
	return /* @__PURE__ */ u("section", {
		className: `mw-perspective-constellation ${n}`.trim(),
		"aria-label": "Perspective constellation",
		children: [/* @__PURE__ */ l("div", {
			className: "mw-perspective-constellation__canvas",
			children: /* @__PURE__ */ u("svg", {
				viewBox: "0 0 100 100",
				role: "img",
				"aria-label": `${t.length} perspectives surrounding ${e}`,
				children: [
					/* @__PURE__ */ u("title", { children: ["Perspective constellation for ", e] }),
					/* @__PURE__ */ l("defs", { children: /* @__PURE__ */ u("radialGradient", {
						id: "mw-perspective-core",
						cx: "50%",
						cy: "50%",
						r: "50%",
						children: [/* @__PURE__ */ l("stop", {
							offset: "0%",
							stopColor: "var(--mw-perspective-violet)",
							stopOpacity: ".42"
						}), /* @__PURE__ */ l("stop", {
							offset: "100%",
							stopColor: "var(--mw-perspective-violet)",
							stopOpacity: ".04"
						})]
					}) }),
					/* @__PURE__ */ l("circle", {
						cx: "50",
						cy: "50",
						r: "15",
						fill: "url(#mw-perspective-core)",
						stroke: "var(--mw-perspective-violet)",
						strokeWidth: ".55"
					}),
					t.map((e, t) => {
						let n = Math.PI * 2 * t / r - Math.PI / 2, a = i.x + Math.cos(n) * 39, o = i.y + Math.sin(n) * 39, s = Q(e.salience ?? .5);
						return /* @__PURE__ */ u("g", { children: [
							/* @__PURE__ */ l("line", {
								x1: "50",
								y1: "50",
								x2: a,
								y2: o,
								stroke: "var(--mw-perspective-edge)",
								strokeWidth: .15 + s * .24,
								opacity: .35 + s * .5
							}),
							/* @__PURE__ */ l("circle", {
								cx: a,
								cy: o,
								r: 2.5 + s * 1.9,
								className: `mw-perspective-dot mw-perspective-dot--${Ua[e.position] ?? "unknown"}`
							}),
							/* @__PURE__ */ l("text", {
								x: a,
								y: o + 6.2,
								textAnchor: "middle",
								className: "mw-perspective-svg-label",
								children: e.actorType
							})
						] }, e.id);
					}),
					/* @__PURE__ */ l("text", {
						x: "50",
						y: "49",
						textAnchor: "middle",
						className: "mw-perspective-svg-core",
						children: "PHENOMENON"
					}),
					/* @__PURE__ */ l("text", {
						x: "50",
						y: "53",
						textAnchor: "middle",
						className: "mw-perspective-svg-sub",
						children: "MANY VIEWS"
					})
				]
			})
		}), /* @__PURE__ */ l("div", {
			className: "mw-perspective-constellation__legend",
			children: t.map((e) => /* @__PURE__ */ u("article", { children: [/* @__PURE__ */ l("i", { className: `mw-perspective-legend-dot mw-perspective-legend-dot--${Ua[e.position] ?? "unknown"}` }), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("strong", { children: e.label }), /* @__PURE__ */ u("span", { children: [
				e.actorType,
				" · ",
				e.position,
				e.framing ? ` · ${e.framing}` : ""
			] })] })] }, e.id))
		})]
	});
}
var Ka = {
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
function qa({ points: e, className: t = "" }) {
	let n = Math.max(1, ...e.map((e) => e.count));
	return /* @__PURE__ */ u("section", {
		className: `mw-perspective-geo ${t}`.trim(),
		"aria-label": "Perspective geography coverage",
		children: [/* @__PURE__ */ u("svg", {
			viewBox: "0 0 100 58",
			role: "img",
			children: [
				/* @__PURE__ */ l("title", { children: "Geographic coverage of perspective observations" }),
				/* @__PURE__ */ l("path", {
					className: "mw-perspective-world",
					d: "M7 22 15 16 25 18 29 24 23 28 17 26 12 30 7 27ZM27 31 31 29 35 35 32 43 29 48 26 39ZM40 16 49 13 58 16 62 21 57 24 51 23 46 25 40 22ZM49 26 55 26 58 32 56 42 52 48 49 40 47 32ZM59 15 68 13 79 16 87 20 94 25 90 30 81 29 75 33 68 29 62 23ZM84 40 89 38 95 42 92 48 87 49 83 45Z"
				}),
				e.map((e, t) => {
					let r = Ka[e.label] ?? [12 + t * 13 % 76, 18 + t * 11 % 34], i = e.x ?? r[0], a = e.y ?? r[1], o = 1.3 + e.count / n * 2.5;
					return /* @__PURE__ */ u("g", { children: [
						/* @__PURE__ */ l("circle", {
							cx: i,
							cy: a,
							r: o + 1.8,
							className: "mw-perspective-geo-halo"
						}),
						/* @__PURE__ */ l("circle", {
							cx: i,
							cy: a,
							r: o,
							className: "mw-perspective-geo-point"
						}),
						/* @__PURE__ */ l("text", {
							x: i + 2.2,
							y: a - 2.2,
							className: "mw-perspective-svg-label",
							children: e.label
						})
					] }, e.id);
				})
			]
		}), /* @__PURE__ */ l("div", {
			className: "mw-perspective-geo__list",
			children: e.map((e) => /* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("b", { children: e.label }), Wa(e.count)] }, e.id))
		})]
	});
}
function Ja({ divergence: e, uncertainty: t, convergence: n = 1 - e, coverage: r, className: i = "" }) {
	let a = 14 + Q(e) * 72, o = 14 + Q(t) * 72;
	return /* @__PURE__ */ u("section", {
		className: `mw-divergence-compass ${i}`.trim(),
		"aria-label": "Divergence and uncertainty compass",
		children: [/* @__PURE__ */ u("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ u("title", { children: [
					"Divergence ",
					$(e),
					", uncertainty ",
					$(t)
				] }),
				[
					18,
					30,
					42
				].map((e) => /* @__PURE__ */ l("circle", {
					cx: "50",
					cy: "50",
					r: e,
					className: "mw-divergence-ring"
				}, e)),
				/* @__PURE__ */ l("line", {
					x1: "8",
					y1: "50",
					x2: "92",
					y2: "50",
					className: "mw-divergence-axis"
				}),
				/* @__PURE__ */ l("line", {
					x1: "50",
					y1: "8",
					x2: "50",
					y2: "92",
					className: "mw-divergence-axis"
				}),
				/* @__PURE__ */ l("circle", {
					cx: a,
					cy: o,
					r: "4.2",
					className: "mw-divergence-point"
				}),
				/* @__PURE__ */ l("text", {
					x: "9",
					y: "47",
					className: "mw-perspective-svg-label",
					children: "CONVERGE"
				}),
				/* @__PURE__ */ l("text", {
					x: "72",
					y: "47",
					className: "mw-perspective-svg-label",
					children: "DIVERGE"
				}),
				/* @__PURE__ */ l("text", {
					x: "52",
					y: "12",
					className: "mw-perspective-svg-label",
					children: "LOW U"
				}),
				/* @__PURE__ */ l("text", {
					x: "52",
					y: "91",
					className: "mw-perspective-svg-label",
					children: "HIGH U"
				})
			]
		}), /* @__PURE__ */ u("div", {
			className: "mw-divergence-compass__metrics",
			children: [
				/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("small", { children: "DIVERGENCE" }), /* @__PURE__ */ l("strong", { children: $(e) })] }),
				/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("small", { children: "CONVERGENCE" }), /* @__PURE__ */ l("strong", { children: $(n) })] }),
				/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("small", { children: "UNCERTAINTY" }), /* @__PURE__ */ l("strong", { children: $(t) })] }),
				r === void 0 ? null : /* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("small", { children: "COVERAGE" }), /* @__PURE__ */ l("strong", { children: $(r) })] })
			]
		})]
	});
}
function Ya({ cells: e, className: t = "" }) {
	let n = [...new Set(e.map((e) => e.actor))], r = [...new Set(e.map((e) => e.framing))], i = new Map(e.map((e) => [`${e.actor}::${e.framing}`, Q(e.value)]));
	return /* @__PURE__ */ u("section", {
		className: `mw-actor-framing-matrix ${t}`.trim(),
		"aria-label": "Actor by framing matrix",
		children: [/* @__PURE__ */ l("div", {
			className: "mw-actor-framing-matrix__scroll",
			children: /* @__PURE__ */ u("div", {
				className: "mw-actor-framing-matrix__grid",
				style: { gridTemplateColumns: `minmax(110px, 1.2fr) repeat(${r.length}, minmax(70px, 1fr))` },
				children: [
					/* @__PURE__ */ l("span", {}),
					r.map((e) => /* @__PURE__ */ l("b", { children: e }, e)),
					n.flatMap((e) => [/* @__PURE__ */ l("strong", { children: e }, `${e}-label`), ...r.map((t) => {
						let n = i.get(`${e}::${t}`) ?? 0;
						return /* @__PURE__ */ l("i", {
							style: { opacity: .12 + n * .88 },
							title: `${e} × ${t}: ${$(n)}`,
							children: /* @__PURE__ */ l("span", { children: n > 0 ? Math.round(n * 100) : "" })
						}, `${e}-${t}`);
					})])
				]
			})
		}), /* @__PURE__ */ l("p", { children: "Cell intensity represents observed presence or salience. It does not represent support." })]
	});
}
function Xa({ signals: e, className: t = "" }) {
	let n = e.map((t, n) => {
		let r = e.length <= 1 ? 50 : 7 + n / (e.length - 1) * 86, i = 84 - Q(t.confidence) * 62;
		return {
			...t,
			x: r,
			y: i
		};
	});
	return /* @__PURE__ */ u("section", {
		className: `mw-zigzag-timeline ${t}`.trim(),
		"aria-label": "Zigzag signal timeline",
		children: [/* @__PURE__ */ u("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ l("title", { children: "Signal timeline across the perspective field" }),
				/* @__PURE__ */ l("line", {
					x1: "6",
					y1: "86",
					x2: "94",
					y2: "86",
					className: "mw-zigzag-axis"
				}),
				n.length > 1 ? /* @__PURE__ */ l("polyline", {
					points: n.map((e) => `${e.x},${e.y}`).join(" "),
					className: "mw-zigzag-line"
				}) : null,
				n.map((e) => /* @__PURE__ */ u("g", { children: [/* @__PURE__ */ l("circle", {
					cx: e.x,
					cy: e.y,
					r: "2.5",
					className: "mw-zigzag-point"
				}), /* @__PURE__ */ l("text", {
					x: e.x,
					y: e.y - 5,
					textAnchor: "middle",
					className: "mw-perspective-svg-label",
					children: e.type
				})] }, e.id))
			]
		}), /* @__PURE__ */ l("ol", {
			className: "mw-zigzag-timeline__list",
			children: e.map((e) => /* @__PURE__ */ u("li", { children: [
				/* @__PURE__ */ l("b", { children: e.type }),
				/* @__PURE__ */ l("strong", { children: $(e.confidence) }),
				/* @__PURE__ */ l("span", { children: e.label }),
				e.detail ? /* @__PURE__ */ l("small", { children: e.detail }) : null
			] }, e.id))
		})]
	});
}
function Za({ snapshots: e, changes: t = [], className: n = "" }) {
	let r = [...e].sort((e, t) => Date.parse(e.timestamp) - Date.parse(t.timestamp)), i = (e) => r.map((t, n) => `${r.length <= 1 ? 50 : 8 + n / (r.length - 1) * 84},${86 - Q(t[e]) * 68}`).join(" ");
	return /* @__PURE__ */ u("section", {
		className: `mw-perspective-history ${n}`.trim(),
		"aria-label": "Perspective temporal history",
		children: [/* @__PURE__ */ u("div", {
			className: "mw-perspective-history__chart",
			children: [/* @__PURE__ */ u("svg", {
				viewBox: "0 0 100 100",
				role: "img",
				children: [
					/* @__PURE__ */ l("title", { children: r.length > 1 ? "Comparable perspective snapshots over time" : "Perspective baseline snapshot; trend not yet established" }),
					/* @__PURE__ */ l("line", {
						x1: "7",
						y1: "86",
						x2: "93",
						y2: "86",
						className: "mw-zigzag-axis"
					}),
					/* @__PURE__ */ l("line", {
						x1: "7",
						y1: "18",
						x2: "7",
						y2: "86",
						className: "mw-zigzag-axis"
					}),
					r.length > 1 ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("polyline", {
						points: i("divergence"),
						className: "mw-perspective-history__divergence"
					}), /* @__PURE__ */ l("polyline", {
						points: i("uncertainty"),
						className: "mw-perspective-history__uncertainty"
					})] }) : null,
					r.map((e, t) => {
						let n = r.length <= 1 ? 50 : 8 + t / (r.length - 1) * 84, i = 86 - Q(e.divergence) * 68, a = 86 - Q(e.uncertainty) * 68;
						return /* @__PURE__ */ u("g", { children: [
							/* @__PURE__ */ l("circle", {
								cx: n,
								cy: i,
								r: "2.2",
								className: "mw-perspective-history__dot-d"
							}),
							/* @__PURE__ */ l("circle", {
								cx: n,
								cy: a,
								r: "1.9",
								className: "mw-perspective-history__dot-u"
							}),
							/* @__PURE__ */ l("text", {
								x: n,
								y: "94",
								textAnchor: "middle",
								className: "mw-perspective-svg-label",
								children: new Date(e.timestamp).toISOString().slice(0, 10)
							})
						] }, e.id);
					})
				]
			}), /* @__PURE__ */ u("div", {
				className: "mw-perspective-history__legend",
				children: [/* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("i", { className: "mw-perspective-history__legend-d" }), "DIVERGENCE"] }), /* @__PURE__ */ u("span", { children: [/* @__PURE__ */ l("i", { className: "mw-perspective-history__legend-u" }), "UNCERTAINTY"] })]
			})]
		}), /* @__PURE__ */ u("div", {
			className: "mw-perspective-history__ledger",
			children: [
				/* @__PURE__ */ l("strong", { children: r.length > 1 ? "CHANGE LEDGER" : "BASELINE ESTABLISHED" }),
				r.length <= 1 ? /* @__PURE__ */ l("p", { children: "One comparable snapshot exists. JIZZ must not call this a trend until a later snapshot is measured with compatible methodology." }) : null,
				t.length ? /* @__PURE__ */ l("ol", { children: t.map((e) => /* @__PURE__ */ u("li", { children: [
					/* @__PURE__ */ l("b", { children: e.type }),
					e.dimension ? /* @__PURE__ */ l("span", { children: e.dimension }) : null,
					e.confidence === void 0 ? null : /* @__PURE__ */ l("em", { children: $(e.confidence) }),
					/* @__PURE__ */ l("small", { children: e.rationale ?? "Derived temporal change." })
				] }, e.id)) }) : /* @__PURE__ */ l("p", { children: "No CHANGE record has passed the temporal comparison gate yet." })
			]
		})]
	});
}
function Qa({ reactions: e, className: t = "" }) {
	let n = Math.max(1, ...e.map((e) => e.count));
	return /* @__PURE__ */ l("section", {
		className: `mw-reaction-spectrum ${t}`.trim(),
		"aria-label": "Reaction spectrum",
		children: e.map((e) => /* @__PURE__ */ u("article", { children: [
			/* @__PURE__ */ l("i", { style: {
				width: `${28 + e.count / n * 54}px`,
				height: `${28 + e.count / n * 54}px`
			} }),
			/* @__PURE__ */ l("strong", { children: e.type }),
			/* @__PURE__ */ l("span", { children: e.count })
		] }, e.type))
	});
}
function $a({ coverage: e, className: t = "" }) {
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
	return /* @__PURE__ */ u("section", {
		className: `mw-coverage-radar ${t}`.trim(),
		"aria-label": "Perspective coverage radar",
		children: [/* @__PURE__ */ u("svg", {
			viewBox: "0 0 100 100",
			role: "img",
			children: [
				/* @__PURE__ */ l("title", { children: "Coverage across source, actor, geography, language, framing and position dimensions" }),
				[
					.25,
					.5,
					.75,
					1
				].map((e) => /* @__PURE__ */ l("polygon", {
					points: r.map((t, n) => i(1, n, 39 * e)).map(([e, t]) => `${e},${t}`).join(" "),
					className: "mw-coverage-radar__ring"
				}, e)),
				r.map((e, t) => {
					let [n, r] = i(1.13, t);
					return /* @__PURE__ */ l("text", {
						x: n,
						y: r,
						textAnchor: "middle",
						className: "mw-perspective-svg-label",
						children: e
					}, e);
				}),
				/* @__PURE__ */ l("polygon", {
					points: a,
					className: "mw-coverage-radar__value"
				})
			]
		}), /* @__PURE__ */ l("p", { children: "Coverage quality is not evidence strength." })]
	});
}
function eo({ stages: e, className: t = "" }) {
	return /* @__PURE__ */ u("section", {
		className: `mw-perspective-provenance ${t}`.trim(),
		"aria-label": "Perspective provenance flow",
		children: [/* @__PURE__ */ l("ol", { children: e.map((t, n) => /* @__PURE__ */ u("li", {
			"data-state": t.state ?? "pending",
			children: [
				t.href ? /* @__PURE__ */ l("a", {
					href: t.href,
					target: "_blank",
					rel: "noreferrer",
					children: t.label
				}) : /* @__PURE__ */ l("strong", { children: t.label }),
				t.count === void 0 ? null : /* @__PURE__ */ l("span", { children: t.count }),
				n < e.length - 1 ? /* @__PURE__ */ l("i", {
					"aria-hidden": "true",
					children: "→"
				}) : null
			]
		}, t.id)) }), /* @__PURE__ */ l("p", { children: "Issue first · source second · canon last." })]
	});
}
function to({ phenomenon: e, perspectives: t, geography: n, divergence: r, convergence: i, uncertainty: a, coverage: o, framingCells: s, signals: c, reactions: d, snapshots: f = [], changes: p = [], provenance: m, className: h = "" }) {
	return /* @__PURE__ */ u("section", {
		className: `mw-perspective-board ${h}`.trim(),
		"aria-label": "Perspective intelligence visual board",
		children: [
			/* @__PURE__ */ l("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ l(Ga, {
					phenomenon: e,
					perspectives: t
				})
			}),
			/* @__PURE__ */ l(qa, { points: n }),
			/* @__PURE__ */ l(Ja, {
				divergence: r,
				convergence: i,
				uncertainty: a,
				coverage: (o.source + o.actor + o.geography + o.language + o.framing + o.position) / 6
			}),
			/* @__PURE__ */ l("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ l(Ya, { cells: s })
			}),
			/* @__PURE__ */ l("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ l(Xa, { signals: c })
			}),
			/* @__PURE__ */ l("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ l(Za, {
					snapshots: f,
					changes: p
				})
			}),
			/* @__PURE__ */ l(Qa, { reactions: d }),
			/* @__PURE__ */ l($a, { coverage: o }),
			/* @__PURE__ */ l("div", {
				className: "mw-perspective-board__wide",
				children: /* @__PURE__ */ l(eo, { stages: m })
			})
		]
	});
}
//#endregion
export { Ci as AIWorkspaceScreen, Ar as AWSBoundary, Ui as AWSLegalScreen, Jr as AWSLegalSummaryPattern, ta as AWSScreen, Ya as ActorFramingMatrix, dr as AppTopbar, ge as ApplicationActionsProvider, fr as ApplicationShell, Oi as ApplicationStatesScreen, Fn as AssetExplorer, wr as AuditEventRow, ri as AuthFormPattern, na as AuthScreen, Di as AuthorizationScreen, or as AutoMenu, kn as Avatar, ar as BackendStatus, K as Badge, ir as Breadcrumbs, G as Button, xi as CalendarScreen, Or as CaseCard, Mr as CaseHeader, jr as CaseTimeline, ei as CaseTimelinePattern, Si as ChatScreen, Wn as Checkbox, bn as CinematicWebHero, vr as Citation, ur as CommandPalette, ki as CommandPaletteReferenceScreen, $r as CommunityCaseThreadPattern, Dr as CommunityComposer, Wi as CommunityScreen, pn as CommunitySourceLocatorLink, Na as ConfidenceMeter, qr as CorrelationGraphPattern, Nr as CorrelationScore, Gi as CorrelationScreen, $a as CoverageRadar, vi as DashboardScreen, qi as DesignSystemScreen, Dn as Dialog, br as DiscussionItem, Ja as DivergenceCompass, An as Divider, Pr as DomainRecordSummary, Xi as DomainScreen, pa as DossierHeader, On as Drawer, ni as EmptyLoadingErrorPattern, Qi as EventScreen, xa as EventTopologyGraph, hr as EvidenceCard, Rr as EvidenceGraph, Kr as EvidenceGridPattern, ga as EvidenceMatrix, Hr as FourRecordSummary, kr as GraphEdge, zr as GraphNode, Sa as HistoricityBand, Tn as IconButton, q as Input, bi as KanbanScreen, ia as LandingHeroScreen, la as LandingScreen, Hi as LegalApplicabilityMatrix, Wr as LegalStatus, le as MOONWITNESS_ACCEPTED_REPOSITORY_BASE, In as MOONWITNESS_CANDIDATE_ASSET_BASE, ye as MOONWITNESS_CINEMATIC_WEB_HERO_BASE, O as MOONWITNESS_STABLE_REPOSITORY_BASE, ua as MW0042Overview, pr as MWHeader, aa as ManifestoScreen, ca as MethodScreen, J as MetricTile, Qr as ModerationQueue, rn as MoonWitnessAssetImage, en as MoonWitnessAssetProvider, Xt as MoonWitnessBrand, Rn as MoonWitnessCandidateAssetImage, fn as MoonWitnessCommunityParticipationAsset, Yt as MoonWitnessMark, sn as MoonWitnessPersonMark, cn as MoonWitnessPersonaAvatar, an as MoonWitnessRegistryAssetImage, vn as MoonWitnessRuntimeMotion, on as MoonWitnessStatusAsset, Te as NavigationLink, Ce as NavigationProvider, Sr as NotificationItem, sr as NotificationsPanel, Ai as NotificationsReferenceScreen, _a as ObservatorySectionNav, Ha as PERSPECTIVE_VISUAL_GUARDRAILS, Gr as Pagination, Ea as ParallelTextLanes, $i as PersonScreen, Ga as PerspectiveConstellation, qa as PerspectiveGeographyField, to as PerspectiveIntelligenceBoard, pi as PlatformAdminVisual, di as PlatformBackendBoundary, li as PlatformRoleMatrix, fa as PlatformScreen, fi as PlatformServiceRegistry, Tr as PlatformSidebar, Ei as ProfileSettingsScreen, eo as ProvenanceFlow, va as ProvenanceRail, Xr as PublicCasePattern, Pa as QualifiedReferenceView, ea as RGBLScreen, D as ROCKSOUL_ASSETS_CANDIDATE, D as ROCKSOUL_ASSETS_REGISTRY, y as ROCKSOUL_ASSETS_SYNC, ve as ROCKSOUL_CINEMATIC_WEB_HERO_SYNC, oe as ROCKSOUL_ECOSYSTEM_OWNER, ie as ROCKSOUL_GITHUB_RAW_ORIGIN, re as ROCKSOUL_GITHUB_WEB_ORIGIN, Gn as Radio, Qa as ReactionSpectrum, Ra as RecordFieldGrid, Yr as RelatedCases, sa as RepositoriesOverviewScreen, gr as RepositoryCard, Cr as RepositoryHealthRow, Zr as RepositoryMonitor, Va as ResearchDomainOwnershipMap, Ti as ResourcesScreen, oa as RocksoulCharacterScreen, Er as SearchFilters, ti as SearchFiltersPattern, Un as Select, jn as Skeleton, _r as SourceBlock, Da as SourceRightsSummary, Y as StatePanel, Zi as StoryScreen, xr as SubmissionCard, Kn as Switch, mi as Tabs, Za as TemporalPerspectiveHistory, Hn as Textarea, wa as TextualHierarchyTrace, Oa as TextualRelationTrace, Xn as ThemeToggle, yr as TimelineEntry, En as Tooltip, cr as UserMenu, gi as WorkflowStrip, Xa as ZigzagTimeline, _i as applicationNotifications, er as applicationResources, Bn as badgeVariants, wn as buttonVariants, m as canonicalDomainOwners, g as canonicalOwnerFor, be as cinematicWebHeroAssets, xe as cinematicWebHeroContract, Q as clampPerspectiveMetric, dn as communityParticipationAssetIds, nr as defaultApplicationPermissions, A as hasMoonWitnessCandidateAsset, A as hasMoonWitnessRegistryAsset, _ as isResearchDomain, Pi as legalApplicabilityAxes, Ri as legalApplicabilityAxis, Mi as legalIntelligenceContract, Li as legalResultDefinition, Ni as legalResultVocabulary, Fi as legalReviewPipeline, Ii as legalVisualGuardrails, un as moonWitnessAssetConsumption, pe as moonWitnessAssetPackIndexPath, M as moonWitnessAssetPackVersion, fe as moonWitnessAssetPacks, me as moonWitnessAssetRelativePath, ce as moonWitnessAssets, ce as moonWitnessCandidateAssets, Jt as moonWitnessBrandAssets, b as moonWitnessBrandContract, k as moonWitnessCandidateAssetPath, k as moonWitnessRegistryAssetPath, zn as moonWitnessCandidateConsumption, mn as moonWitnessRuntimeMotionIds, d as moonWitnessTokens, X as mw0042, v as parseQualifiedReference, oi as platformAdminCommandActions, P as platformAdminContract, si as platformAdminPermissions, ai as platformAdminResources, _e as platformAdminVisuals, h as researchDomainVisualContract, T as resolveCommunitySourceLocator, nn as resolveMoonWitnessAssetUrl, Ln as resolveMoonWitnessCandidateAssetUrl, j as resolveMoonWitnessRegistryAssetUrl, gn as resolveMoonWitnessRuntimeMotion, w as resolvePinnedRocksoulAssetSourceUrl, C as resolveRocksoulRepositoryUrl, tr as resourceDescriptors, ae as rocksoulEcosystemRepositories, Ma as semanticStatusVariant, Aa as semanticStatusVariants, ja as statusVisualContract, N as useApplicationActions, tn as useMoonWitnessAssetBaseUrl, ln as useMoonWitnessSfx, _n as usePrefersReducedMotion, ee as v2NavigationItems, te as v2ResourceDescriptors, ne as v2ScreenContract, x as v2ShellContract, S as v2SystemStateContract };
