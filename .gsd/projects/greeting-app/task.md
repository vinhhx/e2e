# Project Task: Greeting App

## Overview
Greeting form validation, dynamic user greeting rendering, and visual status indicators.

- **Target Route:** `/`
- **Primary Engine:** `@e2e-dev/web`

---

## Test Cases

### [TC-01] Greet User with Valid Name
- **Goal:** Verify that entering a name produces a friendly greeting message.
- **Preconditions:** Fresh page visit at `/`.
- **Execution Steps:**
  1. Open `/`.
  2. Fill 'Ada' into the 'Name' input field.
  3. Click 'Greet'.
- **Functional Expectation:**
  - Status element (`role="status"`) displays text `Hello, Ada!`.
- **Design Expectation:**
  - Greeting text is clearly rendered and legible without clipped boundaries (`vision: true`).

---

### [TC-02] Validation Alert for Empty Name
- **Goal:** Verify error message when clicking Greet without typing a name.
- **Preconditions:** Fresh page visit at `/`.
- **Execution Steps:**
  1. Open `/`.
  2. Click 'Greet' with empty Name field.
- **Functional Expectation:**
  - Alert element (`role="alert"`) displays text `Enter a name first.`.
- **Design Expectation:**
  - Alert message is visibly prominent and properly positioned.
