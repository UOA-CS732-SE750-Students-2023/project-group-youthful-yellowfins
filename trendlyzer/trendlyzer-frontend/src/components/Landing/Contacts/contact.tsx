import React from 'react';
import NavBar from '../NavBar/NavBar';
import './contact.module.css';
import { Card, CardContent, Typography} from '@mui/material';

function contact()
{
    return (
        <div className="Section">
          <div className="Container">
              <div className="Bottom">
                <div className="contact-card">
                   <p>Name: Trendlyzer</p>
                   <p>Phone: (123) 456-7890</p>
                   <p>Email: trendlyzer@example.com</p>
                   <a href="mailto:trendlyzer@example.com">Send us an email</a>
                </div>
               </div>
           </div>
        </div>
    )
}

export default contact;