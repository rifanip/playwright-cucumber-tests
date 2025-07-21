import { Page, expect } from '@playwright/test';

export class SideBar {
  constructor(private page: Page) {}

  async clickMenu() {
    await this.page.click('#react-burger-menu-btn');
  }

  async logout() {
    await this.page.click('#logout_sidebar_link');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
