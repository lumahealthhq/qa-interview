#
# This module holds various test data
# to be used in WebDriver tests.
#
module LumaTestData
  class << self
    #
    # Patient Referral data.
    #
    # This method will provide all information needed to create a patient referral
    #
    def default_patient_referral_data
      data = {
        name: 'Marco Andrade',
        date_of_birth: '10/14/1988',
        contact_number: '12345678910',
        facility: '',
        provider: '',
        referring_provider: ''
      }
    end

    def default_login
      data = {
        email: 'marcelo+qainterview@lumahealth.io',
        password: 'Lumaqainterview2020!'
      }
    end
  end
end
