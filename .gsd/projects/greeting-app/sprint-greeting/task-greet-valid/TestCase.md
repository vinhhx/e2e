# Formal Test Case: TC-01

### [TC-01] Greet with Valid Name
- **ID:** TC-01
- **Severity:** High
- **Preconditions:**
  - Base URL reachable at `/`.
- **Test Steps:**
  1. Open `/`.
  2. Fill 'Ada' into the 'Name' input field.
  3. Click the 'Greet' button.
- **Expected Functional Result:**
  - Status element (`role="status"`) renders text `Hello, Ada!`.
- **Expected Design Result:**
  - Greeting text is clearly rendered, nicely spaced, and legible without clipped boundaries.
