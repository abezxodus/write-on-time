import { Chart } from 'react-google-charts';
import React from 'react'
import StatsTimelineData from './services/StatsTimelineData';

const StatsLineGraphTile = (props) => {
  let data = new StatsTimelineData(props.timelines).submissions()

  return (
    <div>
      <h3>Submissions and Highest Streak per Month</h3>
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