import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addFirstItemToCart() {
    await this.page.click('.inventory_item button');
  }

  async verifyCartBadge(count: string) {
    const badge = this.page.locator('.shopping_cart_badge');

    if (count === '0') {
      // Pastikan badge tidak ada
      await expect(badge).toHaveCount(0);
    } else {
      // Pastikan badge ada dan nilainya sesuai
      await expect(badge).toHaveText(count);
    }
  }

  async addSecondItem() {
    await this.page.locator('button:has-text("Add to cart")').nth(1).click()
  }

  async removeItemFromCart() {
    const removeBtn = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    await removeBtn.waitFor({ state: 'visible', timeout: 3000 });
    await removeBtn.click();
  }
}
