import { test } from '@e2e-dev/web';
import { expect, unique } from 'e2e';
import data from './data.json';

test('[TC-01] [Test Case Title]', async ({ app, screen, agent }) => {
  await app.open('/example-route');

  const runName = unique(data.testUser.name);

  // 1. Functional interaction
  await screen.getByLabel('Name').fill(runName.value);
  await screen.getByRole('button', 'Submit').click();

  // 2. Functional expectation
  await expect(screen.getByRole('status')).toBeVisible();

  // 3. Visual design verification
  await agent.assert('confirmation message is styled properly and aligned', {
    vision: true,
  });

  // 4. Capture screenshot
  await app.screenshot('tc-01-result');
});
