import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryProvider from '../../context/CountriesContext';
import AuthProvider from '../../context/AuthContext';
import CategoryProvider from '../../context/CategoryContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dashboard from '.';
import { BrowserRouter } from 'react-router-dom';

describe('<Dashboard page />', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <CountryProvider>
          <CategoryProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <BrowserRouter>
                <Dashboard />
              </BrowserRouter>
            </LocalizationProvider>
          </CategoryProvider>
        </CountryProvider>
      </AuthProvider>,
    );
  });

  it('has daily trend search', () => {
    expect(screen.getByText(/Daily search trends/i)).toBeTruthy();
  });

  it('has daily trend search', () => {
    expect(screen.getByText(/Real-time search trends/i)).toBeTruthy();
  });
});
