# CI Environment Contract

`@rocksoul/ui` declares `npm@11.6.0` as its canonical package manager and engine requirement. Every release-authoritative workflow must execute that same npm version rather than relying on the runner default.

## Required

- Node 22+
- npm 11.6.0+
- `npm ci` against `package-lock.json`
- workflow logs expose Node/npm versions before contract checks

## Rationale

The release-authoritative UI CI already upgrades npm to 11.6.0, while the standalone ROCKSOUL Contract workflow previously used the hosted runner default. This creates environment skew and can hide contract failures behind an engine warning.
