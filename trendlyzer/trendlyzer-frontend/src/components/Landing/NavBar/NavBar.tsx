// import { Button } from '@mui/material';
import React from 'react';
import './NavBar.css';
// import { useNavigate } from 'react-router';

function NavBar() {

  return (
    <div className = "navSection">
    <div className = "companyTitle">
      <h2> Trendlyzer</h2>
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
    </div>
  </div>
  );
}

export default NavBar;
