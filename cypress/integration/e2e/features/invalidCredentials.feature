Feature: Login functionality

  Scenario: Login with invalid credentials
    Given I open the homepage
    And I click the login link
    And I click the login form
    When I enter invalid email "wronguser@example.com"
    And I enter invalid password "wrongpassword"
    And I submit the login form
    Then I should see an error message containing "match our records"
