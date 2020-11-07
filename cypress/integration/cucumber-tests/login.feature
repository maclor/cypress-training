Feature: Login to the bank
  Background: 
    Given I am on login page
    Then I see "Zero - Log in" in the title
    When I fill username with "username"

  Scenario: Valid login
    And I fill password with "password"
    When I submit login
    Then I am logged into the bank

  @focus
  Scenario: Invalid Login
    And I fill password with "passwordaaaaaaa"
    When I submit login
    And I want to wait 5000 miliseconds
    Then I am on the login page with error message