Feature: Send feedback

    As a customer
    I can send my feedback using form

    Scenario: Submit feedback form
      Given I am on the feedback page
      When I fill feedback form
      And I click send button
      Then I see that my feedback is send
