Feature: Login Action


    As a User
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page
    
    Scenario Outline: Try to login with invalid credentials
        Given I visit a login page
        When I fill the login form with "<username>" and "<password>"
        Then I wait for 3 seconds

         Examples:
             | username |  password | 
             |  Fail-01 |  Fail-01  | 
             |  Fail-02 |  Fail-02  | 
             |  Fail-03 |  Fail-03  | 
