import { When, Then } from '@cucumber/cucumber';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

When('user navigates to the cart page', async function () {
  const cartIcon = this.page.locator('.shopping_cart_link');
  await cartIcon.click();
});

When('user proceeds to checkout', async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickCheckout();
});

When('user leave the information empty', async function () {
    this.checkoutPage = new CheckoutPage(this.page);
    await this.checkoutPage.clickContinue();
  });
  
  Then('the error mandatory checking appears', async function () {
    await this.checkoutPage.verifyErrorMessage();
  });

When('user enters checkout information with first name {string}, last name {string}, and zip code {string}', async function (firstName: string, lastName: string, zipCode: string) {
    this.checkoutPage = new CheckoutPage(this.page);
    await this.checkoutPage.fillInformation(firstName, lastName, zipCode);
    await this.checkoutPage.clickContinue();
  }
);

When('user finishes the checkout process', async function () {
  await this.checkoutPage.clickFinish();
});

Then('the checkout should be successful with a confirmation message', async function () {
  await this.checkoutPage.verifySuccessMessage();
});
