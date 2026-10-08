import { test } from '@e2e-dev/web';
import { expect } from 'e2e';
import data from './data.json';

test('[sprint-greeting:task-greet-valid] Greet User with Valid Name', async ({ app, screen, agent }) => {
  await app.open('/');

  // 1. Fill input & trigger action
  await screen.getByLabel('Name').fill(data.name);
  await screen.getByRole('button', 'Greet').click();

  // 2. Functional check
  await expect(screen.getByRole('status')).toHaveText(`Hello, ${data.name}!`);

  // 3. Multimodal visual design check
  await agent.assert('greeting banner is prominently displayed and properly formatted', {
    vision: true,
  });

  // 4. Evidence screenshot
  await app.screenshot('tc-01-greeting-success');
});
