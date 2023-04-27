import React, { useContext, useLayoutEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, ListItemButton, Stack } from '@mui/material';
import classes from './index.module.css';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';

const Navigation = () => {
  const { showNavigation } = useContext(TrendDetailsContext);

  // TODO
  const handleLogout = () => {};

  const actionRef: any = createRef();

  useLayoutEffect(() => {
    if (actionRef.current) {
      actionRef.current.focusVisible();
    }
  }, []);

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
              <img src='logo3.png' alt='Trendlyzer' className={classes.logo} />
            </Link>
          </ListItemButton>
          <Link to={'/dashboard'}>
            <ListItemButton
              sx={{ p: 2, justifyContent: 'center', '&:focusVisible': { color: '#560badff' } }}
            >
              Dashboard
            </ListItemButton>
          </Link>
          <Collapse in={showNavigation} timeout='auto' unmountOnExit>
            <Link to={'/trendsDetails/0'}>
              <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>
                Trends Details
              </ListItemButton>
            </Link>
          </Collapse>
          <Link to={'/exploreTrends'}>
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>Explore Trends</ListItemButton>
          </Link>
          <Link to={'/sentiment'}>
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>Sentiment</ListItemButton>
          </Link>
          <Link to=''>
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }} onClick={() => handleLogout()}>
              Logout
            </ListItemButton>
          </Link>
        </Stack>
      </div>
    </>
  );
};

export default Navigation;
