import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='h1' align='center' className={classes.text}>
            <img
              src='404errorpage.png'
              alt=''
              height='132'
              width='210'
              className={classes.gridImage}
            />
            404 Not Found
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center' className={classes.text}>
            The page you requested is on a coffee break. Coming soon.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            component={Link}
            to='/'
          >
            Go to homepage
          </Button>
          <Button sx={{ ml: 2 }} variant='outlined' color='primary' component={Link} to='/contact'>
            Contact us
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
