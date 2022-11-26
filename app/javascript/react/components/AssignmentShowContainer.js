import React, { useState, useEffect } from "react"
import AssignmentShowTile from "./AssignmentShowTile"
import FetchAssignment from "./services/FetchAssignment"

const AssignmentShowContainer = (props) => {
  const [assignment, setAssignment] = useState({})

  const fetchAssignment = async () => {
    const url = props.match.params.id
    const parsedAssignment = await FetchAssignment.getAssignment(url)
    setAssignment(parsedAssignment)
  }

  useEffect(() => {
    fetchAssignment()
  }, [])

  return (
    <div>
      <h2  className="blur-header">Assignment Details</h2>
      <AssignmentShowTile
        key={assignment.id}
        assignment={assignment}
      />
    </div>
  )
}

export default AssignmentShowContainer