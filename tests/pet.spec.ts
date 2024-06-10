import { test, expect } from '@playwright/test';


test('GET pets', async ({ request }) => {
  const pets = await request.get(`${process.env.BASE_URL}/v1/pets`);
  expect(pets.ok()).toBeTruthy();
});

