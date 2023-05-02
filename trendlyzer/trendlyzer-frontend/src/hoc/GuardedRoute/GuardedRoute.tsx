import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import CountryProvider from '../../context/CountriesContext';

const GuardedRoute = ({ children }: any) => {
  const { auth } = useContext(AuthContext);
  return auth.isAuthenticated ? <CountryProvider>{children}</CountryProvider> : <Navigate to='/' />;
};

export default GuardedRoute;
