import React from "react"
import { Link } from "react-router-dom"

const GoogleCalendarSetup = (props) => {
  let page_count
  if(props.savedAssignment.page_count_req < 1){
    page_count = props.savedAssignment.page_count_req
  } else {
    page_count = "N/A"
  }

  let word_count
  if(props.savedAssignment.word_count_req < 1){
    word_count = props.savedAssignment.word_count_req
  } else {
    word_count = "N/A"
  }

  return(
    <div>
      <h1>Assignment Deadline Submitted!</h1>

      <div>
        <h2>Current Project: #{props.savedProject.name}</h2>
        <p>Project Description: #{props.savedProject.description}</p>
      </div>

      <div>
        <h3>Current Assignment: #{props.savedAssignment.name}</h3>
        <p> Notes on Assignment: #{ props.savedAssignment.note}</p>
      </div>

      <div>
        <h4> Measures For Success</h4>
        <ul>
          <li> Page Count: #{page_count}</li>
          <li> Word Count: #{word_count}</li>
        </ul>
      </div>

      <p>Would you like to add this assignment to your google calendar or return to your dashboard page?</p>


      <a href="/redirect">Set Up Google Calendar</a>
      <Link to="/userpage">Back to Dashboard</Link>

      <p>Please note this app is in development so Google will require you to allow Write On Time to access your calendar.</p>

    </div>
  )
}

export default GoogleCalendarSetup