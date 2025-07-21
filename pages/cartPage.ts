export class CartPage {
    constructor(private page: any) {}
  
    async clickCheckout() {
      await this.page.click('#checkout');
    }
  }
  