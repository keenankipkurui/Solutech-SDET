import LoginPage from '../support/loginPage';  // adjust path if needed

describe('Login with invalid credentials', () => {
    it('should display an error message when login fails', () => {
      // Visit homepage
      cy.visit('https://sdet.solutechlabs.com');
  
      // Click login link
      cy.get('[href="https://sdet.solutechlabs.com/login"]').click();
  
      // Click the login form
      cy.get('.sm\\:max-w-md').click();
  
      // Enter invalid credentials
      cy.get('#email').type('wronguser@example.com');
      cy.get('#password').type('wrongpassword');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Assert that error message is visible
      cy.get(':nth-child(1) > .mt-2 > .text-sm')
        .should('be.visible')
        .and('contain.text', 'match our records'); // Adjust based on actual error text
    });
  });
  