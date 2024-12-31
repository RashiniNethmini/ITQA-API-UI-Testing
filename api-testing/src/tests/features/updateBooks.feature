Feature: Update a book

  Scenario: Verify the response of the PUT /api/books/{id} API as admin
    
    Given I create a new book entry with a random title
    Given I am an authenticated PUT admin API client
    When I send a PUT request to the endpoint with the new author "John Doe"
    Then the response status of PUT should be 200
    And the response should contain the updated book details with author "John Doe"


  Scenario: Verify the response of the PUT /api/books/{id} API as user
    
    Given I create a new book entry with a random title
    Given I am an authenticated PUT user API client
    When I send a PUT request to the endpoint with the new author "Jane Smith"
    Then the response status of PUT should be 403


    
  Scenario: Update existing book without author (different title) as admin
    Given I create a new book entry with a random title
    And I am an authenticated PUT admin API client
    When I send a PUT request with different title and without author field
    Then the response status of PUT should be 200
    
    
  Scenario: Update existing book without author (different title) as user
    Given I create a new book entry with a random title
    And I am an authenticated PUT user API client
    When I send a PUT request with different title and without author field
    Then the response status of PUT should be 403
    And the response should be "User is not permitted."