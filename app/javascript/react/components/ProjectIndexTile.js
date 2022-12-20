import React from "react"
import { Link } from "react-router-dom"

const ProjectIndexTile = (props) => {
  let status
  let editDisplay
  if(props.project.open == true){
    if(props.project.closeable == true){
      status = "Open"
      editDisplay = <Link to={`/projects/${props.project.id}/edit`}>Edit or Close</Link>
    } else {
      status = "Open"
      editDisplay = <Link to={`/projects/${props.project.id}/edit`}>Edit</Link>
    }
  } else {
    status = "Closed"
    editDisplay = <Link to={`/projects/${props.project.id}/edit`}>Edit or Reopen</Link>
  }
  let description
  if(props.project.description !== ""){
    description = <p>"{props.project.description}"</p>
  }

  return(
    <div className="callout tile-box">
      <h3 className="center"><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h3>
      {description}
      <p>Status: {status}</p>
      <div className="center">
        {editDisplay} 
      </div>
    </div>
  )
}

export default ProjectIndexTile