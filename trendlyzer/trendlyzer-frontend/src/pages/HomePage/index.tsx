// import Who from '../../components/Landing/Who/Who';
// import Why from '../../components/Landing/WhyUs/Why';
import classes from './HomePage.module.css';
import NavBar from '../../components/Landing/NavBar/NavBar';
import Products from '../../components/Landing/Products/Products';
import Footer from '../../components/Landing/Contacts/Footer';
import Why from '../../components/Landing/WhyUs/Why';
import { useNavigate } from 'react-router';



const HomePage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToRegister = () => {
    navigate('/register');
  };
  return (

    <div id="home" className={classes.main}>
      <NavBar></NavBar>
      <div className={`${classes.heroSection} ${classes.centered}`}>
        <div className={classes.container}>
          <h1 data-ix="fade-in-bottom-page-loads" className={classes.heroHeading} >Welcome Trendlyzers</h1>
          <div data-ix="fade-in-bottom-page-loads" className={classes.heroSubheading} >
          Your Place to Analyse Sentiments Behind the Buzzing Topics
          </div>
          <div data-ix="fade-in-bottom-page-loads">
            <a href="#" className={classes.button} onClick={navigateToRegister} >
              Sign Up
            </a>
            <a href="#" className={`${classes.hollowButton} ${classes.allCaps}`} onClick={navigateToLogin}>
              Log In
            </a>
          </div>
        </div>
      </div>
      <Why></Why>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
