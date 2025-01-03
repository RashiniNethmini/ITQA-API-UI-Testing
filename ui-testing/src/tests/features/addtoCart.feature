Feature: Adding a product to the cart

  Scenario: Add product to cart
    Given I navigate to the Combination Plier product page
    When I click on the Add to Cart Button
    When I go to my Cart by pressing on cart button
    Then the item must appear in the cart