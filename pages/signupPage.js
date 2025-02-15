class SignupPage {
    constructor(page) {
      this.page = page;
      this.nameInput = 'input[name="name"]';
      this.emailInput = 'form:has-text("Signup") input[name="email"]';
      this.signupButton = 'button:has-text("Signup")';
      this.genderRadio = 'input[id="id_gender1"]'; // Mr.
      this.passwordInput = 'input[name="password"]';
      this.dayDropdown = '#days';
      this.monthDropdown = '#months';
      this.yearDropdown = '#years';
      this.firstNameInput = 'input[name="first_name"]';
      this.lastNameInput = 'input[name="last_name"]';
      this.companyInput = 'input[name="company"]';
      this.address1Input = 'input[name="address1"]';
      this.address2Input = 'input[name="address2"]';
      this.countryDropdown = 'select[name="country"]';
      this.stateInput = 'input[name="state"]';
      this.cityInput = 'input[name="city"]';
      this.zipcodeInput = 'input[name="zipcode"]';
      this.mobileInput = 'input[name="mobile_number"]';
      this.createAccountButton = 'button:has-text("Create Account")';
      this.successMessage = 'h2:has-text("Account Created!")';
    }
  
    async navigate() {
      await this.page.goto('https://automationexercise.com/login');
    }
  
    async fillSignupForm(userData) {
      await this.page.fill(this.nameInput, userData.name);
      await this.page.fill(this.emailInput, userData.email);
      await this.page.click(this.signupButton);
    }
  
    async completeAccountDetails(userData) {
      await this.page.check(this.genderRadio);
      await this.page.fill(this.passwordInput, userData.password);
      await this.page.selectOption(this.dayDropdown, userData.day);
      await this.page.selectOption(this.monthDropdown, userData.month);
      await this.page.selectOption(this.yearDropdown, userData.year);
      await this.page.fill(this.firstNameInput, userData.firstName);
      await this.page.fill(this.lastNameInput, userData.lastName);
      await this.page.fill(this.companyInput, userData.company);
      await this.page.fill(this.address1Input, userData.address1);
      await this.page.fill(this.address2Input, userData.address2);
      await this.page.selectOption(this.countryDropdown, userData.country);
      await this.page.fill(this.stateInput, userData.state);
      await this.page.fill(this.cityInput, userData.city);
      await this.page.fill(this.zipcodeInput, userData.zipcode);
      await this.page.fill(this.mobileInput, userData.mobile);
      await this.page.click(this.createAccountButton);
    }
  
    async assertAccountCreated() {
      await this.page.waitForSelector(this.successMessage);
    }
  }
  
  module.exports = SignupPage;
  