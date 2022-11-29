import React from "react"
import StatsPieChartTile from "./StatsPieChartTile"

const StatsContainer = props => {
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
      <div className="callout">
      <StatsPieChartTile
        openOnTimeAssignments={openOnTimeAssignments}
        openPastDueAssignments={openPastDueAssignments}
        closedLateAssignments={closedLateAssignments}
        closedOnTimeAssignments={closedOnTimeAssignments}
        successRate={successRate}
      />
        <div className="container-container">
          <p className="no-line-break">Submitted Late</p>
          <p>{closedLateAssignments}</p>
          <p className="no-line-break">Submitted On Time</p>
          <p>{closedOnTimeAssignments}</p>
          <p className="no-line-break">Success Rate</p>
          <p>{successRate}%</p>
          <div className="cell">
              <p className="line-break">Total Words: {totalWords}</p>
              <p>Total Pages: {totalPages}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsContainer