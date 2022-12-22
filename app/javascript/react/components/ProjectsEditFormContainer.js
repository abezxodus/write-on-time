import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import ProjectsEditFormTile from "./ProjectsEditFormTile"
import FetchEditProject from "./services/FetchEditProject"
import FetchPostEditProject from "./services/FetchPostEditProject"

const ProjectsEditFormContainer = (props) => {
  const [project, setProject] = useState({})
  const [redirect, setRedirect] = useState(false)
  const [errors, setErrors] = useState({})

  const fetchProject = async () => {
    const url = props.match.params.id
    const parsedProject = await FetchEditProject.getEditProject(url)
    setProject(parsedProject)
  }

  const editProject = async (formPayload) => {
    const url = props.match.params.id
    const parsedProject = await FetchPostEditProject.postEditProject(url, formPayload)
    if(parsedProject){
      setRedirect(true)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [])

  if(redirect === true){
    return(
      <Redirect to={`/dashboard`}/>
    )
  }

  const displayTile = <ProjectsEditFormTile
                    key={project.id}
                    project={project}
                    editProject={editProject}
                    setProject={setProject}
                    errors={errors}
                    setErrors={setErrors}
                  />

  return (
    <div>
      <h2 className="blur-header">Edit Project</h2>
      {displayTile}
    </div>
  )
}

export default ProjectsEditFormContainer