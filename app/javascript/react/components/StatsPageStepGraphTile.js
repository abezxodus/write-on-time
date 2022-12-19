import React from 'react';
import { Chart } from 'react-google-charts';

const StatsPageStepGraphTile = (props) => {
  let data
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"]

  if(props.timelines.length > 0){
    data = props.timelines.map((timeline) => {
      return [months[timeline.month - 1], timeline.pages]
    })
    data.unshift(['Month', 'Pages'])
  }
  return (
    <div>
      <h3>Accumulative Pages Written</h3>
      <Chart
          chartType="SteppedAreaChart"
          data={data}
          options={{'legend':'bottom',
            'backgroundColor':"#F2F2F2"
          }}
          graph_id="SteppedAreaChart"
          width="100%"
        />
    </div>
  );
}

export default StatsPageStepGraphTile