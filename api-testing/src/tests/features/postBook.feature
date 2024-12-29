Feature: Create a new book

  Scenario: Verify the response of the POST /api/books API as admin with valid data
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be either 201 or 208
    And the response should contain the created book details

Scenario: Verify the response of the POST /api/books API as user with valid data
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be either 201 or 208
    And the response should contain the created book details


Scenario: Verify the response of the POST /api/books API as admin with empty title and author
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint with empty title and author
  Then the response status of POST should be either 201 or 208
  And the response should contain the created book details with empty title and author

Scenario: Verify the response of the POST /api/books API as user with empty title and author
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint with empty title and author
  Then the response status of POST should be either 201 or 208
  And the response should contain the created book details with empty title and author

 