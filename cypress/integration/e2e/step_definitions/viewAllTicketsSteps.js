import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/loginPage';

Given('I open the homepage', () => {
  cy.visit('https://sdet.solutechlabs.com');
});

When('I login with email {string} and password {string}', (email, password) => {
  LoginPage.clickLoginLink();
  LoginPage.fillLoginForm(email, password);
});

Then('I click the Tickets dashboard button', () => {
  cy.wait(2000); // Wait for page load
  cy.get(':nth-child(4) > .inline-flex')
    .should('be.visible')
    .click();
});
