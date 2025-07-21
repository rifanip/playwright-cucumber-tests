import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginPages';
import { SideBar } from '../pages/sideBar';
import { expect } from '@playwright/test';

let loginPages: LoginPage;
let sideBar: SideBar;

Given('user is on the login page', async function () {
  await this.init();
  loginPages = new LoginPage(this.page);
  await loginPages.goto();
  this.loginPages = loginPages;
});

When('user enters username {string} and password {string}', async function (username: string, password: string) {
  await this.loginPages.login(username, password);
});

Then('the system should {string} the login attempt', async function (result: string) {
  if (result === 'succeed') {
    await this.loginPages.assertOnInventoryPage();
    sideBar = new SideBar(this.page);
    this.loginSuccessful = true;
  } else if (result === 'fail') {
    await this.loginPages.assertLoginError('Epic sadface: Username and password do not match');
    this.loginSuccessful = false;
  }
});

When('user is in the home page if login succeed', async function () {
  if (!this.loginSuccessful) return;
  await expect(this.page).toHaveURL(/.*inventory/);
});

When('user clicks the menu bar if login succeed', async function () {
  if (!this.loginSuccessful) return;
  await sideBar.clickMenu();
});

Then('user logs out if login succeed', async function () {
  if (!this.loginSuccessful) return;
  await sideBar.logout();
});
