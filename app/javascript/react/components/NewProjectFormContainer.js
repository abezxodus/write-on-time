import React, {useState} from "react"
import NewProjectFormTile from "./NewProjectFormTile"
import NewAssignmentFormTile from "./NewAssignmentFormTile"
import GoogleCalendarSetup from "./GoogleCalendarSetup"

const NewProjectFormContainer = (props) => {
  const [savedProject, setSavedProject] = useState({})
  // const [savedProject, setSavedProject] = useState({id: "something", name: "Placeholder", description: "Placeholder"})
  const [savedAssignment, setSavedAssignment] = useState({})
  // const [savedAssignment, setSavedAssignment] = useState({
  //   id: "something", name: "Placeholder", note: "Placeholder", text_reminder: false, email_reminder: false, open: true, past_due: true, page_count_req: "10", word_count_req: "5000"
  // })

  const addProject = async (formPayload) => {
    try {
      const response = await fetch("api/v1/projects", {
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
      const response = await fetch("api/v1/assignments", {
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
      setSavedAssignment(responseBody)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
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
    />
  } else {
    assignmentForm = <NewProjectFormTile
      addProject={addProject}
      savedProject={savedProject}
    />
  }

  return (
    <div>
            <img className="cell large-5 medium-12 small-12" src="https://write-on-time.s3.amazonaws.com/logos/Banner.png" alt="calendar image"/>
      {assignmentForm}
    </div>
  )
}

export default NewProjectFormContainer