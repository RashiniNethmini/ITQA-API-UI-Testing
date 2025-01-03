Feature: Price Sort 

    Scenario: Sorting by Price Low to High
    Given I navigate to Home Page
    When I select "price,asc" from the sort dropdown
    Then the products should be sorted by price in ascending order
   

    Scenario: Sorting by Price High to Low
    Given I navigate to Home Page
    When I select "price,desc" from the sort dropdown
    Then the products should be sorted by price in descending order
    
