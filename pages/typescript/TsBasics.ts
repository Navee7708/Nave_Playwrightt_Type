import { Page } from '@playwright/test';

/**
 * Selects an option from a dropdown menu on a Playwright page based on the visible text of the option.
 *
 * @param page - The Playwright `Page` object representing the browser page.
 * @param dropdownSelector - The selector for the dropdown element to interact with.
 * @param optionText - The visible text of the option to select from the dropdown.
 * @returns A promise that resolves when the option has been successfully selected.
 * 
 * @throws Will throw an error if the dropdown or the specified option is not found or cannot be interacted with.
 * 
 * @example
 * ```typescript
 * await selectDropdownOption(page, '#countryDropdown', 'United States');
 * ```
 */
export class TsBasics {
    /**
     * Selects an option from a dropdown menu on a Playwright page based on the visible text of the option.
     *
     * @param dropdownSelector - The selector for the dropdown element to interact with.
     * @param optionText - The visible text of the option to select from the dropdown.
     * @returns A promise that resolves when the option has been successfully selected.
     * 
     * @throws Will throw an error if the dropdown or the specified option is not found or cannot be interacted with.
     * 
     * @example
     * ```typescript
     * await selectDropdownOption(page, '#countryDropdown', 'United States');
     * ```
     */
    public async selectDropdownOption(page: Page, dropdownSelector: string, optionText: string): Promise<void> {
        try {
            // Wait for the dropdown to be visible
            await page.waitForSelector(dropdownSelector, { state: 'visible' });

            // Click the dropdown to open it
            await page.click(dropdownSelector);

            // Select the option with the given text
            const optionSelector = `text=${optionText}`;
            await page.waitForSelector(optionSelector, { state: 'visible' });
            await page.click(optionSelector);

            console.log(`Successfully selected the option: ${optionText}`);
        } catch (error) {
            console.error(`Error selecting the option "${optionText}" from dropdown "${dropdownSelector}":`, error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
    /**
     * Clicks a radio button based on the visible text associated with it.
     *
     * @param radioButtonText - The visible text associated with the radio button to click.
     * @returns A promise that resolves when the radio button has been successfully clicked.
     * 
     * @throws Will throw an error if the radio button is not found or cannot be interacted with.
     * 
     * @example
     * ```typescript
     * await clickRadioButton(page, 'Male');
     * ```
     */
    public async clickRadioButton(page: Page, radioButtonText: string): Promise<void> {
        try {
            // Construct the selector for the radio button based on the visible text
            const radioButtonSelector = `text=${radioButtonText}`;

            // Wait for the radio button to be visible
            await page.waitForSelector(radioButtonSelector, { state: 'visible' });

            // Click the radio button
            console.log(`Successfully clicked the radio button: ${radioButtonText}`);
        } catch (error) {
            console.error(`Error clicking the radio button with text "${radioButtonText}":`, error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
}

