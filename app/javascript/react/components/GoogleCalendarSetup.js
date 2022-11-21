import React from "react"
import { Link } from "react-router-dom"

const GoogleCalendarSetup = (props) => {
  return(
  <div className="container-2">
      <h1>Assignment Deadline Submitted!</h1>

      <div>
        <h2>Current Project: {props.savedProject.name}</h2>
        <p>Project Description: {props.savedProject.description}</p>
      </div>

      <div>
        <h3>Current Assignment: {props.savedAssignment.name}</h3>
        <p> Notes on Assignment: {props.savedAssignment.note}</p>
      </div>

      <div>
        <h4> Measures For Success</h4>
        <ul>
          <li> Page Count: {props.savedAssignment.page_count_req}</li>
          <li> Word Count: {props.savedAssignment.word_count_req}</li>
        </ul>
      </div>

      <p>Would you like to add this assignment to your <a href="/redirect">google calendar</a> or return to your <Link to="/userpage">dashboard page</Link>?</p>
      <p>(Please note this app is in development so Google will require you to allow Write On Time to access your calendar.)</p>
      
    </div>
  )
}

export default GoogleCalendarSetup