import React, { useState } from 'react';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';
import UserFooter from './UserFooter';
import ViewProfileForm from './ViewProfileForm'; // ✅ Import the form
import GetProfile from './GetProfile';

const UsersHome = () => {
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
const [activePage, setActivePage] = useState('home'); // ✅ State to manage active view
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <UserHeader toggleSidebar={() => setIsSidebarCollapsed(prev => !prev)} />
      <div style={{ display: 'flex', flex: 1 }}>
        <UserSidebar collapsed={isSidebarCollapsed} onMenuSelect={setActivePage} />
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
          {activePage === 'viewProfile' ? (
            <ViewProfileForm />) :
             activePage === 'GetProfile' ? (
            <GetProfile /> ):
             (
            <>
              <h2>👥Users Home Page</h2>
              <p>Manage all your users here.</p>
            </>
          )}
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default UsersHome;
