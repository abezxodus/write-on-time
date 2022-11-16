import React from "react"
import AssignmentIndexContainer from "./AssignmentIndexContainer"
import { Link } from "react-router-dom"

const ProjectShowTile = (props) => {

  return (
    <div>
        <h2>Project: {props.projectPackage.name}</h2>
        <p>Description: {props.projectPackage.description}</p>
        <AssignmentIndexContainer
          assignments={props.assignmentPackage}
        />
        <Link to="/projects">Back to Projects</Link>
    </div>
  )
}

export default ProjectShowTile