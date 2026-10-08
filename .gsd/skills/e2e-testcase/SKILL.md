---
name: e2e-testcase
description: Executes an individual targeted e2e test case from .gsd/projects/<project_name>/ in the browser interface, verifying both functional logic and visual design. Use when invoked via /e2e-testcase or asked to run a specific test case for a project.
---

# E2E Testcase Runner (/e2e-testcase)

This skill executes a specific test case from `.gsd/projects/<project_name>/` against the web browser interface.

## Usage
`/e2e-testcase <project_name> <case_name>`

Example:
`/e2e-testcase greeting-app TC-01`

---

## Workflow Steps

### 1. Load Context & Spec
1. Read `.gsd/projects/<project_name>/task.md` to find the exact specification for `<case_name>`.
2. Locate the corresponding test definition in `.gsd/projects/<project_name>/<project_name>.e2e.ts`.
3. Check for any required session or preconditions declared in `task.md`.

### 2. Execute Targeted Test
Run the test in isolation against the browser using the test filter flag `-t`:

```bash
pnpm exec e2e run .gsd/projects/<project_name>/*.e2e.ts -t "<case_name>" --headed
```

Options:
- `--headed`: Displays the browser window during test execution.
- `--ai-trace`: Enables token & model inspection if agent steps run.
- `--no-cache`: Forces a fresh execution without replaying cached runs when verifying fresh behavior.

### 3. Report Results
1. Check the execution verdict: `passed`, `failed`, or `blocked`.
2. Locate any screenshots captured in `.e2e/artifacts/`.
3. Summarize the outcome:
   - **Functional Result:** Status of DOM/interaction assertions.
   - **Design Result:** Status of visual assertions (`vision: true`) and layout fidelity.
   - **Artifacts:** Paths to captured screenshots or failure logs.
