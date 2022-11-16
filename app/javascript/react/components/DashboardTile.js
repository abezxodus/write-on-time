import React from "react"

const DashboardTile = (props) => {
  return (
    <div>
      <p>Current Project: {props.project.name}</p>
      <p>Description: {props.project.name}</p>

      <p>Current Assignment: {props.assignment[0].name}</p>
      <p>Notes: {props.assignment[0].note}</p>
      <p>Due Date: {props.assignment[0].due_date}</p>

      <button className="custom-button">Deadline Submission</button>
    </div>
  )
}

export default DashboardTile
