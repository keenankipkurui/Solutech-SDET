import LoginPage from '../support/loginPage'; 

describe('Login and book a tour', () => {
    it('should log in and click the book tour button', () => {
      // Visit home
      cy.visit('https://sdet.solutechlabs.com');
  
      // Click the "Book Tour" button
      cy.get(':nth-child(1) > .relative > .flex > .bg-\\[\\#FF2D20\\]')
        .should('be.visible')
        .click();// Enter a random number in number input
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        cy.get('.ivu-input-type-number > .ivu-input')
          .should('be.visible')
          .type(randomNumber.toString());
    
        // Enter a name in text input
        cy.get('.ivu-input-type-text > .ivu-input')
          .should('be.visible')
          .type('Keenan K.');
    
        // Enter an email address in email input
        cy.get('.ivu-input-type-email > .ivu-input')
          .should('be.visible')
          .type('keenan@example.com');
    
        // Click the Submit button
        cy.get(':nth-child(3) > .ivu-modal > .ivu-modal-content > .ivu-modal-footer > .ivu-btn-primary')
          .should('be.visible')
          .click();
      });
    });