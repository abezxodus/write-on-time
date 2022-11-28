# README

--WRITE ON TIME--

This web app allows users to schedule writing deadlines for their freelance/solo projects.


-Set Up-

This app was created using the following:
  Rails version             5.2.8.1
  Ruby version              2.7.3-p183 (arm64-darwin21)
  RubyGems version          3.1.6
  Rack version              2.2.4
  JavaScript Runtime        Node.js (V8)
  PostgreSQL                14

Bundle install and yarn install will be necessary in order to set up on a new terminal.

The necessary Google API keys and credentials should be stored in a .env file on the main directory of the folder in the following format
  GOOGLE_CLIENT_ID=[your id here]
  GOOGLE_CLIENT_SECRET=[your secret here]
  SECRET_KEY_BASE=[your key base here]

For future features Twilio, SendGrid, AWS, and API Ninja keys will be needed as well in the .env file.
  TWILIO_ACCOUNT_SID=[your SID here]
  TWILIO_AUTH_TOKEN=[your token here]
  TWILIO_NUMBER=[your Twilio number here]

  SENDGRID_API_KEY=[your API key here]

  AWS_ACCESS_KEY_ID=[your key id here]
  AWS_SECRET_ACCESS_KEY=[your access key here]
  S3_DEVELOPMENT_BUCKET=[your development bucket here]

  API_NINJA_API_KEY=[your API key here]

Since this is in development, only 100 google accounts can have access using the Google Calendar API.  As of the point of writing this ReadMe, only a couple of accounts have been set up by the developer, Michael Trainor.  For any other users needing access you will need to contact Michael at michaeltrainor.mt[at]gmail.com to request being added to the authorized users list.

-To Do-

Future tasks include:
  *Google data visualization (currently issue with node_module preventing implementation)
  *Twilio and SendGrid API for text/email reminders
  *Art piece /factoid /philosophy quote tiles for abstract writing inspiration
  *Creating community to allow others to review posted works and provide feedback
  *Displaying writing streak and earning "deadline extensions" to maintain stats