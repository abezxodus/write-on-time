import React from 'react';
import { Chart } from 'react-google-charts';
import StatsTimelineData from './services/StatsTimelineData';

const StatsWordColumnGraphTile = (props) => {
  let data = new StatsTimelineData(props.timelines).words()
  
  return (
    <div>
      <h3>Accumulative Words Written</h3>
      <Chart
          chartType="ColumnChart"
          data={data}
          options={{'legend':'bottom'}}
          graph_id="ColumnChart"
          width="100%"
      />
    </div>
  );
}

export default StatsWordColumnGraphTile