Feature: Login and book a tour

  Scenario: Login and complete the tour booking form
    Given I open the homepage
    When I login with email "admin@account.com" and password "password"
    And I open the tour booking form
    And I fill the tour details with:
      | name        | Cypress Test Tour           |
      | description | This is a test tour description |
      | destination | first                       |
      | price       | 5000                        |
      | slots       | 20                          |
    Then I submit the tour booking form
