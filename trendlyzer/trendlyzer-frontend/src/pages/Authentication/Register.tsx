import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import {
  Alert,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Snackbar,
  Card,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const {
    auth: { loading, authError },
    handleRegisterMethod,
    handleGoogleAuth,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState<boolean>();
  const [showError, setShowError] = useState<any>(!!authError);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>();

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
      .catch((e: any) => setShowError(true));
  };

  const handleChange = (value: any) => {
    const regEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValid = regEx.test(value.target.value);
    setIsEmailValid(emailValid);
  };

  const handlePasswordChange = (value: any) => setIsPasswordValid(value.target.value.length > 5);

  const handleGoogleSubmit = (event: any) => {
    event.preventDefault();
    handleGoogleAuth()
      .then((response: any) => {
        navigate('/dashboard');
      })
      .catch((e: any) => setShowError(true));
  };

  return (
    <>
      {showError && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setShowError(false)}
          autoHideDuration={5000}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {authError}
          </Alert>
        </Snackbar>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            margin: '60px',
            padding: '30px',
            justifyContent: 'space-between',
            boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
            borderRadius: '3%',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '50%',
          }}
        >
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src='homepage-logo.jpg' className='logo-img' />
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
                {...(!isEmailValid && isEmailValid !== undefined ? { error: true } : {})}
                variant='outlined'
                helperText={!isEmailValid && isEmailValid !== undefined ? 'Enter valid email' : ''}
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
                onChange={handlePasswordChange}
                {...(!isPasswordValid && isPasswordValid !== undefined ? { error: true } : {})}
                variant='outlined'
                helperText={
                  !isPasswordValid && isPasswordValid !== undefined
                    ? 'Password should be at least 6 characters'
                    : ''
                }
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
                disabled={
                  !isEmailValid ||
                  isEmailValid === undefined ||
                  !isPasswordValid ||
                  isPasswordValid === undefined
                }
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
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2, background: '#800080' }}
                disabled={loading}
                onClick={(event) => handleGoogleSubmit(event)}
              >
                <GoogleIcon sx={{ mr: 1 }} /> Sign up using Google
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Register;
