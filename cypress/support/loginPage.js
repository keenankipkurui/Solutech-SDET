const { Password } = require("view-ui-plus")

// cypress/support/loginPage.js

class LoginPage {
    constructor() {
      this.username = 'admin@account.com';
      this.password = 'password';
      this.url = 'https://sdet.solutechlabs.com/';
    }
  
    login() {
      cy.visit(this.url);
      cy.get('input[name="email"]').type(this.username);     // Adjust selector if needed
      cy.get('input[name="password"]').type(this.password);  // Adjust selector if needed
      cy.get('button[type="submit"]').click();               // Adjust selector if needed
    }
  }
  
  export default LoginPage;
  