Feature: Pagination

  Scenario: UI/TC10 - Navigate to the second page and display corresponding products
    Given I am on the home page now
    When I click on "2" in the pagination
    Then I should be navigated to the second page
    And the products displayed should be updated for the second page
