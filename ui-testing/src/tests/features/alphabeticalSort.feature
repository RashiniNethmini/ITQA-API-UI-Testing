Feature: Alphabetical Sort 

    Scenario: Sorting by Name (A - Z)
    Given I navigate to the Home Page
    When I select "name,asc" from the sort dropdown
    Then the products should be sorted by name in ascending order


    Scenario: Sorting by Name (Z - A)
    Given I navigate to the Home Page
    When I select "name,desc" from the sort dropdown
    Then the products should be sorted by name in descending order
