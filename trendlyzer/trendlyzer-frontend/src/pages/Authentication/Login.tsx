import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 


const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event : any) => {
    event.preventDefault();
    const isAuthenticated: any  = handleAuth({ username: event.email, password: event.password });
    console.log('isAuthentical', isAuthenticated)
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return ( 
    <>
    <Container component="main" maxWidth = {false} > 

      <Box
        sx={{  
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel 
            control={<Checkbox value="remember" color="success" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background:'#800080' }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{ textDecoration:'#800080', color: '#800080'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2" style={{ textDecoration:'#800080', color: '#800080'}}>
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container></>
  );
}

export default Login;
