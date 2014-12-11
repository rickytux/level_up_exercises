Feature: I visit the home page

  Background:
    Given I go to the home page
    Then The bomb is not activated
  # @javascript
  Scenario: I enter correct code for the bomb
    Given I try to start the bomb with the code
    Then It should be activated