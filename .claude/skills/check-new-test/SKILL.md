---
name: check-new-test
description: Analyzes an e2e test task under .gsd/projects/<project>/<sprint>/<task>/, writes Description.md, Analyze.md, Plan.md, and halts on human review before generating TestCase.md and test code. Use when invoked via /check-new-test or asked to plan a test for a project sprint task.
---

# Check New Test (/check-new-test)

This skill implements the Agile **Analyze -> Plan -> Human Review -> Generate** cycle for `.gsd/projects/<project>/<sprint>/<task>/`.

## Usage
`/check-new-test <project> [sprint] [task]`

Example:
`/check-new-test greeting-app sprint-login task-register`

---

## Workflow Steps

### 1. Analyze
1. Read `.gsd/RULES.md` to ensure rules and locator hierarchy are respected.
2. Locate or create `.gsd/projects/<project>/<sprint>/<task>/`.
3. Inspect the target application code, recent git diffs, components, and route definitions.
4. Write `Description.md` (user story & acceptance criteria) and `Analyze.md` (DOM roles, state, and edge cases).

### 2. Plan
1. Write `Plan.md` defining the execution steps, functional assertions, and visual design checks (`vision: true`).
2. Initialize `Todo.md` checklist and `Review.md` with status `PENDING_REVIEW`.

### 3. Human Review Gate (MANDATORY)
1. Present the plan clearly to the user in Markdown.
2. **DO NOT** generate `TestCase.md`, `data.json`, or `*.e2e.ts` code yet.
3. Explicitly ask the user to review and sign off.
4. Stop and wait for user confirmation.

### 4. Generate & Sync (Post-Approval)
Once the user confirms approval:
1. Write `TestCase.md` and `data.json`.
2. Generate the runnable `<task>.e2e.ts` script.
3. Update `Review.md` status to `APPROVED`.
4. Verify that the new test compiles properly.
