import LoginPage from '../support/loginPage';
describe('Login Flow', () => {
    it('should login by clicking the form and entering credentials', () => {
      // Visit homepage
      cy.visit('https://sdet.solutechlabs.com');
  
      // Click the login link
      cy.get('[href="https://sdet.solutechlabs.com/login"]').click();
  
      // Click the form container (escaped colon)
      cy.get('.sm\\:max-w-md').click();
  
      // Enter email and password
      cy.get('#email').type('admin@account.com');
      cy.get('#password').type('password');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
    });
  });
  
