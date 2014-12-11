Feature: I visit the home page

  Background:
    Given I go to the home page

  Scenario: I get to the page
    When I try to start the bomb with the default codes
    Then I should see the bomb is "Activated"