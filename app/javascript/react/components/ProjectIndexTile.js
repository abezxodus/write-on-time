import React from "react"
import { Link } from "react-router-dom"
import NaHandling from "./services/NaHandling"
import OpenStatus from "./services/OpenStatus"

const ProjectIndexTile = (props) => {
  let status
  let editDisplay
  let description

  if(props){
    description = new NaHandling(props.project.description).descriptionMessage()
    status = new OpenStatus(props.project.open)
    editDisplay = status.closeable(props.project.closeable, props.project.id)
  }
  return(
    <div className="callout tile-box">
      <h3 className="center"><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></h3>
      {description}
      {status.open()}
      <div className="center">
        {editDisplay} 
      </div>
    </div>
  )
}

export default ProjectIndexTile