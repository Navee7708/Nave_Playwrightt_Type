import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/typescript/loginPage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://example.com/login');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('validUser', 'validPassword');
    await loginPage.assertSuccessPopup();
  });

  test('should fail to login with invalid credentials', async ({ page }) => {
    await loginPage.enterUsername('invalidUser');
    await loginPage.enterPassword('invalidPassword');
    await loginPage.clickLogin();
    const errorMessage = await page.locator('.error-message').textContent();
    expect(errorMessage).toContain('Invalid username or password');
  });

  test('should display validation error for empty username', async ({ page }) => {
    await loginPage.enterPassword('somePassword');
    await loginPage.clickLogin();
    const usernameError = await page.locator('.username-error').textContent();
    expect(usernameError).toContain('Username is required');
  });

  test('should display validation error for empty password', async ({ page }) => {
    await loginPage.enterUsername('someUser');
    await loginPage.clickLogin();
    const passwordError = await page.locator('.password-error').textContent();
    expect(passwordError).toContain('Password is required');
  });
  test('should display validation error for empty fields', async ({ page }) => {
    await loginPage.clickLogin();
    const usernameError = await page.locator('.username-error').textContent();
    const passwordError = await page.locator('.password-error').textContent();
    expect(usernameError).toContain('Username is required');
    expect(passwordError).toContain('Password is required');
  });
  test('should display validation error for invalid email format', async ({ page }) => {
    await loginPage.enterUsername('invalidEmailFormat');
    await loginPage.enterPassword('somePassword');
    await loginPage.clickLogin();
    const emailError = await page.locator('.email-error').textContent();
    expect(emailError).toContain('Invalid email format');
  });
});
  
