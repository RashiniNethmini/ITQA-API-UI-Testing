Feature: Contact form function

  Scenario: UI/TC07 - Filling contact form with valid details as a non logged user
  
    Given I'm in the contact form page
    When I add all valid details
    And I press submit
    Then the form must be submitted

  Scenario: UI/TC08 - Filling contact form with invalid details as a non logged user
    
    Given I'm in the contact form page
    When I add invalid details
    And I press submit
    Then there has to be error messages

  Scenario: UI/TC09 - Sending message while logged in

    Given Im a registered user
    Given I have logged in to the site
    When I click on the contact button
    And I add required details
    Then the message must be shown in my messages


    

