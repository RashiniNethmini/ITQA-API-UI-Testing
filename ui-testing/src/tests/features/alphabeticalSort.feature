Feature: Alphabetical Sort 

    Scenario: UI/TC04 - Sorting by Name (A - Z)
    Given I navigate to the Home Page
    When selected "name,asc" from the sort dropdown
    Then the products should be sorted by name in ascending order


    Scenario: UI/TC05 - Sorting by Name (Z - A)
    Given I navigate to the Home Page
    When selected "name,desc" from the sort dropdown
    Then the products should be sorted by name in descending order
