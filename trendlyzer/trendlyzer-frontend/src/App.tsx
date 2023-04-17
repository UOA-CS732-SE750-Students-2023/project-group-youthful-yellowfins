import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router';

import './App.css';
import routes from './config/routes';
import AuthProvider from './context/AuthContext';
import CountryProvider from './context/CountriesContext';
import CategoryProvider from './context/CategoryContext';

function App() {
  return (
    <AuthProvider>
      <CountryProvider>
        <CategoryProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={routes} />
          </LocalizationProvider>
        </CategoryProvider>
      </CountryProvider>
    </AuthProvider>
  );
}

export default App;
