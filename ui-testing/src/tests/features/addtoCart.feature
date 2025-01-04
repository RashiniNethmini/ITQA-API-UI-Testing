Feature: Add to cart

  Scenario: UI/TC02 - Add product to cart
    Given I navigate to the Combination Plier product page
    When I click on the Add to Cart Button
    When I go to my Cart by pressing on cart button
    Then the item must appear in the cart

  Scenario: UI/TC03 - Check whether the price is updating when I change the Quantity of Product in the cart
    Given I navigate to the Combination Plier product page
    Given I add a item to the cart
    When I go to my Cart by pressing on cart button
    And I change the quantity of the product in the cart
    Then the price should change accordingly