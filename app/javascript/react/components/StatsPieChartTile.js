import React from 'react';
import { Chart } from 'react-google-charts';

const StatsPieChartTile = (props) => {

  return (
    <div>
      <div>
        <Chart
          width={'100%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Open', props.openOnTimeAssignments],
            ['Past Due', props.openPastDueAssignments],
            ['Submitted Late', props.closedLateAssignments],  
            ['Submitted On Time', props.closedOnTimeAssignments],
          ]}
          options={{
            title: 'Assignments',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}

export default StatsPieChartTile