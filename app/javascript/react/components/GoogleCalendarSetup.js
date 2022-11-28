import React from "react"

const GoogleCalendarSetup = (props) => {
  let googleMessage
  if(props.savedAssignment.google_calendar == true){
    googleMessage = <div>
                      <p>Would you like to add this assignment to your <a href="/redirect">Google calendar</a> or return to your <a href="/userpage">dashboard page</a>?</p>
                      <p>(This app is in development so Google will require you to allow Write On Time to access your calendar.)</p>
                    </div>
  } else {
    googleMessage = <div><a href="/userpage">Return to Dashboard</a>
                        <p>(If you would like to be able to add this event to your Google calendar, email michaeltrainor.mt@gmail.com to request authorization.)</p>
                    </div>
  }

  return(
    <div>
      <h2 className="blur-header">Assignment Deadline Submitted!</h2>
      <div className="container">
          <div>
            <h2>{props.savedProject.name}</h2>
            <p>{props.savedProject.description}</p>
          </div>
          <div className="callout left">
            <h3>Current Assignment: {props.savedAssignment.name}</h3>
            <p> Notes on Assignment: {props.savedAssignment.note}</p>
            <div className="callout container-container center">
              <h4> Measures For Success</h4>
              <ul className="calendar-ul">
                <li> Page Count: {props.savedAssignment.page_count_req}</li>
                <li> Word Count: {props.savedAssignment.word_count_req}</li>
              </ul>
            </div>
          </div>
          {googleMessage}
        </div>
    </div>
  )
}

export default GoogleCalendarSetup