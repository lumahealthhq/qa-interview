When('I go to referrals') do
  page.goto_referrals
  self.page = ReferralsPage.new
end

When('I add a default patient referral') do
  page.add_patient_referral
  page.fill_patient_referral_form LumaTestData.default_patient_referral_data
  page.submit_patient_referral_form
end

Then('I should see patient with data:') do |table|
  data = table.hashes.first.values
  patient_div_text = page.patient_referral_text(data.first)
  data.each do |text|
    expect(patient_div_text).to include(text)
  end
end
