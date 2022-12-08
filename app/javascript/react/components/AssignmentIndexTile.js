import React from "react"
import { Link } from "react-router-dom"

const AssignmentIndexTile = (props) => {
  let status
  if(props.assignment.open == true){
    status = <p>Status: Open</p>
  } else {
    status = <p>Status: Closed</p>
  }

  let pastDue
  if(props.assignment.past_due == true && props.assignment.open == true){
    pastDue = <h5 className="past-due">PAST DUE</h5>
  }

  let page_count
  if(props.assignment.page_count_req == ""){
    page_count = "N/A"
  } else {
    page_count = props.assignment.page_count_req
  }

  let word_count
  if(props.assignment.word_count_req == ""){
    word_count = "N/A"
  } else {
    word_count = props.assignment.word_count_req
  }
  
  let note
  if(props.assignment.note == ""){
    note = "N/A"
  } else {
    note = props.assignment.note
  }

  let editButton
  if(props.assignment.open == true){
    editButton = <Link to={`/assignments/${props.assignment.id}/edit`}>Edit or Mark as Completed</Link>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(props.assignment.due_date)
  due_date.setMinutes(due_date.getMinutes() + due_date.getTimezoneOffset())
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)


  return(
    <div className="callout left">
      <h4 className="center">{props.assignment.name}</h4>
      {pastDue}
      <p>Due {formattedDueDate}</p>
      {status}
      <p className="no-line-break"> Notes: </p><p>{note}</p>
      <div className="callout container-container">
        <h5 className="center line-break"> Measures For Success</h5>
        <ul className="calendar-ul">
          <li className="line-break"> Page Count: {page_count}</li>
          <li> Word Count: {word_count}</li>
        </ul>
      </div>
      <div className="center">
        {editButton}
      </div>
    </div>
  )
}

export default AssignmentIndexTile