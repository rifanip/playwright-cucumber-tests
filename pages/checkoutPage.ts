import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: any) {}

  async fillInformation(firstName: string, lastName: string, zipCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zipCode);
  }

  async clickContinue() {
    await this.page.click('#continue');
  }

  async clickFinish() {
    await this.page.click('#finish');
  }

  async verifySuccessMessage() {
    const confirmation = this.page.locator('.complete-header');
    await expect(confirmation).toHaveText('Thank you for your order!');
  }

  async verifyErrorMessage() {
    const error = this.page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error: First Name is required');
  }
}
