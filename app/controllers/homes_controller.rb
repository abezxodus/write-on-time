class HomesController < ApplicationController
  def index
  end

  def redirect
    client = Signet::OAuth2::Client.new(client_options)
  
    redirect_to client.authorization_uri.to_s
  end
  
  def callback
    client = Signet::OAuth2::Client.new(client_options)
    client.code = params[:code]

    response = client.fetch_access_token!

    session[:authorization] = response

    redirect_to calendars_url
  end

  def calendars
    client = Signet::OAuth2::Client.new(client_options)
    client.update!(session[:authorization])

    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = client

    @calendar_list = service.list_calendar_lists
  end

  def events
    client = Signet::OAuth2::Client.new(client_options)
    client.update!(session[:authorization])

    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = client

    @assignment = Assignment.last
    @project = Assignment.last.project

  end

  def new_event
    assignment = Assignment.last
    due_date = assignment.due_date
    note = assignment.note

    calendar_description = "Current Project: #{assignment.project.name}
    Project Description: #{assignment.project.description}
    
    Current Assignment: #{assignment.name}
    Notes on Assignment: #{ assignment.note}
    
    Measures For Success
    Page Count: #{assignment.page_count_req}
    Word Count: #{assignment.word_count_req}"

    event_name = "#{Assignment.last.project.name}"
    client = Signet::OAuth2::Client.new(client_options)
    client.update!(session[:authorization])

    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = client

    event = Google::Apis::CalendarV3::Event.new({
      start: Google::Apis::CalendarV3::EventDateTime.new(date: due_date),
      end: Google::Apis::CalendarV3::EventDateTime.new(date: due_date + 1),
      summary: "Write On Time Assignment: #{assignment.name}",
      description: "#{calendar_description}"
    })

    service.insert_event(params[:calendar_id], event)

    redirect_to userpage_url
  end

  private
  
  def client_options
    {
      client_id: ENV["GOOGLE_CLIENT_ID"],
      client_secret: ENV["GOOGLE_CLIENT_SECRET"],
      authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
      scope: Google::Apis::CalendarV3::AUTH_CALENDAR,
      redirect_uri: callback_url
    }
  end
end