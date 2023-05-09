import React from 'react';
import './Why.css';
import classes from '../../../pages/HomePage/HomePage.module.css';


function Why() {
    return(
     <div className={classes.section}>
        <div className={classes.whatWeDoContainer}>
          <div className={classes.sectionTitleGroup}>
            <h2 className={classes.sectionHeading}>what we do</h2>
            <div className={classes.sectionSubheading}> We Trendlyzer will unlock the full potential of the data and help you to make smarter
              decisions, gain knowledge with our data analysis by knowing about what is trending at
              your place or across globe.</div>
          </div><div className="row">
          <div className="col col-4">
              <div className={classes.whiteBox}>
                <img src="decode-sentiments.png" width="210" height="132" alt="" className={classes.gridImage}  />
                <h3>Decode Sentiments</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="col col-4">
              <div className={`${classes.whiteBox} ${classes.pop}`}>
                <img src="trends.jpg"   width="210" height="132" alt="" className={classes.gridImage} />
                <h3>Explore Trends</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="col col-4">
              <div className={classes.whiteBox}>
                <img src="stats.jpg" alt="" height="132" width="210" className={classes.gridImage} />
                <h3>Market Analysis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros  elementum tristique.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
}

export default Why;
