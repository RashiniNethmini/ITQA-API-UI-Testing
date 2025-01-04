Feature: Create a book

#Create a book with valid data

Scenario: API/TC14 - Attempt to CREATE a book with valid data as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be 201
    And the response should contain the created book details

Scenario: API/TC15 - Attempt to CREATE a book with valid data as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be 201
    And the response should contain the created book details

  Scenario: API/TC16 - Attempt to CREATE a book with valid data as an unauthenticated person
    Given I am an unauthenticated person for create a book
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be 401

# Create a book without both title and author

Scenario: API/TC17 - Attempt to CREATE a book without both title and author as admin
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"

Scenario: API/TC18 - Attempt to CREATE a book without both title and author as user
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"


# Create two different books with same author but different titles

Scenario: API/TC19 - Attempt to CREATE two different books with same author but different titles as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be 201
    And the response should contain the details of both books

Scenario: API/TC20 - Attempt to CREATE two different books with same author but different titles as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be 201
    And the response should contain the details of both books


#Create a book with empty title

Scenario: API/TC21 - Attempt to CREATE a book with empty title as admin 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400

Scenario: API/TC22 - Attempt to CREATE a book with empty title as user 
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400


#Create two different books with same title but different authors

  Scenario: API/TC23 - Attempt to CREATE two different books with same title but different authors as admin
    Given I am an authenticated POST admin API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors

  Scenario: API/TC24 - Attempt to CREATE two different books with same title but different authors as user
    Given I am an authenticated POST user API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors


#Create a book without title

Scenario: API/TC25 - Attempt to CREATE a book without title as admin 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400

Scenario: API/TC26 - Attempt to CREATE a book without title as user
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400
  

# Create a book without author

  Scenario:API/TC27 - Attempt to CREATE a book without author as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author

  Scenario: API/TC28 - Attempt to CREATE a book without author as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author