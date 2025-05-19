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

Then('I click the dashboard bookings button', () => {
  cy.get('.justify-between > :nth-child(1) > :nth-child(3) > .inline-flex')
    .should('be.visible')
    .click();
});
