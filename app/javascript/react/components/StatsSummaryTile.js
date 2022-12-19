import React from 'react'

const StatsSummaryTile = (props) => {
  let closedAssignments = 0
  let closedLateAssignments = 0
  let closedOnTimeAssignments = 0
  let successRate = 0.00
  let streak = 0

  if(props["stats"]){
    closedLateAssignments = props.stats.assignments_closed_late
    closedOnTimeAssignments = props.stats.assignments_closed_on_time
    closedAssignments = closedLateAssignments + closedOnTimeAssignments
    streak = props.stats.submission_streak
    successRate = parseFloat((closedOnTimeAssignments/closedAssignments)*100.00).toFixed(2)
  }

  return (
    <div className="callout">
      <h3 className="line-break">User Stats Summary</h3>
      <p className="no-line-break">Success Rate</p>
      <p>{successRate}%</p>
      <p className="no-line-break">Current Streak</p>
      <p>{streak}</p>
    </div>
  );
}

export default StatsSummaryTile