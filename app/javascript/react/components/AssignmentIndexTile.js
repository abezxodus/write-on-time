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
    pastDue = <h5>PAST DUE</h5>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(props.assignment.due_date)
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)

  return(
    <div className="callout">
      <h4>Assignment: <Link to={`/assignments/${props.assignment.id}`}>{props.assignment.name}</Link></h4>
      {pastDue}
      <p>Due Date: {formattedDueDate}</p>
      {status}
      <p> Notes on Assignment: {props.assignment.note}</p>

      <div>
        <h4> Measures For Success</h4>
        <ul>
          <li> Page Count: {props.assignment.page_count_req}</li>
          <li> Word Count: {props.assignment.word_count_req}</li>
        </ul>
      </div>
    </div>
  )
}

export default AssignmentIndexTile