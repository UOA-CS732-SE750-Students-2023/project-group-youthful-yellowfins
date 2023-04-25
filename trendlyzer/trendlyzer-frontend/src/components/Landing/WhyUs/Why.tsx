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
              <div className={`${classes.whiteBox} ${classes.pop}`}>
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a6bf8b930f3_feather-15-white.svg" alt="" className={classes.gridImage} />
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="col col-4">
              <div className={classes.whiteBox}>
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1abad7b93103_feather2-17-white.svg" width="210" alt="" className={classes.gridImage} />
                <h3>Awesome code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="col col-4">
              <div className={classes.whiteBox}>
                <img src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1aa9b8b9312b_feather2-22-white.svg" alt="" className={classes.gridImage} />
                <h3>free template</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Why;
