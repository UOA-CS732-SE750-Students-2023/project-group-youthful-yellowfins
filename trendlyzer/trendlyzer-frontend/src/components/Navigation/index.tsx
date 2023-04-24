import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, List, ListItemButton, Stack } from '@mui/material';
import classes from './index.module.css';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';

const Navigation = () => {
  const { showNavigation } = useContext(TrendDetailsContext);

  // TODO
  const handleLogout = () => {};

  return (
    <>
      <div className={classes.layoutMenu}>
        <Stack
          direction='column'
          sx={{
            alignItems: 'center',
            position: 'fixed',
            width: 'inherit',
          }}
        >
          <ListItemButton>
            <Link to={'/dashboard'}>
              <img src='logo3.png' alt='Trendlyzer' height={150} width={300} />
            </Link>
          </ListItemButton>
          <Link to={'/dashboard'}>
            <ListItemButton sx={{ paddingBottom: '25px' }}>Dashboard</ListItemButton>
          </Link>
          <Collapse in={showNavigation} timeout='auto' unmountOnExit>
            <Link to={'/trendsDetails/0'}>
              <List component='div' disablePadding>
                <ListItemButton sx={{ paddingBottom: '25px' }}>Trends Details</ListItemButton>
              </List>
            </Link>
          </Collapse>
          <Link to={'/exploreTrends'}>
            <ListItemButton sx={{ paddingBottom: '25px' }}>Explore Trends</ListItemButton>
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
