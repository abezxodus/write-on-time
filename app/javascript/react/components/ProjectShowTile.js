import React from "react"
import AssignmentIndexContainer from "./AssignmentIndexContainer"
import { Link } from "react-router-dom"
import OpenStatus from "./services/OpenStatus"
import NaHandling from "./services/NaHandling"

const ProjectShowTile = (props) => {
  let editDisplay
  let description
  let status

  if(props){    
    description = new NaHandling(props.projectPackage.description).descriptionMessage()
    status = new OpenStatus(props.projectPackage.open)
    editDisplay = status.closeable(props.projectPackage.closeable, props.projectPackage.id)
  }

  return (
    <div className="container">
        <h3>{props.projectPackage.name}</h3>
        {description}
        {status.open()}
        {editDisplay}
        <AssignmentIndexContainer
          assignments={props.assignmentPackage}
        />
        <Link to="/projects">Back to Projects</Link>
    </div>
  )
}

export default ProjectShowTile