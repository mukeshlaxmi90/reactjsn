import React, { useState } from 'react';
import { FaBars, FaUserCircle,FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import menuConfig from "../Components/menuConfig";

const UserHeader = ({ toggleSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
   const navigate = useNavigate(); 
const userRole = localStorage.getItem("role") || "user"; // yaha read hoga
  const toggleUserMenu = () => {
    setShowMenu(prev => !prev);
  };
  const handleLogout = () => {
    // You can clear auth state here if needed
    navigate('/'); // ✅ go to Dashboard.js route
  };

  return (
    <header
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: '10px',
      }}
    >
      {/* Left side: Title and Sidebar toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h2 style={{ margin: 0 }}>User Dashboard</h2>
        <FaBars
          size={20}
          onClick={toggleSidebar}
          style={{ cursor: 'pointer', marginLeft: '10px' }}
        />
      </div>

      {/* Right side: User icon and dropdown */}
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}  onClick={toggleUserMenu} >
          <FaUserCircle size={24} />
          <span style={{ marginLeft: '8px' }}>{localStorage.getItem("role")}</span>
        </div>

        {/* Dropdown menu */}
        {showMenu && (
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: '#fff',
              color: '#000',
              listStyle: 'none',
              margin: 0,
              padding: '8px 0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '120px',
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <li
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
              onClick={() => alert('Login Clicked')}
            >
              Login
            </li>
            <li
              style={{padding: '8px 16px',cursor: 'pointer', }}
              //onClick={() => alert('Logout Clicked')}>              
               onClick={handleLogout}>

               <FaSignOutAlt size={16} style={{ marginRight: '8px' }} />Logout
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
export default UserHeader;
