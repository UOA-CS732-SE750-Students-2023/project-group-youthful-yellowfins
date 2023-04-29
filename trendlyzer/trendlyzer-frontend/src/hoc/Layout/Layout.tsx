import React, { useContext } from 'react';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';
import { AuthContext } from '../../context/AuthContext';

const Layout = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {auth.isAuthenticated && !auth.loading ? <Navigation /> : <></>}
      <main className={auth.isAuthenticated && !auth.loading ? classes.appOutlet : classes.outlet}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
