@login @smoke
Feature: Usario should be able to login

  Scenario: Login as a Usario
    Given the user is on the login page
    When the user enters the usario information
    Then the user should be able to login