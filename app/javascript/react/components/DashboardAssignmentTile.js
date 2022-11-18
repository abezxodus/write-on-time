import React from "react"
import { Link } from "react-router-dom"

const DashboardAssignmentTile = (props) => {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(props.assignment.due_date)
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)

  let pastDue
  if(props.assignment.past_due == true){
    pastDue = <p>PAST DUE!</p>
  }

  return(
    <div className="callout">
      <p>Current Assignment: <Link to={`/assignments/${props.assignment.id}`}>{props.assignment.name}</Link></p>
      <p>Due Date: {formattedDueDate}</p>
      {pastDue}
      <button className="custom-button">Deadline Submission</button>
    </div>
  )
}

export default DashboardAssignmentTile