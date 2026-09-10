# RockSoul UI pull request checklist

Use this checklist for any component, token, export, or asset change.

## Classification

- [ ] The component has one classification: foundation, sub-primitive, atom, molecule, organism, template, brand, domain, or feature.
- [ ] The owner and canonical file are recorded in `ui-component-inventory.json` when the public surface changes.
- [ ] The implementation follows the import direction in `UI-ARCHITECTURE-RULES.md`.
- [ ] Route, API, permission, and workflow code remains in the consuming application.

## API and behavior

- [ ] The name uses standard UI vocabulary and does not duplicate an existing public component.
- [ ] Controlled/uncontrolled behavior, disabled, invalid, loading, and error contracts are explicit where relevant.
- [ ] Interactive behavior includes keyboard operation, focus visibility, accessible name, and focus return for overlays.
- [ ] Loading, empty, error, and populated states are covered for data-bearing components.
- [ ] All visual values use semantic or component tokens.

## Evidence

- [ ] A Storybook story or an existing story is updated.
- [ ] Unit and accessibility tests match the risk of the change.
- [ ] `npm run typecheck`, relevant audits, and `npm run test:unit` pass.
- [ ] Library and Storybook builds pass for public or styling changes.
- [ ] Consumer verification is run when exports, primitives, or compatibility code changes.
- [ ] Migration and deprecation notes are included when an old API changes.

## Review

- [ ] The appropriate layer owner has reviewed the change.
- [ ] No new import from `components/compat` is introduced.
- [ ] No duplicate implementation is added to `apps/web`.
