import React from 'react';
import './Footer.css';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

function Footer()
{
    return (

        <div id="contacts" className= "footer">
        <div className= "container">
          <div className="row">
            <div className="col col-5">
              <h5>About Us</h5>
              <p> We are a group of highly skilled and passionate individuals who share a common goal: to build innovative technology solutions that make a real difference in people lives.
              </p>
              <p>
              We are driven to push the boundaries of what`s possible and to create products that are not only technologically advanced, but also intuitive, user-friendly, and practical.
              </p>
            </div>
            <div className="col col-4">
              <h5>Contact</h5>
              <a href="#" className = "footerLink" >
              <PhoneOutlinedIcon/> +64-02108912356</a>
              <a href="#" className = "footerLink" >
              <EmailOutlinedIcon/> trendlyzerSupport@outlook.com</a>
              <a href="#" className = "footerLink" >
              <BusinessOutlinedIcon/> 
              12 Grafton Road, Auckland CBD, Auckland 1010</a>
              <a href="#" className = "footerLink" >
              <PrintOutlinedIcon/> 
              555-123-4567</a>
            </div>
            <div className="col col-3 d-flex flex-column">
              <h5>social</h5>
              <div>
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a3b71b93135_social-18.svg" 
                width="20" alt="" className="info-icon" />
                <a href="#" className= "footerLink info-icon">Twitter</a>
              </div>
              <div >
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a0b47b9311e_social-03.svg" 
                width="20" alt="" className="info-icon" />
                <a href="#" className= "footerLink info-icon">Facebook</a>
              </div>
              <div >
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a19f9b93130_social-06.svg" 
                width="20" alt="" className="info-icon" />
                <a href="#" className= "footerLink info-icon">Google</a>
              </div>
            </div>
          </div>
        </div>

        <div className = "footerCenter">
        <div className = "container">
          <div className = "footerText">Copyright Trendlyzer Inc 2023</div>
        </div>
      </div>
      </div>
      

    )
}

export default Footer;