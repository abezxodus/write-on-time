import React from "react"
// import { Chart } from "react-google-charts"

const StatsContainer = props => {
  
  let openAssignments = 0
  let openPastDueAssignments = 0
  let openOnTimeAssignments = 0
  let closedAssignments = 0
  let closedLateAssignments = 0
  let closedOnTimeAssignments = 0
  let totalWords = 0
  let totalPages = 0
  let successRate = 0.00

  if(props.projectsPack.length > 0){
    props.projectsPack.forEach((assignmentPack) => {
      assignmentPack.assignments.forEach((assignment) => {
        if(assignment.open == true){
          openAssignments += 1
          if(assignment.past_due == true){
            openPastDueAssignments += 1
          } else {
            openOnTimeAssignments += 1
          }
        } else {
          closedAssignments += 1
          if(parseInt(assignment.page_count_req) > 0) {
            totalPages += parseInt(assignment.page_count_req)
          }
          if(parseInt(assignment.word_count_req) > 0) {
            totalWords += parseInt(assignment.word_count_req)
          }
          if(assignment.past_due == true){
            closedLateAssignments += 1
          } else {
            closedOnTimeAssignments += 1
          }
        }
      })
    })
    successRate = parseFloat((closedOnTimeAssignments/closedAssignments)*100.00).toFixed(2)
  }

  return (
      <div className="container">
        <h3>Stats</h3>
        <div className="callout grid-x">
          <div className="cell">
          <p>Completed: {closedAssignments}</p>
          <div className="container-container">
            <ul className="calendar-ul">
              <li>Submitted On Time: {closedOnTimeAssignments}</li>
              <li>Submitted Late: {closedLateAssignments}</li>
            </ul>
          <br></br>
          <p>Success Rate: {successRate}%</p>
          </div>
          </div>
          <div className="cell">
            <p>Total Words: {totalWords}</p>
            <p>Total Pages: {totalPages}</p>
          </div>
        </div>
    </div>
  )
}

export default StatsContainer