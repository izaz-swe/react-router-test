import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NotFound = () => {
  const {user} = useAuth();
  console.log(user);
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      {user ? (user.role == "admin") ? <Link to="/admin/dashboard">Go to Home</Link>: <Link to="/user/dashboard">Go to Home</Link> : <Link to="/login">Go to Login Page</Link>}
    </div>
  );
};

export default NotFound;
