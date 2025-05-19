Feature: Login and click dashboard button

  Scenario: Login and click the inline-flex dashboard button
    Given I open the homepage
    When I login with email "admin@account.com" and password "password"
    Then I click the bookings button
