Feature: Update a book

#Update an exisiting book with different author

  Scenario: API/TC29 - Attempt to UPDATE an exisiting book with different author as admin
    Given I create a new book entry with a random title
    And I am an authenticated PUT admin API client
    When I send a PUT request to the endpoint with the new author "John Doe"
    Then the response status of PUT should be 200
    And the response should contain the updated book details with author "John Doe"

  Scenario: API/TC30 - Attempt to UPDATE an exisiting book with different author as user
    Given I create a new book entry with a random title
    And I am an authenticated PUT user API client
    When I send a PUT request to the endpoint with the new author "Jane Smith"
    Then the response status of PUT should be 403


#Update an exisiting book with different titles but without author

  Scenario: API/TC31 - Attempt to UPDATE an exisiting book with different titles but without author as admin
    Given I create a new book entry with a random title
    And I am an authenticated PUT admin API client
    When I send a PUT request with different title and without author field
    Then the response status of PUT should be 200
    
    
  Scenario: API/TC32 - Attempt to UPDATE an exisiting book with different titles but without author as user
    Given I create a new book entry with a random title
    And I am an authenticated PUT user API client
    When I send a PUT request with different title and without author field
    Then the response status of PUT should be 403
    And the response should be "User is not permitted."


#Update a non-exisiting book

  Scenario: API/TC33 - Attempt to UPDATE a non-exisiting book as admin
    Given I am an authenticated PUT admin API client
    When I send a PUT request to the endpoint with the non-existing book id
    Then the response status of PUT should be 404
    And the response should display an error message "Book not found"

  Scenario: API/TC34 - Attempt to UPDATE a non-exisiting book as user
    Given I am an authenticated PUT user API client
    When I send a PUT request to the endpoint with the non-existing book id
    Then the response status of PUT should be 403
    And the response should display an error message "User is not permitted."


#Update an exisiting book with a new title

Scenario: API/TC35 - Attempt to UPDATE an exisiting book with a new title as admin
    Given I create a new book entry with a random title
    And I am an authenticated PUT admin API client
    When I send a PUT request to the endpoint with a new title 
    Then the response status of PUT should be 200
    And the response should contain the updated book details with a new title and the same author

Scenario: API/TC36 - Attempt to UPDATE an exisiting book with a new title as user
    Given I create a new book entry with a random title
    And I am an authenticated PUT user API client
    When I send a PUT request to the endpoint with a new title
    Then the response status of PUT should be 403
    And the response should display an error message "User is not permitted."


#Update an exisiting book without both title and author

Scenario: API/TC37 - Attempt to UPDATE existing book without both title and author as admin
	Given I create a new book entry with a random title
	And I am an authenticated PUT admin API client
	When I send a PUT request to the endpoint without title and author
	Then the response status of PUT should be 400
	And the response should display an error message "Mandatory parameters should not be null"

  Scenario: API/TC38 - Attempt to UPDATE existing book without both title and author as user
	Given I create a new book entry with a random title
	And I am an authenticated PUT user API client
	When I send a PUT request to the endpoint without title and author
	Then the response status of PUT should be 403
	And the response should display an error message "User is not permitted."


 #Update an exisiting book without title

  Scenario: API/TC39 - Attempt to UPDATE an existing book without title as admin
    Given I create a new book entry with a random title
    And I am an authenticated PUT admin API client
    When I send a PUT request to the "books" endpoint to update an existing book without a title
    Then the response status of PUT should be 400

  Scenario: API/TC40 - Attempt to UPDATE an existing book without title as user
    Given I create a new book entry with a random title
    And I am an authenticated PUT user API client
    When I send a PUT request to the "books" endpoint to update an existing book without a title
    Then the response status of PUT should be 403

#Update an exisiting book as an unauthenticated person

  Scenario: API/TC41 - Attempt to UPDATE an exisiting book with both different title and author as an unauthenticated person
    Given I create a new book entry with a random title
    And I am an unauthenticated person to update a book
    When I send a PUT request to the endpoint with the new title and author
    Then the response status of PUT should be 401   
