import React from 'react';
import '../AllCss/WidgetCard.css';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaBullseye, FaBolt, FaGlobe } from 'react-icons/fa';


const iconMap = {
  "Success Rate": <FaChartLine />,
  "Efficiency": <FaBullseye />,
  "Accuracy": <FaBolt />,
  "Coverage": <FaGlobe />,
};

const WidgetCard = ({ title, value, change, colorFrom, colorTo }) => {
    debugger
  const icon = iconMap[title] || null;
  const isNegative = change.startsWith('↓');
   const navigate = useNavigate();

   const handleClick = () => {
    debugger;
    if (title === 'Success Rate') {
  navigate('/users');
   } else if (title === 'Efficiency') {
  navigate('/orders');
  }  
  else if (title === 'Accuracy') {
  navigate('/New');
  }  
  };

  return (
    <div className="styled-widget" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="widget-top">
        <div>
          <div className="widget-value">{value}</div>
          <div className="widget-title">{title}</div>
        </div>
        <div className="widget-icon" style={{ background: colorFrom }}>
          {icon}
        </div>
      </div>
      <div
        className="widget-footer"
        style={{
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          color: isNegative ? '#e74c3c' : '#2ecc71',
        }}
      >
        {change}
      </div>
    </div>
  );
};


export default WidgetCard;
