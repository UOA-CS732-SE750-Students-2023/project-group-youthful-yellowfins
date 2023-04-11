import React from 'react';
import './App.css';
import Who from './components/Landing/Who/Who';
import Ourprod from './components/Landing/Our products/OurProd';
import Contacts from './components/Landing/Contacts/contact';

function App() {
  return (
    <div className="App">
      <Who></Who>
      <Ourprod></Ourprod>
      <Contacts></Contacts>
    </div>
    
  );
}

export default App;

