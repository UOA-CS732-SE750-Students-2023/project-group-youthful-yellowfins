import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const Register = () => {
  const { handleRegisterMethod } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleRegisterMethod({
      firstName: event.target[0].value,
      lastName: event.target[2].value,
      email: event.target[6].value,
      password: event.target[8].value,
    })
      .then((response: any) => {
        navigate('/dashboard');
      })
      .catch((e: any) => console.log(e));
  };

  const handleChange = (value: any) => {
    const regEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValid = regEx.test(value.target.value);
    setIsEmailValid(emailValid);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='firstname'
            label='First name'
            name='firstname'
            autoComplete='firstname'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='lastname'
            label='Last name'
            name='lastname'
            autoComplete='lastname'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            onChange={handleChange}
            {...(!isEmailValid ? { error: true } : {})}
            variant='outlined'
            helperText={!isEmailValid ? 'Enter valid email' : ''}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='success' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, background: '#800080' }}
          >
            Sign Up
          </Button>
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid item>
              <Link
                href='/login'
                variant='body2'
                style={{ textDecoration: '#800080', color: '#800080' }}
              >
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Register;
