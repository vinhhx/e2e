# Formal Test Case: TC-02

### [TC-02] Validation Alert for Empty Name
- **ID:** TC-02
- **Severity:** High
- **Preconditions:**
  - Base URL reachable at `/`.
- **Test Steps:**
  1. Open `/`.
  2. Click 'Greet' button with empty input field.
- **Expected Functional Result:**
  - Alert role element displays text `Enter a name first.`.
- **Expected Design Result:**
  - Validation warning alert is visibly prominent above the button.
