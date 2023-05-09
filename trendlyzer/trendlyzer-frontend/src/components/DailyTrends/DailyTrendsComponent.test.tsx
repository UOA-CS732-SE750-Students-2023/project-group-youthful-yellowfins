import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthProvider from '../../context/AuthContext';
import { CountriesContext } from '../../context/CountriesContext';
import { CategoryContext } from '../../context/CategoryContext';
import DailyTrendsComponent from './DailyTrendsComponent';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { mockCategoryContextData, mockCountryContextData } from '../../config/mockDataTesting';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter } from 'react-router-dom';

describe('DailyTrendsComponent', () => {
  it('renders DailyTrendsDetailsComponent when country and date selected', () => {
    const handleCountryChange = jest.fn();
    render(
      <AuthProvider>
        <CountriesContext.Provider value={mockCountryContextData}>
          <CategoryContext.Provider value={mockCategoryContextData}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <BrowserRouter>
                <DailyTrendsComponent />
              </BrowserRouter>
            </LocalizationProvider>
          </CategoryContext.Provider>
        </CountriesContext.Provider>
      </AuthProvider>,
    );
    const dateInput = screen.getByLabelText('Date');
    expect(screen.getByRole('button', { name: /New Zealand/i })).toBeTruthy();
    userEvent.type(dateInput, '2023-05-07');
  });
});
