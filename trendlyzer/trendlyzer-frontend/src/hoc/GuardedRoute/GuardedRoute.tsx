/**
 * Author: Ankita Mohata
 *
 * This higher order component manages the routes based on the authentication.
 * If the user is authenticated, then they can visit certain pages, else will be at homepage
 */

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import CountryProvider from '../../context/CountriesContext';

const GuardedRoute = ({ children }: any) => {
  const { auth } = useContext(AuthContext);
  return auth.isAuthenticated && sessionStorage.getItem('token') ? (
    <CountryProvider>{children}</CountryProvider>
  ) : (
    <Navigate to='/' />
  );
};

export default GuardedRoute;
