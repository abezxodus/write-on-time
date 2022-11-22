import React from "react"
import { Link } from "react-router-dom"

const GoogleCalendarSetup = (props) => {
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

          <p>Would you like to add this assignment to your <a href="/redirect">Google calendar</a> or return to your <Link to="/userpage">dashboard page</Link>?</p>
          <p>(This app is in development so Google will require you to allow Write On Time to access your calendar.)</p>
          
        </div>
    </div>
  )
}

export default GoogleCalendarSetup