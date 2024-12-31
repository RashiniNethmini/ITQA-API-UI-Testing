Feature: Get books

# Get all books

  Scenario: Verify the response of the GET /api/books API as admin
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books


  Scenario: Verify the response of the GET /api/books API as user
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books" endpoint
    Then the response status should be 200
    And the response should contain a list of books

# Get books with non-existing ID

  Scenario: Verify the response of the Get /api/books/{bookId} API as admin with non-existing ID
    Given there is a book entry in the system
    And I am an authenticated admin API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404

  Scenario: Verify the response of the Get /api/books/{bookId} API as user with non-existing ID
    Given there is a book entry in the system
    And I am an authenticated user API client
    When I send a GET request to the "books/100000" endpoint with a non-existing ID
    Then the response status should be 404


    # Get books with existing ID

  Scenario: Verify the response of the GET /api/books/{bookId} API as admin with existing ID
    Given I create a new book with a random title
    And I am an authenticated admin API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book

  Scenario: Verify the response of the GET /api/books/{bookId} API as user with existing ID
    Given I create a new book with a random title
    And I am an authenticated user API client
    When I send a GET request with an existing book ID
    Then the response status should be 200
    And the response should contain the details of the book






