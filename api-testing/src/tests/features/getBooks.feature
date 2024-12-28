Feature: Get all books

  Scenario: Verify the response of the GET /api/books API as admin
    
    Given there is a book entry in the system
    Given I am an authenticated admin API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books


  Scenario: Verify the response of the GET /api/books API as user
    
    Given there is a book entry in the system
    Given I am an authenticated user API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books
