# ROCKSOUL UI Release Automation

## Pipeline

```text
dev push
  -> UI CI
  -> promote-dev workflow
  -> PR dev -> main
  -> PR checks (UI CI + dependency review)
  -> squash merge main
  -> UI CI on main
  -> Automatic Release workflow
  -> determine semantic bump from commits since latest v* tag
  -> update package.json + package-lock.json + CHANGELOG.md
  -> rebuild tracked dist
  -> repository/package/release audits
  -> commit chore(release): vX.Y.Z [skip ci]
  -> tag vX.Y.Z
  -> GitHub Release with generated notes
```

## Version policy

`fix`, `perf`, `refactor`, `docs`, `test`, `chore`, and other non-breaking changes produce a patch release.

`feat` produces a minor release.

A conventional-commit breaking marker (`!`) or `BREAKING CHANGE:` produces a major release.

The current package version remains the source of truth. The latest `v*` tag defines the comparison range.

## Safety gates

A release cannot be created unless the preceding `UI CI` workflow on `main` completed successfully.

The release job validates the package lockfile, rebuilds tracked `dist`, runs strict repository/package/release audits, and verifies the release tag does not already exist.

The release workflow does not publish to npm because `@rocksoul/ui` is intentionally `private: true`; the delivery channel is the Git repository plus GitHub Release/tag.

## Other GitHub automation

- `ci.yml`: push/PR verification plus weekly scheduled verification.
- `rocksoul-contract.yml`: repository governance contract.
- `sync-brand-binary.yml`: canonical brand binary synchronization on `dev` contract changes.
- `dependency-review.yml`: high-severity dependency review on PRs.
- `promote-dev.yml`: automated `dev -> main` promotion behind passing PR checks.
- `auto-release.yml`: automatic semantic version, changelog, tag, and GitHub Release.
- Dependabot: weekly npm and GitHub Actions update proposals.

## Non-goals

No workflow force-pushes `dev` or `main`. Release commits use a bot identity and a skip marker to prevent CI recursion. Unknown asset-source drift remains fail-closed unless explicitly classified by the freshness contract.
