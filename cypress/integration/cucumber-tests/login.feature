Feature: Login to the bank
  As a valid user
  I want to log in into application

  Scenario: Valid login
    Given I am on login page
    When I submit login
    Then I am logged into the bank