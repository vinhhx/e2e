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
1. **Self-Contained Task Test Cases**: Every task test case must be independently runnable via `/e2e-testcase <project> <sprint> <task>` without depending on preceding tests.
2. **Session Reuse**: For tests requiring authentication, use `test.setup` with `session.save(name)` and declare `{ session: name }` in test options rather than logging in on every test attempt.
3. **Run-Safe Parameters**:
   - Use `unique(value)` for timestamped or run-specific data (e.g. emails, unique names) so the replay cache does not collide.
   - Use `credentials.user(name)` and `secrets.get(name)` for sensitive credentials. Never hardcode passwords or tokens.

---

## 4. Agile Sprint & Task Hierarchy (`Project -> Sprint -> Task`)
Every project in `.gsd/projects/` is organized into Sprints, where each Task represents an isolated, documented test case:

```text
.gsd/projects/<project-name>/
└── <sprint-name>/
    └── <task-name>/
        ├── Description.md   # User story, feature overview & acceptance criteria
        ├── Analyze.md       # Pre-implementation DOM, dependencies & failure mode analysis
        ├── Plan.md          # Execution plan & step-by-step strategy
        ├── Todo.md          # Task lifecycle progress checklist
        ├── Review.md        # Human review gate approval & execution verdicts
        ├── TestCase.md      # Formal test case specification (TC-xx)
        ├── data.json        # Dynamic parameters, test accounts & mock payloads
        └── <task>.e2e.ts    # Executable browser test script
```

### The 8-Artifact Protocol per Task
* `Description.md`: What the feature does and what business acceptance criteria must pass.
* `Analyze.md`: Technical breakdown of the DOM, accessibility roles, and flakiness factors.
* `Plan.md`: Concrete execution strategy (navigation -> interaction -> functional assertion -> visual assertion).
* `Todo.md`: Task checklist tracking the lifecycle from analysis to verified execution.
* `Review.md`: Human review sign-off records (`APPROVED` / `CHANGES_REQUESTED`) and test execution verdicts.
* `TestCase.md`: Formal QA test case specification matching enterprise test management standards.
* `data.json`: Parameterized inputs kept cleanly decoupled from test code.
* `*.e2e.ts`: The runnable test executed by the `@e2e-dev/web` engine.

---

## 5. Review & Execution Gates
- **Low-Risk Changes** (updating existing locators, assertion fixes): Can be updated and verified directly.
- **High-Risk Changes** (new user flows, checkout/payment flows, database-mutating flows): Must require explicit human confirmation in `Review.md` during the `/check-new-test` review phase before `.e2e.ts` is implemented.
