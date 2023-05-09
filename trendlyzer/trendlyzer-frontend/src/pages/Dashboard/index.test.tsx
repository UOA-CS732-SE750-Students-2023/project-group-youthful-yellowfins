import React from 'react';
import { render, screen } from '@testing-library/react';
import { CountriesContext } from '../../context/CountriesContext';
import AuthProvider from '../../context/AuthContext';
import { CategoryContext } from '../../context/CategoryContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dashboard from '.';
import { BrowserRouter } from 'react-router-dom';
import { mockCategoryContextData, mockCountryContextData } from '../../config/mockDataTesting';

describe('Dashboard page', () => {
  const { getByText } = render(
    <AuthProvider>
      <CountriesContext.Provider value={mockCountryContextData}>
        <CategoryContext.Provider value={mockCategoryContextData}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
              <Dashboard />
            </BrowserRouter>
          </LocalizationProvider>
        </CategoryContext.Provider>
      </CountriesContext.Provider>
    </AuthProvider>,
  );

  it('renders dashboard page', async () => {
    expect(getByText(/Daily Search Trends/i)).toBeTruthy();
    expect(getByText(/Real-Time Search Trends/i)).toBeTruthy();
    expect(screen.getAllByLabelText(/Country/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /New Zealand/i })).toBeTruthy();
  });
});
