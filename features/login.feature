Feature: Login & Logout

  @login
  Scenario Outline: user tries to login with various credentials
    Given user is on the login page
    When user enters username "<username>" and password "<password>"
    Then the system should "<result>" the login attempt
    When user is in the home page if login succeed
    And user clicks the menu bar if login succeed
    Then user logs out if login succeed

    Examples:
      | username                      | password       | result     |
      | standard_user                 | secret_sauce   | succeed    |
      | locked_out_user               | wrong_password | fail       |
      | invalid_user                  | secret_sauce   | fail       |
      | problem_user                  | secret_sauce   | succeed    |
