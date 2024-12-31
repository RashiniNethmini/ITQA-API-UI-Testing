Feature: Delete a book

# Delete a book with non-existing ID

  Scenario: Verify the response of the DELETE API as admin with non-existing ID
    Given a random book is created
    And I am an authenticated DELETE admin API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 200

  Scenario: Verify the response of the DELETE API as user with non-existing ID
    Given a random book is created
    And I am an authenticated DELETE user API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 403
    Then the response should contain an error message "User is not permitted."
