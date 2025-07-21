import { Given, When, Then } from '@cucumber/cucumber';
import { ProductPage } from '../pages/productPages';


When('user adds the first item to the cart', async function () {
  this.productPage = new ProductPage(this.page);
  await this.productPage.addFirstItemToCart();
});

When('user add more item to the cart', async function () {
  await this.productPage.addSecondItem();
});

Then('the cart badge should display {string}', async function (count: string) {
  await this.productPage.verifyCartBadge(count);
});

When('user removes the item from the cart', async function () {
  if (!this.productPage) {
    this.productPage = new ProductPage(this.page);
  }
  await this.productPage.removeItemFromCart();
})
