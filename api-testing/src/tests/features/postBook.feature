Feature: Create a book

#Create a book with valid data

Scenario: Attempt to CREATE a book with valid data as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be either 201 or 208
    And the response should contain the created book details

Scenario: Attempt to CREATE a book with valid data as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with valid book details
    Then the response status of POST should be either 201 or 208
    And the response should contain the created book details

# Create a book without both title and author

Scenario: Attempt to CREATE a book without both title and author as admin
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"

Scenario: Attempt to CREATE a book without both title and author as user
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without both title and author
  Then the response status of POST should be 400
  And the response should display the message "Mandatory parameters should not be null"


# Create two different books with same author but different titles

Scenario: Attempt to CREATE two different books with same author but different titles as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be either 201 or 208
    And the response should contain the details of both books

Scenario: Attempt to CREATE two different books with same author but different titles as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with two different titles and the same author
    Then the response status of POST should be either 201 or 208
    And the response should contain the details of both books


#Create a book with empty title

Scenario: Attempt to CREATE a book with empty title as admin 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400

Scenario: Attempt to CREATE a book with empty title as user 
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint with empty title
  Then the response status of POST should be 400


#Create two different books with same title but different authors

  Scenario: Attempt to CREATE two different books with same title but different authors as admin
    Given I am an authenticated POST admin API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors

  Scenario: Attempt to CREATE two different books with same title but different authors as user
    Given I am an authenticated POST user API client
    When I send 2 POST requests to the "books" endpoint with the same title but different authors
    Then the response status of POST should be 201
    And the response should contain the details of both books with the same title but different authors


#Create a book without title

Scenario: Attempt to CREATE a book without title as admin 
  Given I am an authenticated POST admin API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400

Scenario: Attempt to CREATE a book without title as user
  Given I am an authenticated POST user API client
  When I send a POST request to the "books" endpoint without title
  Then the response status of POST should be 400
  

# Create a book without author

  Scenario:Attempt to CREATE a book without author as admin
    Given I am an authenticated POST admin API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author

  Scenario: Attempt to CREATE a book without author as user
    Given I am an authenticated POST user API client
    When I send a POST request to the "books" endpoint with title and without author
    Then the response status of POST should be 201
    And the response should contain the created book details with title and null author