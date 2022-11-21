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
      <h3>Open Project: <Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h3>
      {mappedAssignments}
      <Link to={`/projects/${props.project.id}/edit`}>Exit or Close Project</Link>
      <br></br>
      <Link to={`/new`}>Add Another Assignment</Link>
    </div>
  )
}

export default DashboardProjectTile
