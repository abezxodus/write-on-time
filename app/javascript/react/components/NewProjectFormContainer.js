import React, {useEffect, useState} from "react"
import NewProjectFormTile from "./NewProjectFormTile"
import NewAssignmentFormTile from "./NewAssignmentFormTile"
import GoogleCalendarSetup from "./GoogleCalendarSetup"
import FetchPostAssignment from "./services/FetchPostAssignment"
import FetchPostProject from "./services/FetchPostProject"

const NewProjectFormContainer = (props) => {
  const [errors, setErrors] = useState({})
  const [savedProject, setSavedProject] = useState({})
  const [savedAssignment, setSavedAssignment] = useState({})
  const [backendErrors, setBackendErrors] = useState({})


  useEffect(() => {
    if(props.project){
      setSavedProject(props)
    }
  }, [])

  const addProject = async (formPayload) => {
    const responseBody = await FetchPostProject.addProject(formPayload)
    if(responseBody["errors"]){
      setBackendErrors(responseBody)
    } else {
      setSavedProject(responseBody)
    }
  }

  const addAssignment = async (formPayload) => {
    const responseBody = await FetchPostAssignment.addAssignment(formPayload)
    if(responseBody["errors"]){
      setBackendErrors(responseBody)
    } else {
      setSavedAssignment(responseBody)
    } 
  }

  let assignmentForm

  if(savedAssignment.id){
    assignmentForm = <GoogleCalendarSetup
      savedAssignment={savedAssignment}
      savedProject={savedProject}
      backendErrors={backendErrors}
    />
  } else if (savedProject.id) {
    assignmentForm = <NewAssignmentFormTile
      addAssignment={addAssignment}
      savedProject={savedProject}
      errors={errors}
      setErrors={setErrors}
      backendErrors={backendErrors}
    />
  } else {
    assignmentForm = <NewProjectFormTile
      addProject={addProject}
      savedProject={savedProject}
      errors={errors}
      setErrors={setErrors}
      backendErrors={backendErrors}
    />
  }

  return (
    <div>
      {assignmentForm}
    </div>
  )
}

export default NewProjectFormContainer