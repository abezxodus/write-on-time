class ApprovedEmails

  attr_accessor :email_string

  def initialize(email_string)
    @email_string = email_string
  end

  def emailcheck
    valid_emails = ["michaeltrainor.mt@gmail.com", "testingwriteontime@gmail.com", "writeontimereminder@gmail.com"]
    valid_emails.include?(email_string)
  end
end