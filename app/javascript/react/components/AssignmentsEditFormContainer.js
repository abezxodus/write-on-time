import React, { useState, useEffect } from "react"
import AssignmentsEditFormTile from "./AssignmentsEditFormTile"
import { Redirect } from "react-router-dom"


const AssignmentsEditFormContainer = (props) => {
  const [assignment, setAssignment] = useState({})
  const [redirect, setRedirect] = useState(false)

  const fetchAssignment = async () => {
    try{
      const url = props.match.params.id
      const response = await fetch(`/api/v1/assignments/${url}/edit`, {
        credentials: "same-origin"
      })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } const parsedAssignment = await response.json()
      setAssignment(parsedAssignment)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  const editAssignment = async (formPayload) => {
    try {
      const url = props.match.params.id
      const response = await fetch(`api/v1/assignments/${url}`, {
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
    fetchAssignment()
  }, [])

  if(redirect == true){
    return(
      <Redirect to={`/assignments/${props.match.params.id}`}/>
    )
  }

  let displayTile
  if(assignment.edit == "status"){
    displayTile = <AssignmentsEditFormStatusTile
                    key={assignment.id}
                    assignment={assignment}
                    editAssignment={editAssignment}
                    setAssignment={setAssignment}
                  />
  } else if(assignment.edit == "due date") {
    displayTile = <AssignmentsEditFormExtensionTile
                    key={assignment.id}
                    assignment={assignment}
                    editAssignment={editAssignment}
                    setAssignment={setAssignment}
                  />
  } else {
    displayTile = <AssignmentsEditFormTile
                    key={assignment.id}
                    assignment={assignment}
                    editAssignment={editAssignment}
                    setAssignment={setAssignment}
                  />
  }

  return (
    <div>
      {displayTile}
    </div>
  )
}

export default AssignmentsEditFormContainer