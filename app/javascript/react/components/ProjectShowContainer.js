import React, { useState, useEffect } from "react"
import ProjectShowTile from "./ProjectShowTile"
import NewProjectFormContainer from "./NewProjectFormContainer"
import FetchProject from "./services/FetchProject"

const ProjectShowContainer = (props) => {
  const [project, setProject] = useState({})
  const [newAssignment, setNewAssignment] = useState(false)

  const fetchProject = async () => {
    const url = props.match.params.id
    const parsedProject = await FetchProject.getProject(url)
    setProject(parsedProject)
  }

  useEffect(() => {
    fetchProject()
  }, [])

  let projectDisplay

  if(newAssignment == true){
    projectDisplay = <NewProjectFormContainer
                      project={project}
                      />
  } else if(project.project){
    projectDisplay = <ProjectShowTile
                      projectPackage={project.project}
                      assignmentPackage={project.assignments}
                    />
  }

  return(
    <div>
      <h2  className="blur-header">Project Details</h2>
      {projectDisplay}
    </div>
  )
}

export default ProjectShowContainer