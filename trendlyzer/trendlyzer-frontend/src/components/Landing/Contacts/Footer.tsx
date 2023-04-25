import React from 'react';
import './Footer.css';

function Footer()
{
    return (

        <div id="contacts" className= "footer">
        <div className= "container">
          <div className="row">
            <div className="col col-4">
              <h5>about velocity</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="col col-4">
              <h5>useful links</h5>
              <a href="#" className = "footerLink" >
              <i className="bi bi-telephone"></i> +64-02108912356</a>
              <a href="#" className = "footerLink" >Suspendisse nisl elit</a>
              <a href="#" className = "footerLink" >Dellentesque habitant morbi</a>
              <a href="#" className = "footerLink" >Etiam sollicitudin ipsum</a>
            </div>
            <div className="col col-4">
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