export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.firstItemAddBtn = page.locator('.inventory_item button').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.firstItemAddBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}