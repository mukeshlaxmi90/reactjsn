import React from 'react';
import SalesChart from './SalesChart';
import UserGrowthChart from './UserGrowthChart';
 
const ChartSection = () => {
    debugger;
  return (
    <div className="chart-grid" style={{ display: 'flex', gap: '20px' }}>
      <div className="chart-box" style={{ width: '50%' }}>
        <SalesChart />
      </div>
      <div className="chart-box" style={{ width: '50%' }}>
        <strong>User Growth</strong>
       <UserGrowthChart />
      </div>
    </div>
  );
};

export default ChartSection;
