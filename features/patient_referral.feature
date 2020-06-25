Feature: Patient Referral
  In order to increase our patient number
  As a client
  I should be able to create a patient referral

  Scenario: Create a Patient Referral
    Given I am logged in as hospital user
    When I go to referrals
    And I add a default patient referral
    Then I should see referral saved notification
    And I should patient with data:
      | name          | birth_date       | referrer         |
      | Marco Andrade | October 14, 1988 | Hospital Libanes |
