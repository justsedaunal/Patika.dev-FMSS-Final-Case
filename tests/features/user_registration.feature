Feature: User Registration

# Pozitif Senaryo
Scenario: Successful Registration
  Given the user is on the registration page
  When the user enters valid registration details
  And clicks on the "Sign Up" button
  Then the user should be redirected to the homepage
  And the user should receive a confirmation email

# Negatif Senaryo: Email Already Registered
Scenario: Email Already Registered
  Given the user is on the registration page
  When the user enters an email that is already registered
  And clicks on the "Sign Up" button
  Then the system should display an error message "Email is already registered"

# Negatif Senaryo: Verification Code Expired
Scenario: Verification Code Expired
  Given the user has received a verification code
  And the verification code has expired
  When the user attempts to verify the code
  Then the system should display an error message "Verification code expired"

Scenario: Invalid Email Format
  Given the user is on the registration page
  When the user enters an invalid email format
  And clicks on the "Sign Up" button
  Then the system should display an error message "Please enter a valid email address"


Scenario: Empty Fields
  Given the user is on the registration page
  When the user leaves one or more required fields empty
  And clicks on the "Sign Up" button
  Then the system should display an error message "All fields are required"

Scenario: Terms and Conditions Not Accepted
  Given the user is on the registration page
  When the user fills out the form but does not accept the terms and conditions
  And clicks on the "Sign Up" button
  Then the system should display an error message "You must accept the terms and conditions"

Scenario: Verification Code Sent
  Given the user is on the registration page
  When the user enters valid registration details
  And clicks on the "Sign Up" button
  Then the system should send a verification code to the user's email


Scenario: Verification Code Expired
  Given the user has received a verification code
  And the verification code has expired
  When the user attempts to verify the code
  Then the system should display an error message "Verification code expired"

Scenario: Registration and Auto Login
  Given the user is on the registration page
  When the user enters valid registration details
  And clicks on the "Sign Up" button
  Then the user should be automatically logged in
  And redirected to the homepage

Scenario: Weak Password
  Given the user is on the registration page
  When the user enters a weak password
  And clicks on the "Sign Up" button
  Then the system should display an error message "Password is too weak"

