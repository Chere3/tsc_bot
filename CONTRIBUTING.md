# Contributing to tsc_bot

Thanks for helping improve `tsc_bot`.

## Development setup

```bash
bun install
cp .env.example .env
```

## Branch strategy

- Base branch: `master`
- Prefixes:
  - `feat/*`
  - `fix/*`
  - `refactor/*`
  - `chore/*`

## Quality gates

Run before opening a PR:

```bash
bun run validate
```

Current gate:
- TypeScript strict typecheck (`tsc --noEmit`)

## Pull request checklist

- [ ] Problem statement and context included
- [ ] Scope is focused and coherent
- [ ] `bun run validate` passes locally
- [ ] Screenshots/log snippets included when relevant
- [ ] ROADMAP updated if milestone scope changed
