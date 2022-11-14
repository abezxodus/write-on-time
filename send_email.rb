require 'sendgrid-ruby'
include SendGrid

from = Email.new(email: 'writeontimereminder@gmail.com')
to = Email.new(email: 'michaeltrainor.mt@gmail.com')
subject = 'Sending with SendGrid is Fun'
testcontent = "This also works"
content = Content.new(type: 'text/plain', value: testcontent)
# content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
mail = Mail.new(from, subject, to, content)

# sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers