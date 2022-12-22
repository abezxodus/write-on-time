import React from "react"
import { Link } from "react-router-dom"
import FormattedDate from "./services/FormattedDate"
import PastDue from "./services/PastDue"

const DashboardAssignmentTile = (props) => {
  let pastDue
  let formattedDueDate
  
  if(props) {
    pastDue = new PastDue(props.assignment.past_due, true)
    formattedDueDate = new FormattedDate(props.assignment.due_date)
  }
  
  return(
    <div className="callout container-container">
      <p>Current Assignment: <Link to={`/assignments/${props.assignment.id}`}>{props.assignment.name}</Link></p>
      <p>Due Date: {formattedDueDate.dateFormat()}</p>
      {pastDue.pastDueMessage()}
      <Link to={`/assignments/${props.assignment.id}/edit`}>Edit or Mark As Completed</Link>
    </div>
  )
}

export default DashboardAssignmentTile