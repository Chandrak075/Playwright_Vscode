Feature: login test page

    This test case suit will consist of the test cases about login

Scenario: Check the login is properly working or not with valid credentials
Given I am on the login page
When I enter the user name as "" and password as ""
When I click on login button
Then i should be able to see the dashboard page


 