import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Who.css';

function Who() {
  return (
    <div className='Section'>
      <NavBar></NavBar>
      <div className='Container'>
        <div className='Left'>
          <div className='Card'>
            <h1>Who we are?</h1>
            <p className='Content'>
              We at Trendlyzer will unlock the full potential of data and help you to make smarter
              decisions. Gain knowledge with our data analysis by knowing about what is trending at
              your place and across the globe. Our intuitive platform provides powerful insights and
              customizable visualizations, allowing you to extract meaningful insights and take
              action with confidence. So why to wait? Join a community of forward-thinking
              businesses who rely on our website to transform their data into success.
            </p>
          </div>
        </div>
        <div className='Right'>
          <img className='Img' src='./img/who-pikachu.png'></img>
        </div>
      </div>
    </div>
  );
}

export default Who;
