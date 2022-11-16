import React from "react"
import { Link } from "react-router-dom"

const ProjectIndexTile = (props) => {
  return(
    <div>
    <Link to={`/projects/${props.project.id}`}>{props.project.name}</Link>
    </div>
  )
}

export default ProjectIndexTile