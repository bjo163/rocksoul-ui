# Rocksoul UI — Final Polish Gate

Source of truth: `bjo163/rocksoul-assets`.

## Identity
- [x] Repository identity remains `rocksoul-ui`.
- [x] npm package identity is `@rocksoul/ui`.
- [x] MoonWitness is the product umbrella.
- [x] Rocksoul is the connective character/thread.

## Token parity
- [x] Dark and light semantic surfaces mirror the assets token file.
- [x] Crimson/status/RGBL/AWS values mirror the assets token file.
- [x] Spacing, radius, control/touch sizing, and motion tokens are represented.
- [x] Raw hex colors are prohibited in TS/TSX by CI audit.
- [x] Public content width and reading width are represented.

## Typography
- [x] Display stack starts with Inter Tight.
- [x] Body stack starts with Inter.
- [x] Metadata stack starts with IBM Plex Mono.
- [x] Archive metadata tracking is represented.
- [x] Responsive display sizing prevents forced fixed desktop scale.
- [x] Font files are not vendored; consumers must supply licensed/available fonts or accept fallbacks.

## Visual identity
- [x] Editorial observatory hierarchy.
- [x] Square research surfaces; pill reserved for status.
- [x] Crimson used semantically.
- [x] Public/community remain expressive.
- [x] Platform remains clean/dense/light.
- [x] Dark/light share the same semantic grammar.

## Header/navigation
- [x] Brand.
- [x] Primary navigation.
- [x] Search entry.
- [x] Live status.
- [x] Account slot.
- [x] Mobile drawer.
- [x] Theme toggle.
- [x] Keyboard-visible focus.

## Screens
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

## Evidence integrity
- [x] Four peer evidence records remain separate.
- [x] PERSON partial state stays visible.
- [x] Evidence card includes record ID, repo, claim, provenance, verification, canonical state, action.
- [x] Source Block variants include record and legal-instrument presentation.
- [x] Citation supports copy state.
- [x] AWS is downstream, never a fifth evidence peer.
- [x] Legal source and MoonWitness analysis are visibly distinct.

## Correlation / Mizan
- [x] Score 0.87.
- [x] Temporal 0.94.
- [x] Motif 0.89.
- [x] Source independence 0.91.
- [x] Identity 0.64.
- [x] Mandatory uncertainty copy is present.
- [x] Keyboard-selectable nodes.
- [x] Selected state.
- [x] Relationship legend.
- [x] Semantic text equivalent.
- [x] Identity weakness remains visible beside aggregate score.
- [x] Method link remains available.

## Community
- [x] Follow.
- [x] Save.
- [x] Question.
- [x] Moderator note.
- [x] Submission Card.
- [x] Context composer.
- [x] Provenance warning.
- [x] SUB-0042-01 starts NEEDS CONTEXT.
- [x] Submission is labeled not canonical.

## Auth
- [x] Identity/credential fields.
- [x] Provider action.
- [x] Legal copy.
- [x] Error preview.
- [x] Loading state.
- [x] Disabled/loading primitive support.
- [x] Error association through aria-describedby.

## Platform
- [x] Sidebar.
- [x] Blockers.
- [x] Repository health.
- [x] Degraded PERSON repository.
- [x] Submission review.
- [x] AWS legal review.
- [x] Audit rows.
- [x] Metrics.
- [x] Reviewer actions.
- [x] Dense/light operational language.

## Primitive/state matrix
- [x] Button default/hover/pressed/focus/loading/disabled.
- [x] Input default/focus/error/disabled/read-only through native states.
- [x] Textarea.
- [x] Select.
- [x] Checkbox.
- [x] Radio.
- [x] Switch.
- [x] Badge semantic variants.
- [x] Tabs with arrow-key navigation.
- [x] Tooltip.
- [x] Dialog Escape/focus restoration using native modal behavior.
- [x] Drawer modal behavior.
- [x] Avatar.
- [x] Divider/legal boundary.
- [x] Skeleton with reduced-motion protection.

## System states
- [x] Empty.
- [x] Loading.
- [x] Error/recovery.
- [x] Healthy/degraded/offline/syncing repository states.

## Responsive
- [x] 1440 Storybook proof.
- [x] 1024 Storybook proof.
- [x] 768 Storybook proof.
- [x] 390 Storybook proof.
- [x] 320 sanity proof.
- [x] Four-record layout becomes 2-column then 1-column.
- [x] Provenance/status remain text, not decorative-only.
- [x] Graph retains semantic list on all widths.

## Accessibility
- [x] Focus-visible global rule.
- [x] Minimum 44px interactive target.
- [x] Status carries visible text.
- [x] Graph text equivalent.
- [x] Correlation explanation.
- [x] Legal source/review distinction.
- [x] Reduced motion.
- [x] Form error associations.
- [x] Storybook a11y configured as error severity.

## Copy
- [x] Short, clear, slightly rebellious.
- [x] No fake certainty.
- [x] No “case solved”.
- [x] Correlation is never called causation.
- [x] “Not enough yet.” / “Still open.” grammar represented.
- [x] “Cool. Now the law gets involved.” appears only at legal transition.

## Engineering
- [x] CI targets main/dev only.
- [x] Token/identity audit included.
- [x] TypeScript strict gate.
- [x] Vite build gate.
- [x] Storybook build gate.
- [x] Storybook 16-screen coverage.
- [x] No `@moonwitness/ui` package identity.
- [x] No feature-branch workflow in repository contract.

## External/manual validation
- [ ] Final font rendering depends on font availability in the consuming runtime.
- [ ] Pixel-level comparison against raster reference PNGs remains a human visual-review step; editable contracts and golden SVGs are the implemented source of truth.
