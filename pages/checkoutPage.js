const { expect } = require("@playwright/test");

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async placeOrderAndPay() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
    
    
    await expect(this.page).toHaveURL(/.*\/payment/);
    
    
    await expect(this.page.locator('input[name="name_on_card"]')).toBeVisible();
    await expect(this.page.locator('input[name="card_number"]')).toBeVisible();
    await expect(this.page.getByPlaceholder("ex.")).toBeVisible();
    await expect(this.page.getByPlaceholder("MM")).toBeVisible();
    await expect(this.page.getByPlaceholder("YYYY")).toBeVisible();

    
    await this.page.locator('input[name="name_on_card"]').fill("Rafi");
    await this.page.locator('input[name="card_number"]').fill("01111111111");
    await this.page.getByPlaceholder("ex.").fill("300");
    await this.page.getByPlaceholder("MM").fill("10");
    await this.page.getByPlaceholder("YYYY").fill("2050");

    await this.page.getByRole("button", { name: "Pay and Confirm Order" }).click();
    await this.page.waitForLoadState("networkidle");

    const successMessage = this.page.getByText("Order Placed!");

    await expect(successMessage).toBeVisible({ timeout: 10000 });

    console.log(await successMessage.innerText());
  }
}

module.exports = CheckoutPage;


