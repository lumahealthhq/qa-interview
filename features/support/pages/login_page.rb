class LoginPage < Page
  button :sign_in, text: 'Sign in'
  input :email, name: 'email'
  input :password, name: 'password'

  def user_login(data)
    data.each{|key, value| self.send "#{key}=", value}
    sign_in
  end
end
