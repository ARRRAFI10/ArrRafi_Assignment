const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToJeansCategory() {

    const menLink = await this.page.locator('a[href="#Men"]');
    await expect(menLink).toBeVisible();  
    
    await this.page.getByRole("heading", { name: " Men" }).click();
    await this.page.getByRole("link", { name: " Men" }).click();
    await this.page.getByRole("link", { name: "Jeans" }).click();
  }
}

module.exports = HomePage;

