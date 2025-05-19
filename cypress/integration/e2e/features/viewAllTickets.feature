Feature: Login and click the 4th dashboard button

  Scenario: Login and click the 4th inline-flex button on dashboard
    Given I open the homepage
    When I login with email "admin@account.com" and password "password"
    Then I click the Ticket dashboard button
