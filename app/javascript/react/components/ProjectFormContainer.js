import React, {useState} from "react"
import ProjectFormTile from "./ProjectFormTile"
import AssignmentFormTile from "./AssignmentFormTile"
import { Redirect } from "react-router-dom"

const ProjectFormContainer = (props) => {
  const [savedProject, setSavedProject] = useState({})
  const [allSaved, setAllSaved] = useState(false)

  const addProject = async (formPayload) => {
    try {
      const response = await fetch("api/v1/project", {
        credentials: "same-origin",
        method: "POST",
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
      setSavedProject(responseBody)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  const addAssignment = async (formPayload) => {
    try {
      const response = await fetch("api/v1/assignment", {
        credentials: "same-origin",
        method: "POST",
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
      setAllSaved(true)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  if(allSaved == true){
    return (
      <Redirect to="/userpage"/>
    )
  }

  let assignmentForm

  if (savedProject.id) {
    assignmentForm = <AssignmentFormTile
      addAssignment={addAssignment}
      savedProject={savedProject}
    />
  } else {
    assignmentForm = <ProjectFormTile
      addProject={addProject}
      savedProject={savedProject}
    />
  }

  return (
    <div>
      {assignmentForm}
    </div>
  )
}

export default ProjectFormContainer