import React from "react"
import AssignmentIndexTile from "./AssignmentIndexTile"

const AssignmentIndexContainer = (props) => {
  const mappedAssignments = props.assignments.map((assignment) => {
    return(
      <AssignmentIndexTile
        key={assignment.id}
        assignment={assignment}
      />
    )
  })

  return(
    <div>
      {mappedAssignments}
    </div>
  )
}

export default AssignmentIndexContainer