import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Collapse, ListItemButton, Stack, Typography } from '@mui/material';
import classes from './index.module.css';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import { AuthContext } from '../../context/AuthContext';

const Navigation = () => {
  const { showNavigation } = useContext(TrendDetailsContext);
  const { auth, handlelogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const pathName = window.location.pathname.split('/')[1];

  const handleLogout = () => {
    handlelogout()
      .then(() => {
        if (auth.isAuthenticated) {
          navigate('/');
        }
      })
      .catch(() => {});
  };

  return (
    <>
      <div className={classes.layoutMenu}>
          {/* <Link to={'/dashboard'}> */}
            <img src='logo-transparent.png' alt='Trendlyzer' className={classes.logo} />
          {/* </Link> */}
        <Stack
          direction='column'
          sx={{
            alignItems: 'center',
            position: 'fixed',
            width: 'inherit',
          }}
        >
          <ListItemButton>
          </ListItemButton>
          <Link to={'/dashboard'} className={pathName === 'dashboard' ? classes.currentPath : ''}>
            <ListItemButton
              sx={{ p: 2, justifyContent: 'center', '&:focusVisible': { color: '#560badff' } }}
            >
              Dashboard
            </ListItemButton>
          </Link>
          <Collapse
            in={showNavigation}
            timeout='auto'
            unmountOnExit
            className={classes.trendDetail}
          >
            <div className={pathName === 'trendsDetails' ? classes.currentPath : ''}>
              <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>
                Trends Details
              </ListItemButton>
            </div>
          </Collapse>
          <Link
            to={'/exploreTrends'}
            className={pathName === 'exploreTrends' ? classes.currentPath : ''}
          >
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>Explore Trends</ListItemButton>
          </Link>
          <Link to={'/sentiment'} className={pathName === 'sentiment' ? classes.currentPath : ''}>
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }}>Analyze Sentiment</ListItemButton>
          </Link>
          <Link to=''>
            <ListItemButton sx={{ p: 2, justifyContent: 'center' }} onClick={() => handleLogout()}>
              Logout
            </ListItemButton>
          </Link>
        </Stack>
          <div  className={classes.userDetails}>
          {/* <ListItemButton sx={{ position: 'fixed', bottom: 0, mb: 2 }}>
          </ListItemButton> */}
            <Avatar sx={{ width: 28, height: 28 }} />
            <Typography sx={{ ml: 2, overflowWrap: 'anywhere', fontSize : '18px' }} variant='body2' component='p'>
              {auth.userName ? auth.userName : auth.email}
            </Typography>
          </div>
      </div>
    </>
  );
};

export default Navigation;
