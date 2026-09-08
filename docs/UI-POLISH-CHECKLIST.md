# Rocksoul UI — Final Contract Audit

Source of truth: `bjo163/rocksoul-assets`.

This checklist distinguishes **implemented/CI-verifiable** work from **external visual validation**.

## Identity and branch contract
- [x] Repository identity: `rocksoul-ui`.
- [x] Package identity: `@rocksoul/ui`.
- [x] MoonWitness remains the product umbrella.
- [x] Rocksoul remains the connective character/thread.
- [x] CI is scoped to `dev` and `main`.
- [x] README forbids feature/fix working branches.

## Tokens and foundations
- [x] Canonical dark surfaces.
- [x] Canonical light surfaces.
- [x] Crimson brand tokens.
- [x] All status tokens.
- [x] All RGBL tokens.
- [x] AWS boundary/legal tokens.
- [x] Spacing scale represented.
- [x] Radius scale represented.
- [x] Stroke/focus rules represented.
- [x] 44px minimum touch token.
- [x] 720px reading width.
- [x] 1200px content width.
- [x] 390/768/1024/1440 responsive contracts represented.
- [x] Motion durations/easings represented.
- [x] Reduced-motion fallback.
- [x] Inter Tight / Inter / IBM Plex Mono stacks with safe fallbacks.
- [x] Raw colors in TS/TSX rejected by CI.

## Raw primitives
- [x] Button: primary/secondary/ghost/danger; sm/md/lg; loading/disabled/pressed/focus.
- [x] IconButton: ghost/outline/danger; sm/md/lg; loading/disabled.
- [x] Input: default/search; md/lg; filled/error/disabled/read-only.
- [x] Textarea: live character count; error/disabled/read-only.
- [x] Select: native keyboard/open/Escape behavior; error/disabled.
- [x] Checkbox: unchecked/checked/indeterminate/disabled.
- [x] Radio: grouped native arrow-key behavior and disabled.
- [x] Switch: off/on/disabled.
- [x] Badge: supported/verified/contested/partial/unresolved/restricted/prohibited/info/neutral; sm/md.
- [x] Tabs: underline/archive; active/disabled; arrow navigation.
- [x] Tooltip: visible/hidden and optional shortcut.
- [x] Dialog: sm/md/lg; native modal focus trap; Escape; focus restoration.
- [x] Drawer: left/right/bottom-mobile; native modal focus trap; Escape; focus restoration.
- [x] Avatar: image/initial/anonymous; xs/sm/md/lg; optional status.
- [x] Divider: default/soft/legal-boundary.
- [x] Skeleton: text/card/table-row/graph-node; reduced-motion.

## Component inventory
- [x] MW Header: transparent/solid/compact-mobile + auto scroll state; brand/nav/search/live/account.
- [x] Platform Sidebar: expanded/collapsed; workspace/navigation/system/account anatomy; tablet/mobile behavior.
- [x] Case Header: public/community/platform; metadata/actions.
- [x] Case Card: default/compact/featured; default/hover/selected.
- [x] Four Record Summary: linked/partial/missing; exactly STORY/EVENT/PERSON/RGBL.
- [x] Evidence Card: STORY/EVENT/PERSON/RGBL/AWS; default/selected/flagged; provenance and source action.
- [x] Repository Card: public/platform; healthy/degraded/offline/syncing.
- [x] Source Block: quote/record/legal-instrument.
- [x] Citation: inline/block/legal; copy state.
- [x] Correlation Score: summary/detailed with explanation and method link.
- [x] Graph Node: STORY/EVENT/PERSON/RGBL/CASE/AWS; default/selected/dimmed/unresolved.
- [x] Graph Edge: supports/contradicts/references/temporal/identity/legal; highlighted/dimmed.
- [x] Timeline Entry: event/source/decision/community; default/flagged.
- [x] Legal Status: permitted/restricted/prohibited/disputed/unresolved.
- [x] AWS Boundary: semantic line/label/legal state.
- [x] Discussion Item: comment/question/community-note/moderator-note; default/edited/reported/hidden.
- [x] Submission Card: unverified/in-review/verified/rejected/needs-context; submitter/source/reviewer/actions.
- [x] Notification Item: case-update/reply/review/system; read/unread.
- [x] Repository Health Row: online/degraded/offline/syncing; all required fields + action.
- [x] Audit Event Row: timestamp/actor/action/resource/result/trace-id.
- [x] Metric Tile: neutral/good/warning/critical; label/value/delta/context.

