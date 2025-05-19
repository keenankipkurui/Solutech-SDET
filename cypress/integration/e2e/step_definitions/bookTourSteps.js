import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the homepage', () => {
  cy.visit('https://sdet.solutechlabs.com');
});

When('I click the Book Tour button', () => {
  cy.get(':nth-child(1) > .relative > .flex > .bg-\\[\\#FF2D20\\]')
    .should('be.visible')
    .click();
});

When('I enter a random number in the number input', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  cy.get('.ivu-input-type-number > .ivu-input')
    .should('be.visible')
    .type(randomNumber.toString());
});

When('I enter the name {string}', (name) => {
  cy.get('.ivu-input-type-text > .ivu-input')
    .should('be.visible')
    .type(name);
});

When('I enter the email {string}', (email) => {
  cy.get('.ivu-input-type-email > .ivu-input')
    .should('be.visible')
    .type(email);
});

When('I submit the booking form', () => {
  cy.get(':nth-child(3) > .ivu-modal > .ivu-modal-content > .ivu-modal-footer > .ivu-btn-primary')
    .should('be.visible')
    .click();
});

Then('the booking should be successful', () => {
  // Add your assertion here, for example:
  // cy.contains('Booking confirmed').should('be.visible')
  // or any other confirmation you expect on success
});
