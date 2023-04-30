import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const GuardedRoute = ({ children }: any) => {
  const { auth } = useContext(AuthContext);
  return auth.isAuthenticated ? children : <Navigate to='/' />;
};

export default GuardedRoute;
