Feature: User Login

Scenario: Successful Login
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks on the "Login" button
    Then the user should be redirected to the dashboard

Scenario: Incorrect Password
    Given the user is on the login page
    When the user enters a valid email but an incorrect password
    And clicks on the "Login" button
    Then the system should display an error message "Incorrect password"
    And the user should remain on the login page

Scenario: Unregistered Email
    Given the user is on the login page
    When the user enters an unregistered email and any password
    And clicks on the "Login" button
    Then the system should display an error message "Email not found"
    And the user should remain on the login page

Scenario: Empty Fields
    Given the user is on the login page
    When the user leaves the email or password field empty
    And clicks on the "Login" button
    Then the system should display an error message "Email and password cannot be empty"

Scenario: Login with "Remember Me" Option
    Given the user is on the login page
    When the user enters valid email and password
    And selects the "Remember Me" checkbox
    And clicks on the "Login" button
    Then the user should be redirected to the dashboard
    And the user's login session should be remembered for future visits

Scenario: Login Attempt with Deleted Account
  Given the user is on the login page
  When the user enters a valid email and password for a deleted account
  And clicks on the "Login" button
  Then the system should display an error message "This account no longer exists"


Scenario: Login Attempt with Unverified Account
  Given the user is on the login page
  When the user enters a valid email and password for an unverified account
  And clicks on the "Login" button
  Then the system should display an error message "Please verify your email before logging in"

Scenario: Login Attempt with Blocked Account
  Given the user is on the login page
  When the user enters a valid email and password for a blocked account
  And clicks on the "Login" button
  Then the system should display an error message "Your account has been blocked"



Scenario: Expired 2FA Code
  Given the user has received a 2FA code
  And the code has expired
  When the user attempts to enter the 2FA code
  Then the system should display an error message "2FA code expired"

Scenario: Incorrect 2FA Code
  Given the user has received a 2FA code
  When the user enters an incorrect 2FA code
  Then the system should display an error message "Invalid 2FA code"
