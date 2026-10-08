# Technical & DOM Analysis

## 1. DOM Elements & Accessible Hierarchy
- Container: Root page at `/`
- Heading: `screen.getByRole('heading', { name: 'Say hello' })`
- Input field: `screen.getByLabel('Name')`
- Submit control: `screen.getByRole('button', { name: 'Greet' })`
- Output container: `screen.getByRole('status')`

## 2. Dependencies & Preconditions
- App dev server running at base URL (`http://localhost:3000`).
- No prior authentication required.

## 3. Potential Failure Modes
- Next.js hydration lag: handled by Playwright auto-wait in `@e2e-dev/web`.
- Empty string edge cases handled in separate task (`task-empty-validation`).
