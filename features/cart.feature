@addtocart
Feature: Add and Remove Items from Cart

  Background:
    Given user is on the login page
    When user enters username "standard_user" and password "secret_sauce"

  Scenario: Add items to the cart and verify the cart badge
    When user adds the first item to the cart
    Then the cart badge should display "1"
    When user add more item to the cart
    Then the cart badge should display "2"

  Scenario: Remove item from the cart
    When user adds the first item to the cart
    Then the cart badge should display "1"
    When user removes the item from the cart
    Then the cart badge should display "0"
