export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}