import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import { users } from '../fixtures/testData';

test('E2E - Order Product', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  // Add to cart
  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  // Checkout
  await cartPage.clickCheckout();

  await checkoutPage.fillDetails('John', 'Doe', '12345');
  await checkoutPage.finishOrder();

  // Validation
  await expect(checkoutPage.successMsg).toHaveText('Thank you for your order!');
});