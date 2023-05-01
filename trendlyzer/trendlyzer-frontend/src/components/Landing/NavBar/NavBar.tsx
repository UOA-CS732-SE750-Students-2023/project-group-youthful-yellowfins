// import { Button } from '@mui/material';
import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router';
function NavBar() {
  
  const navigate = useNavigate();
    const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className = "navSection">
    <div className = "logoSection">
      {/* <h2> Trendlyzer</h2> */}
      <img src="homepage-logo.jpg" className = "logo-img"/>
    </div>
    <div className = "menuItemsBox">
      <a  href="#home" className = "menuItems">
        Home
      </a>
      <a href="#products" className = "menuItems">
        Products
      </a>
      <a href="#contacts" className = "menuItems">
        Contact
      </a>
      <a href="#contacts" className = "menuItems"  onClick={navigateToLogin}>
        Sign In
      </a>
    </div>
  </div>
  );
}

export default NavBar;
