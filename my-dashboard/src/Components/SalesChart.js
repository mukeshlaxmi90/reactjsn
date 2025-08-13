import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SalesChart = () => {
    debugger;
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: undefined, // remove title inside chart
    },
    series: [
      {
        name: 'Sales',
        colorByPoint: true,
        data: [
          { name: 'Electronics', y: 45 },
          { name: 'Fashion', y: 25 },
          { name: 'Grocery', y: 15 },
          { name: 'Home Decor', y: 10 },
          { name: 'Other', y: 5 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesChart;
