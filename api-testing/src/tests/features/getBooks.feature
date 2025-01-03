Feature: Get books

# Get all books

  Scenario: Attempt to GET all books as admin
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books


  Scenario: Attempt to GET all books as user
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books

# Get a book with non-existing ID

  Scenario: Attempt to GET a book with non-existing ID as admin
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404

  Scenario: Attempt to GET a book with non-existing ID as user
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404


    # Get a book with existing ID

  Scenario: Attempt to GET a book with existing ID as admin
    Given I create a new book with a random title
    And I am an authenticated admin API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book

  Scenario: Attempt to GET a book with existing ID as user
    Given I create a new book with a random title
    And I am an authenticated user API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book






