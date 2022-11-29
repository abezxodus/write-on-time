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

  let editLink
  if(props.project.closeable){
    editLink = <Link to={`/projects/${props.project.id}/edit`}>Edit or Close Project</Link>
  } else {
    editLink = <Link to={`/projects/${props.project.id}/edit`}>Edit Project</Link>
  }

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
          <form className="center-button" onSubmit={submitHandler}>
            <div className="vertical-center">
              <input className="form-button large-2" type="submit" value="+Assignment"/>
            </div>
          </form>
          <br></br>
          <br></br>
          {editLink}
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default DashboardProjectTile