## Pattern inventory
- [x] Public Case.
- [x] Evidence Grid.
- [x] Correlation Graph.
- [x] Case Timeline.
- [x] AWS Legal Summary.
- [x] Repository Monitor.
- [x] Moderation Queue.
- [x] Community Case Thread.
- [x] Auth Form.
- [x] Search + Filters.
- [x] Empty / Loading / Error.
- [x] Related Cases and Pagination required by public/evidence composition.

## Screen reference coverage
- [x] 01 Landing Hero.
- [x] 02 Manifesto.
- [x] 03 Rocksoul Character.
- [x] 04 Repositories Overview.
- [x] 05 STORY.
- [x] 06 EVENT.
- [x] 07 PERSON.
- [x] 08 RGBL.
- [x] 09 AWS.
- [x] 10 Public Case.
- [x] 11 Correlation.
- [x] 12 AWS Legal.
- [x] 13 Community.
- [x] 14 Auth.
- [x] 15 Platform Admin.
- [x] 16 Design System.
- [x] S01-S16 presence is enforced by CI.
- [x] Dedicated primitive/component/pattern Storybook contract matrices.

## Domain-specific screen fidelity
- [x] STORY shows source type, locator, independence, and narrative provenance.
- [x] EVENT shows canonical 02:14–02:37 LOCAL/FIXTURE temporal window.
- [x] EVENT timeline repeats the canonical bounded interval.
- [x] PERSON shows role = match, movement = match, identity = NOT VERIFIED.
- [x] PERSON identity remains a visible closure blocker.
- [x] RGBL shows RED=movement, GREEN=return, BLUE=night, LIGHT=unresolved relation.
- [x] RGBL explicitly separates semantic relation from causal assertion.
- [x] AWS shows LAW-FIX-01 and LAW-FIX-02 as synthetic/reference-only instruments.
- [x] AWS uses the semantic boundary before legal review.
- [x] Domain-specific fixture/screen fidelity is enforced by CI.

## MW-0042 integrity
- [x] STORY/EVENT/PERSON/RGBL remain separate peer records.
- [x] AWS remains downstream from correlation.
- [x] PERSON remains visibly partial.
- [x] Correlation 0.87.
- [x] Temporal 0.94.
- [x] Motif 0.89.
- [x] Source independence 0.91.
- [x] Identity 0.64 remains visibly blocking.
- [x] “The trails are starting to line up.”
- [x] “That still doesn’t make them the same thing.”
- [x] Graph nodes are keyboard-selectable.
- [x] Graph has visible selected state.
- [x] Graph has relationship legend.
- [x] Graph has semantic text equivalent.
- [x] CASE node and downstream/dimmed AWS node supported.
- [x] Public visitor can inspect record ID/repo/source/provenance/verification/canonical state.
- [x] Public navigation covers Overview → Evidence → Correlation → AWS.
- [x] Legal instruments are synthetic/reference-only.
- [x] Legal analysis explicitly says it is not a court judgment.
- [x] Related cases do not imply shared identity/causation.

## Community acceptance
- [x] Follow action.
- [x] Save action.
- [x] Ask-question composer.
- [x] Submit-context composer.
- [x] Question and moderator-note states.
- [x] SUB-0042-01 starts NEEDS CONTEXT.
- [x] Community submission is explicitly non-canonical.
- [x] Moderation state is visible.

## Rocksoul Assets v2 sync
- [x] Synced against `rocksoul-assets/main@d293b0f1190fee3d0079aada222bcb2a255dcde6`.
- [x] Manifest schema v3 recognized.
- [x] Canonical MoonWitness brand vector family packaged for consumers.
- [x] Brand tagline: Truth leaves a trace.
- [x] Application shell desktop sidebar = 220px.
- [x] Application shell tablet rail = 72px.
- [x] Mobile navigation = focus-trapped drawer.
- [x] Skip link + banner/navigation/main landmarks.
- [x] Theme preference = light / dark / system.
- [x] Canonical AutoMenu item set: Dashboard, Cases, Kanban, Calendar, Chat, AI Workspace, Resources, Profile, Settings.
- [x] Canonical resource descriptors: case / event / person / rgbl / aws.
- [x] Screens 17–27 implemented and individually represented in Storybook.
- [x] Screen 24 Resources implemented.
- [x] Authorization uses Settings as its active navigation parent.
- [x] Error / Empty / Loading / Offline / Forbidden state contracts.
- [x] Command palette quick actions.
- [x] Notifications mark-all-read + system synchronization state.
- [x] Mobile MW-0042 compact records aligned to 390 reference rhythm.
- [x] Assets v2 sync audit is enforced by CI.

