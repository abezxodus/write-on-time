import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import ProjectsEditFormTile from "./ProjectsEditFormTile"


const ProjectsEditFormContainer = (props) => {
  const [project, setProject] = useState({})
  const [redirect, setRedirect] = useState(false)

  const fetchProject = async () => {
    try{
      const url = props.match.params.id
      const response = await fetch(`/api/v1/projects/${url}/edit`, {
        credentials: "same-origin"
      })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } const parsedProject = await response.json()
      setProject(parsedProject)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  const editProject = async (formPayload) => {
    try {
      const url = props.match.params.id
      const response = await fetch(`api/v1/projects/${url}`, {
        credentials: "same-origin",
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
        })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setRedirect(true)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [])

  if(redirect == true){
    return(
      <Redirect to={`/projects/${props.match.params.id}`}/>
    )
  }

  const displayTile = <ProjectsEditFormTile
                    key={project.id}
                    project={project}
                    editProject={editProject}
                    setProject={setProject}
                  />


  return (
    <div>
      <h2 className="blur-header">Edit Project</h2>
      {displayTile}
    </div>
  )
}

export default ProjectsEditFormContainer