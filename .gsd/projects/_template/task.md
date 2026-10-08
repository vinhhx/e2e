# Project Task: [Project Name]

## Overview
Briefly describe the domain, feature set, and target application routes covered by this project.

- **Target Route(s):** `/example`
- **Primary Engine:** `@e2e-dev/web`

---

## Test Cases

### [TC-01] Valid User Submission Flow
- **Goal:** Verify that a user can complete the primary flow with valid inputs.
- **Preconditions:** Unauthenticated guest user on `/example`.
- **Execution Steps:**
  1. Navigate to `/example`.
  2. Fill the name and email input fields.
  3. Click the submit button.
- **Functional Expectation:**
  - Confirmation status message appears with text "Submission received".
  - Submit button is disabled while processing.
- **Design Expectation:**
  - Responsive card layout remains centered.
  - Success message badge is styled green without visual overlap (`vision: true`).

---

### [TC-02] Validation & Error Alert
- **Goal:** Verify form validation triggers appropriate visual warnings on empty submission.
- **Preconditions:** Guest user on `/example`.
- **Execution Steps:**
  1. Navigate to `/example`.
  2. Click submit button without entering data.
- **Functional Expectation:**
  - Alert error message is visible with text "Please fill in all required fields".
- **Design Expectation:**
  - Invalid input borders are highlighted in red.
