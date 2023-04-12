import React from 'react';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.containerFlex}>
      <Navigation />
      <main className={classes.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
