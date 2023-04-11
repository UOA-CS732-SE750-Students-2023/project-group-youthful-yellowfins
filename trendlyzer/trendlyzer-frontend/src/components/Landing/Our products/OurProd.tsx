import React from 'react';
import NavBar from '../NavBar/NavBar';
import './OurProd.css';
import { Card, CardContent, Typography} from '@mui/material';

function Ourprod() {
    return(
        <div className="Section">
            <div className="Container">
                <div className="Left">
                    <div className="card">
                     <h1>Our products</h1>
                     <p>Trend research 
                         |- Browse across the globe
                         |- In your language
                         |- Know in detail of it is excalty. <br>
                        Sentimental analysis
                         |- What people across globe think of it?
                         |- Is it posiitve or negative? </br>
                        Export at your comfort
                         |- In pdf, xcel, csv format

                     </p>
                    </div>
                </div>
                   <div className="Right">
                   <div className= "Container1">
                        <img className="Img" src = "./img/OurProd.png"></img>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Ourprod;
