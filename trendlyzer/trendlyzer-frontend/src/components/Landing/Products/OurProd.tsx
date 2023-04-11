import React from 'react';
import './OurProd.css';

function Ourprod() {
  return (
    <div className='Section'>
      <div className='Container'>
        <div className='Right'>
          <div className='Card'>
            <h1>Our products</h1>
            <h2>Trend research</h2>
            <ul className='List'>
              <li> Browse across the globe</li>
              <li> In your language</li>
              <li> Know in detail of it is excalty.</li>
            </ul>
            <h2>Sentimental analysis</h2>
            <ul className='List'>
              <li> What people across globe think of it?</li>
              <li> Is it posiitve or negative? </li>
              <li> Export at your comfort.</li>
              <li> In pdf, xcel, csv format</li>
            </ul>
          </div>
        </div>
        <div className='Left'>
            <img className='Img' src='./img/jiggle.png'></img>
          </div>
      </div>
    </div>
  );
}

export default Ourprod;
