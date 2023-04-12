import { ListItemButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const Navigation = () => {
  // TODO
  const handleLogout = () => {};

  return (
    <>
      <div className={classes.layoutMenu}>
        <ListItemButton>
          <Link to={'/dashboard'}>
            <img src='logo-trendlyzer.png' alt='Trendlyzer' height={150} width={350} />
          </Link>
        </ListItemButton>
        <Link to={'/dashboard'}>
          <ListItemButton>Dashboard</ListItemButton>
        </Link>
        <Link to={'/trendsDetails'}>
          <ListItemButton>Trends Details</ListItemButton>
        </Link>
        <Link to={'/sentiment'}>
          <ListItemButton>Sentiment</ListItemButton>
        </Link>
        <ListItemButton onClick={() => handleLogout()}>Logout</ListItemButton>
      </div>
    </>
  );
};

export default Navigation;
