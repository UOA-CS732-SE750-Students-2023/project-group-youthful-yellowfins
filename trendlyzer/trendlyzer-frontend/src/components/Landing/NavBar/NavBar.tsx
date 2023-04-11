import { Button } from '@mui/material';
import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router';

function NavBar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('../Login');
  };
  return (
    <div className='Section'>
      <div className='Container'>
        <div className='Links'>
          <img className='Logo' src='./img/trendlyzerLogo.jpeg'></img>
          <h2>Trendlyzer</h2>
        </div>
        <div className='Button-div '>
          <Button onClick={navigateToLogin} variant='contained' color='primary'>
            Login
          </Button>
          <Button variant='contained' color='primary'>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
