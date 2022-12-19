import { Chart } from 'react-google-charts';
import React from 'react'

const StatsLineGraphTile = (props) => {
  let data
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"]

  if(props.timelines.length > 0){
    data = props.timelines.map((timeline) => {
      return [months[timeline.month - 1], timeline.assignments, timeline.streaks]
    })
    data.unshift(['Month', 'Assignments', 'Highest Streak'])
  }

  return (
    <div>
      <h3>Submissions and Highest Streaks for Each Month</h3>
      <Chart
        chartType="LineChart"
        data={data}
        options={{'legend':'bottom'}}
        graph_id="LineChart"
        width="100%"
      />
    </div>
  );
}

export default StatsLineGraphTile