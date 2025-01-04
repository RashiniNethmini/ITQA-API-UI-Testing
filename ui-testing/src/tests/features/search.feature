Feature: Search Functionality

  Scenario: UI/TC13 - Search a product by name
  
    Given I am in the Home Page
    When I search for a specific tool
    And I click on the search button
    Then I should see the product I searched
