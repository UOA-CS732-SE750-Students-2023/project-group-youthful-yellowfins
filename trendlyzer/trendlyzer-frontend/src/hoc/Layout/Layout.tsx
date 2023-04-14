import React, { useContext } from 'react';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';
import { AuthContext } from '../../context/AuthContext';

const Layout = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className={classes.containerFlex}>
      {auth.isAuthenticated ? <Navigation /> : <></> }
      <main className={classes.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
