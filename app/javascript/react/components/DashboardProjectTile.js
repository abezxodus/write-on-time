import React from "react"
import DashboardAssignmentTile from "./DashboardAssignmentTile"
import { Link } from "react-router-dom"
import OpenStatus from "./services/OpenStatus"

const DashboardProjectTile = (props) => {
  const mappedAssignments = props.assignments.map((assignment) => {
    if(assignment.open === true) {
      return(
        <DashboardAssignmentTile
        key={assignment.id}
        assignment={assignment}
        />
      )
    }
  })

  let editLink
  if(props){
    let openProjectCheck = new OpenStatus(props.project.open)
    editLink = openProjectCheck.closeable(props.project.closeable, props.project.id)
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
          <form className="center-button line-break" onSubmit={submitHandler}>
            <div className="vertical-center">
              <input className="form-button large-2" type="submit" value="+Assignment"/>
            </div>
          </form>
          {editLink}
        </div>
      </div>
    </div>
  )
}

export default DashboardProjectTile