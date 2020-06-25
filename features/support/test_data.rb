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
        fullname: 'John Smith',
        date_of_birth: '10/14/1988',
        contact_number: '2345678910',
        facility: 'Hospital',
        provider: 'Alba DemoGlover',
        referring_provider: 'Bob Smith'
      }
    end

    #
    # Credentials to login
    #
    def default_login
      data = {
        email: 'marcelo+qainterview@lumahealth.io',
        password: 'Lumaqainterview2020!'
      }
    end
  end
end