## Application framework
- [x] Shared responsive ApplicationShell.
- [x] Compact/expanded responsive sidebar.
- [x] Shared application topbar.
- [x] Theme control.
- [x] Breadcrumbs.
- [x] Backend online/degraded/offline status.
- [x] User menu.
- [x] Command palette.
- [x] Ctrl/Cmd+K command palette shortcut.
- [x] Notifications drawer + unread count.
- [x] Resource navigation is AutoMenu-driven from resource definitions.
- [x] Permission-aware AutoMenu filtering.
- [x] Dashboard surface.
- [x] Kanban workspace.
- [x] Calendar workspace.
- [x] Chat workspace.
- [x] AI Workspace.
- [x] Profile / Settings.
- [x] Authorization UX with allowed/denied/pending states.
- [x] Error / Empty / Loading / Offline / Forbidden application states.
- [x] Platform/Admin migrated to shared ApplicationShell.
- [x] Application framework has dedicated Storybook coverage.
- [x] Application framework contract is enforced by CI.

## Consumer package handoff
- [x] Vite library build.
- [x] ES module artifact.
- [x] Type declaration artifact.
- [x] Exported CSS artifact.
- [x] React / React DOM are peer dependencies.
- [x] Package exports map is explicit.
- [x] Package artifact audit is enforced by CI.
- [x] Type declaration entry does not depend on CSS module resolution.

## Platform acceptance
- [x] Canonical blockers visible.
- [x] All five repositories shown.
- [x] rocksoul-superhero degraded state visible.
- [x] Repository sync actions/job state.
- [x] Moderation filters/bulk actions.
- [x] Reviewer can request context.
- [x] Reviewer can flag.
- [x] Reviewer can keep the case unresolved.
- [x] Audit rows demonstrate future reviewer-action mapping.
- [x] AWS legal review remains separate.
- [x] Platform stays clean/dense/light.
- [x] Mobile reviewer actions have sticky action area.

## Accessibility contract
- [x] Visible global focus state.
- [x] Minimum touch target.
- [x] Status includes text, not color alone.
- [x] Graph text equivalent.
- [x] Correlation explanation.
- [x] Source law vs MoonWitness review distinction.
- [x] Dialog/drawer accessible names.
- [x] Dialog/drawer Escape behavior.
- [x] Dialog/drawer focus restoration.
- [x] Form errors linked with aria-describedby.
- [x] Indeterminate checkbox semantics.
- [x] Reduced motion.
- [x] Static accessibility contract is enforced by CI.
- [x] Storybook addon-a11y configured with test severity = error.

## Responsive proof
- [x] 1440.
- [x] 1024.
- [x] 768.
- [x] 390.
- [x] 320 sanity.
- [x] Provenance/status remain visible as text.
- [x] Graph always retains text equivalent.
- [x] Platform sidebar transitions desktop → tablet compact → mobile drawer.

## Engineering gates
- [x] Design-contract audit.
- [x] Accessibility-contract audit.
- [x] Domain-specific MW-0042 audit.
- [x] TypeScript strict.
- [x] Vite production build.
- [x] Storybook production build.
- [x] No legacy `@moonwitness/ui` identity.
- [x] No raw TS/TSX hex styling.
- [x] Pattern/component/screen inventories enforced by CI.

## External/manual validation
- [ ] Final glyph metrics depend on actual Inter Tight / Inter / IBM Plex Mono availability in the consuming web runtime.
- [ ] Pixel-by-pixel comparison against the 16 raster PNG references requires a browser/image pipeline; this environment can verify the canonical JSON contracts and editable golden SVGs but cannot fetch those large PNG blobs.
