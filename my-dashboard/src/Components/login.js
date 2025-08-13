import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional

const SESSION_MS = 5 * 60 * 1000; // 5 minutes

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (formData.username && formData.password) {
      // Simulate login
      localStorage.setItem("authToken", "true");

      // 🔹 Role set करो (dummy logic: username के आधार पर)
      if (formData.username.toLowerCase() === "admin") {
        localStorage.setItem("role", "admin");
      } else {
        localStorage.setItem("role", formData.username.toLowerCase());
      }
      // Session expiry time
      const expiresAt = Date.now() + SESSION_MS;
      localStorage.setItem('authExpiresAt', String(expiresAt));
      navigate('/Dashboard');
    } else {
      alert('Please enter valid credentials.');
    }
  };
  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email or Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username"
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password" 
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange} 
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="footer">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
