import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the homepage', () => {
  cy.visit('https://sdet.solutechlabs.com');
});

When('I login with email {string} and password {string}', (email, password) => {
  cy.get('[href="https://sdet.solutechlabs.com/login"]').click();
  cy.get('.sm\\:max-w-md').click();
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
  cy.wait(2000); // wait for dashboard
});

When('I open the tour booking form', () => {
  cy.get(':nth-child(6) > .inline-flex').should('be.visible').click();
  cy.get('.mt-2 > .ivu-btn').should('be.visible').click();
  cy.get('.ivu-drawer-body').should('be.visible').click();
});

When('I fill the tour details with:', (dataTable) => {
  const data = dataTable.rowsHash();
  cy.get(':nth-child(1) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
    .type(data.name);
  cy.get(':nth-child(2) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
    .type(data.description);

  // Select destination - assumes "first" means first item in dropdown
  cy.get('.ivu-select-placeholder').click();
  cy.get('.ivu-select-dropdown-list li').first().click();

  cy.get(':nth-child(4) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
    .type(data.price);
  cy.get(':nth-child(5) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input')
    .type(data.slots);
});

Then('I submit the tour booking form', () => {
  cy.get('.demo-drawer-footer > .ivu-btn-primary')
    .should('be.visible')
    .click();
  // Add assertions here if needed for confirmation
});
