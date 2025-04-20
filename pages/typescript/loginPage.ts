import { Page } from 'playwright';

/**
 * Represents the Login Page and provides methods to interact with it.
 */
export class LoginPage {
    private page: Page;

    /**
     * Initializes a new instance of the LoginPage class.
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the specified URL.
     * @param url - The URL to navigate to.
     */
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url).catch(error => {
            throw new Error(`Failed to navigate to ${url}: ${error.message}`);
        });
    }

    /**
     * Fills in the username input field with the provided username.
     * @param username - The username to enter.
     */
    async enterUsername(username: string): Promise<void> {
        await this.page.fill('input[name="username"]', username).catch(error => {
            throw new Error(`Failed to enter username: ${error.message}`);
        });
    }

    /**
     * Fills in the password input field with the provided password.
     * @param password - The password to enter.
     */
    async enterPassword(password: string): Promise<void> {
        await this.page.fill('input[name="password"]', password).catch(error => {
            throw new Error(`Failed to enter password: ${error.message}`);
        });
    }

    /**
     * Clicks the login button to submit the login form.
     */
    async clickLogin(): Promise<void> {
        await this.page.click('button[type="submit"]').catch(error => {
            throw new Error(`Failed to click login button: ${error.message}`);
        });
    }

    /**
     * Performs the login operation by entering the username, password, and clicking the login button.
     * @param username - The username to use for login.
     * @param password - The password to use for login.
     */
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    /**
     * Asserts that the success popup is visible after a successful login.
     */
    async assertSuccessPopup(): Promise<void> {
        await this.page.waitForSelector('.success-popup', { state: 'visible' }).catch(error => {
            throw new Error(`Success popup not visible: ${error.message}`);
        });
    }
}
