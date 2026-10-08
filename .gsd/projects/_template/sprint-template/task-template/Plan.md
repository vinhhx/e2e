# Execution & Test Strategy Plan

## 1. Test Strategy Overview
- **Engine:** `@e2e-dev/web`
- **Viewports Tested:** Desktop (`1280x800`) and Mobile (`390x844`)
- **Mode:** Hybrid (Deterministic locators + Agentic visual assertions)

## 2. Step-by-Step Test Strategy
1. **Navigate:** Open target route via `app.open('/example-route')`.
2. **Interact:** Fill inputs using semantic `screen.getByLabel(...)` and submit.
3. **Assert Functional:**
   - Verify URL changes or status message appears via `expect(screen.getByRole('status')).toBeVisible()`.
4. **Assert Visual / Design:**
   - Execute multimodal assertion `agent.assert('...', { vision: true })` to verify spacing, contrast, and alignment.
5. **Artifacts:**
   - Capture evidence screenshot via `app.screenshot('step-result')`.
