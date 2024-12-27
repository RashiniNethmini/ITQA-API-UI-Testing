Feature: Get all books

  Scenario: Verify the response of the GET /api/books API
    Given I am an authenticated API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books
