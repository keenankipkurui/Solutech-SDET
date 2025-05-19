import LoginPage from '../support/loginPage';

describe('Login Flow', () => {
  it('should login and complete the tour booking form', () => {
    // Visit homepage
    cy.visit('https://sdet.solutechlabs.com');

    // Click the login link
    cy.get('[href="https://sdet.solutechlabs.com/login"]').click();

    // Click the form container
    cy.get('.sm\\:max-w-md').click();

    // Enter email and password
    cy.get('#email').type('admin@account.com');
    cy.get('#password').type('password');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard to load
    cy.wait(2000);

    // Click the 6th inline-flex button
    cy.get(':nth-child(6) > .inline-flex').should('be.visible').click();

    // Click the next button
    cy.get('.mt-2 > .ivu-btn').should('be.visible').click();

    // Open the drawer
    cy.get('.ivu-drawer-body').should('be.visible').click();

    // Fill name
    cy.get(':nth-child(1) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
      .type('Cypress Test Tour');

    // Fill description
    cy.get(':nth-child(2) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
      .type('This is a test tour description');

    // Select destination
    cy.get('.ivu-select-placeholder').click();
    cy.get('.ivu-select-dropdown-list li').first().click();

    // Enter price
    cy.get(':nth-child(4) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
      .type('5000');

    // Enter slots
    cy.get(':nth-child(5) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
      .type('20');

    // Click the submit button
    cy.get('.demo-drawer-footer > .ivu-btn-primary')
      .should('be.visible')
      .click();
  });
});
