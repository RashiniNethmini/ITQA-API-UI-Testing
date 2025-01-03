Feature: Update a user's name

  Scenario: Updating user's profile name
    Given I'm a registered user
    And I have logged in
    And I'm in my profile page
    When I change my name and update profile
    Then It should change immediately

  