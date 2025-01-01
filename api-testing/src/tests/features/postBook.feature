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

# Create book without both title and author

Scenario: Verify the response of the POST /api/books API as admin without both title and author
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"

Scenario: Verify the response of the POST /api/books API as user without both title and author
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"


# Create 2 different books with same with author but different titles

Scenario: Attempt to create two different books with the same author but different titles as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be either 201 or 208
    And the response should contain the details of both books

Scenario: Attempt to create two different books with the same author but different titles as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be either 201 or 208
    And the response should contain the details of both books

#Create book with empty title

Scenario: Verify the response of the POST /api/books API as admin with empty title 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400

Scenario: Verify the response of the POST /api/books API as user with empty title 
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400

#Add a new book with an already existing title but different author

  Scenario: Verify the response of the POST /api/books API as admin with an existing title but a different author
    Given I am an authenticated POST admin API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors

  Scenario: Verify the response of the POST /api/books API as user with an existing title but a different author
    Given I am an authenticated POST user API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors

#Create book without title (null)

Scenario: Verify the response of the POST /api/books API as admin without title 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400

Scenario: Verify the response of the POST /api/books API as user without title 
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400

# Create book with title and without author

  Scenario: Verify the response of the POST /api/books API as admin with title and without author
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author

  Scenario: Verify the response of the POST /api/books API as user with title and without author
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author