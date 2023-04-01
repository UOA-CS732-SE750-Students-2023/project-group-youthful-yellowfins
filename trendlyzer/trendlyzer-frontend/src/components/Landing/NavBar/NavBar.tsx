import { Button } from '@mui/material';
import React from 'react';
import './NavBar.css';

function NavBar() {
    return(
        <div className="Section">
            <div className="Container">
                <div className="Links">
                <img className="Logo" src = "./img/trendlyzerLogo.jpeg"></img>
                <h2>Trendlyzer</h2>
                </div>
                <div className="Button-div ">
                  <Button variant="contained" color="primary">Login</Button>
                  <Button variant="contained" color="primary">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
