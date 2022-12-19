import React from 'react';
import { Chart } from 'react-google-charts';

const StatsWordColumnGraphTile = (props) => {
  let data
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"]

  if(props.timelines.length > 0){
    data = props.timelines.map((timeline) => {
      return [months[timeline.month - 1], timeline.words]
    })
    data.unshift(['Month', 'Words'])
  }
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