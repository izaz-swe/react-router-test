import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role = null }) => {
  const { isLoggedIn, userRole } = useAuth();
  const location = useLocation();
  console.log(userRole, isLoggedIn);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/not-authorized" replace />;
  }
  console.log("I am here");
  
  return children;
};

export default ProtectedRoute;
