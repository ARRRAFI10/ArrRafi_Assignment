
const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
    await this.page.waitForLoadState("networkidle");

    await expect(this.page).toHaveURL(/.*\/view_cart/);

    const cartItems = this.page.locator(".cart_product");
    await expect(cartItems.first()).toBeVisible();  

    await this.page.getByText("Proceed To Checkout").click();
    await this.page.waitForLoadState("networkidle");

    
    await expect(this.page).toHaveURL(/.*\/checkout/);
  }
}

module.exports = CartPage;


