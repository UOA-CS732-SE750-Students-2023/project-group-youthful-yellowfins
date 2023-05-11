import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './NoDataFound.module.css'

const NoDataFound = () => {
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
            <br></br>
            No Data Found
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center' className={classes.text}>
            Sorry! we could not find required data.
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
        </Grid>
      </Grid>
    </div>
  );
};

export default NoDataFound;
