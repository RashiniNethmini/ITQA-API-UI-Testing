Feature: Delete a book

# Delete a book with an existing ID

  Scenario: API/TC01 - Attempt to DELETE a book with an existing ID as admin 
    Given a random book is created
    And I am an authenticated DELETE admin API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 200

  Scenario: API/TC02 - Attempt to DELETE a book with an existing ID as user
    Given a random book is created
    And I am an authenticated DELETE user API client
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 403
    And the response should contain an error message "User is not permitted."

  Scenario: API/TC03 - Attempt to DELETE a book with an existing ID as an unauthenticated person
    Given a random book is created
    And I am an unauthenticated person for deletion
    When I send a DELETE request with an existing book ID
    Then the response status of DELETE should be 401



# Delete a book with a non-existing ID

  Scenario: API/TC04 - Attempt to DELETE a book with a non-existing ID as admin 
    Given I am an authenticated DELETE admin API client
    When I send a DELETE request with a non-existing book ID
    Then the response status of DELETE should be 404

  Scenario: API/TC05 - Attempt to DELETE a book with a non-existing ID as user
    Given I am an authenticated DELETE user API client
    When I send a DELETE request with a non-existing book ID
    Then the response status of DELETE should be 403
    And the response should contain an error message "User is not permitted."
