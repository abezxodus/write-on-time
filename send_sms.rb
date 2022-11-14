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
    from: '+14793913360',
    to: '+17813084346'
  )

puts message.sid


# Appointment Model
# class Appointment < ActiveRecord::Base
#   validates :name, presence: true
#   validates :phone_number, presence: true
#   validates :time, presence: true

#   after_create :reminder

#   # Notify our appointment attendee X minutes before the appointment time
#   def reminder
#     @twilio_number = ENV['TWILIO_NUMBER']
#     account_sid = ENV['TWILIO_ACCOUNT_SID']
#     @client = Twilio::REST::Client.new account_sid, ENV['TWILIO_AUTH_TOKEN']
#     time_str = ((self.time).localtime).strftime("%I:%M%p on %b. %d, %Y")
#     body = "Hi #{self.name}. Just a reminder that you have an appointment coming up at #{time_str}."
#     message = @client.messages.create(
#       :from => @twilio_number,
#       :to => self.phone_number,
#       :body => body,
#     )
#   end

#   def when_to_run
#     minutes_before_appointment = 30.minutes
#     time - minutes_before_appointment
#   end

#   handle_asynchronously :reminder, :run_at => Proc.new { |i| i.when_to_run }
# end

# routes/rb
# Rails.application.routes.draw do
#   resources :appointments
  
#   # You can have the root of your site routed with "root"
#   root 'appointments#welcome'
# end


# AppointmentsController

# def create
#   Time.zone = appointment_params[:time_zone]
#   @appointment = Appointment.new(appointment_params)

#   respond_to do |format|
#     if @appointment.save
#       format.html { redirect_to @appointment, notice: 'Appointment was successfully created.' }
#       format.json { render :show, status: :created, location: @appointment }
#     else
#       format.html { render :new }
#       format.json { render json: @appointment.errors, status: :unprocessable_entity }
#     end
#   end
# end