class ReferralsPage < Page
  # Referrals Page
  button :add_patient_referral, text: 'Add Referral'
  div :patient_referral, ->(name) { body_element.span(text: "#{name}").parent.parent }

  # Add Referrals Page
  input :fullname ,placeholder: 'First Name Last Name'
  input :date_of_birth, name: 'patientValues.dateOfBirth'
  input :contact_number, name: 'patientValues.contact[0].value'
  div :facility, id: 'react-select-4--value'
  div :provider, id: 'react-select-5--value'
  div :referring_provider, id: 'react-select-9--value'
  button :save, text: 'Save'

  def patient_referral_text(name)
    patient_referral_div(name).text
  end

  def fill_patient_referral_form(data)
    add_facility data.delete(:facility)
    add_provider data.delete(:provider)
    add_referring_provider data.delete(:referring_provider)
    data.each{|key, value| self.send "#{key}=", value}
  end

  def add_facility(data)
    facility_div.click
    body_element.div(text: "#{data}").click
  end

  def add_provider(data)
    provider_div.click
    body_element.div(text: "#{data}").click
  end

  def add_referring_provider(data)
    referring_provider_div.click
    body_element.div(text: "#{data}").click
  end

  def submit_patient_referral_form
    save
    wait_for_dom
  end
end
