Feature: LinguaLeo home page
  As a user I'd like to visit LinguaLeo home page

  Background: visiting home page
    Given there is a LinguaLeo user Ksenia
    And I am on the LinguaLeo home page

  Scenario: Display registration form
    Then I should see registration form

  Scenario: Display login popup
    And I see login button
    When I press login button
    Then I should see login popup

  Scenario: Logging in
    When I press login button
    And I enter user email and password
    And I press popup login button
    Then I should be on the dashboard page

  Scenario: Incorrect password
    When I press login button
    And I enter user email and incorrect password
    And I press popup login button
    Then I should see error message
