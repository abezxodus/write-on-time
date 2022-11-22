import React from "react"
import AssignmentIndexContainer from "./AssignmentIndexContainer"
import { Link } from "react-router-dom"

const ProjectShowTile = (props) => {

  let editDisplay
  if(props.projectPackage){
    if(props.projectPackage.open == true){
      editDisplay = <Link to={`/projects/${props.projectPackage.id}/edit`}>Edit or Close Project</Link>
    } else {
      editDisplay = <Link to={`/projects/${props.projectPackage.id}/edit`}>Edit or Reopen Project</Link>
    }
  }

  let status
  if(props.projectPackage.open === false){
    status = <p>Status: CLOSED</p>
  } else {
    status = <p>Status: OPEN</p>
  }

  return (
    <div className="container-2">
        <h3>{props.projectPackage.name}</h3>
        <p>Description: {props.projectPackage.description}</p>
        {status}
        <AssignmentIndexContainer
          assignments={props.assignmentPackage}
        />
        {editDisplay}
        <br></br>
        <br></br>
        <Link to="/projects">Back to Projects</Link>
    </div>
  )
}

export default ProjectShowTile