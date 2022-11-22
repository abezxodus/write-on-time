import React from "react"
import { Link } from "react-router-dom"

const ProjectIndexTile = (props) => {
  let status
  let editDisplay
  if(props.project.open == true){
    status = "Open"
    editDisplay = <Link to={`/projects/${props.project.id}/edit`}>Edit or Close Project</Link>
  } else {
    status = "Closed"
    editDisplay = <Link to={`/projects/${props.project.id}/edit`}>Edit or Reopen Project</Link>
  }

  return(
    <div className="callout left">
      <h3><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h3>
      <p>Description: {props.project.description}</p>
      <p>Status: {status}</p>
      <div className="center">
        {editDisplay} 
      </div>
    </div>
  )
}

export default ProjectIndexTile