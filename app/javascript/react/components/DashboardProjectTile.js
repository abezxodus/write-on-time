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

  const submitHandler = async (event) => {
    event.preventDefault()
    props.setSavedProject(props.project)
  }

  return (
    <div>
      <div className="callout left">
        <h4><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h4>
        {mappedAssignments}
        <div className="center">
          <br></br>
          <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
            <div className="cell">
              <input className="form-button large-2" type="submit" value="Add New Assignment"/>
            </div>
          </form>
          <br></br>
          <br></br>
          <Link to={`/projects/${props.project.id}/edit`}>Edit or Close Project</Link>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default DashboardProjectTile