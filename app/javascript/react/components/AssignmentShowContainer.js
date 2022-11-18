import React, { useState, useEffect } from "react"
import AssignmentShowTile from "./AssignmentShowTile"

const AssignmentShowContainer = (props) => {
  const [assignment, setAssignment] = useState({})

  const fetchAssignment = async () => {
    try{
      const url = props.match.params.id
      const response = await fetch(`/api/v1/assignments/${url}`, {
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

  useEffect(() => {
    fetchAssignment()
  }, [])

  // let showTile
  // if(assignment.id){
  //   showTile = 
  // }
  return (
    <AssignmentShowTile
      key={assignment.id}
      assignment={assignment}
    />
  )
}

export default AssignmentShowContainer