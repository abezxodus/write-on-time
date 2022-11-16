import React, { useState, useEffect } from "react"
import ProjectShowTile from "./ProjectShowTile"

const ProjectShowContainer = (props) => {
  const [project, setProject] = useState({})

  const fetchProject = async () => {
    try {
      const url = window.location.pathname
      const response = await fetch(`/api/v1${url}`)
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

  if(project.project){
    projectDisplay = <ProjectShowTile
                      projectPackage={project.project}
                      assignmentPackage={project.assignments}
                    />
  }

  return(
    <div>
      {projectDisplay}
    </div>
  )
}

export default ProjectShowContainer