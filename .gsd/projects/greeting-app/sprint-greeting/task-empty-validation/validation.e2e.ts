import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('[sprint-greeting:task-empty-validation] Validation Alert for Empty Name', async ({ app, screen, agent }) => {
  await app.open('/');

  // 1. Click without filling name
  await screen.getByRole('button', 'Greet').click();

  // 2. Functional alert check
  await expect(screen.getByRole('alert').filter({ hasText: 'Enter a name first.' })).toBeVisible();

  // 3. Multimodal visual check
  await agent.assert('validation warning alert is visibly prominent above the button', {
    vision: true,
  });
});
