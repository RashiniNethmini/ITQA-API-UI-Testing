Feature: Create a new book

  Scenario: Verify that a new book can be created successfully
    Given I send a POST request to "/api/books" with the following details:
      | id    | title            | author         |
      | 2   | Test Book 2  | Kent Beck      |
    Then the POST response status should be 201
    And the response should contain the created book details:
      | id    | title            | author         |
      | 2   | Test Book 2  | Kent Beck      |