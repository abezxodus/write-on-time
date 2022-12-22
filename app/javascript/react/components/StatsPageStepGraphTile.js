import React from 'react';
import { Chart } from 'react-google-charts';
import StatsTimelineData from './services/StatsTimelineData';

const StatsPageStepGraphTile = (props) => {
  let data = new StatsTimelineData(props.timelines).pages()

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