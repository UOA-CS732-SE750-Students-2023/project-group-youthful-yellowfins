/**
 * Author: Ankita Mohata
 *
 * This higher order component manages the layout of the application based on the routing and authentication
 */

import React, { useContext } from 'react';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';
import { AuthContext } from '../../context/AuthContext';
import AxiosLayout from '../AxiosLayout/AxiosLayout';

const Layout = () => {
  const { auth } = useContext(AuthContext);

  return (
    <AxiosLayout>
      {auth.isAuthenticated && !auth.loading ? <Navigation /> : <></>}
      <main className={auth.isAuthenticated && !auth.loading ? classes.appOutlet : classes.outlet}>
        <Outlet />
      </main>
    </AxiosLayout>
  );
};

export default Layout;
