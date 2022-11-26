import React, { useState, useEffect } from "react"
import AssignmentsEditFormTile from "./AssignmentsEditFormTile"
import { Redirect } from "react-router-dom"
import FetchEditAssignment from "./services/FetchEditAssignment"
import FetchPostEditAssignment from "./services/FetchPostEditAssignment"

const AssignmentsEditFormContainer = (props) => {
  const [assignment, setAssignment] = useState({})
  const [errors, setErrors] = useState({})
  const [formAssignment, setFormAssignment] = useState({})
  const [project, setProject] = useState({})
  const [redirect, setRedirect] = useState(false)

  const fetchAssignment = async () => {
    const url = props.match.params.id
    const parsedAssignment = await FetchEditAssignment.getEditProject(url)
    setAssignment(parsedAssignment)
    setFormAssignment(parsedAssignment)
  }

  const editAssignment = async (formPayload) => {
    const url = props.match.params.id
    const responseBody = await FetchPostEditAssignment.postEditAssignment(url, formPayload)
    if(responseBody){
      setProject(responseBody)
      setRedirect(true)
    }
  }

  useEffect(() => {
    fetchAssignment()
  }, [])

  if(redirect == true){
    return(
      <Redirect to={`/userpage`}/>
    )
  }
  
  return (
    <div>
      <h2 className="blur-header">Edit Assignment</h2>
      <AssignmentsEditFormTile
        key={assignment.id}
        assignment={assignment}
        setAssignment={setAssignment}
        editAssignment={editAssignment}
        fetchAssignment={fetchAssignment}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  )
}

export default AssignmentsEditFormContainer