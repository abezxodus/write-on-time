import React from "react"
import AssignmentIndexContainer from "./AssignmentIndexContainer"
import { Link } from "react-router-dom"

const ProjectShowTile = (props) => {

  let editDisplay
  if(props.projectPackage){
    if(props.projectPackage.open == true){
      if(props.projectPackage.closeable ==true){
        editDisplay = <Link to={`/projects/${props.projectPackage.id}/edit`} className="line-break">Edit or Close Project</Link>
      } else {
        editDisplay = <Link to={`/projects/${props.projectPackage.id}/edit`} className="line-break">Edit Project</Link>
      }

    } else {
      editDisplay = <Link to={`/projects/${props.projectPackage.id}/edit`} className="line-break">Edit or Reopen Project</Link>
    }
  }

  let status
  if(props.projectPackage.open === false){
    status = <p>Status: CLOSED</p>
  } else {
    status = <p>Status: OPEN</p>
  }

  let description
  if(props.projectPackage.description !== ""){
    description = <p>"{props.projectPackage.description}"</p>
  }

  return (
    <div className="container">
        <h3>{props.projectPackage.name}</h3>
        {description}
        {status}
        {editDisplay}
        <AssignmentIndexContainer
          assignments={props.assignmentPackage}
        />
        <Link to="/projects">Back to Projects</Link>
    </div>
  )
}

export default ProjectShowTile