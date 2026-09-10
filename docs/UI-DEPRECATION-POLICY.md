# RockSoul UI deprecation policy

`components/ui`, `components/molecules`, `components/organisms`, and `components/templates` are the supported public import surfaces. Files under `src/components/compat` are private migration adapters and must not receive new consumers.

## Process

1. Add the replacement and document a one-line migration example.
2. Mark the old API with `@deprecated` and identify the replacement in its source comment and usage documentation.
3. Migrate package screens, stories, tests, and the first consumer.
4. Keep the adapter only while a supported consumer remains, and ensure `audit:adapters` reports the exact remaining imports.
5. Remove the adapter, export, declaration, and compatibility test in a planned release. Add the removal to the changelog or release note.

Compatibility adapters are not a second design-system layer. They may translate legacy prop contracts, but they must compose the canonical owner and cannot introduce new visual behavior. New code that needs a capability must extend the canonical component or add a reviewed molecule.

Breaking removals require a major package release. Additive props and new canonical components are minor releases; token-only fixes and internal implementation changes are patch releases unless rendered behavior or public types change.
