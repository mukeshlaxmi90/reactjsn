import React from 'react';
import { BrowserRouter   as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import UsersHome from './Muser/UsersHome';
import Norder from './Moder/Norder';
import ViewProfileForm from './Muser/ViewProfileForm';
import GetProfile  from './Muser/GetProfile';
import NewPages from './Accuracy/newpages';
import Login from './Components/login';
import ProtectedRoute from './Components/ProtectedRoute';

function LayoutWrapper() {
  debugger;
  const location = useLocation();
  //const hideHeaderFooter = location.pathname === '/users' || location.pathname === '/orders'; // 👈 यहां चेक
   const hideHeaderFooter =  location.pathname === '/' ||  location.pathname === '/users' ||  location.pathname === '/orders';  
   return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}
      <main className="main-content">
        <Routes>
         {/* Public Route */}
          {/* <Route path="/" element={<Login />} />
          { <Route path="/Dashboard" element={<Dashboard />} />}
          <Route path="/users" element={<UsersHome />} />
          <Route path="/orders" element={<Norder />} />
           <Route path="/view-ViewProfileForm" element={<ViewProfileForm />} />
           <Route path="/view-GetProfile" element={<GetProfile />} />
           <Route path="/New" element={<NewPages />} /> */}
          {/* Public Route */}
          <Route path="/" element={<Login/>} />
          {/* Protected Routes */}
          <Route path="/Dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="/users" element={<ProtectedRoute ><UsersHome /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Norder /></ProtectedRoute>} />
          <Route path="/view-ViewProfileForm"element={<ProtectedRoute><ViewProfileForm /></ProtectedRoute>} />
          <Route path="/view-GetProfile" element={<ProtectedRoute><GetProfile /></ProtectedRoute>} />
          <Route path="/New" element={<ProtectedRoute><NewPages /></ProtectedRoute>} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
