import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('[TC-01] Greet User with Valid Name', async ({ app, screen, agent }) => {
  await app.open('/');

  // 1. Fill input & trigger action
  await screen.getByLabel('Name').fill('Ada');
  await screen.getByRole('button', 'Greet').click();

  // 2. Functional check
  await expect(screen.getByRole('status')).toHaveText('Hello, Ada!');

  // 3. Multimodal visual design check
  await agent.assert('greeting banner is prominently displayed and properly formatted', {
    vision: true,
  });

  // 4. Evidence screenshot
  await app.screenshot('tc-01-greeting-success');
});

test('[TC-02] Validation Alert for Empty Name', async ({ app, screen, agent }) => {
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
