import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router';

import './App.css';
import routes from './config/routes';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={routes} />
      </LocalizationProvider>
    </AuthProvider>
  );

export default App;
