---
name: e2e-testcase
description: Executes an individual targeted e2e test case from .gsd/projects/<project>/<sprint>/<task>/ in the browser interface, verifying both functional logic and visual design, and updates Review.md. Use when invoked via /e2e-testcase or asked to run a specific test task.
---

# E2E Testcase Runner (/e2e-testcase)

This skill executes a specific test case from `.gsd/projects/<project>/<sprint>/<task>/` against the web browser interface.

## Usage
`/e2e-testcase <project> <sprint> <task>`

Example:
`/e2e-testcase greeting-app sprint-greeting task-greet-valid`

---

## Workflow Steps

### 1. Load Context & Spec
1. Read `.gsd/projects/<project>/<sprint>/<task>/TestCase.md` and `Plan.md`.
2. Locate the corresponding test script `.gsd/projects/<project>/<sprint>/<task>/*.e2e.ts`.
3. Check for any required session or preconditions.

### 2. Execute Targeted Test
Run the test in isolation against the browser:

```bash
pnpm exec e2e run .gsd/projects/<project>/<sprint>/<task>/*.e2e.ts --headed
```

Options:
- `--headed`: Displays the browser window during test execution.
- `--ai-trace`: Enables token & model inspection if agent steps run.
- `--no-cache`: Forces a fresh execution without replaying cached runs.

### 3. Log Verdict & Report
1. Check execution status: `passed`, `failed`, or `blocked`.
2. Update `.gsd/projects/<project>/<sprint>/<task>/Review.md` with:
   - Run date and timestamp.
   - Functional verdict and visual design verdict.
   - Screenshot artifact paths.
3. Update `.gsd/projects/<project>/<sprint>/<task>/Todo.md` checking off execution items.
4. Summarize the outcome in chat with clickable links to artifacts.
