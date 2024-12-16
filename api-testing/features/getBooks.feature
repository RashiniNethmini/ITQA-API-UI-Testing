Feature: Get all books

  Scenario: Verify the response of the GET /api/books API
    Given I send a GET request to "/api/books"
    Then the response status should be 200
    And the response should contain a list of books
