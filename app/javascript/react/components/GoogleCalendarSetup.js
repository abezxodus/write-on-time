import React from "react"
import GoogleCalendarMessage from "./services/GoogleCalendarMessage"

const GoogleCalendarSetup = (props) => {
  let googleMessage
  if(props){
    googleMessage = new GoogleCalendarMessage(props.savedAssignment.google_calendar).displayMessage()
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