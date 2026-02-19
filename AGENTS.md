# Repository Guidelines

## Project Structure & Module Organization
This repository is a lightweight Vite-based JavaScript workspace for algorithm and Codewars practice.

- `src/main.js`: Vite entry point.
- `src/codewars.js`: main collection of kata solutions.
- `src/Sort/`, `src/Search/`: topic-focused solution modules.
- `src/test.ts`: ad hoc TypeScript experiments/manual checks.
- `public/`: static assets served by Vite.
- Root config: `package.json`, `index.html`, `pnpm-lock.yaml`.

Keep new solution files close to their domain (for example, `src/Sort/newSortTask.js`), and avoid mixing unrelated tasks in one module when adding new content.

## Build, Test, and Development Commands
- `npm run dev`: start local Vite dev server.
- `npm run build`: create production bundle in `dist/`.
- `npm run preview`: serve the production build locally.

There is currently no dedicated automated test script in `package.json`. If you add one, document it here and in `README.md`.

## Coding Style & Naming Conventions
- Use ES modules (`export` / `import`) and keep functions small and single-purpose.
- Follow the style of the file you edit; for new files, prefer consistent indentation and readable, descriptive names.
- Use `camelCase` for variables/functions (`maxProduct`, `binarySearch`).
- Use clear folder names by topic (`Sort`, `Search`) and file names by task intent (`sortBubbling.js`).

## Testing Guidelines
Current testing is manual:
- run `npm run dev`,
- execute/check solutions in browser console or via temporary calls in `src/main.js` or `src/test.ts`.

When adding non-trivial logic, include at least 2-3 representative cases (normal, edge, invalid input behavior). If you introduce a test framework, add a `test` script and keep tests next to modules or under a dedicated `src/tests/` folder.

## Commit & Pull Request Guidelines
Recent history uses short, imperative, lower-case commit subjects (for example: `implement ...`, `optimize ...`, `add ...`).

- Commit message format: `<verb> <what changed>`.
- Keep commits focused to one task/problem.
- PRs should include: purpose, key files changed, and before/after behavior notes.
- Link related issue/task when available; include screenshots only for UI-visible changes.
