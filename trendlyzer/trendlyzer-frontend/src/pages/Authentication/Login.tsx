import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import {
  Alert,
  Box,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  TextField,
  Typography,
  Snackbar,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Loader from '../../components/UIComponents/Loader/LoaderComponent';

const Login = () => {
  const {
    auth: { loading, authError },
    handleLogInMethod,
    handleGoogleAuth,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showError, setShowError] = useState<any>(!!authError);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const handleChange = (value: any) => {
    const regEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValid = regEx.test(value.target.value);
    setIsEmailValid(emailValid);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogInMethod({ email: event.target[0].value, password: event.target[2].value })
      .then((response: any) => {
        if (!response.message) {
          navigate('/dashboard');
        } else {
          setShowError(true);
        }
      })
      .catch((e: any) => setShowError(true));
  };

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
      <Container component='main' maxWidth={false}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              disabled={loading}
              onChange={handleChange}
              {...(!isEmailValid && isEmailValid !== undefined ? { error: true } : {})}
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
              disabled={loading}
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
              disabled={loading || !isEmailValid}
            >
              Sign In
              {loading && <Loader />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href='#'
                  variant='body2'
                  style={{ textDecoration: '#800080', color: '#800080' }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href='/register'
                  variant='body2'
                  style={{ textDecoration: '#800080', color: '#800080' }}
                >
                  Dont have an account? Sign Up
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
              <GoogleIcon sx={{ mr: 1 }} /> Sign in using Google
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
