<div align="center">

<img src="https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/brand/logo-horizontal.svg" alt="MoonWitness" width="420" />

# ROCKSOUL UI

## **THE IMPLEMENTATION GRAMMAR**

### **DESIGN ONCE. IMPLEMENT CONSISTENTLY.**

Production-oriented, code-first UI system for the **MoonWitness × Rocksoul** product ecosystem.

![Package](https://img.shields.io/badge/package-%40rocksoul%2Fui-3178C6)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Storybook](https://img.shields.io/badge/Storybook-ready-FF4785)
![Design](https://img.shields.io/badge/source-rocksoul--assets-B43A32)
![Role](https://img.shields.io/badge/role-UI%20SYSTEM-6F6F6F)

</div>

---

> **`rocksoul-assets` defines the visual truth. `@rocksoul/ui` turns that truth into reusable production code. Applications consume it; they do not fork it.**

## Governance

`rocksoul-ui` uses an npm-only, fail-closed repository contract.

- Canonical package manager: `npm`
- Canonical lockfile: `package-lock.json`
- `dist/` is tracked delivery output and must remain reproducible from source.
- Unknown contract drift blocks CI.
- Release metadata is derived from `package.json`; release scripts must not hard-code the current version.
- Asset freshness distinguishes approved bookkeeping-only metadata from runtime/asset drift; unknown upstream files block.

Run `npm run audit:repository` to verify the repository-level contract.

## Stack

```text
React 19
TypeScript strict
Vite
Tailwind CSS v4
Storybook
Accessibility addon
```
