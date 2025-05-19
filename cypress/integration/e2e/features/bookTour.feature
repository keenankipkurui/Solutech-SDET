Feature: Tour booking after login

  Scenario: Login and book a tour
    Given I open the homepage
    When I click the Book Tour button
    And I enter a random number in the number input
    And I enter the name "Keenan K."
    And I enter the email "keenan@example.com"
    And I submit the booking form
    Then the booking should be successful
