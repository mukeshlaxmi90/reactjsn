import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserGrowthChart = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: { text: 'Month' },
    },
    yAxis: {
      min: 0,
      title: { text: 'Users' },
    },
    series: [
      {
        name: 'New Users',
        data: [150, 200, 250, 300, 500, 400],
        color: '#007bff',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default UserGrowthChart;
