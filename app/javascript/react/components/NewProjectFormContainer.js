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
    setSavedProject(responseBody)
  }

  const addAssignment = async (formPayload) => {
    const responseBody = await FetchPostAssignment.addAssignment(formPayload)
    if(responseBody["errors"]){
      setBackendErrors(responseBody)
    } else {
      setSavedAssignment(responseBody)
    } 
  }

  let mappedErrors

  if(backendErrors["errors"]){
    mappedErrors = backendErrors["errors"].map((error) => {
      if(!error.includes("Created at")){
        return(
          <li>{error}</li>
        )
      }
    })
  }

  let assignmentForm

  if(savedAssignment.id){
    assignmentForm = <GoogleCalendarSetup
      savedAssignment={savedAssignment}
      savedProject={savedProject}
    />
  } else if (savedProject.id) {
    assignmentForm = <NewAssignmentFormTile
      addAssignment={addAssignment}
      savedProject={savedProject}
      errors={errors}
      setErrors={setErrors}
      mappedErrors={mappedErrors}
    />
  } else {
    assignmentForm = <NewProjectFormTile
      addProject={addProject}
      savedProject={savedProject}
      errors={errors}
      setErrors={setErrors}
    />
  }

  return (
    <div>
      {assignmentForm}
    </div>
  )
}

export default NewProjectFormContainer