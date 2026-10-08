# .gsd Root Rules for E2E Testing

These are the foundational rules and guidelines enforced across all testing projects in `.gsd/projects/`. All agents and contributors must follow these rules when planning, generating, and running e2e test cases.

---

## 1. Core Testing Philosophy
1. **Human-in-the-Loop Planning**: Every new test suite or major modification must pass through `Analyze -> Plan -> Human Review` before code is generated or committed.
2. **Deterministic + Agentic Hybrid**:
   - Use deterministic locators (`screen.getByRole`, `screen.getByLabel`) for verifiable functional assertions.
   - Use agentic actions (`agent.act()`) for multi-step user journeys and fluid workflows.
   - Pair every `agent.act()` with a deterministic check that does not depend on the model.
3. **Design & Visual Verification**:
   - Visual assertions must inspect actual rendered pixels using `agent.assert('...', { vision: true })`.
   - Explicitly evaluate responsive layout adaptation, spacing, contrast, element overlap, and alignment.
   - Capture evidence screenshots via `app.screenshot(label)` at key milestones.

---

## 2. Locator Hierarchy (Strict Order)
Never use fragile CSS selectors or XPaths. Always resolve nodes according to this strict hierarchy:
1. `screen.getByRole(role, { name })` — Semantic accessible role & accessible name (primary).
2. `screen.getByLabel(text)` — Form inputs with associated `<label>` or `aria-label`.
3. `screen.getByPlaceholder(text)` — Input placeholder fallback.
4. `screen.getByText(text)` — Visible non-interactive text content.
5. `screen.getByTestId(id)` — Dedicated `data-testid` attribute when semantic elements are unavailable.

---

## 3. Test Isolation & State Management
1. **Self-Contained Test Cases**: Every test case (`TC-xx`) must be independently runnable via `/e2e-testcase <project> <case_name>` without depending on preceding tests.
2. **Session Reuse**: For tests requiring authentication, use `test.setup` with `session.save(name)` and declare `{ session: name }` in test options rather than logging in on every test attempt.
3. **Run-Safe Parameters**:
   - Use `unique(value)` for timestamped or run-specific data (e.g. emails, unique names) so the replay cache does not collide.
   - Use `credentials.user(name)` and `secrets.get(name)` for sensitive credentials. Never hardcode passwords or tokens.

---

## 4. Test Case Specification Standard
Every project under `.gsd/projects/<project_name>/` must maintain a `task.md` with structured test case definitions:

```markdown
### [TC-XX] <Title>
- **Goal:** Clear description of user action.
- **Preconditions:** Required app state, authenticated session, or initial route.
- **Execution Steps:** Step-by-step user interaction.
- **Functional Expectation:** Specific DOM/state assertions (roles, texts, URLs).
- **Design Expectation:** Layout alignment, responsive viewport checks, styling alerts.
```

---

## 5. Review & Execution Gates
- **Low-Risk Changes** (updating existing locators, assertion fixes): Can be updated and verified directly.
- **High-Risk Changes** (new user flows, checkout/payment flows, database-mutating flows): Must require explicit human confirmation during the `/check-new-test` review phase.
