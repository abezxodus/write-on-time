import React, { useState, useEffect } from "react"
import ProjectShowTile from "./ProjectShowTile"
import NewProjectFormContainer from "./NewProjectFormContainer"

const ProjectShowContainer = (props) => {
  const [project, setProject] = useState({})
  const [newAssignment, setNewAssignment] = useState(false)

  const fetchProject = async () => {
    try {
      const url = props.match.params.id
      const response = await fetch(`/api/v1/projects/${url}`, {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedProject = await response.json()
        setProject(parsedProject)
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
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