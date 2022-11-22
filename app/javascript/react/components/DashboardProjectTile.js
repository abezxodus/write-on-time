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
      <h4><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h4>
      {mappedAssignments}
      <Link to={`/new`}>Add Another Assignment</Link>
      <br></br>
      <br></br>
      <Link to={`/projects/${props.project.id}/edit`}>Edit or Close Project</Link>
    </div>
  )
}

export default DashboardProjectTile
