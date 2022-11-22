import React, { useState, useEffect } from "react"
import AssignmentsEditFormTile from "./AssignmentsEditFormTile"
import AssignmentsEditFormClosedTile from "./AssignmentsEditFormClosedTile"
import { Redirect } from "react-router-dom"


const AssignmentsEditFormContainer = (props) => {
  const [assignment, setAssignment] = useState({})
  const [formAssignment, setFormAssignment] = useState({})
  const [project, setProject] = useState({})
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
      setFormAssignment(parsedAssignment)
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
      setProject(responseBody)
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
      <Redirect to={`/projects/${project.id}`}/>
    )
  }

  let displayTile
  if(formAssignment){
    if(formAssignment.open == true){
      displayTile = <AssignmentsEditFormTile
                        key={assignment.id}
                        assignment={assignment}
                        setAssignment={setAssignment}
                        editAssignment={editAssignment}
                        fetchAssignment={fetchAssignment}
                      />
    } else {
      displayTile = <AssignmentsEditFormClosedTile
                      key={assignment.id}
                      assignment={assignment}
                      setAssignment={setAssignment}
                      editAssignment={editAssignment}
                      fetchAssignment={fetchAssignment}
                    />
    }
  }
  
  return (
    <div>
      <h2 className="blur-header">Edit Assignment</h2>
      {displayTile}
    </div>
  )
}

export default AssignmentsEditFormContainer