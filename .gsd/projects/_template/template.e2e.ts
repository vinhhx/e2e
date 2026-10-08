import { test } from '@e2e-dev/web';
import { expect, unique } from 'e2e';
import data from './data.json';

test('[TC-01] Valid User Submission Flow', async ({ app, screen, agent }) => {
  await app.open('/example');

  // Use unique run-safe values to avoid replay cache collision
  const userEmail = unique(`alex-${Date.now()}@${data.testUser.emailDomain}`);

  // 1. Functional interactions using strict locator hierarchy
  await screen.getByLabel('Full Name').fill(data.testUser.displayName);
  await screen.getByLabel('Email Address').fill(userEmail.value);
  await screen.getByRole('button', 'Submit').click();

  // 2. Functional assertions
  await expect(screen.getByRole('status')).toHaveText('Submission received');

  // 3. Multimodal visual design assertion
  await agent.assert('success confirmation message is green, well-spaced, and properly centered', {
    vision: true,
  });

  // 4. Capture screenshot artifact
  await app.screenshot('tc-01-submission-success');
});

test('[TC-02] Validation & Error Alert', async ({ app, screen, agent }) => {
  await app.open('/example');

  await screen.getByRole('button', 'Submit').click();

  // Verify functional alert
  await expect(screen.getByRole('alert')).toContainText('Please fill in all required fields');

  // Verify design alert styling
  await agent.assert('input fields indicate invalid status with red borders or badges', {
    vision: true,
  });
});
