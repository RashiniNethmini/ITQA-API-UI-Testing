Feature: Change Language

  Scenario: Change Language to Dutch
    Given I am on the home page
    When I click on the language button
    And I click on the Dutch option
    Then the option must turn to Dutch
    And the language must turn to Dutch
 