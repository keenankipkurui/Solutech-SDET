import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the homepage', () => {
  cy.visit('https://sdet.solutechlabs.com');
});

Given('I click the login link', () => {
  cy.get('[href="https://sdet.solutechlabs.com/login"]').click();
});

Given('I click the login form', () => {
  cy.get('.sm\\:max-w-md').click();
});

When('I enter invalid email {string}', (email) => {
  cy.get('#email').type(email);
});

When('I enter invalid password {string}', (password) => {
  cy.get('#password').type(password);
});

When('I submit the login form', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see an error message containing {string}', (text) => {
  cy.get(':nth-child(1) > .mt-2 > .text-sm')
    .should('be.visible')
    .and('contain.text', text);
});
