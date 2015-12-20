Feature: Dashboard page
  As a LinguaLeo user I'd like to have a dashboard with greeting

  Scenario: Leo greeting
    Given I'm logged in LinguaLeo
    And I'm on the dashboard page
    Then I should see Leo greeting "Привет, я Лео!"