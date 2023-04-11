import React from 'react';
import './App.css';
import Who from './components/Landing/Who/Who';
import Ourprod from './components/Landing/Products/OurProd';
import Contacts from './components/Landing/ContactUs/Contact';
import Why from './components/Landing/WhyUs/Why';

function App() {
  return (
    <div className="App">
      <Who></Who>
      <Ourprod></Ourprod>
      <Why></Why>
      <Contacts></Contacts>
    </div>
    
  );
}

export default App;

