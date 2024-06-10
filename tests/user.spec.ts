import { test, expect } from '@playwright/test';
import { UserType } from "../models/userModel";
import { userService } from '../clients/userservice';

test('POST createUser', async ({ request }) => {
  let user: UserType = {
    id: 7232,
    username: "test",
    firstName: "test",
    lastName: "test",
    email: "test",
    password: "test",
    phone: "test",
    userStatus: 1
  };

  const response = await userService.createUser(request, user);
  expect(response.ok()).toBeTruthy();
  let jsonObject = await response.json();
  expect(jsonObject).toContainEqual(expect.objectContaining({
    id: 7232,
    username: 'test'
  }));
});
