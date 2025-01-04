Feature: Add to favourites

  Scenario: UI/TC01 - Check whether a favourite product is appearing in my favourites
    Given I'm registered
    And I'm logged in
    And I'm in the products page
    When I add a product to my favourites
    Then It should appear in my favourites

  