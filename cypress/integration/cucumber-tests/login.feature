Feature: Login to the bank
  Background: 
    Given I am on login page
    When I fill username with "username"

  Scenario: Valid login
    And I fill password with "password"
    When I submit login
    Then I am logged into the bank

  Scenario: Invalid Login
    And I fill password with "passwordaaaaaaa"
    When I submit login
    Then I am on the login page with error message