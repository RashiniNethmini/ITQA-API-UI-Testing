Feature: Contact form function

  Scenario: Filling contact form with valid details as a non logged user
  
    Given I'm in the contact form page
    When I add all valid details
    And I press submit
    Then the form must be submitted

  Scenario: Filling contact form with invalid details as a non logged user
    
    Given I'm in the contact form page
    When I add invalid details
    And I press submit
    Then there has to be error messages

    

