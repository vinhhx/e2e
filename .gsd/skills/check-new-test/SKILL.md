---
name: check-new-test
description: Analyzes an e2e test project under .gsd/projects/<project_name>, inspects code changes/routes, drafts proposed test cases, and gates on human review before generating or updating tests. Use when invoked via /check-new-test or asked to check, plan, or update tests for a project.
---

# Check New Test (/check-new-test)

This skill implements the **Analyze -> Plan -> Human Review -> Generate** cycle for e2e tests in `.gsd/projects/<project_name>/`.

## Usage
`/check-new-test <project_name>`

---

## Workflow Steps

### 1. Analyze
1. Read `.gsd/RULES.md` to ensure rules and locator hierarchy are respected.
2. Read `.gsd/projects/<project_name>/task.md` (if existing) to understand current test coverage.
3. Inspect the target application code, recent git diffs, components, and route definitions.
4. Identify new features, uncovered interactions, form states, and design/layout requirements.

### 2. Plan
Formulate proposed test cases in the standard `.gsd` format:
- **ID & Title:** e.g., `[TC-03] Dynamic Search Filter`
- **Goal:** User intent.
- **Preconditions:** Required routes, auth state, or seed data.
- **Steps:** Sequence of actions.
- **Functional Expectation:** Specific role/status assertions.
- **Design Expectation:** Layout alignment, visual prominence (`vision: true`), responsive checks.

### 3. Human Review Gate (MANDATORY)
Present the plan clearly to the user using Markdown tables or checklists:
- **DO NOT** write or modify `.e2e.ts` code yet.
- Explicitly ask the user to review, adjust, or approve the proposed test plan.
- Stop and wait for user feedback.

### 4. Generate & Sync (Post-Approval)
Once the user confirms approval:
1. Update `.gsd/projects/<project_name>/task.md` with the new approved test cases.
2. Update or generate `.gsd/projects/<project_name>/<project_name>.e2e.ts`.
3. Verify that new tests compile and follow `.gsd/RULES.md`.
