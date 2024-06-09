import { test, expect } from '@playwright/test';


test('GET pets', async ({ request }) => {
  const issues = await request.get(`${process.env.BASE_URL}/v1/pets`);
  expect(issues.ok()).toBeTruthy();
});

