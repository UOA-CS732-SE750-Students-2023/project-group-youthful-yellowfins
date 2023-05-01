import React from 'react';
// import './Product.css';
import Atropos from 'atropos/react';
import classes from '../../../pages/HomePage/HomePage.module.css';

function Products() {
  return (
    <div id="products" className={`${classes.section} ${classes.accent}`}>
      <div className={classes.container}>
        <div className={classes.sectionTitleGroup}>
          <h2 className={classes.sectionHeading}>Products</h2>
          <div className={`${classes.sectionSubheading} ${classes.offWhite}`}>We offer cutting edge products to enhance the quality of your market analysis</div>
        </div>
        <div className="row">
          <div className="col col-6">
            <div className={`${classes.whiteBox} ${classes.transparent}`}>
              {/* <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1acb41b9310a_city-scape.jpg"
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 324px, 430px" alt="" className={classes.fullwidthImage}/> */}
              <Atropos>
                {/* 
                Element with positive offset will move in same direction,
                making it appear in front of the scene
              */}
                <img src="analysis.jpg" data-atropos-offset="4"
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 310px, 430px" alt="" className={classes.fullwidthImage} />
              </Atropos>
              <h3 className={classes.whiteText}>TREND ANALYSIS</h3>
              <p className={classes.whiteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
              <a href="#" className={classes.hollowButton}>LEARN MORE</a>
            </div>
          </div>
          <div className="col col-6">
            <div className={`${classes.whiteBox} ${classes.transparent}`}>
              <Atropos>
                {/* 
                Element with positive offset will move in same direction,
                making it appear in front of the scene
              */}
                <img src="sentiment-balance.jpg" data-atropos-offset="4" 
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 310px, 430px" alt="" className={classes.fullwidthImage} />
                  </Atropos>
              {/* <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1ab359b9312c_photo-1416400639808-f41f0c149b09.jpg"
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 324px, 430px" alt="" className={classes.fullwidthImage}/> */}
              <h3 className={classes.whiteText}>SENTIMENT ANALYSIS</h3>
              <p className={classes.whiteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
              <a href="#" className={`${classes.hollowButton} ${classes.allCaps}`}>Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
