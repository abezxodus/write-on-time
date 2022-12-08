module SpecTestHelper   
  def login_admin
    login(:admin)
  end

  def login(user)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = User.where(:login => user.to_s).first if user.is_a?(Symbol)
    sign_in user
  end

  def current_user
    User.find(request.session[:user])
  end
end