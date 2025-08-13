import React from 'react';

const Header = () => {
  const userRole = localStorage.getItem("role") || "user"; // yaha read hoga
  return (
    <header 
      className="header" 
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px',
        backgroundColor: '#007bff',  color: 'white', borderRadius: '5px', }} >
      <div>Admin Dashboard</div>
      <div>{userRole}</div>
    </header>
  );
};
export default Header;
