
# Project Title

This project automates a series of tasks on the [Automation Exercise](https://automationexercise.com/) website using Playwright. The tasks include user sign-up, product selection, updating product details, proceeding to checkout, and submitting a contact form.

## Project Overview

The goal of this project is to automate the following steps:

1. **Sign-up Process**: Complete the sign-up form with required and non-required fields.
2. **Product Selection**: Navigate to the "Men" category, select "Jeans," and view a product.
3. **Update Product**: Change the product quantity and add it to the cart.
4. **Checkout**: Proceed to checkout, add dummy payment details, and confirm the order.
5. **Contact Us Form**: Fill out the contact form, attach a file, and verify submission.

The automation is implemented using Playwright with the Page Object Model (POM) design pattern for better maintainability and readability.




## Installation

### Step 1: Install Node.js

Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).

To verify the installation, run the following command in your terminal:

```bash
node -v
```
### Step 2: Install Playwright
To install Playwright, run the following command in your terminal:
```bash
npm init playwright@latest
```
This command will set up a new Playwright project and install all the necessary dependencies.

### Step 3: Verify Installation
After installation, you can verify that Playwright is installed correctly by running:

```bash
npx playwright --version
```

## Running the Tests
### Step 1: Clone the Repository
Clone this repository to your local machine:
```bash
git clone <repository-url>
```
Replace <repository-url> with the actual URL of your GitHub repository.

### Step 2: Navigate to the Project Directory
Move into the project directory:
```bash
cd <project-folder>
```
Replace <project-folder> with the name of your project folder.

### Step 3: Run the Sign-up Test
To run the sign-up test, use the following command:

```bash
npx playwright test signupTest.test.js
```
This will execute the test file <signupTest.test.js>, which automates the sign-up process.

### Step 4: Run Tests in Headed Mode (for Debugging)
To run the tests in headed mode (with a visible browser window), use the following command:

```bash
npx playwright test signupTest.test.js --headed
```
This is useful for debugging as it allows you to see the browser actions in real-time.

### Step 5: Run the Main Test
To run the main test file that covers product selection, updating product details, checkout, and contact form submission, use the following command:
```bash
npx playwright test myTest.test.js
```
This will execute the test file <myTest.test.js>.

### Step 6: Run Tests in Headed Mode (for Debugging)
To run the tests in headed mode (with a visible browser window), use the following command:

```bash
npx playwright test myTest.test.js --headed
```
This is useful for debugging as it allows you to see the browser actions in real-time.

## Test Reports
After running the tests, you can view the test reports by opening the generated HTML report. Run the following command to open the report:

```bash
npx playwright show-report
```

## 🏗 Project Structure
```bash
ecommerce-automation/
│-- tests/              # Test files
│   ├── signupTest.test.js  # Signup process test
│   ├── myTest.test.js      # Full E-commerce Flow test
│-- pages/              # Page Object Model (POM) files
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── contactUsPage.js
│   ├── homePage.js
│   ├── loginPage.js
│   ├── productPage.js
│   ├── signupPage.js
│-- package.json        # Project dependencies and scripts
│-- README.md           # Documentation
│-- playwright.config.js # Playwright configuration
```

## ✅ Assertions Used in Tests

### **📌 Login Page (`loginPage.js`)**
- Verify the **login page URL** is correct.
- Assert that the **email, password fields, and login button** are visible.
- After login, assert the presence of the **user's name** or a **success message**.
- Verify incorrect credentials show an **error message**.

---

### **📌 Signup Page (`signupPage.js`)**
- Assert that the **signup form fields** (name, email, password, date of birth, etc.) are visible.
- Verify successful account creation by checking for a **welcome message** or **redirected URL**.
- Validate **error messages** for missing required fields.

---

### **📌 Product Page (`productPage.js`)**
- Assert that the selected **product name, price, and description** match expected values.
- Verify that **changing the quantity updates the displayed total price**.
- Ensure the **"Add to Cart" button** adds the item to the cart.

---

### **📌 Cart Page (`cartPage.js`)**
- Assert that added products **appear in the cart** with the correct name, quantity, and price.
- Validate the **cart subtotal and total price calculations**.
- Ensure the **"Proceed to Checkout" button** is present and functional.

---

### **📌 Checkout Page (`checkoutPage.js`)**
- Verify that the **checkout page displays all cart items**.
- Assert that entering **dummy payment details enables the "Place Order" button**.
- Confirm **order placement** by checking for a success message after payment.

---

### **📌 Contact Us Page (`contactUsPage.js`)**
- Assert that the **contact form fields** (name, email, subject, message) are visible.
- Verify **file upload functionality**.
- Handle the **confirmation popup by clicking OK**.
