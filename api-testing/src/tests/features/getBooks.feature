Feature: Get books

# Get all books

  Scenario: API/TC06 - Attempt to GET all books as admin
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books


  Scenario: API/TC07 - Attempt to GET all books as user
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books
    
  Scenario: API/TC08 - Attempt to GET all books as an unauthenticated person
    Given there is a book entry in the system
    And I am an unauthenticated person for get books
    When I send a GET request to the "books" endpoint
    Then the response status should be 401

# Get a book with non-existing ID

  Scenario: API/TC09 - Attempt to GET a book with non-existing ID as admin
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404

  Scenario: API/TC10 - Attempt to GET a book with non-existing ID as user
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404


    # Get a book with existing ID

  Scenario: API/TC11 - Attempt to GET a book with existing ID as admin
    Given I create a new book with a random title
    And I am an authenticated admin API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book

  Scenario: API/TC12 - Attempt to GET a book with existing ID as user
    Given I create a new book with a random title
    And I am an authenticated user API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book

  Scenario: API/TC13 - Attempt to GET a book with existing ID as an unauthenticated person
    Given I create a new book with a random title
    And I am an unauthenticated person for get books
    When I send a GET request with an existing book ID
    Then the response status should be 401






