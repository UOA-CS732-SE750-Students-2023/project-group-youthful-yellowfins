import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Who.css';

function Who() {
    return(
        <div className="Section">
            <NavBar></NavBar>
            <div className="Container">
                <div className="Left">
                    <h1>Who we are?</h1>
                    <p>We the Trendlyzer</p>
                </div>
                <div className="Right">
                        <img className="Img" src = "./img/who-pikachu.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Who;
