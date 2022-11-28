require 'rubygems'
require 'twilio-ruby'

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = ENV['TWILIO_ACCOUNT_SID']
auth_token = ENV['TWILIO_AUTH_TOKEN']

@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages
  .create(
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: ENV['TWILIO_NUMBER'],
    to: '+99999999999'
  )

puts message.sid