Given('I am logged in as hospital user') do
  self.page = LoginPage.new
  page.open_url "https://next.lumahealth.io/login"
  page.user_login LumaTestData.default_login
  self.page = Homepage.new
end
