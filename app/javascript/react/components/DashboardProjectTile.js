import React from "react"
import DashboardAssignmentTile from "./DashboardAssignmentTile"
import { Link } from "react-router-dom"

const DashboardProjectTile = (props) => {
  const mappedAssignments = props.assignments.map((assignment) => {
    if(assignment.open == true) {
      return(
        <DashboardAssignmentTile
        key={assignment.id}
        assignment={assignment}
        />
      )
    }
  })

  return (
    <div className="callout">
      <h2>Open Project: <Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h2>
      {mappedAssignments}
    </div>
  )
}

export default DashboardProjectTile
