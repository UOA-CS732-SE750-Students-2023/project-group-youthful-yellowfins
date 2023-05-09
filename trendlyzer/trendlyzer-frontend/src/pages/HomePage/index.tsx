/**
 * Author:  Shubham Gujare
 * Created: 01.05.2023
 * Purpose: This files serves as a default home page to the 
 * application and demonstrates the features of the application in a attractive ui ux manner
 **/

import { useContext, useEffect } from 'react';
import classes from './HomePage.module.css';
import NavBar from '../../components/Landing/NavBar/NavBar';
import Products from '../../components/Landing/Products/Products';
import Footer from '../../components/Landing/Contacts/Footer';
import Why from '../../components/Landing/WhyUs/Why';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Atropos from 'atropos/react';

import Loader from '../../components/UIComponents/Loader/LoaderComponent';

const HomePage = () => {
  const {
    auth: { isAuthenticated, loading },
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div id='home' className={classes.main}>
          <NavBar></NavBar>
          <div className={classes.heroSection}>
        <div className={classes.leftSection} >
          <h1 className={classes.pageTitle}>Welcome, Trendlyzers</h1>
          <h4 className={classes.subTitle}>Your place to deep dive down into the analytics and sentiments behind the buzzing topics !</h4>
          <button className={classes.getStartedBtn}
           onClick={navigateToRegister}> Get Started</button>
        </div>
        <div className={classes.rightSection}>
        <Atropos>
            <img style={{ height: '675px'}} src= "main-theme.jpg" data-atropos-offset="-5"  />
        </Atropos>
        </div>
          </div>
          <Why></Why>
          <Products></Products>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default HomePage;
