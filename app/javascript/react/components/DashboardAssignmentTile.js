import React from "react"
import { Link } from "react-router-dom"

const DashboardAssignmentTile = (props) => {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(`${props.assignment.due_date} EST`)
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)

  let pastDue
  if(props.assignment.past_due == true){
    pastDue = <p className="past-due">PAST DUE!</p>
  }
  
  return(
    <div className="callout container-container">
      <p>Current Assignment: <Link to={`/assignments/${props.assignment.id}`}>{props.assignment.name}</Link></p>
      <p>Due Date: {formattedDueDate}</p>
      {pastDue}
      <Link to={`/assignments/${props.assignment.id}/edit`}>Edit or Mark As Completed</Link>
    </div>
  )
}

export default DashboardAssignmentTile