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
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)

  return(
    <div className="callout left">
      <h4>Assignment: {props.assignment.name}</h4>
      {pastDue}
      <p>Due Date: {formattedDueDate}</p>
      {status}
      <p> Notes on Assignment: {note}</p>
      <div className="callout container-container">
        <h5 className="center"> Measures For Success</h5>
        <ul>
          <li> Page Count: {page_count}</li>
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