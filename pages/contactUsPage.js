const path = require("path");
const { expect } = require("@playwright/test");

class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  async submitContactForm(name, email, subject, message, filePath) {
    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("Invalid email format. Email must contain '@' and '.'");
    }

    
    await this.page.getByRole("link", { name: " Contact us" }).click();
    await this.page.waitForLoadState("networkidle");

    
    await expect(this.page).toHaveURL(/.*\/contact_us/);
    await expect(this.page.getByRole("heading", { name: "Get In Touch" })).toBeVisible();

    
    await expect(this.page.getByPlaceholder("Name")).toBeVisible();
    await expect(this.page.getByPlaceholder("Email", { exact: true })).toBeVisible();
    await expect(this.page.getByPlaceholder("Subject")).toBeVisible();
    await expect(this.page.getByPlaceholder("Your Message Here")).toBeVisible();
    
  
    await this.page.getByPlaceholder("Name").fill(name);
    await this.page.getByPlaceholder("Email", { exact: true }).fill(email);
    await this.page.getByPlaceholder("Subject").fill(subject);
    await this.page.getByPlaceholder("Your Message Here").fill(message);

  
    await this.page.locator('input[name="upload_file"]').setInputFiles(filePath);

    
    this.page.once("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(); 
    });

    
    await this.page.getByRole("button", { name: "Submit" }).click();

    
    await this.page.waitForTimeout(3000);

    console.log("Form submitted successfully, and popup handled.");
  }
}

module.exports = ContactUsPage;

