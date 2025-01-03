Feature: Delete a book

# Delete a book with an existing ID

  Scenario: Attempt to DELETE a book with an existing ID as admin 
    Given a random book is created
    And I am an authenticated DELETE admin API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 200

  Scenario: Attempt to DELETE a book with an existing ID as user
    Given a random book is created
    And I am an authenticated DELETE user API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 403
    Then the response should contain an error message "User is not permitted."



# Delete a book with a non-existing ID

  Scenario: Attempt to DELETE a book with a non-existing ID as admin 
    Given I am an authenticated DELETE admin API client
    When I send a DELETE request with a non-existing book ID
    Then the response status of DELETE should be 404

  Scenario: Attempt to DELETE a book with a non-existing ID as user
    Given I am an authenticated DELETE user API client
    When I send a DELETE request with a non-existing book ID
    Then the response status of DELETE should be 403
    Then the response should contain an error message "User is not permitted."
