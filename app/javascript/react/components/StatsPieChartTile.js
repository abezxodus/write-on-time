import React from 'react';
import { Chart } from 'react-google-charts';

const StatsPieChartTile = (props) => {
  let openPastDueAssignments = 0
  let openOnTimeAssignments = 0
  let closedAssignments = 0
  let closedLateAssignments = 0
  let closedOnTimeAssignments = 0

  if(props["stats"]){
    openPastDueAssignments = props.stats.assignments_open_past_due
    openOnTimeAssignments = props.stats.assignments_open_on_track
    closedLateAssignments = props.stats.assignments_closed_late
    closedOnTimeAssignments = props.stats.assignments_closed_on_time
    closedAssignments = closedLateAssignments + closedOnTimeAssignments
  }

  return (
    <div>
      <h3>Accumulative Assignments History</h3>
      <Chart
        width={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Open', openOnTimeAssignments],
          ['Past Due', openPastDueAssignments],
          ['Submitted Late', closedLateAssignments],  
          ['Submitted On Time', closedOnTimeAssignments],
        ]}
        options={{'legend':'bottom',
                  'backgroundColor':"#F2F2F2"
                }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default StatsPieChartTile