import Who from '../../components/Landing/Who/Who';
import Ourprod from '../../components/Landing/Products/OurProd';
import Contacts from '../../components/Landing/ContactUs/Contact';
import Why from '../../components/Landing/WhyUs/Why';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.landingPage}>
      <Who></Who>
      <Ourprod></Ourprod>
      <Why></Why>
      <Contacts></Contacts>
    </div>
  );
};

export default HomePage;
