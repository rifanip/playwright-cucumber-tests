@checkout
Feature: Checkout Flow

    Background:
        Given user is on the login page
        When user enters username "standard_user" and password "secret_sauce"
        And user adds the first item to the cart
        And user navigates to the cart page
        And user proceeds to checkout

    Scenario: Checkout with missing information
        When user leave the information empty
        Then the error mandatory checking appears

    Scenario: Complete the checkout process successfully
        When user enters checkout information with first name "Rifatul", last name "Hanifah", and zip code "12345"
        And user finishes the checkout process
        Then the checkout should be successful with a confirmation message