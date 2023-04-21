import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router';
import routes from './config/routes';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;


