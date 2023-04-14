import { ListItemButton, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const Navigation = () => {
  // TODO
  const handleLogout = () => {};

  return (
    <>
      <div className={classes.layoutMenu}>
        <Stack direction='column' sx={{ alignItems: 'center' }}>
          <ListItemButton>
            <Link to={'/dashboard'}>
              <img src='logo-trendlyzer.png' alt='Trendlyzer' height={150} width={350} />
            </Link>
          </ListItemButton>
          <Link to={'/dashboard'}>
            <ListItemButton sx={{ paddingBottom: '25px' }}>Dashboard</ListItemButton>
          </Link>
          <Link to={'/trendsDetails'}>
            <ListItemButton sx={{ paddingBottom: '25px' }}>Trends Details</ListItemButton>
          </Link>
          <Link to={'/sentiment'}>
            <ListItemButton sx={{ paddingBottom: '25px' }}>Sentiment</ListItemButton>
          </Link>
          <ListItemButton onClick={() => handleLogout()}>Logout</ListItemButton>
        </Stack>
      </div>
    </>
  );
};

export default Navigation;
